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

export const Show = (data) => {
    return {
        type: 'Show',
        payload: data
    }
}

export const ShowClose = () => {
    return{
        type: 'delShow'
    }
}

export const Set_text = (data) => {
    return {
        type: 'setchat',
        payload: data
    }
}

export const Set_del = (data) => {
    return {
        type: 'setdel',
        payload: data
    }
}

export const Set_edit = (data) => {
    return {
        type: 'setedit',
        payload: data
    }
}
