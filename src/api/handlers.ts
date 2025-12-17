// Mock API handlers - replace with actual serverless functions or backend endpoints

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

interface NewsletterData {
  email: string
}

/**
 * Mock contact form handler
 * In production, replace this with actual API call to serverless function (Vercel, AWS Lambda, etc.)
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Validate data
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields" }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Invalid email format" }
    }

    console.log("[v0] Contact form submitted:", data)

    // In production, send to email service or webhook
    // Example with Vercel Mailgun:
    // await fetch('/.netlify/functions/send-email', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })

    return { success: true }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

/**
 * Mock newsletter subscription handler
 * In production, replace with actual subscription service (Mailchimp, Substack, etc.)
 */
export async function submitNewsletter(data: NewsletterData): Promise<{ success: boolean; error?: string }> {
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Invalid email format" }
    }

    console.log("[v0] Newsletter subscription:", data.email)

    // In production, integrate with email service
    // Example with Mailchimp API:
    // const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email_address: data.email,
    //     status: 'subscribed'
    //   })
    // })

    return { success: true }
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return { success: false, error: "Failed to subscribe" }
  }
}
