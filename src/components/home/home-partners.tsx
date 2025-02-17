"use client";
import { useTranslation } from "@/i18n/i18n-client.config";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface Partner {
  name: string;
  href: string;
  src: string;
  alt: string;
  height?: number;
}

const partners: Partner[] = [
  {
    name: "Cisco",
    href: "https://www.cisco.com/",
    src: "/img/partners/cisco.png",
    alt: "partners.cisco.alt",
    height: 56,
  },
  {
    name: "Huawei",
    href: "https://consumer.huawei.com/kz",
    src: "/img/partners/huawei.png",
    alt: "partners.huawei.alt",
    height: 74,
  },
  {
    name: "Juniper",
    href: "https://www.juniper.net",
    src: "/img/partners/juniper.png",
    alt: "partners.juniper.alt",
    height: 84,
  },
  {
    name: "Kaspersky",
    href: "https://www.kaspersky.kz",
    src: "/img/partners/kaspersky.png",
    alt: "partners.kaspersky.alt",
    height: 94,
  },
  {
    name: "Palo Alto Networks",
    href: "https://www.paloaltonetworks.com/",
    src: "/img/partners/paloalto.png",
    alt: "partners.paloalto.alt",
    height: 94,
  },
  {
    name: "ZTE",
    href: "https://www.zte.com.cn/global",
    src: "/img/partners/zte.png",
    alt: "partners.zte.alt",
    height: 40,
  },
  {
    name: "DELL",
    href: "https://www.dell.com/",
    src: "/img/partners/dell.png",
    alt: "partners.dell.alt",
    height: 70,
  },
  {
    name: "VMware",
    href: "https://www.vmware.com/",
    src: "/img/partners/vmware.png",
    alt: "partners.vmware.alt",
    height: 90,
  },
  {
    name: "Veem",
    href: "https://www.veem.com/",
    src: "/img/partners/veem.png",
    alt: "partners.veem.alt",
    height: 80,
  },
  {
    name: "TrendMicro",
    href: "https://www.trendmicro.com",
    src: "/img/partners/trendmicro.png",
    alt: "partners.trendmicro.alt",
    height: 70,
  },
  {
    name: "NetUP",
    href: "https://www.netup.ru",
    src: "/img/partners/netup.png",
    alt: "partners.netup.alt",
    height: 30,
  },
  {
    name: "T&T Security",
    href: "https://tntsecure.kz",
    src: "/img/partners/tntsecure.png",
    alt: "partners.tntsecure.alt",
    height: 60,
  },
  {
    name: "Check Point",
    href: "https://www.checkpoint.com",
    src: "/img/partners/checkpoint.png",
    alt: "partners.checkpoint.alt",
    height: 40,
  },
  {
    name: "Fortinet",
    href: "https://www.fortinet.com",
    src: "/img/partners/fortinet.png",
    alt: "partners.fortinet.alt",
    height: 90,
  },
];

export const HomePartners: React.FC = () => {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Infinite scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cloneChildren = () => {
      const children = Array.from(carousel.children);
      children.forEach(child => carousel.appendChild(child.cloneNode(true)));
    };

    cloneChildren();

    let animationFrameId: number;
    const scrollSpeed = 8; // Adjust speed here

    const scrollCarousel = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0; // Reset scroll position when reaching the middle
      }
      carousel.scrollLeft += scrollSpeed;
      animationFrameId = requestAnimationFrame(scrollCarousel);
    };

    scrollCarousel();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="partners" className="bg-white dark:bg-gray-900">
      <div className="mx-auto py-8 lg:py-16">
        <h2 className="mb-6 font-extrabold text-3xl text-center text-gray-900 md:text-4xl dark:text-white leading-tight tracking-tight">
          {t("partners.title")}
        </h2>
        <div
          ref={carouselRef}
          className="flex gap-14 whitespace-nowrap animate-carousel overflow-hidden"
        >
          {[...partners, ...partners].map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(`partners.${partner.name.toLowerCase()}.aria`)}
              className="flex justify-center items-center transition-transform duration-200 shrink-0 hover:scale-105"
            >
              <Image
                src={partner.src}
                alt={t(partner.alt)}
                width={partner.height ? partner.height * 2 : 150}
                height={partner.height || 75}
                className="object-contain"
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
