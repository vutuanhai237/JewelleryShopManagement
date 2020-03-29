
export const add_item = (e) => {
    return {
        type: "add_item",
        content: e
    };
}

export const delete_item = (e) => {
    return {
        type: "delete_item",
        index: e
    };
}

export const expanding = () => {
    return {
        type: "is_adding",
    };
}

export const test = () => {
    console.log("a");
}

