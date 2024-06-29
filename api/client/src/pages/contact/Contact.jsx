import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactTitle">Contact Us</h1>
      <div className="founderSection">
        <img src="https://i.ibb.co/89gXt6D/IMG20240204120723.jpg" alt="Founder" className="founderPhoto" />
        <div className="founderDetails">
          <h2 className="founderName">Bittu Kumar Thakur</h2>
          <p className="founderBio">
           Bittu Kumar Thakur, a 4th-year student at NIT Jamshedpur, founded our placement and internship blog with a commitment to bridging the gap between students and their dream careers. With first hand experience of the challenges and opportunities in the academic and professional world, Bittu is dedicated to connecting students with the resources and support they need to succeed.


       </p>
        </div>
      </div>
      <div className="goalsSection">
        <h2 className="sectionTitle">Our Goals</h2>
        <p className="goalsText">
          Our mission is to provide NIT Jamshedpur students with the best
          resources and guidance for securing placements and internships. We aim
          to create a supportive community where students can share their
          experiences and learn from each other.
        </p>
      </div>
      <div className="contactDetails">
        <h2>Contact Details</h2>
        <p>Email: 2021ugme004@nitjsr.ac.in</p>
        <p>Phone: +91 9199893976</p>
        <p>
          Address: Hostel K,NIT Jamshedpur, Adityapur, Jamshedpur, Jharkhand,
          India
        </p>
        <a
          href="https://www.linkedin.com/in/bittu-thakur-618774211/"
          target="_blank"
        >
          {" "}
          <i className="topIcon fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
