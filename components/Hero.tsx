import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-12 space-y-4 lg:space-y-8">
      <div className="flex flex-col items-center space-y-4 lg:space-y-8">
        <div className="grid items-start w-full gap-4 px-4 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 lg:space-y-4">
            <h1 className="font-bold text-4xl tracking-tighter">
              Teamfight Tactics Guide
            </h1>
            <p className="max-w-[900px] text-center text-gray-500 md:text-gray-400">
              Elevate your gameplay with our comprehensive guide to Teamfight
              Tactics. From team composition to counter strategies, weve got you
              covered.
            </p>
          </div>
        </div>
        <div className="grid gap-4 px-4 md:gap-8 lg:gap-12">
          <Button size="lg">Get Started</Button>
        </div>
      </div>
      <div className="grid w-full max-w-5xl gap-4 px-4 md:gap-8 lg:gap-12">
        <Image
          alt="Image"
          className="rounded-lg object-cover"
          height="450"
          src="/tft.png"
          style={{
            aspectRatio: "800/450",
            objectFit: "cover",
          }}
          width="800"
        />
      </div>
    </div>
  );
}
