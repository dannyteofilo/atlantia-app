import React from 'react'
import { Items } from '../Items/Items';
import { productsInterface } from '../../interfaces/Products'

type TableProps = {
    data?: Array<productsInterface>,
    tableValues: Array<string>
}

const TableComparative = ({ data, tableValues }: TableProps) => {
    console.log('data recived: ', data);
    return (
        <>
            <table className='table-comparative'>
                <thead>
                    <tr className='head'>
                        {
                            tableValues.map((value: string, index: number) => (
                                <th key={index}>{value}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item: productsInterface) => (
                            <Items key={item.id} {...item} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableComparative;
