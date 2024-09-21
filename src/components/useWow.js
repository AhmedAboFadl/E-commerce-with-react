// src/hooks/useWow.js
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

const useWow = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW().init();
  }, []); // Empty dependency array ensures this runs once on mount
};

export default useWow;
