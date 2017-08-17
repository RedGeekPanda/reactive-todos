import React from 'react';
import './App.css';
import ToDosList from './ToDosList';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<div className="App-logo"/>
					<text className="App-name">Reactive ToDos</text>
				</div>
				<div className="App-content">
					<ToDosList/>
				</div>
			</div>
		);
	}
}
