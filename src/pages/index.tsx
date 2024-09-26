import Footer from "@/components/Footer";
// import PayPalButton from "@/components/PaypalButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Help John Doe</h1>
        <p>{"We are raising funds to support John's medical treatment."}</p>

        {/* PayPal button */}
        {/*<PayPalButton amount="10.00"/>*/}
      </main>
      <Footer />
    </div>
  );
}
