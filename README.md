# terraform

loopback-next-lean-starter

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

A lean approach for loopback-next projects.

Major modifications are:

- Changed code-formatting to eliminate semicolons and trailing commas. 
- Added `oasgraphql` for GraphQL server auto-generation.
- Implemented `dev` and `watch` scripts supporting live reloading.
- Pruned all the linting scripts to a single `lint` script.
- Removed other non-essential scripts.
- Minimized `.vscode` config.

# Developer's Guide

We use Visual Studio Code for developing LoopBack and recommend the same to our
users.

## VSCode setup

Install the following extensions:

 - [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
 - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
 
## Development workflow

### Visual Studio Code

1. Start the build task (Cmd+Shift+B) to run TypeScript compiler in the
   background, watching and recompiling files as you change them. Compilation
   errors will be shown in the VSCode's "PROBLEMS" window.

### Other editors/IDEs

1. Open a new terminal window/tab and start the continous build process via
   `npm run build:watch`. It will run TypeScript compiler in watch mode,
   recompiling files as you change them. Any compilation errors will be printed
   to the terminal.
