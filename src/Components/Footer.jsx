import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1d1f] text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* ✅ BRAND COLUMN */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* LOGO CIRCLE */}
            <div className="w-11 h-11 bg-white text-black font-bold text-xl rounded-full flex items-center justify-center">
              U
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold text-xl">Udemy Clone</h2>
              <p className="text-xs text-gray-400">Learn Anything, Anytime</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            A modern learning platform to upgrade your skills with
            industry-ready courses, created by professionals.
          </p>
        </div>

        {/* ✅ COLUMN 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* ✅ COLUMN 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* ✅ COLUMN 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">Popular Courses</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">
              React Development
            </li>
            <li className="hover:underline cursor-pointer">Node.js Backend</li>
            <li className="hover:underline cursor-pointer">MERN Stack</li>
            <li className="hover:underline cursor-pointer">UI/UX Design</li>
          </ul>
        </div>

        {/* ✅ COLUMN 4 (LANGUAGE + CTA) */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-xl">Language</h3>
          <button className="border border-gray-500 px-4 py-2 rounded text-sm hover:bg-gray-700 transition flex items-center gap-2">
            🌐 English
          </button>

          <button className="bg-white text-black px-5 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* ✅ BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Udemy Clone. All rights reserved.
          </p>

          {/* <div className="flex gap-5 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div> */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
