import './style.sass'
import SepatuWhite from '../../assets/white.png'
import SepatuRed from '../../assets/red.png'
import SepatuGreen from '../../assets/green.png'
import {useState, useMemo} from 'react'
import { BsFillShareFill } from 'react-icons/bs'

function Card() {
    const [color, setColor] = useState('white')
    const sepatu = useMemo(()=>{
        switch(color){
            case 'white': return <img src={SepatuWhite} />
            case 'red': return <img src={SepatuRed} />
            case 'green': return <img src={SepatuGreen} />
        }
    },[color])
    return (
        <div className="container">
            <div className='buble' color={color}>
                <div className='share'>
                    <BsFillShareFill className='icon'/>
                </div>
            </div>
                {sepatu}
            <div className='colorContainer'>
                <label>
                    Change Color
                </label>
                <div className='colorMapping'>
                    <span className='color' onClick={() => setColor('red')} color='red'/>
                    <span className='color' onClick={() => setColor('white')} color='white'/>
                    <span className='color' onClick={() => setColor('green')} color='green'/>
                </div>

            </div>
        </div>
    )
}

export default Card