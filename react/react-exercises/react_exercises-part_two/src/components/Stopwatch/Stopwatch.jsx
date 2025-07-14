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
    // State for the countdown timer (Advanced Level Exercise)
    const [countdown, setCountdown] = useState(30);
    // State to control if the countdown is active
    const [isCountdownActive, setIsCountdownActive] = useState(false);

    // 'useRef' to hold the 'interval ID', so it persists across renders without causing re-renders
    const intervalRef = useRef(null);
    // 'useRef' to hold the countdown 'interval ID'
    const countdownIntervalRef = useRef(null);

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

    // useEffect Hook for the countdown logic
    useEffect(() => {
        if (isCountdownActive && countdown > 0) {
            countdownIntervalRef.current = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown -1);
            }, 1000);
        } else if(countdown === 0 && isCountdownActive) {
            // Stop countdown when it reaches 0
            clearInterval(countdownIntervalRef.current);
            setIsCountdownActive(false);
        } else {
            clearInterval(countdownIntervalRef.current);
        }

        return () => clearInterval(countdownIntervalRef.current);
    },[isCountdownActive, countdown]); // Dependencies: Effect re-runs ONLY when these change.

    // Function to toggle between running and paused states
    const toggleRunning = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
        // If countdown is active and we toggle running, stop countdown too
        if (isCountdownActive) {
            setIsCountdownActive(false);
        }
    }

    // Function to Reset the stopwatch
    const resetStopwatch = () => {
        clearInterval(intervalRef.current); // Ensure interval is cleared
        setSeconds(0); // Reset seconds to 0
        setIsRunning(false); // Set running state to false
        // Also reset countdown if it was active
        clearInterval(countdownIntervalRef.current);
        setCountdown(30);
        setIsCountdownActive(false);
    }

    // *** INTERMEDIATE LEVEL ***
    // Play a beep sound at 10 seconds for the stopwatch
    useEffect(() => {
        if (isRunning && seconds === 10) {
            // Create a simple audio context and oscillator for a beep sound
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 440; // A4 Note
            gainNode.gain.setValueAtTime(1, audioContext.currentTime);

            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5); // Fade out
            oscillator.stop(audioContext.currentTime + 0.5);
        }
    }, [seconds, isRunning]); // Play sound when seconds reach 10 and stopwatch is running.

    // It should change the color of the timer based on seconds for the stopwatch
    const getTimerColorClass = () => {
        if (seconds < 10) {
            return 'stopwatch__display--green'; // Less than 10 seconds
        } else if (seconds >= 10 && seconds <= 20){
            return 'stopwatch__display--yellow'; // Between 10 and 20 seconds
        } else {
            return 'stopwatch__display--red'; // More than 20 seconds
        }
    };

    // *** ADVANCED LEVEL ***
    // Function to start countdown
    const startCountdown = () => {
        resetStopwatch(); // First, reset stopwatch
        setIsCountdownActive(true);
        setCountdown(30); // Start from 30 seconds
    }

    // Determine the message based on time for the stopwatch
    const getDynamicMessage = () => {
        if (isCountdownActive) {
            return 'remaining!!!';
        }
        
        if (seconds === 0) {
            return 'What are you waiting for? 👇';
        } else if (seconds > 0 && seconds < 10){
            return 'Great progress!';
        } else if (seconds >= 10 && seconds <= 20) {
            return 'Almost there!';
        } else {
            return 'Time\'s up!';
        }
    };

  return (
    <div className='stopwatch-container'>
        <h2>My Stopwatch</h2>
        <div className={`stopwatch__display ${getTimerColorClass()}`}>
            {isCountdownActive ? countdown : seconds} seconds
        </div>
        <p>{getDynamicMessage()}</p>
        <div>
            <button onClick={toggleRunning}>[Start/Stop]</button>
            <button onClick={resetStopwatch}>Reset</button>
            <button onClick={startCountdown}>Countdown</button>
        </div>
    </div>
  )
}
