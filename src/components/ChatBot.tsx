"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, Bot, User, Calendar, ArrowLeft, History, Trash2, Copy, Check, Square, ArrowUpRight, Briefcase, Phone, HelpCircle, Zap, MessageSquare } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { streamMessageToAI, ChatMessage, NAVIGATION_ROUTES } from "../lib/gemini"
import {
    saveConversation,
    getConversations,
    deleteConversation as mongoDeleteConversation,
    clearAllConversations,
    migrateLocalStorageToMongo,
    ConversationDocument
} from "../lib/mongoService"

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || ""

interface ConversationHistory {
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: string;
}

// Quick action chips for the welcome screen
const QUICK_ACTIONS = [
    { icon: Zap, label: 'Services', path: '/services', gradient: 'from-blue-500 to-cyan-400' },
    { icon: Calendar, label: 'Book Demo', path: '/demo', gradient: 'from-red-500 to-orange-400' },
    { icon: Briefcase, label: 'Careers', path: '/careers', gradient: 'from-purple-500 to-pink-400' },
    { icon: Phone, label: 'Contact', path: '/contact', gradient: 'from-green-500 to-emerald-400' },
    { icon: HelpCircle, label: 'Why Us', path: '/why-us', gradient: 'from-amber-500 to-yellow-400' },
]

// Suggested conversation starters
const CONVERSATION_STARTERS = [
    "What services do you offer?",
    "Tell me about your accelerators",
    "How can I schedule a demo?",
    "What makes FDI different?",
]

// Parse navigation actions from AI responses
interface NavigationAction {
    path: string;
    label: string;
}

function parseNavigationActions(content: string): { cleanContent: string; actions: NavigationAction[] } {
    const navPattern = /\[NAV:(\/[^\]|]+)\|([^\]]+)\]/g
    const actions: NavigationAction[] = []
    let match

    while ((match = navPattern.exec(content)) !== null) {
        actions.push({ path: match[1], label: match[2] })
    }

    const cleanContent = content.replace(navPattern, '').trim()
    return { cleanContent, actions }
}

// Animated typing indicator with bouncing dots
function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 px-3 py-2">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-red-400"
                    animate={{
                        y: [0, -6, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}

// Navigation action button component with glow effect
function NavigationButton({ action, onClick }: { action: NavigationAction; onClick: (path: string) => void }) {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onClick(action.path)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white transition-all cursor-pointer"
            style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(220, 38, 38, 0.35) 100%)',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
        >
            <ArrowUpRight size={14} className="text-red-300" />
            {action.label}
        </motion.button>
    )
}

// Message component with premium styling
function MessageBubble({
    msg,
    onCopy,
    onNavigate,
    index
}: {
    msg: ChatMessage;
    onCopy: (text: string) => void;
    onNavigate: (path: string) => void;
    index: number;
}) {
    const [copied, setCopied] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const { cleanContent, actions } = msg.role === 'assistant'
        ? parseNavigationActions(msg.content)
        : { cleanContent: msg.content, actions: [] }

    const handleCopy = () => {
        onCopy(cleanContent)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const timeString = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''

    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.05
            }}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''} group`}
            onMouseEnter={() => setShowTime(true)}
            onMouseLeave={() => setShowTime(false)}
        >
            {/* Avatar with glow */}
            <motion.div
                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                    }`}
                style={{
                    boxShadow: msg.role === 'user'
                        ? '0 4px 12px rgba(59, 130, 246, 0.3)'
                        : '0 4px 12px rgba(239, 68, 68, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
            >
                {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
            </motion.div>

            <div className="max-w-[78%] relative">
                {/* Message bubble with premium styling */}
                <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-md'
                        : 'rounded-tl-md text-gray-100'
                        }`}
                    style={msg.role === 'assistant' ? {
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
                    } : {
                        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.25)'
                    }}
                >
                    {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-headings:text-white prose-strong:text-white">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleanContent}</ReactMarkdown>
                        </div>
                    ) : cleanContent}
                </div>

                {/* Timestamp */}
                <AnimatePresence>
                    {showTime && timeString && (
                        <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className={`absolute -bottom-5 text-[10px] text-gray-500 ${msg.role === 'user' ? 'right-0' : 'left-0'}`}
                        >
                            {timeString}
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Navigation action buttons */}
                {actions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 mt-3"
                    >
                        {actions.map((action, idx) => (
                            <NavigationButton key={idx} action={action} onClick={onNavigate} />
                        ))}
                    </motion.div>
                )}

                {/* Copy button */}
                {msg.role === 'assistant' && cleanContent.length > 0 && (
                    <motion.button
                        onClick={handleCopy}
                        className="absolute -bottom-6 right-0 opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {copied ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
                        {copied ? 'Copied!' : 'Copy'}
                    </motion.button>
                )}
            </div>
        </motion.div>
    )
}

export default function ChatBot() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [streamingContent, setStreamingContent] = useState("")
    const [showHistory, setShowHistory] = useState(false)
    const [conversationHistory, setConversationHistory] = useState<ConversationHistory[]>([])
    const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
    const [inputFocused, setInputFocused] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Handle navigation action - navigates and closes chatbot
    const handleNavigate = useCallback((path: string) => {
        setIsOpen(false)
        navigate(path)
    }, [navigate])

    // Load history on mount and migrate localStorage data to MongoDB
    useEffect(() => {
        const loadHistory = async () => {
            // First, attempt to migrate any localStorage data to MongoDB
            await migrateLocalStorageToMongo()
            // Then load conversations from MongoDB (with localStorage fallback)
            const conversations = await getConversations()
            setConversationHistory(conversations as ConversationHistory[])
        }
        loadHistory()
    }, [])

    // Save conversation to MongoDB when messages change
    useEffect(() => {
        if (currentConversationId && messages.length > 0) {
            const conversation = conversationHistory.find(c => c.id === currentConversationId)
            if (conversation) {
                const updatedConversation: ConversationDocument = {
                    ...conversation,
                    messages,
                    title: messages[0]?.content?.substring(0, 30) + '...'
                }
                saveConversation(updatedConversation)
            }
        }
    }, [messages, currentConversationId, conversationHistory])

    // Update current conversation
    useEffect(() => {
        if (messages.length > 0 && currentConversationId) {
            setConversationHistory(prev => prev.map(c =>
                c.id === currentConversationId
                    ? { ...c, messages, title: messages[0]?.content?.substring(0, 30) + '...' }
                    : c
            ))
        }
    }, [messages, currentConversationId])

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    useEffect(() => { scrollToBottom() }, [messages, streamingContent, scrollToBottom])
    useEffect(() => { if (isOpen && inputRef.current && !showHistory) inputRef.current.focus() }, [isOpen, showHistory])

    const startNewConversation = async () => {
        const newId = Date.now().toString()
        const newConv: ConversationHistory = { id: newId, title: 'New Chat', messages: [], createdAt: new Date().toISOString() }
        setConversationHistory(prev => [newConv, ...prev])
        setCurrentConversationId(newId)
        setMessages([])
        setShowHistory(false)
        // Save to MongoDB
        await saveConversation(newConv as ConversationDocument)
    }

    const loadConversation = (conv: ConversationHistory) => {
        setCurrentConversationId(conv.id)
        setMessages(conv.messages)
        setShowHistory(false)
    }

    const handleDeleteConversation = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setConversationHistory(prev => prev.filter(c => c.id !== id))
        if (currentConversationId === id) { setMessages([]); setCurrentConversationId(null) }
        // Delete from MongoDB
        await mongoDeleteConversation(id)
    }

    const handleClearAllHistory = async () => {
        setConversationHistory([])
        setMessages([])
        setCurrentConversationId(null)
        // Clear all from MongoDB
        await clearAllConversations()
    }

    const handleCopyMessage = (text: string) => { navigator.clipboard.writeText(text) }

    const handleSendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return

        if (!currentConversationId) {
            const newId = Date.now().toString()
            const newConv: ConversationHistory = { id: newId, title: text.substring(0, 30) + '...', messages: [], createdAt: new Date().toISOString() }
            setConversationHistory(prev => [newConv, ...prev])
            setCurrentConversationId(newId)
        }

        const userMessage: ChatMessage = { role: "user", content: text.trim(), timestamp: new Date() }
        const updatedMessages = [...messages, userMessage]
        setMessages(updatedMessages)
        setInputValue("")
        setIsLoading(true)
        setStreamingContent("")

        let fullResponse = ''
        try {
            for await (const chunk of streamMessageToAI(updatedMessages, API_KEY)) {
                fullResponse += chunk
                setStreamingContent(fullResponse)
            }
            setMessages(prev => [...prev, { role: "assistant", content: fullResponse, timestamp: new Date() }])
        } catch (error) {
            console.error('Stream error:', error)
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again.", timestamp: new Date() }])
        }

        setStreamingContent("")
        setIsLoading(false)
    }

    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); handleSendMessage(inputValue) }
    const goBack = () => { if (showHistory) setShowHistory(false); else { setMessages([]); setCurrentConversationId(null) } }

    return (
        <>
            {/* Floating Chat Button with Glow Animation */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 0 : 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-2xl active:scale-95 transition-transform group"
                style={{
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
                }}
                aria-label="Open chat"
            >
                {/* Glow ring animation */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}
                    animate={{
                        boxShadow: [
                            '0 0 20px rgba(239, 68, 68, 0.4)',
                            '0 0 35px rgba(239, 68, 68, 0.6)',
                            '0 0 20px rgba(239, 68, 68, 0.4)',
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <MessageCircle size={24} className="relative z-10" />

                {/* Notification badge hint */}
                <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.button>

            {/* Chat Panel - Premium Design */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed z-[9999] overflow-hidden flex flex-col bottom-20 right-4 left-4 h-[65vh] max-h-[520px] rounded-3xl sm:left-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[560px] sm:max-h-[75vh]"
                        style={{
                            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.97) 0%, rgba(3, 7, 18, 0.98) 100%)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
                        }}
                    >
                        {/* Header with Gradient */}
                        <div
                            className="flex items-center justify-between px-4 py-3"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
                                borderBottom: '1px solid rgba(255,255,255,0.06)'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                {(showHistory || messages.length > 0) && (
                                    <motion.button
                                        onClick={goBack}
                                        className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ArrowLeft size={16} />
                                    </motion.button>
                                )}
                                <motion.div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                        boxShadow: '0 4px 16px rgba(239, 68, 68, 0.35)'
                                    }}
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                >
                                    <Sparkles size={18} className="text-white" />
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm tracking-tight">{showHistory ? 'Chat History' : 'FDI Assistant'}</h3>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <motion.span
                                            className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-400' : 'bg-emerald-400'}`}
                                            animate={isLoading ? { opacity: [1, 0.5, 1] } : {}}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                        {isLoading ? 'Thinking...' : 'Online'}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {!showHistory && (
                                    <motion.button
                                        onClick={() => setShowHistory(true)}
                                        className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <History size={16} />
                                    </motion.button>
                                )}
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X size={16} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            <AnimatePresence mode="wait">
                                {showHistory ? (
                                    <motion.div
                                        key="history"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="p-4 space-y-2"
                                    >
                                        <motion.button
                                            onClick={startNewConversation}
                                            className="w-full p-3 rounded-xl text-sm text-white font-medium flex items-center gap-3"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)',
                                                border: '1px solid rgba(239, 68, 68, 0.3)'
                                            }}
                                            whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)' }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            <MessageSquare size={16} className="text-red-400" />
                                            Start New Chat
                                        </motion.button>

                                        {conversationHistory.length > 0 && (
                                            <button
                                                onClick={handleClearAllHistory}
                                                className="w-full p-2 text-xs text-gray-500 hover:text-red-400 flex items-center justify-center gap-1 transition-colors"
                                            >
                                                <Trash2 size={12} />
                                                Clear All History
                                            </button>
                                        )}

                                        <div className="space-y-2 mt-3">
                                            {conversationHistory.map((conv, idx) => (
                                                <motion.button
                                                    key={conv.id}
                                                    onClick={() => loadConversation(conv)}
                                                    className="w-full p-3 rounded-xl text-left text-sm text-gray-300 hover:text-white group transition-all"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        border: '1px solid rgba(255, 255, 255, 0.05)'
                                                    }}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    whileHover={{
                                                        background: 'rgba(255, 255, 255, 0.06)',
                                                        borderColor: 'rgba(255, 255, 255, 0.1)'
                                                    }}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <span className="truncate text-xs font-medium">{conv.title}</span>
                                                        <motion.button
                                                            onClick={(e) => handleDeleteConversation(conv.id, e)}
                                                            className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 p-1 transition-all"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Trash2 size={12} />
                                                        </motion.button>
                                                    </div>
                                                    <span className="text-[10px] text-gray-500 mt-1 block">
                                                        {new Date(conv.createdAt).toLocaleDateString()}
                                                    </span>
                                                </motion.button>
                                            ))}
                                        </div>

                                        {conversationHistory.length === 0 && (
                                            <div className="text-center text-gray-500 py-12">
                                                <History size={32} className="mx-auto mb-3 opacity-50" />
                                                <p className="text-sm">No chat history yet</p>
                                                <p className="text-xs text-gray-600 mt-1">Start a conversation to see it here</p>
                                            </div>
                                        )}
                                    </motion.div>
                                ) : messages.length === 0 && !streamingContent ? (
                                    <motion.div
                                        key="welcome"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center h-full p-5 text-center"
                                    >
                                        {/* Animated Avatar */}
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center relative"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)',
                                                border: '1px solid rgba(239, 68, 68, 0.25)'
                                            }}
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px rgba(239, 68, 68, 0.1)',
                                                    '0 0 30px rgba(239, 68, 68, 0.2)',
                                                    '0 0 20px rgba(239, 68, 68, 0.1)',
                                                ]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <Bot size={28} className="text-red-400" />
                                        </motion.div>

                                        {/* Gradient Title */}
                                        <motion.h4
                                            className="text-xl font-bold mb-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            Hi! I'm FDI Assistant
                                        </motion.h4>
                                        <motion.p
                                            className="text-gray-400 text-sm mb-5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            Ask me anything or try these:
                                        </motion.p>

                                        {/* Conversation Starters */}
                                        <div className="w-full space-y-2 mb-5">
                                            {CONVERSATION_STARTERS.map((starter, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + idx * 0.08 }}
                                                    onClick={() => handleSendMessage(starter)}
                                                    className="w-full p-3 rounded-xl text-left text-sm text-gray-300 hover:text-white transition-all flex items-center gap-3 group"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        border: '1px solid rgba(255, 255, 255, 0.06)'
                                                    }}
                                                    whileHover={{
                                                        x: 4,
                                                        background: 'rgba(239, 68, 68, 0.08)',
                                                        borderColor: 'rgba(239, 68, 68, 0.2)'
                                                    }}
                                                >
                                                    <MessageCircle size={14} className="text-red-400/60 group-hover:text-red-400 transition-colors" />
                                                    {starter}
                                                </motion.button>
                                            ))}
                                        </div>

                                        {/* Quick Nav Chips */}
                                        <motion.p
                                            className="text-gray-500 text-xs mb-3"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            Or navigate directly:
                                        </motion.p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {QUICK_ACTIONS.map((action, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 + idx * 0.05 }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleNavigate(action.path)}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white transition-all"
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    }}
                                                >
                                                    <action.icon size={12} className="opacity-80" />
                                                    {action.label}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="messages"
                                        className="p-4 space-y-5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {messages.map((msg, i) => (
                                            <MessageBubble
                                                key={i}
                                                msg={msg}
                                                onCopy={handleCopyMessage}
                                                onNavigate={handleNavigate}
                                                index={i}
                                            />
                                        ))}

                                        {/* Streaming with typing indicator */}
                                        {streamingContent && (
                                            <motion.div
                                                className="flex gap-2.5"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                <motion.div
                                                    className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 flex-shrink-0"
                                                    style={{ boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)' }}
                                                >
                                                    <Bot size={14} className="text-white" />
                                                </motion.div>
                                                <div
                                                    className="max-w-[78%] px-4 py-2.5 rounded-2xl rounded-tl-md text-gray-100 text-sm leading-relaxed"
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                                                        border: '1px solid rgba(255,255,255,0.08)'
                                                    }}
                                                >
                                                    <div className="prose prose-invert prose-sm max-w-none">
                                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{streamingContent}</ReactMarkdown>
                                                    </div>
                                                    <motion.span
                                                        className="inline-block w-2 h-4 bg-red-400 ml-1 rounded-sm"
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Loading indicator */}
                                        {isLoading && !streamingContent && (
                                            <motion.div
                                                className="flex gap-2.5"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                <motion.div
                                                    className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 flex-shrink-0"
                                                    style={{ boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)' }}
                                                >
                                                    <Bot size={14} className="text-white" />
                                                </motion.div>
                                                <div
                                                    className="px-4 py-3 rounded-2xl rounded-tl-md"
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                                                        border: '1px solid rgba(255,255,255,0.08)'
                                                    }}
                                                >
                                                    <TypingIndicator />
                                                </div>
                                            </motion.div>
                                        )}

                                        <div ref={messagesEndRef} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Demo CTA */}
                        {messages.length > 0 && !showHistory && !isLoading && (
                            <motion.div
                                className="px-4 pb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Link
                                    to="/demo"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium text-white transition-all hover:shadow-lg"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.15) 100%)',
                                        border: '1px solid rgba(239, 68, 68, 0.35)'
                                    }}
                                >
                                    <Calendar size={14} className="text-red-400" />
                                    Ready to see it in action? Schedule a Demo
                                </Link>
                            </motion.div>
                        )}

                        {/* Input with Focus Glow */}
                        {!showHistory && (
                            <form onSubmit={handleSubmit} className="p-4 border-t border-white/5">
                                <div
                                    className="flex gap-2 p-1 rounded-2xl transition-all duration-300"
                                    style={{
                                        background: inputFocused
                                            ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(255,255,255,0.05) 100%)'
                                            : 'rgba(255, 255, 255, 0.03)',
                                        border: inputFocused
                                            ? '1px solid rgba(239, 68, 68, 0.3)'
                                            : '1px solid rgba(255, 255, 255, 0.08)',
                                        boxShadow: inputFocused
                                            ? '0 0 20px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
                                            : 'none'
                                    }}
                                >
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onFocus={() => setInputFocused(true)}
                                        onBlur={() => setInputFocused(false)}
                                        placeholder="Type your message..."
                                        className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                                        disabled={isLoading}
                                    />
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading || !inputValue.trim()}
                                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-all"
                                        style={{
                                            background: inputValue.trim()
                                                ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                                                : 'rgba(255,255,255,0.1)',
                                            boxShadow: inputValue.trim() ? '0 4px 16px rgba(239, 68, 68, 0.35)' : 'none'
                                        }}
                                        whileHover={inputValue.trim() ? { scale: 1.05 } : {}}
                                        whileTap={inputValue.trim() ? { scale: 0.95 } : {}}
                                    >
                                        {isLoading ? <Square size={14} /> : <Send size={16} />}
                                    </motion.button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
