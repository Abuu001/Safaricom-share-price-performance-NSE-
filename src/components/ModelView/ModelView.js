import React from "react";
import StatusBar from  "./StatusBar/StatusBar";
import {NavLink,Switch,Route } from "react-router-dom";
import HistoricalPrices from "../MainContentDisplay/HistoricalPrices/HistoricalPrices";
import Tracker from "../MainContentDisplay/Tracker/Tracker";
import HoldingsCalculator from "../MainContentDisplay/HoldingsCalculator/HoldingsCalculator";
import Summary from "../MainContentDisplay/Summary/Summary";
import StockGraphChart from "../MainContentDisplay/StockGraphChart/StockGraphChart";
import "./ModelView.css"

const ModelView=(props)=>{
    return(
        <div>
            <StatusBar 
                change={props.change}
                turnover={props.turnover}
                volume={props.volume}
                prev_price={props.prev_price}
                today_open={props.today_open}
                today_high={props.today_high}
                today_low={props.today_low}
                today_close={props.today_close}
            />
            <nav className="ModelView">
                <ul>
                    <li> 
                        <div className="lk">
                        <NavLink 
                            className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#8dc442' }}
                            to="/">Stock Chart
                          </NavLink>
                          </div>
                    </li> 
                    <li>
                        <div  className="lk">
                            <NavLink   
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: '#8dc442' }}
                                to="/historical-prices">Historical Prices
                            </NavLink>
                            </div>
                    </li> 
                    <li>
                        <div  className="lk">
                            <NavLink   
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: '#8dc442' }}
                                to="/tracker">Tracker
                            </NavLink>
                         </div> 
                    </li> 
                    <li>
                        <div  className="lk">
                            <NavLink   
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: '#8dc442' }}
                                to="/holdings-calculator">Holdings Calculator
                            </NavLink>
                        </div>
                    </li> 
                    <li>
                        <div  className="lk">
                            <NavLink   
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: '#8dc442' }}
                                to="/summary">Summary
                            </NavLink>
                        </div>
                    </li>  
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route 
                     path="/"  
                     exact  
                     component={StockGraphChart}
                    />
                    <Route 
                        path="/historical-prices" 
                        component={HistoricalPrices}
                        //  render={
                        // ()=>(
                        //     <HistoricalPrices   />
                        // )}
                    />
                    <Route 
                       path="/tracker"  
                       component={Tracker}
                    />
                    <Route 
                     path="/holdings-calculator"  
                     component={HoldingsCalculator}
                    />
                    <Route 
                      path="/summary" 
                      component={Summary}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default React.memo(ModelView);