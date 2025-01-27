import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 Da Liyue</p>
        <p>
          Contact:{' '}
          <a href="mailto:fgp973@alumni.ku.dk" className="text-white">
            fgp973@alumni.ku.dk
          </a>{' '}
          | Phone: +45 91880503
        </p>
      </div>
    </footer>
  );
}
