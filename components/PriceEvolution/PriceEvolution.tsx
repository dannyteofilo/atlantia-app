import React from 'react'
import dynamic from 'next/dynamic';
import { EvolutionInterface } from '../../interfaces/Evolution';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
type ChartProps = {
    data: Array<EvolutionInterface>
}
const PriceEvolution = ({ data }: ChartProps) => {
    const filteredArr = data.reduce((acc: any, current: EvolutionInterface) => {
        const x = acc.find((item: EvolutionInterface) => item.sku === current.sku);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    const arrSeries:any = [];

    filteredArr.forEach((element: EvolutionInterface) => {
        const price = data
            .filter((el: EvolutionInterface) => el.sku === element.sku)
            .map((e) => e.price);
        const serie = {
            name: element.name,
            data: price,
        };
        arrSeries.push(serie);
    });

    const series = arrSeries
    const options = {
        chart: {
            height: 350,
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth",
        },
        legend: {
            tooltipHoverFormatter: (val: any, opts: any) => (val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '')
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: data.map((el: EvolutionInterface) => el.dateExtraction),
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: (val: any) => (val + " (mins)")
                    }
                },
                {
                    title: {
                        formatter: (val: any) => (val + " per session")
                    }
                },
                {
                    title: {
                        formatter: (val: any) => (val)
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }

    return (
        <div className='price-evolution'>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default PriceEvolution
