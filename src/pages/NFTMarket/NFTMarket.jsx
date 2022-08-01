import React from "react";
import {Header, Filter, NFTCard } from "../../components";
import "./NFTMarket.scss"
const NFTMarket = () => {
    return (<>
        <div className="market">
            <Header></Header>
            <div className="container">
                <h1 className="title market__title">
                    NFT Market Place
                </h1>
                <Filter classes={"filter--offset-bottom"}></Filter>
                <div className="row-wrap market__row">
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                    <NFTCard></NFTCard>
                </div>
            </div>
        </div>
    </>)
}

export default NFTMarket