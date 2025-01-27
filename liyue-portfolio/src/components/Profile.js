import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="py-5">
      <div className="container">
        <h2 className="text-center animate__animated animate__fadeIn">
          Profile
        </h2>
        <p className="lead text-center">
          I worked as a program manager at SenseTime Research Institute...
          {/* (Use your exact text here) */}
        </p>
        <p className="lead text-center">
          The PCOS I am currently doing at DIKU is related to vibrotactile...
        </p>
        <p className="lead text-center">
          I studied animation and game programming during my undergraduate...
        </p>

        <div className="skills">
          <h3 className="text-center animate__animated animate__fadeIn">
            Skills
          </h3>

          {/* Example of skill items */}
          <div className="skill-item">
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <img src="/images/python_icon.png" alt="Python" />
              <p>Python</p>
            </a>
          </div>
          <div className="skill-item">
            <a href="https://pytorch.org/" target="_blank" rel="noreferrer">
              <img src="/images/pytorch_icon.png" alt="Pytorch" />
              <p>Pytorch</p>
            </a>
          </div>
          <div className="skill-item">
            <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
              <img src="/images/javascript_icon.png" alt="Javascript" />
              <p>Javascript</p>
            </a>
          </div>
          {/* Continue adding other skill items similarly... */}
        </div>
      </div>
    </section>
  );
}
