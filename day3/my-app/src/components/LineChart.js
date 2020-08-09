import React from 'react'
import {Line} from 'react-chartjs-2'
function LineChart() {
    const data={
        labels:['jan','feb','Apr','May','June'],
        datasets:[
            {
                label:'Monthly Income',
                data:[5000,10000,6000,7000,9000,4000],
                borderColor:['red'],
                backgroundColor:['whitesmoke'],
                pointBackgroundColor:'yellow',
                pointBorderColor:'black'
            }
        ]
    }
    
    const options={
        title:{
            display:true,
            text:'Salary'
        },
        scales:{
          yAxes:[
              {
                  ticks:{
                      min:4000,
                      max:12000,
                      stepSize:1000
                  }
              }
          ]
        }
    }
    return (
        
     <Line data={data} options={options}/>
    )
}

export default LineChart
