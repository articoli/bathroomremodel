export const site = {
  name: "Eco Bathroom Remodel",
  legalName: "Eco Bathroom Remodel LLC",
  url: "https://bathroomremodelplano.com",
  phone: "+1 (972) 391-8227",
  phoneHref: "tel:+19723918227",
  email: "info@bathroomremodelplano.com",
  address: {
    street: "5700 West Plano Pkwy, Suite 1000",
    city: "Plano",
    state: "TX",
    zip: "75093",
    full: "5700 West Plano Pkwy, Suite 1000, Plano, TX 75093",
  },
  serviceArea: [
    "Plano",
    "Frisco",
    "Allen",
    "McKinney",
    "Richardson",
    "Carrollton",
    "Lewisville",
    "The Colony",
    "Dallas",
  ],
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  founded: 2014,
};

export const px = (id: number, w: number, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=${w}${
    h ? `&h=${h}&fit=crop` : ""
  }&auto=compress&cs=tinysrgb`;
