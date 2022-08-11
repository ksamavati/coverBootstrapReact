import React from "react";
import { ReactDOM } from "react";

class App extends React.Component {
	state = {
		count: 0,
	}

	render() {
		return (
			<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
				<header className="masthead mb-auto">
					<div className="inner">
						<h3 className="masthead-brand">Cover Page</h3>
						<nav className="nav nav-masthead justify-content-center">
							<a className="nav-link active" href="#">Home</a>
							<a className="nav-link" href="#">Features</a>
							<a className="nav-link" href="#">Contact</a>
						</nav>
					</div>
				</header>

				<main role="main" className="inner cover">
					<h1 className="cover-heading">Lorem ipsum dolor sit amet.</h1>
					<p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis hic perferendis earum enim doloribus deserunt, nesciunt omnis consequuntur vitae!</p>
					<p className="lead">
						<div className="btn-group">
							<a href="#" className="btn btn-lg btn-secondary">-1</a>
							<a href="#" className="btn btn-lg btn-secondary">Reset</a>
							<a href="#" className="btn btn-lg btn-secondary">+1</a>
						</div>
					</p>
				</main>

				<footer className="mastfoot mt-auto">
					<div className="inner">
						<p>Kayvon Samavati 2022</p>
					</div>
				</footer>
			</div>

		)
	}
}
// ReactDOM.render(<App />, document.getElementById('app'));
export default App;