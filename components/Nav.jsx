// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { useEffect } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (event.target.closest('.menu-btn') === null && event.target.closest('.menu') === null) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <nav className="bg-gray-900">
//       <div className="max-w-6xl px-4 mx-auto">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             <div>
//               <Link href="/">
//                 <a className="flex items-center px-2 py-4 text-white hover:text-gray-300">
//                   <svg className="w-8 h-8 text-gray-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 15l-6-5 6-5v10z"/></svg>
//                 </a>
//               </Link>
//             </div>
//             <div>
//               <Link href="/">
//                 <a className="flex items-center px-2 py-4 text-white hover:text-gray-300">
//                   <span className="font-bold">My Text Logo</span>
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex md:hidden">
//             <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white menu-btn">
//               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className={isMenuOpen ? "hidden" : "block"} d="M4 6h16M4 12h16M4 18h16" /><path className={isMenuOpen ? "block" : "hidden"} d="M6 18L18 6M6 6l12 12" /></svg>
//             </button>
//           </div>
//           <div className={`md:flex items-center ${isMenuOpen ? "block" : "hidden"} menu`}>
//             <div className="text-sm">
//               <Link href="/">
//                 <a className="block px-2 py-1 mt-4 font-semibold text-white rounded hover:bg-gray-800" onClick={toggleMenu}>Home</a>
//               </Link>
//               <Link href="/about">
//                 <a className="block px-2 py-1 mt-4 font-semibold text-white rounded hover:bg-gray-800" onClick={toggleMenu}>About</a>
//               </Link>
//             </div>
//             </div>
//             </div>
//             </div>
//       </nav>
//   )
// };
              
             
             
