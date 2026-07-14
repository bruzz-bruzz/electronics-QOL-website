import './App.css'
import Github from './Github'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
export default function Ohmlaw(){
    type targetTypes = 'VOLTAGE'|'CURRENT'|'RESISTANCE'
    const [voltage,setVoltage] = useState(0)
    const [current,setCurrent] = useState(0)
    const [resistance,setResistance] = useState(0)
    const [result,setResult] = useState(0)
    const [target,setTarget] = useState<targetTypes>("VOLTAGE")
    function calculate(){
        if(target === 'VOLTAGE'){
            setResult(current * resistance)
        } else if(target === 'CURRENT'){
            setResult(voltage / resistance)
        } else {
            setResult(voltage / current)
        }
    }
    return (
        <div className='font-mono'>
            <Navbar />
            <div className='flex justify-center items-center flex-col'>
                <h4>Ohm's Law Calculator</h4>
                <h1>Voltage(V) = Current(A) x Resistance(Ω)</h1>
                <h3>Target: {target.toLowerCase()}</h3>
                <select className='border border-black rounded-lg p-2' onChange={(e)=>{
                    setTarget(e.target.value as targetTypes)
                    setResult(0)
                    }}>
                    <option value='VOLTAGE'>Voltage</option>
                    <option value='CURRENT'>Current</option>
                    <option value='RESISTANCE'>Resistance</option>
                </select>
                    {target === 'VOLTAGE' && (
                        <div className='flex justify-center items-center flex-col'>
                            <label>Current: {current}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setCurrent(parseFloat(e.target.value))} />
                            <label>Resistance: {resistance}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setResistance(parseFloat(e.target.value))} />
                            <button className='border border-black rounded-lg p-2' onClick={()=>calculate()}>Calculate</button>
                            <h3>Voltage: {result} V</h3>
                        </div>
                    )}
                    {target === 'CURRENT' && (
                        <div className='flex justify-center items-center flex-col'>
                            <label>Voltage: {voltage}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setVoltage(parseFloat(e.target.value))} />
                            <label>Resistance: {resistance}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setResistance(parseFloat(e.target.value))} />
                            <button className='border border-black rounded-lg p-2' onClick={()=>calculate()}>Calculate</button>
                            <h3>Current: {result} A</h3>
                        </div>
                    )}
                    {target === 'RESISTANCE' && (
                        <div className='flex justify-center items-center flex-col'>
                            <label>Voltage: {voltage}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setVoltage(parseFloat(e.target.value))} />
                            <label>Current: {current}</label>
                            <input type='number' className='border border-black rounded-lg p-2' onChange={(e)=>setCurrent(parseFloat(e.target.value))} />
                            <button className='border border-black rounded-lg p-2' onClick={()=>calculate()}>Calculate</button>
                            <h3>Resistance: {result} Ω</h3>
                        </div>
                    )}
                </div>
                <Github url={"A"}/>
            </div>
    )
}