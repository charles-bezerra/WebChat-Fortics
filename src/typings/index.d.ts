interface User {
    username: string,
    name: string,
    email: string,
    customer: boolean,
}

interface Talk {
    message: string,
    send: User,
    receive: User,
    date_send: string,
    date_received: string,
}

interface Color {
    color: string;
}