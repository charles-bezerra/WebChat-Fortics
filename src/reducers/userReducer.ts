import { INITIAL_USER } from "../constants";

export default function userReducer (user: User, action: Action) {
    let newUser: User = user;

    switch (action.type) {
        case 'CHANGE':
            newUser = { 
                ...user,
                [action.payload.field]: action.payload.value,
            };
            break;
        case 'SET':
            newUser = action.payload.user;
            break;
        case 'RESET':
            newUser = INITIAL_USER;
            break;
        default:
            throw new Error('Type not implemented');
    }

    return newUser;
}