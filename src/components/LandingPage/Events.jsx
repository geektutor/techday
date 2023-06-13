import Container from "../Container";
import placeholderImg from "@/assets/images/placeholderImg.png";
import EventCard from "../EventCard";
import { v4 } from "uuid";

const events = [
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
  {
    eventName: "Isiala Ngwa",
    eventLocation: "Lorem, Lagos, Nigeria.",
    eventDate: "2023-06-13T12:02:08.777Z",
    image: placeholderImg,
  },
];

function Events(props) {
  return (
    <Container className={"bg-lga"}>
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
