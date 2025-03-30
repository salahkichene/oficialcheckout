
import { useState } from "react";

interface CountrySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const CountrySelector = ({ value, onChange }: CountrySelectorProps) => {
  return (
    <div className="w-full whitespace-nowrap">
      <div className="relative w-full">
        <select 
          className="h-[52px] w-full bg-white rounded-[5px] border border-[#dedede] border-solid px-[11px] py-4 appearance-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
        </select>
        <label className="absolute left-[11px] top-1/2 -translate-y-1/2 text-base pointer-events-none text-[#707070]">
          Country/Region
        </label>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
