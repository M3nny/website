---
title: 'Open-sagra'
image: '/content/open-sagra/logo.png'
created: 2022-05-15
tags:
  - 'flask'
  - 'mysql'
---

> What's a sagra? <br>
> Here in Italy by sagra (sàgra /'sagra/) we mean a local festival.


## A small management system
This application aims to help those festivals which do not already have a management system, <br>
the software allows to **create and manage users, and resources** (e.g. dishes and ingredients in the storage).

### Installation
After installing python and git, run:
``` bash
git clone https://github.com/M3nny/open-sagra
cd open-sagra
pip install -r requirements.txt
```
After setting up the enviromental variables int he .env file, you will be ready go.

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
It is possible to easily manage proposed **dishes** via a proper web-page
<img src="showcase/alimenti.png"/>

for the **ingredients** and the **staff** it is similar, but for the ingredients you can also modify the quantity on the magazine via web-page.

#### Making an order
At the checkout the cashier will have a barebone simple interface as well as a confirm page.
<img src="showcase/checkout.png"/>

#### Forgotten password?
In the login page **it is possible to recover a password** without bothering the administrator, <br>
after following the link under the login, a recovery page will appear and then an email will be sent to the email inserted in the recovery form. <br>
The email contains a temporary link which will lead to a page to reset the password (_the link is usable only in the same session of the user who requested the password recover_).

[github repo](https://github.com/M3nny/open-sagra)