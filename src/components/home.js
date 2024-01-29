import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex' }} className='row'>
            <div className='col' >
                <img src='/images/images.png'/>
            </div>
            <div className='col' style={{marginTop:"300px"}}>
                <h1>pomodoro app</h1>
                <h6 style={{color:"green"}}>it is greek technology</h6>
                <button onClick={()=>{navigate('/Timer')}}><b>GET STARTED</b></button>
            </div>
        </div>
    )
}

export default Home