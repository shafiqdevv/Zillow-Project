
export const navbarData = {
  Buy: {
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
        links: [
          "Homes for sale",
          "New construction",
          "Foreclosures",
          "Coming soon",
          "For sale by owner",
          "Recent home sales",
          "Open houses",
          "All homes",
        ],
      },
      {
        title: "Resources",
        sectionClass:
          "border-l border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        links: [
          "Home Buying Guide",
          "Foreclosure center",
          "Real estate app",
          "Down payment assistance",
          "Find a buyer's agent",
        ],
      },
    ],
  },

  Rent: {
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
      p-8 gap-20
      flex
    `,
    animationY: -20,
    sections: [
      {
        title: "Rental listings",
        sectionClass: "flex flex-col gap-5 mt-10",
        contentClass: "grid gap-5",
        links: [
          "Search apartments for rent",
          "Search houses for rent",
          "Search all rental listings",
          "Browse all rental buildings",
        ],
      },
      {
        title: "Tools for renters",
        sectionClass: `
          border-l-[1px] border-gray-500
          pl-6 flex flex-col gap-5 mt-10
        `,
        contentClass: "grid grid-cols-2 gap-5",
        links: [
          "Estimate what you can afford",
          "See your application",
          "Manage your tours",
          "Pay your rent",
          "Build your credit",
          "Get renters insurance",
          "Explore housing voucher programs",
          "Learn more about renting",
        ],
      },
    ],
  },

  Sell: {
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
        links: [
          "Explore your options",
          "See your home's Zestimate",
          "US housing market",
          "Sellers guide",
        ],
      },
      {
        title: "Selling options",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        links: [
          "Find a seller's agent",
          "Post For Sale by Owner",
        ],
      },
    ],
  },

  "Get a mortgage": {
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
        links: ["Home loans dashboard"],
      },
      {
        title: "Your mortgage",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        links: [
          "Discover Zillow Home Loans",
          "Calculate your BuyAbility",
          "Get pre-qualified",
        ],
      },
      {
        title: "Mortgage tools",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "flex flex-col gap-5",
        links: [
          "Estimate your mortgage payment",
          "See current mortgage rates",
          "Learn about financing a home",
        ],
      },
    ],
  },

  "Find an agent": {
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
        links: [
          "Real estate agents",
          "Home builders",
        ],
      },
      {
        title: "I'm a pro",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        links: [
          "Agent solutions",
          "Agent advertising",
          "Agent resource center",
          "Create a free agent account",
          "Real estate business plan",
          "Real estate agent scripts",
          "Listing flyer templates",
        ],
      },
    ],
  },

  "Manage rentals": {
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
        links: [
          "List your property for rent",
          "View your properties",
          "Read your messages",
        ],
      },
      {
        title: "Tools for rental managers",
        sectionClass:
          "border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10",
        contentClass: "grid grid-cols-2 gap-5",
        links: [
          "Check your property's rental value",
          "Screen renters with applications",
          "Create and manage leases",
          "Collect rent",
          "Learn about renting out your property",
          "Search help center",
          "Explore Zillow Rental Manager",
        ],
      },
    ],
  },
};


// Original mobile navigation data

export const mobileNavigation = {
  Buy: [
    {
      title: "Homes for sale",
      links: [
        "Homes for sale",
        "New construction",
        "Foreclosures",
        "Coming soon",
        "For sale by owner",
        "Recent home sales",
        "Open houses",
        "All homes",
      ],
    },
    {
      title: "Resources",
      links: [
        "Home Buying Guide",
        "Foreclosure center",
        "Real estate app",
        "Down payment assistance",
        "Find a buyer's agent",
      ],
    },
  ],

  Rent: [
    {
      title: "Rental listings",
      links: [
        "Search apartments for rent",
        "Search houses for rent",
        "Search all rental listings",
        "Browse all rental buildings",
      ],
    },
    {
      title: "Tools for renters",
      links: [
        "Estimate what you can afford",
        "See your application",
        "Manage your tours",
        "Pay your rent",
        "Build your credit",
        "Get renters insurance",
        "Explore housing voucher programs",
        "Learn more about renting",
      ],
    },
  ],

  Sell: [
    {
      title: "Resources",
      links: [
        "Explore your options",
        "See your home's Zestimate",
        "US housing market",
        "Sellers guide",
      ],
    },
    {
      title: "Selling options",
      links: [
        "Find a seller's agent",
        "Post For Sale by Owner",
      ],
    },
  ],

  "Get a mortgage": [
    {
      title: "Started a loan application?",
      description:
        "Pick up where you left off on your Zillow Home Loans dashboard.",
      links: ["Home loans dashboard"],
    },
    {
      title: "Your mortgage",
      links: [
        "Discover Zillow Home Loans",
        "Calculate your BuyAbility",
        "Get pre-qualified",
      ],
    },
    {
      title: "Mortgage tools",
      links: [
        "Estimate your mortgage payment",
        "See current mortgage rates",
        "Learn about financing a home",
      ],
    },
  ],

  "Find an agent": [
    {
      title: "Looking for pros?",
      links: [
        "Real estate agents",
        "Home builders",
      ],
    },
    {
      title: "I'm a pro",
      links: [
        "Agent solutions",
        "Agent advertising",
        "Agent resource center",
        "Create a free agent account",
        "Real estate business plan",
        "Real estate agent scripts",
        "Listing flyer templates",
      ],
    },
  ],

  "Manage rentals": [
    {
      title: "Management tasks",
      links: [
        "List your property for rent",
        "View your properties",
        "Read your messages",
      ],
    },
    {
      title: "Tools for rental managers",
      links: [
        "Check your property's rental value",
        "Screen renters with applications",
        "Create and manage leases",
        "Collect rent",
        "Learn about renting out your property",
        "Search help center",
        "Explore Zillow Rental Manager",
      ],
    },
  ],

  Advertise: [
    {
      title: "Advertise with Zillow",
      links: ["Advertising solutions"],
    },
  ],

  "Get help": [
    {
      title: "How can we help?",
      links: ["Help center", "Contact Zillow"],
    },
  ],
};


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
