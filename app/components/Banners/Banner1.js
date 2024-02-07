const Banner = () => {
  return (
    <div className="relative bg-blue-500 text-white p-8 w-[80vw] mx-auto">
      <div className="container flex justify-center items-center relative z-10">
        {/* Logo */}
        <div className="  ">
          <p className="text-yellow-500 my-4 text-sm">Join The Loot</p>

          {/* Offer */}
          <p className="mb-2 font-bold text-lg">Get LootBot Today</p>
          <div>
            <p className="text-sm">
              cLootBot operates on various chains and protocols. Join today and
              start your farming journey.
            </p>
          </div>
          <button type="button" className="border border-red-950">
            button
          </button>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>
    </div>
  );
};

export default Banner;
