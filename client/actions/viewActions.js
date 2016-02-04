export const DISPLAY_FRIENDS_CHOICE = 'DISPLAY_FRIENDS_CHOICE';
export const DISPLAY_LOCATION_CHOICE = 'DISPLAY_LOCATION_CHOICE';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const DISPLAY_ADD_FRIENDS = 'DISPLAY_ADD_FRIENDS';
export const DISPLAY_PREFERENCES = 'DISPLAY_PREFERENCES';
export const DISPLAY_UBER_INFO = 'DISPLAY_UBER_INFO';
export const CLEAR_VIEWS = 'CLEAR_VIEWS';

export const displayFriendsChoice = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_FRIENDS_CHOICE
    });
  }
}

export const displayLocationChoice = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_LOCATION_CHOICE
    });
  }
}

export const displayResults = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_RESULTS
    });
  }
}

export const displayAddFriends = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_ADD_FRIENDS
    });
  }
}

export const displayMorePreferences = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_PREFERENCES
    })
  }
}

export const displayUberInfo = () => {
  return dispatch => {
    dispatch({
      type: DISPLAY_UBER_INFO
    });
  }
}

export const clearViews = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_VIEWS
    })
  }
}
