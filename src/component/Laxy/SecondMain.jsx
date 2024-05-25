// App.js
import React, { Suspense } from 'react';

// Lazy load the ChildComponent
const LazyChildComponent = React.lazy(() => import('./ChildComponent'));

const Second = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyChildComponent />
      </Suspense>
    </div>
  );
};

export default Second;
