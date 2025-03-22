import React from "react";
import wileECoyote from "./will_e_coyote_about.jpg";
import "./AboutUs.css"; // Make sure to create this CSS file

function AboutUs() {
  return (
    <div className="about-container">
      {/* Left Text Section */}
      <div className="text-section">
        <h1>About Us ...</h1>
        <p>
          <strong>Our campus faces an issue of rash driving...</strong> such as speeding or hitting animals, and all
          these offenses cannot be captured due to the limited coverage of CCTV cameras.
        </p>
        <p>
          To help catch more perpetrators of such offenses, we created <strong>"Road-Runners"</strong>, a crowdsourced
          website, where you, the user, can upload images or videos of said offenses.
        </p>
        <p>The uploaded content will then be verified, and perpetrators will be identified using the number plate or captured faces. Authorities will be notified.</p>
        <p><strong>Let us keep the campus safe together.</strong></p>
        <a href="/" className="home-link">Return to the Home Page</a>
      </div>

      {/* Right Image Section */}
      <div className="image-section">
        <img src={wileECoyote} alt="Wile E. Coyote" />
      </div>
    </div>
  );
}

export default AboutUs;
