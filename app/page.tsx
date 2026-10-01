import Image from "next/image";
import RevealText from "./components/RevealText";
import SocialsContainer from "./components/SocialsContainer";
import PicContainer from "./components/PicContainer";
import OpenAnimation from "./components/OpenAnimation";
import CompanionAnimation from "./components/CompanionAnimation";
import SocialsTextBubble from "./components/SocialsTextBubble";
import VetSyncContainer from "./components/VetSyncContainer";
import CipelaContainer from "./components/CipelaContainer";
import OPodsContainer from "./components/OPodsContainer";
import MediSearch from "./components/MediSearch";
import Healthtech from "./components/Healthtech";
import EndingTextBubble from "./components/EndingTextBubble";
import CompanionEndingAnimation from "./components/CompanionEndingAnimation";
import Time from "./components/Time";
import AnimatedCursor from "./components/AnimatedCursor";
import Email from "./components/Email";
import CompanionVetsyncAnimation from "./components/CompanionVetsyncAnimation";
import VetsyncBubble from "./components/VetsyncBubble";

export default function Home() {
  return (
    <div className="bg-background font-sans selection:bg-foreground selection:text-background">
      <svg className="pointer-events-none absolute cursor-none">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <main>
        <AnimatedCursor />
        <section className="h-svh max-[480px]:max-h-[1000px] max-[480px]:min-h-[550px] max-[734px]:max-h-[850px] max-[734px]:min-h-[600px] max-[1068px]:max-h-[850px] max-[1068px]:min-h-[700px] flex flex-col gap-6">
          <div className="absolute filter-[url('#noiseFilter')]" />
          <OpenAnimation />
          <div className="h-[40%] lg:h-[50%] mx-6 mt-6 flex flex-col border-2 border-foreground">
            <div className="w-[8rem] xs:w-[14rem] sm:w-[10.5rem] md:w-[16rem] lg:w-[10.5rem] m-4 p-2 bg-white border-2 border-foreground">
              <p className="text-xs sm:text-sm lg:text-base text-center leading-[1.25]">
                Hi there! This is <span className="font-semibold">Divy</span>... I am a <br /> Full Stack Developer &amp; Web Designer.
              </p>
            </div>
            <div className="my-auto 2xl:mt-[4%]">
              <h1 className="text-[7.5vw] sm:text-[8.35vw] 2xl:text-9xl leading-none text-center font-arigato">
                <RevealText text="Divy&nbsp;Pandey" />
              </h1>
            </div>
          </div>
          <div className="h-[60%] lg:h-[50%] mx-6 mb-6 grid grid-cols-5 sm:grid-cols-2 grid-rows-7 lg:flex lg:flex-row-reverse gap-6">
            <div
              className="lg:w-[50%] row-span-4 col-span-5 sm:col-span-2 flex flex-row-reverse justify-between border-2 border-foreground bg-cover bg-center"
              style={{ backgroundImage: "url('images/lucknow.png')" }}
            >
              <div className="w-28 sm:w-36 h-fit m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-xs sm:text-base text-center leading-[1.25]">here is my City of Tehzeeb…</p>
              </div>
              <div className="w-28 sm:w-36 mt-auto m-4 p-2 bg-white border-2 border-foreground">
                <p className="text-xs sm:text-base text-center leading-[1.25]">...city of Nawabs and &apos;Pehle Aap&apos;. Yes, we&apos;re that polite!</p>
              </div>
            </div>
            <PicContainer />
            <div className="lg:w-[25%] col-span-3 sm:col-span-1 row-span-3 flex flex-row lg:flex-col-reverse 2xl:flex-row border-2 border-foreground overflow-hidden">
              <div className="flex">
                <CompanionAnimation />
                <SocialsTextBubble />
              </div>
              <SocialsContainer />
            </div>
          </div>
        </section>
        <section className="mb-6 mx-6 flex flex-col gap-6">
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <VetSyncContainer />
            <div className="lg:w-[40%] border-2 border-foreground overflow-hidden">
              <div className="w-full h-full flex flex-row-reverse">
                <CompanionVetsyncAnimation />
                <VetsyncBubble />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-6 mx-6 flex flex-col gap-6">
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <CipelaContainer />
            <OPodsContainer />
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <MediSearch />
            <Healthtech />
          </div>
        </section>
      </main>
      <footer className="mb-6 mx-6 relative flex flex-col-reverse xs:flex-row-reverse gap-6">
        <div className="xs:w-[50%] lg:w-[55%] xl:w-[60%] xs:py-8 pb-8 flex flex-col lg:flex-row xs:items-center border-2 border-foreground">
          <div className="w-fit m-1 xs:m-0 lg:m-2 xl:m-4 p-2 2xl:absolute bg-white border-2 border-foreground">
            <p className="w-[6rem] sm:w-[8rem] text-xs sm:text-base text-center">Need A Website Redesign?</p>
          </div>
          <Email />
          <div className="absolute inset-0 flex items-end justify-end">
            <p className="mx-3 mb-1 text-xs sm:text-base">
              <span className="font-inter">©</span> 2025 Divy Prakash Pandey
            </p>
          </div>
        </div>
        <div className="xs:w-[50%] lg:w-[45%] xl:w-[40%] flex flex-col-reverse lg:flex-row lg:gap-6 border-2 border-foreground overflow-hidden">
          <div className="flex gap-2 2xl:gap-6">
            <CompanionEndingAnimation />
            <EndingTextBubble />
          </div>
          <div className="h-fit mx-auto mt-4 xl:my-auto flex lg:flex-col xl:flex-row border-2 border-foreground">
            <div className="w-full flex justify-center border-r-2 lg:border-r-0 xl:border-r-2 border-foreground">
              <Image className="w-10 h-10 sm:w-16 sm:h-16 mx-4 my-auto" src="/images/earth.png" width={512} height={512} alt="Earth png" />
            </div>
            <div className="flex flex-col text-xs xs:text-base">
              <h1 className="p-2 text-sm xs:text-lg">Working Globally</h1>
              <p className="w-[7.6rem] sm:w-[10rem] p-2 border-t-2 border-foreground leading-none">
                <span className="font-bold text-xs xs:text-sm">LOCAL TIME</span>
                <br />
                <Time />
                <span className="font-ubuntu">, IST</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
