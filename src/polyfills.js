// MessageChannel polyfill for Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      this.port1 = new MessagePort();
      this.port2 = new MessagePort();
      this.port1._otherPort = this.port2;
      this.port2._otherPort = this.port1;
    }
  };

  globalThis.MessagePort = class MessagePort extends EventTarget {
    constructor() {
      super();
      this._otherPort = null;
      this._started = false;
    }

    postMessage(message) {
      if (this._otherPort) {
        setTimeout(() => {
          this._otherPort.dispatchEvent(new MessageEvent('message', { data: message }));
        }, 0);
      }
    }

    start() {
      this._started = true;
    }

    close() {
      this._started = false;
    }
  };
}
