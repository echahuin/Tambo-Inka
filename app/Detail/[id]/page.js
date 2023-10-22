import React from 'react';
import dataGaleria from '@/app/data/dataGaleria';
import Image from 'next/image';
import classes from './styles.module.css';


export default function OnliImage({params}) {
    const { id } = params;
    const objData = dataGaleria.find(item => item.id === parseInt(id));
    console.log(objData);

    return(
        <div>
          <Image src={objData.img} fill={true} alt='' />
        </div>
    )
}