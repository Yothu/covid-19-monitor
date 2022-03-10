import reducer, {
  initialState,
  getRegionsAndTotals,
  LIST_REGIONS_AND_TOTALS,
  ORDER_REGIONS_BY_TODAYS_MOST_DEATHS,
  ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED,
} from '../../redux/regions/regions';
import data, { fetchData } from '../../mocks/mock';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ ok: true }),
}));

describe('Redux tests', () => {
  it('reducer should work', () => {
    const action = {
      type: LIST_REGIONS_AND_TOTALS,
      payload: data,
    };

    const state = reducer(initialState, action);

    const { name } = state.totals;
    const { confirmed } = state.regions[0];
    expect(name).toBe('CountryName');
    expect(confirmed).toBe(30);
  });
  it('reducer should order regions by most deaths', () => {
    const action = {
      type: ORDER_REGIONS_BY_TODAYS_MOST_DEATHS,
    };

    const state = reducer(data, action);

    const deaths1 = state.regions[0].todayDeaths;
    const deaths2 = state.regions[1].todayDeaths;
    const deaths3 = state.regions[2].todayDeaths;
    expect(deaths1).toBe(24);
    expect(deaths2).toBe(4);
    expect(deaths3).toBe(3);
  });
  it('reducer should order regions by most confirmed', () => {
    const action = {
      type: ORDER_REGIONS_BY_TODAYS_MOST_CONFIRMED,
    };

    const state = reducer(data, action);

    const confirmed1 = state.regions[0].todayConfirmed;
    const confirmed2 = state.regions[1].todayConfirmed;
    const confirmed3 = state.regions[2].todayConfirmed;
    expect(confirmed1).toBe(70);
    expect(confirmed2).toBe(10);
    expect(confirmed3).toBe(9);
  });

  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(fetchData),
    }));
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('getRegionsAndTotals should fetch data from API', async () => {
    const APIdata = await getRegionsAndTotals();

    expect(APIdata.totals.name).toEqual('CountryName2');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
