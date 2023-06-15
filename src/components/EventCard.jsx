import React from "react";
import Image from "next/image";
import cx from "classnames";
import { DateIcon } from "./icons/DateIcon.react.svg";
import { LocationIcon } from "./icons/LocationIcon.react.svg";
import dayjs from "dayjs";
import { isDateInPast } from "@/common/utils";
import Link from "next/link";

function EventCard({
  eventBanner,
  eventImage,
  title,
  eventDate,
  eventLocation,
  page_url,
  className,
}) {
  const eventIsInPast = isDateInPast(eventDate);

  return (
    <div
      data-aos="flip-left"
      className={cx(
        "md:max-w-[341px] bg-[#f8f8f8] border border-[#CECECE] rounded-lg md:border-none",
        className
      )}
    >
      <Link href={`/events/${page_url}`}>
        <Image
          width={341}
          height={400}
          className="mx-auto max-h-[300px] object-cover"
          src={eventImage || eventBanner || "/placeholderImg.png"}
          alt={title}
        />
      </Link>
     <Link href={`/events/${page_url}`}>
        <div className="p-4">
          <h3 className="text-2xl font-mono font-semibold mt-4 mb-7">{title}</h3>
          <p className="flex items-center my-4">
            <DateIcon className="text-primary mr-3" />{" "}
            {dayjs(eventDate).format("ddd, MMM D, YYYY - 10A ")}
          </p>
          <p className="flex items-center">
            <LocationIcon className="text-primary mr-3" /> {eventLocation}
          </p>

          <button className="btn bg-primary rounded-sm hover:bg-primary-dark capitalize h-[41px] w-full max-w-[99px] mt-8">
            {eventIsInPast ? "Ended" : "Upcoming"}
          </button>
        </div>
      </Link>
    </div>
  );
}

EventCard.propTypes = {};

export default EventCard;
