import { useTranslations } from "next-intl";
import { getStaticPropsWithLocale } from "@/lib/getStaticProps.ts";
import Image from "next/image";
import DonationTitle from "@/components/donation-page/DonationTitle";
import DonationCard from "@/components/donation-page/DonationCard";
import Footer from "@/components/Footer";


// import PayPalButton from "@/components/PaypalButton";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DonationTitle title={ t('donationTitle') } />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/favicon.ico"
            alt={ t('donationMainImageAlt') }
            className="max-w-4xl mx-auto"
            width="500"
            height="100"
          />

        </div>
        <div>
          <DonationCard donation_goal={5500} total_donated={5000} total_donations={1000} total_donors={5000} />
        </div>

        {/* PayPal button */}
        {/*<PayPalButton amount="10.00"/>*/}
      </main>
      <Footer />
    </div>
  );
}

export { getStaticPropsWithLocale as getStaticProps };
