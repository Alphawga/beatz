"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Have questions or feedback? We'd love to hear from you. Reach out to our team and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Licensing">Licensing Question</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Collaboration">Collaboration Request</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info@afriquebeats.com</p>
                    <p className="text-gray-600">support@afriquebeats.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+234 800 123 4567</p>
                    <p className="text-gray-600">+234 900 876 5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-600">
                      Raise Arise Solutions Limited
                      <br />
                      15 Admiralty Way
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

