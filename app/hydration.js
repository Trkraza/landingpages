"use client";
import React, { useEffect, useState } from "react";
import NavigationMenuDemo from "./components/Navbars/Navbar3";
import Footer from "./components/Footers/Footer1";
import Navbar from "./components/Navbars/Navbar3";

function Hydration({ children }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : null}
    </>
  );
}

export default Hydration;
