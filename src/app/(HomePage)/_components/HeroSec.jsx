// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Invest in Local Businesses
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Buy, sell, and track shares of locally listed businesses. Support your community while earning returns.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-indigo-400 flex items-center gap-1">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
