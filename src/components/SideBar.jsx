export default function SideBar () {
   return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 fixed top-0 left-0 p-6 shadow-sm">
  {/* Logo */}
  <div className="mb-10 flex items-center gap-2">
    <img src="" alt="Logo" className="h-8 w-8" />
    <span className="text-xl font-bold text-[#fe5d26]">Bambi Dashboard</span>
  </div>

  {/* Navigation Links */}
  <nav className="flex flex-col gap-4">
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Dashboard" className="h-5 w-5" />
      Dashboard
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Accounts" className="h-5 w-5" />
      Accounts
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Products" className="h-5 w-5" />
      Products
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Customers" className="h-5 w-5" />
      Customers
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Calendar" className="h-5 w-5" />
      Calendar
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Settings" className="h-5 w-5" />
      Settings
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Alerts" className="h-5 w-5" />
      Alerts
    </a>
    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium">
      <img src="" alt="Help" className="h-5 w-5" />
      Help
    </a>
  </nav>

  {/* Logout */}
  <div className="mt-auto pt-10">
    <a href="#" className="flex items-center gap-3 text-red-600 hover:text-red-800 font-medium transition">
      <img src="" alt="Logout" className="h-5 w-5" />
      Logout
    </a>
  </div>
</aside>

   )
}