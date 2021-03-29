import React,{useState,useEffect} from "react"
import PropTypes from "prop-types"

const Counter = ({initialCount}) => {
    
    const [count,setCount] = useState(initialCount)
    
    const incrementCount = () =>{
        setCount(count => count +1)
    }

    useEffect(() => {
        // console.log(count)
    }, [count])

    return (
        <div>
             <span>{count}</span>
             <br/>
             <br/>
            <button onClick={incrementCount}>Increase Counter</button>
        </div>    
    )
}

Counter.propTypes = {
    initialCount: PropTypes.number
}

export default Counter