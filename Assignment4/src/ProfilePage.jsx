import React from "react";
import "./ProfilePage.css";
// import photo from "./assets/profile.png";
function ProfilePage() {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>Karansinh Jadhav</h1>
        <p> Full-Stack Developer</p>
        <p> Kolhapur, India | karansjadhav5555@gmail.com</p>
      </header>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <b>B.Tech in Computer Science Engineering</b> - D Y Patil College of
            Engineering (2022–2026)
          </li>
          <li>
            <b>HSC</b> - The New College, Kolhapur (2020–2022)
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming: C, C++, Java, Python, PHP</li>
          <li> Web: HTML, CSS, JavaScript, React.js, Node.js</li>
          <li> Database: MySQL, MongoDB</li>
          <li> Machine Learning Basics</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Canteen Management System</b> – A web app for managing food
            orders and payments.
          </li>
          <li>
            <b>Crop Disease Detection</b> – AI-driven system to detect plant
            diseases using images.
          </li>
          <li>
            <b>Moodify</b> – Emotion detection system based on user responses.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>karansjadhav5555@gmail.com</p>
      </section>
    </div>
  );
}

export default ProfilePage;
