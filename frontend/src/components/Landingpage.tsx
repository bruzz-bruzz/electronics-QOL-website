import './App.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
export default function Landingpage(){
    return (
        <div className='font-mono'>
            <Navbar />
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <h1>Electronics Info Site</h1>
                    <h4>Features:</h4>
                    <div className='grid grid-cols-3'>
                        <div>
                            <h3>Formula calculators</h3>
                            <ul className='style-none'>
                                <li><Link to='/ohmLaw'>Ohm's Law calculator</Link></li>
                                <li><Link to='/resistor'>Resistor Color Code Decoder</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resistor color code calculator</h3>
                            <p>Find out the resistance of a resistor easily</p>
                        </div>
                        <div>
                            <h3>Component schematic reference</h3>
                            <p>Find out what a drawing is as a component</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}