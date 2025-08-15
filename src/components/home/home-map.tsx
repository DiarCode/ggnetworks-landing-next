"use client";

import { useTranslation } from "@/i18n/i18n-client.config";
import Link from "next/link";
import React from "react";

export const HomeMap: React.FC = () => {
  const { t } = useTranslation();

  const handleMapClick = () => {
    window.open(process.env.SMTP_PORT ?? "https://go.2gis.com/BBmvc", "_blank");
  };

  return (
    <section
      id="location"
      className="bg-gray-50 dark:bg-gray-800 py-8 lg:py-16"
    >
      <div className="mx-auto px-4 lg:px-6 max-w-screen-xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="font-extrabold text-gray-900 dark:text-white text-4xl">
            {t("map.title")}
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">
            {t("map.subtitle")}
          </p>
        </div>

        {/* Map Section */}
        <div
          className="group relative border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden cursor-pointer"
          onClick={handleMapClick}
        >
          {/* Overlay hint (optional) */}
          <div className="group-hover:bg-black/5 z-10 absolute inset-0 bg-transparent transition" />

          {/* Map Iframe */}
          <iframe
            src="https://yandex.kz/map-widget/v1/?indoorLevel=1&ll=71.404487%2C51.110104&mode=search&oid=Y0gYcgdjQEIDQFtrfX1wcXxlYA%3D%3D&ol=house&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJ9N4YAoBEXUARBDkoYaYTR0AiBgABAgMEBSgKOABAowFIAWoFd29ybGSdAc3MTD2gAQCoAQC9AbrDUHyCAgpnZ25ldHdvcmtzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=71.404487%2C51.110104&sspn=0.002010%2C0.000756&text=ggnetworks&z=19.83"
            width="100%"
            height="400"
            className="relative pointer-events-auto"
            allowFullScreen
          ></iframe>
        </div>

        {/* Address Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("map.address")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("map.contact")}{" "}
            <Link
              href="tel:+77172978630"
              className="text-primary hover:underline"
            >
              +7 7172 97 86 30
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
