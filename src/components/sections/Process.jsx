import { motion } from 'framer-motion';
import { processData } from '../../data';
import SectionHeading from '../ui/SectionHeading';

const Process = () => {
    return (
        <section id="process" className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="From Concept to Launch"
                    subtitle="Our Process"
                />

                <div className="relative mt-16">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-5 gap-8 relative z-10">
                        {processData.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-brand-500 group-hover:text-brand-400 transition-colors duration-300 md:mb-8 mb-4 shadow-lg shadow-slate-950/50">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
