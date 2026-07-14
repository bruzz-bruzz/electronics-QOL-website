import './App.css'
import {useState} from 'react'
import Github from './Github'
import {Link} from 'react-router-dom'
export default function Resistor(){
    type resistorTypes = 4 | 5 | 6
    type dict = {
        color:string,
        digit:string,
        mult:number,
        tolerance:string
    }
    const [type,setType] = useState<resistorTypes>(4)
    const [colorDict,setColorDict] = useState<Record<string,dict>>({
        'Black':{
            color:"Black",
            digit:'0',
            mult:1,
            tolerance:''
        },
        'Brown':{
            color:"Brown",
            digit:'1',
            mult:10,
            tolerance:'$\pm 1\%$'
        },
        'Red':{
            color:"Red",
            digit:'2',
            mult:100,
            tolerance:'$\pm 2\%$'
        },
        'Orange':{
            color:"Orange",
            digit:'3',
            mult:1000,
            tolerance:''
        },
        'Yellow':{
            color:"Yellow",
            digit:'4',
            mult:10000,
            tolerance:''
        },
        'Green':{
            color:"Green",
            digit:'5',
            mult:100000,
            tolerance:'$\pm 0.5\%$'
        },
        'Blue':{
            color:"Blue",
            digit:'6',
            mult:1000000,
            tolerance:'$\pm 0.25\%$'
        },
        'Violet':{
            color:"Violet",
            digit:'7',
            mult:10000000,
            tolerance:'$\pm 0.1\%$'
        },
        'Grey':{
            color:"Grey",
            digit:'8',
            mult:0,
            tolerance:'$\pm 0.05\%$'
        },
        'White':{
            color:"White",
            digit:'9',
            mult:0,
            tolerance:''
        },
        'Gold':{
            color:"Gold",
            digit:'0',
            mult:0.1,
            tolerance:'$\pm 5\%$'
        },
        'Silver':{
            color:"Silver",
            digit:'0',
            mult:0.01,
            tolerance:'$\pm 10\%$'
        }
    })
    function tabulateColorCodes(){
        const keys = Object.keys(colorDict)
        let arr = []
        for(let i = 0; i < keys.length; i++){
            arr.push(colorDict[keys[i]])
        }
        return arr
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
                    <table className='border border-black rounded-lg p-2'>
                        <tr className='border border-black rounded-lg p-2'>
                            <th>Color</th>
                            <th>Digit Value</th>
                            <th>Multiplier</th>
                            <th>Tolerance</th>
                        </tr>
                    {tabulateColorCodes().map((val,idx)=>(
                        <tr key={idx} className='border border-black rounded-lg p-2'>
                            <td>{val.color}</td>
                            <td>{val.digit}</td>
                            <td>{val.mult}</td>
                            <td>{val.tolerance}</td>
                        </tr>
                    ))}
                    </table>
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