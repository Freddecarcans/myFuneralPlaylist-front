import { urlApi } from '../Config/constants';

export const startFetchUser = () => ({
    type: "START_FETCH_USER"
});

export const fetchSuccessUser = (user) => ({
    type: "FETCH_SUCCESS_USER",
    user,
});

export const fetchErrorUser = (err) => ({
    type: "FETCH_ERROR_USER",
    err
});

export const asyncFetchUser = (id) => (dispatch) => {
    dispatch(startFetchUser());
    fetch(`${urlApi}/users/${id}`,
    {headers: {
      'Cache-Control': 'no-store'
    }})
    
      .then(res => res.json())
      .then((user) => {
        dispatch(fetchSuccessUser(id, user));
      })
      .catch(() => {
        dispatch(fetchErrorUser("Erreur lors du chargement de l'utilisateur"));
      });
  };
  