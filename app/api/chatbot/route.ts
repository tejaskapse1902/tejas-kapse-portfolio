import { NextResponse } from "next/server"

const DEFAULT_CHATBOT_API_URL = "http://127.0.0.1:8000/chat"

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as { message?: unknown }
    const message =
      typeof data.message === "string" ? data.message.trim() : ""

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      )
    }

    const chatbotApiUrl = process.env.CHATBOT_API_URL || DEFAULT_CHATBOT_API_URL

    const response = await fetch(chatbotApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: message }),
      cache: "no-store",
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Chatbot API error:", response.status, errorText)
      return NextResponse.json(
        { error: "Chatbot service is unavailable" },
        { status: 502 },
      )
    }

    const result = (await response.json()) as { answer?: unknown }
    const answer =
      typeof result.answer === "string" ? result.answer.trim() : ""

    if (!answer) {
      return NextResponse.json(
        { error: "Invalid chatbot response" },
        { status: 502 },
      )
    }

    return NextResponse.json({ answer })
  } catch (error) {
    console.error("Chatbot proxy error:", error)
    return NextResponse.json(
      { error: "Failed to process chatbot request" },
      { status: 500 },
    )
  }
}

