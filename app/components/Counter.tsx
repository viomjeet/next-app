
'use client'
import React from "react";
export const Counter = () => {
    console.log("counter Component");
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-red-500 hover:bg-red-600" onClick={() => setCount((count) => count + 1)}>{count}</button>
        </div>
    )
}