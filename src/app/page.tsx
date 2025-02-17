import CallbackWidget from "@/components/home/home-callback-widget";
import { HomeCertificates } from "@/components/home/home-certificates";
import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { HomeHero } from "@/components/home/home-hero";
import { HomeMap } from "@/components/home/home-map";
import { HomePartners } from "@/components/home/home-partners";
import { HomeProjects } from "@/components/home/home-projects";
import { HomeServices } from "@/components/home/home-services";
import { HomeTeam } from "@/components/home/home-team";

export default function Home() {
  return (
    <div className="relative">
      <HomeHeader />

      <HomeHero />

      <HomePartners />

      <HomeServices />

      <HomeTeam />

      <HomeCertificates />

      <HomeProjects />

      <HomeMap />

      <HomeFooter />

      <CallbackWidget />
    </div>
  );
}
