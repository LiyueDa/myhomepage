import { useState, useEffect } from 'react';

export default function useTypedText(textArray, typingDelay = 100, erasingDelay = 50, newTextDelay = 1000) {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!textArray || !textArray.length) return;

    let timer;
    const handleTyping = () => {
      const current = textArray[textIndex];
      if (!isDeleting) {
        // Typing
        if (charIndex < current.length) {
          setCurrentText(prev => prev + current.charAt(charIndex));
          setCharIndex(charIndex + 1);
          timer = setTimeout(handleTyping, typingDelay);
        } else {
          // Finish typing, wait, then start erasing
          timer = setTimeout(() => setIsDeleting(true), newTextDelay);
        }
      } else {
        // Erasing
        if (charIndex > 0) {
          setCurrentText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timer = setTimeout(handleTyping, erasingDelay);
        } else {
          // Finished erasing, move to next text
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % textArray.length);
          timer = setTimeout(handleTyping, typingDelay);
        }
      }
    };

    timer = setTimeout(handleTyping, 500); // initial small delay
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, textArray, typingDelay, erasingDelay, newTextDelay]);

  return currentText;
}
