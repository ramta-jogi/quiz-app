import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router' 
import { Button } from '@mui/material'
import './Result.css'

const Result = ({name, score}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!name)
        return () => {
            navigate('/')
        }
    }, [name, navigate])

    return (
        <div className='result'>
            <span className='score_message'>
                Final Score: {score}
            </span>
            <Button
            variant="contained"
            size="large"
            style={{alignSelf:'center', marginTop:20, backgroundColor:'blueviolet', color:'white'}}
            href='/'>
                Go back to Home.
            </Button>
        </div>
    )
}

export default Result
