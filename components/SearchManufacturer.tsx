"use client";
import { manufacturers } from "@/constants";
import { ManufacturerTypes } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: ManufacturerTypes) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className=" cursor-pointer absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              alt="logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
              <Combobox.Options>
                  {
                    filteredManufacturers.length === 0 && query === ""
                  }
              </Combobox.Options>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          ></Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
