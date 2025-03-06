import { NavLink, Outlet } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import king from '../../assets/king.png'
import crown from '../../assets/crown.svg'
import basket from '../../assets/basket.svg'
import twitter from '../../assets/twitter.png'
import './Layout.css'


const setActiveFooter = ({isActive}) => isActive ? 'activeFooter' : 'footerButton';
const setActiveHeader = ({isActive}) => isActive ? 'activeHeader' : 'headerButton';
function Layon() {
    return (
        <>
            <header className='container'>
                
                <div className='container'>
                    <img src={crown} className='LogoHeader'></img>
                    <h1 className='LogoNameHeader'>Delizi<span>oso</span></h1>
                </div>
                <div className='container'>
                    <NavLink to = "/" className={setActiveHeader}>Home</NavLink>
                    <NavLink to="/Menu" className={setActiveHeader}>Menu</NavLink>
                    <NavLink to="/Aboutus"className={setActiveHeader}>About us</NavLink>
                    <NavLink to="/OrderOnline" className={setActiveHeader}>Order online</NavLink>
                    <NavLink to="/Reservation" className={setActiveHeader}>Reservation</NavLink>
                    <NavLink to="/ContactUs" className={setActiveHeader}>Contact us</NavLink>
                </div>
                <div className='container'>
                    <NavLink  to="/OrderOnline"><img src={basket}></img></NavLink>
                    <NavLink to="/Authorization"className="LogInButton">Log in</NavLink>
                </div>
                
            </header>
    
            <main>
            <Outlet />
            </main>
            
            
    
            <footer>
              <div className='Info'>
                <div className='buttonBlock'>
                  <img className='LogoFooter' src={king}/>
                  <h1 className='LogoName'>Delizi<span>oso</span></h1>
                </div>
                <p className='footerText'>Viverra gravida morbi egestas
                  facilisis tortor netus non duis
                  tempor.</p>
                <div className='buttonBlock'>
                  <button className='socialsiteButton'><img className='socialsite' src={twitter}></img></button>
                  <button className='socialsiteButton'><img className='socialsite' src={instagram}></img></button>
                  <button className='socialsiteButton'><img className='socialsite' src={facebook}></img></button>
                </div>
                
              </div>
              <div className='Page'>
                <h1 className='footerH1'>Page</h1>
                <NavLink to = "/" className={setActiveFooter}>Home</NavLink>
                <NavLink to = "/Menu"className={setActiveFooter}> Menu</NavLink>
                <NavLink to = "/OrderOnline"className={setActiveFooter}>Order online</NavLink>
                <NavLink to = "/Caterin"className={setActiveFooter}>Catering</NavLink>
                <NavLink to = "/Reservation"className={setActiveFooter}>Reservation</NavLink>
              </div>
              < div className='Information'>
                <h1 className='footerH1'>Information</h1>
                <NavLink to = "/AboutUs"className={setActiveFooter}>About us</NavLink>
                <NavLink to = "/Testimonial"className={setActiveFooter}>Testimonial</NavLink>
                <NavLink to = "/Even"className={setActiveFooter}>Event</NavLink>
              </div>
              <div className='contacts'>
                <h1 className='footerH1'>Get in touch</h1>
                <p className='footerText'>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                <p className='footerText'>delizioso@gmail.com</p>
                <p className='footerText'>+123 4567 8901</p>
              </div>
            </footer>
        </>
    )
}

    

export default Layon