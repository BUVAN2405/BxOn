import { techStackData } from '../../data';
import SectionHeading from '../ui/SectionHeading';

const TechStack = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Technologies We Master"
                    subtitle="Tech Stack"
                />

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {techStackData.map((tech) => (
                        <div
                            key={tech}
                            className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:border-brand-500/50 hover:text-brand-400 hover:bg-slate-800 transition-all cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
