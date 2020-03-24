const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/qF84jt8/test-image.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/5TyFfKw/test-jacket.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/P5f4N5m/test-shoes.png",
      id: 3,
      linkUrl: "shop/shoes"
    },
    {
      title: "femme",
      imageUrl: "https://i.ibb.co/Q6dTZPV/test-femme.png",
      id: 4,
      size: "large",
      linkUrl: "shop/femme"
    },
    {
      title: "masc",
      imageUrl: "https://i.ibb.co/jbJz9S6/test-masc.png",
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
