import Image from "next/image";
import DivWrapper from "./common/DivWrapper";

const aboutContent = [
  {
    title: "Introduction",
    image: "/images/logo.jpeg", 
    text: `PRATIBHA SECURE TRUST is a non-governmental Organization established under the Trust Registration Act XXI of 1860 vide registration no is 559 of 2016 with the objective to cater to the needs of the Down-trodden of the society. The head quarter of the society is located in Delhi, Address - 1180 Janta Flats GTB Enclave Near Roopa Dairy Delhi-110093. The Trust is also registered with the GNCT DELHI (Govt Of India).`,
  },
  {
    title: "Our Staff",
    image: "/images/staff.jpeg", 
    text: `Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action. Think you would be a good fit? Get in touch for more information. Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sensible solutions. We've consistently grown since then, all thanks to the helping hands of this amazing community!`,
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-6 sm:px-6 lg:px-16 bg-white text-center">
      <DivWrapper className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          About us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {aboutContent.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                className="w-fit h-64 object-contain rounded"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-semibold mt-6 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-700 text-justify px-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </DivWrapper>
    </section>
  );
}
