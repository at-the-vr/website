---
title: "Dev Tooling in 2024"
description: "What Dev Tools I wanna consider when working on that next Website"
date: "2024-08-25"
draft: false
---

If you had asked me 10 years ago about Dev Tooling, My answer would be what's that. Fast forward to 2024, it has became an important aspect of my Workflow. This BlogPost talks in what ways I have changed my mind around it.

### Quick Introduction

Dev Tools short for Developer Tools can be described as utility based dependencies that aim to reduce manual work that undergoes during development phase. The whole point of them being is to assist developers with overall consistency in their Projects. Often times, these tools are integrated into the CI Pipeline to automate repetitive tasks and improve overall code quality. I will even argue this enforces collaboration among developers.

If you are using any kind of software while coding your next project, its definitely a Dev Tool. Does that makes Outlook a Dev Tool? No, its a distraction and you know it. Your IDE, the package manager, linter, formatter, build tools, debuggers, testing tools, Git itself can be summed up to a Dev Tool Platform for your use case. Going by that logic, my list is a never ending `extensions.json` but I digress. 

### The Dynamic Duo

`EsLint` & `Prettier` were the very first tools I encountered when trying to bootstrap a VueJS Project from their CLI. Once `npm install` finished, I jumped into my project directory only to stare at configuration files like they were written in ancient hieroglyphics. Why were there so many options? And why did ESLint keep yelling at me about things I'd never even considered before? After spending over an eternity going though all options, I decided to give up and continue building the project.

Turns out this default configurations save a ton of time the moment I started trusting the tool. Customizing them to my needs must be a step one that is the very first `git commit -m 'init'` or just forget about it. One makes my code look better, the other makes the logic better. I think I will go with `Prettier` and leave ESLint to its defaults.

### What are the tools I wanna consider then

- [`Biome`](https://biomejs.dev/): An amazing toolchain when it comes to linting and formatting your project faster than ever without relying on 10 different devdependencies.
- [`Localtunnel`](https://theboroer.github.io/localtunnel-www/): To be accurate, wrappers around localtunnel (`astro`, `nuxt` kind). This is a helpful utility when it comes to hosting my local dev server to be accessible on the Internet.

### Honorable Mentions

- [`Lunaria`](https://lunaria.dev/): If I ever had a need to manage localizations for my documentation, then this is the tool that I will be using to help me with that task.
- [`UnoCSS`](https://unocss.dev/): A wild atomic styling solution with with enough sprinkle on top to assist tailwindcss users like me.

### What about Testing

I would not consider Testing in any form on a content centric website as there is not a lot of content to test but read. But if needed, I will resort to [node:assert](https://nodejs.org/api/assert.html) because of my history with the API.

### Where does it Stops

In a perfect world, your framework of choice will provide you every conceivable utility you can think off. But this isn't a perfect world. The only way I found is to broaden the frame and genuinely use these tools that dozens of developers are tirelessly maintaining with the ever growing demands of Industry. 