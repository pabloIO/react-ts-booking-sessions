import type { Session } from "../../definitions/types";
import Button from "../ui/Button";

type SessionCardProps = Session;

export default function SessionCard ({
    id,
    title,
    image,
    summary
}: SessionCardProps) {
    return (
        <div className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <h3>{title}</h3>
                <p>{summary}</p>
                <div className="actions">
                    <Button to={`/sessions/${id}`}>Learn more</Button>
                </div>
            </div>
        </div>
    );
}