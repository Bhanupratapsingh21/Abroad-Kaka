"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { PlaneSection } from "./FlyingPlan";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="w-full">
      {/* 💬 Text Content in Container */}
      <div className="container grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Live</Badge>
            </span>
            <span>New Admissions Open!</span>
          </Badge>

          <div className="max-w-screen-md mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight tracking-tight">
              Welcome to
              <span className="text-transparent px-2 bg-[#00A3D3] bg-clip-text">
                Abroad Kaka
              </span>
              <br className="hidden md:block" />
              Your Journey Begins
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto mb-6 text-lg md:text-xl text-muted-foreground text-center">
            {`We're more than just an MBBS consultancy — we're your academic family abroad. Get expert guidance, Indian support, and everything you need to become a doctor.`}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button className="w-5/6 md:w-auto bg-[#00A3D3] font-semibold hover:bg-[#00A3D3/80]">
              Start Your MBBS Journey
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6  md:w-auto font-semibold"
            >
              <Link
                href="https://wa.me/7412028919?text=Hello%2C%20I%20would%20love%20to%20know%20more%20about%20abroad%20kaka."
                target="_blank"
              >
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <PlaneSection />
    </section>
  );
};
