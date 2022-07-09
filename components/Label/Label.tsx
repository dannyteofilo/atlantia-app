import React from 'react'

type LabelProps = {
    title: string;
}

const Label = ({ title }: LabelProps) => {
    return (
        <div className='label'>{title}</div>
    )
}

export default Label