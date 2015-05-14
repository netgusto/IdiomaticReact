# IdiomaticReact

**Idiomatic React** aims to be the simplest API-centric Flux app one could build using React.

Currently, it uses :

* [React 0.13.3](http://facebook.github.io/react/) with [JSX](https://facebook.github.io/jsx/);
* [Geiger](https://github.com/netgusto/geiger), a tiny flux implementation (&lt;50 SLOC) with Dependency Injection features;
* [React-Router](https://github.com/rackt/react-router) for the routing;
* [Immutable.js](http://facebook.github.io/immutable-js/) for immutability in the stores;
* [Babel](https://babeljs.io/) for ES6/ES7 transpilation and linting;
* [Webpack](http://webpack.github.io/) for the tooling.

## Install & run

```
npm install
grunt serve
```

Then navigate to [http://localhost:8000]()

## Screenshot

![screenshot](https://cloud.githubusercontent.com/assets/4974818/6792540/70c729f0-d1b9-11e4-89ad-7f85252baa23.png)

## Features

* Routing, with stateful navigation bar
* ES6/ES7 transpilation to ES5, allowing ES6 constructs and ES7 `await/async` in the code
* REST API adapter to I/O data, bufferring in stores
* Immutable stores

## Motive

Considering the frequent mutation of technology happening on the React scene, we believe developers might feel the need for a simple, idiomatic app reflecting the current state of the technology and techniques, be it for bootstrapping awesome apps, or simply to improve their skills.

This project **aims** to be simple **and** idiomatic. We're not there yet, and we rely heavily on contributors (on you !) to make this happen.

## Contribute

Please, issues with PR only, and proper explanation of the improvement / simplification.

## License

The MIT License (MIT). See the **LICENSE** file.