import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/footer/footer";

function ErrorPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "90vh" }}
    >
      <MainNavigation />
      <main style={{ flex: 1 }}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default ErrorPage;
