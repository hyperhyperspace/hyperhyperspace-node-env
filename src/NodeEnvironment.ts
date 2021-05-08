import WebSocket  from 'ws';
import * as http from 'http';

class WebSocketServer {

    listener: WebSocket.Server;
    onConnection?: (socket: WebSocket, url: string) => void

    constructor(options: any) {
        this.listener = new WebSocket.Server(options);
        this.listener.on('connection', (socket: WebSocket, request: http.IncomingMessage) => {
            let url = request.url as string;
            if (this.onConnection != undefined) {
                this.onConnection(socket, url);
            }
        });
    }

    close() {
        this.listener.close();
    }
}

(global as any).WebSocketServerImpl = WebSocketServer;

require("fake-indexeddb/auto");
global.RTCPeerConnection = require('wrtc').RTCPeerConnection;

if (global.btoa === undefined) {
    global.btoa = require('btoa');
}

if (global.atob === undefined) {
    global.atob = require('atob');
}

if (global.WebSocket === undefined) {
    (global as any).WebSocket = WebSocket;
}

const { Crypto } = require("@peculiar/webcrypto");

const crypto = new Crypto();

(globalThis as any).webCryptoOverrideImpl = crypto.subtle;



