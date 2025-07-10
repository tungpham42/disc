import React from "react";
import DiscTest from "./DiscTest";
import MainBrandLogo from "./MainBrandLogo";

function App() {
  return (
    <div className="my-4 App col-md-8 mx-auto">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <DiscTest />
    </div>
  );
}

export default App;
