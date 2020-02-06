import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/sFfF4vz/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/Yj27hhF/jackets.png",
          id: 2,
          linkUrl: "jackets"
        },
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/sqmNZJf/shoes.png",
          id: 3,
          linkUrl: "shoes"
        },
        {
          title: "femme",
          imageUrl: "https://i.ibb.co/sFXxpVC/femme.png",
          id: 4,
          size: "large",
          linkUrl: "femme"
        },
        {
          title: "masc",
          imageUrl: "https://i.ibb.co/DkKtV8L/masc.png",
          id: 5,
          size: "large",
          linkUrl: "masc"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
