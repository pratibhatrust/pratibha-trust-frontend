"use client"
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProgrammesSection() {
  const images = [
    "/coaching.jpeg",
    "/clothes_donation.jpeg",
    "/dance_performance.jpeg",
    "/dance.jpeg",
    "/donation.jpeg",
    "/donation2.jpeg",
    "/mission.jpeg",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Programmes & Activities
      </h3>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Programmes List */}
        <ul className="text-left max-w-2xl mx-auto text-gray-700 list-disc list-inside space-y-3 text-lg">
          <li>Free Coaching Classes (Nursery to 12th)</li>
          <li>Non-formal Education for Dropout Children</li>
          <li>Adult Literacy Programme</li>
          <li>Clothes Donation to needy people</li>
          <li>English Speaking Programme</li>
          <li>Tailoring & Cutting Courses</li>
          <li>Dance, Singing, and Acting Classes</li>
          <li>Competitive Exam Coaching</li>
          <li>Self-Employment & Work Support</li>
        </ul>

        {/* Carousel */}
        <div className="max-w-full">
          <Carousel
            showArrows
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            className="rounded shadow"
          >
            {images.map((img, idx) => (
              <div key={idx}>
                <Image
                  src={'/images'+img}
                  alt={`Programmes image ${idx + 1}`}
                  className="h-96 w-full object-cover rounded"
                  width={1000}
                  height={800}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}