import React from "react";
import {Header, Filter, GameCard} from "../../components";
import "./GameMarket.scss"

const GameMarket = () => {
    return (<>
            <div className="game-market">
                <Header></Header>
                <div className="container">
                    <h1 className="title game-market__title">
                        Game Market Place
                    </h1>
                    <Filter classes={"filter--offset-bottom"}></Filter>
                    <div className="row-wrap game-market__row">
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameMarket