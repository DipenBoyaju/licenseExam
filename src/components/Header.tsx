'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { faculty } from "../app/constant/faculty";

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const dynamicFacultySubItems = faculty.map(dept => ({
  name: dept.title,
  href: `/faculty/${dept.slug}`
}));

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Take Test', href: '/take-test' },
  { name: 'Faculty', href: '', subItems: dynamicFacultySubItems },
  { name: 'Syllabus', href: '/syllabus' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact-us' },
];


function Logo({ className = "", iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>

      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d1117] border border-zinc-800 shadow-md group overflow-hidden">

        <div className="absolute inset-0 bg-orange-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur-xs scale-90" />


        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-105"
        >

          <line x1="50" y1="12" x2="50" y2="88" stroke="#f54a00" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
          <line x1="12" y1="52" x2="88" y2="52" stroke="#f54a00" strokeWidth="3" strokeLinecap="round" className="opacity-40" />


          <path d="M50,78 C62,70 76,76 82,78 L82,38 C76,36 62,30 50,38 C38,30 24,36 18,38 L18,78 C24,76 38,70 50,78 Z" stroke="#f54a00" strokeWidth="4" strokeLinejoin="round" />
          <path d="M50,38 L50,78" stroke="#f54a00" strokeWidth="3" />


          <path d="M50,22 L24,78" stroke="#f54a00" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M50,22 L76,78" stroke="#f54a00" strokeWidth="5.5" strokeLinecap="round" />

          <circle cx="50" cy="22" r="4.5" fill="#0d1117" stroke="#f54a00" strokeWidth="4" />
          <circle cx="50" cy="52" r="11" stroke="#f54a00" strokeWidth="4" />
          <circle cx="50" cy="52" r="3.5" fill="#f54a00" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center font-inter tracking-tight leading-none text-xl">
            <span className="font-black text-zinc-900 dark:text-white transition-colors">
              NEC
            </span>
            <span className="font-medium text-[#f54a00]">
              Portal
            </span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400 mt-0.5 block">
            License Preparation
          </span>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFacultyOpen, setMobileFacultyOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileFacultyOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsHeaderVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsHeaderVisible(true);
    }
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    setIsClient(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-300 ${isClient && !isHeaderVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${isClient && isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <nav
        aria-label="Global"
        className={`flex items-center justify-between ${isClient && isScrolled && isHeaderVisible ? 'p-4 lg:px-6' : 'p-6 lg:px-8'
          } max-w-7xl mx-auto`}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NEC Portal</span>
            <Logo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12" id="desktop-menu">
          {navigation.map((item) => (
            <div key={item.name} className="relative group flex items-center h-full py-2">
              {item.subItems ? (
                <>
                  <button
                    className="text-sm font-semibold flex items-center gap-1 text-gray-900 hover:text-[#f54a00] cursor-pointer"
                  >
                    {item.name}
                    <ChevronDownIcon className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="absolute top-full left-0 z-50 pt-3 hidden group-hover:block w-56">
                    <div className="rounded-md bg-white shadow-lg border border-neutral-100 py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50 hover:text-[#f54a00] ${isClient && pathname === subItem.href ? 'text-[#f54a00] bg-neutral-50' : ''
                            }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-semibold ${isClient && pathname === item.href
                    ? 'text-[#f54a00]'
                    : 'text-gray-900 hover:text-[#f54a00]'
                    }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/review"
            className="text-sm font-semibold bg-[#f54a00] text-white py-2 px-4 rounded-md transition-colors hover:bg-[#db4200]"
            rel="nofollow"
          >
            Review Us
            <span aria-hidden="true" className="inline-block pl-2">
              →
            </span>
          </Link>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={handleMobileMenuClose} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/25 backdrop-blur-xs" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={handleMobileMenuClose} className="-m-1.5 p-1.5">
              <Logo />
            </Link>
            <button
              type="button"
              onClick={handleMobileMenuClose}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="block">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => setMobileFacultyOpen(!mobileFacultyOpen)}
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-left"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`h-5 w-5 flex-none text-gray-500 transition-transform duration-200 ${mobileFacultyOpen ? 'rotate-180 text-[#f54a00]' : ''
                              }`}
                          />
                        </button>

                        <div
                          className={`mt-1 space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileFacultyOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                            }`}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleMobileMenuClose}
                              className={`block rounded-lg py-2 pl-4 pr-3 text-sm font-medium hover:bg-gray-50 hover:text-[#f54a00] border-l-2 ${isClient && pathname === subItem.href
                                ? 'text-[#f54a00] border-[#f54a00] bg-orange-50/40'
                                : 'text-gray-600 border-zinc-100'
                                }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleMobileMenuClose}
                        className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isClient && pathname === item.href
                          ? 'text-[#f54a00] bg-orange-50/50'
                          : 'text-gray-900 hover:bg-gray-50 hover:text-[#f54a00]'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/review"
                  onClick={handleMobileMenuClose}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[#f54a00] text-center shadow-xs hover:bg-[#db4200] transition-colors"
                  rel="nofollow"
                >
                  Review Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}