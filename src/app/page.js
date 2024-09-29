import Banner from "@/components/banner";
import PropertyTypes from "@/components/propertyTypes";
import Samples from "@/components/samples";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <PropertyTypes />
      <Samples />
    </div>
  );
}
