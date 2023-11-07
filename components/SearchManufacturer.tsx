"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");


  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
