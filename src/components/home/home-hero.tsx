"use client";

import { useTranslation } from "@/i18n/i18n-client.config";
import Image from "next/image";
import { HomeContactDialog } from "./home-contact-dialog";

export const HomeHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="main" className="bg-white dark:bg-gray-900">
      <div className="lg:gap-8 xl:gap-0 grid lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 max-w-screen-xl">
        {/* Text Section */}
        <div className="lg:col-span-7 mr-auto place-self-center">
          <h1 className="mb-6 max-w-2xl font-bold text-4xl md:text-5xl dark:text-white">
            {t("hero.title")}
          </h1>
          <p className="mb-6 lg:mb-8 max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            {t("hero.subtitle")}
          </p>
          <HomeContactDialog />
        </div>

        {/* Image Section */}
        <div className="relative lg:flex hidden lg:col-span-5 lg:mt-0">
          <Image
            src="/img/hero.webp"
            alt={t("hero.imageAlt")}
            width={500}
            height={500}
            priority
            className="rounded-lg w-auto h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
