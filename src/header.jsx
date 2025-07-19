import { useEffect } from 'react';
import './App.css';

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const heading = document.querySelector('#heading');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const maxScroll = 300;
      const minSize = 10; // vh
      const maxSize = 30; // vh

      const clampedScroll = Math.min(scrollTop, maxScroll);
      const newSize = maxSize - ((maxSize - minSize) * (clampedScroll / maxScroll));

      heading.style.fontSize = `${newSize}vh`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="header">
        <h1 id="heading" className="dynapuff">Emojipedia</h1>
      </div>
    </>
  );
}

export default Header;
