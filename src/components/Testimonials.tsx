"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    text: "I was drowning in support tickets until CherryGrowth matched me with a dedicated, fluent VA. Now I can finally focus on strategy instead of busywork.",
    author: "Alex R.",
    role: "Founder, E-com Brands",
  },
  {
    text: "My agency runs like clockwork since I hired four VAs from CherryGrowth. The onboarding was instant, and they integrated seamlessly into our workflow.",
    author: "Sarah J.",
    role: "CEO, Digital Marketing",
  },
  {
    text: "I literally reversed aging because of the time I got back. No more 14-hour days. It’s hands down the best investment I’ve made for my sanity.",
    author: "Michael T.",
    role: "Real Estate Investor",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-transparent overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 h-64 flex items-center justify-center">
        {TESTIMONIALS.map((testimonial, index) => {
          // Determine position based on active index
          // If it's the active one: visible, centered
          // If it was the previous one: move up and fade out
          // If it's the next one (or any other): sit below and invisible
          
          let className = "opacity-0 translate-y-8 pointer-events-none"; // Default: below and invisible
          
          if (index === activeIndex) {
            className = "opacity-100 translate-y-0 z-10"; // Active
          } else if (index === (activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) {
             // Previous item (exit animation)
             // Note: This simple logic works for steady forward flow. 
             // For true "previous" tracking we might need a ref, but this modulo math works for the immediate predecessor in a loop.
             className = "opacity-0 -translate-y-8 z-0"; 
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${className}`}
            >
              <blockquote className="text-center">
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-black"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="mt-8">
                  <div
                    className="text-base font-semibold text-black"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-sm text-black/50 mt-1"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </section>
  );
}

