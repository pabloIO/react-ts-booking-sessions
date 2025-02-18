import { useParams } from 'react-router-dom';
import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../components/ui/Button.tsx';
import BookingSession from '../components/sessions/BookingSession.tsx';
import { useState } from 'react';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState(false);

  function handleClose(){
    setIsBooking(false);
  }

  function handleOpen(){
    setIsBooking(true);
  }

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  
  return (
    <main id="session-page">
      {
        isBooking && <BookingSession session={loadedSession} onClose={handleClose}/>
      }
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={handleOpen}>Book session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
