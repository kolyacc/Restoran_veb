import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import king from '../../assets/king.png'
import people1 from '../../assets/PeoplePhoto/People1.png'
import people2 from '../../assets/PeoplePhoto/people2.png'
import people3 from '../../assets/PeoplePhoto/people3.png'
import people4 from '../../assets/PeoplePhoto/people4.png'
import people5 from '../../assets/PeoplePhoto/people5.png'
import people6 from '../../assets/PeoplePhoto/people6.png'
import people7 from '../../assets/PeoplePhoto/people7.png'
import BetranKomar from '../../assets/chef/Betran Komar.png'
import FerrySauwi from '../../assets/chef/Ferry Sauwi.png'
import IswanDracho from '../../assets/chef/Iswan Dracho.png'
import ReservationImg1 from '../../assets/ReservationImg/ReservationImg1.png'
import ReservationImg2 from '../../assets/ReservationImg/ReservationImg2.png'
import ReservationImg3 from '../../assets/ReservationImg/ReservationImg3.png'
import { Dishes } from '../menu/Dish/Dish'
import Dish from '../menu/Dish/Dish.jsx'
import './Home.css'

function Home() {

  return (
    <>
      <div className='block'>
        <div className='Header'>
          <button><img src={reactLogo}></img></button>
          <button>Home</button>
          <button>Menu</button>
          <button>About us</button>
          <button>Order online</button>
          <button>Reservation</button>
          <button>Contact us</button>
          <button><img src={reactLogo}></img></button>
          <button>Log in</button>
        </div>
        <div className='group'>
          <div className='text'>
            <h2>Resultat</h2>
            <h1>Italian Cuisite</h1>
            <h2>Lorem ipsum dolor sit ameti consectetur adipiscing
                elit Sodales senectus dictum arcu sit tristique
                donec eget.
            </h2>
            <div>
              <button>Order now</button>
              <button>Reservation</button>
            </div>
          </div>
          <div className='images'>
            <img className='eat' src={reactLogo} alt='eat'/>
          </div>
        </div>
      </div>
      <div className='block'>
          <div className='text2'>
            <h1>Veclom to delizioso</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit Facilisis ultricies at eleifend
                proin. Congue nibh nulla malesuada
                ultricies nec quam
            </h2>
            <div>
              <button>Sea our menu</button>
            </div>
          </div>
          <div className='images2'>
            <img className='eat' src={reactLogo} alt='eat'/>
          </div>
        </div>
        <div>
          <h1>Our popular menu</h1>
          <button>All category</button>
          <button>Dinner</button>
          <button>Launch</button>
          <button>Dessert</button>
          <button>Drink</button>
          <div className='dish-container'>
            {Dishes.map((dish)=> (
              <Dish 
                key = {dish.id}
                title = {dish.title} 
                rating = {dish.rating}
                description = {dish.description} 
                price = {dish.price}
                DishImg ={dish.dishImg} 
              />
            ))}
          </div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <div className='block' id='ReservationBlock'>
          <div className='ReservationImgBlock'>
            <div className='ReservationImg1'><img  id='ReservationImg1' src={ReservationImg1}/></div>
            <div className='ReservationImg2'><img  id='ReservationImg2'src={ReservationImg2}/></div>
            <div className='ReservationImg3'><img  id='ReservationImg3'src={ReservationImg3}/></div>
          </div>
          <div className='ReservationTextBlock'>
            <h1 className='ReservationText'>Let's reserve <br/><span>a table</span></h1>
            <h2 className='ReservationTextP'>Lorem ipsum dolor sit amet, consectetur
                dipiscing elit. Facilisis ultricies at eleifend
                proin. Congue nibh nulla malesuada
                ultricies nec quam
            </h2>
            <div id='ReservationButton'><button className='OrengeButton'>Reservation</button></div>
            
          </div>
          
        </div>
        <div className='block' id='Chef'>
          <h1 className='ChefText'>Our greatest chef</h1>
          <div className='ChefContainer'>
            <div>
              <div className='chef'id='chef1'><img className='chefimg'src={BetranKomar}/></div>
              <h2>Betran Komar</h2>
              <p>Head chef</p>
            </div>
            <div>
              <div className='chef'id='chef2'><img className='chefimg'src={FerrySauwi}/></div>
              <h2>Ferry Sauwi</h2>
              <p>Chef</p>
            </div>
            <div>
              <div className='chef'id='chef3'><img className='chefimg'src={IswanDracho}/></div>
              <h2>Iswan Dracho</h2>
              <p>Chef</p>
            </div>
          </div>
          <button className='OrengeButton' id='ChefAllVive'>Vive all</button>
        </div>
        <div className='block' id='PeopleBlock'>
          <h1 className='HeaderTextPeople'>Our castomers say</h1>
          <img className='peopleImg' id = 'peopleImg8'src={people7}/>
          <h2 className='StarlaVirgoun'>Starla Virgoun</h2>
          <p className='FinancialAdvisor'>Financial advisor</p>
          <p className='TextPeople'>Lorem ipsum dolor sit amet consectetur adipiscing
              elit. Facilisis ultricies at eleifend proin. Congue nibh
              nulla malesuada ultricies nec quam</p>
          <div className='PeopleBox'>
            
            <img hidden className='peopleImg' id = 'peopleImg6'src={people6}/>
            <img className='peopleImg' id = 'peopleImg5'src={people5}/>
            <img className='peopleImg' id = 'peopleImg4'src={people4}/>
            
            <img className='peopleImg' id = 'peopleImg7'src={people7}/>
            <img className='peopleImg' id = 'peopleImg3'src={people3}/>
            <img className='peopleImg' id = 'peopleImg2'src={people2}/>
            <img hidden className='peopleImg' id = 'peopleImg1'src={people1}/>
          </div>
        </div>
        <div className='block'>
          <div className='OpeningHoursCard'>
            <h1 className='OpeningHoursCardTexth1'>we are open from</h1>
            <h2 className='OpeningHoursCardTexth2'>Monday - Sunday</h2>
            <p className='OpeningHoursCardTextp'>Launch : Mon-Sun : 11:00am-02:00pm</p>
            <p className='OpeningHoursCardTextp'>Dinner : sunday : 04:00pm-08:00pm</p>
            <button className='OrengeButton'>Order now</button>
            <button className='ReservationButton'>Reservation</button>
          </div>
        </div>
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
            <div><button className='footerButton'>Home</button></div>
            <div><button className='footerButton'>Menu</button></div>
            <div><button className='footerButton'>Order online</button></div>
            <div><button className='footerButton'>Catering</button></div>
            <div><button className='footerButton'>Reservation</button></div>
          </div>
          <div className='Information'>
            <h1 className='footerH1'>Information</h1>
            <div><button className='footerButton'>About us</button></div>
            <div><button className='footerButton'>Testimonial</button></div>
            <div><button className='footerButton'>Event</button></div>
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

export default Home
