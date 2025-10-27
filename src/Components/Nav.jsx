import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for open/close menu

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Skills", id: "#skill" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-300 shadow-md z-50 p-4 font-serif">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold text-zinc-900">Sanjay</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {nav.map((item, index) => (
            <li key={index}>
              <a
                href={item.id}
                className="hover:underline underline-offset-8 transition-all duration-200 text-zinc-800"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-center font-semibold bg-gray-200 p-4 rounded-lg shadow-md">
          {nav.map((item, index) => (
            <li key={index}>
              <a
                href={item.id}
                onClick={() => setIsOpen(false)} // close menu on click
                className="block py-2 text-zinc-800 hover:bg-gray-300 rounded-md transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
