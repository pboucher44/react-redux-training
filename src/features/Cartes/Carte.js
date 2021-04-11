import React from 'react';
import styles from './Carte.module.scss';

import {
    createCarte,
    deleteCarte,
    selectCarte,
} from './CarteSlice';
import {useDispatch, useSelector} from "react-redux";

export function Carte() {

    const carte = useSelector(selectCarte);

    const content = carte.cartes ? carte.cartes.map((carte, index) =>
         <div className={styles.colonne} key={carte.id}>
             <input className={styles.titre} defaultValue={carte.title}></input>
             <textarea className={styles.titre} defaultValue={carte.text}></textarea>
             <button className={styles.buttonSupp} onClick={() => dispatch(deleteCarte(carte.id))}>X</button>
         </div>
    ) : "";

    const dispatch = useDispatch();

    return (
        <div className={styles.carte}>
            <button className={styles.buttonAjoutCarte} onClick={() => dispatch(createCarte())}>Ajouter une carte</button>
            <div className={styles.gridSize}>
                {content}
            </div>
        </div>
    )
};
