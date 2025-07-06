// components/VisionSection.tsx

import Image from "next/image";
import DivWrapper from "./common/DivWrapper";
import ProgrammesSection from "./ProgrammesSection";

export default function VisionComponent() {
    return (
      <section className="bg-blue-100">
        <DivWrapper className="px-4 py-16 sm:px-6 lg:px-20 space-y-20 mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Empowering Change Together
        </h2>
  
        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src="/images/mission.jpeg" width={1000} height={1000} alt="Mission" className="rounded shadow w-full h-72 object-cover" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Pratibha Secure Trust, our mission is to uplift marginalized communities through education and empowerment.
              We believe that every individual deserves a chance to thrive, and we are committed to making this a reality.
            </p>
          </div>
        </div>
  
        {/* Upcoming Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center flex-col-reverse md:flex-row">
          <div>
            <h3 className="text-2xl font-bold mb-4">Upcoming Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are launching a <strong>senior citizen home</strong> for individuals aged 60+ to provide food, clothing, medical aid, and emotional support. <br /><br />
              Additionally, a <strong>child care home</strong> will support orphans and neglected children whose parents cannot raise them. As children are the future of the nation, we prioritize their care and development.
            </p>
          </div>
          <Image src="/images/clothes_donation.jpeg" width={1000} height={1000} alt="Vision" className="rounded shadow w-full h-72 object-cover" />
        </div>
  
        <ProgrammesSection />
  
        {/* Cancer Support Notice */}
        <div className="bg-red-100 border border-red-300 rounded p-6 max-w-4xl mx-auto text-center shadow">
          <h3 className="text-xl font-bold text-red-700 mb-2">HELPING HAND FOR CANCER PATIENTS</h3>
          <p className="text-red-700 font-medium">Sahara for बेसहारा</p>
          <ul className="mt-3 text-gray-800 text-lg list-disc list-inside space-y-1 text-left">
            <li>Medicine Facilities</li>
            <li>Chemotherapy Treatments</li>
            <li>Immunotherapy</li>
          </ul>
          <div className="mt-4 text-sm text-gray-700 font-medium leading-relaxed">
            <p><strong>⚠ ATTENTION:</strong> No branch / No crowd collection out of Delhi.</p>
            <p>Pratibha Secure Trust declares that no volunteer or employee has been appointed to collect donations for cancer patients outside Delhi.</p>
            <p>We do not have any other official branches apart from our central office located in Delhi. Please be cautious of fraud.</p>
          </div>
        </div>
        </DivWrapper>
      </section>
    );
  }