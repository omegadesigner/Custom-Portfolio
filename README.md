# Custom Portfolio

## Overview

_**Custom Portfolio** Is an open source free to use portfolio starter. The idea is that someone can clone down the git repo and deploy the site to heroku and netlify, or whatever package their chip they choose, and then adjust the username and password for custom login. At that point they will be able to add examples of their project work, skills they wish to showcase, and receive messages from anyone browsing the site who wishes to contact them. They will be able to add edit and delete new projects and skills along with being able to delete read messages._


<br>

## MVP

_The **Custom Portfolio** MVP Is a working portfolio starter set that will allow a user to login to add projects and skills, as well as update their contact information and view messages left by visitors._

<br>

### Goals

- _Admin User Login_
- _Update login credentials_
- _Update Contact Info_
- _Full CRUD for Project list_
- _Full CRUD for Skill list_
- _Provide Contact Methods_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front End Framework_ |
|   React Router   | _Needed for routing links_ |
| React Router Dom | _Needed for routing links_  |
|       Rails      | _Back End Framework_ |
|       Axios      | _Needed for making API Calls_ |
|     Rack Cors    | _Needed for making API Calls_ |
|       Bcrypt     | _Needed for password authentication_ |
|        JWT       | _Needed for token system_ |

<br>

### Client (Front End)

#### Wireframes

[Wireframes](https://whimsical.com/custom-portfolio-wireframes-6jeAMoKDLw4T77Ar7aqwdw)

#### Component Hierarchy


``` structure

src
|__ components/
      |__ ProjectCards.jsx
      |__ ProjectDetails.jsx
      |__ EditProject.jsx
      |__ AddProject.jsx
      |__ SkillsList.jsx
      |__ SkillCards.jsx
      |__ EditSkill.jsx
      |__ AddSkill.jsx
      |__ UpdateAdmin.jsx
      |__ UpdateContact.jsx
      |__ MessageCards.jsx
      |__ MessageDetails.jsx
|__ containers/
      |__ MainContainer.jsx
|__ shared/
      |__ Layout.jsx
      |__ Navbar.jsx
      |__ Footer.jsx
|__ screens/
      |__ Home.jsx
      |__ Projects.jsx
      |__ Messages.jsx
      |__ UserOptions.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.jsx
      |__ projects.jsx
      |__ skills.jsx
      |__ messages.jsx

```

#### Component Tree

[Component tree](https://whimsical.com/custom-portfolio-component-tree-73E1t7K2bZDzynCoEa6dvY)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Boilerplate |    H     |     3 hrs      |    N/A hrs    |     TBD     |
| Create Migrations   |    H     |     3 hrs      |    N/A hrs    |     TBD     |
| Create Associations |    H     |     3 hrs      |    N/A hrs    |     TBD     |
| CRUD for Projects   |    H     |     2 hrs      |    N/A hrs    |     TBD     |
| CRUD for Skills     |    H     |     2 hrs      |    N/A hrs    |     TBD     |
| CRUD for Admin      |    H     |     2 hrs      |    N/A hrs    |     TBD     |
| Reactapp Boilerplate|    H     |     3 hrs      |    N/A hrs    |     TBD     |
| Create Screens      |    H     |     6 hrs      |    N/A hrs    |     TBD     |
| Work on list renders|    H     |     2 hrs      |    N/A hrs    |     TBD     |
| CSS Screens         |    H     |     6 hrs      |    N/A hrs    |     TBD     |
| CSS Components      |    H     |     6 hrs      |    N/A hrs    |     TBD     |
| Working on Popups   |    H     |     6 hrs      |    N/A hrs    |     TBD     |
| TOTAL               |          |     41 hrs     |    N/A hrs    |     TBD     |
<br>

### Server (Back End)

#### ERD Model

[ERD Model](https://whimsical.com/custom-portfolio-relational-Pb9LAbELZFAW5h25CF4wSJ)

<br>

***

## Post-MVP

- _Recieve, view and delete messages_
- _Pre-seeded Skill list_
- _Filter by Skills for projects_
- _Download Resume section_
- _References section_

***

## Code Showcase

```
Code Goes Here
```

## Code Issues & Resolutions

None yet
