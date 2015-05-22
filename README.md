# Idiomatic React Chat

**Idiomatic React Chat** aims to be the simplest Flux Chat Example app one could build using React.

It complements **Idiomatic React** (on the branch `master` of this repository), and provides an example making use of multiple interdependent stores.

Currently, it uses :

* [React 0.13.x](http://facebook.github.io/react/) with [JSX](https://facebook.github.io/jsx/);
* [Geiger](https://github.com/netgusto/geiger), a tiny flux implementation (&lt;50 SLOC) with Dependency Injection features;
* [React-Router](https://github.com/rackt/react-router) for the routing;
* [Immutable.js](http://facebook.github.io/immutable-js/) for immutability in the stores;
* [Babel](https://babeljs.io/) for ES6/ES7 transpilation and linting;
* [Webpack](http://webpack.github.io/) for the tooling.

This demo app is based on Facebook's [Flux Chat Example App](https://github.com/facebook/flux/tree/master/examples/flux-chat).

## Install & run

```
git clone https://github.com/netgusto/IdiomaticReact
cd IdiomaticReact
git checkout chat
npm install
grunt serve
```

Then navigate to [http://localhost:8000]()

## Screenshot

![screenshot](https://cloud.githubusercontent.com/assets/4974818/7767415/adbb4732-0072-11e5-9263-5975498dab8f.png)

## Features

* Routing, with stateful navigation bar
* ES6/ES7 transpilation to ES5, allowing ES6 constructs and ES7 `await/async` in the code
* Multiple, synchronized stores
* Immutable stores

## Motive

Considering the frequent mutation of technology happening on the React scene, we believe developers might feel the need for a simple, idiomatic app reflecting the current state of the technology and techniques, be it for bootstrapping awesome apps, or simply to improve their skills.

This project **aims** to be simple **and** idiomatic. We're not there yet, and we rely heavily on contributors (on you !) to make this happen.

## Contribute

Please, issues with PR only, and proper explanation of the improvement / simplification.

## License

The MIT License (MIT). See the **LICENSE** file.
