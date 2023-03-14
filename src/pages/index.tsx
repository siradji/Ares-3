import {Masthead} from "@components/section/Masthead";
import {DownloadSection} from "@components/section/DownloadSection";
import {PromotionalSection} from "@components/section/PromotionalSection";
import {EatLaterEnterprise} from "@components/section/Enterprise";
import {VendorRiderSection} from "@components/section/VendorRiderSection";
import {Footer} from "@layout/components/Footer";
import { EatLaterHead } from "@layout/components/Head";
import { WhatIsEatLater } from "@components/section/WhatIsEatlater";
import { Locations } from "@components/section/Locations";

export default function Home() {
  return (
    <div className="flex-1 h-screen">
        <EatLaterHead />
        <Masthead />
        <WhatIsEatLater />
        <DownloadSection />
        <Locations />
        <EatLaterEnterprise />
        <VendorRiderSection />
        <Footer />
    </div>
  )
}
