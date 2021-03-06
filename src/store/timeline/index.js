import axios from "axios";
import { VITE_TIMELINES_API } from "../../constants";
import { START_YEAR, END_YEAR, DELAY } from "../../constants/timeline";

const state = {
  name: null,
  yob: null,
  yod: null,
  timers: [],
};

const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setYob(state, yob) {
    state.yob = yob;
  },
  setYod(state, yod) {
    state.yod = yod;
  },
  setTimers(state, timers) {
    state.timers = timers;
  },
};

const actions = {
  fetchPersonList({ commit, dispatch, state }, startYear = START_YEAR) {
    // repeat
    startYear = startYear > END_YEAR ? START_YEAR : startYear;

    // no-repeat
    // if (startYear > END_YEAR) {
    //   return;
    // }

    axios
      .get(
        `${VITE_TIMELINES_API}/challenge/person/${startYear}?end_yob=${
          startYear + 100
        }`
      )
      .then(({ data }) => {
        if (data.length > 0) {
          // sort by yob
          data = data.sort(
            ({ yob: prevYob = 0 }, { yob: currYob = 0 }) => prevYob - currYob
          );

          // console.log(data);
          for (let i = 0; i < data.length; i++) {
            const timerId = setTimeout(() => {
              commit("setName", data[i]?.name);
              commit("setYob", data[i]?.yob);
              commit("setYod", data[i]?.yod);

              if (i === data.length - 1) {
                // fetch next century data if current person is the last
                dispatch("fetchPersonList", startYear + 100);
              }
            }, DELAY * (i + 1));
            //  add timeout to timers
            commit("setTimers", [...state.timers, timerId]);
          }
        } else {
          // fetch next century if array is empty for current century
          dispatch("fetchPersonList", startYear + 100);
        }
      })
      .catch((e) => console.error(e));
  },
  clearTimers({ commit, state }) {
    // clear all timeouts and reset timers to []
    console.log("clear");
    state.timers.forEach((timer) => clearTimeout(timer));
    commit("setTimers", []);
    commit("setName", null);
    commit("setYob", null);
    commit("setYod", null);
  },
};

export default {
  state,
  mutations,
  actions,
};
