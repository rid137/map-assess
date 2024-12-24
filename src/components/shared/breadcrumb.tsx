"use client";

import { useRouter } from "next/navigation";

interface BreadcrumbProps {
  current: string;
  parent: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ current, parent }) => {
  const router = useRouter();

  return (
    <div className="flex gap-2 items-center">
      <h2
        className="text-sm text-primary font-medium cursor-pointer"
        onClick={() => router.back()}
      >
        {parent}
      </h2>
      <svg width="8" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.67016 11H0.368164L4.31616 0.891999H5.63216L1.67016 11Z" fill="#98A2B3"/>
        </svg>
      <p className="text-sm text-muted">{current}</p>
    </div>
  );
};

export default Breadcrumb;
