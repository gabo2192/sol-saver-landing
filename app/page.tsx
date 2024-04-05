import { Button } from "@/components/ui/button";
import Logo from "@/icons/logo";
import bgImage from "@/public/bg-header.jpeg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background ">
      <section className="relative w-full h-screen ">
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
          <h3 className="text-2xl text-center mt-10">
            We&apos;re inviting you to help billions of people bank, without
            banks on Solana.
          </h3>
          <div className="flex items-center justify-center gap-4 mt-10 flex-col-reverse md:flex-row">
            <a
              target="_blank"
              href="https://solsaver.notion.site/Solsaver-Banking-without-banks-b43313bea41e4fb6be75d14e9daeaec9?pvs=25"
            >
              <Button variant="ghost">Check our progress</Button>
            </a>
            <a href="#survey">
              <Button>Sign up for early access</Button>
            </a>
          </div>
        </div>
      </section>
      <embed
        src="https://blocksurvey.io/solsaver-signup-ez2tI8tuScCHQnOFWF.gqQ?v=o"
        className="w-full h-screen"
        id="survey"
      ></embed>
    </main>
  );
}
