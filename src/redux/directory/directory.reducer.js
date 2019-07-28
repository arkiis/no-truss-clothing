const INTIAL_STATE = {
  sections: [
    {
      title: "New Arrivals",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Summer 19'",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "No Truss x Gucci",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Womens",
      imageUrl: "",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    }
  ]
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
