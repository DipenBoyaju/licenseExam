'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Take Test',
    href: '/take-test',
    subItems: [
      { name: 'Computer Engineering', href: '/take-test/computer-engineering' },
      { name: 'Civil', href: '/take-test/civil' },
      { name: 'Architecture', href: '/take-test/architecture' },
    ],
  },
  {
    name: 'Faculty',
    href: '',
    subItems: [
      { name: 'Computer Engineering', href: '/faculty/computer-engineering' },
      { name: 'Civil', href: '/faculty/civil' },
      { name: 'Architecture', href: '/faculty/architecture' },
    ],
  },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
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
            <span className="sr-only">Your Logo</span>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12" id="desktop-menu">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`text-sm font-semibold px-3 py-2 ${isClient && pathname === item.href
                  ? 'text-[#f54a00]'
                  : 'text-gray-900 hover:text-[#f54a00]'
                  }`}
              >
                {item.name}
              </Link>

              {item.subItems && (
                <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-sm hidden group-hover:block">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:text-[#f54a00] ${isClient && pathname === subItem.href ? 'text-[#f54a00]' : ''
                        }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/review"
            className="text-sm font-semibold bg-[#f54a00f1] text-white py-2 px-4 rounded-md group"
            rel="nofollow"
          >
            Review Us
            <span aria-hidden="true" className="group-hover:animate-bounce pl-2">
              →
            </span>
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Logo</span>logo
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
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleMobileMenuClose}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-[#f54a00] ${isClient && pathname === item.href
                        ? 'text-[#f54a00]'
                        : 'text-gray-900 hover:text-[#f54a00]'
                        }`}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={handleMobileMenuClose}
                            className={`-mx-3 block rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-[#f54a00] ${isClient && pathname === subItem.href ? 'text-[#f54a00]' : ''
                              }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/review"
                  onClick={handleMobileMenuClose}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:text-[#f54a00]"
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
