import React from "react";
import NavBar from "../NavBar";

export default function StandardPage(props) {
 return (
    <div className="bg-bg dark:bg-darkbg text-text dark:text-white flex flex-row min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="ml-[20vmin] w-[calc(100vw-20vmin)]">
        {props.children}
      </div>
    </div>
  );
}
