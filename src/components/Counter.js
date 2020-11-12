import React, { useState, useEffect } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)
    let t;
    useEffect(() => {
      t = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);

      return () => {
        if (t) {
          clearInterval(t);
        }
      };
    }, [counter]);


    return <div className="counter">you have been {counter} seconds here </div>;
}
