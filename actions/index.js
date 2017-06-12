export function setReaderLevel(level) {
  return {
    type: 'SET_READER_LEVEL',
    level
  }
}

export function addNotification(event, delta) {
  return {
    type: 'ADD_NOTIFICATION',
    eventID: event.id,
    delta: delta,
  }
}

export function removeNotification(event, delta) {
  return {
    type: 'REMOVE_NOTIFICATION',
    eventID: event.id,
    delta: delta,
  }
}
