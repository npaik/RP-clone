"use client";
import { useState } from "react";

export default function FourthBlock() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Send Us Message</h2>
        <p className="text-center mb-8">
          입력칸을 다 채워주세요. 더 많은 답변과 도움을 드릴 수 있습니다.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-rpBlue rounded-md shadow-sm focus:ring-rpBlue focus:border-rpBlue"
                placeholder="Ronda C. Dimick"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-rpBlue rounded-md shadow-sm focus:ring-rpBlue focus:border-rpBlue"
                placeholder="contact@risepartners.ca"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-rpBlue rounded-md shadow-sm focus:ring-rpBlue focus:border-rpBlue"
                placeholder="(+1) 604-609-5390"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-rpBlue rounded-md shadow-sm focus:ring-rpBlue focus:border-rpBlue"
                placeholder="I Would Like to"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-rpBlue rounded-md shadow-sm focus:ring-rpBlue focus:border-rpBlue"
              placeholder="I Would Like to"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-rpBlue hover:bg-rpOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
