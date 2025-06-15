'use client';

export default function LaptopImage() {
  return (
    <div className="w-full flex justify-center my-16">
      <img
        src="/laptop.jpg"
        alt="Laptop Display"
        className="w-[90%] max-w-5xl h-[400px] object-cover rounded-xl shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
