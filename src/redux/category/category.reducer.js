const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/sFfF4vz/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/Yj27hhF/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/sqmNZJf/shoes.png",
      id: 3,
      linkUrl: "shop/shoes"
    },
    {
      title: "femme",
      imageUrl: "https://i.ibb.co/sFXxpVC/femme.png",
      id: 4,
      size: "large",
      linkUrl: "shop/femme"
    },
    {
      title: "masc",
      imageUrl: "https://i.ibb.co/DkKtV8L/masc.png",
      id: 5,
      size: "large",
      linkUrl: "shop/masc"
    }
  ]
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoryReducer;
