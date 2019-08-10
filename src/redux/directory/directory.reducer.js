const INITIAL_STATE = {
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
      imageUrl: "../../assets/images/womens-menu.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "Mens",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2447/5525/files/SU19-KAPPA-MAINLINE-EDITORIAL_17-_3_300x.jpg?v=1560451029",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
