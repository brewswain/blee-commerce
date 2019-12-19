# Blee-commerce

This project was began the 19th December, 2019.

---

This project is made with React and simulates an eCommerce platform. My goal is to create my own platform that builds on the lessons taught in my React course, but has my own design while following certain design principles.

## Technologies used

- React
- Redux
- Sagas
- Firebase
- Auth0
- Potentially GraphQL
- Express.js

# Site Overview

## HomePage

This homepage utilizes React-Router-DOM to aid in navigation, as seen in the files:

- directory-component.jsx
- menu-item.component.jsx

In the initial iteration, I used state to provide options to the menu-items as props in my directory component, including the hat's section's "linkUrl' property. Then, inside my menu-item component, I used the withRouter HOC to provide it access to match and history props.

I used history.push() to make our MenuItems send us to a dynamically generated url based on the linkUrl provided:

```
    onClick={() => history.push(`${match.url}${linkUrl}`)}
```

This demonstrates the ability to dynamically Route as needed.
