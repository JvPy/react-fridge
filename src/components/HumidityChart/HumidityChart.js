import React, {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js';
import Card from '../Card/Card'
import "./HumidityChart.css"
const chartData = require('../../messages/plants.json');

// let chartRef = React.createRef();

const handleChartLabels = () => {
  let labels = [];

  chartData.plants.map(x => {
    labels.push(x.plant);
  })

  return labels;
}

const handleChartData = () => {
  let dataset = [];

  chartData.plants.map(x => {
    dataset.push(x.humidity);
  })

  return dataset;
}

const chartConfig = {
    // type: 'polarArea',
    // data: {
    //   labels: ["Pepper", "Rosemary", "Oregano", "Thyme", "Parsely"],
    //   datasets: [
    //     {
    //       label: "Humidity(millions)",
    //       backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //       data: [72,33,98,12, 44]
    //     }
    //   ]
    // },
    // options: {
    //   title: {
    //     display: true,
    //     text: 'Soil humidity level (in %)'
    //   },
    //   scale: {
    //     ticks: {
    //         max:100
    //     }
    //   }
    // }

    type: 'bar',
    data: {
      labels: handleChartLabels(),
      datasets: [
        {
          label: "Humidity level",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: handleChartData()
        }
      ]
    },
    options: {
        legend: {display: false},
      title: {
        display: true,
        text: 'Soil humidity level (in %)'
      },
      scales: {
        yAxes:{
            ticks: {
                max:100
            }
        }
      }
    }
}

const HumidityChart = () => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chart(chartContainer.current, chartConfig);
        setChartInstance(newChartInstance);
      }
    }, [chartContainer]);

    return (
      <Card>
          <canvas
              id="myChart"
              ref={chartContainer} 
          />
      </Card>
    )
}

export default HumidityChart;
