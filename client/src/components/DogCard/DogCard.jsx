import { Link } from "react-router-dom"
import Styles from "./DogCard.module.css"
import defaultImage from '../../assets/img/default_img.jpg'

export default function DogCard(props) {

    return (
        <Link className={Styles.link} to={`/breeds/${props.id}`}>
            <div className={Styles.cardContainer}>
                    <img className={Styles.cardImage} src={props.image ? props.image : defaultImage} alt='Dog'></img>
                    <section className={Styles.description}>
                        <h1>{props.name}</h1>
                        <p>{
                            props.minWeight === props.maxWeight ? `${props.maxWeight} lb` : `${props.minWeight} - ${props.maxWeight} lb`}</p>
                        <p>{
                            props.minHeight === props.maxHeight ? `${props.maxHeight} in` : `${props.minHeight} - ${props.maxHeight} in`}</p>
                        <p>{props.temperament.join(', ')}</p>
                    </section>
            </div>
        </Link>
    )
}