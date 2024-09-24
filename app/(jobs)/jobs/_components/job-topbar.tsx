import { Input } from "@/components/ui/input";
import React from "react";

export const JobTopbar = () => {
  return (
    <div className="w-full flex justify-center pt-4">
      <div className="w-11/12">
        <Input
          type="text"
          className="bg-white rounded-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
