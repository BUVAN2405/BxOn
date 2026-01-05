import { motion } from 'framer-motion';
import { servicesData } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const Services = () => {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Our Expertise"
                    subtitle="Services"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full group hover:bg-slate-800/50">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-brand-400 group-hover:text-brand-300" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-slate-100">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{service.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
