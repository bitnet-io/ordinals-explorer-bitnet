import { Metadata } from "next";
import Brc20Homepage from "../../../../components/Brc20Homepage";

export const metadata: Metadata = {
  title: "BIT-20 Explorer",
  description:
    "Discover the world of BIT-20 tokens on top of BitOrdinal Inscriptions with the BitNFT.io BitOrdinals Explorer. Dive deep into this unique universe of digital assets inscribed on radiowaves, the smallest unit of Bitnet.",
};

const Page = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-stretch justify-between space-y-6 p-6">
      <Brc20Homepage />
    </main>
  );
};

export default Page;
