import React, { useState, useEffect } from 'react'
import './home.css'
import Reports from './Report'

import datas from "../data.json";

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(datas.report)
    }, [])
    return (
        <div>
            <div className="status"></div>
            <div className="cont">
                <div class="side">
                    <div class="nav-item sidebars">
                        <a href="#home1" class="nav-link" data-toggle="tab">Department</a>
                    </div>
                    <div>
                        <a href="#profile1" class="nav-link" data-toggle="tab">Tenure</a>
                    </div>

                </div>
                <div className="main">
                    <ul class="nav nav-pills tabs">
                        <li class="nav-item">
                            <a href="#home1" class="nav-link" data-toggle="tab">Department</a>
                        </li>
                        <li class="nav-item">
                            <a href="#profile1" class="nav-link" data-toggle="tab">Tenure</a>
                        </li>
                        <li class="nav-item">
                            <a href="#messages1" class="nav-link" data-toggle="tab">Demographics</a>
                        </li>
                        <li class="nav-item">
                            <a href="#home1" class="nav-link" data-toggle="tab">Designation</a>
                        </li>
                        <li class="nav-item">
                            <a href="#profile1" class="nav-link" data-toggle="tab">Grade</a>
                        </li>
                        <li class="nav-item">
                            <a href="#messages1" class="nav-link" data-toggle="tab">Highest Qualification</a>
                        </li>
                    </ul>
                    <Reports reportData={data} />
                </div>
            </div>

        </div>
    )
}