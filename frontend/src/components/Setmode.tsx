import './App.css'
import {useCookies} from 'react-cookie'
export default function Setmode(){
    const [cookies,setCookie] = useCookies(['mode'])
    console.log(cookies)
    return (
        <div className='font-mono'>
            <div>

            </div>
        </div>
    )
}