import React, { useState } from "react";
import "./Event.css";


function Event() {
  // Manually defined events in the state
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      date: "2024-12-20",
      description: "This is a description for event 1.",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
      id: 2,
      title: "Event 2",
      date: "2024-12-21",
      description: "This is a description for event 2.",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    },
    {
        id: 3,
        title: "Event 3",
        date: "2024-12-22",
        description: "This is a description for event 2.",
        imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
      },
      {
        id: 4,
        title: "Event 4",
        date: "2024-12-23",
        description: "This is a description for event 2.",
        imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
      }
    
    // Add more events as needed
  ]);

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "New Event",
      date: "2024-12-22",
      description: "This is a new manually added event.",
      imageUrl: "https://via.placeholder.com/150" // Placeholder image URL
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      {/* <header>
        <h1>Event</h1>
      </header> */}
      <div className="eventPage">
      <h1 className="title-event">Events</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          lacinia, <br /> odio ut lacinia fringilla, lectus dolor tempor ligula,
          sit amet viverra purus nibh sed nibh.
        </p>
        <section className="previous-events">
          {events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            events.map((event) => (
              <div className="event" key={event.id}>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="date">{event.date}</p>
                  <p className="description">{event.description}</p>
                </div>
                <div className="event-image">
                  <img src={event.imageUrl} alt={event.title} />
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Event;
