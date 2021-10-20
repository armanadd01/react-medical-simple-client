# Medical Health Care Site

This project deployed on [FireBase: https://medical-healthcare-assign.web.app/](https://medical-healthcare-assign.web.app/).

## 

In the project src folder user can find a component folder, 
Here some short description or details of those folders

### `App.js`

In `App.js` file you can see the Router of this website. I just simply rename the `BrowserRoter as Router` and I use Header Component before the `Switch` and footer after the `Switch` for show in all pages.I use `Navlink` instant of a tag for load the data without loading the site. And also use a private route for not accesable component 

### `Header`

In Header Component, site details added. 
user can fiend here Two Services header div. One is `top-header` and `header-bottom`
`top-header` contain Header information like "The porupose of this project total Budget of the concert and a short text about project" and `header-bottom` contain site logo and navigation and as well as login button. 


### `Services`

In `Services` component lots of thing added here. 
In this component all the  `JSON` data fetched here by using `useState` and `useEffect`
This Services component pass data to `Service`.
On `return` of data I returned `Service` component data under the hood of Service-container by using `.map` method and pass a unique key. 


### `Doctor`

This `Doctor` component is one of the Services component of this projects here user shaw Teacher/trainer information. 
This Component can .map an array and pass data to `Doctor` component. 

### `Service Details`

This `ServiceDetails` is a private component nobody can access this component without log in. when a user log in into the site user can able t access the service details.

### `Doctor Details`

This `Doctor Details` is a private component nobody can access this component without log in. when a user log in into the site user can able t access the doctor details.

### `Login`
This `Login` component can helps a user to log/sign into the site. Two types of log in and authentication are used in  site. one is email password based login/sign in and other is google based log in. when a user first visit the sure user can register. 

**Note:  `Firebase` Authentication are used for user Authentication and Authorization**

This `About` component can show up the About data and Teacher data as well. 
user can shaw 3 data updated


for icon  I use `FontAwesome` . And for Css I use `React-Bootstrao` and I also added some custom css. 

## Thanks Giving

**Thanks for visiting my react authentication project:smiley: :smiley: :smiley:**