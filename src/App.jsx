import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      {/* ------------------ BANNER ------------------ */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-orange-500">
            KNOW US
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            IT’S TIME TO FALL IN LOVE WITH BALI
          </h2>
        </div>
      </section>

      {/* ------------------ SECTION 1 ------------------ */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 py-16">
        <div className="md:w-1/2 text-left flex flex-col gap-4">
          <p className="text-lg text-white leading-relaxed">
            We are a couple of nomads who used to explore the globe. The day we
            stepped our foot on Balinese ground one thing was clear – we fell in
            love. We kept coming back every few months and understood that this
            is a love affair for a lifetime. We fully moved here in 2018 and
            have been exploring the island ever since. We’re excited to share
            what we’ve found and show you this beautiful corner of the world.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
            alt="Couple in Bali"
            className="rounded-lg object-cover w-full h-[400px] md:h-[500px]"
          />
        </div>
      </section>

      {/* ------------------ SECTION 2 ------------------ */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 py-16">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Bali Scenery"
            className="rounded-lg object-cover w-full h-[400px] md:h-[500px]"
          />
        </div>
        <div className="md:w-1/2 text-left flex flex-col gap-4">
          <p className="text-lg text-white leading-relaxed">
            <span className="font-semibold text-orange-500">
              Jessie Russell:
            </span>{" "}
            “I’ve been traveling my whole life. My parents had a burning passion
            for exploring which I have inherited. It's no surprise that I was
            destined to meet Miller on my vacation in Hawaii. Since then we’ve
            been sight-seeing together up until we fell in love with Bali.”
          </p>
          <p className="text-lg text-white leading-relaxed">
            <span className="font-semibold text-orange-500">
              Miller Donovan:
            </span>{" "}
            “I am inspired by nature and diversity of planet Earth. I'm a
            photographer and take pictures wherever I go - same goes for my
            beloved Bali. I am lucky to share my time with amazing Jessie, who
            is the best companion to explore this island with. Together, we've
            turned every stone in this place and are ready to share our findings
            with you.”
          </p>
        </div>
      </section>

      {/* ------------------ TESTIMONIAL ------------------ */}
      <section className="bg-gray-900 py-16 px-8 md:px-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-orange-500">
          WHAT THEY SAY ABOUT US
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto italic">
          How can I begin to describe my experience with KEJ Tours and
          Travels... It was absolutely unforgettable! I always dreamed of a
          seamless and enjoyable trip, and thanks to KEJ Tours and Travels, I
          was able to explore my destination fully, experience the local
          culture, and create memories that will last a lifetime. They exceeded
          all my expectations and made my journey truly special.
        </p>
        <p className="mt-4 font-bold text-white">- Alice Bloomberg</p>
      </section>

      {/* ------------------ CONTACT FORM ------------------ */}
      <section className="py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-orange-500">
          COME VISIT US
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          We’ve been obsessed with exploring this island for several years - let
          us show the best we’ve found! Contact us so we can help you organize a
          memorable stay at one of the most magical places on the planet!
        </p>

        <form className="flex flex-col gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Name*"
            className="px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message*"
            rows="4"
            className="px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button className="mt-2 bg-orange-500 hover:bg-blue-400 text-black font-semibold px-6 py-2 rounded-full transition">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen font-sans text-white">
      {/* ------------------ HERO / HEADER WITH IMAGE ------------------ */}
      <section
        className="relative w-full h-96 flex flex-col justify-center items-center text-center px-8"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383050.jpg?semt=ais_hybrid&w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-orange-500">
            Contact Us
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-white">
            Get in touch with our expert team. We're here to help you with all
            your technology needs and bring your digital vision to life.
          </p>
        </div>
      </section>

      {/* ------------------ CONTACT FORM ------------------ */}
      <section className="py-16 px-8 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="border rounded-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="border rounded-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject *"
              className="border rounded-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Tell us about your project or inquiry..."
              rows="5"
              className="border rounded-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-black rounded-full px-6 py-2 hover:bg-blue-400 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 text-black">
            <h2 className="text-3xl font-semibold mb-4 text-orange-500">
              Contact Information
            </h2>

            <div>
              <h3 className="font-bold flex items-center gap-2">📞 Phone</h3>
              <p>+91 8088875271</p>
            </div>

            <div>
              <h3 className="font-bold flex items-center gap-2">✉️ Email</h3>
              <p>info@kej.co.in</p>
              <p>hr@kej.co.in</p>
            </div>

            <div>
              <h3 className="font-bold flex items-center gap-2">🌐 Website</h3>
              <p>www.kej.co.in</p>
            </div>

            <div>
              <h3 className="font-bold flex items-center gap-2">📍 Office</h3>
              <p>
                KEJ IT SOLUTIONS PVT LTD <br />
                Novel MSR Building, 3rd Floor <br />
                Subbaiah Reddy Colony, Marathahalli Village <br />
                Marathahalli, Bengaluru, Karnataka 560037, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ MAP PLACEHOLDER ------------------ */}
      <section className="py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-orange-500">
          Find Us on the Map
        </h2>
        <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Map Placeholder</span>
        </div>
      </section>
    </div>
  );
};

// Home component for all sections
const Home = () => (
  <>
    {/* ------------------ HERO SECTION ------------------ */}
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center px-10 pt-[100px] pb-20"
      style={{
        backgroundImage:
          "url('https://makeyourasia.com/images/News/tag-thumbnail/travel-requirements/bali.jpg')",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-5xl text-center md:text-left">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="text-white text-4xl md:text-5xl font-light tracking-wide mb-3">
          IT’S TIME TO
        </p>
        <h2 className="text-white text-7xl md:text-9xl font-bold leading-none">
          VISIT BALI
        </h2>
        <h3 className="text-white text-lg md:text-xl font-light mt-6 max-w-2xl">
          Crave new adventures, mystical experiences and relaxing beaches? You
          need to visit Bali. We make sure that you’ll get an experience you'll
          never forget.
        </h3>
        <button className="mt-10 rounded-full border-2 border-white text-white tracking-widest px-8 py-2 hover:bg-white hover:text-black transition duration-300">
          OUR OFFERS
        </button>
      </div>
    </section>
    {/* ------------------ LICENSE TO EXPLORE ------------------ */}
    <section className="bg-[#000000] py-24 px-8 md:px-20 text-center text-[#db9e72]">
      <h2 className="text-5xl font-serif mb-16 tracking-wide">
        LICENSE TO EXPLORE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        {/* Adventure */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Adventure Bali"
            className="rounded-lg object-cover h-72 w-full shadow-lg"
          />
          <h3 className="mt-6 text-2xl font-serif">THRILL</h3>
          <button className="mt-4 border border-[#4b5748] rounded-full px-6 py-2 tracking-widest hover:bg-[#113858] hover:text-white transition">
            DISCOVER BALI
          </button>
        </div>

        {/* Culture */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
            alt="Culture Bali"
            className="rounded-lg object-cover h-72 w-full shadow-lg"
          />
          <h3 className="mt-6 text-2xl font-serif">HERITAGE</h3>
          <button className="mt-4 border border-[#4b5748] rounded-full px-6 py-2 tracking-widest hover:bg-[#113858] hover:text-white transition">
            EXPERIENCE BALI
          </button>
        </div>

        {/* Relaxation */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="Relaxation Bali"
            className="rounded-lg object-cover h-72 w-full shadow-lg"
          />
          <h3 className="mt-6 text-2xl font-serif">SERENITY</h3>
          <button className="mt-4 border border-[#4b5748] rounded-full px-6 py-2 tracking-widest hover:bg-[#113858] hover:text-white transition">
            UNWIND IN BALI
          </button>
        </div>
      </div>
    </section>
    {/* ------------------ BALINESE ESCAPE ------------------ */}
    <section className="min-h-screen px-8 md:px-20 bg-[#ffffff] text-[#db9e72] flex flex-col md:flex-row items-center justify-center gap-16">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Temple Bali"
        className="rounded-lg object-cover w-full md:w-1/2 h-[440px] md:h-[600px]"
      />
      <div className="md:w-1/2 text-left flex flex-col gap-6 text-lg leading-relaxed font-serif">
        <h2 className="text-5xl font-serif">YOUR BALINESE ESCAPE</h2>
        <p className="text-black">
          It's no coincidence that Bali is one of the top destinations for the
          Instagram nation. The breathtaking nature, the endless beaches, exotic
          temples and friendly locals make the island a place for everyone.
        </p>
        <p className="text-black">
          We know Bali better than the backs of our hands, meaning that whether
          you want to plan a surfing holiday or find inner peace on a meditation
          retreat, we know exactly how to start planning your dream trip to
          Bali.
        </p>
        <button className="self-start border border-[#4b5748] rounded-full px-6 py-2 tracking-widest hover:bg-[#113858] hover:text-white transition">
          FIND OUT MORE
        </button>
      </div>
    </section>
    {/* ------------------ BALINESE LOVE STORY ------------------ */}
    <section className="min-h-screen px-8 md:px-20 bg-[#000000] text-[#db9e72] flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="md:w-1/2 text-left flex flex-col gap-6 text-lg font-serif">
        <h2 className="text-5xl font-serif mb-6">OUR BALINESE LOVE STORY</h2>
        <p className="text-white">
          We are a couple of nomads who used to explore the globe. The day we
          stepped our foot on Balinese ground one thing was clear – we fell in
          love. We kept coming back every few months and understood that this is
          a love affair for a lifetime.
        </p>
        <p className="text-white">
          We fully moved here in 2018 and been exploring the island ever since.
          We’re excited to share what we’ve found and show you this beautiful
          corner of the world.
        </p>
        <button className="self-start border border-white rounded-full px-6 py-2 tracking-widest hover:bg-[#113858] hover:text-[#ffffff] transition">
          LEARN OUR STORY
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Bali Waterfall"
        className="rounded-lg object-cover w-full md:w-1/2 h-[440px] md:h-[600px]"
      />
    </section>
    {/* ------------------ GUEST EXPERIENCES ------------------ */}
    <section className="min-h-screen px-8 md:px-20 bg-[#ffffff] text-[#db9e72] flex flex-col justify-center items-center text-center font-serif gap-8">
      <h2 className="text-5xl font-serif mb-6">GUEST EXPERIENCES</h2>
      <p className="text-lg max-w-3xl mx-auto text-black">
        How can I begin to describe my time with Poveda… It was simply
        life-changing! I always imagined that Bali would be a breathtaking
        destination, but thanks to Poveda, I was able to not just experience the
        culture, but have once-in-a-lifetime memories. I got so much more than I
        ever anticipated from my holiday.
      </p>
      <p className="italic text-lg mt-4 text-black">- Alice Bloomberg</p>
    </section>
    {/* ------------------ FOOTER ------------------ */}
    {/* <footer className="bg-[#000000] text-[#db9e72] py-16 px-8 md:px-20"> */}
    {/* Your footer code remains unchanged */}
    ...
    {/* </footer> */}
  </>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="font-['Playfair_Display'] text-gray-800 bg-white">
        {/* ------------------ NAVBAR ------------------ */}
        <header
          className={`fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-gradient-to-b from-sky-300/90 to-sky-100/40 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="./logo.jpg"
              alt="Poveda Logo"
              className="w-35 h-35 object-cover rounded-full border shadow-sm"
            />
          </div>

          <nav>
            <ul className="flex gap-10 text-sm tracking-widest font-semibold text-sky-100">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer hover:text-sky-400 transition"
                >
                  HOME
                </Link>
              </li>

              {/* VISIT with dropdown */}
              <li className="relative group cursor-pointer">
                <span className="hover:text-sky-400 transition">VISIT</span>
                <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li className="px-4 py-2 hover:bg-sky-100 hover:text-sky-800 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-sky-100 hover:text-sky-800 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-sky-100 hover:text-sky-800 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-sky-400 transition"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-sky-400 transition"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ------------------ ROUTES ------------------ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* ------------------ FOOTER ------------------ */}
        <footer className="bg-[#000000] text-[#db9e72] py-16 px-8 md:px-20 mt-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Left side: Images + Subscribe */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:w-2/3 items-center">
              {/* Images */}
              <div className="flex flex-col gap-4 md:w-1/3">
                <img
                  src="./logo.jpg"
                  alt="Scenic Bali"
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Subscribe */}
              <div className="md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl font-serif mb-4 leading-tight text-white">
                  STAY UPDATED
                </h2>
                <p className="mb-6 max-w-md text-gray-300">
                  Subscribe to our newsletter to always be the first to hear
                  about recent news, offers, and adventures in Bali.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 items-center max-w-md">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow rounded-md px-4 py-2 bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  <button
                    type="submit"
                    className="border border-white rounded-full px-6 py-2 tracking-widest hover:bg-white hover:text-gray-900 transition"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>

            {/* Right side: Navigation + Contact + Social */}
            <div className="flex flex-col justify-center items-center md:items-end gap-6 text-gray-300 text-center md:text-right">
              <h2 className="text-3xl font-serif mb-2 text-white">
                KEJ TOURS AND TRAVELS
              </h2>
              <nav className="flex flex-col space-y-1 text-lg">
                <a href="#" className="hover:underline hover:text-white">
                  About us
                </a>
                <a href="#" className="hover:underline hover:text-white">
                  Visit
                </a>
                <a href="#" className="hover:underline hover:text-white">
                  Pricing
                </a>
                <a href="#" className="hover:underline hover:text-white">
                  Contact
                </a>
              </nav>

              <div className="mt-4 text-white">
                <p>info@keytoursandtravels.com</p>
                <p>+91 98765 43210</p>
              </div>

              {/* Social icons */}
              <div className="flex space-x-6 mt-4 justify-center md:justify-end text-white">
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-gray-300"
                >
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.611 1.794-1.574 2.163-2.723-0.949 0.564-2.005 0.974-3.127 1.195-0.897-0.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 0.39 0.045 0.765 0.127 1.124-4.09-0.205-7.719-2.164-10.148-5.144-0.423 0.725-0.666 1.562-0.666 2.475 0 1.708 0.87 3.213 2.188 4.096-0.807-0.026-1.566-0.247-2.228-0.616v0.061c0 2.386 1.693 4.374 3.946 4.827-0.413 0.112-0.849 0.171-1.296 0.171-0.317 0-0.626-0.03-0.928-0.086 0.627 1.956 2.444 3.379 4.6 3.419-1.68 1.317-3.809 2.103-6.102 2.103-0.395 0-0.783-0.023-1.17-0.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.503 14-14 0-0.213-0.005-0.425-0.014-0.636 0.962-0.695 1.8-1.562 2.46-2.549z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-gray-300"
                >
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0h-21.35c-0.731 0-1.325 0.59-1.325 1.32v21.36c0 0.732 0.594 1.325 1.325 1.325h11.48v-9.293h-3.124v-3.622h3.124v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466 0.099 2.799 0.143v3.244h-1.918c-1.504 0-1.797 0.716-1.797 1.763v2.309h3.595l-0.468 3.622h-3.127v9.293h6.127c0.732 0 1.326-0.593 1.326-1.325v-21.36c0-0.73-0.594-1.32-1.326-1.32z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-gray-300"
                >
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584 0.012 4.85 0.07 1.366 0.062 2.633 0.336 3.608 1.31 0.975 0.974 1.248 2.24 1.31 3.608 0.058 1.266 0.07 1.645 0.07 4.85s-0.012 3.584-0.07 4.85c-0.062 1.366-0.335 2.633-1.31 3.608-0.975 0.975-2.241 1.248-3.608 1.31-1.266 0.058-1.645 0.07-4.85 0.07s-3.584-0.012-4.85-0.07c-1.366-0.062-2.633-0.335-3.608-1.31-0.975-0.975-1.248-2.241-1.31-3.608-0.058-1.266-0.07-1.645-0.07-4.85s0.012-3.584 0.07-4.85c0.062-1.366 0.335-2.633 1.31-3.608 0.975-0.975 2.241-1.248 3.608-1.31 1.266-0.058 1.645-0.07 4.85-0.07zm0-2.163c-3.259 0-3.667 0.014-4.947 0.072-1.5 0.066-2.92 0.366-3.967 1.413-1.048 1.048-1.347 2.467-1.413 3.967-0.058 1.28-0.072 1.688-0.072 4.947s0.014 3.667 0.072 4.947c0.066 1.5 0.366 2.92 1.413 3.967 1.048 1.048 2.467 1.347 3.967 1.413 1.28 0.058 1.688 0.072 4.947 0.072s3.667-0.014 4.947-0.072c1.5-0.066 2.92-0.366 3.967-1.413 1.048-1.048 1.347-2.467 1.413-3.967 0.058-1.28 0.072-1.688 0.072-4.947s-0.014-3.667-0.072-4.947c-0.066-1.5-0.366-2.92-1.413-3.967-1.048-1.048-2.467-1.347-3.967-1.413-1.28-0.058-1.688-0.072-4.947-0.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
