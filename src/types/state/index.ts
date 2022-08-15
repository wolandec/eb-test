import { ref } from "vue";

// Using composition API we can create global state like that with no Vuex or Pinia

export const userCurrency = ref<string | null>("USD");

export const toCurrency = ref<string | null>("GBP");

// Keep currencies here because API doesn't provide an endpoint fo giving those
export const currencies = [
  {
    id: "AED",
    label: "United Arab Emirates Dirham",
  },
  {
    id: "AFN",
    label: "Afghan Afghani",
  },
  {
    id: "ALL",
    label: "Albanian Lek",
  },
  {
    id: "AMD",
    label: "Armenian Dram",
  },
  {
    id: "ANG",
    label: "Netherlands Antillean Guilder",
  },
  {
    id: "AOA",
    label: "Angolan Kwanza",
  },
  {
    id: "ARS",
    label: "Argentine Peso",
  },
  {
    id: "AUD",
    label: "Australian Dollar",
  },
  {
    id: "AWG",
    label: "Aruban Florin",
  },
  {
    id: "AZN",
    label: "Azerbaijani Manat",
  },
  {
    id: "BAM",
    label: "Bosnia-Herzegovina Convertible Mark",
  },
  {
    id: "BBD",
    label: "Barbadian Dollar",
  },
  {
    id: "BDT",
    label: "Bangladeshi Taka",
  },
  {
    id: "BGN",
    label: "Bulgarian Lev",
  },
  {
    id: "BHD",
    label: "Bahraini Dinar",
  },
  {
    id: "BIF",
    label: "Burundian Franc",
  },
  {
    id: "BMD",
    label: "Bermudan Dollar",
  },
  {
    id: "BND",
    label: "Brunei Dollar",
  },
  {
    id: "BOB",
    label: "Bolivian Boliviano",
  },
  {
    id: "BRL",
    label: "Brazilian Real",
  },
  {
    id: "BSD",
    label: "Bahamian Dollar",
  },
  {
    id: "BTC",
    label: "Bitcoin",
  },
  {
    id: "BTN",
    label: "Bhutanese Ngultrum",
  },
  {
    id: "BWP",
    label: "Botswanan Pula",
  },
  {
    id: "BYN",
    label: "New Belarusian Ruble",
  },
  {
    id: "BYR",
    label: "Belarusian Ruble",
  },
  {
    id: "BZD",
    label: "Belize Dollar",
  },
  {
    id: "CAD",
    label: "Canadian Dollar",
  },
  {
    id: "CDF",
    label: "Congolese Franc",
  },
  {
    id: "CHF",
    label: "Swiss Franc",
  },
  {
    id: "CLF",
    label: "Chilean Unit of Account (UF)",
  },
  {
    id: "CLP",
    label: "Chilean Peso",
  },
  {
    id: "CNY",
    label: "Chinese Yuan",
  },
  {
    id: "COP",
    label: "Colombian Peso",
  },
  {
    id: "CRC",
    label: "Costa Rican Col\u00f3n",
  },
  {
    id: "CUC",
    label: "Cuban Convertible Peso",
  },
  {
    id: "CUP",
    label: "Cuban Peso",
  },
  {
    id: "CVE",
    label: "Cape Verdean Escudo",
  },
  {
    id: "CZK",
    label: "Czech Republic Koruna",
  },
  {
    id: "DJF",
    label: "Djiboutian Franc",
  },
  {
    id: "DKK",
    label: "Danish Krone",
  },
  {
    id: "DOP",
    label: "Dominican Peso",
  },
  {
    id: "DZD",
    label: "Algerian Dinar",
  },
  {
    id: "EGP",
    label: "Egyptian Pound",
  },
  {
    id: "ERN",
    label: "Eritrean Nakfa",
  },
  {
    id: "ETB",
    label: "Ethiopian Birr",
  },
  {
    id: "EUR",
    label: "Euro",
  },
  {
    id: "FJD",
    label: "Fijian Dollar",
  },
  {
    id: "FKP",
    label: "Falkland Islands Pound",
  },
  {
    id: "GBP",
    label: "British Pound Sterling",
  },
  {
    id: "GEL",
    label: "Georgian Lari",
  },
  {
    id: "GGP",
    label: "Guernsey Pound",
  },
  {
    id: "GHS",
    label: "Ghanaian Cedi",
  },
  {
    id: "GIP",
    label: "Gibraltar Pound",
  },
  {
    id: "GMD",
    label: "Gambian Dalasi",
  },
  {
    id: "GNF",
    label: "Guinean Franc",
  },
  {
    id: "GTQ",
    label: "Guatemalan Quetzal",
  },
  {
    id: "GYD",
    label: "Guyanaese Dollar",
  },
  {
    id: "HKD",
    label: "Hong Kong Dollar",
  },
  {
    id: "HNL",
    label: "Honduran Lempira",
  },
  {
    id: "HRK",
    label: "Croatian Kuna",
  },
  {
    id: "HTG",
    label: "Haitian Gourde",
  },
  {
    id: "HUF",
    label: "Hungarian Forint",
  },
  {
    id: "IDR",
    label: "Indonesian Rupiah",
  },
  {
    id: "ILS",
    label: "Israeli New Sheqel",
  },
  {
    id: "IMP",
    label: "Manx pound",
  },
  {
    id: "INR",
    label: "Indian Rupee",
  },
  {
    id: "IQD",
    label: "Iraqi Dinar",
  },
  {
    id: "IRR",
    label: "Iranian Rial",
  },
  {
    id: "ISK",
    label: "Icelandic Kr\u00f3na",
  },
  {
    id: "JEP",
    label: "Jersey Pound",
  },
  {
    id: "JMD",
    label: "Jamaican Dollar",
  },
  {
    id: "JOD",
    label: "Jordanian Dinar",
  },
  {
    id: "JPY",
    label: "Japanese Yen",
  },
  {
    id: "KES",
    label: "Kenyan Shilling",
  },
  {
    id: "KGS",
    label: "Kyrgystani Som",
  },
  {
    id: "KHR",
    label: "Cambodian Riel",
  },
  {
    id: "KMF",
    label: "Comorian Franc",
  },
  {
    id: "KPW",
    label: "North Korean Won",
  },
  {
    id: "KRW",
    label: "South Korean Won",
  },
  {
    id: "KWD",
    label: "Kuwaiti Dinar",
  },
  {
    id: "KYD",
    label: "Cayman Islands Dollar",
  },
  {
    id: "KZT",
    label: "Kazakhstani Tenge",
  },
  {
    id: "LAK",
    label: "Laotian Kip",
  },
  {
    id: "LBP",
    label: "Lebanese Pound",
  },
  {
    id: "LKR",
    label: "Sri Lankan Rupee",
  },
  {
    id: "LRD",
    label: "Liberian Dollar",
  },
  {
    id: "LSL",
    label: "Lesotho Loti",
  },
  {
    id: "LTL",
    label: "Lithuanian Litas",
  },
  {
    id: "LVL",
    label: "Latvian Lats",
  },
  {
    id: "LYD",
    label: "Libyan Dinar",
  },
  {
    id: "MAD",
    label: "Moroccan Dirham",
  },
  {
    id: "MDL",
    label: "Moldovan Leu",
  },
  {
    id: "MGA",
    label: "Malagasy Ariary",
  },
  {
    id: "MKD",
    label: "Macedonian Denar",
  },
  {
    id: "MMK",
    label: "Myanma Kyat",
  },
  {
    id: "MNT",
    label: "Mongolian Tugrik",
  },
  {
    id: "MOP",
    label: "Macanese Pataca",
  },
  {
    id: "MRO",
    label: "Mauritanian Ouguiya",
  },
  {
    id: "MUR",
    label: "Mauritian Rupee",
  },
  {
    id: "MVR",
    label: "Maldivian Rufiyaa",
  },
  {
    id: "MWK",
    label: "Malawian Kwacha",
  },
  {
    id: "MXN",
    label: "Mexican Peso",
  },
  {
    id: "MYR",
    label: "Malaysian Ringgit",
  },
  {
    id: "MZN",
    label: "Mozambican Metical",
  },
  {
    id: "NAD",
    label: "Namibian Dollar",
  },
  {
    id: "NGN",
    label: "Nigerian Naira",
  },
  {
    id: "NIO",
    label: "Nicaraguan C\u00f3rdoba",
  },
  {
    id: "NOK",
    label: "Norwegian Krone",
  },
  {
    id: "NPR",
    label: "Nepalese Rupee",
  },
  {
    id: "NZD",
    label: "New Zealand Dollar",
  },
  {
    id: "OMR",
    label: "Omani Rial",
  },
  {
    id: "PAB",
    label: "Panamanian Balboa",
  },
  {
    id: "PEN",
    label: "Peruvian Nuevo Sol",
  },
  {
    id: "PGK",
    label: "Papua New Guinean Kina",
  },
  {
    id: "PHP",
    label: "Philippine Peso",
  },
  {
    id: "PKR",
    label: "Pakistani Rupee",
  },
  {
    id: "PLN",
    label: "Polish Zloty",
  },
  {
    id: "PYG",
    label: "Paraguayan Guarani",
  },
  {
    id: "QAR",
    label: "Qatari Rial",
  },
  {
    id: "RON",
    label: "Romanian Leu",
  },
  {
    id: "RSD",
    label: "Serbian Dinar",
  },
  {
    id: "RUB",
    label: "Russian Ruble",
  },
  {
    id: "RWF",
    label: "Rwandan Franc",
  },
  {
    id: "SAR",
    label: "Saudi Riyal",
  },
  {
    id: "SBD",
    label: "Solomon Islands Dollar",
  },
  {
    id: "SCR",
    label: "Seychellois Rupee",
  },
  {
    id: "SDG",
    label: "Sudanese Pound",
  },
  {
    id: "SEK",
    label: "Swedish Krona",
  },
  {
    id: "SGD",
    label: "Singapore Dollar",
  },
  {
    id: "SHP",
    label: "Saint Helena Pound",
  },
  {
    id: "SLL",
    label: "Sierra Leonean Leone",
  },
  {
    id: "SOS",
    label: "Somali Shilling",
  },
  {
    id: "SRD",
    label: "Surinamese Dollar",
  },
  {
    id: "STD",
    label: "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
  },
  {
    id: "SVC",
    label: "Salvadoran Col\u00f3n",
  },
  {
    id: "SYP",
    label: "Syrian Pound",
  },
  {
    id: "SZL",
    label: "Swazi Lilangeni",
  },
  {
    id: "THB",
    label: "Thai Baht",
  },
  {
    id: "TJS",
    label: "Tajikistani Somoni",
  },
  {
    id: "TMT",
    label: "Turkmenistani Manat",
  },
  {
    id: "TND",
    label: "Tunisian Dinar",
  },
  {
    id: "TOP",
    label: "Tongan Pa\u02bbanga",
  },
  {
    id: "TRY",
    label: "Turkish Lira",
  },
  {
    id: "TTD",
    label: "Trinidad and Tobago Dollar",
  },
  {
    id: "TWD",
    label: "New Taiwan Dollar",
  },
  {
    id: "TZS",
    label: "Tanzanian Shilling",
  },
  {
    id: "UAH",
    label: "Ukrainian Hryvnia",
  },
  {
    id: "UGX",
    label: "Ugandan Shilling",
  },
  {
    id: "USD",
    label: "United States Dollar",
  },
  {
    id: "UYU",
    label: "Uruguayan Peso",
  },
  {
    id: "UZS",
    label: "Uzbekistan Som",
  },
  {
    id: "VEF",
    label: "Venezuelan Bol\u00edvar Fuerte",
  },
  {
    id: "VND",
    label: "Vietnamese Dong",
  },
  {
    id: "VUV",
    label: "Vanuatu Vatu",
  },
  {
    id: "WST",
    label: "Samoan Tala",
  },
  {
    id: "XAF",
    label: "CFA Franc BEAC",
  },
  {
    id: "XAG",
    label: "Silver (troy ounce)",
  },
  {
    id: "XAU",
    label: "Gold (troy ounce)",
  },
  {
    id: "XCD",
    label: "East Caribbean Dollar",
  },
  {
    id: "XDR",
    label: "Special Drawing Rights",
  },
  {
    id: "XOF",
    label: "CFA Franc BCEAO",
  },
  {
    id: "XPF",
    label: "CFP Franc",
  },
  {
    id: "YER",
    label: "Yemeni Rial",
  },
  {
    id: "ZAR",
    label: "South African Rand",
  },
  {
    id: "ZMK",
    label: "Zambian Kwacha (pre-2013)",
  },
  {
    id: "ZMW",
    label: "Zambian Kwacha",
  },
  {
    id: "ZWL",
    label: "Zimbabwean Dollar",
  },
];
