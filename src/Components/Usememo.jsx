import { useMemo, useState } from "react"

function UseMemo() {
    const [inp, setInp] = useState(0);
    const [count, setCount] = useState(0);

    function handleChange(e) {
        setInp(e.target.value);
    }

    const sum = useMemo(function() {
        let ans = 0;
        for(let i=0; i<=inp; i++) {
            console.log("loop ran");
            ans += i;
        }
        return ans;
    }, [inp])

    return (
        <div>
            <input onChange={handleChange} type="text" value={inp} />
            <p>Sum : {sum}</p>
            <button onClick={() => setCount(count+1)}>INC - {count}</button>
        </div>
    )
}

export default UseMemo;