import { combineReducers } from 'redux';

const initialAuthState = {
  readerLevel: 'adult',
  notifications: {},
};

function configuration(state = initialAuthState, action) {
  switch (action.type) {
    case 'SET_READER_LEVEL':
      return {
        ...state,
        readerLevel: action.level
      }
    case 'ADD_NOTIFICATION':
      {
        let newNotifications = Object.assign({}, state.notifications);
        // store deltaTime so we can highlight right button
        newNotifications[action.eventID] = action.delta;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    case 'REMOVE_NOTIFICATION':
      {
        let newNotifications = Object.assign({}, state.notifications);
        newNotifications[action.eventID] = 0;
        return {
          ...state,
          notifications: newNotifications
        }
      }
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  configuration,
});

export default AppReducer;
