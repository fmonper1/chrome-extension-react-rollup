(function () {
  'use strict';

  function captureEvents(events) {
    const captured = events.map(captureEvent);

    return () => captured.forEach((t) => t())

    function captureEvent(event) {
      let capture = true;

      const callbacks = new Map();
      const events = new Set();

      event.addListener(handleEvent);

      function handleEvent(...args) {
        const error = chrome.runtime.lastError;

        if (capture) {
          events.add([error, ...args]);
        } else {
          callListeners(error, ...args);
        }
      }

      event.addListener = function addListener(cb, ...options) {
        callbacks.set(cb, options);
      };

      event.hasListeners = function hasListeners() {
        return callbacks.size > 0
      };

      event.hasListener = function hasListener(cb) {
        return callbacks.has(cb)
      };

      event.removeListener = function removeListener(cb) {
        callbacks.delete(cb);
      };

      event.__isCapturedEvent = true;

      function callListeners(error, ...args) {
        callbacks.forEach((options, cb) => {
          if (error) chrome.runtime.lastError = error;
          cb(...args);
          if (error) delete chrome.runtime.lastError;
        });
      }

      return () => {
        events.forEach((args) => {
          callListeners(...args);
        });

        capture = false;
        events.clear();
      }
    }
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

  function getDeepMatches(object, pred, excludeKeys) {
    const keys = typeof object === 'object' ? Object.keys(object) : [];

    return keys.length
      ? keys
          .filter((key) => !excludeKeys.includes(key))
          .reduce((r, key) => {
            const target = object[key];

            if (target && pred(target)) {
              return [...r, target]
            } else {
              return [...r, ...getDeepMatches(target, pred, excludeKeys)]
            }
          }, [] )
      : []
  }

  const importPath = /*@__PURE__*/JSON.parse('"../background/background.js"'); 
  const delayLength = /*@__PURE__*/JSON.parse('0'); 
  const excludedPaths = /*@__PURE__*/JSON.parse('["extension"]');

  const events = getDeepMatches(chrome, (x) => typeof x === 'object' && 'addListener' in x, excludedPaths);
  const triggerEvents = captureEvents(events);

  import(importPath).then(async () => {
    if (delayLength) await delay(delayLength);

    triggerEvents();
  });

}());
