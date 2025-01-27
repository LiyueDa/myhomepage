import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="bg-dark py-5 text-white">
      <div className="container">
        <h2 className="text-center animate__animated animate__fadeIn">
          Project Experience
        </h2>

        <div
          id="projectCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#projectCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#projectCarousel" data-slide-to="1"></li>
            <li data-target="#projectCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="card bg-dark border-light">
                <img
                  src="/images/图例1.jpg"
                  className="d-block w-100"
                  alt="Vibration Platform Experiment"
                />
                <div className="card-body">
                  <h3 className="card-title">Vibration Platform</h3>
                  <p className="card-text">
                    This is the PCOS project I am currently working on...
                    {/* Full description here */}
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="card bg-dark border-light">
                <img
                  src="https://via.placeholder.com/800x400"
                  className="d-block w-100"
                  alt="Tank Battle Game"
                />
                <div className="card-body">
                  <h3 className="card-title">Tank Battle Game</h3>
                  <p className="card-text">
                    This is a test of my course...
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="card bg-dark border-light">
                <video controls className="d-block w-100">
                  <source src="/videos/IMG_5088.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h3 className="card-title">
                    3D Printer Rendering for Haptic Interaction in VR
                  </h3>
                  <p className="card-text">
                    {/* Add your text here */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#projectCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#projectCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
