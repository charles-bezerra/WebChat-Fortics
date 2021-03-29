interface Findable {
    id: string;
}

interface Action {
    type: string;
    payload: any;
}

interface User {
    name: string,
    email: string,
    customer: boolean,
}

interface Talk extends Findable {
    message: string,
    send: User,
    receive: User,
    date_send: string,
    date_received: string,
}

interface Color {
    color: string;
}