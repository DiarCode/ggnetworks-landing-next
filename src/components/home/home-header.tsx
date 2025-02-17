"use client";

import { useTranslation } from "@/i18n/i18n-client.config";
import Link from "next/link";
import { useState } from "react";
import ChangeLocale from "../ui/change-locale";

const menuItems = [
  { key: "home", href: "#main" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "certificates", href: "#certificates" },
  { key: "contacts", href: "#location" },
];

export const HomeHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="top-0 z-10 sticky bg-white dark:bg-gray-900">
      <nav className="border-gray-200 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Brand */}
          <Link href="/" className="flex items-center" aria-label="GGNetworks">
            <span className="font-semibold text-xl whitespace-nowrap self-center">
              GGNetworks
            </span>
          </Link>

          <ul className="lg:flex space-x-6 hidden font-medium">
            {menuItems.map(item => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary dark:hover:text-white dark:text-gray-400"
                >
                  {t(`menu.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Phone and Locale Switcher */}
          <div className="lg:flex items-center space-x-4 hidden">
            <a
              href="tel:+7 7172 97 86 30"
              className="font-medium text-gray-800 dark:text-white hover:underline"
            >
              +7 7172 97 86 30
            </a>
            <ChangeLocale />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 ml-2 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-gray-500 text-sm dark:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={t("menu.toggle")}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="flex flex-col items-center space-y-4 lg:hidden mt-4"
          >
            {/* Mobile Navigation Menu */}
            <ul className="flex flex-col items-center space-y-4">
              {menuItems.map(item => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="block dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 hover:text-primary dark:hover:text-white dark:text-gray-400"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {t(`menu.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Phone and Locale Switcher */}
            <div className="flex flex-col items-center space-y-2 bg-gray-100 p-2 rounded-xl w-full">
              <a
                href="tel:+7 7172 97 86 30"
                className="font-medium text-gray-800 dark:text-white hover:underline"
              >
                +7 7172 97 86 30
              </a>
              <ChangeLocale />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
