import Image from "next/image";
// import { useFormatter } from "next-intl";

interface DonationCardProps {
  donation_goal?: number;
  total_donated?: number;
  total_donors?: number;
  total_donations?: number;
}

const DonationCard = ({ donation_goal=0, total_donated=0, total_donors=0, total_donations=0 }: DonationCardProps) => {
  const progress: number = donation_goal > 0 ? (total_donated / donation_goal) * 100 : 0;
  // const format = useFormatter();

  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow-md drop-shadow-md">
      <p className="text-sm">
        <span className="text-2xl">${total_donated}</span> raised of ${donation_goal} goal
      </p>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm">{total_donations} donations</p>

      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Share</button>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">Donate</button>
      </div>

      <div className="flex items-center gap-3">
        <Image src="/favicon.ico" alt="Donations Icon" width="35" height="35" />
        <p>{total_donors} people just donated</p>
      </div>

      <div></div>

      <div className="flex items-center justify-between gap-2">
        <button className="flex-1 px-6 py-2 border-2 rounded-lg hover:bg-[#2525250d] transition duration-300 hover:border-[#6f6f6f]">See All</button>
        <button className="flex-1 px-6 py-2 border-2 rounded-lg flex items-center justify-center gap-2 transition duration-300 hover:bg-[#2525250d] hover:border-[#6f6f6f]">
          <Image className="flex-shrink-0" src="/favicon.ico" alt="Donations Icon" width="15" height="15" />
          <span className="flex-shrink-0">See Top</span>
        </button>
      </div>

    </div>
  );
}

export default DonationCard;