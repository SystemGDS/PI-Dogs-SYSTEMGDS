import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTemperaments } from '../../redux/actions'
import Styles from '../Options/Options.module.css'


export default function Options(props) {
    const temperaments = useSelector((state) => state.temperaments).sort()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTemperaments())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div >
            <label className={Styles}>Choose temperament: </label>
            <select className={Styles['custom-select']} name='filterBy' onChange={(e)=>props.handleFilter(e)}>
                <option value=''>All</option>
                {
                    temperaments.map(e => <option key={e} value={e}>{e}</option>)
                }
                
            </select>
            <label className={Styles}>Order by: </label>
            <select className={Styles['custom-select']} name='orderBy' onChange={(e)=>props.handleOrderBy(e)}>
                <optgroup label='Name'>
                    <option value='name_asc'>A - Z</option>
                    <option value='name_desc'>Z - A</option>
                </optgroup>
                <optgroup label='Weight'>
                    <option value='weight_asc'>Min first</option>
                    <option value='weight_desc'>Max first</option>
                </optgroup>
            </select>
        </div>
    )
}