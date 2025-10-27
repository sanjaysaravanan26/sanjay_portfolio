import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactComponent({
  email = 'sanjaysaravanan2145@gmail.com',
  phone = '7305462145',
  location = 'Bengaluru',
  social = {
    linkedin: 'https://www.linkedin.com/in/sanjay-datascientist2652003/',
    github: 'https://github.com/sanjaysaravanan26/',
  },
}) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Write at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: null, message: '' });

    try {
        const result = await emailjs.send(
            'service_kumozen',       // ✅ Your Service ID
            'template_4jwdvsw',      // ✅ Your Template ID
            {
              from_name: form.name,
              from_email: form.email,
              subject: form.subject,
              message: form.message,
            },
            'QfpcJTM1-aLzqyqIF'     // ✅ Your Public Key
          );
          

      if (result.status === 200) {
        setStatus({ loading: false, success: true, message: '✅ Message sent successfully!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: '❌ Failed to send message. Please try again later.',
      });
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      >
        {/* Left: contact info */}
        <div className="space-y-6 p-6 rounded-2xl shadow-md bg-white/60 backdrop-blur-sm">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p className="text-sm text-gray-600">
            I'm open to work, freelance projects, and interesting collaborations. Drop a message — I'll reply within a few business days.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-lg bg-gray-100">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm">Email</p>
                <a className="font-medium block" href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            {phone && (
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-gray-100">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm">Phone</p>
                  <a className="font-medium block" href={`tel:${phone}`}>{phone}</a>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <div className="p-3 rounded-lg bg-gray-100">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm">Location</p>
                <p className="font-medium">{location}</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm mb-2">Find me on</p>
            <div className="flex gap-3">
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border">
                <Linkedin size={16} /> <span className="text-sm">LinkedIn</span>
              </a>
              <a href={social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border">
                <Github size={16} /> <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl shadow-md bg-white/60 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Send a message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Name</label>
              <input
                className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm">Email</label>
              <input
                className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm">Subject</label>
              <input
                className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.subject ? 'border-red-400' : 'border-gray-300'}`}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm">Message</label>
              <textarea
                rows={6}
                className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-black text-white font-medium shadow-sm ring-offset-2 disabled:opacity-60"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p className={`text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
