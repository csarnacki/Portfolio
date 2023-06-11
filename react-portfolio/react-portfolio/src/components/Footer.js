//Needs links to my Github, Linkedin, and a Third Platform?
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a
            href="https://www.linkedin.com/in/chris-sarnacki-14bb10216/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://github.com/csarnacki" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;