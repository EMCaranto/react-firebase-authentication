import React from 'react'

function DarkModeIcon({ className }) {
  return (
    <>
      <svg
        className={ className }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        height="24"
        width="24"
      >
        <path
          d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q25-3 39 18t-1 44q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q21-14 43-1.5t19 39.5q-14 138-117.5 229T480-120Z"
        />
      </svg>
    </>
  )
}

export default DarkModeIcon
