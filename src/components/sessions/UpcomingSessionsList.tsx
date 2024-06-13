import { Session } from "../../definitions/types";
import Button from "../ui/Button";

type UpcomingSessionsListProps = {
    sessions: Session[];
    onCancel: (id: string) => void;
};

export default function UpcomingSessionsList ({sessions, onCancel}: UpcomingSessionsListProps) {

    return (
        <>
            {
                sessions.map((session) => 
                    <div className="upcoming-session">
                        <div>
                            <h3>{session.title}</h3>
                            <p>{session.summary}</p>
                            <time>{session.date}</time>
                        </div>
                        <div className="actions">
                            <Button onClick={() => onCancel(session.id)} textonly>Cancel</Button>
                        </div>
                    </div>
                )
            }
        </>
    );
}