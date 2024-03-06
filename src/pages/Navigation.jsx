import stocklabLogo from '../assets/stocklab-logo.png';
import facebookLogo from '../assets/logo-fb-simple-2.png';
import instaLogo from '../assets/logo-instagram-2.png';
import down from '../assets/vector-1.svg';


const Navigation = () => {
    return (
        <nav>
            <a href="#">
                <img id='StocklabLogo' src={stocklabLogo} alt="stocklab-logo" />
            </a>
            <div className='nav-right'>
                <ul className='NavLinks'>
                    <li>
                        <a href="/about">Бидний тухай</a>
                    </li>
                    <li>
                        <a href="/services">Үйлчилгээ <img src={down} alt="down" id='DownVector' /></a>
                    </li>
                    <li>
                        <a href="/news">Мэдээлэл</a>
                    </li>
                    <li>
                        <a href="/instructions">Заавар</a>
                    </li>
                </ul>
                <div>
                    <div className='social-links'>
                        <a href="#">
                            <img className='social-logo' src={facebookLogo} alt="facebook-logo" />
                        </a>
                        <a href="#">
                            <img className='social-logo' src={instaLogo} alt="instagram-logo" />
                        </a>
                    </div>
                    <button id='LoginButton'>Нэвтрэх</button>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;