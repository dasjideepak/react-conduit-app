## Creating Conduit using React Hooks and Formik

### Basic Informations:

- BASE URL: https://mighty-oasis-08080.herokuapp.com/api/

### API Info:

- List of tags (GET)

  - /api/tags

- Login (POST)

  - /api/user
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123"}}`

- Signup (POST)

  - /api/users
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123", username: "test123"}}`

- Signup (POST)

  - /api/users
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123", username: "test123"}}`

- Verify User (GET)

  - /api/user
  - You need to add `authorization: Token ..`

- Public Articles (GET)
  - /api/articles?limit=10&offset=0

### Tech Stack

- React Hooks
- Formik

### Steps

#### Day 1

- [ ] React + React Router DOM + Formik setup
- [ ] Home Page (Public)
- [ ] Login Page
- [ ] Signup Page
- [ ] Private Articles Page
- [ ] Complete Authentication

> React + React Router DOM + Formik setup

Setup create react app with the following requirements:

- Install `react-router-dom`
- Install `formik`
- Setup `BrowserRouter` in `App` component

> Home Page (Public)

- List of 10 articles with title, description and read more button
- List will be in the form of cards
- Each card will contain tag, title, description (max 120 characters) and author info at the bottom
- Author info will contain image, name and data article is posted

> Login Page

- Email Field
- Password Field
- Login Button
- Each field (email, and password) should contain client side form validation
  - Email should contain `@`
  - Password should be at-least 6 characters
  - Password must contain a letter and a number
  - No fields can be empty

> Signup Page

- Email Field
- Password Field
- Username Field
- Signup Button
- Each field (email, and password) should contain client side form validation

  - Email should contain `@`
  - Password should be at-least 6 characters
  - Password must contain a letter and a number
  - No fields can be empty
  - Username should be at-least 6 characters long

> Private Articles Page

- List of 10 articles with title, description and read more button
- List will be in the form of cards
- Each card will contain tag, title, description (max 120 characters) and author info at the bottom
- Author info will contain image, name and data article is posted

> Complete Authentication

- Flow will be `login => if accurate data => private articles page`
- Flow will be `signup => if account created => private articles page`
- Hard refresh will validate and move to respective pages
