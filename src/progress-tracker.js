import React, { Component } from 'react';

export default class ProgressTracker extends Component {
    render() {
        return (
            <div className = "progress-tracker-container">
				<div className = "progress-tracker">
					<div className = "progress-tracker-fill"/>
					<div className = "progress-tracker-labels">
						<p className = "tracker-label-first tracker-label-current"> Check Availability</p>
						<p> Schedule Appointment</p>
						<p> Service Details</p>
						<p> Service Location</p>
					</div>
				</div>
	      	</div>
        )
    }
}