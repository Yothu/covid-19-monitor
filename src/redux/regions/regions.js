import { v4 as uuidv4 } from 'uuid';
import flags from '../../data/Flags';

const LIST_REGIONS_AND_TOTALS = 'COVID_19/REGIONS/LIST_REGIONS_AND_TOTALS';
const ORDER_REGIONS_BY_TODAYS_MOST_DEATHS = 'COVID_19/REGIONS/ORDER_TODAYS_MOST_DEATHS';
const ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED = 'COVID_19/REGIONS/ORDER_TODAYS_MOST_CONFIRMED';

const initialState = {
  totals: {},
  regions: [],
};

const orderByMostConfirmed = (regions) => {
  const array = regions;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i].todayConfirmed < array[j].todayConfirmed) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

const orderByTodaysMostDeaths = (regions) => {
  const array = regions;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i].todayDeaths < array[j].todayDeaths) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_REGIONS_AND_TOTALS:
      return { ...action.payload, filter: 'DEFAULT' };
    case ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED:
      return { ...state, regions: orderByMostConfirmed(state.regions), filter: 'CONFIRMED' };
    case ORDER_REGIONS_BY_TODAYS_MOST_DEATHS:
      return { ...state, regions: orderByTodaysMostDeaths(state.regions), filter: 'DEATHS' };
    default:
      return state;
  }
};

const orderRegionsByTodaysDeaths = () => ({
  type: ORDER_REGIONS_BY_TODAYS_MOST_DEATHS,
});

const orderRegionsByTodaysConfirmed = () => ({
  type: ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED,
});

const listRegions = (payload) => ({
  type: LIST_REGIONS_AND_TOTALS,
  payload,
});

const getRegionsAndTotals = async () => {
  const API_URL = 'https://api.covid19tracking.narrativa.com/api/2022-03-06/country/chile';
  const RESPONSE = await fetch(API_URL);
  try {
    const DATA = await RESPONSE.json();
    const regions = [];

    const {
      name,
      regions: reg,
      today_deaths: deaths,
      today_confirmed: confirmed,
      today_new_deaths: todayDeaths,
      today_new_confirmed: todayConfirmed,
    } = DATA.dates['2022-03-06'].countries.Chile;

    for (let i = 0; i < reg.length; i += 1) {
      regions.push({
        id: reg[i].id,
        address: uuidv4(),
        name: reg[i].name,
        deaths: reg[i].today_deaths,
        confirmed: reg[i].today_confirmed,
        todayDeaths: reg[i].today_new_deaths,
        todayConfirmed: reg[i].today_new_confirmed,
      });
      for (let j = 0; j < flags.length; j += 1) {
        if (regions[i].id === flags[j].name) {
          regions[i].flag = flags[j].flag;
        }
      }
    }

    const returnData = {
      regions,
      totals: {
        name,
        deaths,
        confirmed,
        todayDeaths,
        todayConfirmed,
      },
    };
    return returnData;
  } catch (e) {
    return [];
  }
};

export default reducer;
export {
  listRegions,
  initialState,
  getRegionsAndTotals,
  LIST_REGIONS_AND_TOTALS,
  orderRegionsByTodaysDeaths,
  orderRegionsByTodaysConfirmed,
  ORDER_REGIONS_BY_TODAYS_MOST_DEATHS,
  ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED,
};
