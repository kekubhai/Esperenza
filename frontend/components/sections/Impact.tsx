'use client'
import { motion } from 'framer-motion';

const stats = [
  { value: '2,300+', label: 'Active Codes' },
  { value: '1,142', label: 'Goodies Redeemed' },
  { value: '8,900', label: 'Referrals Completed' },
];

const testimonial = {
  quote: "We found the perfect tool referral in minutes — and the granter earned points that unlocked great goodies.",
  author: "Alex M.",
  role: "Product Manager",
};

export const Impact = () => {
  return (
    <section className="section py-16 relative overflow-hidden bg-black">
      {/* Green gradient spots */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-green-500/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="heading text-white">Platform Activity</h2>
          <p className="subheading text-gray-300">Real referral usage, real rewards — here are the latest metrics.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="card text-center bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="card max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
          <p className="text-lg italic text-gray-200 mb-4">"{testimonial.quote}"</p>
          <div className="text-gray-300">
            <div className="font-semibold text-white">{testimonial.author}</div>
            <div className="text-sm">{testimonial.role}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};