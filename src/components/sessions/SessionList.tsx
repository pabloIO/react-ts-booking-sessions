import { Session } from "../../definitions/types";
import SessionCard from "./SessionCard";

type SessionListProps = {
    sessions: Session[]
};

export default function SessionList({sessions}: SessionListProps){
    if (sessions.length === 0){
        return <p>No sessions to show</p>;
    }

    return (
        <ul id='sessions-list'>
            {
                sessions.map((session) => <div key={session.id}> <SessionCard {...session}/> </div>)
            }
      </ul>
    );
}