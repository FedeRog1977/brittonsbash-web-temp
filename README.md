# BrittonsBash Web

Next.js 15 and React web applications for BrittonsBash Web.

## Config

- [ESLint](https://eslint.org/) configuration.
- [Prettier](https://prettier.io/) configuration.
- [TypeScript](https://www.typescriptlang.org/) configuration.

## Technologies

- Render framework: Next.js
- Component framework: React
- Runtime environment: Node.js
- Post-transpiled programming language: JavaScript
- Pre-transpiled programming language: TypeScript
  - Target: `ESNext`
  - Type: `module`
  - Module resolution: `NodeNext`
- Package manager: Node.js Package Manager (`npm`)
  - Config: `package.json`

### TypeScript

...

#### Docs

https://docs.npmjs.com/cli/v11/configuring-npm/package-json
https://docs.npmjs.com/cli/v11/using-npm/config
https://en.wikipedia.org/wiki/ECMAScript#:~:text=The%20ECMAScript%20specification%20is%20a,JavaScript%20in%20a%20press%20release.
https://blog.logrocket.com/commonjs-vs-es-modules-node-js/
https://www.typescriptlang.org/tsconfig/#moduleResolution
https://stackoverflow.com/questions/71463698/why-we-need-nodenext-typescript-compiler-option-when-we-have-esnext

...

#### Module

##### Type

Our TypeScript (JavaScript) modules depend on the `import` and `export` statements; these statements load and export ECMAScript modules (or ES modules), respectively. Made obvious from the prior, we can omit `CommonJS` from out considerations.

An extract:

```md
`CommonJS` is a module ecosystem project for JavaScript, primarily used for server-side development and Node.js, that enables code organization through a synchronous module system using require() to import and module.exports to export functionality from files. Although it was an early solution for modularizing JavaScript, it has largely been superseded by the standardized ECMAScript Modules (ESM) system for modern applications, but it remains important for legacy support and certain use cases in Node.js environments.
```

An extract:

```md
Then came the ES modules, which provide a native module system for both client and server-side JavaScript. ES6 modules provide a clear syntax, import and export statements, and support for asynchronous loading. This progress has made code more maintainable, reusable, and performant, allowing developers to build more scalable applications.
```

If questioning `ESModule` over `commonjs`, see this: https://en.wikipedia.org/wiki/ECMAScript#:~:text=The%20ECMAScript%20specification%20is%20a,JavaScript%20in%20a%20press%20release.

##### Module Resolution

The idea was to keep the code as much in its "original" form as possible until the final app build, at which point you can bundle it for the browsers you're targeting.

The ES module format is the official standard format to package JavaScript code for reuse, and most modern web browsers natively support the modules.

`NodeNext` is the right choice across our "private" packages. Then in our deployable apps, Next overwrites the setting or ignores it completely as it just runs its own build process

The main thing was to preserve modern language features across our ecosystem as cleanly as possible, then only at the last minute (the app build) transpile them to versions that target specific browsers. I'm guessing NodeNext achieves that

...

To support ES Modules and TypeScript using `"module": "NodeNext"`, we specify aliases that `.js` file lookups could be referring to.

```js
extensionAlias: {
...config.resolve?.extensionAlias,
'.js': ['.ts', '.tsx', '.js'],
'.jsx': ['.ts', '.tsx', '.js'],
},
```
# brittonsbash-web-temp
