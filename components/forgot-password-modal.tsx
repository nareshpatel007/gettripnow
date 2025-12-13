"use client"

import type React from "react"
import { useState } from "react"
import { X, Mail, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ForgotPasswordModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ForgotPasswordModal({ open, onOpenChange }: ForgotPasswordModalProps) {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Password reset requested for:", email)
        setIsSubmitted(true)
    }

    const handleClose = () => {
        onOpenChange(false)
        // Reset state after modal close animation
        setTimeout(() => {
            setIsSubmitted(false)
            setEmail("")
        }, 300)
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent
                className="w-full h-full sm:h-auto sm:max-w-[440px] p-0 gap-0 overflow-hidden sm:rounded-lg"
                showCloseButton={false}
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Reset your password</DialogTitle>
                    <DialogDescription>
                        Enter your email address and we'll send you a link to reset your password
                    </DialogDescription>
                </DialogHeader>

                {/* Header */}
                <div className="relative bg-[#1a2b49] p-4 md:p-6 text-white">
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 md:top-4 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <h2 className="text-lg md:text-xl font-semibold mb-1">Forgot your password?</h2>
                    <p className="text-white/90 text-xs md:text-sm">
                        {isSubmitted ? "Check your email" : "No worries, we'll send you reset instructions"}
                    </p>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Email address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        id="reset-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b49] focus:border-transparent outline-none transition-all text-sm"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">We'll send a password reset link to this email address</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1a2b49] text-white font-semibold py-3 rounded-lg hover:bg-[#1a2b49]/90 transition-colors cursor-pointer"
                            >
                                Send reset link
                            </button>
                        </form>
                    ) : (
                        <div className="space-y-4 text-center py-4">
                            <div className="flex justify-center">
                                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Check your email</h3>
                                <p className="text-sm text-gray-600 mb-1">We've sent a password reset link to</p>
                                <p className="text-sm font-medium text-gray-900">{email}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-left">
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Didn't receive the email? Check your spam folder or{" "}
                                    <button
                                        type="button"
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#007aff] hover:underline font-medium"
                                    >
                                        try another email address
                                    </button>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="w-full bg-[#1a2b49] text-white font-semibold py-3 rounded-lg hover:bg-[#0071eb] transition-colors"
                            >
                                Back to login
                            </button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
