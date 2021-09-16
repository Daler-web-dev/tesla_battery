import React from "react"
import PropTypes from 'type-check'
import './TeslaClimate.css'

const TeslaClimate = (props) => (
    <div className="tesla-climate">
        <label
            className={`tesla-climateitem ${props.value ? 'tesla-climateitem--active' : "" }  ${!props.limit ? 'tesla-heat' : ''}`}
        >
            <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
            <i className="tesla-climate__icon"></i>
            <input
                type="checkbox"
                name="climate"
                checked={props.value}
                onChange={() => { props.handleChangeClimate() }}
            />
        </label>
  </div >
)

TeslaClimate.propTypes = {
    value: PropTypes.bool,
    limit: PropTypes.bool,
    handleChangeClimate: PropTypes.func
}

export default TeslaClimate