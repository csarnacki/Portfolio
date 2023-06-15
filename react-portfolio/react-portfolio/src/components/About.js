import React from "react";

function About() {
  return (
    <div>
      <hr />
      <img src={"/images/headshot.jpg"} alt="Headshot"/>
      <p className="content is-italic mt-4">
        My name is Chris Sarnacki and I am a passionate and thorough person who 
        seeks to get things done right.
      </p>
      <p className="content">
        When I am not working on my code, I can be found spending time
        with my friends, playing video games, or spending time with
        my girlfriend and going on adventures together. 
        I am also a foodie and I love to cook and try out new recipes as well
        as enjoy many exotic and flavorful twists. 
        I also enjoy the outdoors and make sure to get plenty
        of time away
        from my computer, usually going on hikes, jogging, cycling, swimming
        or enjoying long walks.
      </p>
    </div>
  );
}

export default About;