import './comps.css'
import { Link } from '@inertiajs/react'
import google from '../../assets/google.png'
function LogIn(){
    return(
        <form className='container'>
            <h1>Log in to Your account</h1>
            <div className='group'>
                <input placeholder="Email" type="text" className="input-l" />
            </div>
            <div className='group'>
                <input placeholder="Password" type="text" className="input-l" />
            </div>
            <h3 id='pass'>
                Fogot Your Password?
            </h3>
            <button id='logbtn'>Log in</button>
            <div className="img-container">
                <Link href='https://google.com'>
                    <img className='img' src={google} alt="google" />
                </Link>
            </div>
            <h3 id='sign'>New Here? <span>Sign in</span></h3>
        </form>
    )
}

export default LogIn