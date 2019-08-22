import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className = "header-container">
	          <div className = "header-copy-container">
	            <div className = "schedule-title">Schedule Service</div>
	            <div className = "store-contact-info">
	              <div className = "store-name">Gregory's Appliance Repairs, LLC.</div>
	              <div className = "store-phone">555-555-9999</div>
	            </div>
	            <div className = "language-select">Español  Français</div>
	          </div>
	      	</div>
        )
    }
}