<h1 align="center">Presize.io</h1>

<p align="center">
  <a href="https://discord.gg/Wsy2NpnZDu"
    ><img
      alt="Discord"
      src="https://img.shields.io/discord/1439901831038763092?style=flat-square&label=discord"
  /></a>
</p>


<p align="center">
Bulk Preprocess, Resize and Crop Your Images.
</p>

<p align="center">🌐 <a href="https://www.presize.io">Website</a></p>

## About this repo
[![build](https://github.com/atinylittleshell/presize/actions/workflows/build.yml/badge.svg)](https://github.com/atinylittleshell/presize/actions/workflows/build.yml)

Presize.io is open-source with MIT license. Any contribution is highly appreciated!

### Package manager

This repository is a monorepo that uses pnpm as the package manager. If you don't have pnpm installed, you can install it with npm:

```bash
npm install -g pnpm
```

Read more about pnpm [here](https://pnpm.io/).

### Apps and Packages

- `apps/web`: a [qwik](https://qwik.builder.io/) app that serves the Presize.io website
- `packages/eslint-config-custom`: `eslint` configurations for this repository
- `packages/tsconfig`: `tsconfig.json`s used throughout the monorepo

## Install dependencies

Once you have pnpm setup, run the following command to install dependencies.

```bash
pnpm install
```

## Running the app

To start the app locally, run

```bash
pnpm -r dev
```
