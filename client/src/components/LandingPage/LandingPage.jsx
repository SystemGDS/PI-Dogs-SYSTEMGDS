import React from "react";
import Styles from "./LandingPage.module.css"
import { Link } from 'react-router-dom'
import Video from './../../assets/img/2021(720p).mp4'

export default function LandingPage() {
    return (
        <div>
            <video className={Styles.video} autoPlay muted loop id='bgVideo'>
                <source src={Video} type='video/mp4'></source>
            </video>
            <div className={Styles.welcome}>
                <h1>Henry's Dogs</h1>
                <small>Individual Project developed by: <a target='_blank' alt="Enlace LinkendIn" rel="noreferrer" href='https://www.linkedin.com/in/jorge-ramirez-del-aguila/'>Jorge Ramirez</a> for Henry Bootcamp</small>
                <Link to='/home' className={Styles.button}><button>Click Here</button></Link>
            </div>
        </div>
    )
}