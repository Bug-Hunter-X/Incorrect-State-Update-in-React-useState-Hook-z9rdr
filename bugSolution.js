The solution involves using the functional update form of `useState` to ensure that state updates are correctly handled. Instead of `setCounter(counter + 1)`, we will use `setCounter(prevCounter => prevCounter + 1)`. This ensures that the update is always based on the latest state value.

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // Correct way to update the state
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default MyComponent;
```