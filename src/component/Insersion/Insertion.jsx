// React is designed for managing CSS-in-JS libraries, ensuring that styles are inserted into the DOM before other effects or layout calculations. This hook can help avoid flashes of unstyled content (FOUC) by making sure styles are applied before the component renders.




import React, { useInsertionEffect, useRef } from 'react';

function StyledComponent() {
  const divRef = useRef(null);

  useInsertionEffect(() => {
    if (divRef.current) {
      const style = document.createElement('style');
      style.textContent = `
        .dynamic-style {
          width: 100px;
          height: 100px;
          background-color: lightblue;
        }
      `;
      document.head.appendChild(style);

      // Cleanup function to remove the style when the component unmounts
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div ref={divRef} className="dynamic-style">
      Styled with useInsertionEffect
    </div>
  );
}

export default StyledComponent;
