"use client";

import { useTranslation } from "@/i18n/i18n-client.config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Certificate {
  key: string;
}

const certificates: Certificate[] = [
  { key: "ajer" },
  { key: "ccna" },
  { key: "ccnp" },
  { key: "ccse" },
  { key: "hcia" },
  { key: "linuxEssentials" },
  { key: "mikrotik" },
  { key: "paloAltoCloud" },
  { key: "paloAltoSOC" },
];

export const HomeCertificates: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto px-4 lg:px-6 py-8 sm:py-16 max-w-screen-xl">
        {/* Header Section */}
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 font-extrabold text-4xl text-gray-900 dark:text-white leading-tight">
            {t("certificates.title")}
          </h2>
          <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
            {t("certificates.subtitle")}
          </p>
        </div>

        {/* Certificates Section */}
        <div className="relative flex lg:flex-row flex-col justify-center items-center lg:gap-20 mx-auto mt-10 lg:mt-0 lg:px-6 lg:py-16 max-w-screen-xl">
          {/* Certificates List */}
          <ul className="space-y-4 order-2 lg:order-1 mt-6 lg:mt-0 text-gray-900 text-lg dark:text-white">
            {certificates.map(certificate => (
              <li key={certificate.key} className="flex items-center">
                <ArrowRight className="mt-1 mr-4 w-5 h-5 text-primary dark:text-primary" />
                <p className="text-base lg:text-lg">
                  {t(`certificates.items.${certificate.key}`)}
                </p>
              </li>
            ))}
          </ul>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 rounded-lg w-[300px] h-auto overflow-hidden">
            <Image
              src="/img/certificates.svg"
              alt={t("certificates.imageAlt")}
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
