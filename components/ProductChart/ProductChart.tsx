import React from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ShareInterface } from '../../interfaces/Share'
type ChartProps = {
    data: Array<ShareInterface>
}
const ProductChart = ({ data }: ChartProps) => {
    const options = { labels: data.map((el: ShareInterface) => el.name) }
    const series = data.map((el: ShareInterface) => el.presenceShare)

    return (
        <div className="donut">
            <Chart options={options} series={series} type="pie" width="380" />
        </div>
    )
}

export default ProductChart
