import React, {Component} from 'react';

class Nest extends Component {
	componentWillMount(){
		this.dummyFunction();
	}
	componentDidMount(){
		this.dummyFunction();
	}
	dummyFunction(){

	}
	render() {
		let nestClass = (parseInt(this.props.number) % 2 == 0 ? 'even':'odd');
		return (
			<div>
				<div id='test-div' className={nestClass}>
            bleh
				</div>
			</div>
		);
	}
}

export default Nest;
