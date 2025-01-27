import React from 'react';
import useTypedText from '../hooks/useTypedText';

// This array corresponds to the text you want typed out
const TYPING_TEXT_ARRAY = [
  'a HCI researcher',
  'a Developer',
  'a Program Manager',
  'a UX Designer',
  'an Amateur Singer'
];

export default function Header() {
  const typedText = useTypedText(TYPING_TEXT_ARRAY);

  return (
    <header>
      <div className="intro">
        <div className="subtitle">Hi, my name is</div>
        <h1>Liyue Da</h1>
        <h2>达丽悦</h2>
        <p className="typing-effect" id="typing-text">
          {typedText}
        </p>
        <div className="social-icons">
          <a href="https://github.com/LiyueDa" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/liyue-da-13504528a"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:fgp973@alumni.ku.dk">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="avatar">
        {/* Example: if you place Pixel_avatar.png in public/images */}
        <img src="/images/Pixel_avatar.png" alt="Avatar" />
      </div>
    </header>
  );
}
