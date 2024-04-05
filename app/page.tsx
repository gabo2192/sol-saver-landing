import Logo from "@/icons/logo";
import bgImage from "@/public/bg-header.jpeg";
import chart from "@/public/chart1.png";
import neoBank from "@/public/neo-bank.png";
import pattern from "@/public/pattern.jpeg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background ">
      <section className="relative w-full ">
        <Image
          src={bgImage}
          alt="Background Image"
          width={1600}
          height={899}
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="relative z-10 w-full py-64 px-4">
          <div className="w-80 mx-auto mb-10">
            <Logo />
          </div>
          <h1 className="text-foreground text-5xl font-bold text-center">
            Banking, without banks.
          </h1>
        </div>
      </section>
      <section className="bg-foreground text-gray-700 px-4 py-10 w-full border-b border-background">
        <h2 className="text-5xl font-bold max-w-2xl mx-auto mb-10">
          Humanity is facing a troubling future.
        </h2>
        <div className="grid md:grid-cols-3 max-w-2xl mx-auto gap-4 md:gap-10 font-medium">
          <div>
            <p>
              Corrupt banks and goverments, conflict, inflation and poverty are
              taking hold.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Purchasing power is decreasing for everyday people.
            </p>
            <p>Saving pots are increasing but worth less, everyday.</p>
          </div>
          <div>
            <p>
              Individuals and families are struggling to secure a stable
              financial future.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-foreground text-gray-700 px-4 py-10 w-full border-b border-background">
        <div className="max-w-2xl mx-auto flex flex-row  md:gap-20">
          <div className="h-4 w-28 bg-background mb-4"></div>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row  md:gap-20">
          <div>
            <h2 className="text-5xl font-bold mb-10 w-80">
              There is <br />
              hope.
            </h2>
          </div>
          <div className="flex flex-col gap-10 font-medium">
            <p>
              The world is starting to believe that crypto can give them
              financial transparency, security and resilience...
            </p>
            <p>...they believe it can shift the balance of power.</p>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-2xl mx-auto px-4">
        <div className=" flex flex-row  md:gap-20 ">
          <div className="h-4 w-28 bg-[#01EDA2] mb-4"></div>
        </div>
        <h2 className="text-5xl font-bold mb-10">
          A decentralised world is growing around us.
        </h2>
        <p>
          Web3 is emerging from crypto trying to solve big problems in a
          decentralised way. <span className="text-[#01EDA2]">Solana</span> is
          leading the charge by driving{" "}
          <span className="text-[#01EDA2]">adoption</span> through appealing to{" "}
          <span className="text-[#01EDA2]">everyday people</span>. The
          opportunity to{" "}
          <span className="text-[#01EDA2]">&#39;bank the unbanked&#39;</span>{" "}
          and to drive financial self-efficacy is big and real. But crypto and
          Web3 suffer from bad press and years of bad actors exploiting people
        </p>
      </section>
      <section className="relative w-full p-10 ">
        <Image
          src={pattern}
          alt="Pattern Image"
          width={1600}
          height={899}
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <Image
          src={chart}
          alt="Chart Image"
          width={1600}
          height={899}
          className="relative z-10 mx-auto"
        />
      </section>
      <section className="w-full ">
        <Image
          src={neoBank}
          alt="Neo Bank"
          width={1600}
          height={899}
          className="relative z-10 mx-auto"
        />
      </section>
    </main>
  );
}
