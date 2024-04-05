import leftIcon from './assets/left-icon.png'
import rightIcon from './assets/right-icon.png'
import PageOne from './page-1'
import '../../styles/service.scss'

const Services = () => {
    
    return(
        <div className="service-container">
            <img src={leftIcon} alt="left icon" className='left-right-icon' />
            <PageOne />
            <img src={rightIcon} alt="right icon" className='left-right-icon' />
        </div>
    )
}

export default Services   



