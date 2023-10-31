import React from "react";
import Navbar from "@src/layouts/navbar/NavPublic";
import Footer from "@src/layouts/footer/Footer";

export default function Landing({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="landing"
      className={`w-screen h-auto bg-def selection:text-secondary selection:bg-primary`}
    >
      <Navbar />
      <div className="f-row md:w-11/12 w-10/12 h-5/6 mx-auto">
        <main className="w-full h-full my-6">{children}</main>
      </div>
      <Footer />
    </section>
  );
}
