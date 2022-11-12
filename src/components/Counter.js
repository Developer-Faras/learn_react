import React from 'react'

const Counter = () => {
    return (
        <div className='counter'>
            <h3 className="result">Count: 0</h3>

            <div className="btn-wraper">
                <button className="plus btn">+</button>
                <button className="minus btn">-</button>
                <button className="reset btn">0</button>

            </div>
        </div>
    )
}

export default Counter