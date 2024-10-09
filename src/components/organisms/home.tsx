"use client";
import Image from "next/image";
import PhotoAgency from "@/assets/images/photo-agencify.png";
import ProfileComment from "@/assets/images/profile-comment.jpg";
import React from "react";
import { PlayIcon } from "@/assets/icon-dropdown";
import { ButtonDuo, ButtonDuoResponsive } from "../atoms/button";
import { useMainStore } from "@/utils/home";

export default function HomeSection() {
  const { logoRef } = useMainStore();

  const generateStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      if (i < numStars - 1) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-pink"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-pink relative"
          >
            {/* Full star, but only the left half is visible */}
            <defs>
              <clipPath id="half">
                <rect x="0" y="0" width="13" height="24" />
              </clipPath>
            </defs>
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              clipPath="url(#half)"
            />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section className="container flex items-start justify-center pt-14 lg:pt-20 xl:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div className="text-center lg:text-start">
          <p className="md:text-xl text-pink font-medium mb-8 lg:mb-6 xl:mb-8">
            Transformez votre vision en réalité numérique !
          </p>
          <h1 className="text-3xl xl:text-5xl md:text-4xl font-bold !leading-[1.4]">
            L&apos;agence digital dédié <br className="hidden lg:block" />
            aux entreprises
          </h1>
          <p className="font-medium my-16 xl:my-14 lg:my-12 hidden lg:block">
            AGENCIFY est une agence française spécialisée dans le Développement
            Web, qui identifie vos besoins pour vous accompagner dans la
            création de votre site sur-mesure et dans vos projets digitaux.
          </p>

          <div className="hidden lg:flex lg:flex-row flex-col items-center gap-3 lg:gap-6">
            <ButtonDuo
              text="Recevoir nos offres"
              className="rounded-full bg-pink text-white hover:bg-pink_dark transition-all duration-200"
            />
            <ButtonDuo
              text=" Prendre un rendez-vous"
              className="border border-pink text-pink rounded-full hover:bg-pink hover:text-white transition-all duration-200"
            />
          </div>
        </div>

        <div className="relative">
          <Image
            src={PhotoAgency}
            alt="agency-photo"
            width={1000}
            height={1000}
            className="-z-10 object-cover relative w-full h-full mb-0.5"
          />
          <div className="absolute -bottom-1 w-full h-1/3 bg-gradient-to-t from-white via-white to-transparent blur-none" />

          {/* Button Responsive */}
          <div className="absolute inset-x-0 -bottom-40 -z-10 lg:hidden flex lg:flex-row flex-col items-center gap-3 lg:gap-6 pb-10">
            <ButtonDuoResponsive
              text="Recevoir nos offres"
              className="rounded-full shadow-2xl bg-pink text-white hover:bg-pink_dark transition-all duration-200"
            />
            <ButtonDuoResponsive
              text="Prendre un rendez-vous"
              className="border-2 border-pink rounded-full shadow-2xl text-pink hover:bg-pink hover:text-white transition-all duration-200"
            />
          </div>

          {/* Testimonial Section */}
          <div
            ref={logoRef}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="absolute lg:bottom-[13rem] lg:-right-10 xl:bottom-[16rem] xl:-right-4  2xl:bottom-[18rem] 2xl:right-3 -z-10 w-full lg:w-auto">
              <div className="lg:p-3 xl:p-5 rounded-lg shadow-2xl bg-white lg:w-52 xl:w-60 2xl:w-64">
                <p className="text-gray-600 lg:text-xs 2xl:text-sm">
                  &quot;Une expérience parfaite pour obtenir mon site internet!
                  Le processus a été rapide et efficace.&quot;
                </p>
                <div className="flex items-center lg:my-2.5">
                  {generateStars(5)}
                </div>
                <div className="flex items-center">
                  <Image
                    src={ProfileComment}
                    alt="profile-photo"
                    width={50}
                    height={50}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold lg:text-sm 2xl:text-base">
                      Thibault Ernout
                    </h4>
                    <p className="lg:text-xs 2xl:text-sm">
                      Client du 9 Juin 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute z-30 lg:bottom-[12.3rem] lg:right-[9.4rem] xl:bottom-[15.3rem] xl:right-[12.9rem] 2xl:bottom-[17.3rem] 2xl:right-[15.6rem] text-white">
              <PlayIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
