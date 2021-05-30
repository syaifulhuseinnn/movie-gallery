import React from "react";
import Nav from "./Nav";
import Search from "./Search";

export default function Header(props) {
  const { isScroll, isSearch, setIsSearch } = props;

  return (
    <header className="header">
      <Nav isScroll={isScroll} isSearch={isSearch} setIsSearch={setIsSearch} />
      {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
    </header>
  );
}
