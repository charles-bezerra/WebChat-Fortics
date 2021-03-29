export const INITIAL_USER: User = {
    name: "",
    email: "",
    customer: true,
}

export const INITIAL_TALK: Talk = {
    id: "",
    message: "",
    send: INITIAL_USER,
    receive: INITIAL_USER,
    date_send: "",
    date_received: "",
}