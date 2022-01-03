import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="https://github.com/htrahddis-hub/keeper-app">Github</a>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
