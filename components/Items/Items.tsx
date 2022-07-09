import React from 'react'
import Image from 'next/image';
import { productsInterface } from '../../interfaces/Products'

export const Items = ({ id, sku, name, persistence, averagePosition, averagePrice, productImage }: productsInterface) => {
    return (
        <tr className={id % 2 === 0 ? 'item gray' : 'item'}>
            <td className='name'>
                <Image src={productImage} alt="" width={121} height={131} />
                <span>{name}</span>
            </td>
            <td>{sku}</td>
            <td className={id % 2 === 0 ? 'green' : 'pink'} style={{ color: id % 2 === 0 ? '#D6215B' : '#23B794' }}>{persistence}%</td>
            <td>{averagePrice}</td>
            <td>{averagePosition}</td>
        </tr>
    )
}
