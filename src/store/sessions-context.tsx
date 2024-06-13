import { type ReactNode, createContext, useReducer, useContext } from "react";
import type { 
    SessionsState, 
    Session, 
    AddSessionAction, 
    RemoveSessionAction 
} from "../definitions/types";

type SessionsContextValue = SessionsState & {
    addSession: (session: Session) => void;
    removeSession: (id: string) => void;
};

const SessionsContext = createContext<SessionsContextValue | null>(null);

export function useSessionsContext() {
    const sessionsCtx = useContext(SessionsContext);

    if (sessionsCtx === null){
        throw new Error('SessionsContext is null -- that should not happen');
    }
    
    return sessionsCtx;
}

type SessionsContextProviderProps = {
    children: ReactNode
};

const initialState: SessionsState = {
    sessions: []
};

type Actions = AddSessionAction | RemoveSessionAction;

function sessionsReducer (state: SessionsState, action: Actions): SessionsState {
    if (action.type === 'ADD_SESSION'){
        return {
            ...state,
            sessions: [
                ...state.sessions,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description,
                    date: action.payload.date,
                    duration: action.payload.duration,
                    image: action.payload.image,
                    summary: action.payload.summary
                }
            ]
        }
    }
    if (action.type === 'REMOVE_SESSION'){
        const filterState = state.sessions.filter((session) => session.id !== action.payload);
        return {
            sessions: filterState
        };
    }
    return state;
}

export default function ContextProvider({ children }: SessionsContextProviderProps ){
    const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);
    const ctx: SessionsContextValue = {
        sessions: sessionsState.sessions,
        addSession(session){
            dispatch({type: 'ADD_SESSION', payload: session});
        },
        removeSession(id){
            dispatch({type: 'REMOVE_SESSION', payload: id});
        }
    }

    return (
        <SessionsContext.Provider value={ctx}>
            {children}
        </SessionsContext.Provider>   
    );
}