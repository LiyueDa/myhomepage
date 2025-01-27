import React from "react";

const skills = [
  { name: "Python", image: "images/python_icon.png", link: "https://www.python.org" },
  { name: "Pytorch", image: "images/pytorch_icon.png", link: "https://pytorch.org/" },
  { name: "JavaScript", image: "images/javascript_icon.png", link: "https://www.javascript.com/" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

