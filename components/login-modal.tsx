"use client"

import type React from "react"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ForgotPasswordModal } from "./forgot-password-modal"

interface LoginModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [showForgotPassword, setShowForgotPassword] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(isSignUp ? "Sign up" : "Log in", { email, password, firstName, lastName })
    }

    const resetForm = () => {
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setShowPassword(false)
    }

    const toggleMode = () => {
        setIsSignUp(!isSignUp)
        resetForm()
    }

    const handleForgotPassword = () => {
        onOpenChange(false)
        setShowForgotPassword(true)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent
                    className="w-full h-full sm:h-auto sm:max-w-[440px] p-0 gap-0 overflow-hidden sm:rounded-lg"
                    showCloseButton={false}
                >
                    <DialogHeader className="sr-only">
                        <DialogTitle>{isSignUp ? "Create an account" : "Log in to your account"}</DialogTitle>
                        <DialogDescription>
                            {isSignUp ? "Sign up to access bookings and rewards" : "Access your bookings and Viator Rewards"}
                        </DialogDescription>
                    </DialogHeader>

                    {/* Header */}
                    <div className="relative bg-[#1a2b49] p-4 md:p-6 text-white">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <h2 className="text-lg md:text-xl font-semibold mb-1">{isSignUp ? "Create an account" : "Welcome back"}</h2>
                        <p className="text-white/90 text-xs md:text-sm">
                            {isSignUp ? "Sign up to access your bookings" : "Log in to manage bookings & discounts"}
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 md:p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-120px)] sm:max-h-none"
                    >
                        {isSignUp && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        First name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b49] focus:border-transparent outline-none transition-all text-sm"
                                        placeholder="First name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Last name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b49] focus:border-transparent outline-none transition-all text-sm"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b49] focus:border-transparent outline-none transition-all text-sm"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b49] focus:border-transparent outline-none transition-all text-sm pr-12"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {!isSignUp && (
                            <div className="flex justify-end">
                                <button type="button" onClick={handleForgotPassword} className="text-sm text-[#1a2b49] hover:text-[#f53] font-medium hover:underline cursor-pointer">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#1a2b49] text-white font-semibold py-3 rounded-lg hover:bg-[#1a2b49]/90 transition-colors cursor-pointer"
                        >
                            {isSignUp ? "Create account" : "Log in"}
                        </button>

                        {/* Divider */}
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Facebook</span>
                            </button>
                        </div>

                        {/* Toggle Sign Up / Log In */}
                        <p className="text-center text-sm text-gray-600 pt-2">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                            <button type="button" onClick={toggleMode} className="text-[#1a2b49] hover:text-[#f53] font-medium hover:underline cursor-pointer">
                                {isSignUp ? "Log in" : "Sign up"}
                            </button>
                        </p>
                    </form>
                </DialogContent>
            </Dialog>

            <ForgotPasswordModal open={showForgotPassword} onOpenChange={setShowForgotPassword} />
        </>
    )
}
