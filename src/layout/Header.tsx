import { useState } from "react";
import Button from "../components/ui/Button";
import UpcomingSession from "../components/sessions/UpcomingSession";


export default function Header () {

    const [showUpcomingSessiongs, setShowUpcomingSessiongs] = useState(false);
    
    function handleClose() {
        setShowUpcomingSessiongs(false);
    }

    function handleOpen() {
        setShowUpcomingSessiongs(true);
    }

    return (
        <>
            { showUpcomingSessiongs && <UpcomingSession onClose={handleClose}/> }
            <header id="main-header">
                <h1>React Mentoring</h1>
                <nav  className="">
                    <ul>
                        <li>
                            <Button textonly to="/">Our Mission</Button>
                        </li>
                        <li>
                            <Button textonly to="/sessions">Browse Sessions</Button>
                        </li>
                        <li>
                            <Button onClick={handleOpen}>Upcoming session</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}