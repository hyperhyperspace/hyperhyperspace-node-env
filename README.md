# NodeJs support for the Hyper Hyper Space core library

The Hyper Hyper Space core library, available as [@hyper-hyper-space/core](https://github.com/hyperhyperspace/hyperhyperspace-core) in NPM, is designed to work in a web browser. This library adds the missing functionality it needs to work as a NodeJs application to the global scope:

- a WebRTC implementation
- a WebSockets server, so peers can listen on websocket endpoints
- a IndexedDB implementation, useful for testing storage code intended for the browser

before you can use the core library, yo need to

    import '@hyper-hyper-space/node-env';

