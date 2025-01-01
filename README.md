# Incorrect State Update in React useState Hook

This repository demonstrates a common bug in React applications involving incorrect state updates using the `useState` hook. The bug occurs when the component tries to update the state directly using the previous state value, without employing the functional update provided by `useState`.

## Bug Description

The component attempts to update state using `setCounter(counter + 1)`. This approach can lead to unexpected behavior because if multiple updates occur concurrently or asynchronously, the state may not be correctly reflected.  In some cases, a race condition can lead to missed updates or incorrect values.

## Solution

The correct approach is to use the functional update form of `useState`, which passes the current state as an argument to the update function.  This ensures that the update is based on the most recent state value, preventing race conditions.

## How to reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Observe the counter behavior; you might notice inconsistencies.
