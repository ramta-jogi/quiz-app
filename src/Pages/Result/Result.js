import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router' 
import Button from '@material-ui/core/Button'
import './Result.css'

const Result = ({name, score}) => {

    const history = useHistory()

    useEffect(() => {
        if(!name)
        return () => {
            history.push('/')
        }
    }, [name, history])

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
