"use client";
import BtnComponent from "./common/BtnComponent";
import { FaInstagram, FaFacebookF } from "react-icons/fa"; // Install via: npm install react-icons

export default function HeroSection() {

  const scrollToDonation = () => {
    const el = document.getElementById("donation-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-logo bg-cover bg-center h-screen flex items-center justify-center text-white font-montserrat">
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="absolute top-4 right-4 z-10 flex gap-4">
        <a
          href="https://www.instagram.com/pratibhasecuretrust205/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/19WvfYUKZw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition text-xl"
        >
          <FaFacebookF />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Nurturing Dreams. <br /> Building a Better Tomorrow.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          From education to skill-building and emergency aid — we stand by every
          dream that deserves a chance.
        </p>
        <BtnComponent
        onClick={scrollToDonation}
          value="DONATE NOW"
          className="py-3 px-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition text-base mt-5"
        />
      </div>

      {/* Top Center Ribbon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-400 text-white px-6 py-2 font-semibold rounded-b-lg whitespace-nowrap">
        Pratibha Secure Trust
      </div>
    </div>
  );
}