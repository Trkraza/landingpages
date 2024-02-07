"use client";
export default function Marquee() {
  // Data for marquee items
  const menuItems = [
    { name: "DISCOVER", icon: "🔍" },
    { name: "LEARN", icon: "💡" },
    { name: "CODE", icon: "💻" },
    { name: "DEVELOP", icon: "🛠️" },
  ];

  return (
    <div className="overflow-hidden bg-purple-700">
      <div className="flex animate-marquee py-2">
        {menuItems.map((item, index) => (
          <div key={index} className="mx-4 flex items-center space-x-2">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-white font-bold uppercase">{item.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translate3d(100%, 0, 0);
          }
          to {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
