export const AddUser = (data) => {
    return {
        type: "Add",
        payload: {
            id: new Date().getTime(),
            img: data.img,
            fname: data.fname,
            lname: data.lname,
            number: data.number
        }
    }
}
export const Edit = (data) => {
    return {
        type: "Edit",
        payload: {
            id: data.id,
            img: data.img,
            fname: data.fname,
            lname: data.lname,
            number: data.number
        }
    }
}