# nosuitjobs

## Docs

- [Contributing](#contributing)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)

### First time setup

The first step to running Nosuitjobs locally is downloading the code by cloning the repository:

```sh
git clone git@github.com:nosuitjobs/nosuitjobs.git
```
 If you get `Permission denied` error using `ssh` refer [here](https://help.github.com/articles/error-permission-denied-publickey/)
or use `https` link as a fallback.
```sh
git clone https://github.com/nosuitjobs/nosuitjobs.git
```

#### Installation

1. **Install RethinkDB**: See [the RethinkDB documentation](https://rethinkdb.com/docs/install/) for instructions on installing it with your OS.
2. **Install yarn**: We use [yarn](https://yarnpkg.com) to handle our JavaScript dependencies. See [the yarn documentation](https://yarnpkg.com/en/docs/install) for instructions on installing it.

Once you have RethinkDB and yarn installed locally its time to install the JavaScript dependencies by running `yarn` in the root folder.

#### Migrating the database

When you first download the code and want to run it locally you have to migrate the database and seed it with test data. First, start rethinkdb in its own terminal tab:

```sh
rethinkdb
```

Then, in a new tab, run these commands:

```sh
yarn run db:migrate
yarn run db:seed
# ⚠️ To empty the database (e.g. if there's faulty data) run yarn run db:drop
```

There's a shortcut for dropping, migrating and seeding the database too:
```sh
yarn run db:reset
```
