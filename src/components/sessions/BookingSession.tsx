import { FormEvent, useEffect, useRef, useState } from "react"
import Modal, { ModalHandle } from "../ui/Modal";
import { Session } from "../../definitions/types";
import Button from "../ui/Button";
import { useSessionsContext } from "../../store/sessions-context";
import Input from "../ui/Input";

type BookingSessionProps = {
    session: Session;
    onClose: () => void;
};

export default function BookingSession({
    onClose,
    session
}: BookingSessionProps){
    const customModal = useRef<ModalHandle | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const sessionCtx = useSessionsContext();

    useEffect(() => {
        if(customModal){
            customModal.current?.open();
        }
    }, [])

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        sessionCtx.addSession(session);
        console.log(name, email);
        console.log(session);
        onClose();
    }

    return (
        <Modal ref={customModal}>
            <h2>Booking session</h2>
            <form onSubmit={handleSubmit}>
                <Input value={name} onChange={(e) => setName(e.target.value)} label="Your name" id={"name"}/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Your email" id={"email"}/>
                <p className="actions">
                    <Button textonly onClick={onClose}>Close</Button>
                    <Button >Book</Button>
                </p>
            </form>
        </Modal>
    );

}