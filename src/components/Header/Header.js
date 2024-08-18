import React, { useState, useEffect } from 'react';

// Komponent nawigacji, który można używać zarówno w wersji desktopowej, jak i mobilnej
const NavLink = ({ href, iconSrc, label }) => {
  // Sprawdza, czy bieżący URL pasuje do linku
  const isActive = window.location.pathname === href;

  return (
    <a
      href={href}
      className={`hover:text-gray-900 flex gap-[9px] font-manrope text-left text-[16px] leading-[24px] font-bold tracking-normal px-[16px] py-[8px] rounded-md transition ${
        isActive ? 'active' : 'text-[#072635] hover:bg-gray-100'
      }`}
    >
      <img src={iconSrc} alt={label} className="h-[20px]" /> 
      {label}
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative mb-[40px] xl:mb-0">
      <header className="flex items-center justify-between px-[16px] py-[16px] bg-white xl:m-[18px] mb-[-20px] xl:mb-[12px] shadow-md rounded-[24px]">
        <div className="flex items-center space-x-4">
          <img src="/img/TestLogo.svg" alt="Tech.Care Logo" className="h-8" />
        </div>
        <nav className="hidden menu lg:flex gap-[15px] 2xl:gap-[40px]">
          <NavLink href="/" iconSrc="/img/home_FILL0_wght300_GRAD0_opsz24.svg" label="Overview" />
          <NavLink href="/patients" iconSrc="/img/group_FILL0_wght300_GRAD0_opsz24.svg" label="Patients" />
          <NavLink href="/schedule" iconSrc="/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" label="Schedule" />
          <NavLink href="/messages" iconSrc="/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" label="Message" />
          <NavLink href="/transactions" iconSrc="/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg" label="Transactions" />
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <img
            src="/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
            alt="Dr. Jose Simmons"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">Dr. Jose Simmons</h2>
            <p className="text-xs text-gray-500">General Practitioner</p>
          </div>
          <div className="flex items-center space-x-[12px]">
            <div className="border-l h-6"></div>
            <div className='flex gap-[12px]'>
              <img src="/img/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="Settings" className="h-[20px]" />
              <img src="/img/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="More" className="h-[18px]" />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay i boczne menu po prawej stronie */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>
      <div
        className={`menu fixed inset-y-0 right-0 bg-white w-64 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <button onClick={closeMenu} className="self-end text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <NavLink href="/" iconSrc="/img/home_FILL0_wght300_GRAD0_opsz24.svg" label="Overview" />
          <NavLink href="/patients" iconSrc="/img/group_FILL0_wght300_GRAD0_opsz24.svg" label="Patients" />
          <NavLink href="/schedule" iconSrc="/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" label="Schedule" />
          <NavLink href="/messages" iconSrc="/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" label="Message" />
          <NavLink href="/transactions" iconSrc="/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg" label="Transactions" />
        </div>
        <div className="flex items-center space-x-4 px-4 py-4 border-t border-gray-200">
          <img
            src="/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
            alt="Dr. Jose Simmons"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-base font-semibold">Dr. Jose Simmons</h2>
            <p className="text-sm text-gray-500">General Practitioner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
