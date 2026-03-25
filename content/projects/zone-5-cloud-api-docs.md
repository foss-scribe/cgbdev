---
title: Zone5Cloud API Documentation
description: Documentation for Specialized's Zone5Cloud and Today's Plan APIs
stack:
  - Python
  - MkDocs
  - Markdown
  - Snipcart
github: 
demo: 
image: 
---

## Overview

Zone5Cloud was the API powering Today's Plan, Specialized training platform for elite endurance athletes.

## Problem

When I joined Specialized in 2020, Today's Plan was already a thriving platform that served hundreds of thousands of elite, competitive and recreational athletes, and their coaches. The API, which ran on Java (Spring Boot), had more than 1000 REST endpoints -- but no documentation, causing real pain for the company ahead of it's planned productisation of the API under the brand Zone5Cloud.

My task was to create that documentation so third-party developers could build their own fitness app and services with the API. However, the documentation needed to be embedded Zone5Cloud's admin portal (an Angular app), behind an authoriser (AWS Cognito), 

## Solution

My solution was to use MkDocs with the Material theme. As a Python developer, I knew it was maleable enough to mould it into the publishing system Specialized needed to ship multiple documentation suites from a single source.

To make the docs embeddable in an Angular app, the compiled files needed to be modified durign the CI/CD process. JavaScripts needed to be embedded correctly, theme chrome stripped back or hidden, and images converted to base 64. I handled bash and Python scripts running locally before using the AWS CLI to deploy them to S3 buckets.

It worked well, scaling to multiple documentation suites beyond the Zone5Cloud docs, allowing me to also maintain and deploy the doc the following Specialized APIs:

- Bike Registration
- Bike Settings
- Identity Service (for Mainland China)
- Suspension Calculator


### Key Features

- MkDocs-powered static website.
- Single-source publishing (multiple versions from a single repository).
- Conditional documentation.
- CI/CD deployment to AWS (S3).
- Cognito-based authentication.
- Scaled beyond a single documentation suite.

## Demo

Coming soon.

## Lessons learned

- MkDocs is a powerful documentation system, but customising it's UI is difficult if you're starting with an opinionated theme like MkDocs Material.
- Integrating MkDocs with Angular is doable, but it's something I'd not do again.
- Making your build system locally-based (only) is great for testing but not for production. I'd never deploy a suite that large from my local again.



