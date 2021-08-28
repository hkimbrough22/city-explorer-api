# City Explorer API

**Author**: Haustin Kimbrough
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

City Explorer is a React application that queries the user(s) for a location (city), request an API from [LocationIQ](https://locationiq.com/), and then display that location through imagery/mapping. City Explorer also informs users of request errors. City Explorer API allows users to query three different cities, searches a local .JSON file for one of three cities and renders a weather forecast for them or an error if none of those cities were selected.

### Day 1 WRRC

![WRRC](./img/wrrc.png)

### Day 2 WRRC

![WRRC](./img/wrrc2.png)

### Day 3 WRRC

![WRRC](./img/wrrc3.png)

### Day 4 WRRC

![WRRC](./img/wrrc4.png)

### Day 5 WRRC

![WRRC](./img/wrrc5.jpg)

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
In order to build City Explorer API, you need to create a GitHub repository, clone it down to your local machine, run npm init in your terminal and npm install express, dotenv, and cors. This will set up the machine appropriately.

Create and import the data.json file in here to have something to render for users.

You will need to setup a way to communicate with the front-end.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Back-end is ran through Node.js with JS, front-end is using React with JS, styling is using React-bootstrap and CSS3. Front-end calls for APIs from LocationIQ.

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

### Lab07 - Feature 1

Name of feature: Weather

Estimate of time needed to complete: 150 minutes

Start time: 16:22

Finish time: 19:30

Actual time needed to complete: 188 minutes

### Lab07 - Feature 2

Name of feature: Error

Estimate of time needed to complete: 60 minutes

Start time: 22:00

Finish time: 22:56

Actual time needed to complete: 56 minutes

### Lab08 - Feature 1

Name of feature: Weather (live)

Estimate of time needed to complete: 120 minutes

Start time: 14:00

Finish time: 16:26

Actual time needed to complete: 146 minutes

### Lab08 - Feature 2

Name of feature: Movies

Estimate of time needed to complete: 45 minutes

Start time: 17:50

Finish time: 21:29

Actual time needed to complete: about 120 minutes

### Lab08 - Feature 3

Name of feature: Publish

Estimate of time needed to complete: 45 minutes

Start time: 22:00

Finish time: Next day, 10:00

Actual time needed to complete: altogther about 180 minutes

### Lab09 - Feature 1

Name of feature: Refactor

Estimate of time needed to complete: 45 minutes

Start time: 13:47

Finish time: 14:50

Actual time needed to complete: 63 minutes

### Lab10 - Feature 1

Name of feature: Performance

Estimate of time needed to complete: 180 minutes

Start time: 18:23

Finish time: _____

Actual time needed to complete: _____

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
- Marco helped me create the WRRC for day 1.
- [Christopher Burk](https://github.com/cburk2019) help me to create the WRRC for day 2.
- [Patrick Laurion](https://github.com/plaurion1989) helped me create the WRRC for day 3.
- [Joe Ivans](https://github.com/joeivans) helped me create the WRRC for day 4.
- [Code Fellows Code 301 Class Repo](https://github.com/codefellows/seattle-code-301d77) for .gitignore.
- TAs [Chance Harmon](https://github.com/ChanceHarmon) and [Hexx King](https://github.com/HexxKing) helped a ton with Lab 08 - Feature 1.
- Volunteered my code for code review on 26 August 2021 and we fixed my Lab 08 - Feature 3 functionality together.
- Used this [response](https://stackoverflow.com/a/66580009) for figuring out the Date functionality of serverStatus.js.
- [Kason Braley](https://github.com/KasonBraley) helped me create the WRRC for day 5.
