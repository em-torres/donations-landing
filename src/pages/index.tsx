import Footer from "@/components/Footer";
import DonationTitle from "@/components/donation-page/DonationTitle";
import Image from "next/image";
import DonationCard from "@/components/donation-page/DonationCard";
// import PayPalButton from "@/components/PaypalButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DonationTitle title={"Let's Help Fernanda"} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/favicon.ico"
            alt="Fernanda's Main Image"
            className="max-w-4xl mx-auto"
            width="500"
            height="100"
          />

        </div>
        <div>
          <DonationCard donation_goal={5500} total_donated={5000} total_donations={100} total_donors={5} />
        </div>

        {/* PayPal button */}
        {/*<PayPalButton amount="10.00"/>*/}
      </main>
      <Footer />
    </div>
  );
}
