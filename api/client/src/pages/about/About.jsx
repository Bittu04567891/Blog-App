import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutText">
          Welcome to our blog app! We are a community of passionate writers and
          readers, dedicated to sharing knowledge, stories, and insights. Our
          platform provides a space for creativity, learning, and connection.
          Whether you're here to read, write, or explore, we believe in the
          power of words to inspire and connect people from all walks of life.
        </p>
        <p className="aboutText">
          Our mission is to empower individuals to express themselves freely and
          engage with a diverse audience. We strive to create a welcoming
          environment where everyone can share their unique perspectives and
          experiences. Join us and be part of a growing community that values
          creativity, knowledge, and connection.
        </p>
        <h2 className="aboutSubTitle">Our Vision</h2>
        <p className="aboutText">
          We envision a world where everyone has a voice and the opportunity to
          share their stories. Our platform aims to break down barriers and
          bring people together through the power of writing. By fostering a
          supportive and inclusive community, we hope to inspire meaningful
          conversations and connections.
        </p>
        <h2 className="aboutSubTitle">Our Team</h2>
        <p className="aboutText">
          Our team is made up of dedicated individuals who are passionate about
          writing and technology. We work tirelessly to improve the platform and
          provide the best experience for our users. We're here to support you
          on your blogging journey and ensure that your voice is heard.
        </p>
        <h2 className="aboutSubTitle">Join Us</h2>
        <p className="aboutText">
          Ready to start your blogging journey? Join our community today and
          begin sharing your stories with the world. Sign up, create your
          profile, and start writing! We can't wait to see what you'll create.
        </p>
      </div>
    </div>
  );
};

export default About;
