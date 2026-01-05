import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-bold bg-clip-text text-white tracking-tighter">
                    Bx<span className="text-brand-500">On</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="px-5 py-2 text-sm">Get Started</Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-white font-medium block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="primary" className="w-full text-center justify-center">Get Started</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
