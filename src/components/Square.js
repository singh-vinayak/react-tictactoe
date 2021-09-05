import React from 'react'

const styles={
    background:"lightblue",
    border: '1px solid darkblue',
    fontSize: '30px',
    fontWeight:'800',
    cursor:'pointer',
    outline:'none'
};

const Square= ({value, onClick}) => (
    <button style={styles} onClick={onClick}>
        {value}
    </button>
)

export default Square;