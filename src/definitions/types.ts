export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
};

export type SessionsState = {
    sessions: Session[];
}

export type AddSessionAction = {
    type: 'ADD_SESSION';
    payload: Session;
};

export type RemoveSessionAction = {
    type: 'REMOVE_SESSION';
    payload: string;
};
