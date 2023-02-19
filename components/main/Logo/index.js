import React from "react";
import Image from "next/image";
import catDog from "../../../public/imgs/cat_dog.png";
import logoText from "../../../public/imgs/logoText.png";

export default function Logo() {
  return (
    <div>
      <Image src={catDog} />
      <Image src={logoText} />
    </div>
  );
}
