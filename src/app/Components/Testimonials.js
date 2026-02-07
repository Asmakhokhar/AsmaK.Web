"use client";
import SectionTitle from "./ui/SectionTitle";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Santiago Garcia Patiño",
    role: "Full Stack Software Engineer",
    image: "./santiago.PNG",
    review:"I had the pleasure of working with Asma Ismail and I can confidently say she is a highly talented and dedicated MERN developer."},
  {
    name: "Muhammad Ukasha",
    role: "Startup Founder — Machine Minds",
    image: "./ukasha.PNG",
    review:
      "Great full‑stack capability. Implemented API integrations and frontend flawlessly. Would love to work again.",
  },
  {
    name: "Muhammad Hamza",
    role: "Founder & CEO — Deviconic",
    image: "./Deviconic.PNG",
    review:
      "Delivered pixel perfect UI and handled complex features professionally. Communication was smooth and deadlines were respected.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={14} />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={<>Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Feedback</span></>}
          description="What people say about working with me"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition"
            >
              <Stars />

              <p className="text-gray-300 italic leading-relaxed mb-6">
                “{t.review}”
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
