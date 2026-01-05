import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl transition-colors hover:border-slate-700 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
