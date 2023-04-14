import axios from "axios";

export const GET_ALL_BREEDS = "GET_ALL_BREEDS";
export const CREATE_BREED = "CREATE_BREED";
export const GET_BREED = "GET_BREED";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const GET_FILTERED_BREEDS = "GET_FILTERED_BREEDS";
export const ORDER_BY = "ORDER_BY";
export const ERROR = "ERROR";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const CLEAR_BREEDS = "CLEAR_BREEDS";
// const { REACT_APP_API } = process.env
// const baseURL = REACT_APP_API || 'http://localhost:3001'

export function getAllBreeds() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/dogs`);
      // console.log(res.data)
      return dispatch({
        type: GET_ALL_BREEDS,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_ALL_BREEDS,
        payload: error,
      });
    }
  };
}

export function getBreed(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/dogs/${id}`);
      return dispatch({
        type: GET_BREED,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error)
      return dispatch({
        type: GET_BREED,
        payload: error.response.data,
      });
    }
  };
}

export function getAllTemperaments() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/temperaments`);
      return dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: error.response,
      });
    }
  };
}

export function clearDetails() {
  return {
    type: CLEAR_DETAILS,
    payload: "",
  };
}

export function clearBreeds() {
  return {
    type: CLEAR_SEARCH,
    payload: "",
  };
}

export function clearSearch() {
  return function (dispatch) {
    return dispatch({
      type: CLEAR_SEARCH,
      payload: [],
    });
  };
}

export function getFilteredBreeds(temperament) {
  // console.log(temperament)
  return async function (dispatch) {
    try {
      const res = await axios.get(`/dogs`);
      // const res ={ data: breeds}
      let filteredResp = [];
      if (temperament) {
        res.data.forEach((e) => {
          e.Temperamentos.forEach((t) => {
            if (t.name === temperament) filteredResp.push(e);
          });
        });
      } else {
        filteredResp = res.data;
      }
      // console.log('filter', temperament, filteredResp)
      return dispatch({
        type: GET_FILTERED_BREEDS,
        payload: filteredResp,
      });
    } catch (error) {
      return dispatch({
        type: GET_FILTERED_BREEDS,
        payload: error.response,
      });
    }
  };
}

export function orderBy(order, breeds) {
  console.log(breeds, order);
  return function (dispatch) {
    try {
      if (order === "name_asc")
        breeds.sort((a, b) => a.name.localeCompare(b.name));
      else if (order === "name_desc")
        breeds.sort((a, b) => b.name.localeCompare(a.name));
      else if (order === "weight_asc") {
        breeds.sort((a, b) => {
          if (Number(a.max_weight) < Number(Number(b.max_weight))) return -1;
          if (Number(a.max_weight) > Number(b.max_weight)) return 1;
          return 0;
        });
      } else {
        breeds.sort((a, b) => {
          if (Number(a.max_weight) > Number(b.max_weight)) return -1;
          if (Number(a.max_weight) < Number(b.max_weight)) return 1;
          return 0;
        });
      }
      if (order === "height_asc") {
        breeds.sort((a, b) => {
          if (Number(a.max_height) < Number(Number(b.max_height))) return -1;
          if (Number(a.max_height) > Number(b.max_height)) return 1;
          return 0;
        });
      } else {
        breeds.sort((a, b) => {
          if (Number(a.max_height) > Number(b.max_height)) return -1;
          if (Number(a.max_height) < Number(b.max_height)) return 1;
          return 0;
        });
      }

      //        console.log(breeds)
      return dispatch({
        type: ORDER_BY,
        payload: breeds,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ORDER_BY,
        payload: error.response,
      });
    }
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/dogs?name=${name}`);
      // console.log(res.data)
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error.response)
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: error.response,
      });
    }
  };
}
