import React from 'react';

export default function Education() {
  return (
    <section id="education" className="bg-dark py-5 text-white">
      <div className="container">
        <h2 className="text-center animate__animated animate__fadeIn">
          Education Background
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 bg-dark text-white border-light">
              <div className="card-body">
                <h3 className="card-title">University of Copenhagen</h3>
                <p className="card-text">
                  Computer Science Master (Sep 2023 - Jun 2025)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 bg-dark text-white border-light">
              <div className="card-body">
                <h3 className="card-title">Central South University in China</h3>
                <p className="card-text">
                  Computer Science and Technology Bachelor (Sep 2018 - Jun 2022)
                </p>
                <p className="card-text">GPA: 85.2/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
