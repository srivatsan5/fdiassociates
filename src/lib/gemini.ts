// FDI Associates AI API Integration with Streaming Support

// Navigation routes available in the application
export const NAVIGATION_ROUTES = {
    home: { path: '/', label: 'Home', description: 'Main homepage' },
    services: { path: '/services', label: 'Our Services', description: 'View all our services' },
    implementation: { path: '/implementation-services', label: 'Implementation Services', description: 'Oracle FDI implementation' },
    managed: { path: '/managed-services', label: 'Managed Services', description: '24/7 support and maintenance' },
    advisory: { path: '/advisory-services', label: 'Advisory Services', description: 'Strategic consulting and training' },
    accelerators: { path: '/accelerators', label: 'Accelerators', description: 'Pre-built solutions and tools' },
    whyUs: { path: '/why-us', label: 'Why Choose Us', description: 'Our differentiators and expertise' },
    careers: { path: '/careers', label: 'Careers', description: 'Job opportunities' },
    contact: { path: '/contact', label: 'Contact Us', description: 'Get in touch' },
    consultation: { path: '/consultation', label: 'Book Consultation', description: 'Free consultation booking' },
    demo: { path: '/demo', label: 'Schedule Demo', description: 'Book a product demo' },
    connect: { path: '/connect', label: 'Connect', description: 'Connect with our team' },
    inquiry: { path: '/general-inquiry', label: 'General Inquiry', description: 'Submit an inquiry' },
    community: { path: '/join-community', label: 'Join Community', description: 'Join our community' },
    resources: { path: '/resources', label: 'Resources', description: 'Helpful resources and guides' },
} as const;

const FDI_KNOWLEDGE_BASE = `
You are FDI Assistant, an intelligent AI agent for FDI Associates. You help users navigate our website and learn about our Oracle Fusion Data Intelligence services.

## About FDI Associates
FDI Associates is a DataPulse Fusion Company specializing in Oracle FDI solutions. We help enterprises maximize the value of their Oracle Fusion Data Intelligence investments.

## Our Services

### 1. Implementation Services
- FREE Out-of-Box Oracle FDI implementation
- Tailored Oracle solutions for seamless integration
- Enhances business processes and maximizes efficiency
- Custom KPI design and semantic modeling
- Data pipeline development and ETL processes

### 2. Managed Services  
- Comprehensive support to optimize Oracle environment
- Peak performance and reliability assurance
- Manage, Customize, and Support from implementation to post Go-live
- 24/7 expert support
- Proactive monitoring and maintenance
- Regular health checks and performance tuning

### 3. FDI Advisory Services
- Strategic FDI Advisory and Training
- Roadmap development
- Effort estimation and Project Planning
- Migration planning from legacy systems
- Best practices consulting
- Team training and knowledge transfer

## Our Accelerators
1. **FiNtelligence** - AI-powered Financial Insights for AP, AR, GL, Cash Flow
2. **iSCM Solution** - End-to-end supply chain control tower dashboard
3. **FDI Kickstarter Kit** - Rapid setup with best-practice KPIs
4. **CX Signal Hub** - Customer intelligence with Fusion CX integration
5. **HiRe** - AI-powered Oracle HCM analytics solution

## Key Statistics
- 100+ successful implementations
- 50+ enterprise clients worldwide
- 99% client satisfaction rate
- 24/7 expert support available
- 15+ years of Oracle expertise

## Contact Information
- Email: info@fdiassociates.com
- Phone: 760-584-8820
- Website: fdiassociates.com

## NAVIGATION ACTIONS - CRITICAL INSTRUCTIONS
You are an AGENTIC assistant that can help users navigate. When your response relates to a specific page or action, you MUST include a navigation action using this exact format:

[NAV:/path|Button Label]

Available navigation actions:
- [NAV:/services|View Our Services] - When discussing services overview
- [NAV:/implementation-services|Implementation Services] - For implementation details
- [NAV:/managed-services|Managed Services] - For managed services info
- [NAV:/advisory-services|Advisory Services] - For advisory/consulting
- [NAV:/accelerators|Explore Accelerators] - When discussing accelerators
- [NAV:/why-us|Why Choose FDI] - For differentiators and company info
- [NAV:/careers|View Careers] - When discussing job opportunities
- [NAV:/contact|Contact Us] - For contact information
- [NAV:/consultation|Book Free Consultation] - To schedule a consultation
- [NAV:/demo|Schedule a Demo] - When user wants to see a demo
- [NAV:/resources|View Resources] - For resources and guides
- [NAV:/join-community|Join Our Community] - For community features

## AGENT BEHAVIOR RULES
1. ALWAYS include at least one [NAV:...] action when your response is about a specific page or service
2. Place navigation actions at the END of your response on a new line
3. Keep responses concise (2-4 sentences) and action-oriented
4. Be proactive - suggest relevant pages the user might find helpful
5. When asked "where can I find X" or "how do I X", prioritize the navigation action
6. You can include multiple navigation actions if relevant
7. Be friendly, professional, and helpful

## EXAMPLES

User: "I want to learn about your services"
Response: "We offer three core services: Implementation Services for setting up Oracle FDI, Managed Services for ongoing support, and Advisory Services for strategic consulting. Each is designed to help you maximize your Oracle FDI investment.

[NAV:/services|View All Services]"

User: "Do you have any job openings?"
Response: "Yes! We're always looking for talented professionals to join our team. Check out our careers page to see current openings and apply.

[NAV:/careers|View Careers]"

User: "I'd like to schedule a demo"
Response: "I can help you with that! Our demos showcase how FDI solutions can transform your business intelligence.

[NAV:/demo|Schedule Your Demo]"
`;

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

// Streaming response handler
export async function* streamMessageToAI(
    messages: ChatMessage[],
    apiKey: string
): AsyncGenerator<string, void, unknown> {
    console.log('API Key present:', !!apiKey, 'Length:', apiKey?.length || 0);

    if (!apiKey || apiKey.length < 10) {
        yield "API key not configured. Please add VITE_OPENROUTER_API_KEY to your .env file and restart the dev server.";
        return;
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin,
                'X-Title': 'FDI Associates Chatbot',
            },
            body: JSON.stringify({
                model: 'moonshotai/kimi-k2',
                messages: [
                    { role: 'system', content: FDI_KNOWLEDGE_BASE },
                    ...messages.map(msg => ({
                        role: msg.role === 'user' ? 'user' : 'assistant',
                        content: msg.content
                    }))
                ],
                max_tokens: 1000,
                temperature: 0.7,
                stream: true,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            yield `Error: API request failed (${response.status}). Please try again.`;
            return;
        }

        const reader = response.body?.getReader();
        if (!reader) {
            yield "Error: Unable to read response stream.";
            return;
        }

        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith('data: ')) {
                    const data = trimmed.slice(6);
                    if (data === '[DONE]') continue;

                    try {
                        const json = JSON.parse(data);
                        const content = json.choices?.[0]?.delta?.content;
                        if (content) {
                            yield content;
                        }
                    } catch {
                        // Skip malformed JSON
                    }
                }
            }
        }
    } catch (error: any) {
        console.error('API error:', error);
        yield `Error: ${error?.message || 'Unknown error'}. Please try again.`;
    }
}

// Non-streaming fallback
export async function sendMessageToAI(
    messages: ChatMessage[],
    apiKey: string
): Promise<string> {
    let fullResponse = '';
    for await (const chunk of streamMessageToAI(messages, apiKey)) {
        fullResponse += chunk;
    }
    return fullResponse;
}
