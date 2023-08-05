---
title: 'Weeky-games'
image: '/content/weeky-games/logo.svg'
created: 2022-07-14
tags:
  - 'front-end'
  - 'api'
---

## What is weeky-games?
[Weeky-games](https://weekygames.deno.dev/) was born because the _epic games client_ that gives out free games every week is slow on starting,
so only to check new releases you would have to wait the client updating and starting. <br>

With this site, on the other hand, it is possible to have a **quick look** at the releases, the related trailer, and the day of release. <br>
I used two APIs, one to get the weekly releases and the other to find the trailer from youtube.

### Why fresh 🍋?
The [fresh framework](https://fresh.deno.dev/) uses the _partial hydration_ technique, <br>
this means that a _static page_ is sent to the client after being elaborated by the server, alongside **javascript only for areas that needs it**. <br>
This will result in fact in a faster loading of the website.

[github repo](https://github.com/M3nny/Weeky-Games)