const data = {
  regions: [{
    deaths: 20,
    id: 'regId1',
    confirmed: 30,
    todayDeaths: 3,
    name: 'regName',
    address: '123-asd',
    todayConfirmed: 10,
    flag: 'flagAddress',
  },
  {
    deaths: 15,
    id: 'regId2',
    confirmed: 32,
    todayDeaths: 4,
    name: 'regName2',
    address: '123-asd2',
    todayConfirmed: 9,
    flag: 'flagAddress2',
  },
  {
    deaths: 50,
    id: 'regId3',
    confirmed: 90,
    todayDeaths: 24,
    name: 'regName3',
    address: '123-asd3',
    todayConfirmed: 70,
    flag: 'flagAddress3',
  }],
  totals: {
    name: 'CountryName',
    deaths: 99,
    confirmed: 100,
    todayDeaths: 9,
    todayConfirmed: 10,
  },
};

const fetchData = {
  dates: {
    '2022-03-06': {
      countries: {
        Chile: {
          regions: [{
            id: 'regId1',
            name: 'regName',
            today_deaths: 20,
            today_confirmed: 30,
            address: '123-asd',
            flag: 'flagAddress',
            today_new_deaths: 3,
            today_new_confirmed: 10,
          },
          {
            id: 'regId2',
            name: 'regName2',
            today_deaths: 15,
            today_confirmed: 32,
            address: '123-asd2',
            flag: 'flagAddress2',
            today_new_deaths: 4,
            today_new_confirmed: 9,
          },
          {
            id: 'regId3',
            name: 'regName3',
            today_deaths: 50,
            today_confirmed: 90,
            address: '123-asd3',
            flag: 'flagAddress3',
            today_new_deaths: 24,
            today_new_confirmed: 70,
          }],
          name: 'CountryName2',
          today_deaths: 99,
          today_confirmed: 100,
          today_new_deaths: 9,
          today_new_confirmed: 10,
        },
      },
    },
  },
};

export default data;
export { fetchData };
