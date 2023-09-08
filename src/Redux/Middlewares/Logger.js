const logger = store => next => action => {
    const currentState = store.getState();
    console.log("Current state",currentState);
    console.log("Action dispatched", action);
    next(action);
    console.log("Updated state", store.getState());    
}

export default logger;