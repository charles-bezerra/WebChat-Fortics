export default function talksReducer (talks: Talk[], action: Action) {
    let newTalks = talks;
    
    switch (action.type) {
        case 'ADD':
            //Add payload verify with excecion here
            newTalks.push(action.payload.talk);
            break;
        case 'REMOVE':
            newTalks = talks.filter( (talk: Talk) => talk.id !== action.payload.id)
            break;
        case 'SET':
            newTalks = action.payload.talks;
            break;
        default:
            throw new Error('Type not implemented');
    }

    return newTalks;
}