import { HeroPanel } from "@/components/home/HeroPanel";
import { QuickTiles } from "@/components/home/QuickTiles";
import { FocusRow } from "@/components/home/FocusRow";
import { ResponsibilityTabs } from "@/components/home/ResponsibilityTabs";
import { Figures } from "@/components/home/Figures";

export default function HomePage() {
  return (
    <>
      <HeroPanel />
      <QuickTiles />
      <FocusRow />
      <ResponsibilityTabs />
      <Figures />
    </>
  );
}
