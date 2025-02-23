
import './aboutus.css';
import Chef from './Chef.svg';
import Photo1 from './Photo1.svg';
import Photo2 from './Photo2.svg';
const AboutUs = () => {
    return (
        <div className='conteiner'>
            <div>
                <div>
                    <h1><span>Our</span><br />restaurant</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
                <div>
                    <img src={Photo1} />
                </div>
                
                

            </div>
            <div>
                <div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

                </div>
                <div>
                    <img src={Photo2} />
                </div>
            </div>
            <div>
                <div>
                    <h1><span>Owner</span> & <br />Executive Chrf</h1>
                    <h2>Ismail Marzuki</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <img src={Chef} />
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;