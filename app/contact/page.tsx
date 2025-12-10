'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Anushka Portfolio';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS Public Key is missing');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setStatus('sending');
    
    try {
      // Check if environment variables are set
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      console.log('Attempting to send email with:', {
        serviceId,
        templateId,
        hasPublicKey: !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      });

      if (!serviceId || !templateId) {
        throw new Error('EmailJS Service ID or Template ID is missing');
      }

      // Send email using EmailJS (publicKey already initialized in useEffect)
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Anushka',
          to_email: formData.email, // Recipient gets a copy (auto-reply)
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', response);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrorMessage(null);
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error: any) {
      // Build a detailed error string for debugging
      let detailed = '';
      try {
        if (error instanceof Error) {
          detailed = error.message;
        } else if (error && typeof error === 'object') {
          // include status/text fields if present (EmailJS may return these)
          const parts: string[] = [];
          if ((error as any).status) parts.push(`status=${(error as any).status}`);
          if ((error as any).text) parts.push(`text=${(error as any).text}`);
          const rest = JSON.stringify(error);
          parts.push(`payload=${rest}`);
          detailed = parts.join(' | ');
        } else {
          detailed = String(error);
        }
      } catch (e) {
        detailed = 'Failed to stringify error';
      }

      console.error('Email send failed:', detailed);
      // helpful additional diagnostics
      console.error('navigator.onLine:', typeof navigator !== 'undefined' ? navigator.onLine : 'unknown');
      setErrorMessage(detailed || 'Unknown error');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <Navbar activePage="contact" />

      {/* Main Content */}
      <div className="min-h-screen flex items-center py-32 px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
          {/* Left Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromLeft}
            className="hidden lg:block relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden"
          >
            <Image 
              src="/assets/Contact/contact.jpg" 
              alt="Contact" 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="flex flex-col justify-center space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                Let's Connect
              </h1>
              <p className="text-gray-600 text-lg mt-4">
                Have a project in mind? I'd love to hear from you.
              </p>
            </motion.div>

            <motion.form 
              variants={staggerContainer}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                variants={fadeInUp}
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center text-sm"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <p className="text-red-600 text-center text-sm font-semibold mb-2">
                    Oops! Something went wrong.
                  </p>
                  {errorMessage && (
                    <p className="text-red-500 text-xs text-center break-words">
                      {errorMessage}
                    </p>
                  )}
                </motion.div>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/anushka-chowdhary-2b749325b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-900 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:anushkapchowdhary@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-900 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
