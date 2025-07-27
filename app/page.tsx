"use client"

import { useState, useEffect } from "react"
import { Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BongdogToken() {
  const [copied, setCopied] = useState(false)
  const contractAddress = ""

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 relative flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-16 h-16">
          <svg viewBox="0 0 100 100" className="animate-float">
            <path d="M30,50 Q50,30 70,50 Q50,70 30,50 Z" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/5 w-12 h-12">
          <svg viewBox="0 0 100 100" className="animate-float delay-1000">
            <path d="M30,50 Q50,30 70,50 Q50,70 30,50 Z" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/5 w-14 h-14">
          <svg viewBox="0 0 100 100" className="animate-float delay-1500">
            <path d="M30,50 Q50,30 70,50 Q50,70 30,50 Z" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left space-y-6 relative">
          <div className="space-y-4 transform -skew-x-3">
            <h1 className="text-6xl lg:text-8xl font-black text-white drop-shadow-lg">$BONKSTER</h1>
            <p className="text-xl lg:text-2xl text-white/90 font-bold">The ultimate meme token experience!</p>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Card className="p-4 bg-black/20 backdrop-blur-sm border-white/20">
              <div className="flex items-center space-x-2">
                <span className="text-white/80 text-sm">CA:</span>
                <code className="text-white font-mono text-xs bg-black/30 px-2 py-1 rounded">
                  {contractAddress.slice(0, 10)}...{contractAddress.slice(-8)}
                </code>
                <Button size="sm" variant="ghost" onClick={copyToClipboard} className="text-white hover:bg-white/20">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              {copied && <p className="text-green-300 text-xs mt-1">Copied!</p>}
            </Card>

            <Button className="bg-white text-black hover:bg-white/90 font-bold w-full max-w-xs">
              <ExternalLink className="mr-2 h-4 w-4" />
              Buy $BONKSTER
            </Button>
          </div>
        </div>

        <div className="relative translate-x-12">
          <div className="relative w-full h-full aspect-video overflow-hidden rounded-lg border-4 border-white shadow-xl mb-4">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/dog.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:bg-white/20 transition">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:bg-white/20 transition">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.6 7.2c-.3-.2-.7-.1-1 .1-.1.1-1.5 1.2-3.5 2.5-.1.1-.2.1-.3 0-.1-.1-.1-.2 0-.3 2-1.3 3.4-2.4 3.5-2.5.3-.2.3-.6.1-1-.2-.3-.6-.3-1-.1-.1.1-1.5 1.2-3.5 2.5-1.3.8-2.7 1.7-4 2.5-1.3-.8-2.7-1.7-4-2.5-2-1.3-3.4-2.4-3.5-2.5-.3-.2-.7-.2-1 .1-.2.3-.2.7.1 1 .1.1 1.5 1.2 3.5 2.5.1.1.2.1.3 0 .1-.1.1-.2 0-.3-2-1.3-3.4-2.4-3.5-2.5-.3-.2-.7-.2-1 .1-.2.3-.2.7.1 1 .1.1 1.5 1.2 3.5 2.5 1.3.8 2.7 1.7 4 2.5v5c0 .3.2.5.5.5s.5-.2.5-.5v-5c1.3-.8 2.7-1.7 4-2.5 2-1.3 3.4-2.4 3.5-2.5.3-.2.4-.6.2-1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float.delay-1000 {
          animation-delay: 1s;
        }
        .animate-float.delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  )
}