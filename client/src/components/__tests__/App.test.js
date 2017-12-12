import React from 'react';
import {shallow, configure } from 'enzyme';
import App from '../App.jsx';
import Header from '../Header.jsx';

// Enzyme clauses
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('App.jsx renders an anchor to Merchant Home', () => {
	const app = shallow(<App />);
	console.log(app);
	
	var header = app.find('.merc-home__link');

});