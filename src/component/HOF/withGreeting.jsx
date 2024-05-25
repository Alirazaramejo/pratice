// withGreeting.js (Higher-Order Component)
import React from 'react';

const withGreeting = (WrappedComponent) => {
  return (props) => {
    const greeting = "Hello from the HOC!";
    return <WrappedComponent greeting={greeting} {...props} />;
  };
};

export default withGreeting;
