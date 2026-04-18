# brittonsbash Web

Next.js 15 and React web applications for brittonsbash Web.

## Config

- [ESLint](https://eslint.org/) configuration.
- [Prettier](https://prettier.io/) configuration.
- [TypeScript](https://www.typescriptlang.org/) configuration.

## Technologies

- Package manager: Node.js Package Manager (`npm`)
- Render framework: Next.js
- Component framework: React
- Runtime environment: Node.js
- Post-transpiled programming language: JavaScript
- Pre-transpiled programming language: TypeScript
- Type: ECMAScript ES Module (`module`)
- Target: ES Next (`esnext`)
- Module: Node Next (`NodeNext`)
- Module resolution: Node Next (`NodeNext`)
- Manifest: `package.json`

### Node.js Package Manager

...

Notes:

- https://docs.npmjs.com/cli/v11/configuring-npm/package-json
- https://docs.npmjs.com/cli/v11/using-npm/config

### Next.js

...

### React

...

### Node.js

...

### JavaScript

...

### TypeScript

...

### Type

Options:

- `"type": "module"`
- `"type": "commonjs"`

We use `"type": "module"`.

Our TypeScript (JavaScript) modules depend on the `import` and `export` statements to load and
export using the ECMAScript module standard, which outputs ES Modules (ESM). The CommonJS approach
uses the more traditional `require()` and `module.exports` statements to load and export using an
unrefined, unspecified JavaScript method.

There is no `"main": "./dist/<main-export-file>.js"` in the `package.json`. This is replaced with
`"exports: {}"`. `exports` are, in theory, open-ended, and they can point to anywhere there is an
export. This method can also keep a package clean of barrel `index.ts` files, and point to only
exactly the exports that are required. The modularization under ECMAScript using the `exports`
method also ensures that not all contents of a package will be loaded in a consumer when importing
from an `exports` path. This is useful for segmenting server-side and client-side specific
functionality.

`CommonJS` is an older module ecosystem project for JavaScript, primarily used for server-side
development and Node.js, that enables code organization through a synchronous module system using .
Although it was an early solution for modularizing JavaScript, after vanilla JavaScript, it has
largely been superseded by the standardized ECMAScript Modules (ESM) system for modern applications,
but it remains important for legacy support and certain use cases in Node.js environments.

CommonJS is an older module ecosystem project for JavaScript, primarily used for server-side only
development and Node.js, that enables code organization through a synchronous module system.
Although it was an early solution for modularizing JavaScript, after vanilla JavaScript, it has
largely been superseded by the ECMAScript module standard, but it remains important for legacy
support and particular use cases in Node.js environments.

The ECMAScript module standard provides a native module system for both server-side and client-side
JavaScript. The ES Modules provide a clear syntax, `import` and `export` statements, and support for
asynchronous loading. This progress has made code more maintainable, reusable, and performant,
allowing developers to build more scalable applications. Not to mention future-proof support for
modern applications, modern browsers, and support in TypeScript. If we were to use a resolution such
as `"NodeNext"`, for example. But we'll come to this.

Given the above, we selected the most modern and robust specification for modularization. Therefore,
vanilla JavaScript and `CommonJS` modularization is omitted from considerations.

Notes:

- https://en.wikipedia.org/wiki/ECMAScript#:~:text=The%20ECMAScript%20specification%20is%20a,JavaScript%20in%20a%20press%20release
- https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

### Target

...

Notes:

- https://www.typescriptlang.org/tsconfig/#target
- https://stackoverflow.com/questions/71463698/why-we-need-nodenext-typescript-compiler-option-when-we-have-esnext

## Module

...

Notes:

- https://www.typescriptlang.org/tsconfig/#module

### Module Resolution

https://www.typescriptlang.org/tsconfig/#moduleResolution

The idea was to keep the code as much in its "original" form as possible until the final app build,
at which point you can bundle it for the browsers you're targeting.

The ES module format is the official standard format to package JavaScript code for reuse, and most
modern web browsers natively support the modules.

`NodeNext` is the right choice across our "private" packages. Then in our deployable apps, Next
overwrites the setting or ignores it completely as it just runs its own build process

The main thing was to preserve modern language features across our ecosystem as cleanly as possible,
then only at the last minute (the app build) transpile them to versions that target specific
browsers. I'm guessing NodeNext achieves that

...

To support ES Modules and TypeScript using `"module": "NodeNext"`, we specify aliases that `.js`
file lookups could be referring to.

```js
extensionAlias: {
...config.resolve?.extensionAlias,
'.js': ['.ts', '.tsx', '.js'],
'.jsx': ['.ts', '.tsx', '.js'],
},
```

Notes:

- https://www.typescriptlang.org/tsconfig/#moduleResolution
