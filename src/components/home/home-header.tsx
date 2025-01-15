import Link from "next/link";
import React, { useState } from "react";

// Define TypeScript types for the language options
type LanguageOption = {
  code: string;
  label: string;
};

const languageOptions: LanguageOption[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

const menuItems = [
  { label: "Главная", href: "#main" },
  { label: "Услуги", href: "#services" },
  { label: "Команда", href: "#team" },
  { label: "Проекты", href: "#projects" },
  { label: "Сертификаты", href: "#certificates" },
];

export const HomeHeader: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState("ru");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setCurrentLanguage(selectedLanguage);
    // Add language switching logic here if needed (e.g., API call, context update)
  };

  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              GGNetworks
            </span>
          </Link>

          {/* Contact and Language Selector */}
          <div className="flex items-center lg:order-2">
            <a
              href="tel:+7-7172-97-86-30"
              className="mr-2 rounded-lg px-5 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              rel="noopener"
            >
              +7 7172 97 86 30
            </a>
            <select
              id="language-switcher"
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="rounded-lg border bg-gray-50 px-4 py-2 text-sm text-gray-900 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              aria-label="Select language"
            >
              {languageOptions.map(option => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="ml-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
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

          {/* Menu Items */}
          <div
            id="mobile-menu"
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {menuItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
