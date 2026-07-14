import './App.css'
import {useState} from 'react'
import Github from './Github'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import fourBandImg from '../assets/4band.png'
import fiveBandImg from '../assets/5band.png'
export default function Resistor(){
    type resistorTypes = 4 | 5
    type dict = {
        color:string,
        digit:string,
        mult:number,
        tolerance:string
    }
    const [type,setType] = useState<resistorTypes>(4)
    const [bandArr,setBandArr] = useState<string[]>(Array.from({length: type}, () => 'Black'))
    const [result,setResult] = useState('')
    const [showTable,setShowTable] = useState(false)
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
            tolerance:'± 1%'
        },
        'Red':{
            color:"Red",
            digit:'2',
            mult:100,
            tolerance:'± 2%'
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
            tolerance:'± 0.5%'
        },
        'Blue':{
            color:"Blue",
            digit:'6',
            mult:1000000,
            tolerance:'± 0.25%'
        },
        'Violet':{
            color:"Violet",
            digit:'7',
            mult:10000000,
            tolerance:'± 0.1%'
        },
        'Grey':{
            color:"Grey",
            digit:'8',
            mult:0,
            tolerance:'± 0.05%'
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
            tolerance:'± 5%'
        },
        'Silver':{
            color:"Silver",
            digit:'0',
            mult:0.01,
            tolerance:'± 10%'
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
    function calculateResult(){
        let res = 0
        let tolerance = ''
        let returnVal = ''
        console.log(bandArr)
        let frontDigs = colorDict[bandArr[0]].digit + colorDict[bandArr[1]].digit
        if(type === 4){
            tolerance = colorDict[bandArr[3]].tolerance
            res = parseFloat(frontDigs) * colorDict[bandArr[2]].mult
        } else {
            frontDigs += colorDict[bandArr[2]].digit
            tolerance = colorDict[bandArr[4]].tolerance
            res = parseFloat(frontDigs) * colorDict[bandArr[3]].mult
        }
        returnVal = String(res) + ' ' + tolerance
        setResult(returnVal)
    }
    return (
        <div className='font-mono'>
            <Navbar />
            <div className='flex justify-center items-center flex-col'>
                <h1>Resistor Color Code Calculator</h1>
                <div>
                    <div className='p-2 m-2 flex justify-center items-center flex-col'>
                        <h4>Resistor Color Code Table <button className='border border-black rounded-lg p-2' onClick={()=>{
                            setShowTable(showTable=>!showTable)
                        }}>{showTable === false ? 'Show' : 'Hide'}</button></h4>
                    <div className={`${showTable === false ? 'hidden' : 'show'} flex`}>
                        <div className='m-2'>
                        <table className='border-collapse border border-black'>
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className='border border-black p-2 text-left'>Color</th>
                                    <th className='border border-black p-2 text-left'>Digit</th>
                                    <th className='border border-black p-2 text-left'>Multiplier</th>
                                    <th className='border border-black p-2 text-left'>Tolerance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabulateColorCodes().slice(0,6).map((val,idx)=>(
                                    <tr key={idx}>
                                        <td className='border border-black p-2'>{val.color}</td>
                                        <td className='border border-black p-2'>{val.digit}</td>
                                        <td className='border border-black p-2'>{val.mult}</td>
                                        <td className='border border-black p-2'>{val.tolerance.length > 0 ? val.tolerance : '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        <div className='m-2'>
                            <table className='border-collapse border border-black'>
                            <thead>
                                <tr className='bg-gray-200'>
                                    <th className='border border-black p-2 text-left'>Color</th>
                                    <th className='border border-black p-2 text-left'>Digit</th>
                                    <th className='border border-black p-2 text-left'>Multiplier</th>
                                    <th className='border border-black p-2 text-left'>Tolerance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabulateColorCodes().slice(6,12).map((val,idx)=>(
                                    <tr key={idx}>
                                        <td className='border border-black p-2'>{val.color}</td>
                                        <td className='border border-black p-2'>{val.digit}</td>
                                        <td className='border border-black p-2'>{val.mult}</td>
                                        <td className='border border-black p-2'>{val.tolerance.length > 0 ? val.tolerance : '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className='flex justify-center items-center flex-col border border-black rounded-lg p-4 m-2'>
                        <h4>Current Resistor Type: {type}-band resistor</h4>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={type === 4 ? fourBandImg : fiveBandImg} alt={`${type}-band resistor`} className='w-64 h-auto my-4' />
                            </div>
                            <div>
                                <select className='border border-black rounded-lg p-2' onChange={(e)=>{
                            const newType = parseInt(e.target.value) as resistorTypes
                            setType(newType)
                            setBandArr(Array.from({length: newType}, () => 'Black'))
                            setResult('')
                        }}>
                            <option value={4}>4-band</option>
                            <option value={5}>5-band</option>
                        </select>
                        {bandArr.map((val,idx)=>(
                            <div className='p-2'>
                                <label>Band {idx + 1} Color:</label>
                                <select className='border border-black rounded-lg p-2' defaultValue={"Black"} onChange={(e)=>{
                                    setBandArr(bandArr => {
                                        const newArr = [...bandArr]
                                        newArr[idx] = e.target.value
                                        return newArr
                                    })
                                    setResult('')
                                }}>
                                    {Object.keys(colorDict).map((val,idx)=>(
                                        <option key={idx} value={val}>{val}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                        <button className='border border-black rounded-lg p-2' onClick={()=>calculateResult()}>Calculate</button>
                        <h3>Result: {result} Ω</h3>
                    </div>
                    </div>
                </div>
            </div>
            <Github url={"A"}/>
        </div>
    )
}