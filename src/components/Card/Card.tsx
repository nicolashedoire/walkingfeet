import React from 'react';
import styles from './styles.module.scss';

export default function Card(props: any) {

    return (
        <div className={`${styles.card} mr-4`}>
            {props.children}
        </div>
    )
}