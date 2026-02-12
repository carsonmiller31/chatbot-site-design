'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Home, 
  BookOpen, 
  Wrench, 
  FileText, 
  Map, 
  User, 
  Send,
  Bot,
  Menu,
  MoreVertical
} from 'lucide-react'

export default function Page() {
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'help', label: 'Help Center', icon: BookOpen },
    { id: 'tech', label: 'Resources', icon: Wrench },
    { id: 'forms', label: 'Contact Forms', icon: FileText },
    { id: 'map', label: 'Site Map', icon: Map },
  ]

  const suggestions = [
    {
      title: 'Getting Started',
      description: 'How can I get started with your services?'
    },
    {
      title: 'Account Help',
      description: 'I need help with my account settings.'
    },
    {
      title: 'Live Agent',
      description: 'Transfer me to a live representative (if available).'
    }
  ]

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending (not implemented)
      console.log('Message:', message)
      setMessage('')
    }
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 bg-gradient-to-b from-[#0077CC] to-[#005599] text-white flex flex-col">
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-6 px-2">
            <Menu className="h-5 w-5" />
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-white/20 bg-opacity-20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Profile Section */}
        <div className="p-4 border-t border-white/20">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
            <User className="h-5 w-5" />
            <span className="font-medium">Profile</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <h1 className="font-semibold text-foreground">
              AI Support Agent{' '}
              <span className="text-muted-foreground italic">(Beta)</span>
            </h1>
          </div>
          <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
            <MoreVertical className="h-5 w-5 text-foreground" />
          </button>
        </header>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <div className="w-full max-w-4xl flex flex-col items-center justify-center space-y-8">
            {/* Bot Icon and Title */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center">
                <Bot className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-primary mb-2">Support Agent</h2>
                <p className="text-muted-foreground text-lg">
                  Need help? Ask the AI agent.
                </p>
              </div>
            </div>

            {/* Suggestion Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {suggestions.map((suggestion, index) => (
                <Card 
                  key={index}
                  className="cursor-pointer hover:shadow-md transition-shadow border-border"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold">
                      {suggestion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {suggestion.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center gap-2 border-2 border-primary rounded-full px-6 py-3 bg-white shadow-sm">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything."
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-base"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90 shrink-0"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
