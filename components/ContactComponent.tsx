// components/ContactSection.tsx

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 text-center text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact Us</h2>

      <div className="space-y-6 text-lg max-w-3xl mx-auto leading-relaxed">
        <p>
          <strong>Name of the Organization:</strong> PRATIBHA SECURE TRUST
        </p>

        <p>
          <strong>HEAD OFFICE:</strong> 1180 Janta Flats GTB Enclave Near Roopa
          Dairy Delhi-110093
        </p>

        <p>
          <strong>District:</strong> NORTHEAST &nbsp;
          <strong>State:</strong> Delhi &nbsp;
          <strong>Pincode:</strong> 110093
        </p>

        <p>
          <strong>Helpline No:</strong> 9810634045, 9582198989
        </p>

        <p>
          <strong>Email ID:</strong>{" "}
          <a
            href="mailto:pratibhasecuretrust205@gmail.com"
            className="text-gray-600 underline hover:text-teal-600"
          >
            pratibhasecuretrust205@gmail.com
          </a>
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center gap-10">
        <Link
          href={"https://www.instagram.com/pratibhasecuretrust205/"}
          target="_blank"
          className="text-3xl"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"https://www.facebook.com/share/19WvfYUKZw/"}
          target="_blank"
          className="text-3xl"
        >
          <FaFacebookF />
        </Link>
      </div>

      <div className="mt-12 text-xl font-semibold text-gray-900">
        Pratibha Secure Trust
      </div>
    </section>
  );
}
