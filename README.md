# This is a seed for your Command Line Interface (CLI) with TypeScript!

### TL;DR

How many times do you want to make your command or program?  
Today you can quickly make one with node/npm and TypeScript!

With this seed, you can create your own in a couple of minutes and publish it on [npmjs.com](https://www.npmjs.com/) registry to share to your team or the community!

![](docs/img/wow.webp)

This seed has an example with a simple sum of numbers.

If you want to try it, install it with: `npm i -g seed-cli-ts` and in your terminal: `suma 1 2` (yes, the command is "suma")


---

### Features

* Lots of preconfigure files that do not need to modify.
* Just change/create `*.ts` files!
* You can check it quickly.
* Ready to publish!
* Documentation.

**Powered by:**

* TypeScript & ES6 by [babel](https://babeljs.io/docs/en/babel-preset-typescript)
* Test by [Jest](https://jestjs.io/)
* Coverage by [Istanbul](https://istanbul.js.org/)
* Linter configured by [ESlint](https://eslint.org/)

### Scripts

`npm start` Launch babel compiler with TypeScript to validate your code in hot-reload mode.  
`npm test` Launch the tests with jest (`*.spec.js` files).  
`npm run build` Build in developer mode (with maps).   
`npm run coverage` Launch the test with coverage report.  
`npm run lint` Launch linter for code style.  
`npm run tsc` Launch typescript compiler for validating your code.   
`npm run build-types` Launch typescript compiler to create types in `dist/types` folder.  
`npm run build-prod` Build the application to be ready to publish in [npmjs.com](https://www.npmjs.com/).  


### How to use it?

**Requirements:**  
* Node and npm installed
* git client installed

This is a seed/boilerplate/bootstrap/sample, so, you need to clone it and work on it.

The following steps are recommended:  

#### Change the repo

* Clone it (`git clone https://github.com/crystian/seed-cli-ts`)
* Remove `.git` folder (`rm -rf .git`)
* Create an empty git repo. (`git init`)
* Commit all files. (`git add -A && git commit -m "initial"`)
* Push on your git remote (`git remote add ...`).

#### Change the project

* `Package.json`:   
    `name`: Rename to whatever you want (but, remember if you publish it, need to be unique on npmjs)  
    `main` & `bin`: Rename to another name, it will be **the command!**  
    Change other properties. 
* `suma.ts`:  
    Rename this file to the same you put on `main` in `package.json`.  
* Change all files on lib to your project, remember the tests!
* Obviously! You can change any file!

#### Working on it

* `npm i` to install dependencies
* `npm start` to build your code immediately, and you can test it:  
    On your terminal type: `node bin/suma.js` (the name of your main file)
* `npm test` remember!
* `npm lint` remember!

#### Publish it!

Once you finish it, you can run: `npm publish` (it needs to be logged), it will:
* Build the project on `bin` folder that is going to be published.
* Check your code with `test` and `lint`.
* Cleaning the code for publishing.
* Bumped the version (patch).
* Created a tag on your repo.  


I hope you enjoy it!

Please give me a start on this repo :), I'll appreciate it!    

---

With <3 by Crystian. 


