import React from "react"
import "./TeslaBattery.css"
import {TeslaNotice} from '../components/TeslaNotice/TeslaNotice'
import TeslaCar from '../components/TeslaCar/TeslaCar'
import TeslaStats from "../components/teslaStats/TeslaStats";

class TeslaBattery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            carstats: [],
            config: {
                speed: 55,
                temperature: 28,
                climate: true,
                wheels: 19
            }
        }
    }

    render(){
        const {config, carstats} = this.state;
        return(
            <form className='tesla-battery' >
                <h1>Range Per Charge</h1>
                <TeslaCar wheelsize={config.wheels}/>
                <TeslaStats carstats={carstats}/>
                <TeslaNotice/>
            </form>
        )
    }
}

export default TeslaBattery;