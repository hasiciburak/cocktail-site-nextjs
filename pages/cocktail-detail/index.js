import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bgImg from "/assets/img/welcome-page-bg.jpg";
import Styledh1 from "/components/styled/Styledh1.styled";
import Styledh2 from "/components/styled/Styledh2.styled";
import ReactCountryFlag from "react-country-flag";

function Page() {
  const iconSize = { fontSize: "1.75rem", cursor: "pointer" };
  return (
    <div className="flex flex-col w-4/5 justify-center mx-auto max-width[1160px]  pt-5">
      <Styledh2>Mojito</Styledh2>
      <Image
        src={bgImg.src}
        alt="Deneme"
        width={100}
        height={500}
        layout="intrinsic"
        unoptimized={true}
        priority
      />
      <article>
        <h2>Ingredients:</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
      <article>
        <h2>Instructions:</h2>
        <div className="flex flex-row w-full justify-end gap-2">
          <div>
            <p className="font-semibold">Read in this language: </p>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <ReactCountryFlag countryCode="US" svg style={iconSize} />
            </div>
            <div>
              <ReactCountryFlag countryCode="ES" svg style={iconSize} />
            </div>
            <div>
              <ReactCountryFlag countryCode="IT" svg style={iconSize} />
            </div>
          </div>
        </div>
        <ul>
          <li>Deneme1</li>
          <li>Deneme2</li>
          <li>Deneme3</li>
        </ul>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
    </div>
  );
}

export default Page;
