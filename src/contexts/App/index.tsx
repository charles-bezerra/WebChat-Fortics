import React, { ReactNode, useReducer, useState } from 'react';

//constants
import { INITIAL_TALK, INITIAL_USER } from '../../constants';

//reducers
import talkReducer from '../../reducers/talkReducer';
import talksReducer from '../../reducers/talksReducer';
import userReducer from '../../reducers/userReducer';

interface IContextApp {
    user: User;
    userDispatch: (props: Action) => void;

    talk: Talk;
    talkDispatch: (props: Action) => void;

    talks: Talk[];
    talksDispatch: (props: Action) => void;

    visibleChat: boolean;
    setVisibleChat: (arg: boolean) => void;
}

export const ContextApp = React.createContext<IContextApp>({} as IContextApp);


export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [visibleChat, setVisibleChat] = useState<boolean>(false);
    const [user, userDispatch] = useReducer(userReducer, INITIAL_USER);
    const [talk, talkDispatch] = useReducer(talkReducer, INITIAL_TALK);
    const [talks, talksDispatch] = useReducer(talksReducer, []);


    return (
        <ContextApp.Provider value={{
            visibleChat,
            setVisibleChat,

            user,
            userDispatch,

            talk,
            talkDispatch,

            talks,
            talksDispatch
        }}>
            {children}
        </ContextApp.Provider>
    )
}