// Form.js
import React from 'react';
import useInput from './useInput';

const Form = () => {
  const name = useInput('');
  const email = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name.value);
    console.log('Email:', email.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...name} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...email} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
