import React, { useState } from "react";
import Countries from "./Countries"
import SearchFeatures from "./SearchFeatures";

const GeographyApp = () => {
  useState(0);
  return (
    <div>
      <header>Where in the world?</header>
      <SearchFeatures />
      <Countries />
    </div>
  );
};
export default GeographyApp;
