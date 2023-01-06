import React from 'react'
import { IButton } from '../../models' 

function Button(props: IButton) {
    
    const styles = {
        fontSize: '14px',
        background: props.bgcolor
    }
    
    return (
        <button className='px-4 py-1.5 rounded text-white font-medium' style={styles}>{props.text}</button>
    )
}

export default Button