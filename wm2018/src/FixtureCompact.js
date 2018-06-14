import React, { Component } from 'react';

class FixtureCompact extends Component {
	convertDateTime(inDate)
	{
		if(inDate != null)
		{
			return		new Date(inDate).toString();
		}

		return "undefined";
	}
	getAsDate(inDate)
	{
		if(inDate != null)
		{
			//return (new Date(inDate)).toISOString().split('T')[0];
			return new Date(inDate).toLocaleDateString();
				//.split('.')[0];
		}
		return "undefined";
	}

	getAsTime(inDate)
	{
		if(inDate != null)
		{
			//return (new Date(inDate)).toString().split('T')[1].split('.')[0];
			return new Date(inDate).toLocaleTimeString();
		}
		return "undefined";
	}

	getScoreString(goals)
	{
		if(goals !== null)
		{
return "(" + goals + ")";
		}
		return "";
	}

	render() {
		return (
			<div className="FixtureCompact">
			<dl>{this.props.fixture.homeTeamName} {this.getScoreString(this.props.fixture.result.goalsHomeTeam)} - {this.props.fixture.awayTeamName} {this.getScoreString(this.props.fixture.result.goalsAwayTeam)}</dl>
			<dl>{this.getAsDate(this.props.fixture.date)} - {this.getAsTime(this.props.fixture.date)}</dl>
			</div>
		);
	}
}

export default FixtureCompact;
