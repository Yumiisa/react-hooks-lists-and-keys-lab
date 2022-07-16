import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const myLink=links.map((link)=>
  <a href={ '#' +  link} key={link}>{link}</a>
  )

  return <nav>
    {myLink}
  </nav>;
}

export default NavBar;
