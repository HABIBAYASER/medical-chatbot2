"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Send,
  User,
  Bot,
  Heart,
  Brain,
  Ear,
  Hand,
  Baby,
  Circle,
  Users,
  Droplets,
  Calendar,
  AlertCircle,
  Stethoscope,
} from "lucide-react"
import { MedicalChatbot } from "@/lib/medical-chatbot"

const SYMPTOM_EXAMPLES = [
  { text: "ألم في الصدر", icon: Heart, color: "text-red-500" },
  { text: "صداع شديد", icon: Brain, color: "text-purple-500" },
  { text: "ألم في الأذن", icon: Ear, color: "text-blue-500" },
  { text: "حكة في الجلد", icon: Hand, color: "text-orange-500" },
  { text: "حمى عند الطفل", icon: Baby, color: "text-green-500" },
  { text: "ألم في البطن", icon: Circle, color: "text-yellow-500" },
  { text: "تأخر الدورة الشهرية", icon: Calendar, color: "text-pink-500" },
  { text: "إفرازات مهبلية", icon: Droplets, color: "text-cyan-500" },
  { text: "ألم أثناء الدورة", icon: Users, color: "text-rose-500" },
  { text: "أعراض الحمل", icon: AlertCircle, color: "text-emerald-500" },
  { text: "نزيف مهبلي", icon: Droplets, color: "text-red-400" },
  { text: "ألم في الحوض", icon: Circle, color: "text-indigo-500" },
]

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export default function MedicalChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [chatbot] = useState(() => new MedicalChatbot())
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (text: string, isBot = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const startChat = (symptom?: string) => {
    if (!showChat) {
      setShowChat(true)
      addMessage(
        "مرحباً! أنا مساعدك الطبي الذكي 🩺\n\nأخبرني عن الأعراض التي تشعر بها وسأساعدك في العثور على الطبيب المناسب وحجز موعد معه.",
        true,
      )
    }

    if (symptom) {
      setInputValue(symptom)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    addMessage(userMessage, false)
    setInputValue("")
    setIsLoading(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      const response = chatbot.processMessage(userMessage)
      addMessage(response, true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatMessageText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line
          .split("**")
          .map((part, partIndex) => (partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part))}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ))
  }

  if (showChat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800" dir="rtl">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">المساعد الطبي الذكي</h1>
                  <p className="text-sm text-white/80">احجز موعدك مع أفضل الأطباء</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => {
                  setShowChat(false)
                  setMessages([])
                  chatbot.reset()
                }}
              >
                العودة للرئيسية
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Card className="h-[600px] flex flex-col bg-white/95 backdrop-blur-sm">
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[520px] p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}>
                      {message.isBot && (
                        <Avatar className="h-8 w-8 bg-purple-600">
                          <AvatarFallback>
                            <Bot className="h-4 w-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-3 ${
                          message.isBot ? "bg-gray-100 text-gray-900" : "bg-purple-600 text-white"
                        }`}
                      >
                        <div className="text-sm leading-relaxed">{formatMessageText(message.text)}</div>
                        <div className={`text-xs mt-2 ${message.isBot ? "text-gray-500" : "text-purple-100"}`}>
                          {message.timestamp.toLocaleTimeString("ar-EG", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>

                      {!message.isBot && (
                        <Avatar className="h-8 w-8 bg-purple-600">
                          <AvatarFallback>
                            <User className="h-4 w-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <Avatar className="h-8 w-8 bg-purple-600">
                        <AvatarFallback>
                          <Bot className="h-4 w-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 rounded-lg px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-4 bg-white/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="اكتب الأعراض التي تعاني منها..."
                  className="flex-1 bg-white/80"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-3xl font-bold text-white">المساعد الطبي الذكي</h1>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">v0</span>
            </div>
          </div>
          <p className="text-white/90 text-lg">احجز موعدك مع أفضل الأطباء</p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full">
            <Stethoscope className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">مرحباً بك في المساعد الطبي</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            أخبرني عن الأعراض التي تعاني منها وسأساعدك في العثور على الطبيب المناسب
            <br />
            وحجز موعد
          </p>
        </div>

        {/* Symptoms Examples */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white text-center mb-8">أمثلة على الأعراض:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {SYMPTOM_EXAMPLES.map((symptom, index) => {
              const Icon = symptom.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
                  onClick={() => startChat(symptom.text)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon
                      className={`h-8 w-8 mx-auto mb-3 ${symptom.color} group-hover:scale-110 transition-transform`}
                    />
                    <p className="text-white font-medium text-sm">{symptom.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  startChat(inputValue)
                }
              }}
              placeholder="اكتب الأعراض التي تعاني منها..."
              className="flex-1 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0"
            />
            <Button
              onClick={() => startChat(inputValue)}
              className="bg-purple-600 hover:bg-purple-700 rounded-full h-12 w-12 p-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">7 تخصصات طبية</h3>
              <p className="text-white/80 text-sm">
                أمراض القلب، مخ وأعصاب، جلدية، أنف وأذن، باطنة، نساء وتوليد، أطفال
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">70 طبيب معتمد</h3>
              <p className="text-white/80 text-sm">أطباء معتمدون من منصة فيزيتا مع تقييمات عالية</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">حجز فوري</h3>
              <p className="text-white/80 text-sm">احجز موعدك في دقائق معدودة مع إمكانية الاختيار</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm">🩺 المساعد الطبي الذكي - احجز موعدك مع أفضل الأطباء في مصر</p>
          <p className="text-white/50 text-xs mt-2">جميع الأطباء معتمدون ومتاحون على منصة فيزيتا</p>
        </div>
      </div>
    </div>
  )
}
