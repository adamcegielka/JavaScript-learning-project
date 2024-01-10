[![JavaScript/](https://img.shields.io/badge/tested%20with-JavaScript-fcdc00.svg?logo=javascript)](https://www.javascript.com/)
[![ECMAScript](https://img.shields.io/badge/ECMA-Script-F27B10.svg?logo=ECMA)](https://www.ecma-international.org/)
[![Support badge](https://img.shields.io/badge/stackoverflow-JavaScript-fcdc00.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/javascript)

# <img align="center" alt="Logo JavaScript" height="30" width="40" title="JavaScript " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"> My JavaScript Learning Journey

## Overview
Welcome to my personal repository dedicated to learning and mastering JavaScript! This is a space where I document my progress, store exercises, projects, and notes as I delve deeper into the world of JavaScript. It's a living record of my learning journey, and I hope it can also serve as a resource for others on a similar path.

## Objective
The primary goal of this repository is to track my progress in learning JavaScript, from the very basics to more advanced concepts. By committing to regular updates and maintaining this repository, I aim to build a solid foundation in JavaScript programming and develop a portfolio of projects and exercises that demonstrate my skills.

## Project structure

```bash
/JavaScript-learning-project
  ├── .github
  │   └── workflows
  │       └── .gitkeep
  ├── 01_basics
  │   └── .gitkeep
  ├── 02_advanced_topics
  │   └── .gitkeep
  ├── exercises
  │   └── .gitkeep
  ├── projects
  │   └── project_01
  │       └── .gitkeep
  ├── .eslintrc.json
  ├── .gitignore
  ├── .prettierignore
  ├── .prettierrc.json
  └── README.md
```

## Tools and Plugins:

- Software [VS Code IDE installed](https://code.visualstudio.com/)
- VS Code plugins installed:
    - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - enhances the visual experience by adding icons to files and folders, making navigation easier.
    - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - provides code snippets for JavaScript ES6 syntax, speeding up coding and learning new syntax patterns.
    - [ESLint](https://eslint.org/) - a powerful tool to identify and fix problems in JavaScript code, ensuring code quality and consistency.
    - [Prettier - Code formatter](https://prettier.io/) - automatically formats code to maintain a consistent style, making it more readable and standardized.
    - [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - enhances the Git capabilities of VS Code, making it easier to visualize code and navigate through repositories.
    - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - helps in catching common spelling errors, which is crucial for writing clean and professional code.
    - [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) - used for automating workflows, which can include testing, building, and deploying JavaScript applications.
    - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - allows for a real-time preview of web pages, making it easier to see the effects of code changes instantly.

## Setup Instructions:

1. Creating a repository on GitHub
- create new project whit **JavaScript-learning-project** name
  - `git init`
  - `git branch -m master main`
  - `git add .`
  - `git commit -m "feat: create a project"`
  - `git push origin main`
- push an existing repository from the command line:
  - `git remote add origin https://github.com/adamcegielka/JavaScript-learning-project.git`
  - `git branch -M main`
  - `git push -u origin main`

2. Installation ESLint
- install `npm install eslint --save-dev`  
- configuration `npm init @eslint/config`  
- add prettier in `.eslintrc.json` :

```javascript
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
],
```

3. Installation Prettier
- install Prettier `npm install --save-dev --save-exact prettier`  
- add file to project `.prettierignore` :

```javascricpt
README.md
```

- add Prettier rule `.prettierrc.json` :

```javascript
{
    "bracketSpacing": true,
    "semi": true,
    "singleQuote": true,
    "tabWidh": 2,
    "endOfLine": "lf"
}
```

## Tutorials:

- [w3schools](https://my-learning.w3schools.com/tutorial/js)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [Learn JavaScript Full Course for Beginners - YouTube](https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V)
- [What is JavaScript - YouTube](https://www.youtube.com/watch?v=upDLs1sn7g4&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=1)
- [JavaScript Full Course for free - YouTube](https://www.youtube.com/watch?v=8dWL3wF_OMw)
- [Modern JavaScript Tutorial - YouTube](https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)
- [JavaScript Unit Testing, The Practical Guide - Udemy](https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/)  
  
<br>

- :poland: [Kurs JavaScript dla superbohaterów](https://kursjs.pl/)
- :poland: [Kurs JavaScript - YouTube](https://www.youtube.com/watch?v=Y5NpcJOM99A&list=PL6aekdNhY7DAnIsg_OoPaxB5kJV0pUJ99)
- :poland: [Kurs JavaScript Pasja informatyki - YouTube]()
- :poland: [Kurs JavaScript od podstaw krok po kroku 7h - YouTube](https://www.youtube.com/watch?v=Jq87JwsbG_E&t=13635s)
- :poland: [Programowanie w JavaScript od Zera do Mastera - Udemy](https://www.udemy.com/course/kurs-programowanie-w-javascript-od-zera-do-mastera/)
- :poland: [Praktyczny kurs JavaScript od podstaw - Udemy](https://www.udemy.com/course/praktyczny-kurs-javascript/)
- :poland: [10 projektów w czystym JavaScript - Udemy](https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/learn/lecture/18119975?start=0#overview)

## Useful sites:

- [Codepen.io](https://codepen.io/pen/?editors=0012)
- [Scrimba.com](https://scrimba.com/)
- [codewars](https://www.codewars.com/users/AdamCegielka)
- [GitHub](https://github.com/LinkedInLearning/javascript-essential-training-2832077)

### Author

Author: [Adam Cegiełka](https://github.com/adamcegielka)  
Happy JavaScript Learning!