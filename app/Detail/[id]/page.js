import React from 'react';
import dataGaleria from '@/app/data/dataGaleria';
import Image from 'next/image';
import classes from './styles.module.css';


export default function OnliImage({params}) {
    const { id } = params;
    const objData = dataGaleria.find(item => item.id === parseInt(id));

    return(
        <div className={classes.bodyItem}>
          <div style={{width: "100%", height:"7rem",  background: "#000000ac ", position: "absolute", position:"fixed", top:"0"}} ></div>
            <Image className={classes.img} src={objData.img} height={600} width={600}   alt={`itemImg${id}`} />
            <div className={classes.contText}>
              <h1>{objData.title}</h1>
              <p>{objData.description}</p>
            </div>
        </div>
    )
}