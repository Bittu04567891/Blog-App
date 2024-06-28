import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">Welcome to NIT Jamshedpur Placement Hub!</h1>
        <p className="aboutText">
          At NIT Jamshedpur, we are committed to helping our students achieve
          their career goals. Our platform provides resources, guidance, and
          support to prepare for upcoming placements and internships. Join our
          community, contribute your experiences, and stay motivated as we work
          towards securing top positions in reputed companies.
        </p>
        <h2 className="aboutSubTitle">Our Mission</h2>
        <p className="aboutText">
          Our mission is to empower every student with the skills, knowledge,
          and confidence needed to excel in their professional journey. We
          believe in the power of collaboration and aim to create a supportive
          environment where everyone can thrive.
        </p>
        <h2 className="aboutSubTitle">Get Involved</h2>
        <p className="aboutText">
          Engage with peers, share your experiences, and learn from others.
          Together, we can achieve great things and ensure every student has the
          opportunity to succeed in their desired field.
        </p>
        <h2 className="aboutSubTitle">Join Us</h2>
        <p className="aboutText">
          Ready to embark on your placement journey? Join our community today
          and start contributing to your future success. Let's make the most of
          this opportunity and achieve our career goals together!
        </p>
      </div>
    </div>
  );
};

export default About;
