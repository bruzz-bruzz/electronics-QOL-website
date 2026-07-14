import './App.css'
import {useState} from 'react'
import Github from './Github'
import {Link} from 'react-router-dom'
export default function Resistor(){
    type resistorTypes = 4 | 5 | 6
    type dict = {
        digit:string,
        mult:number,
        tolerance:string
    }
    const [type,setType] = useState<resistorTypes>(4)
    const [colorDict,setColorDict] = useState<Record<string,dict>>({
        'Black':{
            digit:'0',
            mult:1,
            tolerance:''
        },
        'Brown':{
            digit:'1',
            mult:10,
            tolerance:'$\pm 1\%$'
        },
        'Red':{
            digit:'2',
            mult:100,
            tolerance:'$\pm 2\%$'
        },
        'Orange':{
            digit:'3',
            mult:1000,
            tolerance:''
        },
        'Yellow':{
            digit:'4',
            mult:10000,
            tolerance:''
        },
        'Green':{
            digit:'5',
            mult:100000,
            tolerance:'$\pm 0.5\%$'
        },
        'Blue':{
            digit:'6',
            mult:1000000,
            tolerance:'$\pm 0.25\%$'
        },
        'Violet':{
            digit:'7',
            mult:10000000,
            tolerance:'$\pm 0.1\%$'
        },
        'Grey':{
            digit:'8',
            mult:0,
            tolerance:'$\pm 0.05\%$'
        },
        'White':{
            digit:'9',
            mult:0,
            tolerance:''
        },
        'Gold':{
            digit:'0',
            mult:0.1,
            tolerance:'$\pm 5\%$'
        },
        'Silver':{
            digit:'0',
            mult:0.01,
            tolerance:'$\pm 10\%$'
        }
    })
    function tabulateColorCodes(){
        const keys = Object.keys(colorDict)
        let arr = []
        for(let i = 0; i < keys.length; i++){
            arr.push()
        }
    }
    return (
        <div className='font-mono'>
            <div className='flex justify-center items-center flex-col'>
                <button className='border border-black rounded-lg p-2 absolute top-5 left-5'><Link to='/'>Home</Link></button>
                <h1>Resistor Color Code Calculator</h1>
                <div>
                    <label>Resistor type: {type}-bands</label>
                    <select className='border border-black rounded-lg p-2' onChange={(e)=>{
                        setType(parseInt(e.target.value) as resistorTypes)
                    }}>
                        <option value={4}>4-band</option>
                        <option value={5}>5-band</option>
                        <option value={6}>6-band</option>
                    </select>
                </div>
                <div>
                    <h4>Resistor Color Code Chart</h4>
                    
                </div>
                {type === 4 && (
                    <div className='flex justify-center items-center flex-col'>
                    </div>
                )}
            </div>
            <Github url={"A"}/>
        </div>
    )
}