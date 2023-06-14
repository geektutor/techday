import { v4 } from "uuid";
import Container from "../Container";
import EventCard from "../EventCard";

function Events({ events }) {
  return (
    <Container id="events" className={"bg-lga"}>
      <h2 className="text-center fv-caps mb-2">Events</h2>
      <h4 className="text-center">
        Where next ARE WE CREATING THAT UNIQUE EXPREIENCE AND AWARENESS TO ALL
      </h4>
      <div className="row w-full justify-between my-[75px]">
        {events?.map((event) => (
          <EventCard key={v4()} className={"col-3x"} {...event} />
        ))}
      </div>
    </Container>
  );
}

export default Events;
