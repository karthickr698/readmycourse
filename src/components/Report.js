import React, { Component } from 'react'
import Contribution from './Contribution'

export default class Reports extends Component {
    render() {
        console.log(this.props)
        const { reportData } = this.props
        return (
            <div>
                gg
                <Contribution data={reportData} />
                {/*<PeopleByLocality />
                <Count /> */}
            </div>
        )
    }
}