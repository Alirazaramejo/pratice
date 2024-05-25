import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Create a ref with an initial value of null

  useEffect(() => {
    // Focus the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
    </div>
  );
}

export default FocusInput;
