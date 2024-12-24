import { useState } from "react";
import PropTypes from 'prop-types'


export const CounterApp = ({ value }) => {
    
    console.log('render');

    const[ counter, setCounter ] = useState( value )

    const handleAdd = (  ) => {
        setCounter((c) => c + 1 )
    }

    const handleMin = (  ) => {
        setCounter((c) => c - 1 )
    }
    const handleReset = (  ) => {
        setCounter(value)
    }

    return (
            <>
                <h1>CounterApp</h1>
                <p> {counter} </p>
                <button onClick={ handleAdd }> +1 </button>
                <button onClick={ handleMin }> -1 </button>
                <button onClick={ handleReset }> reset </button>
            </>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

