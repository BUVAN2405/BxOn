import { footerData } from '../../data';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-bold text-white tracking-tighter">
                        Bx<span className="text-brand-500">On</span>
                    </div>

                    <div className="flex gap-6">
                        {footerData.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-white transition-colors text-sm"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>

                    <p className="text-slate-600 text-sm">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
