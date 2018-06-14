import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FixtureCompact from './FixtureCompact.js';

class App extends Component {

	getAsDate(inDate)
	{
		if(inDate != null)
		{
			return (new Date(inDate)).toISOString().split('T')[0];
				//.split('.')[0];
		}
		return "undefined";
	}

	constructor(props)
	{
		super(props);
		this.state = {
			fixtures: [],
		};
	}

	filterToday(fixtures)
	{

		return fixtures.filter(
			fixture => 
		this.getAsDate(fixture.date) === this.getAsDate(Date())
		);
			
	}
	
	componentDidMount() {
const API = "http://api.football-data.org/v1/competitions/467/fixtures"
		fetch(API )
			.then(response => response.json())
			.then(data => this.setState({ fixtures : data.fixtures}) );
	}

 
  render() {
    return (
      <div className="App">
	    {
		this.filterToday(this.state.fixtures)
		    .map(fixtureItem => 
		    <FixtureCompact fixture={fixtureItem} />)}
      </div>
    );
  }
}

export default App;
