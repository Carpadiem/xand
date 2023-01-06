import React from 'react'
import { Button } from '../../ui/Button'

export default function () {

    const styles = {
        header: {
            background: '#23232c' // bg-gray-800
        },
        logo: {
            fontSize: '20px',
            fontWeight: '500'
        }
    }

    const buttonColors = {
        sky: '#0284C7',
        dark: '#373646'
    }
    
    return (
        <div className="container h-16 flex" style={styles.header}>
            <div className="container my-auto">
                <h1 className='text-white my-auto ml-5' style={styles.logo}>Logo</h1>
            </div>
            <div className="container my-auto flex justify-end pr-5 gap-2">
                <Button text='Войти' bgcolor={buttonColors.sky}/>
                <Button text='Регистрация' bgcolor={buttonColors.dark}/>
            </div>
        </div>
    )
}