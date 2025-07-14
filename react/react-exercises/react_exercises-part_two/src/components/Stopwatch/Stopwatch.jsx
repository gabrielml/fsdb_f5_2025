import React, { useState, useEffect, useRef } from 'react'
import './Stopwatch.css'

// Stopwatch Component
/**
 * Stopwatch Component.
 * A great component that displays the elapsed time!
 *
 */
export const Stopwatch = () => {
    // State for the 'Elapsed Time' in seconds
    const [seconds, setSeconds] = useState(0);
    // State to control if the stopwatch is 'Running' or 'Paused'
    const [isRunning, setIsRunning] = useState(false);

    // 'useRef' to hold the 'interval ID', so it persists across renders without causing re-renders
    const intervalRef = useRef(null);

    // 'useEffect' Hook for the stopwatch logic
    useEffect(() => {
        if (isRunning) {
            // Set up the interval to update seconds every 1 second (1000ms)
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            // Clear the interval if the Stopwatch is 'paused' OR 'stopped'
            clearInterval(intervalRef.current);
        }

        // 'Cleanup function': This runs when the component unmounts or when the
        // dependencies ([isRunning]) change & the effect re-runs.
        // It's crucial to clear the interval to prevent memory leaks and 
        // ensure only one interval is active at a time.
        return () => clearInterval(intervalRef.current);
    }, [isRunning]) // Dependency array: Effect re-runs ONLY!!! when 'isRunning' changes.

    // Function to toggle between running and paused states
    const toggleRunning = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    }


  return (
    <div className='stopwatch-container'>
        <h2>My Stopwatch</h2>
        <div>
            [Elapsed time: {seconds} seconds]
        </div>
        <div>
            <button onClick={toggleRunning}>[Start/Stop]</button>
            <button>[Reset the stopwatch]</button>
        </div>
    </div>
  )
}
