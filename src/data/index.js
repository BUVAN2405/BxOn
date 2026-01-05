import { Code, Palette, Bot, Rocket, Shield, Zap, Globe, Cpu } from 'lucide-react';
import eventBookingImg from '../assets/event-booking.png';
import decorationManagementImg from '../assets/decoration_management.png';

export const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const heroData = {
    title: "Build the Future with",
    titleHighlight: "AI & Modern Tech",
    description: "We transform ideas into scalable, high-performance web applications and autonomous AI agents. The partner you need for the next generation of SaaS.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Work ",
};

export const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "Scalable, high-performance web apps built with React, Next.js, and Node.js. Optimized for speed and SEO.",
        icon: Globe,
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Premium, user-centric designs that convert. We craft interfaces that look stunning and feel intuitive.",
        icon: Palette,
    },
    {
        id: 3,
        title: "AI Autonomous Workflows",
        description: "Leverage the power of LLMs and AI agents (Gemini, GPT-4) to automate complex business processes.",
        icon: Bot,
    },
];

export const whyChooseUsData = [
    {
        id: 1,
        title: "Startup-Grade Quality",
        description: "We don't just write code; we build products. We understand the startup ecosystem and build for growth.",
        icon: Rocket,
    },
    {
        id: 2,
        title: "Future-Proof Tech",
        description: "Always on the cutting edge. We use the latest stable technologies to ensure your product lasts.",
        icon: Shield,
    },
    {
        id: 3,
        title: "Rapid Execution",
        description: "Time to market matters. Our streamlined workflows ensure we ship faster without breaking things.",
        icon: Zap,
    },
];

export const processData = [
    {
        step: "01",
        title: "Discover",
        description: "We dive deep into your vision, requirements, and market to understand what needs to be built.",
    },
    {
        step: "02",
        title: "Design",
        description: "Wireframes, high-fidelity mockups, and prototypes to visualize the end product before coding.",
    },
    {
        step: "03",
        title: "Build",
        description: "Clean, test-driven code development using modern frameworks and best practices.",
    },
    {
        step: "04",
        title: "Automate",
        description: "Integrating AI agents and automation pipelines to supercharge your application workflow.",
    },
    {
        step: "05",
        title: "Scale",
        description: "Deployment, monitoring, and ongoing optimization to handle growth and new features.",
    },
];

export const featuredProjectsData = [
    {
        id: 1,
        title: "Event Booking & Enquiry Platform",
        category: "Photography & Events",
        description: "A platform for booking events and enquiring about events.",
        image: eventBookingImg,
        link: " https://main.dugq2zqypncrh.amplifyapp.com/"
    },
    {
        id: 2,
        title: "GBT Decoration Management",
        category: "Event Management",
        description: "A platform for booking events and enquiring about events.",
        image: decorationManagementImg,
        link: "https://main.d2q3f6tm28tqp5.amplifyapp.com/"
    },

];

export const techStackData = [
    "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySql", "Figma", "Antigravity", "AWS"
];

export const ctaData = {
    title: "Ready to launch your vision?",
    description: "Let's build something extraordinary together. Schedule a free consultation today.",
    buttonText: "Get in Touch",
};

export const footerData = {
    copyright: `© ${new Date().getFullYear()} BxOn. All rights reserved.`,
    socials: [
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/bxon16" },
        // { name: "GitHub", href: "#" }
    ],
};

export const contactData = {
    title: "Let's Start a Conversation",
    subtitle: "Contact Us",
    description: "Ready to build something amazing? Fill out the form below and we'll get back to you within 24 hours.",
    form: {
        name: "Full Name",
        email: "Email Address",
        service: "Service of Interest",
        message: "Tell us about your project",
        button: "Send Message"
    },
    contactInfo: {
        email: "bxon016@gmail.com",
        phone: "+91 7402186480",
        location: "Kumbakonam, Tamil Nadu, India"
    }
};
