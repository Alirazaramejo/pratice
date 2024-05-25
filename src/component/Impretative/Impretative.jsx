
// in React is used to customize the instance value that is exposed when using ref in a parent component. It can be particularly useful when you want to expose imperative methods from a child component to a parent component.





import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return <input ref={inputRef} type="text" />;
});

// Parent component
function ParentComponent() {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}

export default ParentComponent;
