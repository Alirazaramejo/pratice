// App.js (Using the Higher-Order Component) 
//Higher-Order Component (withGreeting):

// 1 Function: It takes a WrappedComponent and returns a new component.
// Greeting Prop: It creates a greeting variable and passes it as a prop to the WrappedComponent along with any other props ({...props}).
// Regular Component (SimpleComponent):

// 2 Display Greeting: It receives the greeting prop and displays it inside a <p> tag.
// Using the Higher-Order Component:

// 3 Wrapping: The SimpleComponent is wrapped with withGreeting, creating a new component SimpleComponentWithGreeting.
// Rendering: The SimpleComponentWithGreeting component is used in the App component.
import React from 'react';
import withGreeting from './withGreeting.jsx';
import SimpleComponent from './SimpleComponent.jsx';

const SimpleComponentWithGreeting = withGreeting(SimpleComponent);

const Higher = () => {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <SimpleComponentWithGreeting />
    </div>
  );
};

export default Higher;
