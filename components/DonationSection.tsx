import Image from "next/image";
import DivWrapper from "./common/DivWrapper";

export default function DonationSection() {
  return (
    <section id="donation-section">
      <DivWrapper className="py-16 px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/images/award.jpeg" // Place your image in public/ as donation.jpg or change path
              alt="Donation Image"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="space-y-10 text-gray-800">
            <h2 className="text-3xl font-bold text-gray-800">For Donate</h2>

            <div className="space-y-10 text-lg">
              <p>
                <strong>Account Name:</strong> Pratibha Secure Trust
              </p>
              <p>
                <strong>Account No.:</strong> 91792010020811
              </p>
              <p>
                <strong>Type of Account:</strong> SAVING
              </p>
              <p>
                <strong>Bank Name & Branch:</strong> CANARA BANK [DILSHAD
                GARDEN]
              </p>
              <p>
                <strong>IFSC Code:</strong> CNRB0019179
              </p>
            </div>
          </div>
        </div>
      </DivWrapper>
    </section>
  );
}
