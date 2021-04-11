import React from 'react';
import styles from './Tableau.module.scss';

import {
    createColonne,
    deleteColonne,
    selectTableau,
} from './tableauSlice';
import {useDispatch, useSelector} from "react-redux";
import Colonne from "./Colonne/Colonne";

export function Tableau() {

    const tableau = useSelector(selectTableau);

    const dispatch = useDispatch();

    return (
        <div className={styles.tableau}>
            <button className={styles.buttonAjout} onClick={() => dispatch(createColonne())}>Ajouter une colonne</button>
            <div className={styles.gridSize}>
                {tableau.colonnes.length > 0 && tableau.colonnes.map((colonne) =>
                    <Colonne colonne={colonne}/>
                )}
            </div>
        </div>
    )
};
