import React from "react";
import "/src/App.css";

const Text = ({ text }) => {
  return (
    <h1 style={{ fontFamily: 'Higher, sans-serif', fontSize: '4.4rem', letterSpacing: '3px' }}className="margin uppercase size-3 center">
      { text }
    </h1>
  )
}


export default Text;