import React, { Component } from 'react'
import CanvasJSReact from '../canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Contribution extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dPoints: ''
        }
    }

    componentDidMount = () => {
        const { data } = this.props
        let obj = {}

        for (let i = 0; i < data.length; i++) {
            if (!(data[i].type in obj)) {
                obj[data[i].type] = 1
            }
            else {
                obj[data[i].type]++
            }
        }

        let dPoints = []
        for (const property in obj) {
            let temp = {}
            temp["y"] = obj[property]
            temp["label"] = property
            dPoints.push(temp)
        }
        this.setState({
            dPoints: dPoints,
        })
    }

    render() {
        const options = {
            animationEnabled: true,
            theme: "dark1",
            title: {
                text: "Contribution"
            },
            axisX: {
                title: "Localities",
                reversed: true,
            },
            axisY: {
                title: "Number of people",
                includeZero: true,
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: this.state.dPoints
            }]
        }
        return (
            <div className='p-5'>
                <CanvasJSChart options={options} />
            </div>
        );
    }
}