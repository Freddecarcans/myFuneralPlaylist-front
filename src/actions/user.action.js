import { urlApi } from '../Config/constants';

export const startFetchUser = () => ({
    type: "START_FETCH_USER"
});

export const fetchSuccessUser = (id, user) => ({
    type: "FETCH_SUCCESS_USER",
    user,
    id
});

export const fetchErrorUser = (err) => ({
    type: "FETCH_ERROR_USER",
    err
});

export const asyncFetchUser = (id) => (dispatch) => {
    dispatch(startFetchUser());
    fetch(`${urlApi}/users/${id}`)
      .then(res => res.json())
      .then((user) => {
        dispatch(fetchSuccessUser(user));
      })
      .catch(() => {
        dispatch(fetchErrorUser("Erreur lors du chargement de l'utilisateur"));
      });
  };
  