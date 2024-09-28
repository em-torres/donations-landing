interface DonationTitleProps {
  title: string;
  className?: string;
}

const DonationTitle = ({ title, className }: DonationTitleProps) => {
  className = className || "font-bold text-3xl";

  return (
    <h1 className={`${className}`}>{title}</h1>
  );
}

export default DonationTitle;