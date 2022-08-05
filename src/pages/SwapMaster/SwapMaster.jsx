import React from "react";
import "./SwapMaster.scss"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Header, MarketChart} from "../../components";
import Select from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const orderFormSelectStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#fff',
        background: '#fff',
    }),
    control: () => ({
        width: 125,
        background: '#37404C',
        borderRadius: '5px 0 0 5px',
        display: 'flex',
        height: 64
    }),
    indicatorSeparator: () => (
        {

        }
    )

}
const SwapMaster = () => {
    const sizeChart = {
         maxWidth:'100%', marginLeft: 'auto', maxHeight: 337
    }
    return (<>
            <div className="swap-master">
                <Header></Header>
                <div className="container">
                    <div className="swap-master__top">
                        <div className="swap-master__back">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5H1M1 5L5 1M1 5L5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="title swap-master__title">
                            Swap Master
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>MARKET</Tab>
                            <Tab>LIMIT</Tab>
                            <Tab>LIQUIDITY</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="swap-master__box">
                                <div className="swap-master__form">
                                    <div className="swap-master__heading">
                                        From
                                        <div className="swap-master__val">
                                            Balance: 233,319,129.9022
                                        </div>
                                    </div>
                                    <div className="swap-master__field swap-master__field--flex">
                                        <Select options={options} styles={orderFormSelectStyles} />
                                        <span className="swap-master__separator"></span>
                                        <input type="text" className="swap-master__input" placeholder='7 328 859.9832'/>
                                        <button className="swap-master__btn swap-master__btn--max">MAX</button>
                                    </div>
                                    <button className="swap-master__btn swap-master__btn--swap">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3H21V8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4 20L21 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21 16V21H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15 15L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4 4L9 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </button>
                                    <div className="swap-master__heading">
                                        To
                                        <div className="swap-master__val">
                                            Balance: 129.9022
                                        </div>
                                    </div>
                                    <div className="swap-master__field swap-master__field--flex swap-master__field--offset-bottom">
                                        <Select options={options} styles={orderFormSelectStyles} />
                                        <span className="swap-master__separator"></span>
                                        <input type="text" className="swap-master__input" placeholder='--'/>
                                    </div>
                                    <div className="swap-master__info swap-master__info--offset-bottom-5">
                                        <div className="swap-master__info-name">
                                            Price
                                        </div>
                                        <div className="swap-master__info-val">
                                            1 BTC = 31109.2 USDT
                                        </div>
                                    </div>
                                    <div className="swap-master__info swap-master__info--offset-bottom-12">
                                        <div className="swap-master__info-name">
                                            Inverse Price
                                        </div>
                                        <div className="swap-master__info-val">
                                            1 USDT = 0.000002433 BTC
                                        </div>
                                    </div>
                                    <div className="swap-master__info">
                                        <div className="swap-master__info-name">
                                            You will receive
                                        </div>
                                        <div className="swap-master__info-val swap-master__info-val--big">
                                            27.13990533
                                        </div>
                                    </div>
                                    <div className="swap-master__line"></div>
                                    <p className="swap-master__text-confirm">
                                        Please confirm conversion within the time
                                    </p>
                                    <div className="swap-master__btn swap-master__btn-confirm">
                                        Confirm
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                                <div className="col-6">
                                    <div className="swap-master__box">
                                    <MarketChart isGrowth={true} data={[0.2,0.5,1,0.1,2,0.5,3,2,1,2,4,3,6,8,4,1,9]} sizeChart={sizeChart}></MarketChart>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="swap-master__box">
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="swap-master__box" >
                                <div className="swap-master__form">
                                    <div className="swap-master__heading">
                                        From
                                        <div className="swap-master__val">
                                            Balance: 233,319,129.9022
                                        </div>
                                    </div>
                                    <div className="swap-master__field swap-master__field--flex">
                                        <Select options={options} styles={orderFormSelectStyles} />
                                        <span className="swap-master__separator"></span>
                                        <input type="text" className="swap-master__input" placeholder='7 328 859.9832'/>
                                        <button className="swap-master__btn swap-master__btn--max">MAX</button>
                                    </div>
                                    <button className="swap-master__btn swap-master__btn--swap">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3H21V8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4 20L21 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21 16V21H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15 15L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4 4L9 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </button>
                                    <div className="swap-master__heading">
                                        To
                                        <div className="swap-master__val">
                                            Balance: 129.9022
                                        </div>
                                    </div>
                                    <div className="swap-master__field swap-master__field--flex swap-master__field--offset-bottom">
                                        <Select options={options} styles={orderFormSelectStyles} />
                                        <span className="swap-master__separator"></span>
                                        <input type="text" className="swap-master__input" placeholder='--'/>
                                    </div>
                                    <div className="swap-master__info swap-master__info--offset-bottom-5">
                                        <div className="swap-master__info-name">
                                            Price
                                        </div>
                                        <div className="swap-master__info-val">
                                            1 BTC = 31109.2 USDT
                                        </div>
                                    </div>
                                    <div className="swap-master__info swap-master__info--offset-bottom-12">
                                        <div className="swap-master__info-name">
                                            Inverse Price
                                        </div>
                                        <div className="swap-master__info-val">
                                            1 USDT = 0.000002433 BTC
                                        </div>
                                    </div>
                                    <div className="swap-master__info">
                                        <div className="swap-master__info-name">
                                            You will receive
                                        </div>
                                        <div className="swap-master__info-val swap-master__info-val--big">
                                            27.13990533
                                        </div>
                                    </div>
                                    <div className="swap-master__line"></div>
                                    <p className="swap-master__text-confirm">
                                        Please confirm conversion within the time
                                    </p>
                                    <div className="swap-master__btn swap-master__btn-confirm">
                                        Confirm
                                    </div>
                                </div>
                            </div>

                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default SwapMaster