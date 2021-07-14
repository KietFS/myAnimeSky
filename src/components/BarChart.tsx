import React from 'react'
import {Bar} from "react-chartjs-2";  


const BarChart = () => {
    return (

        <div>
            <Bar 
            type={Bar}
            data={{
                labels: ['24/5', '29/5','2/6', '7/6', '12/6','17/6', '22/6', '27/6', '2/7', '7/7'],
                datasets:[{
                    data:[5,10,30,20,9,25,14,20,28,43],
                    maxBarThickness: 30,
                    backgroundColor: '#2F2F2F',
                    }],
            }}
            height={100}
            width={200}
            options={{
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                      display: false
                    }
                  },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                         }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                         }
                    }]
                }
            }}
             />
        </div>
    )
}

export default BarChart