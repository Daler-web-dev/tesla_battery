import React from 'react'
import PropTypes from 'type-check'
import './TeslaCounter.css'

const TeslaCounter = (props) => (
	<div className="tesla-counter">
		<p className="tesla-counter__title">{props.initValue.title}</p>
		<div className="tesla-counter__container cf">
			<div className="tesla-counter__item">
				<p className="tesla-counter__number">
					{props.currentValue}
					<span>{props.initValue.unit}</span>
				</p>
				<div className="tesla-counter__controls">
					<button
						onClick={(e) =>
							props.increment(e, props.initValue.title)
						}
						disabled={props.currentValue >= props.initValue.max}
					></button>
					<button
						onClick={(e) =>
							props.decrement(e, props.initValue.title)
						}
						disabled={props.currentValue <= props.initValue.min}
					></button>
				</div>
			</div>
		</div>
	</div>
)

TeslaCounter.propTypes = {
	currentValue: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func,
	initValue: PropTypes.object,
}

export default TeslaCounter
