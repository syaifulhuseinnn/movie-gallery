import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GeneralTemplate({ children }) {
  const [offset, setOffset] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    if (offset > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [offset]);

  useEffect(() => {
    if (isSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearch]);

  return (
    <div className="container-fluid p-0">
      <Header
        isSearch={isSearch}
        isScroll={isScroll}
        setIsSearch={setIsSearch}
      />
      {children}
      <Footer />
    </div>
  );
}
