import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Calendar, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Stethoscope,
  ShieldCheck,
  Users,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Constants ---
const CLINIC_NAME = "Muda Lawal Dental Clinic";
const PHONE_NUMBER = "0802 351 2138";
const WHATSAPP_NUMBER = "2348023512138";
const ADDRESS = "27 Ikotun Idimu Road By God Is Good Motors, Alimosho Local Government Area, Lagos";
const RATING = 4.8;

const SERVICES = [
  {
    title: "Teeth Cleaning & Polishing",
    description: "Professional scaling and polishing to remove plaque and tartar, ensuring a fresh and healthy smile.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "Tooth Extraction",
    description: "Safe and painless removal of damaged or problematic teeth using modern techniques.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Dental Fillings",
    description: "High-quality composite fillings to restore decayed teeth and prevent further damage.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile and remove stubborn stains.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Braces & Orthodontics",
    description: "Corrective treatments to align teeth and improve your bite for a perfect smile.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Gum Treatment",
    description: "Comprehensive care for periodontal diseases to maintain healthy gums and bone structure.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Routine Checkups",
    description: "Regular dental examinations to catch issues early and maintain optimal oral health.",
    icon: <Calendar className="w-6 h-6" />
  }
];

const REVIEWS = [
  {
    name: "Olawale Johnson",
    text: "The best dental experience I've had in Alimosho. Very professional and clean environment.",
    rating: 5
  },
  {
    name: "Chidinma Okafor",
    text: "I was scared of tooth extraction but the doctors here made it so easy and painless. Highly recommend!",
    rating: 5
  },
  {
    name: "Adebayo Tunde",
    text: "Very affordable and quality service. My teeth whitening results are amazing.",
    rating: 4
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className={`font-display font-bold text-xl hidden sm:block ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}>
                Muda Lawal <span className="text-brand-600">Dental</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-full text-brand-700 font-semibold text-sm mb-6">
              <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
              <span>{RATING} Star Rated Dental Care</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-brand-900 leading-tight mb-6">
              Trusted Dental Care in <span className="text-brand-600">Alimosho, Lagos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience professional, gentle, and community-focused dental services. We are committed to your comfort and hygiene at Muda Lawal Dental Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-white text-brand-900 border-2 border-brand-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-all"
              >
                <Phone className="w-5 h-5 text-brand-600" />
                Call Now
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Patient"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>Joined by 500+ happy patients in Lagos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOAIVss1CmHkMa7owdvKfHHsEUaAPJ0y3glBm0X=s1600"
                alt="Muda Lawal Dental Clinic"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-bold text-brand-900">Certified Clinic</span>
              </div>
              <p className="text-xs text-gray-500">Adhering to the highest standards of hygiene and patient safety.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipP3zkg4XlScjEibnAZFSd3S40C3EzYpStOhpL9S=s1600"
                alt="Clinic Interior"
                className="rounded-2xl h-64 w-full object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMs3W6D49qA-POwdlJEyrAwQ2LO0E8NtnfgKIcJ=s1600"
                alt="Dental Equipment"
                className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">About Our Clinic</h2>
            <h3 className="text-4xl font-display font-bold text-brand-900 mb-6">Your Community Dentist in Alimosho</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Muda Lawal Dental Clinic has been a cornerstone of dental health in the Alimosho community. We pride ourselves on providing professional, high-quality care that is both accessible and reassuring.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Commitment to patient comfort and hygiene",
                "State-of-the-art dental equipment",
                "Highly professional and experienced staff",
                "Community-focused healthcare approach"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a href="#services" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all">
              Explore Our Services <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl font-display font-bold text-brand-900 mb-6">Comprehensive Dental Solutions</h3>
          <p className="text-lg text-gray-600">
            From routine checkups to advanced orthodontics, we offer a wide range of treatments tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl font-display font-bold mb-6">What Our Patients Say</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-bold text-brand-400">{RATING}</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-5 h-5 ${s <= 4 ? 'fill-current' : 'fill-current opacity-50'}`} />
                  ))}
                </div>
                <p className="text-brand-200">Based on Google Reviews</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Muda+Lawal+Dental+Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-900 px-6 py-3 rounded-full font-bold hover:bg-brand-100 transition-colors"
            >
              Leave a Review
            </a>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-brand-800/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-brand-50">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center font-bold text-brand-300">
                    {review.name[0]}
                  </div>
                  <span className="font-semibold">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-display font-bold text-brand-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Phone Number</h4>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand-600 transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between gap-4"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between gap-4"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
                    <li className="flex justify-between gap-4"><span>Sunday:</span> <span className="text-red-500">Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-inner border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3963.431265893456!2d3.265559675865611!3d6.550431593442378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f274c79440b%3A0xdb61c296af6e369!2sMuda%20Lawal%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1708980000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div id="booking" className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-brand-900 mb-6">Book an Appointment</h3>
            <form 
              className="space-y-6" 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  date: formData.get('date'),
                  message: formData.get('message'),
                };

                try {
                  const response = await fetch('/api/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    alert('Appointment booked successfully! We will contact you soon.');
                    (e.target as HTMLFormElement).reset();
                  } else {
                    const error = await response.json();
                    alert(`Error: ${error.error || 'Failed to book appointment'}`);
                  }
                } catch (err) {
                  alert('Network error. Please try again later.');
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="0802 000 0000"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input
                  name="date"
                  type="date"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your dental concerns..."
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200"
              >
                Confirm Booking
              </button>
              <p className="text-center text-sm text-gray-500">
                We'll call you back to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-brand-900">
                Muda Lawal <span className="text-brand-600">Dental</span>
              </span>
            </a>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Providing professional and community-focused dental care in Alimosho, Lagos. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:border-brand-600 cursor-pointer transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#home" className="hover:text-brand-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-brand-600 transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-900 mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-600">
              <li>Teeth Cleaning</li>
              <li>Tooth Extraction</li>
              <li>Dental Fillings</li>
              <li>Teeth Whitening</li>
              <li>Braces & Orthodontics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-900 mb-6">Visit Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
