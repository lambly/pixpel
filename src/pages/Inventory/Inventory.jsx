import React from "react";
import {Header} from "../../components";
import {Chart as ChartJS} from 'chart.js/auto';
import {Pie, Bar} from 'react-chartjs-2';
import "./Inventory.scss"

const Inventory = () => {
    const data = {
        datasets: [
            {
                data: [12,8,3],
                backgroundColor: [
                    '#717A8B',
                    '#37404C',
                    '#48515F',
                ],
                borderColor: [
                    '#717A8B',
                    '#37404C',
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataPieWin = {
        datasets: [
            {
                data: [12],
                backgroundColor: [
                    '#48515F',
                ],
                borderColor: [
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataPieLose = {
        datasets: [
            {
                data: [12],
                backgroundColor: [
                    '#48515F',
                ],
                borderColor: [
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {

            y: {
                display: false,
            }
        }
    };
    const labels = ['PVP', 'PVG', 'FARM', 'LAND'];

    const dataBar = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1,2,3,4,5,6],
                backgroundColor: '#48515F',
            },
        ],
    }
    return (<>
            <div className="inventory">
                <Header></Header>
                <div className="container">
                    <h1 className="title inventory__title">
                        Inventory
                    </h1>
                    <div className="row">
                        <div className="widget">
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <button className="widget__btn widget__btn--active">
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5.5 5.5M10 10L5.5 5.5M5.5 5.5L1 10L10 1" stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        HIDE THIS WINDOW
                                    </button>
                                    <button className="widget__btn widget__btn--dollar">
                                        $
                                    </button>

                                    <img src="assets/images/market/inventory.jpg" alt=""/>
                                </div>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget__row row">
                                <h2 className="widget__title">
                                    Statistic
                                </h2>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__item">
                                    <div className="widget__item-name">ATTACK</div>
                                    <div className="widget__item-value">120</div>
                                </div>
                            </div>
                            <div className="widget__row row">
                                <h2 className="widget__title">
                                    GARNINGS
                                </h2>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__item">
                                    <div className="widget__item-name">ATTACK</div>
                                    <div className="widget__item-value">120</div>
                                </div>
                            </div>
                            <div className="widget__row row">
                                <h2 className="widget__title">
                                    Graph
                                </h2>
                                <div className="col-6 widget__col">
                                    <Pie data={data}></Pie>

                                </div>
                                <div className="col-6 widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                            </div>

                            <Bar data={dataBar} options={optionsBar}></Bar>
                            <div className="row">
                                <div className="col-6">
                                    Win
                                    <Pie data={dataPieLose}></Pie>
                                </div>
                                <div className="col-6">
                                    Lose
                                    <Pie data={dataPieWin}></Pie>
                                </div>
                            </div>
                            <div className="widget__footer">
                                <div className="widget__footer-name">
                                    ROI <span className="widget__footer-days">60 days</span>
                                </div>
                                <div className="widget__progress">
                                    <div className="widget__progress-inner"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="inventory__row row-wrap">
                                <div className="inventory-card">
                                    <div className="inventory-card__img">
                                        <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                                    </div>
                                    <div className="inventory-card__text">
                                        -16%
                                    </div>
                                </div>
                                <div className="inventory-card">
                                    <div className="inventory-card__img">
                                        <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                                    </div>
                                    <div className="inventory-card__text">
                                        -16%
                                    </div>
                                </div>
                                <div className="inventory-card">
                                    <div className="inventory-card__img">
                                        <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                                    </div>
                                    <div className="inventory-card__text">
                                        -16%
                                    </div>
                                </div>
                                <div className="inventory-card">
                                    <div className="inventory-card__img">
                                        <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                                    </div>
                                    <div className="inventory-card__text">
                                        -16%
                                    </div>
                                </div>
                                <div className="inventory-card">
                                    <div className="inventory-card__img">
                                        <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                                    </div>
                                    <div className="inventory-card__text">
                                        -16%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inventory