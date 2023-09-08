const logger = store => next => action => {
    const currentState = store.getState();
    console.log(currentState);
    let result = next(action);
    return result
}

export default logger;