import {Masthead} from "@components/section/Masthead";
import {DownloadSection} from "@components/section/DownloadSection";
import {PromotionalSection} from "@components/section/PromotionalSection";
import {EatLaterEnterprise} from "@components/section/Enterprise";
import {VendorRiderSection} from "@components/section/VendorRiderSection";
import {Footer} from "@layout/components/Footer";

export default function Home() {
  return (
    <div className="flex-1 h-screen">
        <Masthead />
        <DownloadSection />
        <PromotionalSection />
        <EatLaterEnterprise />
        <VendorRiderSection />
        <Footer />
    </div>
  )
}
