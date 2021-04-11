import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tableau.module.scss';
import GridLayout from 'react-grid-layout';

import {
    createColonne,
    deleteColonne,
    selectTableau,
} from './tableauSlice';
import {useDispatch, useSelector} from "react-redux";

export function Tableau() {

    const tableau = useSelector(selectTableau);

    const content = tableau.colonnes ? tableau.colonnes.map((colonne, index) =>
         <div className={styles.colonne} key={colonne.id} data-grid={{x: 1, y: 0, w: 3, h: 5, minW: 2, maxW: 4}}>
             <input className={styles.titre} defaultValue={colonne.title}></input>
             <button className={styles.buttonSupp} onClick={() => dispatch(deleteColonne(colonne.id))}>X</button>
         </div>
    ) : "";

    const dispatch = useDispatch();

    return (
        <div className={styles.tableau}>
            <button className={styles.buttonAjout} onClick={() => dispatch(createColonne())}>Ajouter une colonne</button>
            <div className={styles.gridSize}>
                <GridLayout draggableCancel="input" compactType={'horizontal'} maxRows={1} cols={100} width={12000}>
                    {content}
                </GridLayout>
            </div>
        </div>
    )
};
