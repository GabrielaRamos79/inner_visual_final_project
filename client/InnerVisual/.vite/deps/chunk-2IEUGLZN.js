import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/load-script/index.js
var require_load_script = __commonJS({
  "node_modules/load-script/index.js"(exports, module) {
    module.exports = function load(src, opts, cb) {
      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      opts = opts || {};
      cb = cb || function() {
      };
      script.type = opts.type || "text/javascript";
      script.charset = opts.charset || "utf8";
      script.async = "async" in opts ? !!opts.async : true;
      script.src = src;
      if (opts.attrs) {
        setAttributes(script, opts.attrs);
      }
      if (opts.text) {
        script.text = "" + opts.text;
      }
      var onend = "onload" in script ? stdOnEnd : ieOnEnd;
      onend(script, cb);
      if (!script.onload) {
        stdOnEnd(script, cb);
      }
      head.appendChild(script);
    };
    function setAttributes(script, attrs) {
      for (var attr in attrs) {
        script.setAttribute(attr, attrs[attr]);
      }
    }
    function stdOnEnd(script, cb) {
      script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
      };
      script.onerror = function() {
        this.onerror = this.onload = null;
        cb(new Error("Failed to load " + this.src), script);
      };
    }
    function ieOnEnd(script, cb) {
      script.onreadystatechange = function() {
        if (this.readyState != "complete" && this.readyState != "loaded")
          return;
        this.onreadystatechange = null;
        cb(null, script);
      };
    }
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// node_modules/react-player/lib/utils.js
var require_utils = __commonJS({
  "node_modules/react-player/lib/utils.js"(exports, module) {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var utils_exports = {};
    __export(utils_exports, {
      callPlayer: () => callPlayer,
      getConfig: () => getConfig,
      getSDK: () => getSDK,
      isBlobUrl: () => isBlobUrl,
      isMediaStream: () => isMediaStream,
      lazy: () => lazy,
      omit: () => omit,
      parseEndTime: () => parseEndTime,
      parseStartTime: () => parseStartTime,
      queryString: () => queryString,
      randomString: () => randomString,
      supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
    });
    module.exports = __toCommonJS(utils_exports);
    var import_react = __toESM(require_react());
    var import_load_script = __toESM(require_load_script());
    var import_deepmerge = __toESM(require_cjs());
    var lazy = (componentImportFn) => import_react.default.lazy(async () => {
      const obj = await componentImportFn();
      return typeof obj.default === "function" ? obj : obj.default;
    });
    var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
    var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
    var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
    var MATCH_NUMERIC = /^\d+$/;
    function parseTimeParam(url, pattern) {
      if (url instanceof Array) {
        return void 0;
      }
      const match = url.match(pattern);
      if (match) {
        const stamp = match[1];
        if (stamp.match(MATCH_START_STAMP)) {
          return parseTimeString(stamp);
        }
        if (MATCH_NUMERIC.test(stamp)) {
          return parseInt(stamp);
        }
      }
      return void 0;
    }
    function parseTimeString(stamp) {
      let seconds = 0;
      let array = MATCH_START_STAMP.exec(stamp);
      while (array !== null) {
        const [, count, period] = array;
        if (period === "h")
          seconds += parseInt(count, 10) * 60 * 60;
        if (period === "m")
          seconds += parseInt(count, 10) * 60;
        if (period === "s")
          seconds += parseInt(count, 10);
        array = MATCH_START_STAMP.exec(stamp);
      }
      return seconds;
    }
    function parseStartTime(url) {
      return parseTimeParam(url, MATCH_START_QUERY);
    }
    function parseEndTime(url) {
      return parseTimeParam(url, MATCH_END_QUERY);
    }
    function randomString() {
      return Math.random().toString(36).substr(2, 5);
    }
    function queryString(object) {
      return Object.keys(object).map((key) => `${key}=${object[key]}`).join("&");
    }
    function getGlobal(key) {
      if (window[key]) {
        return window[key];
      }
      if (window.exports && window.exports[key]) {
        return window.exports[key];
      }
      if (window.module && window.module.exports && window.module.exports[key]) {
        return window.module.exports[key];
      }
      return null;
    }
    var requests = {};
    var getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = import_load_script.default) {
      const existingGlobal = getGlobal(sdkGlobal);
      if (existingGlobal && isLoaded(existingGlobal)) {
        return Promise.resolve(existingGlobal);
      }
      return new Promise((resolve, reject) => {
        if (requests[url]) {
          requests[url].push({ resolve, reject });
          return;
        }
        requests[url] = [{ resolve, reject }];
        const onLoaded = (sdk) => {
          requests[url].forEach((request) => request.resolve(sdk));
        };
        if (sdkReady) {
          const previousOnReady = window[sdkReady];
          window[sdkReady] = function() {
            if (previousOnReady)
              previousOnReady();
            onLoaded(getGlobal(sdkGlobal));
          };
        }
        fetchScript(url, (err) => {
          if (err) {
            requests[url].forEach((request) => request.reject(err));
            requests[url] = null;
          } else if (!sdkReady) {
            onLoaded(getGlobal(sdkGlobal));
          }
        });
      });
    });
    function getConfig(props, defaultProps) {
      return (0, import_deepmerge.default)(defaultProps.config, props.config);
    }
    function omit(object, ...arrays) {
      const omitKeys = [].concat(...arrays);
      const output = {};
      const keys = Object.keys(object);
      for (const key of keys) {
        if (omitKeys.indexOf(key) === -1) {
          output[key] = object[key];
        }
      }
      return output;
    }
    function callPlayer(method, ...args) {
      if (!this.player || !this.player[method]) {
        let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `;
        if (!this.player) {
          message += "The player was not available";
        } else if (!this.player[method]) {
          message += "The method was not available";
        }
        console.warn(message, "font-weight: bold", "");
        return null;
      }
      return this.player[method](...args);
    }
    function isMediaStream(url) {
      return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
    }
    function isBlobUrl(url) {
      return /^blob:/.test(url);
    }
    function supportsWebKitPresentationMode(video = document.createElement("video")) {
      const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
      return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
    }
    function enableStubOn(fn) {
      if (false) {
        const wrap = (...args) => wrap.stub(...args);
        wrap.stub = fn;
        return wrap;
      }
      return fn;
    }
  }
});

// node_modules/react-player/lib/patterns.js
var require_patterns = __commonJS({
  "node_modules/react-player/lib/patterns.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var patterns_exports = {};
    __export(patterns_exports, {
      AUDIO_EXTENSIONS: () => AUDIO_EXTENSIONS,
      DASH_EXTENSIONS: () => DASH_EXTENSIONS,
      FLV_EXTENSIONS: () => FLV_EXTENSIONS,
      HLS_EXTENSIONS: () => HLS_EXTENSIONS,
      MATCH_URL_DAILYMOTION: () => MATCH_URL_DAILYMOTION,
      MATCH_URL_FACEBOOK: () => MATCH_URL_FACEBOOK,
      MATCH_URL_FACEBOOK_WATCH: () => MATCH_URL_FACEBOOK_WATCH,
      MATCH_URL_KALTURA: () => MATCH_URL_KALTURA,
      MATCH_URL_MIXCLOUD: () => MATCH_URL_MIXCLOUD,
      MATCH_URL_MUX: () => MATCH_URL_MUX,
      MATCH_URL_SOUNDCLOUD: () => MATCH_URL_SOUNDCLOUD,
      MATCH_URL_STREAMABLE: () => MATCH_URL_STREAMABLE,
      MATCH_URL_TWITCH_CHANNEL: () => MATCH_URL_TWITCH_CHANNEL,
      MATCH_URL_TWITCH_VIDEO: () => MATCH_URL_TWITCH_VIDEO,
      MATCH_URL_VIDYARD: () => MATCH_URL_VIDYARD,
      MATCH_URL_VIMEO: () => MATCH_URL_VIMEO,
      MATCH_URL_WISTIA: () => MATCH_URL_WISTIA,
      MATCH_URL_YOUTUBE: () => MATCH_URL_YOUTUBE,
      VIDEO_EXTENSIONS: () => VIDEO_EXTENSIONS,
      canPlay: () => canPlay
    });
    module.exports = __toCommonJS(patterns_exports);
    var import_utils = require_utils();
    var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
    var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
    var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
    var MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
    var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
    var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
    var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
    var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
    var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
    var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
    var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
    var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
    var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
    var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
    var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
    var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
    var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
    var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
    var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
    var canPlayFile = (url) => {
      if (url instanceof Array) {
        for (const item of url) {
          if (typeof item === "string" && canPlayFile(item)) {
            return true;
          }
          if (canPlayFile(item.src)) {
            return true;
          }
        }
        return false;
      }
      if ((0, import_utils.isMediaStream)(url) || (0, import_utils.isBlobUrl)(url)) {
        return true;
      }
      return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
    };
    var canPlay = {
      youtube: (url) => {
        if (url instanceof Array) {
          return url.every((item) => MATCH_URL_YOUTUBE.test(item));
        }
        return MATCH_URL_YOUTUBE.test(url);
      },
      soundcloud: (url) => MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
      vimeo: (url) => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
      mux: (url) => MATCH_URL_MUX.test(url),
      facebook: (url) => MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url),
      streamable: (url) => MATCH_URL_STREAMABLE.test(url),
      wistia: (url) => MATCH_URL_WISTIA.test(url),
      twitch: (url) => MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
      dailymotion: (url) => MATCH_URL_DAILYMOTION.test(url),
      mixcloud: (url) => MATCH_URL_MIXCLOUD.test(url),
      vidyard: (url) => MATCH_URL_VIDYARD.test(url),
      kaltura: (url) => MATCH_URL_KALTURA.test(url),
      file: canPlayFile
    };
  }
});

export {
  require_cjs,
  require_utils,
  require_patterns
};
//# sourceMappingURL=chunk-2IEUGLZN.js.map
