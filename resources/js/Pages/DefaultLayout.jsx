import './MainComps.css'
import { Link } from '@inertiajs/react'
import Logo from '../assets/logo.png'
import userLogo from '../assets/user_logo.png'
import Facebook from '../assets/facebook.png'
import Ig from '../assets/ig.png'
import X from '../assets/x.png'

export default function DefaultLayout({ children }){
    return(
            <>
                <header>
                    <nav className=' NavBar'>
                        <div className='Logo-Title'>
                            <Link href='/'><img className='logo' src={Logo} alt="Logo" /></Link>
                            <Link href='/'><h1 className='title'>User's Books</h1></Link>
                        </div>
                        <ul className='nav-links'>
                            <li className='li'><Link href='/'>Home</Link></li>
                            <li className='li'><Link href='/books'>Books</Link></li>
                            <li className='li'><Link href='/Gener'>Gener</Link></li>
                            <li className='li'><Link href='/books/create'>Add A Book</Link></li>
                            <li>
                                <div className='group'>
                                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                <input placeholder="Search" type="search" className="input-search" />
                                </div>
                            </li>
                            <li className='li'>Contacts</li>
                            <li className='li'>About</li>
                            <li className='li'><Link href='/signIn'>Sign In</Link></li>
                            <li className='li'>
                                <Link to='/login'>Log In</Link>
                            </li>
                        </ul>
               
        </nav>
                </header>
                <article className='article-container'>
                    {children}
                </article>
                <footer>
                    <div className='footer-container'>
                        <div className="footer-sec1">
                            <Link href='/' ><img className='logo' src={Logo} alt="site logo" /></Link>
                            <Link href='/' >User's Books</Link>
                            <p>Where You can feed your Hungry minds with different books ,paired with the highest  qualities in the market </p>
                            <img className='socialLogos' src={Facebook} alt="" />
                            <img className='socialLogos' src={Ig} alt="" />
                            <img className='socialLogos' src={X} alt="" />
                        </div>
                        <div className="footer-sec2">
                            <h3>Site Navigations</h3>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='books'>Books</Link></li>
                                <li><Link href='Gener'>Gener</Link></li>
                                <li><Link href='Contacts'>Contacts</Link></li>
                                <li><Link href='About'>About</Link></li>
                            </ul>
                        </div>
                        <div className="footer-sec3">
                            <h3>Legal</h3>
                            <ul>
                                <li><Link href='privacy-policy'>Privacy policy</Link> </li>
                                <li><Link href='termsOFservice'>Terms of service</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <p>© 2025 User's Books. All rights reserved.</p>
                    </div>
                </footer>
            </>
    )
};