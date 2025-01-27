import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center animate__animated animate__fadeIn">
          Work Experience
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-item-content animate__animated animate__fadeInUp bg-light text-dark">
              <h3>SenseTime</h3>
              <p>Algorithm Product &amp; Project Manager Research Institute (Jul 2022 - Apr 2023)</p>
              <p>
                Our department wants to create a virtual live stream host...
                {/* Add your detailed text here */}
              </p>
              <span className="circle"></span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-item-content animate__animated animate__fadeInUp bg-light text-dark">
              <h3>TikTok China</h3>
              <p>Internship (Mar 2021 - Sep 2021)</p>
              <p>
                We have created a special effects materials library...
                {/* Add your detailed text here */}
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
