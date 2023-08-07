---
title: 'Open-sagra'
image: '/content/open-sagra/logo.png'
created: 2022-05-15
tags:
  - 'python'
  - 'flask'
  - 'mysql'
---

> What's a sagra? <br>
> Here in Italy, a sagra (sàgra /'sagra/) is a local festival.


## A small management system
This application aims to help those festivals which do not already have a management system, <br>
the software allows to **create and manage users, and resources** (e.g. dishes and ingredients in the storage).

### The tech stack
The backend is built with _python_ using the [flask](https://flask.palletsprojects.com/) framework to interact dinamically with the webpages and to
make queries to the _MySQL_ database.
The front-end uses [bootstrap](https://getbootstrap.com/) for the UI.

### User Experience
> You can open the images at full resolution in another page
<img src="showcase/login.png"/>

Every user has **limited visibility** (e.g. the bartender will only be able to see the order page) except for the admin. <br>
<img src="showcase/dashboard.png"/>

#### Managing resources
It is possible to easily manage proposed **dishes** via a dedicated web-page
<img src="showcase/alimenti.png"/>

for the **ingredients** and the **staff** it is similar, but for the ingredients you can also modify the quantity on the storage via web-page.

#### Making an order
At the checkout the cashier will have a barebone simple interface as well as a confirm page.
<img src="showcase/checkout.png"/>

after confirming the order, the ingredients in the database will be decreased automatically according to the dishes that have been ordered. <br>
The **history of past orders** will also be visible on a dedicated page.

#### Printing the receipt
If you have [lpr](https://man7.org/linux/man-pages/man1/lpr.1.html) installed and configured with a compatible thermal printer,
you will also receive a paper version of the receipt.

#### Forgotten password?
In the login page **it is possible to recover a password** without bothering the administrator, <br>
after following the link under the login, a recovery page will appear and then an email will be sent to the email inserted in the recovery form. <br>
The email contains a temporary link which will lead to a page to reset the password (_the link is usable only in the same session of the user who requested the password recover_).

[source code](https://github.com/M3nny/open-sagra)