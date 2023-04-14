import Styles from './Footer.module.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <p>Developed by:</p>
            <p>JORGE RAMIREZ -- Copyrigth © - 2023</p>

            <div className={Styles.links}>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/jorge-ramirez-del-aguila/'><BsLinkedin/></a>  
                <a target='_blank' rel="noreferrer" href='https://github.com/SystemGDS'><BsGithub/></a>
            </div>
        </div>
    )
}