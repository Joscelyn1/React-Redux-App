import {
  FETCH_WEATHER_DATA_START,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAILURE
} from "../actions";

const initialState = {
  consolidated_weather: [
    {
      applicable_date: "2019-08-15",
      id: 5707816826306560,
      max_temp: 18.814999999999998,
      min_temp: 13.725,
      the_temp: 18.755,
      visibility: 9.945667302950767,
      weather_state_abbr: "hc",
      weather_state_name: "Heavy Cloud",
      wind_direction: 283.2314786530078,
      wind_direction_compass: "WNW",
      wind_speed: 8.438902764511255
    }
  ],
  isLoading: false,
  error: "error"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        consolidated_weather: action.payload.consolidated_weather,
        error: ""
      };
  }

  return state;
};
