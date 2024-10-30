import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/storage", name: "Storage", imageUrl: "/ssd.jpg" },
  { href: "/laptop", name: "Laptop", imageUrl: "/laptop.jpg" },
  { href: "/gear", name: "Gaming gears", imageUrl: "/gaming-gear.jpg" },
  { href: "/ram", name: "RAM", imageUrl: "/ram.jpg" },
  { href: "/cpu", name: "CPU", imageUrl: "/cpu.jpg" },
  { href: "/motherboard", name: "Motherboard", imageUrl: "/motherboard.jpg" },
  { href: "/monitor", name: "Monitor", imageUrl: "/monitor.jpg" },
  { href: "/pc", name: "PC", imageUrl: "/pc.jpg" },
  
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-400 mb-12">
          Discover high-quality components and devices to upgrade your setup.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
