// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eTPXn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "964cc67553ca7853";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fACLX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleRequestedData", ()=>handleRequestedData);
var _apiJs = require("./api.js");
var _viewJs = require("./view.js");
var _helpersJs = require("./helpers.js");
var _handlersJs = require("./handlers.js");
var _storageJs = require("./storage.js");
var _networkJs = require("./network.js");
(0, _viewJs.init)();
(0, _viewJs.UI_ELEMENTS).SEARCH.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityName = event.target.firstElementChild.value;
    const cityDataUrl = (0, _apiJs.createDetailsUrl)(cityName);
    handleRequestedData(cityDataUrl);
    event.target.firstElementChild.value = "";
});
(0, _viewJs.UI_ELEMENTS).TAB_BUTTONS.forEach((elem)=>{
    elem.addEventListener("click", (event)=>{
        const selectedTab = event.target.id;
        (0, _viewJs.renderTabs)(selectedTab);
    });
});
(0, _viewJs.UI_ELEMENTS).SAVE_BUTTON.addEventListener("click", (event)=>{
    const isSaved = event.target.checked;
    const isCityNotInStorage = !(0, _storageJs.favoritesList).includes((0, _storageJs.currentCityData).name);
    if (isSaved && isCityNotInStorage) (0, _storageJs.favoritesList).push((0, _storageJs.currentCityData).name);
    else {
        const index = (0, _storageJs.favoritesList).indexOf((0, _storageJs.currentCityData).name);
        if (index !== -1) (0, _storageJs.favoritesList).splice(index, 1);
    }
    (0, _storageJs.storage).saveFavoriteCities((0, _storageJs.favoritesList));
    (0, _viewJs.renderFavoritesList)();
});
async function handleRequestedData(cityDataUrl) {
    try {
        const cityData = await (0, _networkJs.getCityData)(cityDataUrl);
        Object.assign((0, _storageJs.currentCityData), cityData);
        (0, _storageJs.storage).saveLastCityData(JSON.stringify((0, _storageJs.currentCityData)));
        const { name: cityName, main: { temp, feels_like }, weather: [{ main, icon }], sys: { sunrise, sunset }, coord: { lat, lon } } = cityData;
        const celciusTemp = (0, _helpersJs.getCelcFromFaringate)(temp);
        const celciusFeels = (0, _helpersJs.getCelcFromFaringate)(feels_like);
        const detailParams = [
            celciusTemp,
            celciusFeels,
            main,
            (0, _helpersJs.convertUnixTime)(sunrise),
            (0, _helpersJs.convertUnixTime)(sunset)
        ];
        const cityForecast = await (0, _networkJs.getCityForecast)((0, _apiJs.createForecastUrl)((0, _storageJs.currentCityData).coord.lat, (0, _storageJs.currentCityData).coord.lon));
        (0, _storageJs.currentCityData).list = cityForecast;
        (0, _viewJs.renderNowTab)(cityName, celciusTemp, icon);
        (0, _viewJs.renderDetailsTab)(cityName, detailParams);
        (0, _viewJs.renderForecast)();
    } catch (error) {
        console.log(error);
        (0, _viewJs.renderNowTab)("No City", "0\xb0", "03d");
        (0, _viewJs.renderDetailsTab)("No City", (0, _handlersJs.DETAILS_ERROR_PARAMETERS));
    }
}

},{"./api.js":"6W9WG","./view.js":"1qb9o","./helpers.js":"2iRAD","./handlers.js":"eRHIP","./storage.js":"hxQEZ","./network.js":"5H7Py","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6W9WG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API", ()=>API);
parcelHelpers.export(exports, "createDetailsUrl", ()=>createDetailsUrl);
parcelHelpers.export(exports, "createImageUrl", ()=>createImageUrl);
parcelHelpers.export(exports, "createForecastUrl", ()=>createForecastUrl);
const API = {
    SERVER_URL: "http://api.openweathermap.org/data/2.5/weather",
    SERVER_URL_FORECAST: "https://api.openweathermap.org/data/2.5/forecast",
    API_KEY: "38809edaf50d2af3b78dd8016e4f9ef4"
};
function createDetailsUrl(cityName) {
    return `${API.SERVER_URL}?q=${cityName}&appid=${API.API_KEY}`;
}
function createForecastUrl(lat, lon) {
    return `${API.SERVER_URL_FORECAST}?lat=${lat}&lon=${lon}&appid=${API.API_KEY}`;
}
function createImageUrl(size) {
    return `https://openweathermap.org/img/wn/${size}@2x.png`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1qb9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI_ELEMENTS", ()=>UI_ELEMENTS);
parcelHelpers.export(exports, "renderNowTab", ()=>renderNowTab);
parcelHelpers.export(exports, "renderTabs", ()=>renderTabs);
parcelHelpers.export(exports, "renderDetailsTab", ()=>renderDetailsTab);
parcelHelpers.export(exports, "renderFavoritesList", ()=>renderFavoritesList);
parcelHelpers.export(exports, "renderSaveButton", ()=>renderSaveButton);
parcelHelpers.export(exports, "renderForecast", ()=>renderForecast);
parcelHelpers.export(exports, "init", ()=>init);
var _apiJs = require("./api.js");
var _helpersJs = require("./helpers.js");
var _scriptJs = require("./script.js");
var _storageJs = require("./storage.js");
const DETAIL_PARAMETERS = [
    "Temperature",
    "Feels like",
    "Weather",
    "Sunrise",
    "Sunset"
];
const UI_ELEMENTS = {
    TABS: {
        NOW: {
            NAME: document.querySelector(".now__name"),
            TEMPERATURE: document.querySelector(".now__temperature"),
            ICON: document.querySelector(".now__image > img")
        },
        DETAILS: {
            NAME: document.querySelector(".details__header"),
            PARAMS_LIST: document.querySelector(".details__list")
        },
        FORECAST: {
            NAME: document.querySelector(".forecast__header"),
            FORECAST_LIST: document.querySelector(".forecast__list")
        }
    },
    TAB_BUTTONS: document.querySelectorAll(".tabs__item"),
    TAB_DISPLAY: document.querySelectorAll("[data-link]"),
    SEARCH: document.querySelector(".weather__search"),
    SAVE_BUTTON: document.querySelector(".now__checkbox"),
    FAVORITES_LIST: document.querySelector(".list")
};
function renderTabs(selectedTab) {
    UI_ELEMENTS.TAB_DISPLAY.forEach((elem)=>{
        elem.classList.add("hidden");
        if (selectedTab === elem.dataset.link) elem.classList.remove("hidden");
    });
}
function renderNowTab(cityName, temp, icon) {
    UI_ELEMENTS.TABS.NOW.NAME.textContent = cityName;
    UI_ELEMENTS.TABS.NOW.TEMPERATURE.textContent = temp;
    UI_ELEMENTS.TABS.NOW.ICON.src = (0, _apiJs.createImageUrl)(icon);
    renderSaveButton();
}
function renderDetailsTab(cityName, params) {
    UI_ELEMENTS.TABS.DETAILS.NAME.textContent = cityName, UI_ELEMENTS.TABS.DETAILS.PARAMS_LIST.innerHTML = "";
    DETAIL_PARAMETERS.forEach((param, i)=>{
        const weatherDetail = document.createElement("div");
        weatherDetail.classList = "details__item text";
        weatherDetail.textContent = `${param}: ${params[i]}`;
        UI_ELEMENTS.TABS.DETAILS.PARAMS_LIST.append(weatherDetail);
    });
}
function renderFavoritesList() {
    UI_ELEMENTS.FAVORITES_LIST.innerHTML = "";
    (0, _storageJs.favoritesList).forEach((cityName)=>{
        const cityDataUrl = (0, _apiJs.createDetailsUrl)(cityName);
        const listItem = document.createElement("div");
        listItem.classList = "list__item";
        listItem.textContent = cityName;
        listItem.addEventListener("click", ()=>{
            (0, _scriptJs.handleRequestedData)(cityDataUrl);
        });
        UI_ELEMENTS.FAVORITES_LIST.append(listItem);
    });
}
function renderForecast() {
    UI_ELEMENTS.TABS.FORECAST.NAME.textContent = (0, _storageJs.currentCityData).name;
    UI_ELEMENTS.TABS.FORECAST.FORECAST_LIST.innerHTML = "";
    (0, _storageJs.currentCityData)?.list?.forEach((forecastData)=>{
        const forecastCard = document.createElement("div");
        forecastCard.classList = "card";
        const date = document.createElement("div");
        const day = document.createElement("p");
        const time = document.createElement("p");
        day.classList = "card__date text";
        day.textContent = (0, _helpersJs.getDateFromUnixTime)(forecastData.dt);
        time.classList = "card__time text";
        time.textContent = (0, _helpersJs.convertUnixTime)(forecastData.dt);
        date.classList = "card__details";
        date.append(day, time);
        const weather = document.createElement("div");
        const information = document.createElement("div");
        const temp = document.createElement("p");
        const feels = document.createElement("p");
        const weatherIcon = document.createElement("div");
        const weatherName = document.createElement("p");
        const weatherImage = document.createElement("img");
        weather.classList = "card__details";
        information.classList = "card__information";
        temp.classList = "card__data text";
        temp.textContent = `Temperature: ${(0, _helpersJs.getCelcFromFaringate)(forecastData.main.temp)}`;
        feels.classList = "card__data text";
        feels.textContent = `Feels like: ${(0, _helpersJs.getCelcFromFaringate)(forecastData.main.feels_like)}`;
        weatherIcon.classList = "card__icon";
        weatherName.classList = "card__text text";
        weatherName.textContent = `${forecastData.weather[0].main}`;
        weatherImage.classList = "card__image";
        weatherImage.alt = " ";
        weatherImage.src = `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`;
        weatherIcon.append(weatherName, weatherImage);
        information.append(temp, feels);
        weather.append(information, weatherIcon);
        forecastCard.append(date, weather);
        UI_ELEMENTS.TABS.FORECAST.FORECAST_LIST.append(forecastCard);
    });
}
function renderSaveButton() {
    const isCityInStorage = (0, _storageJs.favoritesList).includes((0, _storageJs.currentCityData).name);
    UI_ELEMENTS.SAVE_BUTTON.checked = isCityInStorage;
}
function init() {
    const cityDataUrl = (0, _apiJs.createDetailsUrl)((0, _storageJs.currentCityData)?.name);
    (0, _scriptJs.handleRequestedData)(cityDataUrl);
    renderFavoritesList();
    renderForecast();
}

},{"./api.js":"6W9WG","./helpers.js":"2iRAD","./script.js":"fACLX","./storage.js":"hxQEZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iRAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCelcFromFaringate", ()=>getCelcFromFaringate);
parcelHelpers.export(exports, "convertUnixTime", ()=>convertUnixTime);
parcelHelpers.export(exports, "getDateFromUnixTime", ()=>getDateFromUnixTime);
parcelHelpers.export(exports, "zeroPadToTwo", ()=>zeroPadToTwo);
const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function getCelcFromFaringate(temp) {
    return `${Math.round(temp - 273.15)}\xb0`;
}
function convertUnixTime(s) {
    const currentDate = new Date(s * 1000);
    return `${zeroPadToTwo(currentDate.getHours())}:${zeroPadToTwo(currentDate.getMinutes())}`;
}
function getDateFromUnixTime(s) {
    const currentDate = new Date(s * 1000);
    return `${currentDate.getDate()} ${MONTH[currentDate.getMonth()]}`;
}
function zeroPadToTwo(number) {
    const isNumberMoreThanTwoDigits = +number > 9;
    if (isNumberMoreThanTwoDigits) return number;
    return `0${number}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxQEZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "favoritesList", ()=>favoritesList);
parcelHelpers.export(exports, "storage", ()=>storage);
parcelHelpers.export(exports, "currentCityData", ()=>currentCityData);
const storage = {
    saveFavoriteCities: function(list) {
        localStorage.setItem("favorites", list);
    },
    getFavoriteCities: function() {
        return JSON.parse(localStorage.getItem("favorites"));
    },
    saveLastCityData: function(data) {
        localStorage.setItem("cityData", data);
    },
    getLastCityData: function() {
        return JSON.parse(localStorage.getItem("cityData"));
    }
};
const currentCityData = storage.getLastCityData() ? JSON.parse(storage.getLastCityData()) : {};
const favoritesList = storage.getFavoriteCities() ? [
    ...storage.getFavoriteCities()?.split(",")
] : [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRHIP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DETAILS_ERROR_PARAMETERS", ()=>DETAILS_ERROR_PARAMETERS);
const DETAILS_ERROR_PARAMETERS = [
    "0\xb0",
    "0\xb0",
    "None",
    "00:00",
    "00:00"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5H7Py":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCityData", ()=>getCityData);
parcelHelpers.export(exports, "getCityForecast", ()=>getCityForecast);
parcelHelpers.export(exports, "fetchRequest", ()=>fetchRequest);
async function getCityForecast(url) {
    const json = await fetchRequest(url);
    return json.list;
}
async function getCityData(url) {
    try {
        const json = await fetchRequest(url);
        const isRequestCorrect = json.cod === 200;
        if (!isRequestCorrect) throw new Error(json.message);
        const { name, main, weather, sys, coord } = json;
        return {
            name,
            main,
            weather,
            sys,
            coord
        };
    } catch (error) {
        throw new Error(error.message);
    }
}
async function fetchRequest(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eTPXn","fACLX"], "fACLX", "parcelRequire94c2")

//# sourceMappingURL=index.53ca7853.js.map
