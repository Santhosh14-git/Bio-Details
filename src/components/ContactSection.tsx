import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight, MessageCircle, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const socials = [
  { 
    icon: MessageCircle, 
    label: 'WhatsApp', 
    href: 'https://wa.me/916374803910', 
    color: 'text-green-500',
    bgColor: 'bg-green-500/15',
    hoverBg: 'hover:bg-green-500/30',
    borderColor: 'border-green-500/40 hover:border-green-500/80'
  },
  { 
    icon: Mail, 
    label: 'Gmail', 
    href: 'mailto:santhoshcse123456@gmail.com', 
    color: 'text-red-500',
    bgColor: 'bg-red-500/15',
    hoverBg: 'hover:bg-red-500/30',
    borderColor: 'border-red-500/40 hover:border-red-500/80'
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/santhosh-e-20b881316', 
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/15',
    hoverBg: 'hover:bg-blue-500/30',
    borderColor: 'border-blue-500/40 hover:border-blue-500/80'
  },
  { 
    icon: Send, 
    label: 'Telegram', 
    href: 'https://t.me/+916374803910', 
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/15',
    hoverBg: 'hover:bg-cyan-500/30',
    borderColor: 'border-cyan-500/40 hover:border-cyan-500/80'
  },
];

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    // Use Vite env variables if available (set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mlhkg8x';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ctxxt7n';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'HuqA-L_Zc-k0vd92s';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current as HTMLFormElement, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        alert('Message sent — thank you!');
        formRef.current && (formRef.current as HTMLFormElement).reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error);
        const msg = (error && (error.text || error.message)) || 'Unknown error';
        alert(`Failed to send message: ${msg}`);
      });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ scale: backgroundScale }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(220, 20%, 97%) 30%, hsl(230, 30%, 94%) 100%)',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(262, 83%, 68%) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      <motion.div 
        className="section-container"
        style={{ y: contentY }}
      >
        {/* Main CTA */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-medium mb-4"
          >
            Let's Connect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-xl max-w-4xl mx-auto mb-6"
          >
            Have a project in mind?{' '}
            <span className="text-gradient-animated">Let's work together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="body-lg max-w-2xl mx-auto"
          >
            I'm always excited to work on innovative projects. Whether you have a 
            detailed specification or just a rough idea, let's bring it to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <motion.div
              className="glass-card p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:hello@santhosh.dev" 
                    className="text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    santhoshcse123456@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Thoothudi • Tamilnadu
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-semibold mb-6 text-lg">Connect with me</h4>
              <div className="flex gap-4 flex-wrap">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    title={`Connect on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-16 h-16 rounded-2xl backdrop-blur-xl border-2 flex items-center justify-center ${social.bgColor} ${social.borderColor} ${social.hoverBg} ${social.color} transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.12 }}
                    whileHover={{ scale: 1.2, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-8 h-8 transition-transform duration-300" />
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap pointer-events-none"
                      initial={{ opacity: 0, y: 0 }}
                      whileHover={{ opacity: 1, y: 2 }}
                    >
                      {social.label}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
              whileHover={{ x: 5 }}
            >
              Download Resume
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
