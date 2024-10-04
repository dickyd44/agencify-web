import Image from "next/image";
import PhotoAgency from "@/assets/images/photo-agencify.png";
import ProfileComment from "@/assets/images/profile-comment.jpg";
import { PlayIcon } from "@/assets/icon-dropdown";
import React from "react";

export default function HomeSection() {
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
    <section className="container h-full flex items-center justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div>
          <p className="text-xl text-pink font-medium mb-8">
            Transformez votre vision en réalité numérique !
          </p>
          <h1 className="text-5xl font-bold leading-snug">
            L&apos;agence digital dédié <br />
            aux entreprises
          </h1>
          <p className="font-medium my-16">
            AGENCIFY est une agence française spécialisée dans le Développement
            Web, qui identifie vos besoins pour vous accompagner dans la
            création de votre site sur-mesure et dans vos projets digitaux.
          </p>

          <div className="flex lg:flex-row flex-col items-center gap-6">
            <button className="rounded-full bg-pink px-11 py-2.5 text-center lg:text-sm 2xl:text-base text-white">
              Recevoir nos offres
            </button>
            <button className="border border-pink rounded-full px-11 py-2.5 text-center lg:text-sm 2xl:text-base text-pink">
              Prendre un rendez-vous
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={PhotoAgency}
            alt="agency-photo"
            width={500}
            height={500}
            className="object-cover relative w-full h-full"
          />
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-white via-white to-transparent blur-[0]" />

          {/* Testimonial Section */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute lg:bottom-[13rem] lg:-right-10 xl:bottom-[16rem] xl:-right-4  2xl:bottom-[18rem] 2xl:right-3 z-10 w-full lg:w-auto">
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