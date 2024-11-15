---
title: "Bonfire"
image: "/content/bonfire/logo.png"
created: 2024-08-24
tags:
  - "python"
  - "flask"
  - "postgresql"
  - "api"
---

## We built a social network!
This academic year we were asked to <u>build a web app as a group project for the database course</u>, we could have chosen between an e-commerce or a social network. <br>
My group and I decided to stick with the **social network** for the freedom it would give us.

The rules were simple: "the web app must use [flask](https://flask.palletsprojects.com/en/3.0.x/), [sqlalchemy](https://www.sqlalchemy.org/) and [postgresql](https://www.postgresql.org/)", and so we did, but we were given absolute freedom in every other aspect of the project.

Since the project is already well documented [here](https://github.com/M3nny/bonfire/blob/main/README.md), on this page <u>I will only discuss some of our thought processes</u> and implementation choices.

## Quick tour
Here's a brief run-down of what bonfire looks like from the users and advertisers point of views.

### Users
The followings are the **main pages** of the social network, namely the **explore** section and **profile** section.
<img src="showcase/user_side.png" alt="user"/>

Everyone can explore bonfire, but only those with an account can interact with it, the registered users can in fact create and interact with posts and other users.

### Advertisers
The social network in addition to letting users interact with each other, must've had a focus for **advertisers**, so that they could publish **targeted ads**,
below are the **advertisers** main pages.
<img src="showcase/adv_side.png" alt="user"/>

It is possible to create several **ad campaigns**, each one with its own ads, and then it is possible to <u>monitor their performance</u> through a **dedicated dashboard**
which displays: **impressions**, **ad readings** and **clicks** over time.

## RESTful API
We decided to exchange information between the backend and frontend through **json messages** instead of using flask's built in functions, this brought us several advantages, including:
- The ability to upload content to the frontend without refreshing the page
- Facilitated parallel development with [git](https://git-scm.com/)
- Early testing of APIs testing thanks to tools like [postman](https://www.postman.com/)

Each API call is an <u>atomic database transaction</u> which uses **ORM** for querying the database, in this way the codebase is also portable to other DBMSs.

## Interests updates
Interests are represented by **tags**, which are limited and chosen by the app owner.

When creating a post, multiple tags can be included, and when another user interacts with it, the user's interests are changed according the tags in the post:
- **Increasing** the interest for the _included tags_
- **Decreasing a bit** the interest for _non included tags_

In this way we can always suggest an ad based on the user's **trending interest**.

## Ads recommendation
With each chunk of posts the server sends to the frontend, it also sends an ad, which in order to be chosen must belong to an ad campaign that has <u>enough budget to pay the expected fees</u> and that targets the user's trending interest.

Once the ad campaign is chosen the ad is picked based on the percentage of appearance selected by the advertiser.

[source code](https://github.com/M3nny/bonfire)