import { combineReducers } from 'redux';
import testReducer from './testReducer';
import promoReducer from './promoReducer';
import calenderReducer from './calenderReducer';
import achieversReducer from './achieversReducer';
import whReducer from './whReducer';
import loginReducer from './loginReducer';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
	test: testReducer,
	promoData: promoReducer,
	calender: calenderReducer,
	achieversData: achieversReducer,
	viewData: whReducer,
	loginData: loginReducer,
	headerData: headerReducer
});

export default rootReducer;
