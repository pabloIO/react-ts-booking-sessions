import { useEffect, useRef } from "react";
import { useSessionsContext } from "../../store/sessions-context";
import Modal, { ModalHandle } from "../ui/Modal";
import UpcomingSessionsList from "./UpcomingSessionsList";
import Button from "../ui/Button";

type UpcomingSessionProps = {
    onClose: () => void;
}

export default function UpcomingSession({
    onClose
}: UpcomingSessionProps){
    const sessionCtx = useSessionsContext();

    const modal = useRef<ModalHandle>(null);

    useEffect(() => {
        if(modal){
            modal.current?.open();
        }
    }, [])

    function handleCancel(id: string){
        sessionCtx.removeSession(id);
    }

    return (
        <Modal ref={modal}>
            <h2>Upcoming sessiongs</h2>
            <UpcomingSessionsList sessions={sessionCtx.sessions} onCancel={handleCancel}/>
            <div className="actions">
                <Button onClick={onClose}>Close</Button>
            </div>
        </Modal>        
    );
}