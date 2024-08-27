---
title: "Dev Tooling in 2024"
description: "What Dev Tools I wanna consider when working on that next Website"
date: "2024-08-25"
draft: false
---

If you had asked me 10 years ago about Dev Tooling, My answer would be what's that. Fast forward to 2024, it has became an important aspect of my Workflow. This BlogPost talks in what ways I have changed my mind around it.

### Quick Introduction

Dev Tools are utility based dependencies that aim to reduce manual work that undergoes during development phase. The whole point of them being is to assist in code quality without affecting collaboration between developers.

### The Dynamic Duo

`EsLint` & `Prettier` were the very first tools I encountered when trying to bootstrap a VueJS Project from their CLI. Once `npm install` finished, I jumped into my project directory only to stare at configuration files like they were written in ancient hieroglyphics. Why were there so many options? And why did ESLint keep yelling at me about things I'd never even considered before?

### What are the tools I wanna consider then

This list will never be complete but over the past year, some tools have really shown real promising results:

- [Biome](https://biomejs.dev/): An amazing toolchain when it comes to linting and formatting your project faster than ever without relying on 10 other devdependencies.
- [UnoCSS](https://unocss.dev/): A wild atomic styling solution that even assists tailwindcss users

### What about Testing

I would not consider Testing in any form of content centric website as there is not a lot of content to test but read. But if needed, I will resort to [node:assert](https://nodejs.org/api/assert.html) because of my history with the API.


