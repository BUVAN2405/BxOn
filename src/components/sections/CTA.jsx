import { motion } from 'framer-motion';
import { ctaData } from '../../data';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-900/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {ctaData.title}
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                        {ctaData.description}
                    </p>
                    <Button variant="primary" className="mx-auto text-lg px-8 py-4 shadow-xl shadow-brand-500/20">
                        {ctaData.buttonText}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
