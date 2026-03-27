---
title: Projects API
description: A simple API that returns a list of my projects.
stack:
  - TypeScript
  - Nuxt
  - Cloudflare
github: https://github.com/foss-scribe/cgbdev/blob/master/server/api/projects.ts
demo:  https://chrisgb.dev/api/projects/
image: /img/projects/projects-api.png
year: 2026
---

## Overview

A simple REST API that returns a list of the projects on this site. Mostly created for demonstration purposes, but also used internally.

## Solution

This site uses Nuxt Content and stores project files as markdown with yaml frontmatter. Since Nuxt is a full-stack framework and its content querying API is available to both client and server, creating a simple RESTFul endpoint to return a JSON-formated list of projects is trivial.

```typescript
// /server/api/projects.ts
export default eventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const contentLibProjects = await queryCollection(event, 'projects').order('year', 'ASC').all()

  const projects = contentLibProjects.map((project) => {
    return {
      title: project.title,
      description: project.description,
      stack: project.stack,
      github: project.github,
      demo: project.demo,
      url: `${config.public.siteUrl}${project.path}`,
      image:`${config.public.siteUrl}${project.image}`,
      year: project.year,
    }
  })

  return projects
})
```


## Demo

The endpoint is publicly available. To test it, visit <https://chrisgb.dev/api/projects/> or run the following command:

```bash
curl https://chrisgb.dev/api/projects/
```

The endpoint returns the following response:

```json
[
  {
    "title": "DecisionPoint 3 Docs and Training programs",
    "description": "Documentation and training programs for Veda's credit decisioning platform.",
    "stack": [
      "AsciiDoc",
      "AsciiDoctor",
      "Ruby",
      "Python"
    ],
    "github": null,
    "demo": null,
    "url": "http://localhost:3000/projects/decisionpoint3",
    "image": "http://localhost:3000/img/projects/dp3.png",
    "year": "2014"
  },
  {
    "title": "Zone5Cloud API Documentation",
    "description": "Documentation for Specialized's Zone5Cloud and Today's Plan APIs",
    "stack": [
      "Python",
      "MkDocs",
      "Markdown",
      "Snipcart"
    ],
    "github": null,
    "demo": null,
    "url": "http://localhost:3000/projects/zone-5-cloud-api-docs",
    "image": "http://localhost:3000/img/projects/zone-5-cloud-docs.png",
    "year": "2020"
  },
  {
    "title": "Training Plan Store",
    "description": "A static HTML storefront used to sell training plans for cyclists using Snipcart and Today's Plan.",
    "stack": [
      "Hugo",
      "Bootstrap",
      "JavaScript",
      "Snipcart"
    ],
    "github": "https://github.com/foss-scribe/tp-dj-plans-ecommerce",
    "demo": "https://tp-dj-plans-ecommerce.netlify.app",
    "url": "http://localhost:3000/projects/training-plan-store",
    "image": "http://localhost:3000/img/projects/tp-dj-plans-ecommerce.png",
    "year": "2022"
  },
  {
    "title": "Projects API",
    "description": "A simple API that returns a list of my projects.",
    "stack": [
      "TypeScript",
      "Nuxt",
      "Cloudflare"
    ],
    "github": "https://github.com/foss-scribe/cgbdev/blob/master/server/api/projects.ts",
    "demo": "https://chrisgb.dev/api/projects/",
    "url": "http://localhost:3000/projects/projects-api",
    "image": "http://localhost:3000/img/projects/zone-5-cloud-docs.png",
    "year": "2026"
  }
]
```

