import React from 'react'
import './Stopwatch.css'

// Stopwatch Component
export const Stopwatch = () => {

  return (
    <div className='stopwatch-container'>
        <h2>My Stopwatch</h2>
        <div>
            [Elapsed time: 3 seconds]
        </div>
        <div>
            <button>[Start/Stop]</button>
            <button>[Reset the stopwatch]</button>
        </div>
    </div>
  )
}
