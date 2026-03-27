---
title: DecisionPoint 3 Docs and Training programs
description: Documentation and training programs for Veda's credit decisioning platform.
stack:
    - AsciiDoc
    - AsciiDoctor
    - Ruby
    - Python
github:
demo:
image: /img/projects/dp3.png
year: 2014
---

## Overview

DecisionPoint 3 was Veda's[^1] credit decisioning and risk platform built to replace Veda's older mainframe-based system. It comprised a backend service (on prem and cloud), several web consoles, and a Microsoft Windows desktop application for credit managers to build their own credit application workflows.

## Problem

I joined Veda (later Equifax), early in DecionPoint 3's life. Built to replace an older system, DecisionPoint 3 had few users but was expected to grow rapidly. This was back in 2014, so the cloud was relatively new and hadn't made any headway into Australia's highly regulated financial industry.

My role was to write and maintain DecisionPoint 3's documentation, as well as write and deliver training programs for clients' admin and business users.

However, as platform for the highly regulad finance industry, I faced a number challenges:

- Most deployments were on-prem, especially in the early years before the Equifax aquisition
- Once clients adopted the system, they rarely updated it, meaning I had to support multiple version
- The platfom was highly customisable, and clients expected their documentation and training material to reflect their business needs and deployments.

I knew immediately that the platform's fledging documentation (written in Microsoft Word) wasn't going to scale to meet those demands, but it was 2014 and:

- Microsoft Office was entrenched in corporate Australia
- Docs-as-code wasn't common, especially outside of tech companies
- Clients wanted their documentation in PDF format - not deployed on the web


## Solution

My solution was to use AsciiDoc and the (then) relatively new [AsciiDoctor](https://asciidoctor.org) text processor and publishing system. In 2014, Markdown was immature, fragmented and had limited tooling for technical writing.

By contast, AsciiDoc was much more mature and better suited to technical writing, with standardised syntax for creating admonitions, tables, and offered conditional text and inclusions out of the box. AsciiDoc was built to make DocBook XML easier to write, making it ideal technical writers who needed to create long-form, structured documents.

I had to sell my managers on taking a gamble on this stack, and it was the promise of being able to automate production, management, and rapidly deploy changes that sold them.

AsciiDoctor gave me the ability to write and maintain thousands of release notes, user guides and training modules from the same source. By using Python, I was also able to query Jira's API and build release notes from data in Jira tickets. That way, I treated Jira as the soure of truth, and worked directly with developers and business analysts when I annotated tickets.

For publishing, I used shell scripts to compile complete documentation for each verion and client, using AsciiDoctor to compile docs to HTML, then PrinceXML to generate PDFs. The same script then deployed to complete catalogue to a network share for our delivery teams to share with clients.

### Key features

- Docs-as-code using conditional text to tailor documentation to products, clients and release versions
- Automated release notes generation (Python and Jira)
- Automated publishing

## Examples

### User guide: Managing HEM in DecisionPoint 3

A user guide demonstrating how to convert and upload Household Expenditure Measure (HEM) data into DecisionPoint 3. By following this guide, clients were to manage their quarterly HEM updates and use the data in their credit application solutions without relying on Equifax's delivery team.

The document was produced using Asciidoctor and managed as part of a single Git repository containing over a hundred and fifty documents and thousands of re-usable document fragments. From the asciidoc source, the manual was published [PDF](/files/dp3_hem/dp3_hem.pdf) formats.

As with all documents in this suite, the HEM guide was assembled from multiple fragments and includes conditional logic which enabled the production of multiple versions containing client- and release-specific content. To build these versions, I created a Ruby script that automatically generated each version as HTML then converted the resulting files to PDF using PrinceXML.

## Lessons learned

- AsciiDoc is the best markup language for technical writers because it's so expressive and feature-rich
- AsciiDoctor is an outstanding system when you want to build a traditional suite of documents delivered as PDF
- Rebranding 1000s of documents in minutes (when the parent company allocated 3 months and an eyewatering budget) really impresses management!


[^1]: Later Equifax Australia