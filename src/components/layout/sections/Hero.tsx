const Hero = () => {
  return (
    <section className="bg-[#F0F8FF] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">


        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#001F3F]">
            Pure Strength. <span className="text-[#D4AF37]">Vaarahi Water</span>
          </h1>
          <p className="mt-4 text-lg text-[#001F3F]/70">
            Refreshing purity flowing endlessly.
          </p>
        </div>

        {/* Infinite Scroll Images */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee">

            {/* 3 Images */}
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder1"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder2"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder3"
              className="rounded-xl shadow-lg"
            />

            {/* Duplicate for seamless scroll */}
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder1"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder2"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt="placeholder3"
              className="rounded-xl shadow-lg"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;