
const createLinks = (...items) =>
  items.map(([name, path]) => ({ name, path }));

export const navbarData = {
  Buy: {
    link: "/search",
    button: "Buy",
    iconSize: 15,
    buttonClass: `
      flex items-center gap-1
      hover:text-blue-700 cursor-pointer
      bg-blue-100 p-1 rounded-lg
      text-lg font-semibold
      lg:text-sm xl:text-lg
    `,
    wrapperClass: "group",
    ariaExpanded: true,
    dropdownClass: `
      fixed top-17 left-23 right-0
      min-h-75 bg-white z-50
      p-8 gap-20
      lg:flex flex-col lg:flex-row
    `,
    animationY: -20,
    sections: [
      {
        title: "Homes for sale",
        sectionClass: "lg:flex lg:flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["Homes for sale", "/search"],
          ["New construction", "/newConstruction"],
          ["Foreclosures", "/foreclosures"],
          ["Coming soon", "/comingSoon"],
          ["For sale by owner", "/forSaleByOwner"],
          ["Recent home sales", "/recentHomeSales"],
          ["Open houses", "/openHouses"],
          ["All homes", "/search"]
        ),
      },
      {
        title: "Resources",
        sectionClass:
          "border-l border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Home Buying Guide", "/homeBuyingGuide"],
          ["Foreclosure center", "/foreclosureCenter"],
          ["Real estate app", "/realEstateApp"],
          ["Down payment assistance", "/downPaymentAssistance"],
          ["Find a buyer's agent", "/findAnAgent"]
        ),
      },
    ],
  },

  Rent: {
    link: "/search",
    button: "Rent",
    iconSize: 15,
    buttonClass: `
      flex items-center gap-1
      hover:text-blue-700 cursor-pointer
      bg-blue-100 p-1 rounded-lg
      text-lg font-semibold
      lg:text-sm xl:text-lg
    `,
    wrapperClass: "group",
    ariaExpanded: true,
    dropdownClass: `
      fixed top-17 left-23 right-0
      min-h-[300px] bg-white z-50
      p-8 gap-20 flex
    `,
    animationY: -20,
    sections: [
      {
        title: "Rental listings",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "grid gap-5",
        linksName: createLinks(
          ["Search apartments for rent", "/search"],
          ["Search houses for rent", "/search"],
          ["Search all rental listings", "/search"],
          ["Browse all rental buildings", "/search"]
        ),
      },
      {
        title: "Tools for renters",
        sectionClass: `
          border-l-[1px] border-gray-500
          pl-6 flex flex-col gap-5 mt-10
        `,
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["Estimate what you can afford", "/rentAffordability"],
          ["See your application", "/application"],
          ["Manage your tours", "/manageTours"],
          ["Pay your rent", "/payRent"],
          ["Build your credit", "/buildCredit"],
          ["Get renters insurance", "/rentersInsurance"],
          ["Explore housing voucher programs", "/housingVouchers"],
          ["Learn more about renting", "/rentingGuide"]
        ),
      },
    ],
  },

  Sell: {
    link: "/seeYourOption",
    button: "Sell",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "Resources",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["Explore your options", "/seeYourOption"],
          ["See your home's Zestimate", "/zestimate"],
          ["US housing market", "/housingMarket"],
          ["Sellers guide", "/sellersGuide"]
        ),
      },
      {
        title: "Selling options",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Find a seller's agent", "/findAnAgent"],
          ["Post For Sale by Owner", "/forSaleByOwner"]
        ),
      },
    ],
  },

  "Get a mortgage": {
    link: "/getAMortgage",
    button: "Get a mortgage",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "Started a loan application?",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        description:
          "Pick up where you left off on your Zillow Home Loans dashboard.",
        descriptionClass: "text-sm",
        linksName: createLinks(
          ["Access your Plan", "/plan"]
        ),
      },
      {
        title: "Your mortgage",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Discover Zillow Home Loans", "/getAMortgage"],
          ["Calculate your BuyAbility", "/buyAbility"],
          ["Get pre-qualified", "/getPreQualified"]
        ),
      },
      {
        title: "Mortgage tools",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Estimate your mortgage payment", "/mortgageCalculator"],
          ["See current mortgage rates", "/mortgageRates"],
          ["Learn about financing a home", "/financingGuide"]
        ),
      },
    ],
  },

  "Find an agent": {
    link: "/findAnAgent",
    button: "Find an agent",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "Looking for pros?",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Real estate agents", "/findAnAgent"],
          ["Home builders", "/homeBuilders"]
        ),
      },
      {
        title: "I'm a pro",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["Agent solutions", "/agentSolutions"],
          ["Agent advertising", "/partnerWithZillow"],
          ["Agent resource center", "/agentResourceCenter"],
          ["Create a free agent account", "/agentAccount"],
          ["Real estate business plan", "/realEstateBusinessPlan"],
          ["Real estate agent scripts", "/agentScripts"],
          ["Listing flyer templates", "/listingFlyerTemplates"]
        ),
      },
    ],
  },

  "Manage rentals": {
    link: "/",
    button: "Manage rentals",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "Management tasks",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["List your property for rent", "/listRental"],
          ["View your properties", "/myProperties"],
          ["Read your messages", "/inbox"]
        ),
      },
      {
        title: "Tools for rental managers",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        linksName: createLinks(
          ["Check your property's rental value", "/rentalValue"],
          ["Screen renters with applications", "/renterApplications"],
          ["Create and manage leases", "/manageLeases"],
          ["Collect rent", "/collectRent"],
          ["Learn about renting out your property", "/rentalGuide"],
          ["Search help center", "/helpCenter"],
          ["Explore Zillow Rental Manager", "/rentalManager"]
        ),
      },
    ],
  },

  Advertise: {
    link: "/partnerWithZillow",
    button: "Advertise",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "Advertise with Zillow",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Advertising solutions", "/partnerWithZillow"]
        ),
      },
    ],
  },

  "Get help": {
    link: "/helpCenter",
    button: "Get help",
    iconSize: 16,
    buttonClass:
      "flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg",
    dropdownClass:
      "fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex",
    animationY: -15,
    sections: [
      {
        title: "How can we help?",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        linksName: createLinks(
          ["Help center", "/helpCenter"],
          ["Contact Zillow", "/contactZillow"]
        ),
      },
    ],
  },
};


// Mobile navigation uses the same data as desktop navigation
export const mobileNavigation = Object.fromEntries(
  Object.entries(navbarData).map(([key, value]) => [
    key,
    {
      link: value.link,
      sections: value.sections.map((section) => ({
        title: section.title,
        description: section.description,
        linksName: section.linksName || [],
      })),
    },
  ])
);

export const navigationItems = [
  "Buy",
  "Rent",
  "Sell",
  "Get a mortgage",
  "Find an agent",
  "Manage rentals",
  "Advertise",
  "Get help",
];
