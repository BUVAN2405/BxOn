import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
    const alignment = {
        center: 'text-center items-center',
        left: 'text-left items-start',
        right: 'text-right items-end'
    };

    return (
        <div className={`flex flex-col mb-12 ${alignment[align]}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-400 font-medium tracking-wider uppercase text-sm mb-2"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-slate-100"
            >
                {title}
            </motion.h2>
            <div className="h-1 w-20 bg-brand-500 mt-4 rounded-full opacity-80"></div>
        </div>
    );
};

export default SectionHeading;
