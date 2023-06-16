import React from "react";
import Projects from "./Projects";

const projects = [
  {
    id: 0,
    title: "Work Scheduler",
    languages: "HTML, CSS, JavaScript",
    image: "/images/work-scheduler.png",
    description: "A schedule that allows a user to plan out their workday over each time block",
    repo: "https://github.com/csarnacki/Work-Scheduler",
  },
  {
    id: 1,
    title: "E-Commerce Database",
    languages: "JavaScript, MySQL, Node.js",
    image: "/images/e-commerce.png",
    description: "Allows a user to view a e-commerce database. The user is also able to see how data gets created, updated or deleted.",
    repo: "https://github.com/csarnacki/E-Commerce-Back-End",
  },
  {
    id: 2,
    title: "Local Text Editor",
    languages: "HTML, CSS, JavaScript, Node.js",
    image: "/images/text-editor.png",
    description: "Allows a user to launch and install a text editor that can be used on their local machine. Does not require internet usage to use the editor.",
    repo: "https://github.com/csarnacki/PWA-Text-Editor",
  },
  {
    id: 3,
    title: "NoSQL Social Network API",
    languages: "JavaScript, Node.js, MongoDB",
    image: "/images/social-network.png",
    description: "Uses a NoSQL database to create, read, update and delete data by utilizing a social networking API.",
    repo: "https://github.com/csarnacki/NoSQL-Social-Network",
  },
  {
    id: 4,
    title: "Password Generator",
    languages: "HTML, CSS, JavaScript",
    image: "/images/password-generate.png",
    description: "Randomly generates a secure password for a user baed on selected critera.",
    repo: "https://github.com/csarnacki/Password-Generator",
  },
  {
    id: 5,
    title: "Interactive Quiz",
    languages: "HTML, CSS, JavaScript",
    image: "/images/coding-quiz.png",
    description: "A quiz that prompts the user questions to choose about a topic. A final score is tallied at the end.",
    repo: "https://github.com/csarnacki/Interactive-Quiz",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "HTMl, CSS, JavaScript",
    image: "/images/weather-dashboard.png",
    description: "A basic app that allows the user to see the weather for a specific searched or saved city.",
    repo: "https://github.com/csarnacki/Weather-Forecast",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Projects projects={projects} />
    </div>
  );
}

export default Portfolio;