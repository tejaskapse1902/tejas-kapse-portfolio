"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Loader2, MessageCircle, SendHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type ChatRole = "assistant" | "user"

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi, I am Tejas's AI assistant. Ask me about his skills, projects, education, or experience.",
  },
]

const typingMessage: ChatMessage = {
  id: "typing",
  role: "assistant",
  content: "Thinking...",
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTopVisible(window.pageYOffset > 300)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isSending, isOpen])

  const sendMessage = async () => {
    const question = input.trim()
    if (!question || isSending) {
      return
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: question,
    }

    setInput("")
    setMessages((prev) => [...prev, userMessage])
    setIsSending(true)

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = (await response.json()) as { answer?: string }
      const answer =
        typeof data.answer === "string" && data.answer.trim()
          ? data.answer.trim()
          : "Sorry, I could not generate a response right now."

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: answer,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content:
            "I am unable to connect right now. Please try again in a moment.",
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage()
  }

  const panelBottomClass = isScrollTopVisible ? "bottom-24" : "bottom-8"

  return (
    <div
      className={cn(
        "fixed right-4 z-50 w-[calc(100%-2rem)] md:right-8 md:w-[380px]",
        panelBottomClass,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden border-border/70 bg-card/95 py-0 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border/70 bg-gradient-to-r from-primary/12 via-primary/7 to-transparent px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary/15 p-2">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      AI Assistant
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ask about Tejas Kapse
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-md"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chatbot"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <ScrollArea className="h-[370px] px-4 py-4">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[86%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground",
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {isSending && (
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {typingMessage.content}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              </ScrollArea>

              <div className="border-t border-border/70 bg-card/80 px-3 py-3">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <Input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Type your question..."
                    aria-label="Chat message"
                    autoComplete="off"
                    maxLength={500}
                    disabled={isSending}
                    className="h-10"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-10 w-10 rounded-md"
                    disabled={isSending || !input.trim()}
                    aria-label="Send message"
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="chat-trigger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex justify-end"
          >
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg"
              aria-label="Open chatbot"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

