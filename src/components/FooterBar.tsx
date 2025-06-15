
const FooterBar = () => (
  <footer className="mt-20 w-full py-8 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 via-white to-yellow-100 shadow-t-sm">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <div className="flex items-center gap-3 mb-6 md:mb-0">
        <span className="font-bangers text-xl text-blue-900 tracking-wide">keepics</span>
        <span className="text-xs text-gray-400">© {new Date().getFullYear()} All Rights Reserved</span>
      </div>
      <ul className="flex flex-wrap gap-5 text-xs text-blue-900 font-semibold">
        <li><a href="#" className="hover:text-yellow-500 underline transition">FAQ</a></li>
        <li><a href="#" className="hover:text-yellow-500 underline transition">Privacy</a></li>
        <li><a href="#" className="hover:text-yellow-500 underline transition">Contact</a></li>
        <li>
          <select className="bg-blue-50 border border-blue-300 rounded px-2 py-1 text-xs font-medium ml-2">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
            <option>HE</option>
            <option>DE</option>
          </select>
        </li>
      </ul>
    </div>
  </footer>
);

export default FooterBar;
