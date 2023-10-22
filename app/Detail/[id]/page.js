import React from 'react';
import dataGaleria from '@/app/data/dataGaleria';
import Image from 'next/image';
import classes from './styles.module.css';


export default function OnlyImage({params}) {
    const { id } = params;
    const objData = dataGaleria.find(item => item.id === parseInt(id));

    return(
        <div className={classes.bodyItem}>
          {/* <div className={classes.menuBackground}></div> */}
            <Image className={classes.img} src={objData.img} height={550} width={400}   alt={`itemImg${id}`} />
            <div className={classes.contText}>
              <h1>{objData.title}</h1>
              <p>{objData.description}</p>
            </div>
        </div>
    )
}