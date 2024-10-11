import { TypeAnimation } from "react-type-animation";
import "./App.css";

import Modal from "./component/Modal";

import React from "react";
import Navbar from "./Navbar";
function App() {
  return (
    <main className="px-8 md:px-20 lg:px-40">
      <header>
        <Navbar />
      </header>
      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <div className=" animate-fade-up mx-auto bg-gradient-to-b mt-20 lg:mt-0 from-stone-200 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img
            src="/logo.png"
            className="object-cover object-center "
            alt="logo"
          />
        </div>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Kết nối & Ủng Hộ mình ở đây 🤝 ",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "cảm ơn rất nhiều 🙏",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-md py-1 md:text-xl animate-pulse font-medium"
          repeat={Infinity}
        />
        <p className="text-md py-1  md:text-xl animate-pulse font-medium">
          <br />
        </p>
        <div className="text-5xl py-4 flex justify-center gap-8  flex-col lg:flex-row  items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              className="h-10 w-10 bg-white animate-jump-in rounded-md"
              src="./file.png"
              onClick={() => document.getElementById("modal_acb").showModal()}
            />
            <div className="text-lg">
              <span> Ngân Hàng</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              className="h-10 w-10  animate-shake rounded-md"
              src="./fb.webp"
              onClick={() => document.getElementById("modal_fb").showModal()}
            />
            <div className="text-lg">
              <span> Facebook</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              className="h-10 w-10  animate-jump-in rounded-md"
              src="./zalo-icon.png"
              onClick={() => document.getElementById("modal_zalo").showModal()}
            />
            <div className="text-lg">
              <span> Zalo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Modal id={"modal_acb"} title={"QR Ngân Hàng"} imgURL={"./bank.png"} />
      <Modal id={"modal_fb"} title={"QR Facebook"} imgURL={"./fb.png"} />
      <Modal id={"modal_zalo"} title={"QR Zalo"} imgURL={"./zl.jpg"} />
    </main>
  );
}

export default App;
