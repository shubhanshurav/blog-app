import React from "react";
import Image from "next/image";
import ResponsivePageContainer from "../responsivePageContainer/responsivePageContainer";

const HeroSection: React.FC = () => {
  return (
    <ResponsivePageContainer>
      <div className="relative h-screen flex items-center justify-center text-white text-center px-5">
        <Image
          src="/path-to-your-image.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold shadow-lg">
            The best way to predict the future is to create it.
          </h1>
        </div>
      </div>
    </ResponsivePageContainer>
  );
};

export default HeroSection;
