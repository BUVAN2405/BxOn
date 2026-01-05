import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25 border border-transparent",
        secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
        outline: "bg-transparent border border-slate-600 text-slate-300 hover:border-brand-400 hover:text-brand-400",
        ghost: "bg-transparent text-slate-400 hover:text-white"
    };

    if (props.href) {
        return (
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
