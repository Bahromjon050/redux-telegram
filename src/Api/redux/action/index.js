export const AddUser = (data) => {
    return {
        type: "Add",
        payload: {
            id: null,
            data: data
        }
    }
}