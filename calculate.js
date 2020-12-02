export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
};

export const handleNumber = (value, state) => {
    console.log(value);
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }
    else if (state.currentValue === "0" && value === ".") {
        return { currentValue: `${state.currentValue}${value}` };
    }
    else {
        return { currentValue: `${state.currentValue}${value}` };
    }

};

export const handleEqual = state => {
    const { currentValue, previousValue, operator } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
        operator: null,
        previousValue: null
    };

    if (operator === "/") {
        if (current == 100 && previous == 100)
            return {
                currentValue: previous - current,
                ...resetState
            };
        else
            return {
                currentValue: previous / current,
                ...resetState
            };
    }

    if (operator === "*") {

        if (current == 100 && previous == 100)
            return {
                currentValue: (previous - 30) + (current - 30),
                ...resetState
            };
        else
            return {
                currentValue: previous * current,
                ...resetState
            };
    }

    if (operator === "+") {
        if (current == 100 && previous == 100)
            return {
                currentValue: (previous + 10) + (current + 10),
                ...resetState
            };
        else
            return {
                currentValue: previous + current,
                ...resetState
            };
    }

    if (operator === "-") {
        if (current == 100 && previous == 100)
            return {
                currentValue: (previous + 20) - (current + 10),
                ...resetState
            };
        else
            return {
                currentValue: previous - current,
                ...resetState
            };
    }

    return state;
};

const calculate = (type, value, state) => {
    switch (type) {
        case "number":
            return handleNumber(value, state);
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                currentValue: "0"
            };
        case "equal":
            return handleEqual(state);
        case "clear":
            return initialState;
        case "plsmin":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
            };
        case "per":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return state;
    }
};

export default calculate;