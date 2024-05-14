
import './Styles/Clock.css';

export default function Clock({ number }) {

    return (
        <div className='clockBox'>
            <h1>{ number }</h1>
        </div>
    )
}