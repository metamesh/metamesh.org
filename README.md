# [Deprecated] Meta Mesh Website

As of April 2021, the metamesh.org site is now maintained in Squarespace. This repository is no longer used.

## Original README

![Publish Status](https://github.com/metamesh/metamesh.org/workflows/Publish%20Site%20to%20GitHub%20Pages/badge.svg)


1. Pull site down with `git clone https://github.com/metamesh/metamesh.org.git`
2. After Hugo is installed locally, `hugo server` starts the livereload local server
3. Developing with SCSS? Do this:
  - Navigate to `themes.hugo-theme-meshna/assets`
  - Install appropriate NPM files with `npm i -D`
  - Start up Gulp with `gulp`
  - Make changes to `sass/style.scss`


[Forestry.io](Forestry.io) stores and fills all standalone pages, but if you want to see them they're in `content/english/...` 

The base HTML formatting lives in `layouts/_default/standalone.html`. Partials can be found in `layouts/partials`.

