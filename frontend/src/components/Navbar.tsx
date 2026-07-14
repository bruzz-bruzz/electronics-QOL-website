import './App.css'
import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div className='font-mono p-4 m-4 border border-black rounded-lg'>
            <div className='grid grid-cols-5 text-center'>
                <h3 className='border-r border-black'><Link to='/'>Home</Link></h3>
                <h3 className='border-r border-black'><Link to='/ohmlaw'>Ohm's Law Calculator</Link></h3>
                <h3 className='border-r border-black'><Link to='/resistor'>Resistor Resistance Calculator</Link></h3>
                <h3 className='border-r border-black'><Link to='/'>Home</Link></h3>
                <h3 className='border-r border-black'><Link to='/'>Home</Link></h3>
            </div>
        </div>
    )
}