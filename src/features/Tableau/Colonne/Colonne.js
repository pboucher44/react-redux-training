import styles from './Colonne.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteColonne,
} from '../tableauSlice';

const Colonne = (props) => {
    const dispatch = useDispatch();
    const {id, title} = props.colonne;
    console.log(props)
    return (<div className={styles.colonne} key={id}>
        <input className={styles.titre} defaultValue={title}></input>
        <button className={styles.buttonSupp} onClick={() => dispatch(deleteColonne(id))}>X</button>
    </div>)
};

export default Colonne;
