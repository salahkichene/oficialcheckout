
import { useState, useEffect } from "react";
import type { ShippingMethod } from "./types";
import { Input } from "@/components/ui/input";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Search } from "lucide-react";

// Define the country data type
interface CountryOption {
  code: string;
  name: string;
  hasState: boolean;
  stateLabel?: string;
  postalLabel?: string;
  states?: Array<{
    code: string;
    name: string;
  }>;
}

export const DeliveryForm = () => {
  const [country, setCountry] = useState("US");
  const [shippingMethods] = useState<ShippingMethod[]>([
    {
      id: "fedex",
      name: "FedEx Ground",
      description: "2 to 3 business days",
      price: "$10.00",
      selected: true,
    },
    {
      id: "usps",
      name: "USPS Priority",
      description: "2 to 3 business days",
      price: "$10.00",
      selected: false,
    },
  ]);

  // Comprehensive list of countries with their specific fields
  const countries: CountryOption[] = [
    {
      code: "US",
      name: "United States",
      hasState: true,
      stateLabel: "State",
      postalLabel: "ZIP code",
      states: [
        { code: "AL", name: "Alabama" },
        { code: "AK", name: "Alaska" },
        { code: "AZ", name: "Arizona" },
        { code: "AR", name: "Arkansas" },
        { code: "CA", name: "California" },
        { code: "CO", name: "Colorado" },
        { code: "CT", name: "Connecticut" },
        { code: "DE", name: "Delaware" },
        { code: "FL", name: "Florida" },
        { code: "GA", name: "Georgia" },
        { code: "HI", name: "Hawaii" },
        { code: "ID", name: "Idaho" },
        { code: "IL", name: "Illinois" },
        { code: "IN", name: "Indiana" },
        { code: "IA", name: "Iowa" },
        { code: "KS", name: "Kansas" },
        { code: "KY", name: "Kentucky" },
        { code: "LA", name: "Louisiana" },
        { code: "ME", name: "Maine" },
        { code: "MD", name: "Maryland" },
        { code: "MA", name: "Massachusetts" },
        { code: "MI", name: "Michigan" },
        { code: "MN", name: "Minnesota" },
        { code: "MS", name: "Mississippi" },
        { code: "MO", name: "Missouri" },
        { code: "MT", name: "Montana" },
        { code: "NE", name: "Nebraska" },
        { code: "NV", name: "Nevada" },
        { code: "NH", name: "New Hampshire" },
        { code: "NJ", name: "New Jersey" },
        { code: "NM", name: "New Mexico" },
        { code: "NY", name: "New York" },
        { code: "NC", name: "North Carolina" },
        { code: "ND", name: "North Dakota" },
        { code: "OH", name: "Ohio" },
        { code: "OK", name: "Oklahoma" },
        { code: "OR", name: "Oregon" },
        { code: "PA", name: "Pennsylvania" },
        { code: "RI", name: "Rhode Island" },
        { code: "SC", name: "South Carolina" },
        { code: "SD", name: "South Dakota" },
        { code: "TN", name: "Tennessee" },
        { code: "TX", name: "Texas" },
        { code: "UT", name: "Utah" },
        { code: "VT", name: "Vermont" },
        { code: "VA", name: "Virginia" },
        { code: "WA", name: "Washington" },
        { code: "WV", name: "West Virginia" },
        { code: "WI", name: "Wisconsin" },
        { code: "WY", name: "Wyoming" },
        { code: "DC", name: "District of Columbia" },
      ],
    },
    {
      code: "CA",
      name: "Canada",
      hasState: true,
      stateLabel: "Province",
      postalLabel: "Postal code",
      states: [
        { code: "AB", name: "Alberta" },
        { code: "BC", name: "British Columbia" },
        { code: "MB", name: "Manitoba" },
        { code: "NB", name: "New Brunswick" },
        { code: "NL", name: "Newfoundland and Labrador" },
        { code: "NS", name: "Nova Scotia" },
        { code: "ON", name: "Ontario" },
        { code: "PE", name: "Prince Edward Island" },
        { code: "QC", name: "Quebec" },
        { code: "SK", name: "Saskatchewan" },
        { code: "NT", name: "Northwest Territories" },
        { code: "NU", name: "Nunavut" },
        { code: "YT", name: "Yukon" },
      ],
    },
    {
      code: "GB",
      name: "United Kingdom",
      hasState: false,
      postalLabel: "Postcode",
    },
    { code: "AF", name: "Afghanistan", hasState: false },
    { code: "AX", name: "Åland Islands", hasState: false },
    { code: "AL", name: "Albania", hasState: false },
    { code: "DZ", name: "Algeria", hasState: false },
    { code: "AS", name: "American Samoa", hasState: false },
    { code: "AD", name: "Andorra", hasState: false },
    { code: "AO", name: "Angola", hasState: false },
    { code: "AI", name: "Anguilla", hasState: false },
    { code: "AQ", name: "Antarctica", hasState: false },
    { code: "AG", name: "Antigua and Barbuda", hasState: false },
    { code: "AR", name: "Argentina", hasState: false },
    { code: "AM", name: "Armenia", hasState: false },
    { code: "AW", name: "Aruba", hasState: false },
    { code: "AU", name: "Australia", hasState: false },
    { code: "AT", name: "Austria", hasState: false },
    { code: "AZ", name: "Azerbaijan", hasState: false },
    { code: "BS", name: "Bahamas", hasState: false },
    { code: "BH", name: "Bahrain", hasState: false },
    { code: "BD", name: "Bangladesh", hasState: false },
    { code: "BB", name: "Barbados", hasState: false },
    { code: "BY", name: "Belarus", hasState: false },
    { code: "BE", name: "Belgium", hasState: false },
    { code: "BZ", name: "Belize", hasState: false },
    { code: "BJ", name: "Benin", hasState: false },
    { code: "BM", name: "Bermuda", hasState: false },
    { code: "BT", name: "Bhutan", hasState: false },
    { code: "BO", name: "Bolivia", hasState: false },
    { code: "BA", name: "Bosnia and Herzegovina", hasState: false },
    { code: "BW", name: "Botswana", hasState: false },
    { code: "BV", name: "Bouvet Island", hasState: false },
    { code: "BR", name: "Brazil", hasState: false },
    { code: "IO", name: "British Indian Ocean Territory", hasState: false },
    { code: "BN", name: "Brunei Darussalam", hasState: false },
    { code: "BG", name: "Bulgaria", hasState: false },
    { code: "BF", name: "Burkina Faso", hasState: false },
    { code: "BI", name: "Burundi", hasState: false },
    { code: "KH", name: "Cambodia", hasState: false },
    { code: "CM", name: "Cameroon", hasState: false },
    { code: "CV", name: "Cape Verde", hasState: false },
    { code: "KY", name: "Cayman Islands", hasState: false },
    { code: "CF", name: "Central African Republic", hasState: false },
    { code: "TD", name: "Chad", hasState: false },
    { code: "CL", name: "Chile", hasState: false },
    { code: "CN", name: "China", hasState: false },
    { code: "CX", name: "Christmas Island", hasState: false },
    { code: "CC", name: "Cocos (Keeling) Islands", hasState: false },
    { code: "CO", name: "Colombia", hasState: false },
    { code: "KM", name: "Comoros", hasState: false },
    { code: "CG", name: "Congo", hasState: false },
    { code: "CD", name: "Congo, Democratic Republic", hasState: false },
    { code: "CK", name: "Cook Islands", hasState: false },
    { code: "CR", name: "Costa Rica", hasState: false },
    { code: "CI", name: "Cote D'Ivoire", hasState: false },
    { code: "HR", name: "Croatia", hasState: false },
    { code: "CU", name: "Cuba", hasState: false },
    { code: "CY", name: "Cyprus", hasState: false },
    { code: "CZ", name: "Czech Republic", hasState: false },
    { code: "DK", name: "Denmark", hasState: false },
    { code: "DJ", name: "Djibouti", hasState: false },
    { code: "DM", name: "Dominica", hasState: false },
    { code: "DO", name: "Dominican Republic", hasState: false },
    { code: "EC", name: "Ecuador", hasState: false },
    { code: "EG", name: "Egypt", hasState: false },
    { code: "SV", name: "El Salvador", hasState: false },
    { code: "GQ", name: "Equatorial Guinea", hasState: false },
    { code: "ER", name: "Eritrea", hasState: false },
    { code: "EE", name: "Estonia", hasState: false },
    { code: "ET", name: "Ethiopia", hasState: false },
    { code: "FK", name: "Falkland Islands", hasState: false },
    { code: "FO", name: "Faroe Islands", hasState: false },
    { code: "FJ", name: "Fiji", hasState: false },
    { code: "FI", name: "Finland", hasState: false },
    { code: "FR", name: "France", hasState: false },
    { code: "GF", name: "French Guiana", hasState: false },
    { code: "PF", name: "French Polynesia", hasState: false },
    { code: "TF", name: "French Southern Territories", hasState: false },
    { code: "GA", name: "Gabon", hasState: false },
    { code: "GM", name: "Gambia", hasState: false },
    { code: "GE", name: "Georgia", hasState: false },
    { code: "DE", name: "Germany", hasState: false },
    { code: "GH", name: "Ghana", hasState: false },
    { code: "GI", name: "Gibraltar", hasState: false },
    { code: "GR", name: "Greece", hasState: false },
    { code: "GL", name: "Greenland", hasState: false },
    { code: "GD", name: "Grenada", hasState: false },
    { code: "GP", name: "Guadeloupe", hasState: false },
    { code: "GU", name: "Guam", hasState: false },
    { code: "GT", name: "Guatemala", hasState: false },
    { code: "GG", name: "Guernsey", hasState: false },
    { code: "GN", name: "Guinea", hasState: false },
    { code: "GW", name: "Guinea-Bissau", hasState: false },
    { code: "GY", name: "Guyana", hasState: false },
    { code: "HT", name: "Haiti", hasState: false },
    { code: "HM", name: "Heard Island & Mcdonald Islands", hasState: false },
    { code: "VA", name: "Holy See (Vatican City State)", hasState: false },
    { code: "HN", name: "Honduras", hasState: false },
    { code: "HK", name: "Hong Kong", hasState: false },
    { code: "HU", name: "Hungary", hasState: false },
    { code: "IS", name: "Iceland", hasState: false },
    { code: "IN", name: "India", hasState: false },
    { code: "ID", name: "Indonesia", hasState: false },
    { code: "IR", name: "Iran", hasState: false },
    { code: "IQ", name: "Iraq", hasState: false },
    { code: "IE", name: "Ireland", hasState: false },
    { code: "IM", name: "Isle Of Man", hasState: false },
    { code: "IL", name: "Israel", hasState: false },
    { code: "IT", name: "Italy", hasState: false },
    { code: "JM", name: "Jamaica", hasState: false },
    { code: "JP", name: "Japan", hasState: false },
    { code: "JE", name: "Jersey", hasState: false },
    { code: "JO", name: "Jordan", hasState: false },
    { code: "KZ", name: "Kazakhstan", hasState: false },
    { code: "KE", name: "Kenya", hasState: false },
    { code: "KI", name: "Kiribati", hasState: false },
    { code: "KR", name: "Korea", hasState: false },
    { code: "KW", name: "Kuwait", hasState: false },
    { code: "KG", name: "Kyrgyzstan", hasState: false },
    { code: "LA", name: "Lao People's Democratic Republic", hasState: false },
    { code: "LV", name: "Latvia", hasState: false },
    { code: "LB", name: "Lebanon", hasState: false },
    { code: "LS", name: "Lesotho", hasState: false },
    { code: "LR", name: "Liberia", hasState: false },
    { code: "LY", name: "Libyan Arab Jamahiriya", hasState: false },
    { code: "LI", name: "Liechtenstein", hasState: false },
    { code: "LT", name: "Lithuania", hasState: false },
    { code: "LU", name: "Luxembourg", hasState: false },
    { code: "MO", name: "Macao", hasState: false },
    { code: "MK", name: "Macedonia", hasState: false },
    { code: "MG", name: "Madagascar", hasState: false },
    { code: "MW", name: "Malawi", hasState: false },
    { code: "MY", name: "Malaysia", hasState: false },
    { code: "MV", name: "Maldives", hasState: false },
    { code: "ML", name: "Mali", hasState: false },
    { code: "MT", name: "Malta", hasState: false },
    { code: "MH", name: "Marshall Islands", hasState: false },
    { code: "MQ", name: "Martinique", hasState: false },
    { code: "MR", name: "Mauritania", hasState: false },
    { code: "MU", name: "Mauritius", hasState: false },
    { code: "YT", name: "Mayotte", hasState: false },
    { code: "MX", name: "Mexico", hasState: false },
    { code: "FM", name: "Micronesia", hasState: false },
    { code: "MD", name: "Moldova", hasState: false },
    { code: "MC", name: "Monaco", hasState: false },
    { code: "MN", name: "Mongolia", hasState: false },
    { code: "ME", name: "Montenegro", hasState: false },
    { code: "MS", name: "Montserrat", hasState: false },
    { code: "MA", name: "Morocco", hasState: false },
    { code: "MZ", name: "Mozambique", hasState: false },
    { code: "MM", name: "Myanmar", hasState: false },
    { code: "NA", name: "Namibia", hasState: false },
    { code: "NR", name: "Nauru", hasState: false },
    { code: "NP", name: "Nepal", hasState: false },
    { code: "NL", name: "Netherlands", hasState: false },
    { code: "AN", name: "Netherlands Antilles", hasState: false },
    { code: "NC", name: "New Caledonia", hasState: false },
    { code: "NZ", name: "New Zealand", hasState: false },
    { code: "NI", name: "Nicaragua", hasState: false },
    { code: "NE", name: "Niger", hasState: false },
    { code: "NG", name: "Nigeria", hasState: false },
    { code: "NU", name: "Niue", hasState: false },
    { code: "NF", name: "Norfolk Island", hasState: false },
    { code: "MP", name: "Northern Mariana Islands", hasState: false },
    { code: "NO", name: "Norway", hasState: false },
    { code: "OM", name: "Oman", hasState: false },
    { code: "PK", name: "Pakistan", hasState: false },
    { code: "PW", name: "Palau", hasState: false },
    { code: "PS", name: "Palestine", hasState: false },
    { code: "PA", name: "Panama", hasState: false },
    { code: "PG", name: "Papua New Guinea", hasState: false },
    { code: "PY", name: "Paraguay", hasState: false },
    { code: "PE", name: "Peru", hasState: false },
    { code: "PH", name: "Philippines", hasState: false },
    { code: "PN", name: "Pitcairn", hasState: false },
    { code: "PL", name: "Poland", hasState: false },
    { code: "PT", name: "Portugal", hasState: false },
    { code: "PR", name: "Puerto Rico", hasState: false },
    { code: "QA", name: "Qatar", hasState: false },
    { code: "RE", name: "Reunion", hasState: false },
    { code: "RO", name: "Romania", hasState: false },
    { code: "RU", name: "Russian Federation", hasState: false },
    { code: "RW", name: "Rwanda", hasState: false },
    { code: "BL", name: "Saint Barthélemy", hasState: false },
    { code: "SH", name: "Saint Helena", hasState: false },
    { code: "KN", name: "Saint Kitts And Nevis", hasState: false },
    { code: "LC", name: "Saint Lucia", hasState: false },
    { code: "MF", name: "Saint Martin", hasState: false },
    { code: "PM", name: "Saint Pierre And Miquelon", hasState: false },
    { code: "VC", name: "Saint Vincent And Grenadines", hasState: false },
    { code: "WS", name: "Samoa", hasState: false },
    { code: "SM", name: "San Marino", hasState: false },
    { code: "ST", name: "Sao Tome And Principe", hasState: false },
    { code: "SA", name: "Saudi Arabia", hasState: false },
    { code: "SN", name: "Senegal", hasState: false },
    { code: "RS", name: "Serbia", hasState: false },
    { code: "SC", name: "Seychelles", hasState: false },
    { code: "SL", name: "Sierra Leone", hasState: false },
    { code: "SG", name: "Singapore", hasState: false },
    { code: "SK", name: "Slovakia", hasState: false },
    { code: "SI", name: "Slovenia", hasState: false },
    { code: "SB", name: "Solomon Islands", hasState: false },
    { code: "SO", name: "Somalia", hasState: false },
    { code: "ZA", name: "South Africa", hasState: false },
    { code: "GS", name: "South Georgia And Sandwich Isl.", hasState: false },
    { code: "ES", name: "Spain", hasState: false },
    { code: "LK", name: "Sri Lanka", hasState: false },
    { code: "SD", name: "Sudan", hasState: false },
    { code: "SR", name: "Suriname", hasState: false },
    { code: "SJ", name: "Svalbard And Jan Mayen", hasState: false },
    { code: "SZ", name: "Swaziland", hasState: false },
    { code: "SE", name: "Sweden", hasState: false },
    { code: "CH", name: "Switzerland", hasState: false },
    { code: "SY", name: "Syrian Arab Republic", hasState: false },
    { code: "TW", name: "Taiwan", hasState: false },
    { code: "TJ", name: "Tajikistan", hasState: false },
    { code: "TZ", name: "Tanzania", hasState: false },
    { code: "TH", name: "Thailand", hasState: false },
    { code: "TL", name: "Timor-Leste", hasState: false },
    { code: "TG", name: "Togo", hasState: false },
    { code: "TK", name: "Tokelau", hasState: false },
    { code: "TO", name: "Tonga", hasState: false },
    { code: "TT", name: "Trinidad And Tobago", hasState: false },
    { code: "TN", name: "Tunisia", hasState: false },
    { code: "TR", name: "Turkey", hasState: false },
    { code: "TM", name: "Turkmenistan", hasState: false },
    { code: "TC", name: "Turks And Caicos Islands", hasState: false },
    { code: "TV", name: "Tuvalu", hasState: false },
    { code: "UG", name: "Uganda", hasState: false },
    { code: "UA", name: "Ukraine", hasState: false },
    { code: "AE", name: "United Arab Emirates", hasState: false },
    { code: "UM", name: "United States Outlying Islands", hasState: false },
    { code: "UY", name: "Uruguay", hasState: false },
    { code: "UZ", name: "Uzbekistan", hasState: false },
    { code: "VU", name: "Vanuatu", hasState: false },
    { code: "VE", name: "Venezuela", hasState: false },
    { code: "VN", name: "Vietnam", hasState: false },
    { code: "VG", name: "Virgin Islands, British", hasState: false },
    { code: "VI", name: "Virgin Islands, U.S.", hasState: false },
    { code: "WF", name: "Wallis And Futuna", hasState: false },
    { code: "EH", name: "Western Sahara", hasState: false },
    { code: "YE", name: "Yemen", hasState: false },
    { code: "ZM", name: "Zambia", hasState: false },
    { code: "ZW", name: "Zimbabwe", hasState: false },
  ];

  // Get current country data
  const currentCountry = countries.find((c) => c.code === country) || countries[0];

  return (
    <section className="w-full pb-[38px]">
      <h2 className="text-black text-[21px] font-semibold leading-[1.2]">
        Delivery
      </h2>
      <div className="w-full font-normal mt-3.5">
        <div className="w-full">
          <FloatingLabelInput
            as="select"
            label="Country/Region"
            className="min-h-[52px] w-full cursor-pointer bg-white appearance-none pr-8"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </FloatingLabelInput>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <FloatingLabelInput
              label="First name"
              defaultValue=""
              className="bg-white"
            />
          </div>
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <FloatingLabelInput
              label="Last name"
              defaultValue=""
              className="bg-white"
            />
          </div>
        </div>

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <div className="min-w-40 flex-1 relative">
            <FloatingLabelInput
              label="Address"
              defaultValue=""
              className="bg-white pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <div className="min-w-40 flex-1">
            <FloatingLabelInput
              label="Apartment, suite, etc. (optional)"
              defaultValue=""
              className="bg-white"
            />
          </div>
        </div>

        {/* Render different layouts based on country selection */}
        {currentCountry.code === "GB" ? (
          <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
            <div className="flex-1 min-w-[181px]">
              <FloatingLabelInput
                label="City"
                defaultValue=""
                className="bg-white"
              />
            </div>
            <div className="flex-1 min-w-[181px]">
              <FloatingLabelInput
                label={currentCountry.postalLabel || "Postal code"}
                defaultValue=""
                className="bg-white"
              />
            </div>
          </div>
        ) : (
          <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
            <div className="flex-1 min-w-[181px]">
              <FloatingLabelInput
                label="City"
                defaultValue=""
                className="bg-white"
              />
            </div>
            
            {currentCountry.hasState && (
              <div className="flex-1 min-w-[181px] relative">
                <FloatingLabelInput
                  as="select"
                  label={currentCountry.stateLabel || "State/Province"}
                  className="min-h-[52px] w-full cursor-pointer bg-white appearance-none pr-8"
                >
                  {currentCountry.states?.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </FloatingLabelInput>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
            
            <div className="flex-1 min-w-[181px]">
              <FloatingLabelInput
                label={currentCountry.postalLabel || "Postal code"}
                defaultValue=""
                className="bg-white"
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-full mt-[26px]">
        <h3 className="text-black text-base font-semibold leading-[1.2]">
          Shipping method
        </h3>
        <div className="w-full mt-3.5">
          <div className="bg-neutral-100 border w-full rounded-[5px] border-[rgba(222,222,222,1)] border-solid">
            {shippingMethods.map((method) => (
              <div
                key={method.id}
                className={`w-full ${
                  method.selected
                    ? "bg-[rgba(239,245,255,1)] border-[rgba(23,115,176,1)]"
                    : "bg-white"
                } border flex w-full gap-[11px] flex-wrap p-3.5 rounded-[5px] border-solid`}
              >
                <input
                  type="radio"
                  name="shipping"
                  checked={method.selected}
                  className="w-[18px] h-[18px]"
                />
                <div className="flex min-w-60 gap-[7px] text-sm flex-wrap flex-1 shrink basis-[0%]">
                  <div className="min-w-60 font-normal flex-1 shrink basis-[0%]">
                    <div className="flex-1 shrink basis-[0%] w-full gap-2.5 text-black">
                      {method.name}
                    </div>
                    <div className="flex-1 shrink basis-[0%] w-full gap-2.5 text-[#707070] mt-[5px]">
                      {method.description}
                    </div>
                  </div>
                  <div className="flex flex-col text-black font-semibold whitespace-nowrap text-right">
                    <div className="gap-2.5">{method.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
