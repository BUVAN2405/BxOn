import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { contactData } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';
// import { SECRET_KEY, PUBLIC_KEY, TEMPLATE_KEY } from '.env';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: Please replace these placeholders with your actual EmailJS Service ID, Template ID, and Public Key.
        // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/
        emailjs.sendForm("process.env.SECURITY_KEY", "process.env.TEMPLATE_KEY", form.current, "process.env.PUBLIC_KEY")
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                alert("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    service: 'Web Development',
                    message: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <SectionHeading
                    title={contactData.title}
                    subtitle={contactData.subtitle}
                />

                <div className="grid lg:grid-cols-2 gap-16 mt-12">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            {contactData.description}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                                    <a href={`mailto:${contactData.contactInfo.email}`} className="text-slate-400 hover:text-brand-400 transition-colors">
                                        {contactData.contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                                    <p className="text-slate-400">
                                        {contactData.contactInfo.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                                    <p className="text-slate-400">
                                        {contactData.contactInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    {contactData.form.name}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    {contactData.form.email}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    {contactData.form.service}
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    disabled={status === 'sending' || status === 'success'}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <option>Web Development</option>
                                    <option>UI/UX Design</option>
                                    <option>AI Automation</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    {contactData.form.message}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending' || status === 'success'}
                                    rows="4"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Tell us a little bit about your project goals..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className={`w-full justify-center py-4 ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''} ${status === 'error' ? 'bg-red-600 hover:bg-red-700' : ''}`}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        Sending...
                                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        Message Sent!
                                        <CheckCircle className="w-4 h-4 ml-2" />
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        Failed to Send
                                        <XCircle className="w-4 h-4 ml-2" />
                                    </>
                                ) : (
                                    <>
                                        {contactData.form.button}
                                        <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
