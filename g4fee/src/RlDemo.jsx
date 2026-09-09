import { useState, useRef } from  "react";

export function RlDemo() {
    const r1 = useRef(0);
    const [s1, setS1] = useState(0);
    const [refValue, setRefValue] = useState(0);

    function incrementRef() {
        r1.current += 1;
        setRefValue(r1.current);
    }

    return (
        <div className="box1 bg1 fyc">
            <h3> useRef vs useState </h3>

            <button className="btn2" onClick={incrementRef}>
                Increment Ref Variable . {refValue}
            </button>

            <button className="btn2" onClick={() => setS1(s1 + 1)}>
                Increment State Variable . {s1}
            </button>
        </div>
    );
}