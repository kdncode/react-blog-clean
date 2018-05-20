import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					{/* Navigation */}
					<Navbar />

					{/* Page Header */}
					<Header />

					{/* Main Content */}
					<MainContent />
					<hr />

					{/* Footer */}
					<Footer />
					</div>

			</div>
		);
	}
}

export default App;
