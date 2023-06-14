import React from "react";
import Container from "@/components/Container";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Image from "next/image";
import heroImage from "@/assets/images/overviewheader.png";
import { DateIcon } from "@/components/icons/DateIcon.react.svg";
import { LocationIcon } from "@/components/icons/LocationIcon.react.svg";
import dayjs from "dayjs";
import BreadCrumb from "@/components/BreadCrumnb";

function EventOverviewPage(props) {
  return (
    <>
      <Container containerClass={"px-0 pt-[170px] pb-[31px]"}>
        <BreadCrumb
          items={[
            { label: "Events", href: "/" },
            { label: "Isiala Ngwa", isActive: true, href: "/events/id" },
          ]}
        />
      </Container>
      <Container containerClass={"bg-[#DBDBDB]"}>
        <Image className="mx-auto" height={424} src={heroImage} alt="header" />
      </Container>
      <Container
        className={"py-8"}
        containerClass={
          "flex items-start justify-between lg:space-x-14 flex-col lg:flex-row"
        }
      >
        <div className="flex-grow max-w-[813px]">
          <h1 className="font-medium text-[48px] leading-[57px]">
            Isiala Ngwa
          </h1>
          <p className="mt-[24px] mb-14 text-2xl">
            Isiala Ngwa is a lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          <p className="flex items-center my-6">
            <DateIcon className="text-primary mr-3" />{" "}
            {dayjs("2023-06-13T12:02:08.777Z").format(
              "ddd, MMM D, YYYY - hhA "
            )}
          </p>
          <p className="flex items-center my-6">
            <LocationIcon className="text-primary mr-3" /> Lorem, Lagos,
            Nigeria.
          </p>

          <h2 className=" text-4xl font-medium">About the event</h2>
          <h3 className="my-8 font-medium">What is Isiala Ngwa?</h3>
          <p className="text-2xl">
            Isiala Ngwa is a lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Isiala Ngwa is a
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Isiala Ngwa is a lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{" "}
          </p>
        </div>
        <div className="w-full max-w-[435px] p-7 flex-shrink-0 bg-[#FCFBFB] my-6 lg:my-0">
          <p className="font-medium leading-[33.41px] text-[28px] mb-11">
            Make donation
          </p>
          <button className="btn bg-primary w-full max-w-none  mx-auto rounded-md">
            Make Donation
          </button>
        </div>
      </Container>
      ;
    </>
  );
}

EventOverviewPage.layout = MainLayout;

export default EventOverviewPage;
