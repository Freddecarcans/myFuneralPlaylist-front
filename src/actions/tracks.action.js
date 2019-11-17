export const playlistFetch = (data) => ({
  type: "TRACKS_FETCH",
  data
}); 

export const playlistFetched = (data) => ({
  type: "TRACKS_FETCH_SUCCESS",
  data
});

export const playlistFetchError = (error) => ({
  type: "TRACKS_FETCH_ERROR",
  error
});

