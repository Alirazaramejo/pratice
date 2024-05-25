import React, { useLayoutEffect, useRef, useState } from 'react';

function MeasureComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const { offsetWidth, offsetHeight } = divRef.current;
      setSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Measure me
      </div>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default MeasureComponent;
