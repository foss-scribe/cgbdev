---
title: Training Plan Store
description: A static HTML storefront used to sell training plans for cyclists using Snipcart and Today's Plan.
stack:
  - Hugo
  - Bootstrap
  - JavaScript
  - Snipcart
github: https://github.com/foss-scribe/tp-dj-plans-ecommerce
demo: https://tp-dj-plans-ecommerce.netlify.app
image: /img/projects/tp-dj-plans-ecommerce.png
---

## Overview

When YouTuber and elite cycling coach, [Dylan Johnson](https://www.youtube.com/channel/UCIf1xvRN8pzyd_VfLgj_dow) approached [Today's Plan](https://www.todaysplan.com.au) to sell training plans for amature and professional cyclists, I was tasked with creating the solution.

## Problem

Today's Plan was a highly regarded training platform built for cyclists and triathletes. Its customers included national cycling teams and Tour de France compettitors. However, for much of it's history it didn't cater to the mass-market, and lacked the ability to sell training plans direct to users.

That changed in 2023, and Today's Plan teamed up with Dylan Johnson Training, who was looking to sell plans directly to Today's Plan users, as he was already doing with comptetitor, Training Peaks.

Dylan wanted to sell the plans directly from his website, so the Today's Plan team created server-side support and hooks, but no front-end store. And, because Dylan was a high-profile YouTuber, Today's Plan decided to build Dylan a branded shop front at now cost, and maintain it into the future.

## Solution

I was tasked with building the solution because I'd already build several API integrations for Today's Plan coaches. Most of those had been simple Python Scripts or Wordpress plugins (to generate leaderboards and reports), and this was the first time I had build something as complex as an e-commerse site.

Because of time constraints, and Dylan's existing tech stack, I decided to build a static website using Hugo, Bootstrap and Snipcart. This kept costs and ongoing maintenance to a minimum.

We hosted the site as a subdomain of his main website, using Netlify. Snipcart, an e-commerce site that works well the JamStack applications, supported Dylan's payment provider of choice.


### Key Features

- Hugo-powered static site deployed on Netlify using CI/CD
- Training plan data stored in JSON
- Dylan created plans in Today's Plan
- Dylan managed customers and payments independently of Today's Plan using Snipcart

## Demo

## Lessons Learned

- Static sites and the JamStack are a great way to solve a problem cheaply and quickly.
- Getting non-technical users to update their DNS records can be a challenge.
