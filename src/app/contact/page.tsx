"use client";

import Footer from "@/components/Footer";
import Script from "next/script";
import { useEffect } from "react";

export default function Contact() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-12 lg:py-20 flex flex-col items-center">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black text-center mb-12 max-w-2xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Let's supercharge your lending team
      </h1>

      {/* Contact Form with Consent Checkbox */}
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-black/5 shadow-sm p-8 mb-20">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors" />
            <p className="mt-1 text-xs text-black/50">Used for service notifications and account security</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Company Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">How can we help?</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-black/10 focus:border-black focus:outline-none transition-colors resize-none"></textarea>
          </div>

          {/* Explicit Consent Checkbox */}
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-black/70 leading-relaxed">
                I consent to receive transactional service messages from CherryGrowth at the phone number provided above. 
                This includes appointment reminders, service updates, and billing confirmations. Message frequency varies. 
                Message and data rates may apply. Reply STOP to opt out at any time. See our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 underline">Terms of Service</a>.
              </span>
            </label>
          </div>

          <button
            type="button" // Changed to type="button" to prevent actual submission in this demo
            className="w-full rounded-lg bg-blue-600 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
          
          <div className="text-center">
            <p className="text-sm text-black/50">Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a></p>
          </div>
        </form>
      </div>

      {/* Calendly (kept below if needed, or can be removed if form replaces it) */}
      {/* <div className="w-full bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden mb-20">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/dylanwestland/30min?hide_gdpr_banner=1"
          style={{ minHeight: "1000px", height: "1000px" }}
        />
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div> */}

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
