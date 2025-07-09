// src/components/Features.tsx
const features = [
  {
    title: "Buy & Sell Shares",
    desc: "Easily purchase and sell shares of verified local businesses through a secure platform.",
  },
  {
    title: "Investor Dashboard",
    desc: "Track all your investments, share history, and returns in a personalized dashboard.",
  },
  {
    title: "Level Up Rewards",
    desc: "Frequent investors are rewarded with badges and level-based benefits.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Platform Highlights
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2 text-blue-600">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
