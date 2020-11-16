import React, { Component } from 'react'
import Chart from './Contribution'

export default class Reports extends Component {
    render() {
        console.log(this.props)
        const { reportData } = this.props
        return (
            <div>
                <Chart />
            </div>
        )
    }
}