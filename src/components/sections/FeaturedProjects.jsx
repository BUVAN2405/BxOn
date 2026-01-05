import { motion } from 'framer-motion';
import { featuredProjectsData } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const FeaturedProjects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Recent Work"
                    subtitle="Featured Projects"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProjectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-0 overflow-hidden h-full group border-0 bg-slate-950">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-medium text-brand-400 mb-2 uppercase tracking-wide">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <a href={project.link} className="text-sm font-medium text-white hover:text-brand-400 transition-colors inline-flex items-center">
                                        View Live Demo   &rarr;
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
