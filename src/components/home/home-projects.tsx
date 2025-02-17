"use client";
import { projects } from "@/constants/projects-list";
import { useTranslation } from "@/i18n/i18n-client.config";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export const HomeProjects = () => {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects(prevVisible =>
      Math.min(prevVisible + 6, projects.length)
    );
  };

  return (
    <section id="projects" className="bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 lg:px-6 py-8 lg:py-16 max-w-screen-xl">
        {/* Header Section */}
        <div className="mb-6 max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-5 font-bold text-gray-900 dark:text-white text-4xl">
            {t("projects.title")}
          </h2>
          <p className="font-light">{t("projects.subtitle")}</p>
        </div>

        {/* Projects Grid */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map(project => (
            <div
              key={project.key}
              className="relative bg-gray-50/20 backdrop-blur-md dark:bg-gray-700 shadow-xl p-6 rounded-2xl transition-shadow duration-300"
            >
              <div className="relative flex justify-start items-center mb-6 h-24">
                <Image
                  src={project.logo}
                  alt={t("projects.title")}
                  width={project.imageSize ?? 90}
                  height={project.imageSize ?? 90}
                  className={`rounded-xl object-contain`}
                />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-lg">
                {t(`projects.items.${project.key}.name`)}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {t(`projects.items.${project.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-8">
            <Button
              variant="link"
              onClick={handleLoadMore}
              className="text-base"
            >
              {t("projects.loadMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
