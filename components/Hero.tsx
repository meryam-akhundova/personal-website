"use client";

import Link from "next/link";
import TypingText from "./TypingText";
import { StarDoodle, CodeDoodle } from "./Doodles";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-1 sm:px-2 lg:px-4 pt-16 relative overflow-hidden"
    >
      {/* Doodles - Mixed stars and code icons, spread out across the section */}
      <div className="absolute top-8 left-6 opacity-25 animate-bounce" style={{ animationDuration: '3s' }}>
        <CodeDoodle className="w-6 h-6" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-20 right-12 opacity-25 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <StarDoodle className="w-7 h-7" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-36 left-16 opacity-25 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <StarDoodle className="w-5 h-5" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-52 right-20 opacity-25 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>
        <CodeDoodle className="w-8 h-8" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-68 left-24 opacity-25 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.3s' }}>
        <CodeDoodle className="w-6 h-6" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute bottom-28 left-8 opacity-25 animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '1.2s' }}>
        <StarDoodle className="w-9 h-9" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute bottom-44 right-16 opacity-25 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.6s' }}>
        <StarDoodle className="w-7 h-7" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute bottom-60 left-20 opacity-25 animate-bounce" style={{ animationDuration: '3.4s', animationDelay: '0.9s' }}>
        <CodeDoodle className="w-5 h-5" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-44 left-1/4 opacity-25 animate-bounce" style={{ animationDuration: '3.7s', animationDelay: '1.1s' }}>
        <StarDoodle className="w-6 h-6" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute bottom-36 right-1/3 opacity-25 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.4s' }}>
        <CodeDoodle className="w-7 h-7" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute top-28 right-1/4 opacity-25 animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '0.7s' }}>
        <CodeDoodle className="w-5 h-5" style={{ color: '#DB5079' }} />
      </div>
      <div className="absolute bottom-52 left-1/3 opacity-25 animate-bounce" style={{ animationDuration: '3.3s', animationDelay: '1.3s' }}>
        <StarDoodle className="w-8 h-8" style={{ color: '#DB5079' }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 glass-card rounded-3xl px-8 sm:px-12 py-8 sm:py-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#543618' }}>
            hi, i&apos;m
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#DB5079' }}>
            meryam akhundova
          </h1>
          <p className="text-xl sm:text-2xl mb-8" style={{ color: '#543618' }}>
            <TypingText text="software engineering student @ university of waterloo" speed={80} />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl glass btn-primary"
          >
            view my work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 rounded-lg font-semibold transition-colors glass btn-secondary"
          >
            get in touch
          </Link>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a
            href="https://github.com/meryam-akhundova"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 transform transition-transform"
            style={{ color: '#543618' }}
            aria-label="GitHub"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/meryam-akhundova"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 transform transition-transform"
            style={{ color: '#543618' }}
            aria-label="LinkedIn"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:makhundo@uwaterloo.ca"
            className="transition-colors hover:scale-110 transform transition-transform"
            style={{ color: '#543618' }}
            aria-label="Email"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
