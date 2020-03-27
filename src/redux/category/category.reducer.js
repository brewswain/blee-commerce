const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/tKj8dqx/test-hat-new.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/17YwGs4/test-image-new.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/4fqhtdv/test-shoes.png",
      id: 3,
      linkUrl: "shop/shoes"
    },
    {
      title: "femme",
      imageUrl: "https://i.ibb.co/Ss5wSQX/test-femme.png",
      id: 4,
      size: "large",
      linkUrl: "shop/femme"
    },
    {
      title: "masc",
      imageUrl: "https://i.ibb.co/9bBRdPt/test-masc.png",
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
