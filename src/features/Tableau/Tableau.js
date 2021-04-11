import React from 'react';
import styles from './Tableau.module.scss';

import {
    createColonne,
    deleteColonne,
    selectTableau,
} from './tableauSlice';
import {useDispatch, useSelector} from "react-redux";
import {Carte} from "../Cartes/Carte";

export function Tableau() {

    const tableau = useSelector(selectTableau);

    const Content = () => {
        return tableau.colonnes ? tableau.colonnes.map((colonne) =>
         <div className={styles.colonne} key={colonne.id}>
             <input className={styles.titre} defaultValue={colonne.title}></input>
             <button className={styles.buttonSupp} onClick={() => dispatch(deleteColonne(colonne.id))}>X</button>
             <Carte/>
         </div>
    ) : ""};

    const dispatch = useDispatch();

    return (
        <div className={styles.tableau}>
            <button className={styles.buttonAjout} onClick={() => dispatch(createColonne())}>Ajouter une colonne</button>
            <div className={styles.gridSize}>
                <Content></Content>
            </div>
        </div>
    )
};
