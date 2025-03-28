// import { Menu, Search, User } from "lucide-react";
// import profile from "../../../assets/profile.png";

// export default function Navbar() {
//     return (
//         <nav className="bg-blue-300 shadow-md fixed top-0 left-0 w-full h-16 flex items-center px-4 md:px-6 lg:px-8 justify-between z-50">
            
//             {/* Left Section - Menu */}
//             <div className="flex items-center">
//             <div className="flex items-center gap-2 cursor-pointer">
//                     <img src={profile} className="w-10 h-10 rounded-full bg-transparent" alt="User Profile" />
//                     <span className=" font-medium">Comprify</span>
//                 </div>
//             </div>

//             {/* Middle Section - Fixed Search Bar */}
//             <div className="flex-grow flex justify-center px-2">
//                 <div className="relative w-40 sm:w-52 md:w-72 lg:w-96">
//                     <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-sm"
//                     />
//                 </div>
//             </div>

//             {/* Right Section - User Icon & Profile */}
//             <div className="flex items-center gap-4">
//                 <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
//                     <User size={20} className="text-gray-700" />
//                 </button>
//             </div>

//         </nav>
//     );
// }


import { Search, User, ChevronDown } from "lucide-react";
import profile from "../../../assets/profile.png";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(""); // Fix: Add userEmail state

    useEffect(() => {
        const email = localStorage.getItem("userEmail"); // Get email from localStorage
        if (email) setUserEmail(email);
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove authentication token
        localStorage.removeItem("userEmail"); // Remove email from storage
        window.location.reload(); // Refresh to redirect to login page (or handle navigation)
    };

    return (
        <nav className="bg-blue-300 shadow-md fixed top-0 left-0 w-full h-16 flex items-center px-4 md:px-6 lg:px-8 justify-between z-50">
            
            {/* Left Section - Menu */}
            <div className="flex items-center">
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={profile} className="w-10 h-10 rounded-full bg-transparent" alt="User Profile" />
                    <span className="font-medium">Comprify</span>
                </div>
            </div>

            {/* Middle Section - Fixed Search Bar */}
            <div className="flex-grow flex justify-center px-2">
                <div className="relative w-40 sm:w-52 md:w-72 lg:w-96">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-sm"
                    />
                </div>
            </div>

            {/* Right Section - User Dropdown */}
            <div 
    className="relative group"
    // onMouseEnter={() => setDropdownOpen(true)}
    // onMouseLeave={() => setDropdownOpen(false)}
    onClick={() => setDropdownOpen(!dropdownOpen)}
>
    <button className="flex items-center gap-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 cursor-pointer">
    <User size={20} className="text-gray-700" />
        <div className="text-left">
            <span className="text-sm font-medium text-gray-900">{userEmail || "Guest"}</span>
            <p className="text-xs text-black">Admin</p> {/* You can dynamically change role */}
        </div>
        <ChevronDown size={16} className="text-gray-700" />
    </button>

    {/* Dropdown Menu */}
    {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
            <button 
                onClick={handleLogout} 
                className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100 cursor-pointer"
            >
                Logout
            </button>
        </div>
    )}
</div>

        </nav>
    );
}