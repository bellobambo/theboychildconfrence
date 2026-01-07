'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const BoychildBlog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'The Team', href: '#team' },
    { name: 'Sponsorship', href: '#sponsorship' },
  ];

  // Smooth scroll function
  const scrollToSection = useCallback((href: string) => {
    // Close mobile menu if open
    setIsOpen(false);
    
    // Remove # from href to get the id
    const id = href.replace('#', '');
    
    if (id === 'home') {
      // For home, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on your navbar height (20px scroll-mt + 60px navbar?)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle click on nav links
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  }, [scrollToSection]);

  // Handle click on footer quick nav links
  const handleQuickNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* 1. NAVBAR */}
      <nav className="bg-[#89CFF0] shadow-sm w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="shrink-0">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-white font-extrabold text-xl tracking-wide uppercase cursor-pointer hover:text-blue-100 transition-colors"
              >
                The Boychild Conference
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 outline-none hover:text-blue-100 transition-colors">
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#89CFF0] border-t border-white/10 px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white block py-3 border-b border-white/10 font-medium cursor-pointer hover:text-blue-100 hover:pl-2 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="bg-white scroll-mt-20">
        <div className="w-full bg-white flex justify-center items-center overflow-hidden h-[400px] md:h-[600px]">
          <img src="/img1.jpeg" alt="Young boy in blue shirt" className="h-full w-auto object-contain" />
        </div>
        <div className="max-w-4xl mx-auto py-10 px-4 text-center space-y-4">
          <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">
            "The boychild is <span className="text-[#89CFF0]">not the problem</span>,"
          </h1>
        </div>
      </section>

      {/* 3. VISION & VALUES SECTION */}
      <section id="mission" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
              <img src="/img2.jpeg" alt="Nurture" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="font-bold text-lg text-[#89CFF0] mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 italic">"Nurture a boy today, and you've invested in tomorrow's nation."</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
              <img src="/img3.jpeg" alt="Vision" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="font-bold text-lg text-[#89CFF0] mb-2">Our Values</h3>
              <p className="text-sm text-gray-600 italic">"A boy with vision is unstoppable. A boy with values is unshakeable."</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
              <img src="/img4.jpeg" alt="Guidance" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="font-bold text-lg text-[#89CFF0] mb-2">Our Strategy</h3>
              <p className="text-sm text-gray-600 italic">"The journey from boyhood to leadership starts with guidance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section id="team" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase text-gray-900 mb-12 italic tracking-tight">
            The Team Behind the Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard
              name="OLUWOLE Kehinde James"
              role="Convener/Lead Coordinator"
              responsibilities={[
                "Founder & Visionary Leader of OLAJAMES & FRIENDS",
                "Provides overall direction, strategy, and coordination",
                "Oversees all departments and ensures alignment with vision"
              ]}
            />
            <MemberCard
              name="AKOBE Olorunfemi Henry"
              role="Vice Coordinator/Programs Director"
              responsibilities={[
                "Supports the Convener in overall coordination",
                "Oversees program flow, timing, and implementation on event day",
                "Assists in strategy for growth of the organization"
              ]}
            />
            <MemberCard
              name="Victoria ALIU"
              role="Project Manager/Event Director"
              responsibilities={[
                "Directly manages planning and execution of BoyChild Conference 2026",
                "Supervises all committees to ensure deadlines are met",
                "Reports progress updates to the Convener"
              ]}
            />
            <MemberCard
              name="Kingsley Nkenjika"
              role="Media/Content Lead"
              responsibilities={[
                "Co-leads Media Team with Emmanuel",
                "In charge of visual storytelling and graphics for campaigns",
                "Supports digital promotions and conference highlights"
              ]}
            />
            <MemberCard
              name="Samuel Olajide"
              role="Public Relation Officer I"
              responsibilities={[
                "Works alongside David on media projects",
                "Dissemination of information",
                "Assists with maintaining visual brand identity"
              ]}
            />
            <MemberCard
              name="Mr Ayoola Oluwagbega"
              role="Lead Coordinator, Website Development"
              responsibilities={[
                "Leads website development and online platforms",
                "Co-leads on digital visibility with Teejoseph",
                "Ensures smooth functionality and user experience of digital assets"
              ]}
            />
            <MemberCard
              name="Ajiboye E. Rhoda & Okeowo P. Bisola"
              role="Head, Welfare & Logistics"
              responsibilities={[
                "Responsible for welfare of guests, speakers, and team",
                "Ensures logistics for transport and refreshments are seamless",
                "Coordinates ushers & volunteer team"
              ]}
            />
            <MemberCard
              name="Olorunmeyan Oluwatoyin Mary"
              role="Secretary/Documentation Lead"
              responsibilities={[
                "Takes meeting notes and manages official correspondence",
                "Assists in report writing & proposals",
                "Keeps records of all organizational activities"
              ]}
            />
            <MemberCard
              name="John Moses"
              role="Finance/Treasurer"
              responsibilities={[
                "Oversees budgeting, income, and expenditure",
                "Ensures financial accountability & transparency",
                "Works closely with sponsorship/partnerships team"
              ]}
            />
            <MemberCard
              name="David Olabatoke"
              role="Head, Partnerships & Sponsorships"
              responsibilities={[
                "Leads the search for sponsors, donors, and partners",
                "Handles stakeholder relations and community engagement",
                "Ensures external collaborations are maximized"
              ]}
            />
            <MemberCard
              name="Ayodele O. Janet & Tomilola O. Janet"
              role="Head, Protocol & Guest Relations"
              responsibilities={[
                "Manages invitation of dignitaries, speakers, and special guests",
                "Ensures proper hosting, seating, and flow of VIPs",
                "Works with Welfare Team to maintain class and order"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP / SPONSORSHIP SECTION */}
      <section id="sponsorship" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="w-full lg:w-1/2 p-8 bg-blue-50 border-l-8 border-[#89CFF0] rounded-r-2xl flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/img6.jpg" 
                alt="Future Leader" 
                className="w-40 h-40 object-cover rounded-xl shadow-lg border-4 border-white shrink-0" 
              />
              <div>
                <p className="text-gray-900 font-black text-xl italic leading-tight">
                  "The boys of today, become kings tomorrow."
                </p>
                <p className="text-gray-600 text-sm mt-4 font-semibold leading-relaxed">
                  The concept of Feminism cannot thrive without proper training and upbringing of boys.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-[#89CFF0] rounded-2xl text-white shadow-xl flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/img5.jpg" 
                alt="Sponsorship" 
                className="w-40 h-40 object-cover rounded-xl shadow-lg border-4 border-white shrink-0" 
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Partner With Us</h2>
                <p className="mt-3 text-sm font-medium leading-snug">
                  Help us build the next generation of leaders. For sponsorship enquiries, contact 
                  <strong className="block text-white mt-1">Kehinde James Oluwole</strong>
                </p>
                <a 
                  href="tel:08138209313" 
                  className="inline-block mt-4 bg-white text-[#89CFF0] px-6 py-2 rounded-full font-bold text-sm shadow-md hover:bg-blue-50 transition-all"
                >
                  Call: 08138209313
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-xl uppercase mb-4 tracking-wider">The Boychild Conference</h4>
            <p className="text-gray-400 text-sm italic">"Transforming boys into global leaders."</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#89CFF0]">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:08138209313" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#89CFF0] transition-colors group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#89CFF0]/20">
                  <Phone size={18} className="text-[#89CFF0]" />
                </div>
                <span>08138209313</span>
              </a>
              <a href="mailto:Boychildconference@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#89CFF0] transition-colors group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#89CFF0]/20">
                  <Mail size={18} className="text-[#89CFF0]" />
                </div>
                <span>Boychildconference@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/boychild_conference" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#89CFF0] transition-colors group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#89CFF0]/20">
                  <Instagram size={18} className="text-[#89CFF0]" />
                </div>
                <span>@boychild_conference</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#89CFF0]">Quick Navigation</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a 
                  href="#mission" 
                  onClick={(e) => handleQuickNavClick(e, '#mission')}
                  className="hover:text-white transition-colors cursor-pointer block py-1"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => handleQuickNavClick(e, '#team')}
                  className="hover:text-white transition-colors cursor-pointer block py-1"
                >
                  The Team
                </a>
              </li>
              <li>
                <a 
                  href="#sponsorship" 
                  onClick={(e) => handleQuickNavClick(e, '#sponsorship')}
                  className="hover:text-white transition-colors cursor-pointer block py-1"
                >
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          <p>© 2026 TheBoychildConference. All Rights Reserved.</p>
          <div className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest">
            Built by <span className="text-gray-400 font-bold">Bello Bambo</span>
            {" "}(<a href="mailto:bellobambo21@gmail.com" className="hover:text-[#89CFF0] transition-colors normal-case">bellobambo21@gmail.com</a>)
          </div>
        </div>
      </footer>
    </div>
  );
};

const MemberCard = ({ name, role, responsibilities }: any) => (
  <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white text-left group">
    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#89CFF0] transition-colors">
      {name}
    </h4>
    <p className="text-sm text-[#89CFF0] font-bold uppercase tracking-widest mb-4">
      {role}
    </p>
    <ul className="space-y-2">
      {responsibilities.map((task: string, index: number) => (
        <li key={index} className="text-xs text-gray-600 flex items-start">
          <span className="text-blue-400 mr-2">•</span>
          {task}
        </li>
      ))}
    </ul>
  </div>
);

export default BoychildBlog;