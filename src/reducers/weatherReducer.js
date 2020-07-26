import { GET_WEATHER_ASYNC } from '../utils/const';

const weatherReducer = (state = {}, action) => {
switch(action.type) {
case GET_WEATHER_ASYNC:
return {
...state,
weather: action.value
};
default:
return state;
}
}
export default weatherReducer;