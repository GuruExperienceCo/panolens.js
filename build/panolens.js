(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PANOLENS = {}, global.THREE));
})(this, (function (exports, THREE) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var THREE__namespace = /*#__PURE__*/_interopNamespace(THREE);

	const version="0.0.12";const dependencies={three:"^0.164.1"};

	/**
	 * REVISION
	 * @module REVISION
	 * @example PANOLENS.REVISION
	 * @type {string} revision
	 */
	const REVISION = version.split( '.' )[ 1 ];

	/**
	 * VERSION
	 * @module VERSION
	 * @example PANOLENS.VERSION
	 * @type {string} version
	 */
	const VERSION = version;

	/**
	 * THREEJS REVISION
	 * @module THREE_REVISION
	 * @example PANOLENS.THREE_REVISION
	 * @type {string} threejs revision
	 */
	const THREE_REVISION = dependencies.three.split( '.' )[ 1 ];

	/**
	 * THREEJS VERSION
	 * @module THREE_VERSION
	 * @example PANOLENS.THREE_VERSION
	 * @type {string} threejs version
	 */
	const THREE_VERSION = dependencies.three.replace( /[^0-9.]/g, '' );

	/**
	 * CONTROLS
	 * @module CONTROLS
	 * @example PANOLENS.CONTROLS.ORBIT
	 * @property {number} ORBIT 0
	 * @property {number} DEVICEORIENTATION 1
	 */
	const CONTROLS = { ORBIT: 0, DEVICEORIENTATION: 1 };

	/**
	 * MODES
	 * @module MODES
	 * @example PANOLENS.MODES.UNKNOWN
	 * @property {number} UNKNOWN 0
	 * @property {number} NORMAL 1
	 * @property {number} CARDBOARD 2
	 * @property {number} STEREO 3
	 */
	const MODES = { UNKNOWN: 0, NORMAL: 1, CARDBOARD: 2, STEREO: 3 };

	/**
	 * CONTROL_BUTTONS
	 * @module CONTROL_BUTTONS
	 * @example PANOLENS.VIEWER.CONTROL_BUTTONS
	 * @property {string} FULLSCREEN
	 * @property {string} SETTING
	 * @property {string} VIDEO
	 */
	const CONTROL_BUTTONS = { FULLSCREEN: 'fullscreen', SETTING: 'setting', VIDEO: 'video' };

	/**
	 * OUTPUTS
	 * @module OUTPUTS
	 * @example PANOLENS.VIEWER.OUTPUTS
	 * @property {string} NONE
	 * @property {string} CONSOLE
	 * @property {string} OVERLAY
	 */
	const OUTPUTS = { NONE: 'none', CONSOLE: 'console', OVERLAY: 'overlay' };

	/**
	 * Data URI Images
	 * @module DataImage
	 * @example PANOLENS.DataImage.Info
	 * @property {string} Info Information Icon
	 * @property {string} Arrow Arrow Icon
	 * @property {string} FullscreenEnter Fullscreen Enter Icon
	 * @property {string} FullscreenLeave Fullscreen Leave Icon
	 * @property {string} VideoPlay Video Play Icon
	 * @property {string} VideoPause Video Pause Icon
	 * @property {string} WhiteTile White Tile Icon
	 * @property {string} Setting Settings Icon
	 * @property {string} ChevronRight Chevron Right Icon
	 * @property {string} Check Check Icon
	 * @property {string} ViewIndicator View Indicator Icon
	 */
	const DataImage = {
	    Info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADBklEQVR42u2bP08UQRiHnzFaSYCI/xoksdBIqGwIiYWRUBISExpCQ0ej38FWOmlIKKhoMPEbaCxsrrHiYrQgOSlQEaICrT+LHSPZzNzt3s3c3Hn7lHvLzvv82L2dm30XKioqKgYY062BJF0HpoA7wARwBbhsPz4DjoEG8AnYNcZ8Sx1Op8IXJM1KWpdUV3nq9m9nJV1I7VNGfEzSM0mNNqR9NOwxx1L7NRMflbQm6SSgeJ4TO8Zoat+8/LKkg4jieQ4kLaf2RtKwpJ0uiufZkTScSn5S0l5C+b/sSZrstvyMpKPU5uc4kjTTjkvpeYCkaeA1/+7hvcIZMGuMqUULQNIU8Aa4ltrWwyHwyBizGzwASSPAe+B2assW7AH3jTE/i+xcZoa12Qfy2Bo3i+5cKABl99zF1GYlWFTBeULLS0DZrOsDcDNggTXgc27bLWA64BhfgHvGmB8dHUXZ1DM0S45xliKMs9bKr+klIOkqsBrwv9JtVq1DewEAT4Ch1BYdMGQdygeg7Df4SmqDAKyoyXpCszPgITCeuvoAjFuX0gE8jljUdv7bCtiOOJ7XpdUZ8L/gdXHOA5QtYH5NXXVgbrgWWn1nwFTqaiPgdPIFcDd1tRFwOl307DwRuZgXwLvctgfA04hjOp18AcReZ6sZY16e3yDpUuQxnU6+S2AkcjEpcDr1zxOXSPgCKLSa0mc4nXwB/EpdbQScTr4AGqmrjYDTyRfAx9TVRsDp5Aug8LJyH+F0cgZg58z11BUHpO5ruGh2G3ybuuqAeF2aBfAqddUB8bq0OgP2U1cegH3aOQOMMb+BrdTVB2DLupQLwLIOnKY26IBT6+ClaQDGmO/ARmqLDtiwDn7HVkcY+EdjNoTlCI+tYhO2iUppm6HKslPUq2qQKHpUe8AFsjaUXuUQWCgqXyoAG8IuME/WkNRrnAHzZfqDSgdgQ6gBc2Td3b3CMTBXtkOsIzTIjZLnQhjcVtlcEIPZLJ0LoVvt8s/Va+3yuSAG84UJRxB98cpM9dJURUVFxSDzBxKde4Lk3/h2AAAAAElFTkSuQmCC', 
	    Arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADPklEQVR42u2bMUscQRiG30/SRaJEI1ZKUiRErNIELRUbQYSAnX8hpVUgkDYp0wgWVjYW+QcJaQzYpLojJIXhtDDEKBpj65ti58ixmdmb2ZvZ7+T2AUHudmfmeXf2bnb3O6CmpqZmgJGqOiI5AWAWwEMA0wDuArht3r4CcAagBeAbgIaI/NQOp1fhIZKLJN+SbDKcptl3keSQtk+I+BjJVyRbJaRdtEybY9p+ReKjJN+QvIwonufS9DGq7ZuXXyd5nFA8zzHJdW1vkLxDcrdC8Ty7JO9oyc+QPFCUb3NAcqZq+TmSp9rmHZySnCvjErwOIPkUwHv8+w7vF64ALIrIfrIASM4C+ADgnratgxMACyLSiB4AyREAnwE80LbswgGAJyJy4bNxyApr6wbIw4xxy3djrwCYfeeuaZsFsEbPdULXU4DZqusLgMkEA21P05EEbf8A8FhEzos28pkBLxLKL5s/r/M1kEkz9vKQHGeatf05yfmOfubNa7G5JDle5NhtBjwHMBz5yFwAWBaRT+0XzP8pZsKwcQiH2fX8Ycojb+kzxUw4ZJn7CSQXqpRPHMKCq7+iZJ71Mvdy/DftXSQ6HcJdSDaqPPKW/mPOBO+lcbvzCU35RCFM2PpwnQKzZQfdgfe0dxH5dLA6uQJ4pC2fIASrkyuA6X6QjxyC1ckVQNn7bNHlI4ZgdXIFUObiJJl8pBCsTjGfuIwA2Cv4FN7xbYjkjqsRAHuIePXoCiDF1Zk2VidXAL+1R5sAq5MrgJb2aBNgdXIF8FV7tAmwOrkCCFs73wysTtYATHFCU3vEEWm6Ci6KvgY/ao86Ik6XogDeaY86Ik6XbjPgSHvkEThCwQy45XpDRK5JbgN4GWkgUyR9H65MRQxgW0SunZ5FezK7pfwd8e8MV8UfAPdF5Jdrg8JrAbPjprZFD2wWyQP6j8ZSEufRmGlgQ9umBBvd5IOgbjFUKLu+XnWBhG+rpsFVZGUo/coJgFVf+aAATAgNACvICpL6jSsAKyH1QcEBmBD2ASwhq+7uF84ALIVWiPUEB7lQsiOEwS2VzQUxmMXSuRCqKpd/zX4rl88FMZg/mLAEcSN+MlP/aKqmpqZmkPkL0hSjwOpNKxwAAAAASUVORK5CYII=',
	    FullscreenEnter: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIvPgo8L3N2Zz4=',
	    FullscreenLeave: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE0SDE5VjE2SDE2VjE5SDE0VjE0TTUsMTRIMTBWMTlIOFYxNkg1VjE0TTgsNUgxMFYxMEg1VjhIOFY1TTE5LDhWMTBIMTRWNUgxNlY4SDE5WiIgLz48L3N2Zz4=',
	    VideoPlay: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTgsNS4xNFYxOS4xNEwxOSwxMi4xNEw4LDUuMTRaIiAvPjwvc3ZnPg==',
	    VideoPause: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE5LjE0SDE4VjUuMTRIMTRNNiwxOS4xNEgxMFY1LjE0SDZWMTkuMTRaIiAvPjwvc3ZnPg==',
	    WhiteTile: 'data:image/png;base64,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',
	    Setting: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADn0lEQVR42u2bzUsVURjGnyO6CPzAMnTjppAo3LTwH1CqTfaxbeOiRS37A0wXtROFVi1aRBs3LWohSIGbQAQXViBGRhG0UIRKUCpK7q/FnOB2uc6cOXNmRnGe3eW+H8/7zLln3vNxpQoVKlQ4wjBFJAFOSRqX1O7osivpvjHmU1nChBZglvSYLYJbS0EanCvIJzWK+gnsyH34/8OuMaYjb265jwCgz6N4SWq3vodbAEmnS/KtBDgoAgyU5BteAOAkMAPcBroc7PskDWfgN+wyDwBdltMMcDI3tYBnde/pHeARMNTErgd4APzweP834oeN1dMkz5DlsFNn/yyv4kdiSK4At4AO4CqwGaDwRmza2B0210qM7YhrXU59ANAq6bWkwQTTn5KO5fIE0uVYlXTeGLOXFMx1DrjlULwKKN41x6DlnIjEEQCckPRe0okCiguJr5LOGGO+xhm5jICJQ1i8LOeJJKPYEQAMKvrtt5ZdjSf2FM0Fq/sZJI2A6UNcvCz36TiDfUcAcE1SPu/U6Mm8k/TFfu6XdFb5iX3dGPM8lQfwNod3+TowBnQ3yddtv1vPIe+b1JIBiwEJ1IAJ208k5W21trWA+V/5CHAcmAtU/A2P/DcCiTAHHE8tgCVhgLvAXgYCk17Jo/yTGfLuWe7Zd72AC8CWB4n3OAz7mLytNkZabAEXMhfeQKYfWEpJZCxA3rGUOZeA/qDF15FpAz47EvlNk9neI2e3jeWCz0BbmvipNkSMMX8kuSZYM8Z8zyqAjbHmaN5mOeYjgIXrU93MWrxHrNQjrqiDkQMLHwG+OdqF3NN3jeXKzU8AoF1SzdH8XKhJUO7HZDXLMbwAwICkJUULFxe0SbqSVQAbw3Xi7Ze0ZLmGAzAKbHs0JGU1QtvAaIjCW4B7ZOvJy2qFa5a730RPtBiaz0CgnkiZi6F5fBZDVMvho7EhcuS3xJJ2hV9IupgTqaLw0hhzab8vq23xOG/r+LDsKjLgYVzxUnU0ltwK2wDezUyJmEwqXgp/PL4rvxthaeCSI+zxuA10J8ZkWdJNSb2SLkvayKHwDRu71+ZajrG941J8agALDQ3GU/a/IvMkYCPzmCbtLNEVmacNtgs5iP9fYVNEV1Q6Hez7yNZSL+J2SarTcpqiyV2iUkG0IvPFvbz5FbEn+KEk3wMjwMeSfCsBXFBdly9CAPk9ydyffpECuB5tZfVJjaKWueOSfinln6YK4lahQoUKRxd/AcRPGTcQCAUQAAAAAElFTkSuQmCC',
	    ChevronRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+',
	    Check: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=',
	    ViewIndicator: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0idmlldy1pbmRpY2F0b3IiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iLTIuNSAtMSAzMCAzMCI+Cgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7ZmlsbDpub25lO30uc3Qxe3N0cm9rZS13aWR0aDo2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCTwvc3R5bGU+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDEyLjUgMCBBIDEyLjUgMTIuNSAwIDAgMCAtMTIuNSAwIEEgMTIuNSAxMi41IDAgMCAwIDEyLjUgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0gMTMgMCBMIDEwIDIgTCAxNiAyIFoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNIDIgMCBBIDIgMiAwIDAgMCAtMiAwIEEgMiAyIDAgMCAwIDIgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGlkPSJpbmRpY2F0b3IiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMTMsMTUuNSkiPjwvcGF0aD4KCTwvZz4KPC9zdmc+'
	};

	/**
	 * @module ImageLoader
	 * @description Image loader with progress based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/ImageLoader.js}
	 */
	const ImageLoader = {

	    /**
	     * Load image
	     * @example PANOLENS.ImageLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     */
	    load: function ( url, onLoad = () => {}, onProgress = () => {}, onError = () => {} ) {

	        // Enable cache
	        THREE__namespace.Cache.enabled = true;

	        let cached, request, arrayBufferView, blob, urlCreator, image, reference;

	        // Reference key
	        for (let iconName in DataImage) {

	            if (DataImage.hasOwnProperty(iconName) && url === DataImage[iconName]) {

	                reference = iconName;

	            }

	        }

	        // Cached
	        cached = THREE__namespace.Cache.get(reference ? reference : url);

	        if (cached !== undefined) {

	            if (onLoad) {

	                if ( cached.complete && cached.src ) {
	                    setTimeout( function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, 0 );
	                } else {
	                    cached.addEventListener( 'load', function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, false );
	                }

	            }

	            return cached;

	        }

	        // Construct a new XMLHttpRequest
	        urlCreator = window.URL || window.webkitURL;
	        image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');

	        // Add to cache
	        THREE__namespace.Cache.add(reference ? reference : url, image);

	        const onImageLoaded = () => {

	            urlCreator.revokeObjectURL(image.src);
	            onLoad(image);

	        };

	        if (url.indexOf('data:') === 0) {

	            image.addEventListener('load', onImageLoaded, false);
	            image.src = url;
	            return image;
	        }

	        image.crossOrigin = this.crossOrigin !== undefined ? this.crossOrigin : '';

	        request = new window.XMLHttpRequest();
	        request.open('GET', url, true);
	        request.responseType = 'arraybuffer';
	        request.addEventListener( 'error', onError );
	        request.addEventListener( 'progress', event => {

	            if  ( !event ) return;

	            const { loaded, total, lengthComputable } = event;
	            
	            if ( lengthComputable ) {
		
	                onProgress( { loaded, total } );
		
	            }
		
	        } );
	        
	        request.addEventListener( 'loadend', event => {

	            if  ( !event ) return;
	            const { currentTarget: { response } } = event;

	            arrayBufferView = new Uint8Array( response );
	            blob = new window.Blob( [ arrayBufferView ] );
					
	            image.addEventListener( 'load', onImageLoaded, false );
	            image.src = urlCreator.createObjectURL( blob );
		
	        } );
		
	        request.send(null);
		
	    }

	};

	/**
	 * @module TextureLoader
	 * @description Texture loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/TextureLoader.js}
	 */
	const TextureLoader = {

	    /**
	     * Load image texture
	     * @example PANOLENS.TextureLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.Texture}   	 - Image texture
	     */
	    load: function ( url, onLoad = () => {}, onProgress, onError ) {

	        var texture = new THREE__namespace.Texture(); 

	        ImageLoader.load( url, function ( image ) {

	            texture.image = image;

	            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
	            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

	            texture.format = isJPEG ? THREE__namespace.RGBFormat : THREE__namespace.RGBAFormat;
	            texture.needsUpdate = true;

	            onLoad( texture );

	        }, onProgress, onError );

	        return texture;

	    }

	};

	/**
	 * @module CubeTextureLoader
	 * @description Cube Texture Loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/CubeTextureLoader.js}
	 */
	const CubeTextureLoader = {

	    /**
	     * Load 6 images as a cube texture
	     * @example PANOLENS.CubeTextureLoader.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] )
	     * @method load
	     * @param  {array}   urls        - array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.CubeTexture}   - Cube texture
	     */
	    load: function ( urls, onLoad = () => {}, onProgress = () => {}, onError ) {

		   var texture, loaded, progress, all, loadings;

		   texture = new THREE__namespace.CubeTexture( [] );

		   loaded = 0;
		   progress = {};
		   all = {};

		   urls.map( function ( url, index ) {

			   ImageLoader.load( url, function ( image ) {

				   texture.images[ index ] = image;

				   loaded++;

				   if ( loaded === 6 ) {

					   texture.needsUpdate = true;

					   onLoad( texture );

				   }

			   }, function ( event ) {

				   progress[ index ] = { loaded: event.loaded, total: event.total };

				   all.loaded = 0;
				   all.total = 0;
				   loadings = 0;

				   for ( var i in progress ) {

					   loadings++;
					   all.loaded += progress[ i ].loaded;
					   all.total += progress[ i ].total;

				   }

				   if ( loadings < 6 ) {

					   all.total = all.total / loadings * 6;

				   }

				   onProgress( all );

			   }, onError );

		   } );

		   return texture;

	    }

	};

	/**
	 * @classdesc User Media
	 * @constructor
	 * @param {object} [constraints={ video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false }]
	 */
	function Media ( constraints ) {

	    const defaultConstraints = { video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false };

	    this.constraints = Object.assign( defaultConstraints, constraints );

	    this.container = null;
	    this.scene = null;
	    this.element = null;
	    this.devices = [];
	    this.stream = null;
	    this.ratioScalar = 1;
	    this.videoDeviceIndex = 0;

	}
	Media.prototype = Object.assign( Object.create( THREE__namespace.EventDispatcher.prototype ), {

	    setContainer: function ( container ) {

	        this.container = container;

	    },

	    setScene: function ( scene ) {

	        this.scene = scene;

	    },

	    /**
	     * Enumerate devices
	     * @memberOf Media
	     * @instance
	     * @returns {Promise}
	     */
	    enumerateDevices: function () {

	        const devices = this.devices;
	        const resolvedPromise = new Promise( resolve => { resolve( devices ); } );

	        return devices.length > 0 ? resolvedPromise : window.navigator.mediaDevices.enumerateDevices();

	    },

	    /**
	     * Switch to next available video device
	     * @memberOf Media
	     * @instance
	     */
	    switchNextVideoDevice: function () {

	        const stop = this.stop.bind( this );
	        const start = this.start.bind( this );
	        const setVideDeviceIndex = this.setVideDeviceIndex.bind( this );

	        let index = this.videoDeviceIndex;

	        this.getDevices( 'video' )
	            .then( devices => {
	                stop();
	                index++;
	                if ( index >= devices.length ) {
	                    setVideDeviceIndex( 0 );
	                    index--;
	                } else {
	                    setVideDeviceIndex( index );
	                }

	                start( devices[ index ] );
	            

	            } );

	    },

	    /**
	     * Get devices
	     * @param {string} type - type keyword to match device.kind
	     * @memberOf Media
	     * @instance
	     */
	    getDevices: function ( type = 'video' ) {

	        const devices = this.devices;
	        const validate = _devices => {

	            return _devices.map( device => { 
	                
	                if ( !devices.includes( device ) ) { devices.push( device ); }
	                return device; 
	            
	            } );
	            
	        };
	        const filter = _devices => {

	            const reg = new RegExp( type, 'i' );
	            return _devices.filter( device => reg.test( device.kind ) );

	        };

	        return this.enumerateDevices()
	            .then( validate )
	            .then( filter );

	    },

	    /**
	     * Get user media
	     * @param {MediaStreamConstraints} constraints
	     * @memberOf Media
	     * @instance
	     */
	    getUserMedia: function ( constraints ) {

	        const setMediaStream = this.setMediaStream.bind( this );
	        const playVideo = this.playVideo.bind( this );
	        const onCatchError = error => { console.warn( `PANOLENS.Media: ${error}` ); };

	        return window.navigator.mediaDevices.getUserMedia( constraints )
	            .then( setMediaStream )
	            .then( playVideo )
	            .catch( onCatchError );

	    },

	    /**
	     * Set video device index
	     * @param {number} index 
	     * @memberOf Media
	     * @instance
	     */
	    setVideDeviceIndex: function ( index ) {

	        this.videoDeviceIndex = index;

	    },

	    /**
	     * Start streaming
	     * @param {MediaDeviceInfo} [targetDevice]
	     * @memberOf Media
	     * @instance
	     */
	    start: function( targetDevice ) {

	        const constraints = this.constraints;
	        const getUserMedia = this.getUserMedia.bind( this );
	        const onVideoDevices = devices => {

	            if ( !devices || devices.length === 0 ) {

	                throw Error( 'no video device found' );

	            }

	            const device = targetDevice || devices[ 0 ];
	            constraints.video.deviceId = device.deviceId;

	            return getUserMedia( constraints );

	        };

	        this.element = this.createVideoElement();

	        return this.getDevices().then( onVideoDevices );

	    },

	    /**
	     * Stop streaming
	     * @memberOf Media
	     * @instance
	     */
	    stop: function () {

	        const stream = this.stream;

	        if ( stream && stream.active ) {

	            const track = stream.getTracks()[ 0 ];

	            track.stop();

	            window.removeEventListener( 'resize', this.onWindowResize.bind( this ) );

	            this.element = null;
	            this.stream = null;

	        }

	    },

	    /**
	     * Set media stream
	     * @param {MediaStream} stream 
	     * @memberOf Media
	     * @instance
	     */
	    setMediaStream: function ( stream ) {

	        this.stream = stream;
	        this.element.srcObject = stream;

	        if ( this.scene ) {

	            this.scene.background = this.createVideoTexture();

	        }
	        
	        window.addEventListener( 'resize', this.onWindowResize.bind( this ) );

	    },

	    /**
	     * Play video element
	     * @memberOf Media
	     * @instance
	     */
	    playVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.play();
	            this.dispatchEvent( { type: 'play' } );

	        }

	    },

	    /**
	     * Pause video element
	     * @memberOf Media
	     * @instance
	     */
	    pauseVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.pause();
	            this.dispatchEvent( { type: 'pause' } );

	        }

	    },

	    /**
	     * Create video texture
	     * @memberOf Media
	     * @instance
	     * @returns {THREE.VideoTexture}
	     */
	    createVideoTexture: function () {

	        const video = this.element;
	        const texture = new THREE__namespace.VideoTexture( video );

	        texture.generateMipmaps = false;
	        texture.minFilter = THREE__namespace.LinearFilter;
	        texture.magFilter = THREE__namespace.LinearFilter;
	        texture.format = THREE__namespace.RGBFormat;
	        texture.center.set( 0.5, 0.5 );

	        video.addEventListener( 'canplay', this.onWindowResize.bind( this ) );

	        return texture;

	    },

	    /**
	     * Create video element
	     * @memberOf Media
	     * @instance
	     * @returns {HTMLVideoElement}
	     * @fires Media#canplay
	     */
	    createVideoElement: function() {

	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const video = document.createElement( 'video' );

	        /**
	         * Video can play event
	         * @type {object}
	         * @event Media#canplay
	         */
	        const canPlay = () => dispatchEvent( { type: 'canplay' } );
	        
	        video.setAttribute( 'autoplay', '' );
	        video.setAttribute( 'muted', '' );
	        video.setAttribute( 'playsinline', '' );

	        video.style.position = 'absolute';
	        video.style.top = '0';
	        video.style.left = '0';
	        video.style.width = '100%';
	        video.style.height = '100%';
	        video.style.objectPosition = 'center';
	        video.style.objectFit = 'cover';
	        video.style.display = this.scene ? 'none' : '';

	        video.addEventListener( 'canplay', canPlay );

	        return video;

	    },

	    /**
	     * On window resize event
	     * @param {Event} event 
	     * @memberOf Media
	     * @instance
	     */
	    onWindowResize: function () {

	        if ( this.element && this.element.videoWidth && this.element.videoHeight && this.scene ) {

	            const { clientWidth: width, clientHeight: height } = this.container;
	            const texture = this.scene.background;
	            const { videoWidth, videoHeight } = this.element;
	            const cameraRatio = videoHeight / videoWidth;
	            const viewportRatio = this.container ? width / height : 1.0;
	            const ratio = cameraRatio * viewportRatio * this.ratioScalar;

	            if ( width > height ) {
	                texture.repeat.set( ratio, 1 );
	            } else {
	                texture.repeat.set( 1, 1 / ratio );
	            }

	        }

	    }

	} );

	/**
	 * @classdesc Reticle 3D Sprite
	 * @constructor
	 * @param {THREE.Color} [color=0xffffff] - Color of the reticle sprite
	 * @param {boolean} [autoSelect=true] - Auto selection
	 * @param {number} [dwellTime=1500] - Duration for dwelling sequence to complete
	 */
	class Reticle extends THREE__namespace.Sprite {
	    constructor( color = 0xffffff, autoSelect = true, dwellTime = 1500 ) {
	        const { canvas, context } = Reticle.createCanvas(window.devicePixelRatio);
	        const material = new THREE__namespace.SpriteMaterial( { color, map: Reticle.createCanvasTexture( canvas ) } );
	        super(material);

	        this.dpr = window.devicePixelRatio;
	  
	        this.canvasWidth = canvas.width;
	        this.canvasHeight = canvas.height;
	        this.context = context;
	        this.color = color instanceof THREE__namespace.Color ? color : new THREE__namespace.Color( color );    
	  
	        this.autoSelect = autoSelect;
	        this.dwellTime = dwellTime;
	        this.rippleDuration = 500;
	        this.position.z = -10;
	        this.center.set( 0.5, 0.5 );
	        this.scale.set( 0.5, 0.5, 1 );
	  
	        this.startTimestamp = null;
	        this.timerId = null;
	        this.callback = null;
	  
	        this.frustumCulled = false;
	  
	        this.updateCanvasArcByProgress( 0 );
	    }

	    /**
	     * Set material color
	     * @param {THREE.Color} color 
	     * @memberOf Reticle
	     * @instance
	     */
	    setColor ( color ) {

	        this.material.color.copy( color instanceof THREE__namespace.Color ? color : new THREE__namespace.Color( color ) );
	  
	    }
	  
	    /**
	     * Create canvas texture
	     * @param {HTMLCanvasElement} canvas 
	     * @memberOf Reticle
	     * @instance
	     * @returns {THREE.CanvasTexture}
	     */
	    static createCanvasTexture ( canvas ) {
	  
	        const texture = new THREE__namespace.CanvasTexture( canvas );
	        texture.minFilter = THREE__namespace.LinearFilter;
	        texture.magFilter = THREE__namespace.LinearFilter;
	        texture.generateMipmaps = false;
	  
	        return texture;

	    }
	  
	    /**
	     * Create canvas element
	     * @memberOf Reticle
	     * @instance
	     * @returns {object} object
	     * @returns {HTMLCanvasElement} object.canvas
	     * @returns {CanvasRenderingContext2D} object.context
	     */
	    static createCanvas (dpr) {
	        const width = 32;
	        const height = 32;
	        const canvas = document.createElement( 'canvas' );
	        const context = canvas.getContext( '2d' );
	  
	        canvas.width = width * dpr;
	        canvas.height = height * dpr;
	        context.scale( dpr, dpr );
	  
	        context.shadowBlur = 5;
	        context.shadowColor = 'rgba(200,200,200,0.9)';
	  
	        return { canvas, context };
	    }
	  
	    /**
	     * Update canvas arc by progress
	     * @param {number} progress 
	     * @memberOf Reticle
	     * @instance
	     */
	    updateCanvasArcByProgress ( progress ) {
	  
	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const dpr = this.dpr;
	        const degree = progress * Math.PI * 2;
	        const color = this.color.getStyle();
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;
	        const lineWidth = 3;
	          
	        context.clearRect( 0, 0, canvasWidth, canvasHeight );
	        context.beginPath();
	  
	        if ( progress === 0 ) {
	            context.arc( x, y, canvasWidth / 16, 0, 2 * Math.PI );
	            context.fillStyle = color;
	            context.fill();
	        } else {
	            context.arc( x, y, canvasWidth / 4 - lineWidth, -Math.PI / 2, -Math.PI / 2 + degree );
	            context.strokeStyle = color;
	            context.lineWidth = lineWidth;
	            context.stroke();
	        }
	  
	        context.closePath();
	  
	        material.map.needsUpdate = true;
	  
	    }
	  
	    /**
	     * Ripple effect
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-ripple-start
	     * @fires Reticle#reticle-ripple-end
	     */
	    ripple() {
	  
	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const duration = this.rippleDuration;
	        const timestamp = performance.now();
	        const color = this.color;
	        const dpr = this.dpr;
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;
	  
	        const update = () => {
	  
	            const timerId = window.requestAnimationFrame( update );
	            const elapsed = performance.now() - timestamp;
	            const progress = elapsed / duration;
	            const opacity = 1.0 - progress > 0 ? 1.0 - progress : 0;
	            const radius = progress * canvasWidth * 0.5 / dpr;
	  
	            context.clearRect( 0, 0, canvasWidth, canvasHeight );
	            context.beginPath();
	            context.arc( x, y, radius, 0, Math.PI * 2 );
	            context.fillStyle = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${opacity})`;
	            context.fill();
	            context.closePath();
	  
	            if ( progress >= 1.0 ) {
	  
	                window.cancelAnimationFrame( timerId );
	                this.updateCanvasArcByProgress( 0 );
	  
	                /**
	                 * Reticle ripple end event
	                 * @type {object}
	                 * @event Reticle#reticle-ripple-end
	                 */
	                this.dispatchEvent( { type: 'reticle-ripple-end' } );
	  
	            }
	  
	            material.map.needsUpdate = true;
	  
	        };
	  
	        /**
	         * Reticle ripple start event
	         * @type {object}
	         * @event Reticle#reticle-ripple-start
	         */
	        this.dispatchEvent( { type: 'reticle-ripple-start' } );
	  
	        update();
	  
	    }
	  
	    /**
	     * Make reticle visible
	     * @memberOf Reticle
	     * @instance
	     */
	    show () {
	  
	        this.visible = true;
	  
	    }
	  
	    /**
	     * Make reticle invisible
	     * @memberOf Reticle
	     * @instance
	     */
	    hide () {
	  
	        this.visible = false;
	  
	    }
	  
	    /**
	     * Start dwelling
	     * @param {function} callback 
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-start
	     */
	    start ( callback ) {
	  
	        if ( !this.autoSelect ) {
	  
	            return;
	  
	        }
	  
	        /**
	         * Reticle start event
	         * @type {object}
	         * @event Reticle#reticle-start
	         */
	        this.dispatchEvent( { type: 'reticle-start' } );
	  
	        this.startTimestamp = performance.now();
	        this.callback = callback;
	        this.update();
	  
	    }
	  
	    /**
	     * End dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-end
	     */
	    end(){
	  
	        if ( !this.startTimestamp ) { return; }
	  
	        window.cancelAnimationFrame( this.timerId );
	  
	        this.updateCanvasArcByProgress( 0 );
	        this.callback = null;
	        this.timerId = null;
	        this.startTimestamp = null;
	  
	        /**
	         * Reticle end event
	         * @type {object}
	         * @event Reticle#reticle-end
	         */
	        this.dispatchEvent( { type: 'reticle-end' } );
	  
	    }
	  
	    /**
	     * Update dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-update
	     */
	    update () {
	  
	        this.timerId = window.requestAnimationFrame( this.update.bind( this ) );
	  
	        const elapsed = performance.now() - this.startTimestamp;
	        const progress = elapsed / this.dwellTime;
	  
	        this.updateCanvasArcByProgress( progress );
	  
	        /**
	         * Reticle update event
	         * @type {object}
	         * @event Reticle#reticle-update
	         */
	        this.dispatchEvent( { type: 'reticle-update', progress } );
	  
	        if ( progress >= 1.0 ) {
	  
	            window.cancelAnimationFrame( this.timerId );
	            if ( this.callback ) { this.callback(); }
	            this.end();
	            this.ripple();
	  
	        }
	  
	    }  
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var Tween = createCommonjsModule(function (module, exports) {
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */


	var _Group = function () {
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
	};

	_Group.prototype = {
		getAll: function () {

			return Object.keys(this._tweens).map(function (tweenId) {
				return this._tweens[tweenId];
			}.bind(this));

		},

		removeAll: function () {

			this._tweens = {};

		},

		add: function (tween) {

			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;

		},

		remove: function (tween) {

			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];

		},

		update: function (time, preserve) {

			var tweenIds = Object.keys(this._tweens);

			if (tweenIds.length === 0) {
				return false;
			}

			time = time !== undefined ? time : TWEEN.now();

			// Tweens are updated in "batches". If you add a new tween during an update, then the
			// new tween will be updated in the next batch.
			// If you remove a tween during an update, it may or may not be updated. However,
			// if the removed tween was added during the current batch, then it will not be updated.
			while (tweenIds.length > 0) {
				this._tweensAddedDuringUpdate = {};

				for (var i = 0; i < tweenIds.length; i++) {

					var tween = this._tweens[tweenIds[i]];

					if (tween && tween.update(time) === false) {
						tween._isPlaying = false;

						if (!preserve) {
							delete this._tweens[tweenIds[i]];
						}
					}
				}

				tweenIds = Object.keys(this._tweensAddedDuringUpdate);
			}

			return true;

		}
	};

	var TWEEN = new _Group();

	TWEEN.Group = _Group;
	TWEEN._nextId = 0;
	TWEEN.nextId = function () {
		return TWEEN._nextId++;
	};


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use self.performance.now if it is available.
	else if (typeof (self) !== 'undefined' &&
	         self.performance !== undefined &&
			 self.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = self.performance.now.bind(self.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object, group) {
		this._object = object;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1000;
		this._repeat = 0;
		this._repeatDelayTime = undefined;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = null;
		this._easingFunction = TWEEN.Easing.Linear.None;
		this._interpolationFunction = TWEEN.Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallback = null;
		this._onStartCallbackFired = false;
		this._onUpdateCallback = null;
		this._onRepeatCallback = null;
		this._onCompleteCallback = null;
		this._onStopCallback = null;
		this._group = group || TWEEN;
		this._id = TWEEN.nextId();

	};

	TWEEN.Tween.prototype = {
		getId: function () {
			return this._id;
		},

		isPlaying: function () {
			return this._isPlaying;
		},

		to: function (properties, duration) {

			this._valuesEnd = properties;

			if (duration !== undefined) {
				this._duration = duration;
			}

			return this;

		},

		duration: function duration(d) {
			this._duration = d;
			return this;
		},

		start: function (time) {

			this._group.add(this);

			this._isPlaying = true;

			this._onStartCallbackFired = false;

			this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
			this._startTime += this._delayTime;

			for (var property in this._valuesEnd) {

				// Check if an Array was provided as property value
				if (this._valuesEnd[property] instanceof Array) {

					if (this._valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (this._object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				this._valuesStart[property] = this._object[property];

				if ((this._valuesStart[property] instanceof Array) === false) {
					this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

			}

			return this;

		},

		stop: function () {

			if (!this._isPlaying) {
				return this;
			}

			this._group.remove(this);
			this._isPlaying = false;

			if (this._onStopCallback !== null) {
				this._onStopCallback(this._object);
			}

			this.stopChainedTweens();
			return this;

		},

		end: function () {

			this.update(Infinity);
			return this;

		},

		stopChainedTweens: function () {

			for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
				this._chainedTweens[i].stop();
			}

		},

		group: function (group) {
			this._group = group;
			return this;
		},

		delay: function (amount) {

			this._delayTime = amount;
			return this;

		},

		repeat: function (times) {

			this._repeat = times;
			return this;

		},

		repeatDelay: function (amount) {

			this._repeatDelayTime = amount;
			return this;

		},

		yoyo: function (yoyo) {

			this._yoyo = yoyo;
			return this;

		},

		easing: function (easingFunction) {

			this._easingFunction = easingFunction;
			return this;

		},

		interpolation: function (interpolationFunction) {

			this._interpolationFunction = interpolationFunction;
			return this;

		},

		chain: function () {

			this._chainedTweens = arguments;
			return this;

		},

		onStart: function (callback) {

			this._onStartCallback = callback;
			return this;

		},

		onUpdate: function (callback) {

			this._onUpdateCallback = callback;
			return this;

		},

		onRepeat: function onRepeat(callback) {

			this._onRepeatCallback = callback;
			return this;

		},

		onComplete: function (callback) {

			this._onCompleteCallback = callback;
			return this;

		},

		onStop: function (callback) {

			this._onStopCallback = callback;
			return this;

		},

		update: function (time) {

			var property;
			var elapsed;
			var value;

			if (time < this._startTime) {
				return true;
			}

			if (this._onStartCallbackFired === false) {

				if (this._onStartCallback !== null) {
					this._onStartCallback(this._object);
				}

				this._onStartCallbackFired = true;
			}

			elapsed = (time - this._startTime) / this._duration;
			elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

			value = this._easingFunction(elapsed);

			for (property in this._valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (this._valuesStart[property] === undefined) {
					continue;
				}

				var start = this._valuesStart[property] || 0;
				var end = this._valuesEnd[property];

				if (end instanceof Array) {

					this._object[property] = this._interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						this._object[property] = start + (end - start) * value;
					}

				}

			}

			if (this._onUpdateCallback !== null) {
				this._onUpdateCallback(this._object, elapsed);
			}

			if (elapsed === 1) {

				if (this._repeat > 0) {

					if (isFinite(this._repeat)) {
						this._repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in this._valuesStartRepeat) {

						if (typeof (this._valuesEnd[property]) === 'string') {
							this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
						}

						if (this._yoyo) {
							var tmp = this._valuesStartRepeat[property];

							this._valuesStartRepeat[property] = this._valuesEnd[property];
							this._valuesEnd[property] = tmp;
						}

						this._valuesStart[property] = this._valuesStartRepeat[property];

					}

					if (this._yoyo) {
						this._reversed = !this._reversed;
					}

					if (this._repeatDelayTime !== undefined) {
						this._startTime = time + this._repeatDelayTime;
					} else {
						this._startTime = time + this._delayTime;
					}

					if (this._onRepeatCallback !== null) {
						this._onRepeatCallback(this._object);
					}

					return true;

				} else {

					if (this._onCompleteCallback !== null) {

						this._onCompleteCallback(this._object);
					}

					for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						this._chainedTweens[i].start(this._startTime + this._duration);
					}

					return false;

				}

			}

			return true;

		}
	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		{

			// Node.js
			module.exports = TWEEN;

		}

	})();
	});

	/**
	 * @classdesc Information spot attached to panorama
	 * @constructor
	 * @param {number} [scale=300] - Default scale
	 * @param {string} [imageSrc=PANOLENS.DataImage.Info] - Image overlay info
	 * @param {boolean} [animated=true] - Enable default hover animation
	 */
	class Infospot extends THREE__namespace.Sprite {

	    constructor( scale = 300, imageSrc, animated ) {
	        super();
	        const duration = 500, scaleFactor = 1.3;

	        imageSrc = imageSrc || DataImage.Info;

	        this.type = 'infospot';

	        this.animated = animated !== undefined ? animated : true;
	        this.isHovering = false;

	        /*
	         * TODO: Three.js bug hotfix for sprite raycasting r104
	         * https://github.com/mrdoob/three.js/issues/14624
	         */
	        this.frustumCulled = false;

	        this.element = null;
	        this.toPanorama = null;
	        this.cursorStyle = null;

	        this.mode = MODES.NORMAL;

	        this.scale.set( scale, scale, 1 );
	        this.rotation.y = Math.PI;

	        this.container = null;

	        this.originalRaycast = this.raycast;

	        // Event Handler
	        this.HANDLER_FOCUS = null;	

	        this.material.side = THREE__namespace.DoubleSide;
	        this.material.depthTest = false;
	        this.material.transparent = true;
	        this.material.opacity = 0;

	        this.scaleUpAnimation = new Tween.Tween();
	        this.scaleDownAnimation = new Tween.Tween();


	        const postLoad = function ( texture ) {

	            if ( !this.material ) { return; }

	            const ratio = texture.image.width / texture.image.height;
	            const textureScale = new THREE__namespace.Vector3();

	            texture.image.width = texture.image.naturalWidth || 64;
	            texture.image.height = texture.image.naturalHeight || 64;

	            this.scale.set( ratio * scale, scale, 1 );

	            textureScale.copy( this.scale );

	            this.scaleUpAnimation = new Tween.Tween( this.scale )
	                .to( { x: textureScale.x * scaleFactor, y: textureScale.y * scaleFactor }, duration )
	                .easing( Tween.Easing.Elastic.Out );

	            this.scaleDownAnimation = new Tween.Tween( this.scale )
	                .to( { x: textureScale.x, y: textureScale.y }, duration )
	                .easing( Tween.Easing.Elastic.Out );

	            this.material.map = texture;
	            this.material.needsUpdate = true;

	        }.bind( this );

	        // Add show and hide animations
	        this.showAnimation = new Tween.Tween( this.material )
	            .to( { opacity: 1 }, duration )
	            .onStart( this.enableRaycast.bind( this, true ) )
	            .easing( Tween.Easing.Quartic.Out );

	        this.hideAnimation = new Tween.Tween( this.material )
	            .to( { opacity: 0 }, duration )
	            .onStart( this.enableRaycast.bind( this, false ) )
	            .easing( Tween.Easing.Quartic.Out );

	        // Attach event listeners
	        this.addEventListener( 'click', this.onClick );
	        this.addEventListener( 'hover', this.onHover );
	        this.addEventListener( 'hoverenter', this.onHoverStart );
	        this.addEventListener( 'hoverleave', this.onHoverEnd );
	        this.addEventListener( 'panolens-dual-eye-effect', this.onDualEyeEffect );
	        this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
	        this.addEventListener( 'dismiss', this.onDismiss );
	        this.addEventListener( 'panolens-infospot-focus', this.setFocusMethod );

	        TextureLoader.load( imageSrc, postLoad );	
	    }
		

	    /**
	     * Set infospot container
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Infospot
	     * @instance
	     */
	    setContainer ( data ) {

	        let container;

	        if ( data instanceof HTMLElement ) {

	            container = data;

	        } else if ( data && data.container ) {

	            container = data.container;

	        }

	        // Append element if exists
	        if ( container && this.element ) {

	            container.appendChild( this.element );

	        }

	        this.container = container;

	    }

	    /**
	     * Get container
	     * @memberOf Infospot
	     * @instance
	     * @return {HTMLElement} - The container of this infospot
	     */
	    getContainer () {

	        return this.container;

	    }

	    /**
	     * This will be called by a click event
	     * Translate and lock the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onClick ( event ) {

	        if ( this.element && this.getContainer() ) {

	            this.onHoverStart( event );

	            // Lock element
	            this.lockHoverElement();

	        }

	    }

	    /**
	     * Dismiss current element if any
	     * @param  {object} event - Dismiss event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDismiss () {

	        if ( this.element ) {

	            this.unlockHoverElement();
	            this.onHoverEnd();

	        }

	    }

	    /**
	     * This will be called by a mouse hover event
	     * Translate the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onHover () {}

	    /**
	     * This will be called on a mouse hover start
	     * Sets cursor style to 'pointer', display the element and scale up the infospot
	     * @param {object} event
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverStart ( event ) {

	        if ( !this.getContainer() ) { return; }

	        const cursorStyle = this.cursorStyle || ( this.mode === MODES.NORMAL ? 'pointer' : 'default' );
	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = true;
	        this.container.style.cursor = cursorStyle;
	  
	        if ( this.animated ) {

	            scaleDownAnimation.stop();
	            scaleUpAnimation.start();

	        }
	  
	        if ( element && event.mouseEvent.clientX >= 0 && event.mouseEvent.clientY >= 0 ) {

	            const { left, right, style } = element;

	            if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	                style.display = 'none';
	                left.style.display = 'block';
	                right.style.display = 'block';

	                // Store element width for reference
	                element._width = left.clientWidth;
	                element._height = left.clientHeight;

	            } else {

	                style.display = 'block';
	                if ( left ) { left.style.display = 'none'; }
	                if ( right ) { right.style.display = 'none'; }

	                // Store element width for reference
	                element._width = element.clientWidth;
	                element._height = element.clientHeight;

	            }
	    
	        }

	    }

	    /**
	     * This will be called on a mouse hover end
	     * Sets cursor style to 'default', hide the element and scale down the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverEnd () {

	        if ( !this.getContainer() ) { return; }

	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = false;
	        this.container.style.cursor = 'default';

	        if ( this.animated ) {

	            scaleUpAnimation.stop();
	            scaleDownAnimation.start();

	        }

	        if ( element && !this.element.locked ) {

	            const { left, right, style } = element;

	            style.display = 'none';
	            if ( left ) { left.style.display = 'none'; }
	            if ( right ) { right.style.display = 'none'; }

	            this.unlockHoverElement();

	        }

	    }

	    /**
	     * On dual eye effect handler
	     * Creates duplicate left and right element
	     * @param  {object} event - panolens-dual-eye-effect event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDualEyeEffect ( event ) {
	  
	        if ( !this.getContainer() ) { return; }

	        let element, halfWidth, halfHeight;

	        this.mode = event.mode;

	        element = this.element;

	        halfWidth = this.container.clientWidth / 2;
	        halfHeight = this.container.clientHeight / 2;

	        if ( !element ) {

	            return;

	        }

	        if ( !element.left && !element.right ) {

	            element.left = element.cloneNode( true );
	            element.right = element.cloneNode( true );

	        }

	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	            element.left.style.display = element.style.display;
	            element.right.style.display = element.style.display;
	            element.style.display = 'none';

	        } else {

	            element.style.display = element.left.style.display;
	            element.left.style.display = 'none';
	            element.right.style.display = 'none';

	        }

	        // Update elements translation
	        this.translateElement( halfWidth, halfHeight );

	        this.container.appendChild( element.left );
	        this.container.appendChild( element.right );

	    }

	    /**
	     * Translate the hovering element by css transform
	     * @param  {number} x - X position on the window screen
	     * @param  {number} y - Y position on the window screen
	     * @memberOf Infospot
	     * @instance
	     */
	    translateElement ( x, y ) {

	        if ( !this.element._width || !this.element._height || !this.getContainer() ) {

	            return;

	        }

	        let left, top, element, width, height, delta, container;

	        container = this.container;
	        element = this.element;
	        width = element._width / 2;
	        height = element._height / 2;
	        delta = element.verticalDelta !== undefined ? element.verticalDelta : 40;

	        left = x - width;
	        top = y - height - delta;

	        if ( ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) 
	      && element.left && element.right
	      && !( x === container.clientWidth / 2 && y === container.clientHeight / 2 ) ) {

	            left = container.clientWidth / 4 - width + ( x - container.clientWidth / 2 );
	            top = container.clientHeight / 2 - height - delta + ( y - container.clientHeight / 2 );

	            this.setElementStyle( 'transform', element.left, 'translate(' + left + 'px, ' + top + 'px)' );

	            left += container.clientWidth / 2;

	            this.setElementStyle( 'transform', element.right, 'translate(' + left + 'px, ' + top + 'px)' );

	        } else {

	            this.setElementStyle( 'transform', element, 'translate(' + left + 'px, ' + top + 'px)' );

	        }

	    }

	    /**
	     * Set vendor specific css
	     * @param {string} type - CSS style name
	     * @param {HTMLElement} element - The element to be modified
	     * @param {string} value - Style value
	     * @memberOf Infospot
	     * @instance
	     */
	    setElementStyle ( type, element, value ) {

	        const style = element.style;

	        if ( type === 'transform' ) {

	            style.webkitTransform = style.msTransform = style.transform = value;

	        }

	    }

	    /**
	     * Set hovering text content
	     * @param {string} text - Text to be displayed
	     * @memberOf Infospot
	     * @instance
	     */
	    setText ( text ) {

	        if ( this.element ) {

	            this.element.textContent = text;

	        }

	    }

	    /**
	     * Set cursor css style on hover
	     * @memberOf Infospot
	     * @instance
	     */
	    setCursorHoverStyle ( style ) {

	        this.cursorStyle = style;

	    }

	    /**
	     * Add hovering text element
	     * @param {string} text - Text to be displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverText ( text, delta = 40 ) {

	        if ( !this.element ) {

	            this.element = document.createElement( 'div' );
	            this.element.style.display = 'none';
	            this.element.style.color = '#fff';
	            this.element.style.top = 0;
	            this.element.style.maxWidth = '50%';
	            this.element.style.maxHeight = '50%';
	            this.element.style.textShadow = '0 0 3px #000000';
	            this.element.style.fontFamily = '"Trebuchet MS", Helvetica, sans-serif';
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	        this.setText( text );

	    }

	    /**
	     * Add hovering element by cloning an element
	     * @param {HTMLDOMElement} el - Element to be cloned and displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverElement ( el, delta = 40 ) {

	        if ( !this.element ) { 

	            this.element = el.cloneNode( true );
	            this.element.style.display = 'none';
	            this.element.style.top = 0;
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	    }

	    /**
	     * Remove hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    removeHoverElement () {

	        if ( this.element ) { 

	            if ( this.element.left ) {

	                this.container.removeChild( this.element.left );
	                this.element.left = null;

	            }

	            if ( this.element.right ) {

	                this.container.removeChild( this.element.right );
	                this.element.right = null;

	            }

	            this.container.removeChild( this.element );
	            this.element = null;

	        }

	    }

	    /**
	     * Lock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    lockHoverElement () {

	        if ( this.element ) { 

	            this.element.locked = true;

	        }

	    }

	    /**
	     * Unlock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    unlockHoverElement () {

	        if ( this.element ) { 

	            this.element.locked = false;

	        }

	    }

	    /**
	     * Enable raycasting
	     * @param {boolean} [enabled=true]
	     * @memberOf Infospot
	     * @instance
	     */
	    enableRaycast ( enabled = true ) {

	        if ( enabled ) {

	            this.raycast = this.originalRaycast;

	        } else {

	            this.raycast = () => {};

	        }

	    }

	    /**
	     * Show infospot
	     * @param  {number} [delay=0] - Delay time to show
	     * @memberOf Infospot
	     * @instance
	     */
	    show ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material } = this;

	        if ( animated ) {

	            hideAnimation.stop();
	            showAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( true );
	            material.opacity = 1;

	        }

	    }

	    /**
	     * Hide infospot
	     * @param  {number} [delay=0] - Delay time to hide
	     * @memberOf Infospot
	     * @instance
	     */
	    hide ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material, element } = this;

	        if ( element ) {
	            const { style } = element;
	            style.display = 'none';
	        }

	        if ( animated ) {

	            showAnimation.stop();
	            hideAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( false );
	            material.opacity = 0;

	        }
	  
	    }

	    /**
	     * Set focus event handler
	     * @memberOf Infospot
	     * @instance
	     */
	    setFocusMethod ( event ) {

	        if ( event ) {

	            this.HANDLER_FOCUS = event.method;

	        }

	    }

	    /**
	     * Focus camera center to this infospot
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Infospot
	     * @instance
	     */
	    focus ( duration, easing ) {

	        if ( this.HANDLER_FOCUS ) {

	            this.HANDLER_FOCUS( this.position, duration, easing );
	            this.onDismiss();

	        }

	    }

	    /**
	     * Dispose
	     * @memberOf Infospot
	     * @instance
	     */
	    dispose () {

	        const { geometry, material } = this;
	        const { map } = material;

	        this.removeHoverElement();

	        if ( this.parent ) {

	            this.parent.remove( this );

	        }

	        if ( map ) { map.dispose(); material.map = null; }
	        if ( geometry ) { geometry.dispose(); this.geometry = null; }
	        if ( material ) { material.dispose(); this.material = null; }

	    }



	}

	/**
	 * @classdesc Widget for controls
	 * @constructor
	 * @param {HTMLElement} container - A domElement where default control widget will be attached to
	 */
	class Widget extends THREE__namespace.EventDispatcher {

	    constructor( container ) {
	        super();
	        if ( !container ) {

	            console.warn( 'PANOLENS.Widget: No container specified' );

	        }

	        this.DEFAULT_TRANSITION  = 'all 0.27s ease';
	        this.TOUCH_ENABLED = !!(( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch);
	        this.PREVENT_EVENT_HANDLER = function ( event ) {
	            event.preventDefault();
	            event.stopPropagation();
	        };

	        this.container = container;

	        this.barElement = null;
	        this.fullscreenElement = null;
	        this.videoElement = null;
	        this.settingElement = null;

	        this.mainMenu = null;

	        this.activeMainItem = null;
	        this.activeSubMenu = null;
	        this.mask = null;
	    }

	    /**
	     * Add control bar
	     * @memberOf Widget
	     * @instance
	     */
	    addControlBar () {

	        if ( !this.container ) {

	            console.warn( 'Widget container not set' ); 
	            return; 
	        }

	        var scope = this, bar, styleTranslate, styleOpacity, gradientStyle;

	        gradientStyle = 'linear-gradient(bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))';

	        bar = document.createElement( 'div' );
	        bar.style.width = '100%';
	        bar.style.height = '44px';
	        bar.style.float = 'left';
	        bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = 'translateY(-100%)';
	        bar.style.background = '-webkit-' + gradientStyle;
	        bar.style.background = '-moz-' + gradientStyle;
	        bar.style.background = '-o-' + gradientStyle;
	        bar.style.background = '-ms-' + gradientStyle;
	        bar.style.background = gradientStyle;
	        bar.style.transition = this.DEFAULT_TRANSITION;
	        bar.style.pointerEvents = 'none';
	        bar.isHidden = false;
	        bar.toggle = function () {
	            bar.isHidden = !bar.isHidden;
	            styleTranslate = bar.isHidden ? 'translateY(0)' : 'translateY(-100%)';
	            styleOpacity = bar.isHidden ? 0 : 1;
	            bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = styleTranslate;
	            bar.style.opacity = styleOpacity;
	        };

	        // Menu
	        var menu = this.createDefaultMenu();
	        this.mainMenu = this.createMainMenu( menu );
	        bar.appendChild( this.mainMenu );

	        // Mask
	        var mask = this.createMask();
	        this.mask = mask;
	        this.container.appendChild( mask );

	        // Dispose
	        bar.dispose = function () {

	            if ( scope.fullscreenElement ) {

	                bar.removeChild( scope.fullscreenElement );
	                scope.fullscreenElement.dispose();
	                scope.fullscreenElement = null;

	            }

	            if ( scope.settingElement ) {

	                bar.removeChild( scope.settingElement );
	                scope.settingElement.dispose();
	                scope.settingElement = null;

	            }

	            if ( scope.videoElement ) {

	                bar.removeChild( scope.videoElement );
	                scope.videoElement.dispose();
	                scope.videoElement = null;

	            }

	        };

	        this.container.appendChild( bar );

	        // Mask events
	        this.mask.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', function ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mask.hide();
	            scope.settingElement.deactivate();

	        }, false );

	        // Event listener
	        this.addEventListener( 'control-bar-toggle', bar.toggle );

	        this.barElement = bar;

	    }

	    /**
	     * Create default menu
	     * @memberOf Widget
	     * @instance
	     */
	    createDefaultMenu () {

	        var scope = this, handler;

	        handler = function ( method, data ) {

	            return function () {

	                scope.dispatchEvent( { 

	                    type: 'panolens-viewer-handler', 
	                    method: method, 
	                    data: data 

	                } ); 

	            };

	        };

	        return [

	            { 
	                title: 'Control', 
	                subMenu: [ 
	                    { 
	                        title: this.TOUCH_ENABLED ? 'Touch' : 'Mouse', 
	                        handler: handler( 'enableControl', CONTROLS.ORBIT )
	                    },
	                    { 
	                        title: 'Sensor', 
	                        handler: handler( 'enableControl', CONTROLS.DEVICEORIENTATION ) 
	                    } 
	                ]
	            },

	            { 
	                title: 'Mode', 
	                subMenu: [ 
	                    { 
	                        title: 'Normal',
	                        handler: handler( 'disableEffect' )
	                    }, 
	                    { 
	                        title: 'Cardboard',
	                        handler: handler( 'enableEffect', MODES.CARDBOARD )
	                    },
	                    { 
	                        title: 'Stereoscopic',
	                        handler: handler( 'enableEffect', MODES.STEREO )
	                    }
	                ]
	            }

	        ];

	    }

	    /**
	     * Add buttons on top of control bar
	     * @param {string} name - The control button name to be created
	     * @memberOf Widget
	     * @instance
	     */
	    addControlButton ( name ) {

	        let element;

	        switch( name ) {

	        case 'fullscreen':

	            element = this.createFullscreenButton();
	            this.fullscreenElement = element; 

	            break;

	        case 'setting':

	            element = this.createSettingButton();
	            this.settingElement = element;

	            break;

	        case 'video':

	            element = this.createVideoControl();
	            this.videoElement = element;

	            break;

	        default:

	            return;

	        }

	        if ( !element ) {

	            return;

	        }

	        this.barElement.appendChild( element );

	    }

	    /**
	     * Create modal mask
	     * @memberOf Widget
	     * @instance
	     */
	    createMask () {

	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.top = 0;
	        element.style.left = 0;
	        element.style.width = '100%';
	        element.style.height = '100%';
	        element.style.background = 'transparent';
	        element.style.display = 'none';

	        element.show = function () {

	            this.style.display = 'block';

	        };

	        element.hide = function () {

	            this.style.display = 'none';

	        };

	        return element;

	    }

	    /**
	     * Create Setting button to toggle menu
	     * @memberOf Widget
	     * @instance
	     */
	    createSettingButton () {

	        let scope = this, item;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mainMenu.toggle();

	            if ( this.activated ) {

	                this.deactivate();

	            } else {

	                this.activate();

	            }

	        }

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.Setting + '")',
	                webkitTransition: this.DEFAULT_TRANSITION,
	                transition: this.DEFAULT_TRANSITION

	            },

	            onTap: onTap

	        } );

	        item.activate = function () {

	            this.style.transform = 'rotate3d(0,0,1,90deg)';
	            this.activated = true;
	            scope.mask.show();

	        };

	        item.deactivate = function () {

	            this.style.transform = 'rotate3d(0,0,0,0)';
	            this.activated = false;
	            scope.mask.hide();

	            if ( scope.mainMenu && scope.mainMenu.visible ) {

	                scope.mainMenu.hide();
	      
	            }

	            if ( scope.activeSubMenu && scope.activeSubMenu.visible ) {

	                scope.activeSubMenu.hide();

	            }

	            if ( scope.mainMenu && scope.mainMenu._width ) {

	                scope.mainMenu.changeSize( scope.mainMenu._width );
	                scope.mainMenu.unslideAll();

	            }
	    
	        };

	        item.activated = false;

	        return item;

	    }

	    /**
	     * Create Fullscreen button
	     * @return {HTMLSpanElement} - The dom element icon for fullscreen
	     * @memberOf Widget
	     * @instance
	     * @fires Widget#panolens-viewer-handler
	     */
	    createFullscreenButton () {

	        let scope = this, item, isFullscreen = false, tapSkipped = true, stylesheetId;

	        const { container } = this;

	        stylesheetId = 'panolens-style-addon';

	        // Don't create button if no support
	        if ( !document.fullscreenEnabled       && 
	    !document.webkitFullscreenEnabled &&
	    !document.mozFullScreenEnabled    &&
	    !document.msFullscreenEnabled ) {
	            return;
	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            tapSkipped = false;

	            if ( !isFullscreen ) {

	                if ( container.requestFullscreen ) { container.requestFullscreen(); }
	                if ( container.msRequestFullscreen ) { container.msRequestFullscreen(); }
	                if ( container.mozRequestFullScreen ) { container.mozRequestFullScreen(); }
	                if ( container.webkitRequestFullscreen ) { container.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT ); }
	            
	                isFullscreen = true;

	            } else {

	                if ( document.exitFullscreen ) { document.exitFullscreen(); }
	                if ( document.msExitFullscreen ) { document.msExitFullscreen(); }
	                if ( document.mozCancelFullScreen ) { document.mozCancelFullScreen(); }
	                if ( document.webkitExitFullscreen ) { document.webkitExitFullscreen( ); }

	                isFullscreen = false;

	            }

	            this.style.backgroundImage = ( isFullscreen ) 
	                ? 'url("' + DataImage.FullscreenLeave + '")' 
	                : 'url("' + DataImage.FullscreenEnter + '")';

	        }

	        function onFullScreenChange () {

	            if ( tapSkipped ) {

	                isFullscreen = !isFullscreen; 

	                item.style.backgroundImage = ( isFullscreen ) 
	                    ? 'url("' + DataImage.FullscreenLeave + '")' 
	                    : 'url("' + DataImage.FullscreenEnter + '")';

	            }

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'onWindowResize' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onWindowResize' } );

	            tapSkipped = true;

	        }

	        document.addEventListener( 'fullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'webkitfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'mozfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'MSFullscreenChange', onFullScreenChange, false );

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.FullscreenEnter + '")' 

	            },

	            onTap: onTap

	        } );

	        // Add fullscreen stlye if not exists
	        if ( !document.querySelector( stylesheetId ) ) {
	            const sheet = document.createElement( 'style' );
	            sheet.id = stylesheetId;
	            sheet.innerHTML = ':-webkit-full-screen { width: 100% !important; height: 100% !important }';
	            document.body.appendChild( sheet );
	        }
	  
	        return item;

	    }

	    /**
	     * Create video control container
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     */
	    createVideoControl () {

	        const item = document.createElement( 'span' );
	        item.style.display = 'none';
	        item.show = function () { 

	            item.style.display = '';

	        };

	        item.hide = function () { 

	            item.style.display = 'none';
	            item.controlButton.paused = true;
	            item.controlButton.update();

	        };

	        item.controlButton = this.createVideoControlButton();
	        item.seekBar = this.createVideoControlSeekbar();
	  
	        item.appendChild( item.controlButton );
	        item.appendChild( item.seekBar );

	        item.dispose = function () {

	            item.removeChild( item.controlButton );
	            item.removeChild( item.seekBar );

	            item.controlButton.dispose();
	            item.controlButton = null;

	            item.seekBar.dispose();
	            item.seekBar = null;

	        };

	        this.addEventListener( 'video-control-show', item.show );
	        this.addEventListener( 'video-control-hide', item.hide );

	        return item;

	    }

	    /**
	     * Create video control button
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlButton () {

	        const scope = this;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'toggleVideoPlay' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'toggleVideoPlay', data: !this.paused } );

	            this.paused = !this.paused;

	            item.update();

	        }
	        const item = this.createCustomItem( { 

	            style: { 

	                float: 'left',
	                backgroundImage: 'url("' + DataImage.VideoPlay + '")'

	            },

	            onTap: onTap

	        } );

	        item.paused = true;

	        item.update = function ( paused ) {

	            this.paused = paused !== undefined ? paused : this.paused;

	            this.style.backgroundImage = 'url("' + ( this.paused 
	                ? DataImage.VideoPlay 
	                : DataImage.VideoPause ) + '")';

	        };

	        return item;

	    }

	    /**
	     * Create video seekbar
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video seekbar
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlSeekbar () {

	        let scope = this, item, progressElement, progressElementControl,
	            isDragging = false, mouseX, percentageNow, percentageNext;

	        progressElement = document.createElement( 'div' );
	        progressElement.style.width = '0%';
	        progressElement.style.height = '100%';
	        progressElement.style.backgroundColor = '#fff';

	        progressElementControl = document.createElement( 'div' );
	        progressElementControl.style.float = 'right';
	        progressElementControl.style.width = '14px';
	        progressElementControl.style.height = '14px';
	        progressElementControl.style.transform = 'translate(7px, -5px)';
	        progressElementControl.style.borderRadius = '50%';
	        progressElementControl.style.backgroundColor = '#ddd';

	        progressElementControl.addEventListener( 'mousedown', onMouseDown, { passive: true } );
	        progressElementControl.addEventListener( 'touchstart', onMouseDown,  { passive: true } );

	        function onMouseDown ( event ) {

	            event.stopPropagation();
	    
	            isDragging = true;
	    
	            mouseX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );

	            percentageNow = parseInt( progressElement.style.width ) / 100;

	            addControlListeners();
	        }

	        function onVideoControlDrag ( event ) {

	            if( isDragging ){

	                const clientX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );
	      
	                percentageNext = ( clientX - mouseX ) / item.clientWidth;

	                percentageNext = percentageNow + percentageNext;

	                percentageNext = percentageNext > 1 ? 1 : ( ( percentageNext < 0 ) ? 0 : percentageNext );

	                item.setProgress ( percentageNext );

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @event Widget#panolens-viewer-handler
	                 * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	                 * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	                 */
	                scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentageNext } );

	            }

	        }

	        function onVideoControlStop ( event ) {

	            event.stopPropagation();

	            isDragging = false;

	            removeControlListeners();

	        }

	        function addControlListeners () {

	            scope.container.addEventListener( 'mousemove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'mouseup', onVideoControlStop, { passive: true } );
	            scope.container.addEventListener( 'touchmove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'touchend', onVideoControlStop, { passive: true } );


	        }

	        function removeControlListeners () {

	            scope.container.removeEventListener( 'mousemove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'mouseup', onVideoControlStop, false );
	            scope.container.removeEventListener( 'touchmove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'touchend', onVideoControlStop, false );

	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            if ( event.target === progressElementControl ) { return; }

	            const percentage = ( event.changedTouches && event.changedTouches.length > 0 )
	                ? ( event.changedTouches[0].pageX - event.target.getBoundingClientRect().left ) / this.clientWidth
	                : event.offsetX / this.clientWidth;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	             * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentage } );

	            item.setProgress( event.offsetX / this.clientWidth );

	        }
	        function onDispose () {

	            removeControlListeners();
	            progressElement = null;
	            progressElementControl = null;

	        }

	        progressElement.appendChild( progressElementControl );

	        item = this.createCustomItem( {

	            style: { 

	                float: 'left',
	                width: '30%',
	                height: '4px',
	                marginTop: '20px',
	                backgroundColor: 'rgba(188,188,188,0.8)'

	            },

	            onTap: onTap,
	            onDispose: onDispose

	        } );

	        item.appendChild( progressElement );

	        item.setProgress = function( percentage ) {

	            progressElement.style.width = percentage * 100 + '%';

	        };		

	        this.addEventListener( 'video-update', function ( event ) { 

	            item.setProgress( event.percentage ); 

	        } );

	        item.progressElement = progressElement;
	        item.progressElementControl = progressElementControl;

	        return item;

	    }

	    /**
	     * Create menu item
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItem ( title ) {

	        const scope = this; 
	        const item = document.createElement( 'a' );
	        item.textContent = title;
	        item.style.display = 'block';
	        item.style.padding = '10px';
	        item.style.textDecoration = 'none';
	        item.style.cursor = 'pointer';
	        item.style.pointerEvents = 'auto';
	        item.style.transition = this.DEFAULT_TRANSITION;

	        item.slide = function ( right ) {

	            this.style.transform = 'translateX(' + ( right ? '' : '-' ) + '100%)';

	        };

	        item.unslide = function () {

	            this.style.transform = 'translateX(0)';

	        };

	        item.setIcon = function ( url ) {

	            if ( this.icon ) {

	                this.icon.style.backgroundImage = 'url(' + url + ')';

	            }

	        };

	        item.setSelectionTitle = function ( title ) {

	            if ( this.selection ) {

	                this.selection.textContent = title;

	            }

	        };

	        item.addSelection = function ( name ) {
	    
	            const selection = document.createElement( 'span' );
	            selection.style.fontSize = '13px';
	            selection.style.fontWeight = '300';
	            selection.style.float = 'right';

	            this.selection = selection;
	            this.setSelectionTitle( name );
	            this.appendChild( selection );
	    
	            return this;

	        };

	        item.addIcon = function ( url = DataImage.ChevronRight, left = false, flip = false ) {
	    
	            const element = document.createElement( 'span' );
	            element.style.float = left ? 'left' : 'right';
	            element.style.width = '17px';
	            element.style.height = '17px';
	            element.style[ 'margin' + ( left ? 'Right' : 'Left' ) ] = '12px';
	            element.style.backgroundSize = 'cover';

	            if ( flip ) {

	                element.style.transform = 'rotateZ(180deg)';

	            }

	            this.icon = element;
	            this.setIcon( url );
	            this.appendChild( element );

	            return this;

	        };

	        item.addSubMenu = function ( title, items ) {

	            this.subMenu = scope.createSubMenu( title, items );

	            return this;

	        };

	        item.addEventListener( 'mouseenter', function () {
	    
	            this.style.backgroundColor = '#e0e0e0';

	        }, false );

	        item.addEventListener( 'mouseleave', function () {
	    
	            this.style.backgroundColor = '#fafafa';

	        }, false );

	        return item;

	    }

	    /**
	     * Create menu item header
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItemHeader ( title ) {

	        const header = this.createMenuItem( title );

	        header.style.borderBottom = '1px solid #333';
	        header.style.paddingBottom = '15px';

	        return header;

	    }

	    /**
	     * Create main menu
	     * @param  {array} menus - Menu array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMainMenu ( menus ) {
	  
	        let scope = this, menu = this.createMenu();

	        menu._width = 200;
	        menu.changeSize( menu._width );

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            let mainMenu = scope.mainMenu, subMenu = this.subMenu;

	            function onNextTick () {

	                mainMenu.changeSize( subMenu.clientWidth );
	                subMenu.show();
	                subMenu.unslideAll();

	            }

	            mainMenu.hide();
	            mainMenu.slideAll();
	            mainMenu.parentElement.appendChild( subMenu );

	            scope.activeMainItem = this;
	            scope.activeSubMenu = subMenu;

	            window.requestAnimationFrame( onNextTick );

	        }
	        for ( var i = 0; i < menus.length; i++ ) {

	            var item = menu.addItem( menus[ i ].title );

	            item.style.paddingLeft = '20px';

	            item.addIcon()
	                .addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( menus[ i ].subMenu && menus[ i ].subMenu.length > 0 ) {

	                var title = menus[ i ].subMenu[ 0 ].title;

	                item.addSelection( title )
	                    .addSubMenu( menus[ i ].title, menus[ i ].subMenu );

	            }

	        }

	        return menu;

	    }

	    /**
	     * Create sub menu
	     * @param {string} title - Sub menu title
	     * @param {array} items - Item array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createSubMenu ( title, items ) {

	        let scope = this, menu, subMenu = this.createMenu();

	        subMenu.items = items;
	        subMenu.activeItem = null;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            menu = scope.mainMenu;
	            menu.changeSize( menu._width );
	            menu.unslideAll();
	            menu.show();
	            subMenu.slideAll( true );
	            subMenu.hide();

	            if ( this.type !== 'header' ) {

	                subMenu.setActiveItem( this );
	                scope.activeMainItem.setSelectionTitle( this.textContent );

	                if ( this.handler ) { this.handler(); }

	            }

	        }

	        subMenu.addHeader( title ).addIcon( undefined, true, true ).addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	        for ( let i = 0; i < items.length; i++ ) {

	            const item = subMenu.addItem( items[ i ].title );

	            item.style.fontWeight = 300;
	            item.handler = items[ i ].handler;
	            item.addIcon( ' ', true );
	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( !subMenu.activeItem ) {

	                subMenu.setActiveItem( item );

	            }

	        }

	        subMenu.slideAll( true );

	        return subMenu;
	  
	    }

	    /**
	     * Create general menu
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMenu () {

	        const scope = this;
	        const menu = document.createElement( 'span' );
	        const style = menu.style;

	        style.padding = '5px 0';
	        style.position = 'fixed';
	        style.bottom = '100%';
	        style.right = '14px';
	        style.backgroundColor = '#fafafa';
	        style.fontFamily = 'Helvetica Neue';
	        style.fontSize = '14px';
	        style.visibility = 'hidden';
	        style.opacity = 0;
	        style.boxShadow = '0 0 12pt rgba(0,0,0,0.25)';
	        style.borderRadius = '2px';
	        style.overflow = 'hidden';
	        style.willChange = 'width, height, opacity';
	        style.pointerEvents = 'auto';
	        style.transition = this.DEFAULT_TRANSITION;

	        menu.visible = false;

	        menu.changeSize = function ( width, height ) {

	            if ( width ) {

	                this.style.width = width + 'px';

	            }

	            if ( height ) {

	                this.style.height = height + 'px';

	            }

	        };

	        menu.show = function () {

	            this.style.opacity = 1;
	            this.style.visibility = 'visible';
	            this.visible = true;

	        };

	        menu.hide = function () {

	            this.style.opacity = 0;
	            this.style.visibility = 'hidden';
	            this.visible = false;

	        };

	        menu.toggle = function () {

	            if ( this.visible ) {

	                this.hide();

	            } else {

	                this.show();

	            }

	        };

	        menu.slideAll = function ( right ) {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].slide ) {

	                    menu.children[ i ].slide( right );

	                }

	            }

	        };

	        menu.unslideAll = function () {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].unslide ) {

	                    menu.children[ i ].unslide();

	                }

	            }

	        };

	        menu.addHeader = function ( title ) {

	            const header = scope.createMenuItemHeader( title );
	            header.type = 'header';

	            this.appendChild( header );

	            return header;

	        };

	        menu.addItem = function ( title ) {

	            const item = scope.createMenuItem( title );
	            item.type = 'item';

	            this.appendChild( item );

	            return item;

	        };

	        menu.setActiveItem = function ( item ) {

	            if ( this.activeItem ) {

	                this.activeItem.setIcon( ' ' );

	            }

	            item.setIcon( DataImage.Check );

	            this.activeItem = item;

	        };

	        menu.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );

	        return menu;

	    }

	    /**
	     * Create custom item element
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon
	     */
	    createCustomItem ( options = {} ) {

	        const scope = this;
	        const item = options.element || document.createElement( 'span' );
	        const { onDispose } = options;

	        item.style.cursor = 'pointer';
	        item.style.float = 'right';
	        item.style.width = '44px';
	        item.style.height = '100%';
	        item.style.backgroundSize = '60%';
	        item.style.backgroundRepeat = 'no-repeat';
	        item.style.backgroundPosition = 'center';
	        item.style.webkitUserSelect = 
	  item.style.MozUserSelect = 
	  item.style.userSelect = 'none';
	        item.style.position = 'relative';
	        item.style.pointerEvents = 'auto';

	        // White glow on icon
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchstart' : 'mouseenter', function() {
	            item.style.filter = 
	    item.style.webkitFilter = 'drop-shadow(0 0 5px rgba(255,255,255,1))';
	        }, { passive: true });
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'mouseleave', function() {
	            item.style.filter = 
	    item.style.webkitFilter = '';
	        }, { passive: true });

	        this.mergeStyleOptions( item, options.style );

	        if ( options.onTap ) {

	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	        }

	        item.dispose = function () {

	            item.removeEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	            if ( onDispose ) { options.onDispose(); }

	        };
	  
	        return item;

	    }

	    /**
	     * Merge item css style
	     * @param  {HTMLElement} element - The element to be merged with style
	     * @param  {object} options - The style options
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - The same element with merged styles
	     */
	    mergeStyleOptions ( element, options = {} ) {

	        for ( let property in options ){

	            if ( options.hasOwnProperty( property ) ) {

	                element.style[ property ] = options[ property ];

	            }

	        }

	        return element;

	    }

	    /**
	     * Dispose widgets by detaching dom elements from container
	     * @memberOf Widget
	     * @instance
	     */
	    dispose () {

	        if ( this.barElement ) {
	            this.container.removeChild( this.barElement );
	            this.barElement.dispose();
	            this.barElement = null;

	        }

	    }

	}

	/**
	 * @classdesc Base Panorama
	 * @constructor
	 * @param {THREE.Geometry} geometry - The geometry for this panorama
	 * @param {THREE.Material} material - The material for this panorama
	 */
	class Panorama extends THREE__namespace.Mesh {
	    constructor(geometry, material) {
	        super(geometry, material);

	        this.type = 'panorama';

	        this.ImageQualityLow = 1;
	        this.ImageQualityFair = 2;
	        this.ImageQualityMedium = 3;
	        this.ImageQualityHigh = 4;
	        this.ImageQualitySuperHigh = 5;

	        this.animationDuration = 1000;

	        this.defaultInfospotSize = 350;

	        this.container = undefined;

	        this.loaded = false;

	        this.linkedSpots = [];

	        this.isInfospotVisible = false;

	        this.linkingImageURL = undefined;
	        this.linkingImageScale = undefined;

	        this.material.side = THREE__namespace.BackSide;
	        this.material.opacity = 0;

	        this.scale.x *= -1;
	        this.renderOrder = -1;

	        this.active = false;

	        this.infospotAnimation = new Tween.Tween(this).to({}, this.animationDuration / 2);

	        this.addEventListener('load', this.fadeIn.bind(this));
	        this.addEventListener('panolens-container', this.setContainer.bind(this));
	        this.addEventListener('click', this.onClick.bind(this));

	        this.setupTransitions();
	    }

	    add(object) {

	        let invertedObject;

	        if (arguments.length > 1) {

	            for (var i = 0; i < arguments.length; i++) {

	                this.add(arguments[i]);

	            }

	            return this;

	        }

	        // In case of infospots
	        if (object instanceof Infospot) {

	            invertedObject = object;

	            if (object.dispatchEvent) {

	                const { container } = this;

	                if (container) { object.dispatchEvent({ type: 'panolens-container', container }); }

	                object.dispatchEvent({
	                    type: 'panolens-infospot-focus', method: function (vector, duration, easing) {

	                        /**
	                         * Infospot focus handler event
	                         * @type {object}
	                         * @event Panorama#panolens-viewer-handler
	                         * @property {string} method - Viewer function name
	                         * @property {*} data - The argument to be passed into the method
	                         */
	                        this.dispatchEvent({ type: 'panolens-viewer-handler', method: 'tweenControlCenter', data: [vector, duration, easing] });


	                    }.bind(this)
	                });
	            }

	        } else {

	            // Counter scale.x = -1 effect
	            invertedObject = new THREE__namespace.Object3D();
	            invertedObject.scale.x = -1;
	            invertedObject.scalePlaceHolder = true;
	            invertedObject.add(object);

	        }

	        THREE__namespace.Object3D.prototype.add.call(this, invertedObject);

	    }

	    load() {

	        this.onLoad();

	    }

	    /**
	     * Click event handler
	     * @param  {object} event - Click event
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#dismiss
	     */
	    onClick(event) {

	        if (event.intersects && event.intersects.length === 0) {

	            this.traverse(function (object) {

	                /**
	                 * Dimiss event
	                 * @type {object}
	                 * @event Infospot#dismiss
	                 */
	                object.dispatchEvent({ type: 'dismiss' });

	            });

	        }

	    }

	    /**
	     * Set container of this panorama 
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#panolens-container
	     */
	    setContainer(data) {

	        let container;

	        if (data instanceof HTMLElement) {

	            container = data;

	        } else if (data && data.container) {

	            container = data.container;

	        }

	        if (container) {

	            this.children.forEach(function (child) {

	                if (child instanceof Infospot && child.dispatchEvent) {

	                    /**
	                     * Set container event
	                     * @type {object}
	                     * @event Infospot#panolens-container
	                     * @property {HTMLElement} container - The container of this panorama
	                     */
	                    child.dispatchEvent({ type: 'panolens-container', container: container });

	                }

	            });

	            this.container = container;

	        }

	    }

	    /**
	     * This will be called when panorama is loaded
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#load
	     */
	    onLoad() {

	        this.loaded = true;

	        /**
	         * Load panorama event
	         * @type {object}
	         * @event Panorama#load
	         */
	        this.dispatchEvent({ type: 'load' });

	    }

	    /**
	     * This will be called when panorama is in progress
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#progress
	     */
	    onProgress(progress) {

	        /**
	         * Loading panorama progress event
	         * @type {object}
	         * @event Panorama#progress
	         * @property {object} progress - The progress object containing loaded and total amount
	         */
	        this.dispatchEvent({ type: 'progress', progress: progress });

	    }
	    /**
	     * This will be called when panorama loading has error
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#error
	     */
	    onError() {

	        /**
	         * Loading panorama error event
	         * @type {object}
	         * @event Panorama#error
	         */
	        this.dispatchEvent({ type: 'error' });

	    }

	    /**
	     * Get zoom level based on window width
	     * @memberOf Panorama
	     * @instance
	     * @return {number} zoom level indicating image quality
	     */
	    getZoomLevel() {

	        let zoomLevel;

	        if (window.innerWidth <= 800) {

	            zoomLevel = this.ImageQualityFair;

	        } else if (window.innerWidth > 800 && window.innerWidth <= 1280) {

	            zoomLevel = this.ImageQualityMedium;

	        } else if (window.innerWidth > 1280 && window.innerWidth <= 1920) {

	            zoomLevel = this.ImageQualityHigh;

	        } else if (window.innerWidth > 1920) {

	            zoomLevel = this.ImageQualitySuperHigh;

	        } else {

	            zoomLevel = this.ImageQualityLow;

	        }

	        return zoomLevel;

	    }

	    /**
	     * Update texture of a panorama
	     * @memberOf Panorama
	     * @instance
	     * @param {THREE.Texture} texture - Texture to be updated
	     */
	    updateTexture(texture) {

	        this.material.map = texture;
	        this.material.needsUpdate = true;

	    }

	    /**
	     * Toggle visibility of infospots in this panorama
	     * @param  {boolean} isVisible - Visibility of infospots
	     * @param  {number} delay - Delay in milliseconds to change visibility
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#infospot-animation-complete
	     */
	    toggleInfospotVisibility(isVisible, delay) {

	        delay = (delay !== undefined) ? delay : 0;

	        const visible = (isVisible !== undefined) ? isVisible : (this.isInfospotVisible ? false : true);

	        this.traverse(function (object) {

	            if (object instanceof Infospot) {

	                if (visible) {

	                    object.show(delay);

	                } else {

	                    object.hide(delay);

	                }

	            }

	        });

	        this.isInfospotVisible = visible;

	        // Animation complete event
	        this.infospotAnimation.onComplete(function () {

	            /**
	             * Complete toggling infospot visibility
	             * @event Panorama#infospot-animation-complete
	             * @type {object} 
	             */
	            this.dispatchEvent({ type: 'infospot-animation-complete', visible: visible });

	        }.bind(this)).delay(delay).start();

	    }

	    /**
	     * Set image of this panorama's linking infospot
	     * @memberOf Panorama
	     * @instance
	     * @param {string} url   - Url to the image asset
	     * @param {number} scale - Scale factor of the infospot
	     */
	    setLinkingImage(url, scale) {

	        this.linkingImageURL = url;
	        this.linkingImageScale = scale;

	    }

	    /**
	     * Link one-way panorama
	     * @param  {Panorama} pano  - The panorama to be linked to
	     * @param  {THREE.Vector3} position - The position of infospot which navigates to the pano
	     * @param  {number} [imageScale=300] - Image scale of linked infospot
	     * @param  {string} [imageSrc=DataImage.Arrow] - The image source of linked infospot
	     * @memberOf Panorama
	     * @instance
	     */
	    link(pano, position, imageScale, imageSrc) {

	        let scale, img;

	        this.visible = true;

	        if (!position) {

	            console.warn('Please specify infospot position for linking');

	            return;

	        }

	        // Infospot scale
	        if (imageScale !== undefined) {

	            scale = imageScale;

	        } else if (pano.linkingImageScale !== undefined) {

	            scale = pano.linkingImageScale;

	        } else {

	            scale = 300;

	        }


	        // Infospot image
	        if (imageSrc) {

	            img = imageSrc;

	        } else if (pano.linkingImageURL) {

	            img = pano.linkingImageURL;

	        } else {

	            img = DataImage.Arrow;

	        }

	        // Creates a new infospot
	        const spot = new Infospot(scale, img);
	        spot.position.copy(position);
	        spot.toPanorama = pano;
	        spot.addEventListener('click', function () {

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Panorama#panolens-viewer-handler
	             * @property {string} method - Viewer function name
	             * @property {*} data - The argument to be passed into the method
	             */
	            this.dispatchEvent({ type: 'panolens-viewer-handler', method: 'setPanorama', data: pano });

	        }.bind(this));

	        this.linkedSpots.push(spot);

	        this.add(spot);

	        this.visible = false;

	    }

	    reset() {

	        this.children.length = 0;

	    }

	    setupTransitions() {

	        this.fadeInAnimation = new Tween.Tween(this.material)
	            .easing(Tween.Easing.Quartic.Out)
	            .onStart(function () {

	                this.visible = true;
	                // this.material.visible = true;

	                /**
	                 * Enter panorama fade in start event
	                 * @event Panorama#enter-fade-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'enter-fade-start' });

	            }.bind(this));

	        this.fadeOutAnimation = new Tween.Tween(this.material)
	            .easing(Tween.Easing.Quartic.Out)
	            .onComplete(function () {

	                this.visible = false;
	                // this.material.visible = true;

	                /**
	                 * Leave panorama complete event
	                 * @event Panorama#leave-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'leave-complete' });

	            }.bind(this));

	        this.enterTransition = new Tween.Tween(this)
	            .easing(Tween.Easing.Quartic.Out)
	            .onComplete(function () {

	                /**
	                 * Enter panorama and animation complete event
	                 * @event Panorama#enter-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'enter-complete' });

	            }.bind(this))
	            .start();

	        this.leaveTransition = new Tween.Tween(this)
	            .easing(Tween.Easing.Quartic.Out);

	    }
	    onFadeAnimationUpdate() {

	        const alpha = this.material.opacity;
	        const { uniforms } = this.material;

	        if (uniforms && uniforms.opacity) {
	            uniforms.opacity.value = alpha;
	        }

	    }

	    /**
	     * Start fading in animation
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter-fade-complete
	     */
	    fadeIn(duration) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeOutAnimation.stop();
	        this.fadeInAnimation
	            .to({ opacity: 1 }, duration)
	            .onUpdate(this.onFadeAnimationUpdate.bind(this))
	            .onComplete(function () {

	                this.toggleInfospotVisibility(true, duration / 2);

	                /**
	                 * Enter panorama fade complete event
	                 * @event Panorama#enter-fade-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'enter-fade-complete' });

	            }.bind(this))
	            .start();

	    }

	    /**
	     * Start fading out animation
	     * @memberOf Panorama
	     * @instance
	     */
	    fadeOut(duration) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation
	            .to({ opacity: 0 }, duration)
	            .onUpdate(this.onFadeAnimationUpdate.bind(this))
	            .start();

	    }

	    /**
	     * This will be called when entering a panorama 
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter
	     * @fires Panorama#enter-start
	     */
	    onEnter() {

	        const duration = this.animationDuration;

	        this.leaveTransition.stop();
	        this.enterTransition
	            .to({}, duration)
	            .onStart(function () {

	                /**
	                 * Enter panorama and animation starting event
	                 * @event Panorama#enter-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'enter-start' });

	                if (this.loaded) {

	                    this.fadeIn(duration);

	                } else {

	                    this.load();

	                }

	            }.bind(this))
	            .start();

	        /**
	         * Enter panorama event
	         * @event Panorama#enter
	         * @type {object} 
	         */
	        this.dispatchEvent({ type: 'enter' });

	        this.children.forEach(child => {

	            child.dispatchEvent({ type: 'panorama-enter' });

	        });

	        this.active = true;

	    }

	    /**
	     * This will be called when leaving a panorama
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#leave
	     */
	    onLeave() {

	        const duration = this.animationDuration;

	        this.enterTransition.stop();
	        this.leaveTransition
	            .to({}, duration)
	            .onStart(function () {

	                /**
	                 * Leave panorama and animation starting event
	                 * @event Panorama#leave-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent({ type: 'leave-start' });

	                this.fadeOut(duration);
	                this.toggleInfospotVisibility(false);

	            }.bind(this))
	            .start();

	        /**
	         * Leave panorama event
	         * @event Panorama#leave
	         * @type {object} 
	         */
	        this.dispatchEvent({ type: 'leave' });

	        this.children.forEach(child => {

	            child.dispatchEvent({ type: 'panorama-leave' });

	        });

	        this.active = false;

	    }

	    /**
	     * Dispose panorama
	     * @memberOf Panorama
	     * @instance
	     */
	    dispose() {

	        this.infospotAnimation.stop();
	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation.stop();
	        this.enterTransition.stop();
	        this.leaveTransition.stop();

	        /**
	         * On panorama dispose handler
	         * @type {object}
	         * @event Panorama#panolens-viewer-handler
	         * @property {string} method - Viewer function name
	         * @property {*} data - The argument to be passed into the method
	         */
	        this.dispatchEvent({ type: 'panolens-viewer-handler', method: 'onPanoramaDispose', data: this });

	        // recursive disposal on 3d objects
	        function recursiveDispose(object) {

	            const { geometry, material } = object;

	            for (var i = object.children.length - 1; i >= 0; i--) {

	                recursiveDispose(object.children[i]);
	                object.remove(object.children[i]);

	            }

	            if (object instanceof Infospot) {

	                object.dispose();

	            }

	            if (geometry) { geometry.dispose(); object.geometry = null; }
	            if (material) { material.dispose(); object.material = null; }

	        }

	        recursiveDispose(this);

	        if (this.parent) {

	            this.parent.remove(this);

	        }
	    }
	}

	/**
	 * @classdesc Equirectangular based image panorama
	 * @constructor
	 * @param {string} image - Image url or HTMLImageElement
	 */
	class ImagePanorama extends Panorama {
	    constructor( image, _geometry, _material ) {
	        const radius = 5000;
	        const geometry = _geometry || new THREE__namespace.SphereGeometry( radius, 60, 40 );
	        const material = _material || new THREE__namespace.MeshBasicMaterial( { opacity: 0, transparent: true } );
	        super(geometry, material);

	        this.src = image;
	        this.radius = radius;
	    }

	    load ( src ) {

	        src = src || this.src;

	        if ( !src ) { 

	            console.warn( 'Image source undefined' );

	            return; 

	        } else if ( typeof src === 'string' ) {

	            TextureLoader.load( src, this.onLoad.bind( this ), this.onProgress.bind( this ), this.onError.bind( this ) );

	        } else if ( src instanceof HTMLImageElement ) {

	            this.onLoad( new THREE__namespace.Texture( src ) );

	        }

	    }

	    /**
	     * This will be called when image is loaded
	     * @param  {THREE.Texture} texture - Texture to be updated
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    onLoad( texture ) {

	        texture.minFilter = texture.magFilter = THREE__namespace.LinearFilter;
	        texture.needsUpdate = true;

	        this.updateTexture( texture );

	        window.requestAnimationFrame( Panorama.prototype.onLoad.bind( this ) );

	    }

	    /**
	     * Reset
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    reset() {

	        Panorama.prototype.reset.call( this );

	    }

	    /**
	     * Dispose
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    dispose() {

	        const { material: { map } } = this;

	        // Release cached image
	        THREE__namespace.Cache.remove( this.src );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }
	}

	/**
	 * @classdesc Empty panorama
	 * @constructor
	 */
	class EmptyPanorama extends Panorama {
	    constructor() {
	        const geometry = new THREE__namespace.BufferGeometry();
	        const material = new THREE__namespace.MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );
	        super(geometry, material);
	        geometry.setAttribute( 'position', new THREE__namespace.BufferAttribute( new Float32Array(), 1 ) );
	    }
	}

	/**
	 * @classdesc Cubemap-based panorama
	 * @constructor
	 * @param {array} images - Array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	 */
	class CubePanorama extends Panorama {
	    constructor ( images = [] ) {

	        const edgeLength = 10000;
	        const shader = Object.assign( {}, THREE__namespace.ShaderLib[ 'cube' ] );
	        const geometry = new THREE__namespace.BoxGeometry( edgeLength, edgeLength, edgeLength );
	        const material = new THREE__namespace.ShaderMaterial( {

	            fragmentShader: shader.fragmentShader,
	            vertexShader: shader.vertexShader,
	            uniforms: shader.uniforms,
	            side: THREE__namespace.BackSide,
	            transparent: true

	        } );

	        super(geometry, material);

	        this.images = images;
	        this.edgeLength = edgeLength;
	        this.material.uniforms.opacity.value = 0;

	    }

	    /**
	     * Load 6 images and bind listeners
	     * @memberOf CubePanorama
	     * @instance
	     */
	    load () {

	        CubeTextureLoader.load( 	

	            this.images, 

	            this.onLoad.bind( this ), 
	            this.onProgress.bind( this ), 
	            this.onError.bind( this ) 

	        );

	    }

	    /**
	     * This will be called when 6 textures are ready
	     * @param  {THREE.CubeTexture} texture - Cube texture
	     * @memberOf CubePanorama
	     * @instance
	     */
	    onLoad ( texture ) {
			
	        this.material.uniforms[ 'tCube' ].value = texture;

	        Panorama.prototype.onLoad.call( this );

	    }

	    /**
	     * Dispose
	     * @memberOf CubePanorama
	     * @instance
	     */
	    dispose () {	

	        const { value } = this.material.uniforms.tCube;

	        this.images.forEach( ( image ) => { THREE__namespace.Cache.remove( image ); } );

	        if ( value instanceof THREE__namespace.CubeTexture ) {

	            value.dispose();

	        }

	        Panorama.prototype.dispose.call( this );

	    }
	}

	/**
	 * @classdesc Basic panorama with 6 pre-defined grid images
	 * @constructor
	 */
	class BasicPanorama extends CubePanorama {

	    constructor() {
	        super();
	        const images = [];

	        for ( let i = 0; i < 6; i++ ) {
	            images.push( DataImage.WhiteTile );
	        }
	    }
	}

	/**
	 * @classdesc Video Panorama
	 * @constructor
	 * @param {string} src - Equirectangular video url
	 * @param {object} [options] - Option for video settings
	 * @param {HTMLElement} [options.videoElement] - HTML5 video element contains the video
	 * @param {boolean} [options.loop=true] - Specify if the video should loop in the end
	 * @param {boolean} [options.muted=true] - Mute the video or not. Need to be true in order to autoplay on some browsers
	 * @param {boolean} [options.autoplay=false] - Specify if the video should auto play
	 * @param {boolean} [options.playsinline=true] - Specify if video should play inline for iOS. If you want it to auto play inline, set both autoplay and muted options to true
	 * @param {string} [options.crossOrigin="anonymous"] - Sets the cross-origin attribute for the video, which allows for cross-origin videos in some browsers (Firefox, Chrome). Set to either "anonymous" or "use-credentials".
	 * @param {number} [radius=5000] - The minimum radius for this panoram
	 */
	class VideoPanorama extends Panorama {

	    constructor( src, options = {} ) {
	        const radius = 5000;
	        const geometry = new THREE__namespace.SphereGeometry( radius, 60, 40 );
	        const material = new THREE__namespace.MeshBasicMaterial( { opacity: 0, transparent: true } );
	        super(geometry, material);

	        this.src = src;

	        this.options = {
	            videoElement: document.createElement( 'video' ),
	            loop: true,
	            muted: true,
	            autoplay: false,
	            playsinline: true,
	            crossOrigin: 'anonymous'
	        };

	        Object.assign( this.options, options );

	        this.videoElement = this.options.videoElement;
	        this.videoProgress = 0;
	        this.radius = radius;

	        this.addEventListener( 'leave', this.pauseVideo.bind( this ) );
	        this.addEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	        this.addEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	        this.addEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );
	    }


	    isMobile () {

	        let check = false;
	        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})( window.navigator.userAgent || window.navigator.vendor || window.opera );
	        return check;

	    }

	    /**
	     * Load video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires  Panorama#panolens-viewer-handler
	     */
	    load () {

	        const { muted, loop, autoplay, playsinline, crossOrigin } = this.options;
	        const video = this.videoElement;
	        const material = this.material;
	        const onProgress = this.onProgress.bind( this );
	        const onLoad = this.onLoad.bind( this );

	        video.loop = loop;
	        video.autoplay = autoplay;
	        video.playsinline = playsinline;
	        video.crossOrigin = crossOrigin;
	        video.muted = muted;

	        if ( playsinline ) {

	            video.setAttribute( 'playsinline', '' );
	            video.setAttribute( 'webkit-playsinline', '' );

	        } 

	        const onloadeddata = function() {

	            this.setVideoTexture( video );

	            if ( autoplay ) {

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @property {string} method - 'updateVideoPlayButton'
	                 * @property {boolean} data - Pause video or not
	                 */
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	            }

	            // For mobile silent autoplay
	            if ( this.isMobile() ) {

	                video.pause();

	                if ( autoplay && muted ) {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	                } else {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	                }
	    
	            }

	            const loaded = () => {

	                // Fix for threejs r89 delayed update
	                material.map.needsUpdate = true;

	                onProgress( { loaded: 1, total: 1 } );
	                onLoad();

	            };

	            window.requestAnimationFrame( loaded );
	  
	        };

	        /**
	         * Ready state of the audio/video element
	         * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready
	         * 1 = HAVE_METADATA - metadata for the audio/video is ready
	         * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
	         * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
	         * 4 = HAVE_ENOUGH_DATA - enough data available to start playing
	         */
	        if ( video.readyState > 2 ) {

	            onloadeddata.call( this );

	        } else {

	            if ( video.querySelectorAll( 'source' ).length === 0 ) {

	                const source = document.createElement( 'source' );
	                source.src = this.src;
	                video.appendChild( source );

	            }

	            video.load();
	        }

	        video.addEventListener( 'loadeddata', onloadeddata.bind( this ) );

	        video.addEventListener( 'timeupdate', function () {

	            this.videoProgress = video.duration >= 0 ? video.currentTime / video.duration : 0;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'onVideoUpdate'
	             * @property {number} data - The percentage of video progress. Range from 0.0 to 1.0
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: this.videoProgress } );

	        }.bind( this ) );

	        video.addEventListener( 'ended', function () {
	  
	            if ( !loop ) {

	                this.resetVideo();
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	            }

	        }.bind( this ), false ); 

	    }

	    /**
	     * Set video texture
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {HTMLVideoElement} video  - The html5 video element
	     * @fires Panorama#panolens-viewer-handler
	     */
	    setVideoTexture ( video ) {

	        if ( !video ) return;

	        const videoTexture = new THREE__namespace.VideoTexture( video );
	        videoTexture.minFilter = THREE__namespace.LinearFilter;
	        videoTexture.magFilter = THREE__namespace.LinearFilter;
	        videoTexture.format = THREE__namespace.RGBFormat;

	        this.updateTexture( videoTexture );

	    }

	    /**
	     * Reset
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    reset () {

	        this.videoElement = undefined;	

	        Panorama.prototype.reset.call( this );

	    }

	    /**
	     * Check if video is paused
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video paused or not
	     */
	    isVideoPaused () {

	        return this.videoElement.paused;

	    }

	    /**
	     * Toggle video to play or pause
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    toggleVideo () {

	        const video = this.videoElement;

	        if ( !video ) { return; }

	        video[ video.paused ? 'play' : 'pause' ]();

	    }

	    /**
	     * Set video currentTime
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {object} event - Event contains percentage. Range from 0.0 to 1.0
	     */
	    setVideoCurrentTime ( { percentage } ) {

	        const video = this.videoElement;

	        if ( video && !Number.isNaN( percentage ) && percentage !== 1 ) {

	            video.currentTime = video.duration * percentage;

	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: percentage } );

	        }

	    }

	    /**
	     * Play video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#play
	     * @fires VideoPanorama#play-error
	     */
	    playVideo () {

	        const video = this.videoElement;
	        const playVideo = this.playVideo.bind( this );
	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const onSuccess = () => {

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play
	             *
	             */
	            dispatchEvent( { type: 'play' } );

	        };
	        const onError = ( error ) => {

	            // Error playing video. Retry next frame. Possibly Waiting for user interaction
	            window.requestAnimationFrame( playVideo );

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play-error
	             *
	             */
	            dispatchEvent( { type: 'play-error', error } );

	        };

	        if ( video && video.paused ) {

	            video.play().then( onSuccess ).catch( onError );

	        }

	    }

	    /**
	     * Pause video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#pause
	     */
	    pauseVideo () {

	        const video = this.videoElement;

	        if ( video && !video.paused ) {

	            video.pause();

	        }

	        /**
	         * Pause event
	         * @type {object}
	         * @event VideoPanorama#pause
	         *
	         */
	        this.dispatchEvent( { type: 'pause' } );

	    }

	    /**
	     * Resume video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resumeVideoProgress () {

	        const video = this.videoElement;

	        if ( video.readyState >= 4 && video.autoplay && !this.isMobile() ) {

	            this.playVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	        } else {

	            this.pauseVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	        }

	        this.setVideoCurrentTime( { percentage: this.videoProgress } );

	    }

	    /**
	     * Reset video at stating point
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resetVideo () {

	        const video = this.videoElement;

	        if ( video ) {

	            this.setVideoCurrentTime( { percentage: 0 } );

	        }

	    }

	    /**
	     * Check if video is muted
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video muted or not
	     */
	    isVideoMuted () {

	        return this.videoElement.muted;

	    }

	    /**
	     * Mute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    muteVideo () {

	        const video = this.videoElement;

	        if ( video && !video.muted ) {

	            video.muted = true;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    }

	    /**
	     * Unmute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    unmuteVideo () {

	        const video = this.videoElement;

	        if ( video && this.isVideoMuted() ) {

	            video.muted = false;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    }

	    /**
	     * Returns the video element
	     * @memberOf VideoPanorama
	     * @instance
	     * @returns {HTMLElement}
	     */
	    getVideoElement () {

	        return this.videoElement;

	    }

	    /**
	     * Dispose video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    dispose () {

	        const { material: { map } } = this;

	        this.pauseVideo();

	        this.removeEventListener( 'leave', this.pauseVideo.bind( this ) );
	        this.removeEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	        this.removeEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	        this.removeEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }
	   
	}

	/**
	 * @classdesc Google Street View Loader
	 * @constructor
	 * @param {object} parameters 
	 */
	function GoogleStreetviewLoader ( parameters = {} ) {

	    this._parameters = parameters;
	    this._zoom = null;
	    this._panoId = null;
	    this._panoClient = new google.maps.StreetViewService();
	    this._count = 0;
	    this._total = 0;
	    this._canvas = [];
	    this._ctx = [];
	    this._wc = 0;
	    this._hc = 0;
	    this.result = null;
	    this.rotation = 0;
	    this.copyright = '';
	    this.onSizeChange = null;
	    this.onPanoramaLoad = null;

	    this.levelsW = [ 1, 2, 4, 7, 13, 26 ];
	    this.levelsH = [ 1, 1, 2, 4, 7, 13 ];

	    this.widths = [ 416, 832, 1664, 3328, 6656, 13312 ];
	    this.heights = [ 416, 416, 832, 1664, 3328, 6656 ];

	    this.maxW = 6656;
	    this.maxH = 6656;

	    let gl;

	    try {

	        const canvas = document.createElement( 'canvas' );

	        gl = canvas.getContext( 'experimental-webgl' );

	        if( !gl ) {

	            gl = canvas.getContext( 'webgl' );

	        }

	    }
	    catch ( error ) {

	    }

	    this.maxW = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxW );
	    this.maxH = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxH );

	}

	Object.assign( GoogleStreetviewLoader.prototype, {

	    constructor: GoogleStreetviewLoader,

	    /**
	     * Set progress
	     * @param {number} loaded 
	     * @param {number} total 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setProgress: function ( loaded, total ) {

	        if ( this.onProgress ) {

	            this.onProgress( { loaded: loaded, total: total } );

	        }
			
	    },

	    /**
	     * Adapt texture to zoom
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    adaptTextureToZoom: function () {

	        const w = this.widths [ this._zoom ];
	        const h = this.heights[ this._zoom ];

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        this._wc = Math.ceil( w / maxW );
	        this._hc = Math.ceil( h / maxH );

	        for( let y = 0; y < this._hc; y++ ) {
	            for( let x = 0; x < this._wc; x++ ) {
	                const c = document.createElement( 'canvas' );
	                if( x < ( this._wc - 1 ) ) c.width = maxW; else c.width = w - ( maxW * x );
	                if( y < ( this._hc - 1 ) ) c.height = maxH; else c.height = h - ( maxH * y );
	                this._canvas.push( c );
	                this._ctx.push( c.getContext( '2d' ) );
	            }
	        }

	    },

	    /**
	     * Compose from tile
	     * @param {number} x 
	     * @param {number} y 
	     * @param {*} texture 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composeFromTile: function ( x, y, texture ) {

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        x *= 512;
	        y *= 512;

	        const px = Math.floor( x / maxW );
	        const py = Math.floor( y / maxH );

	        x -= px * maxW;
	        y -= py * maxH;

	        this._ctx[ py * this._wc + px ].drawImage( texture, 0, 0, texture.width, texture.height, x, y, 512, 512 );

	        this.progress();
			
	    },

	    /**
	     * Progress
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    progress: function() {

	        this._count++;
			
	        this.setProgress( this._count, this._total );
			
	        if ( this._count === this._total) {

	            this.canvas = this._canvas;
	            this.panoId = this._panoId;
	            this.zoom = this._zoom;

	            if ( this.onPanoramaLoad ) {

	                this.onPanoramaLoad( this._canvas[ 0 ] );

	            }

	        }
	    },

	    /**
	     * Compose panorama
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composePanorama: function () {

	        this.setProgress( 0, 1 );
			
	        const w = this.levelsW[ this._zoom ];
	        const h = this.levelsH[ this._zoom ];
	        const self = this;
				
	        this._count = 0;
	        this._total = w * h;

	        const { useWebGL } = this._parameters;

	        for( let y = 0; y < h; y++ ) {
	            for( let x = 0; x < w; x++ ) {
	                const url = 'https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&output=tile&zoom=' + this._zoom + '&x=' + x + '&y=' + y + '&panoid=' + this._panoId + '&nbt&fover=2';
	                ( function( x, y ) { 
	                    if( useWebGL ) {
	                        const texture = TextureLoader.load( url, null, function() {
	                            self.composeFromTile( x, y, texture );
	                        } );
	                    } else {
	                        const img = new Image();
	                        img.addEventListener( 'load', function() {
	                            self.composeFromTile( x, y, this );			
	                        } );
	                        img.crossOrigin = '';
	                        img.src = url;
	                    }
	                } )( x, y );
	            }
	        }
			
	    },

	    /**
	     * Load
	     * @param {string} panoid 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    load: function ( panoid ) {

	        this.loadPano( panoid );

	    },

	    /**
	     * Load panorama
	     * @param {string} id
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    loadPano: function( id ) {

	        const self = this;
	        this._panoClient.getPanoramaById( id, function (result, status) {
	            if (status === google.maps.StreetViewStatus.OK) {
	                self.result = result;
	                self.copyright = result.copyright;
	                self._panoId = result.location.pano;
	                self.composePanorama();
	            }
	        });
			
	    },

	    /**
	     * Set zoom level
	     * @param {number} z 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setZoom: function( z ) {

	        this._zoom = z;
	        this.adaptTextureToZoom();
	    }
		
	} );

	/**
	 * @classdesc Google streetview panorama
	 * @description [How to get Panorama ID]{@link http://stackoverflow.com/questions/29916149/google-maps-streetview-how-to-get-panorama-id}
	 * @constructor
	 * @param {string} panoId - Panorama id from Google Streetview 
	 * @param {string} [apiKey] - Google Street View API Key
	 */
	class GoogleStreetviewPanorama extends ImagePanorama {
	    
	    constructor( panoId, apiKey ) {
	        super();
	        this.panoId = panoId;

	        this.gsvLoader = null;
	  
	        this.loadRequested = false;
	  
	        this.setupGoogleMapAPI( apiKey );
	    }

	    /**
	     * Load Google Street View by panorama id
	     * @param {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    load ( panoId ) {

	        this.loadRequested = true;
	  
	        panoId = ( panoId || this.panoId ) || {};
	  
	        if ( panoId && this.gsvLoader ) {
	  
	            this.loadGSVLoader( panoId );
	  
	        }
	  
	    }
	  
	    /**
	     * Setup Google Map API
	     * @param {string}  apiKey
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setupGoogleMapAPI ( apiKey ) {
	  
	        const script = document.createElement( 'script' );
	        script.src = 'https://maps.googleapis.com/maps/api/js?';
	        script.src += apiKey ? 'key=' + apiKey : '';
	        script.onreadystatechange = this.setGSVLoader.bind( this );
	        script.onload = this.setGSVLoader.bind( this );
	  
	        document.querySelector( 'head' ).appendChild( script );
	  
	    }
	  
	    /**
	     * Set GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setGSVLoader () {
	  
	        this.gsvLoader = new GoogleStreetviewLoader();
	  
	        if ( this.loadRequested ) {
	  
	            this.load();
	  
	        }
	  
	    }
	  
	    /**
	     * Get GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     * @return {GoogleStreetviewLoader} GSV Loader instance
	     */
	    getGSVLoader () {
	  
	        return this.gsvLoader;
	  
	    }
	  
	    /**
	     * Load GSV Loader
	     * @param  {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    loadGSVLoader ( panoId ) {
	  
	        this.loadRequested = false;
	  
	        this.gsvLoader.onProgress = this.onProgress.bind( this );
	  
	        this.gsvLoader.onPanoramaLoad = this.onLoad.bind( this );
	  
	        this.gsvLoader.setZoom( this.getZoomLevel() );
	  
	        this.gsvLoader.load( panoId );
	  
	        this.gsvLoader.loaded = true;
	    }
	  
	    /**
	     * This will be called when panorama is loaded
	     * @param  {HTMLCanvasElement} canvas - Canvas where the tiles have been drawn
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    onLoad ( canvas ) {
	  
	        ImagePanorama.prototype.onLoad.call( this, new THREE__namespace.Texture( canvas ) );
	  
	    }
	  
	    /**
	     * Reset
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    reset () {
	  
	        this.gsvLoader = undefined;
	  
	        ImagePanorama.prototype.reset.call( this );
	  
	    }
	}

	/**
	 * Stereographic projection shader
	 * based on http://notlion.github.io/streetview-stereographic
	 * @author pchen66
	 */

	/**
	 * @description Stereograhpic Shader
	 * @module StereographicShader
	 * @property {object} uniforms
	 * @property {THREE.Texture} uniforms.tDiffuse diffuse map
	 * @property {number} uniforms.resolution image resolution
	 * @property {THREE.Matrix4} uniforms.transform transformation matrix
	 * @property {number} uniforms.zoom image zoom factor
	 * @property {number} uniforms.opacity image opacity
	 * @property {string} vertexShader vertex shader
	 * @property {string} fragmentShader fragment shader
	 */
	const StereographicShader = {

	    uniforms: {

	        'tDiffuse': { value: new THREE__namespace.Texture() },
	        'resolution': { value: 1.0 },
	        'transform': { value: new THREE__namespace.Matrix4() },
	        'zoom': { value: 1.0 },
	        'opacity': { value: 1.0 }

	    },

	    vertexShader: [

	        'varying vec2 vUv;',

	        'void main() {',

	        'vUv = uv;',
	        'gl_Position = vec4( position, 1.0 );',

	        '}' 

	    ].join( '\n' ),

	    fragmentShader: [

	        'uniform sampler2D tDiffuse;',
	        'uniform float resolution;',
	        'uniform mat4 transform;',
	        'uniform float zoom;',
	        'uniform float opacity;',

	        'varying vec2 vUv;',

	        'const float PI = 3.141592653589793;',

	        'void main(){',

	        'vec2 position = -1.0 +  2.0 * vUv;',

	        'position *= vec2( zoom * resolution, zoom * 0.5 );',

	        'float x2y2 = position.x * position.x + position.y * position.y;',
	        'vec3 sphere_pnt = vec3( 2. * position, x2y2 - 1. ) / ( x2y2 + 1. );',

	        'sphere_pnt = vec3( transform * vec4( sphere_pnt, 1.0 ) );',

	        'vec2 sampleUV = vec2(',
	        '(atan(sphere_pnt.y, sphere_pnt.x) / PI + 1.0) * 0.5,',
	        '(asin(sphere_pnt.z) / PI + 0.5)',
	        ');',

	        'gl_FragColor = texture2D( tDiffuse, sampleUV );',

	        'gl_FragColor.a *= opacity;',

	        '}'

	    ].join( '\n' )

	};

	/**
	 * @classdesc Little Planet
	 * @constructor
	 * @param {string} type 		- Type of little planet basic class
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	class LittlePlanet extends ImagePanorama {
	    constructor( type = 'image', source, size = 10000, ratio = 0.5 ) {
	        if ( type === 'image' ) {
	            super(source, LittlePlanet.createGeometry( size, ratio ), LittlePlanet.createMaterial( size ) );
	        }
	        else {
	            super();
	        }

	        this.size = size;
	        this.ratio = ratio;
	        this.EPS = 0.000001;
	        this.frameId = null;

	        this.dragging = false;
	        this.userMouse = new THREE__namespace.Vector2();

	        this.quatA = new THREE__namespace.Quaternion();
	        this.quatB = new THREE__namespace.Quaternion();
	        this.quatCur = new THREE__namespace.Quaternion();
	        this.quatSlerp = new THREE__namespace.Quaternion();

	        this.vectorX = new THREE__namespace.Vector3( 1, 0, 0 );
	        this.vectorY = new THREE__namespace.Vector3( 0, 1, 0 );

	        this.addEventListener( 'window-resize', this.onWindowResize );
	    }

	    add ( object ) {

	        if ( arguments.length > 1 ) {
	  
	            for ( let i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        if ( object instanceof Infospot ) {

	            object.material.depthTest = false;
	  
	        }

	        ImagePanorama.prototype.add.call( this, object );

	    }

	    static createGeometry ( size, ratio ) {

	        return new THREE__namespace.PlaneBufferGeometry( size, size * ratio );

	    }

	    static createMaterial ( size ) {

	        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

	        uniforms.zoom.value = size;
	        uniforms.opacity.value = 0.0;

	        return new THREE__namespace.ShaderMaterial( {

	            uniforms: uniforms,
	            vertexShader: shader.vertexShader,
	            fragmentShader: shader.fragmentShader,
	            side: THREE__namespace.BackSide,
	            transparent: true

	        } );

	    }

	    registerMouseEvents () {

	        this.container.addEventListener( 'mousedown', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousemove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mouseup', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchstart', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchmove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchend', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousewheel', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'contextmenu', this.onContextMenu.bind( this ), { passive: true } );

	    }

	    unregisterMouseEvents () {

	        this.container.removeEventListener( 'mousedown', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'mousemove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'mouseup', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'touchstart', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'touchmove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'touchend', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'mousewheel', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'contextmenu', this.onContextMenu.bind( this ), false );

	    }

	    onMouseDown ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            this.dragging = true;
	            this.userMouse.set( x, y );

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );
	            this.userMouse.pinchDistance = distance;

	            break;

	        }

	        this.onUpdateCallback();

	    }

	    onMouseMove ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            const angleX = THREE__namespace.Math.degToRad( x - this.userMouse.x ) * 0.4;
	            const angleY = THREE__namespace.Math.degToRad( y - this.userMouse.y ) * 0.4;

	            if ( this.dragging ) {
	                this.quatA.setFromAxisAngle( this.vectorY, angleX );
	                this.quatB.setFromAxisAngle( this.vectorX, angleY );
	                this.quatCur.multiply( this.quatA ).multiply( this.quatB );
	                this.userMouse.set( x, y );
	            }

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );

	            this.addZoomDelta( this.userMouse.pinchDistance - distance );

	            break;

	        }

	    }

	    onMouseUp () {

	        this.dragging = false;

	    }

	    onMouseWheel ( event ) {

	        event.preventDefault();
	        event.stopPropagation();

	        let delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }

	        this.addZoomDelta( delta );
	        this.onUpdateCallback();

	    }

	    addZoomDelta ( delta ) {

	        const uniforms = this.material.uniforms;
	        const lowerBound = this.size * 0.1;
	        const upperBound = this.size * 10;

	        uniforms.zoom.value += delta;

	        if ( uniforms.zoom.value <= lowerBound ) {

	            uniforms.zoom.value = lowerBound;

	        } else if ( uniforms.zoom.value >= upperBound ) {

	            uniforms.zoom.value = upperBound;

	        }
	    }

	    onUpdateCallback () {

	        this.frameId = window.requestAnimationFrame( this.onUpdateCallback.bind( this ) );

	        this.quatSlerp.slerp( this.quatCur, 0.1 );

	        if ( this.material ) {

	            this.material.uniforms.transform.value.makeRotationFromQuaternion( this.quatSlerp );

	        }
	    
	        if ( !this.dragging && 1.0 - this.quatSlerp.clone().dot( this.quatCur ) < this.EPS ) {
	  
	            window.cancelAnimationFrame( this.frameId );

	        }

	    }

	    reset () {

	        this.quatCur.set( 0, 0, 0, 1 );
	        this.quatSlerp.set( 0, 0, 0, 1 );
	        this.onUpdateCallback();

	    }

	    onLoad ( texture ) {

	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

	        this.registerMouseEvents();
	        this.onUpdateCallback();

	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'disableControl' } );

	        ImagePanorama.prototype.onLoad.call( this, texture );

	    }

	    onLeave () {

	        this.unregisterMouseEvents();

	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'enableControl', data: CONTROLS.ORBIT } );

	        window.cancelAnimationFrame( this.frameId );

	        ImagePanorama.prototype.onLeave.call( this );

	    }

	    onWindowResize () {
	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;
	    }

	    onContextMenu () {

	        this.dragging = false;

	    }

	    dispose () {	

	        this.unregisterMouseEvents();

	        ImagePanorama.prototype.dispose.call( this );

	    }

	 

	}

	/**
	 * @classdesc Image Little Planet
	 * @constructor
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	class ImageLittlePlanet extends LittlePlanet {
	    constructor( source, size, ratio ) {
	        super(source, size, ratio);
	    }


	    /**
	     * On loaded with texture
	     * @param {THREE.Texture} texture
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    onLoad ( texture ) {

	        this.updateTexture( texture );

	        LittlePlanet.prototype.onLoad.call( this, texture );
	    }
	  
	    /**
	     * Update texture
	     * @param {THREE.Texture} texture 
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    updateTexture ( texture ) {

	        texture.minFilter = texture.magFilter = THREE__namespace.LinearFilter;
	  
	        this.material.uniforms[ 'tDiffuse' ].value = texture;

	    }

	    /**
	     * Dispose
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    dispose () {

	        const tDiffuse = this.material.uniforms[ 'tDiffuse' ];

	        if ( tDiffuse && tDiffuse.value ) {

	            tDiffuse.value.dispose();

	        }

	        LittlePlanet.prototype.dispose.call( this );

	    }
	}

	/**
	 * @classdesc Camera panorama
	 * @description See {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints|MediaStreamConstraints} for constraints
	 * @param {object} - camera constraints
	 * @constructor
	 */
	class CameraPanorama extends Panorama {
	    constructor( constraints ) {
	        const radius = 5000;
	        const geometry = new THREE__namespace.SphereGeometry( radius, 60, 40 );
	        const material = new THREE__namespace.MeshBasicMaterial( { visible: false });
	    
	        super(geometry, material);

	        this.media = new Media( constraints );
	        this.radius = radius;

	        this.addEventListener( 'enter', this.start.bind( this ) );
	        this.addEventListener( 'leave', this.stop.bind( this ) );
	        this.addEventListener( 'panolens-container', this.onPanolensContainer.bind( this ) );
	        this.addEventListener( 'panolens-scene', this.onPanolensScene.bind( this ) );

	    }

	    /**
	     * On container event
	     * @param {object} event
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensContainer ( { container } ) {
	        this.media.setContainer( container );
	    }

	    /**
	     * On scene event
	     * @param {object} event 
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensScene( { scene } ) {
	        this.media.setScene( scene );
	    }

	    /**
	     * Start camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     * @returns {Promise}
	     */
	    start() {
	        return this.media.start();
	    }

	    /**
	     * Stop camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    stop() {
	        this.media.stop();
	    }
	}

	/**
	 * @classdesc Orbit Controls
	 * @constructor
	 * @external OrbitControls
	 * @param {THREE.Object} object 
	 * @param {HTMLElement} domElement 
	 */
	function OrbitControls ( object, domElement ) {

	    this.object = object;
	    this.domElement = ( domElement !== undefined ) ? domElement : document;
	    this.frameId = null;

	    // API

	    // Set to false to disable this control
	    this.enabled = true;

	    /*
	     * "target" sets the location of focus, where the control orbits around
	     * and where it pans with respect to.
	     */
	    this.target = new THREE__namespace.Vector3();

	    // center is old, deprecated; use "target" instead
	    this.center = this.target;

	    /*
	     * This option actually enables dollying in and out; left as "zoom" for
	     * backwards compatibility
	     */
	    this.noZoom = false;
	    this.zoomSpeed = 1.0;
	    this.revertZoomScrollDirection = false;

	    // Limits to how far you can dolly in and out ( PerspectiveCamera only )
	    this.minDistance = 0;
	    this.maxDistance = Infinity;

	    // Limits to how far you can zoom in and out ( OrthographicCamera only )
	    this.minZoom = 0;
	    this.maxZoom = Infinity;

	    // Set to true to disable this control
	    this.noRotate = false;
	    this.rotateSpeed = -0.15;

	    // Set to true to disable this control
	    this.noPan = true;
	    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	    // Set to true to automatically rotate around the target
	    this.autoRotate = false;
	    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	    /*
	     * How far you can orbit vertically, upper and lower limits.
	     * Range is 0 to Math.PI radians.
	     */
	    this.minPolarAngle = 0; // radians
	    this.maxPolarAngle = Math.PI; // radians

	    // Momentum
	  	this.momentumDampingFactor = 0.90;
	  	this.momentumScalingFactor = -0.005;
	  	this.momentumKeydownFactor = 20;

	  	// Fov
	  	this.minFov = 30;
	  	this.maxFov = 120;

	    /*
	     * How far you can orbit horizontally, upper and lower limits.
	     * If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	     */
	    this.minAzimuthAngle = - Infinity; // radians
	    this.maxAzimuthAngle = Infinity; // radians

	    // Set to true to disable use of the keys
	    this.noKeys = false;

	    // The four arrow keys
	    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	    // Mouse buttons
	    this.mouseButtons = { ORBIT: THREE__namespace.MOUSE.LEFT, ZOOM: THREE__namespace.MOUSE.MIDDLE, PAN: THREE__namespace.MOUSE.RIGHT };

	    /*
	     * //////////
	     * internals
	     */

	    var scope = this;

	    var EPS = 10e-8;
	    var MEPS = 10e-5;

	    var rotateStart = new THREE__namespace.Vector2();
	    var rotateEnd = new THREE__namespace.Vector2();
	    var rotateDelta = new THREE__namespace.Vector2();

	    var panStart = new THREE__namespace.Vector2();
	    var panEnd = new THREE__namespace.Vector2();
	    var panDelta = new THREE__namespace.Vector2();
	    var panOffset = new THREE__namespace.Vector3();

	    var offset = new THREE__namespace.Vector3();

	    var dollyStart = new THREE__namespace.Vector2();
	    var dollyEnd = new THREE__namespace.Vector2();
	    var dollyDelta = new THREE__namespace.Vector2();

	    var theta = 0;
	    var phi = 0;
	    var phiDelta = 0;
	    var thetaDelta = 0;
	    var scale = 1;
	    var pan = new THREE__namespace.Vector3();

	    var lastPosition = new THREE__namespace.Vector3();
	    var lastQuaternion = new THREE__namespace.Quaternion();

	    var momentumLeft = 0, momentumUp = 0;
	    var eventPrevious;
	    var momentumOn = false;

	    var keyUp, keyBottom, keyLeft, keyRight;

	    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	    var state = STATE.NONE;

	    // for reset

	    this.target0 = this.target.clone();
	    this.position0 = this.object.position.clone();
	    this.zoom0 = this.object.zoom;

	    // so camera.up is the orbit axis

	    var quat = new THREE__namespace.Quaternion().setFromUnitVectors( object.up, new THREE__namespace.Vector3( 0, 1, 0 ) );
	    var quatInverse = quat.clone().invert();

	    // events

	    var changeEvent = { type: 'change' };
	    var startEvent = { type: 'start' };
	    var endEvent = { type: 'end' };

	    this.setLastQuaternion = function ( quaternion ) {
	        lastQuaternion.copy( quaternion );
	        scope.object.quaternion.copy( quaternion );
	    };

	    this.getLastPosition = function () {
	        return lastPosition;
	    };

	    this.rotateLeft = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        thetaDelta -= angle;


	    };

	    this.rotateUp = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        phiDelta -= angle;

	    };

	    // pass in distance in world space to move left
	    this.panLeft = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get X column of matrix
	        panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
	        panOffset.multiplyScalar( - distance );

	        pan.add( panOffset );

	    };

	    // pass in distance in world space to move up
	    this.panUp = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get Y column of matrix
	        panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
	        panOffset.multiplyScalar( distance );

	        pan.add( panOffset );

	    };

	    /*
	     * pass in x,y of change desired in pixel space,
	     * right and down are positive
	     */
	    this.pan = function ( deltaX, deltaY ) {

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( scope.object instanceof THREE__namespace.PerspectiveCamera ) {

	            // perspective
	            var position = scope.object.position;
	            var offset = position.clone().sub( scope.target );
	            var targetDistance = offset.length();

	            // half of the fov is center to top of screen
	            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

	            // we actually don't use screenWidth, since perspective camera is fixed to screen height
	            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
	            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

	        } else if ( scope.object instanceof THREE__namespace.OrthographicCamera ) {

	            // orthographic
	            scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
	            scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

	        } else {

	            // camera neither orthographic or perspective
	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

	        }

	    };

	    this.momentum = function(){
			
	        if ( !momentumOn ) return;

	        if ( Math.abs( momentumLeft ) < MEPS && Math.abs( momentumUp ) < MEPS ) { 

	            momentumOn = false; 
	            return;
	        }

	        momentumUp   *= this.momentumDampingFactor;
	        momentumLeft *= this.momentumDampingFactor;

	        thetaDelta -= this.momentumScalingFactor * momentumLeft;
	        phiDelta   -= this.momentumScalingFactor * momentumUp;

	    };

	    this.dollyIn = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE__namespace.PerspectiveCamera ) {

	            scale /= dollyScale;

	        } else if ( scope.object instanceof THREE__namespace.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom * dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.dollyOut = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE__namespace.PerspectiveCamera ) {

	            scale *= dollyScale;

	        } else if ( scope.object instanceof THREE__namespace.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom / dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.update = function ( ignoreUpdate ) {

	        var position = this.object.position;

	        offset.copy( position ).sub( this.target );

	        // rotate offset to "y-axis-is-up" space
	        offset.applyQuaternion( quat );

	        // angle from z-axis around y-axis

	        theta = Math.atan2( offset.x, offset.z );

	        // angle from y-axis

	        phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

	        if ( this.autoRotate && state === STATE.NONE ) {

	            this.rotateLeft( getAutoRotationAngle() );

	        }

	        this.momentum();

	        theta += thetaDelta;
	        phi += phiDelta;

	        // restrict theta to be between desired limits
	        theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, theta ) );

	        // restrict phi to be between desired limits
	        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

	        // restrict phi to be betwee EPS and PI-EPS
	        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

	        var radius = offset.length() * scale;

	        // restrict radius to be between desired limits
	        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

	        // move target to panned location
	        this.target.add( pan );

	        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
	        offset.y = radius * Math.cos( phi );
	        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

	        // rotate offset back to "camera-up-vector-is-up" space
	        offset.applyQuaternion( quatInverse );

	        position.copy( this.target ).add( offset );

	        this.object.lookAt( this.target );

	        thetaDelta = 0;
	        phiDelta = 0;
	        scale = 1;
	        pan.set( 0, 0, 0 );

	        /*
	         * update condition is:
	         * min(camera displacement, camera rotation in radians)^2 > EPS
	         * using small-angle approximation cos(x/2) = 1 - x^2 / 8
	         */
	        if ( lastPosition.distanceToSquared( this.object.position ) > EPS
			    || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS ) {

	            if ( ignoreUpdate !== true ) { this.dispatchEvent( changeEvent ); }

	            lastPosition.copy( this.object.position );
	            lastQuaternion.copy (this.object.quaternion );

	        }

	    };


	    this.reset = function () {

	        state = STATE.NONE;

	        this.target.copy( this.target0 );
	        this.object.position.copy( this.position0 );
	        this.object.zoom = this.zoom0;

	        this.object.updateProjectionMatrix();
	        this.dispatchEvent( changeEvent );

	        this.update();

	    };

	    this.getPolarAngle = function () {

	        return phi;

	    };

	    this.getAzimuthalAngle = function () {

	        return theta;

	    };

	    function getAutoRotationAngle() {

	        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	    }

	    function getZoomScale() {

	        return Math.pow( 0.95, scope.zoomSpeed );

	    }

	    function onMouseDown( event ) {

	        momentumOn = false;

	   		momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;
	        event.preventDefault();

	        if ( event.button === scope.mouseButtons.ORBIT ) {
	            if ( scope.noRotate === true ) return;

	            state = STATE.ROTATE;

	            rotateStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.ZOOM ) {
	            if ( scope.noZoom === true ) return;

	            state = STATE.DOLLY;

	            dollyStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.PAN ) {
	            if ( scope.noPan === true ) return;

	            state = STATE.PAN;

	            panStart.set( event.clientX, event.clientY );

	        }

	        if ( state !== STATE.NONE ) {
	            document.addEventListener( 'mousemove', onMouseMove, false );
	            document.addEventListener( 'mouseup', onMouseUp, false );
	            scope.dispatchEvent( startEvent );
	        }

	        scope.update();

	    }

	    function onMouseMove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( state === STATE.ROTATE ) {

	            if ( scope.noRotate === true ) return;

	            rotateEnd.set( event.clientX, event.clientY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.clientX - eventPrevious.clientX;
	                momentumUp = event.clientY - eventPrevious.clientY;
	            }

	            eventPrevious = event;

	        } else if ( state === STATE.DOLLY ) {

	            if ( scope.noZoom === true ) return;

	            dollyEnd.set( event.clientX, event.clientY );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y > 0 ) {

	                scope.dollyIn();

	            } else if ( dollyDelta.y < 0 ) {

	                scope.dollyOut();

	            }

	            dollyStart.copy( dollyEnd );

	        } else if ( state === STATE.PAN ) {

	            if ( scope.noPan === true ) return;

	            panEnd.set( event.clientX, event.clientY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	        }

	        if ( state !== STATE.NONE ) scope.update();

	    }

	    function onMouseUp( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        document.removeEventListener( 'mousemove', onMouseMove, false );
	        document.removeEventListener( 'mouseup', onMouseUp, false );
	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    function onMouseWheel( event ) {

	        if ( scope.enabled === false || scope.noZoom === true || state !== STATE.NONE ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }
	        const zoomOut = delta > 0;
	        const zoomIn = delta < 0;

	        if ( !scope.revertZoomScrollDirection ? zoomOut : !zoomOut ) {

	            // scope.dollyOut();
	            scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                ? scope.object.fov + 1
	                : scope.maxFov;
	            scope.object.updateProjectionMatrix();

	        } else if ( !scope.revertZoomScrollDirection ? zoomIn : !zoomIn ) {

	            // scope.dollyIn();
	            scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                ? scope.object.fov - 1
	                : scope.minFov;
	            scope.object.updateProjectionMatrix();

	        }

	        scope.update();
	        scope.dispatchEvent( changeEvent );
	        scope.dispatchEvent( startEvent );
	        scope.dispatchEvent( endEvent );

	    }

	    function onKeyUp ( event ) {

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = false;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = false;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = false;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = false;
	            break;

	        }

	    }

	    function onKeyDown( event ) {

	        if ( scope.enabled === false || scope.noKeys === true || scope.noRotate === true ) return;

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = true;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = true;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = true;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = true;
	            break;

	        }

	        if (keyUp || keyBottom || keyLeft || keyRight) {

	            momentumOn = true;

	            if (keyUp) momentumUp = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyBottom) momentumUp = scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyLeft) momentumLeft = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyRight) momentumLeft = scope.rotateSpeed * scope.momentumKeydownFactor;

	        }

	    }

	    function touchstart( event ) {

	        momentumOn = false;

	        momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;

	        switch ( event.touches.length ) {

	        case 1:	// one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;

	            state = STATE.TOUCH_ROTATE;

	            rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        case 2:	// two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;

	            state = STATE.TOUCH_DOLLY;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyStart.set( 0, distance );

	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;

	            state = STATE.TOUCH_PAN;

	            panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        default:

	            state = STATE.NONE;

	        }

	        if ( state !== STATE.NONE ) scope.dispatchEvent( startEvent );

	    }

	    function touchmove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        switch ( event.touches.length ) {

	        case 1: // one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;
	            if ( state !== STATE.TOUCH_ROTATE ) return;

	            rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.touches[ 0 ].pageX - eventPrevious.pageX;
	                momentumUp = event.touches[ 0 ].pageY - eventPrevious.pageY;
	            }

	            eventPrevious = {
	                pageX: event.touches[ 0 ].pageX,
	                pageY: event.touches[ 0 ].pageY,
	            };

	            scope.update();
	            break;

	        case 2: // two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;
	            if ( state !== STATE.TOUCH_DOLLY ) return;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyEnd.set( 0, distance );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y < 0 ) {

	                scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                    ? scope.object.fov + 1
	                    : scope.maxFov;
	                scope.object.updateProjectionMatrix();

	            } else if ( dollyDelta.y > 0 ) {

	                scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                    ? scope.object.fov - 1
	                    : scope.minFov;
	                scope.object.updateProjectionMatrix();

	            }

	            dollyStart.copy( dollyEnd );

	            scope.update();
	            scope.dispatchEvent( changeEvent );
	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;
	            if ( state !== STATE.TOUCH_PAN ) return;

	            panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	            scope.update();
	            break;

	        default:

	            state = STATE.NONE;

	        }

	    }

	    function touchend( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    this.dispose = function() {

	        this.domElement.removeEventListener( 'mousedown', onMouseDown );
	        this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
	        this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel );

	        this.domElement.removeEventListener( 'touchstart', touchstart );
	        this.domElement.removeEventListener( 'touchend', touchend );
	        this.domElement.removeEventListener( 'touchmove', touchmove );

	        window.removeEventListener( 'keyup', onKeyUp );
	        window.removeEventListener( 'keydown', onKeyDown );

	    };

	    // this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	    this.domElement.addEventListener( 'mousedown', onMouseDown, { passive: false } );
	    this.domElement.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
	    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, { passive: false } ); // firefox

	    this.domElement.addEventListener( 'touchstart', touchstart, { passive: false } );
	    this.domElement.addEventListener( 'touchend', touchend, { passive: false } );
	    this.domElement.addEventListener( 'touchmove', touchmove, { passive: false } );

	    window.addEventListener( 'keyup', onKeyUp, { passive: false } );
	    window.addEventListener( 'keydown', onKeyDown, { passive: false } );

	    // force an update at start
	    this.update();

	}
	OrbitControls.prototype = Object.assign( Object.create( THREE__namespace.EventDispatcher.prototype ), {

	    constructor: OrbitControls

	} );

	/**
	 * @classdesc Device Orientation Control
	 * @constructor
	 * @external DeviceOrientationControls
	 * @param {THREE.Camera} camera 
	 * @param {HTMLElement} domElement 
	 */
	function DeviceOrientationControls ( camera, domElement ) {

	    var scope = this;
	    var changeEvent = { type: 'change' };

	    var rotY = 0;
	    var rotX = 0;
	    var tempX = 0;
	    var tempY = 0;

	    this.camera = camera;
	    this.camera.rotation.reorder( 'YXZ' );
	    this.domElement = ( domElement !== undefined ) ? domElement : document;

	    this.enabled = true;

	    this.deviceOrientation = {};
	    this.screenOrientation = 0;

	    this.alpha = 0;
	    this.alphaOffsetAngle = 0;


	    var onDeviceOrientationChangeEvent = function( event ) {

	        scope.deviceOrientation = event;

	    };

	    var onScreenOrientationChangeEvent = function() {

	        scope.screenOrientation = window.orientation || 0;

	    };

	    var onTouchStartEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    var onTouchMoveEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        rotY += THREE__namespace.Math.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
	        rotX += THREE__namespace.Math.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

	        scope.updateAlphaOffsetAngle( rotY );

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

	        var zee = new THREE__namespace.Vector3( 0, 0, 1 );

	        var euler = new THREE__namespace.Euler();

	        var q0 = new THREE__namespace.Quaternion();

	        var q1 = new THREE__namespace.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

	        var vectorFingerY;
	        var fingerQY = new THREE__namespace.Quaternion();
	        var fingerQX = new THREE__namespace.Quaternion();

	        if ( scope.screenOrientation == 0 ) {

	            vectorFingerY = new THREE__namespace.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        } else if ( scope.screenOrientation == 180 ) {

	            vectorFingerY = new THREE__namespace.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == 90 ) {

	            vectorFingerY = new THREE__namespace.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == - 90) {

	            vectorFingerY = new THREE__namespace.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        }

	        q1.multiply( fingerQY );
	        q1.multiply( fingerQX );

	        euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

	        quaternion.setFromEuler( euler ); // orient the device

	        quaternion.multiply( q1 ); // camera looks out the back of the device, not the top

	        quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation

	    };

	    this.connect = function() {

	        onScreenOrientationChangeEvent(); // run once on load

	        window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', this.update.bind( this ), { passive: true } );

	        scope.domElement.addEventListener( 'touchstart', onTouchStartEvent, { passive: false } );
	        scope.domElement.addEventListener( 'touchmove', onTouchMoveEvent, { passive: false } );

	        scope.enabled = true;

	    };

	    this.disconnect = function() {

	        window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', this.update.bind( this ), false );

	        scope.domElement.removeEventListener( 'touchstart', onTouchStartEvent, false );
	        scope.domElement.removeEventListener( 'touchmove', onTouchMoveEvent, false );

	        scope.enabled = false;

	    };

	    this.update = function( ignoreUpdate ) {

	        if ( scope.enabled === false ) return;

	        var alpha = scope.deviceOrientation.alpha ? THREE__namespace.Math.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
	        var beta = scope.deviceOrientation.beta ? THREE__namespace.Math.degToRad( scope.deviceOrientation.beta ) : 0; // X'
	        var gamma = scope.deviceOrientation.gamma ? THREE__namespace.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
	        var orient = scope.screenOrientation ? THREE__namespace.Math.degToRad( scope.screenOrientation ) : 0; // O

	        setCameraQuaternion( scope.camera.quaternion, alpha, beta, gamma, orient );
	        scope.alpha = alpha;

	        if ( ignoreUpdate !== true ) { scope.dispatchEvent( changeEvent ); }

	    };

	    this.updateAlphaOffsetAngle = function( angle ) {

	        this.alphaOffsetAngle = angle;
	        this.update();

	    };

	    this.dispose = function() {

	        this.disconnect();

	    };

	    this.connect();

	}
	DeviceOrientationControls.prototype = Object.assign( Object.create( THREE__namespace.EventDispatcher.prototype), {

	    constructor: DeviceOrientationControls

	} );

	/**
	 * @classdesc Google Cardboard Effect Composer
	 * @constructor
	 * @external CardboardEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	class CardboardEffect {

	    constructor( renderer ) {
	        var _camera = new THREE__namespace.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	        var _scene = new THREE__namespace.Scene();
	  
	        var _stereo = new THREE__namespace.StereoCamera();
	        _stereo.aspect = 0.5;
	  
	        var _params = { minFilter: THREE__namespace.LinearFilter, magFilter: THREE__namespace.NearestFilter, format: THREE__namespace.RGBAFormat };
	  
	        var _renderTarget = new THREE__namespace.WebGLRenderTarget( 512, 512, _params );
	        _renderTarget.scissorTest = true;
	        _renderTarget.texture.generateMipmaps = false;
	  
	        /*
	         * Distortion Mesh ported from:
	         * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
	         */
	  
	        var distortion = new THREE__namespace.Vector2( 0.441, 0.156 );
	  
	        var geometry = new THREE__namespace.PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();
	  
	        var positions = geometry.attributes.position.array;
	        var uvs = geometry.attributes.uv.array;
	  
	        // duplicate
	        geometry.attributes.position.count *= 2;
	        geometry.attributes.uv.count *= 2;
	  
	        var positions2 = new Float32Array( positions.length * 2 );
	        positions2.set( positions );
	        positions2.set( positions, positions.length );
	  
	        var uvs2 = new Float32Array( uvs.length * 2 );
	        uvs2.set( uvs );
	        uvs2.set( uvs, uvs.length );
	  
	        var vector = new THREE__namespace.Vector2();
	        var length = positions.length / 3;
	  
	        for ( var i = 0, l = positions2.length / 3; i < l; i ++ ) {
	  
	            vector.x = positions2[ i * 3 + 0 ];
	            vector.y = positions2[ i * 3 + 1 ];
	  
	            var dot = vector.dot( vector );
	            var scalar = 1.5 + ( distortion.x + distortion.y * dot ) * dot;
	  
	            var offset = i < length ? 0 : 1;
	  
	            positions2[ i * 3 + 0 ] = ( vector.x / scalar ) * 1.5 - 0.5 + offset;
	            positions2[ i * 3 + 1 ] = ( vector.y / scalar ) * 3.0;
	  
	            uvs2[ i * 2 ] = ( uvs2[ i * 2 ] + offset ) * 0.5;
	  
	        }
	  
	        geometry.attributes.position.array = positions2;
	        geometry.attributes.uv.array = uvs2;
	  
	        //
	  
	        var material = new THREE__namespace.MeshBasicMaterial( { map: _renderTarget.texture } );
	        var mesh = new THREE__namespace.Mesh( geometry, material );
	        _scene.add( mesh );
	  
	        //
	  
	        this.setSize = function ( width, height ) {
	  
	            renderer.setSize( width, height );
	  
	            var pixelRatio = renderer.getPixelRatio();
	  
	            _renderTarget.setSize( width * pixelRatio, height * pixelRatio );
	  
	        };
	  
	        this.render = function ( scene, camera ) {
	  
	            scene.updateMatrixWorld();
	  
	            if ( camera.parent === null ) camera.updateMatrixWorld();
	  
	            _stereo.update( camera );
	  
	            var width = _renderTarget.width / 2;
	            var height = _renderTarget.height;
	  
	            if ( renderer.autoClear ) renderer.clear();
	  
	            _renderTarget.scissor.set( 0, 0, width, height );
	            _renderTarget.viewport.set( 0, 0, width, height );
	            renderer.setRenderTarget( _renderTarget );
	            renderer.render( scene, _stereo.cameraL );
	  
	            renderer.clearDepth();
	  
	            _renderTarget.scissor.set( width, 0, width, height );
	            _renderTarget.viewport.set( width, 0, width, height );
	            renderer.setRenderTarget( _renderTarget );
	            renderer.render( scene, _stereo.cameraR );
	  
	            renderer.clearDepth();
	  
	            renderer.setRenderTarget( null );
	            renderer.render( _scene, _camera );
	        };
	    }
	}

	/**
	 * @classdesc Stereo Effect Composer
	 * @constructor
	 * @external StereoEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	class StereoEffect {
	    constructor ( renderer ) {
	        var _stereo = new THREE__namespace.StereoCamera();
	        _stereo.aspect = 0.5;
	        var size = new THREE__namespace.Vector2();

	        this.setEyeSeparation = function ( eyeSep ) {

	            _stereo.eyeSep = eyeSep;

	        };

	        this.setSize = function ( width, height ) {

	            renderer.setSize( width, height );

	        };

	        this.render = function ( scene, camera ) {

	            scene.updateMatrixWorld();

	            if ( camera.parent === null ) camera.updateMatrixWorld();

	            _stereo.update( camera );

	            renderer.getSize( size );

	            if ( renderer.autoClear ) renderer.clear();
	            renderer.setScissorTest( true );

	            renderer.setScissor( 0, 0, size.width / 2, size.height );
	            renderer.setViewport( 0, 0, size.width / 2, size.height );
	            renderer.render( scene, _stereo.cameraL );

	            renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
	            renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
	            renderer.render( scene, _stereo.cameraR );

	            renderer.setScissorTest( false );

	        };
	    }
	  
	}

	/**
	 * @classdesc Viewer contains pre-defined scene, camera and renderer
	 * @constructor
	 * @param {object} [options] - Use custom or default config options
	 * @param {HTMLElement} [options.container] - A HTMLElement to host the canvas
	 * @param {THREE.Scene} [options.scene=THREE.Scene] - A THREE.Scene which contains panorama and 3D objects
	 * @param {THREE.Camera} [options.camera=THREE.PerspectiveCamera] - A THREE.Camera to view the scene
	 * @param {THREE.WebGLRenderer} [options.renderer=THREE.WebGLRenderer] - A THREE.WebGLRenderer to render canvas
	 * @param {boolean} [options.controlBar=true] - Show/hide control bar on the bottom of the container
	 * @param {array}   [options.controlButtons=[]] - Button names to mount on controlBar if controlBar exists, Defaults to ['fullscreen', 'setting', 'video']
	 * @param {boolean} [options.autoHideControlBar=false] - Auto hide control bar when click on non-active area
	 * @param {boolean} [options.autoHideInfospot=true] - Auto hide infospots when click on non-active area
	 * @param {boolean} [options.horizontalView=false] - Allow only horizontal camera control
	 * @param {number}  [options.clickTolerance=10] - Distance tolerance to tigger click / tap event
	 * @param {number}  [options.cameraFov=60] - Camera field of view value
	 * @param {boolean} [options.reverseDragging=false] - Reverse dragging direction
	 * @param {boolean} [options.enableReticle=false] - Enable reticle for mouseless interaction other than VR mode
	 * @param {number}  [options.dwellTime=1500] - Dwell time for reticle selection in ms
	 * @param {boolean} [options.autoReticleSelect=true] - Auto select a clickable target after dwellTime
	 * @param {boolean} [options.viewIndicator=false] - Adds an angle view indicator in upper left corner
	 * @param {number}  [options.indicatorSize=30] - Size of View Indicator
	 * @param {string}  [options.output='none'] - Whether and where to output raycast position. Could be 'event', 'console' or 'overlay'.
	 * @param {boolean} [options.autoRotate=false] - Auto rotate
	 * @param {number}  [options.autoRotateSpeed=2.0] - Auto rotate speed as in degree per second. Positive is counter-clockwise and negative is clockwise.
	 * @param {number}  [options.autoRotateActivationDuration=5000] - Duration before auto rotatation when no user interactivity in ms
	 */
	class Viewer extends THREE__namespace.EventDispatcher {
	    constructor( options ) {
	        super();
	        let container;

	        options = options || {};
	        options.controlBar = options.controlBar !== undefined ? options.controlBar : true;
	        options.controlButtons = options.controlButtons || [ 'fullscreen', 'setting', 'video' ];
	        options.autoHideControlBar = options.autoHideControlBar !== undefined ? options.autoHideControlBar : false;
	        options.autoHideInfospot = options.autoHideInfospot !== undefined ? options.autoHideInfospot : true;
	        options.horizontalView = options.horizontalView !== undefined ? options.horizontalView : false;
	        options.clickTolerance = options.clickTolerance || 10;
	        options.cameraFov = options.cameraFov || 60;
	        options.reverseDragging = options.reverseDragging || false;
	        options.enableReticle = options.enableReticle || false;
	        options.dwellTime = options.dwellTime || 1500;
	        options.autoReticleSelect = options.autoReticleSelect !== undefined ? options.autoReticleSelect : true;
	        options.viewIndicator = options.viewIndicator !== undefined ? options.viewIndicator : false;
	        options.indicatorSize = options.indicatorSize || 30;
	        options.output = options.output ? options.output : 'none';
	        options.autoRotate = options.autoRotate || false;
	        options.autoRotateSpeed = options.autoRotateSpeed || 2.0;
	        options.autoRotateActivationDuration = options.autoRotateActivationDuration || 5000;
	  
	        this.options = options;
	  
	        /*
	         * CSS Icon
	         * const styleLoader = new StyleLoader();
	         * styleLoader.inject( 'icono' );
	         */
	  
	        // Container
	        if ( options.container ) {
	  
	            container = options.container;
	            container._width = container.clientWidth;
	            container._height = container.clientHeight;
	  
	        } else {
	  
	            container = document.createElement( 'div' );
	            container.classList.add( 'panolens-container' );
	            container.style.width = '100%';
	            container.style.height = '100%';
	            container._width = window.innerWidth;
	            container._height = window.innerHeight;
	            document.body.appendChild( container );
	  
	        }
	  
	        this.container = container;
	  
	        this.camera = options.camera || new THREE__namespace.PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
	        this.scene = options.scene || new THREE__namespace.Scene();
	        this.renderer = options.renderer || new THREE__namespace.WebGLRenderer( { alpha: true, antialias: false } );
	        this.sceneReticle = new THREE__namespace.Scene();
	  
	        this.viewIndicatorSize = this.options.indicatorSize;
	  
	        this.reticle = {};
	        this.tempEnableReticle = this.options.enableReticle;
	  
	        this.mode = MODES.NORMAL;
	  
	        this.panorama = null;
	        this.widget = null;
	  
	        this.hoverObject = null;
	        this.infospot = null;
	        this.pressEntityObject = null;
	        this.pressObject = null;
	  
	        this.raycaster = new THREE__namespace.Raycaster();
	        this.raycasterPoint = new THREE__namespace.Vector2();
	        this.userMouse = new THREE__namespace.Vector2();
	        this.updateCallbacks = [];
	        this.requestAnimationId = null;
	  
	        this.cameraFrustum = new THREE__namespace.Frustum();
	        this.cameraViewProjectionMatrix = new THREE__namespace.Matrix4();
	  
	        this.autoRotateRequestId = null;
	  
	        this.outputDivElement = null;
	  
	        this.touchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
	  
	        // Handler references
	        this.HANDLER_MOUSE_DOWN = this.onMouseDown.bind( this );
	        this.HANDLER_MOUSE_UP = this.onMouseUp.bind( this );
	        this.HANDLER_MOUSE_MOVE = this.onMouseMove.bind( this );
	        this.HANDLER_WINDOW_RESIZE = this.onWindowResize.bind( this );
	        this.HANDLER_KEY_DOWN = this.onKeyDown.bind( this );
	        this.HANDLER_KEY_UP = this.onKeyUp.bind( this );
	        this.HANDLER_TAP = this.onTap.bind( this, {
	            clientX: this.container.clientWidth / 2,
	            clientY: this.container.clientHeight / 2
	        } );
	  
	        // Flag for infospot output
	        this.OUTPUT_INFOSPOT = false;
	  
	        // Animations
	        this.tweenLeftAnimation = new Tween.Tween();
	        this.tweenUpAnimation = new Tween.Tween();
	  
	        // Renderer
	        this.renderer.setPixelRatio( window.devicePixelRatio );
	        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.renderer.setClearColor( 0x000000, 0 );
	        this.renderer.autoClear = false;
	  
	        // Append Renderer Element to container
	        this.renderer.domElement.classList.add( 'panolens-canvas' );
	        this.renderer.domElement.style.display = 'block';
	        this.container.style.backgroundColor = '#000';
	        this.container.appendChild( this.renderer.domElement );
	  
	        // Camera Controls
	        this.OrbitControls = new OrbitControls( this.camera, this.container );
	        this.OrbitControls.id = 'orbit';
	        this.OrbitControls.minDistance = 1;
	        this.OrbitControls.noPan = true;
	        this.OrbitControls.autoRotate = this.options.autoRotate;
	        this.OrbitControls.autoRotateSpeed = this.options.autoRotateSpeed;
	  
	        this.DeviceOrientationControls = new DeviceOrientationControls( this.camera, this.container );
	        this.DeviceOrientationControls.id = 'device-orientation';
	        this.DeviceOrientationControls.enabled = false;
	        this.camera.position.z = 1;
	  
	        // Register change event if passiveRenering
	        if ( this.options.passiveRendering ) {
	  
	            console.warn( 'passiveRendering is now deprecated' );
	  
	        }
	  
	        // Controls
	        this.controls = [ this.OrbitControls, this.DeviceOrientationControls ];
	        this.control = this.OrbitControls;
	  
	        // Cardboard effect
	        this.CardboardEffect = new CardboardEffect( this.renderer );
	        this.CardboardEffect.setSize( this.container.clientWidth, this.container.clientHeight );
	  
	        // Stereo effect
	        this.StereoEffect = new StereoEffect( this.renderer );
	        this.StereoEffect.setSize( this.container.clientWidth, this.container.clientHeight );
	  
	        this.effect = this.CardboardEffect;
	  
	        // Add default hidden reticle
	        this.addReticle();
	  
	        // Lock horizontal view
	        if ( this.options.horizontalView ) {
	            this.OrbitControls.minPolarAngle = Math.PI / 2;
	            this.OrbitControls.maxPolarAngle = Math.PI / 2;
	        }
	  
	        // Add Control UI
	        if ( this.options.controlBar !== false ) {
	            this.addDefaultControlBar( this.options.controlButtons );
	        }
	  
	        // Add View Indicator
	        if ( this.options.viewIndicator ) {
	            this.addViewIndicator();
	        }
	  
	        // Reverse dragging direction
	        if ( this.options.reverseDragging ) {
	            this.reverseDraggingDirection();
	        }
	  
	        // Register event if reticle is enabled, otherwise defaults to mouse
	        if ( this.options.enableReticle ) {
	            this.enableReticleControl();
	        } else {
	            this.registerMouseAndTouchEvents();
	        }
	  
	        // Output infospot position to an overlay container if specified
	        if ( this.options.output === 'overlay' ) {
	            this.addOutputElement();
	        }
	  
	        // Register dom event listeners
	        this.registerEventListeners();
	  
	        // Animate
	        this.animate.call( this );
	    }
	   
	    /**
	     * Add an object to the scene
	     * Automatically hookup with panolens-viewer-handler listener
	     * to communicate with viewer method
	     * @param {THREE.Object3D} object - The object to be added
	     * @memberOf Viewer
	     * @instance
	     */
	    add ( object ) {

	        if ( arguments.length > 1 ) {
	  
	            for ( let i = 0; i < arguments.length; i ++ ) {
	  
	                this.add( arguments[ i ] );
	  
	            }
	  
	            return this;
	  
	        }
	  
	        this.scene.add( object );
	  
	        // All object added to scene has 'panolens-viewer-handler' event to handle viewer communication
	        if ( object.addEventListener ) {
	  
	            object.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
	  
	        }
	  
	        // All object added to scene being passed with container
	        if ( object instanceof Panorama && object.dispatchEvent ) {
	  
	            object.dispatchEvent( { type: 'panolens-container', container: this.container } );
	  
	        }
	  
	        if ( object instanceof CameraPanorama ) {
	  
	            object.dispatchEvent( { type: 'panolens-scene', scene: this.scene } );
	  
	        }
	  
	        // Hookup default panorama event listeners
	        if ( object.type === 'panorama' ) {
	  
	            this.addPanoramaEventListener( object );
	  
	            if ( !this.panorama ) {
	  
	                this.setPanorama( object );
	  
	            }
	  
	        }
	  
	    }
	  
	    /**
	     * Remove an object from the scene
	     * @param  {THREE.Object3D} object - Object to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    remove ( object ) {
	  
	        if ( object.removeEventListener ) {
	  
	            object.removeEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
	  
	        }
	  
	        this.scene.remove( object );
	  
	    }
	  
	    /**
	     * Add default control bar
	     * @param {array} array - The control buttons array
	     * @memberOf Viewer
	     * @instance
	     */
	    addDefaultControlBar ( array ) {
	  
	        if ( this.widget ) {
	  
	            console.warn( 'Default control bar exists' );
	            return;
	  
	        }
	  
	        const widget = new Widget( this.container );
	        widget.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
	        widget.addControlBar();
	        array.forEach( buttonName => {
	  
	            widget.addControlButton( buttonName );
	  
	        } );
	  
	        this.widget = widget;
	  
	    }
	  
	    /**
	     * Set a panorama to be the current one
	     * @param {Panorama} pano - Panorama to be set
	     * @memberOf Viewer
	     * @instance
	     */
	    setPanorama ( pano ) {
	  
	        const leavingPanorama = this.panorama;
	  
	        if ( pano.type === 'panorama' && leavingPanorama !== pano ) {
	  
	            // Clear exisiting infospot
	            this.hideInfospot();
	  
	            const afterEnterComplete = function () {
	  
	                if ( leavingPanorama ) { leavingPanorama.onLeave(); }
	                pano.removeEventListener( 'enter-fade-start', afterEnterComplete );
	  
	            };
	  
	            pano.addEventListener( 'enter-fade-start', afterEnterComplete );
	  
	            // Assign and enter panorama
	            (this.panorama = pano).onEnter();
	        
	        }
	  
	    }
	  
	    /**
	     * Event handler to execute commands from child objects
	     * @param {object} event - The dispatched event with method as function name and data as an argument
	     * @memberOf Viewer
	     * @instance
	     */
	    eventHandler ( event ) {
	  
	        if ( event.method && this[ event.method ] ) {
	  
	            this[ event.method ]( event.data );
	  
	        }
	  
	    }
	  
	    /**
	     * Dispatch event to all descendants
	     * @param  {object} event - Event to be passed along
	     * @memberOf Viewer
	     * @instance
	     */
	    dispatchEventToChildren ( event ) {
	  
	        this.scene.traverse( function ( object ) {
	  
	            if ( object.dispatchEvent ) {
	  
	                object.dispatchEvent( event );
	  
	            }
	  
	        });
	  
	    }
	  
	    /**
	     * Set widget content
	     * @method activateWidgetItem
	     * @param  {integer} controlIndex - Control index
	     * @param  {integer} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    activateWidgetItem ( controlIndex, mode ) {
	        if (!this.widget) return;

	        const mainMenu = this.widget.mainMenu;
	        const ControlMenuItem = mainMenu.children[ 0 ];
	        const ModeMenuItem = mainMenu.children[ 1 ];
	  
	        let item;
	  
	        if ( controlIndex !== undefined ) {
	  
	            switch ( controlIndex ) {
	  
	            case 0:
	  
	                item = ControlMenuItem.subMenu.children[ 1 ];
	  
	                break;
	  
	            case 1:
	  
	                item = ControlMenuItem.subMenu.children[ 2 ];
	  
	                break;
	            
	            default:
	  
	                item = ControlMenuItem.subMenu.children[ 1 ];
	  
	                break;	
	  
	            }
	  
	            ControlMenuItem.subMenu.setActiveItem( item );
	            ControlMenuItem.setSelectionTitle( item.textContent );
	  
	        }
	  
	        if ( mode !== undefined ) {
	  
	            switch( mode ) {
	  
	            case MODES.CARDBOARD:
	  
	                item = ModeMenuItem.subMenu.children[ 2 ];
	  
	                break;
	  
	            case MODES.STEREO:
	  
	                item = ModeMenuItem.subMenu.children[ 3 ];
	            
	                break;
	  
	            default:
	  
	                item = ModeMenuItem.subMenu.children[ 1 ];
	  
	                break;
	            }
	  
	            ModeMenuItem.subMenu.setActiveItem( item );
	            ModeMenuItem.setSelectionTitle( item.textContent );
	  
	        }
	  
	    }
	  
	    /**
	     * Enable rendering effect
	     * @param  {MODES} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    enableEffect ( mode ) {
	  
	        if ( this.mode === mode ) { return; }
	        if ( mode === MODES.NORMAL ) { this.disableEffect(); return; }
	        else { this.mode = mode; }
	  
	        const fov = this.camera.fov;
	  
	        switch( mode ) {
	  
	        case MODES.CARDBOARD:
	  
	            this.effect = this.CardboardEffect;
	            this.enableReticleControl();
	  
	            break;
	  
	        case MODES.STEREO:
	  
	            this.effect = this.StereoEffect;
	            this.enableReticleControl();
	          
	            break;
	  
	        default:
	  
	            this.effect = null;
	            this.disableReticleControl();
	  
	            break;
	  
	        }
	  
	        this.activateWidgetItem( undefined, this.mode );
	  
	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );
	  
	        // Force effect stereo camera to update by refreshing fov
	        this.camera.fov = fov + 10e-3;
	        this.effect.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();
	        this.camera.fov = fov;
	  
	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );
	  
	    }
	  
	    /**
	     * Disable additional rendering effect
	     * @memberOf Viewer
	     * @instance
	     */
	    disableEffect () {
	  
	        if ( this.mode === MODES.NORMAL ) { return; }
	  
	        this.mode = MODES.NORMAL;
	        this.disableReticleControl();
	  
	        this.activateWidgetItem( undefined, this.mode );
	  
	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );
	  
	        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();
	  
	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );
	    }
	  
	    /**
	     * Enable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableReticleControl () {
	  
	        if ( this.reticle.visible ) { return; }
	  
	        this.tempEnableReticle = true;
	  
	        // Register reticle event and unregister mouse event
	        this.unregisterMouseAndTouchEvents();
	        this.reticle.show();
	        this.registerReticleEvent();
	        this.updateReticleEvent();
	  
	    }
	  
	    /**
	     * Disable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableReticleControl () {
	  
	        this.tempEnableReticle = false;
	  
	        // Register mouse event and unregister reticle event
	        if ( !this.options.enableReticle ) {
	  
	            this.reticle.hide();
	            this.unregisterReticleEvent();
	            this.registerMouseAndTouchEvents();
	  
	        } else {
	  
	            this.updateReticleEvent();
	  
	        }
	  
	    }
	  
	    /**
	     * Enable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    enableAutoRate () {
	  
	        this.options.autoRotate = true;
	        this.OrbitControls.autoRotate = true;
	    }
	  
	    /**
	     * Disable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    disableAutoRate () {
	  
	        clearTimeout( this.autoRotateRequestId );
	        this.options.autoRotate = false;
	        this.OrbitControls.autoRotate = false;
	  
	    }
	  
	    /**
	     * Toggle video play or stop
	     * @param {boolean} pause
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-toggle
	     */
	    toggleVideoPlay ( pause ) {
	  
	        if ( this.panorama instanceof VideoPanorama ) {
	  
	            /**
	             * Toggle video event
	             * @type {object}
	             * @event Viewer#video-toggle
	             */
	            this.panorama.dispatchEvent( { type: 'video-toggle', pause: pause } );
	  
	        }
	  
	    }
	  
	    /**
	     * Set currentTime in a video
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-time
	     */
	    setVideoCurrentTime ( percentage ) {
	  
	        if ( this.panorama instanceof VideoPanorama ) {
	  
	            /**
	             * Setting video time event
	             * @type {object}
	             * @event Viewer#video-time
	             * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	             */
	            this.panorama.dispatchEvent( { type: 'video-time', percentage: percentage } );
	  
	        }
	  
	    }
	  
	    /**
	     * This will be called when video updates if an widget is present
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-update
	     */
	    onVideoUpdate ( percentage ) {
	  
	        const { widget } = this;
	  
	        /**
	         * Video update event
	         * @type {object}
	         * @event Viewer#video-update
	         * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-update', percentage: percentage } ); }
	  
	    }
	  
	    /**
	     * Add update callback to be called every animation frame
	     * @param {function} callback
	     * @memberOf Viewer
	     * @instance
	     */
	    addUpdateCallback ( fn ) {
	  
	        if ( fn ) {
	  
	            this.updateCallbacks.push( fn );
	  
	        }
	    }
	  
	    /**
	     * Remove update callback
	     * @param  {function} fn - The function to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    removeUpdateCallback ( fn ) {
	  
	        const index = this.updateCallbacks.indexOf( fn );
	  
	        if ( fn && index >= 0 ) {
	  
	            this.updateCallbacks.splice( index, 1 );
	  
	        }
	  
	    }
	  
	    /**
	     * Show video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    showVideoWidget () {
	  
	        const { widget } = this;
	  
	        /**
	         * Show video widget event
	         * @type {object}
	         * @event Viewer#video-control-show
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-show' } ); }
	  
	    }
	  
	    /**
	     * Hide video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    hideVideoWidget () {
	  
	        const { widget } = this;
	  
	        /**
	         * Hide video widget
	         * @type {object}
	         * @event Viewer#video-control-hide
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-hide' } ); }
	  
	    }
	  
	    /**
	     * Update video play button
	     * @param {boolean} paused 
	     * @memberOf Viewer
	     * @instance
	     */
	    updateVideoPlayButton ( paused ) {
	  
	        const { widget } = this;
	  
	        if ( widget && widget.videoElement && widget.videoElement.controlButton ) {
	  
	            widget.videoElement.controlButton.update( paused );
	  
	        }
	  
	    }
	  
	    /**
	     * Add default panorama event listeners
	     * @param {Panorama} pano - The panorama to be added with event listener
	     * @memberOf Viewer
	     * @instance
	     */
	    addPanoramaEventListener ( pano ) {
	  
	        // Set camera control on every panorama
	        pano.addEventListener( 'enter-fade-start', this.setCameraControl.bind( this ) );
	  
	        // Show and hide widget event only when it's VideoPanorama
	        if ( pano instanceof VideoPanorama ) {
	  
	            pano.addEventListener( 'enter-fade-start', this.showVideoWidget.bind( this ) );
	            pano.addEventListener( 'leave', function () {
	  
	                if ( !(this.panorama instanceof VideoPanorama) ) {
	  
	                    this.hideVideoWidget.call( this );
	  
	                }
	          
	            }.bind( this ) );
	  
	        }
	  
	    }
	  
	    /**
	     * Set camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraControl () {
	  
	        this.OrbitControls.target.copy( this.panorama.position );
	  
	    }
	  
	    /**
	     * Get current camera control
	     * @return {object} - Current navigation control
	     * @memberOf Viewer
	     * @instance
	     * @returns {THREE.OrbitControls|THREE.DeviceOrientationControls}
	     */
	    getControl () {
	  
	        return this.control;
	  
	    }
	  
	    /**
	     * Get scene
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Scene} - Current scene which the viewer is built on
	     */
	    getScene () {
	  
	        return this.scene;
	  
	    }
	  
	    /**
	     * Get camera
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Camera} - The scene camera
	     */
	    getCamera () {
	  
	        return this.camera;
	  
	    }
	  
	    /**
	     * Get renderer
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.WebGLRenderer} - The renderer using webgl
	     */
	    getRenderer () {
	  
	        return this.renderer;
	  
	    }
	  
	    /**
	     * Get container
	     * @memberOf Viewer
	     * @instance
	     * @return {HTMLElement} - The container holds rendererd canvas
	     */
	    getContainer () {
	  
	        return this.container;
	  
	    }
	  
	    /**
	     * Get control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Control id. 'orbit' or 'device-orientation'
	     */
	    getControlId () {
	  
	        return this.control.id;
	  
	    }
	  
	    /**
	     * Get next navigation control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Next control id
	     */
	    getNextControlId () {
	  
	        return this.controls[ this.getNextControlIndex() ].id;
	  
	    }
	  
	    /**
	     * Get next navigation control index
	     * @memberOf Viewer
	     * @instance
	     * @return {number} - Next control index
	     */
	    getNextControlIndex () {
	  
	        const controls = this.controls;
	        const control = this.control;
	        const nextIndex = controls.indexOf( control ) + 1;
	  
	        return ( nextIndex >= controls.length ) ? 0 : nextIndex;
	  
	    }
	  
	    /**
	     * Set field of view of camera
	     * @param {number} fov
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraFov ( fov ) {
	  
	        this.camera.fov = fov;
	        this.camera.updateProjectionMatrix();
	  
	    }
	  
	    /**
	     * Enable control by index
	     * @param  {CONTROLS} index - Index of camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableControl ( index ) {
	  
	        index = ( index >= 0 && index < this.controls.length ) ? index : 0;
	  
	        this.control.enabled = false;
	  
	        this.control = this.controls[ index ];
	  
	        this.control.enabled = true;
	  
	        switch ( index ) {
	  
	        case CONTROLS.ORBIT:
	  
	            this.camera.position.copy( this.panorama.position );
	            this.camera.position.z += 1;
	  
	            break;
	  
	        case CONTROLS.DEVICEORIENTATION:
	  
	            this.camera.position.copy( this.panorama.position );
	  
	            break;
	        }
	  
	        this.control.update();
	  
	        this.activateWidgetItem( index, undefined );
	  
	    }
	  
	    /**
	     * Disable current control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableControl () {
	  
	        this.control.enabled = false;
	  
	    }
	  
	    /**
	     * Toggle next control
	     * @memberOf Viewer
	     * @instance
	     */
	    toggleNextControl () {
	  
	        this.enableControl( this.getNextControlIndex() );
	  
	    }
	  
	    /**
	     * Screen Space Projection
	     * @memberOf Viewer
	     * @instance
	     */
	    getScreenVector ( worldVector ) {
	  
	        const vector = worldVector.clone();
	        const widthHalf = ( this.container.clientWidth ) / 2;
	        const heightHalf = this.container.clientHeight / 2;
	  
	        vector.project( this.camera );
	  
	        vector.x = ( vector.x * widthHalf ) + widthHalf;
	        vector.y = - ( vector.y * heightHalf ) + heightHalf;
	        vector.z = 0;
	  
	        return vector;
	  
	    }
	  
	    /**
	     * Check Sprite in Viewport
	     * @memberOf Viewer
	     * @instance
	     */
	    checkSpriteInViewport ( sprite ) {
	  
	        this.camera.matrixWorldInverse.copy(  this.camera.matrixWorld  ).invert();
	        this.cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse );
	        this.cameraFrustum.setFromProjectionMatrix( this.cameraViewProjectionMatrix );
	  
	        return sprite.visible && this.cameraFrustum.intersectsSprite( sprite );
	  
	    }
	  
	    /**
	     * Reverse dragging direction
	     * @memberOf Viewer
	     * @instance
	     */
	    reverseDraggingDirection () {

	        this.OrbitControls.rotateSpeed *= -1;
	        this.OrbitControls.momentumScalingFactor *= -1;
	  
	    }
	  
	    /**
	     * Add reticle 
	     * @memberOf Viewer
	     * @instance
	     */
	    addReticle () {
	  
	        this.reticle = new Reticle( 0xffffff, true, this.options.dwellTime );
	        this.reticle.hide();
	        this.camera.add( this.reticle );
	        this.sceneReticle.add( this.camera );
	    }
	  
	    /**
	     * Tween control looking center
	     * @param {THREE.Vector3} vector - Vector to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenter ( vector, duration, easing ) {
	  
	        if ( this.control !== this.OrbitControls ) {
	  
	            return;
	  
	        }
	  
	        // Pass in arguments as array
	        if ( vector instanceof Array ) {
	  
	            duration = vector[ 1 ];
	            easing = vector[ 2 ];
	            vector = vector[ 0 ];
	  
	        }
	  
	        duration = duration !== undefined ? duration : 1000;
	        easing = easing || Tween.Easing.Exponential.Out;
	  
	        let scope, ha, va, chv, cvv, hv, vv, vptc, ov, nv;
	  
	        scope = this;
	  
	        chv = this.camera.getWorldDirection( new THREE__namespace.Vector3() );
	        cvv = chv.clone();
	  
	        vptc = this.panorama.getWorldPosition( new THREE__namespace.Vector3() ).sub( this.camera.getWorldPosition( new THREE__namespace.Vector3() ) );
	  
	        hv = vector.clone();
	        // Scale effect
	        hv.x *= -1;
	        hv.add( vptc ).normalize();
	        vv = hv.clone();
	  
	        chv.y = 0;
	        hv.y = 0;
	  
	        ha = Math.atan2( hv.z, hv.x ) - Math.atan2( chv.z, chv.x );
	        ha = ha > Math.PI ? ha - 2 * Math.PI : ha;
	        ha = ha < -Math.PI ? ha + 2 * Math.PI : ha;
	        va = Math.abs( cvv.angleTo( chv ) + ( cvv.y * vv.y <= 0 ? vv.angleTo( hv ) : -vv.angleTo( hv ) ) );
	        va *= vv.y < cvv.y ? 1 : -1;
	  
	        ov = { left: 0, up: 0 };
	        nv = { left: 0, up: 0 };
	  
	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();
	  
	        this.tweenLeftAnimation = new Tween.Tween( ov )
	            .to( { left: ha }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateLeft( ov.left - nv.left );
	                nv.left = ov.left;
	            })
	            .start();
	  
	        this.tweenUpAnimation = new Tween.Tween( ov )
	            .to( { up: va }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateUp( ov.up - nv.up );
	                nv.up = ov.up;
	            })
	            .start();
	  
	    }
	  
	    /**
	     * Tween control looking center by object
	     * @param {THREE.Object3D} object - Object to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenterByObject ( object, duration, easing ) {
	  
	        let isUnderScalePlaceHolder = false;
	  
	        object.traverseAncestors( function ( ancestor ) {
	  
	            if ( ancestor.scalePlaceHolder ) {
	  
	                isUnderScalePlaceHolder = true;
	  
	            }
	        } );
	  
	        if ( isUnderScalePlaceHolder ) {
	  
	            const invertXVector = new THREE__namespace.Vector3( -1, 1, 1 );
	  
	            this.tweenControlCenter( object.getWorldPosition( new THREE__namespace.Vector3() ).multiply( invertXVector ), duration, easing );
	  
	        } else {
	  
	            this.tweenControlCenter( object.getWorldPosition( new THREE__namespace.Vector3() ), duration, easing );
	  
	        }
	  
	    }
	  
	    /**
	     * This is called when window size is changed
	     * @fires Viewer#window-resize
	     * @param {number} [windowWidth] - Specify if custom element has changed width
	     * @param {number} [windowHeight] - Specify if custom element has changed height
	     * @memberOf Viewer
	     * @instance
	     */
	    onWindowResize ( windowWidth, windowHeight ) {
	  
	        let width, height;
	  
	        const expand = this.container.classList.contains( 'panolens-container' ) || this.container.isFullscreen;
	  
	        if ( windowWidth !== undefined && windowHeight !== undefined ) {
	  
	            width = windowWidth;
	            height = windowHeight;
	            this.container._width = windowWidth;
	            this.container._height = windowHeight;
	  
	        } else {
	  
	            const isAndroid = /(android)/i.test(window.navigator.userAgent);
	  
	            const adjustWidth = isAndroid 
	                ? Math.min(document.documentElement.clientWidth, window.innerWidth || 0) 
	                : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	  
	            const adjustHeight = isAndroid 
	                ? Math.min(document.documentElement.clientHeight, window.innerHeight || 0) 
	                : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	  
	            width = expand ? adjustWidth : this.container.clientWidth;
	            height = expand ? adjustHeight : this.container.clientHeight;
	  
	            this.container._width = width;
	            this.container._height = height;
	  
	        }
	  
	        this.camera.aspect = width / height;
	        this.camera.updateProjectionMatrix();
	  
	        this.renderer.setSize( width, height );
	  
	        // Update reticle
	        if ( this.options.enableReticle || this.tempEnableReticle ) {
	  
	            this.updateReticleEvent();
	  
	        }
	  
	        /**
	         * Window resizing event
	         * @type {object}
	         * @event Viewer#window-resize
	         * @property {number} width  - Width of the window
	         * @property {number} height - Height of the window
	         */
	        this.dispatchEvent( { type: 'window-resize', width: width, height: height });
	        this.scene.traverse( function ( object ) {
	  
	            if ( object.dispatchEvent ) {
	  
	                object.dispatchEvent( { type: 'window-resize', width: width, height: height });
	  
	            }
	  
	        } );
	  
	    }
	  
	    /**
	     * Add output element
	     * @memberOf Viewer
	     * @instance
	     */
	    addOutputElement () {
	  
	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.right = '10px';
	        element.style.top = '10px';
	        element.style.color = '#fff';
	        this.container.appendChild( element );
	        this.outputDivElement = element;
	  
	    }
	  
	    /**
	     * Output position in developer console by holding down Ctrl button
	     * @memberOf Viewer
	     * @instance
	     */
	    outputPosition () {
	  
	        const intersects = this.raycaster.intersectObject( this.panorama, true );
	  
	        if ( intersects.length > 0 ) {
	  
	            const point = intersects[ 0 ].point.clone();
	            const converter = new THREE__namespace.Vector3( -1, 1, 1 );
	            const world = this.panorama.getWorldPosition( new THREE__namespace.Vector3() );
	            point.sub( world ).multiply( converter );
	  
	            const position = {
	                x: point.x.toFixed(2),
	                y: point.y.toFixed(2),
	                z: point.z.toFixed(2),
	            };
	  
	            const message = `${position.x}, ${position.y}, ${position.z}`;
	  
	            if ( point.length() === 0 ) { return; }
	  
	            switch ( this.options.output ) {
	  
	            case 'event':
	                /**
	                 * Dispatch raycast position as event
	                 * @type {object}
	                 * @event Viewer#position-output
	                 */
	                this.dispatchEvent( { type: 'position-output', position: position } );
	                break;
	  
	            case 'console':
	                console.info( message );
	                break;
	  
	            case 'overlay':
	                this.outputDivElement.textContent = message;
	                break;
	  
	            }
	  
	        }
	  
	    }
	  
	    /**
	     * On mouse down
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseDown ( event ) {
	  
	        event.preventDefault();
	  
	        this.userMouse.x = ( event.clientX >= 0 ) ? event.clientX : event.touches[0].clientX;
	        this.userMouse.y = ( event.clientY >= 0 ) ? event.clientY : event.touches[0].clientY;
	        this.userMouse.type = 'mousedown';
	        this.onTap( event );
	    }
	  
	    /**
	     * On mouse move
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseMove ( event ) {
	  
	        event.preventDefault();
	        this.userMouse.type = 'mousemove';
	        this.onTap( event );
	  
	    }
	  
	    /**
	     * On mouse up
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseUp ( event ) {
	  
	        let onTarget = false;
	  
	        this.userMouse.type = 'mouseup';
	  
	        const type = ( this.userMouse.x >= event.clientX - this.options.clickTolerance 
	          && this.userMouse.x <= event.clientX + this.options.clickTolerance
	          && this.userMouse.y >= event.clientY - this.options.clickTolerance
	          && this.userMouse.y <= event.clientY + this.options.clickTolerance ) 
	          ||  ( event.changedTouches 
	          && this.userMouse.x >= event.changedTouches[0].clientX - this.options.clickTolerance
	          && this.userMouse.x <= event.changedTouches[0].clientX + this.options.clickTolerance 
	          && this.userMouse.y >= event.changedTouches[0].clientY - this.options.clickTolerance
	          && this.userMouse.y <= event.changedTouches[0].clientY + this.options.clickTolerance ) 
	            ? 'click' : undefined;
	  
	        // Event should happen on canvas
	        if ( event && event.target && !event.target.classList.contains( 'panolens-canvas' ) ) { return; }
	  
	        event.preventDefault();
	  
	        if ( event.changedTouches && event.changedTouches.length === 1 ) {
	  
	            onTarget = this.onTap( { clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY }, type );
	      
	        } else {
	  
	            onTarget = this.onTap( event, type );
	  
	        }
	  
	        this.userMouse.type = 'none';
	  
	        if ( onTarget ) { 
	  
	            return; 
	  
	        }
	  
	        if ( type === 'click' ) {
	  
	            const { options: { autoHideInfospot, autoHideControlBar }, panorama, toggleControlBar } = this;
	  
	            if ( autoHideInfospot && panorama ) {
	  
	                panorama.toggleInfospotVisibility();
	  
	            }
	  
	            if ( autoHideControlBar ) {
	  
	                toggleControlBar();
	  
	            }
	  
	        }
	    }
	  
	    /**
	     * On tap eveny frame
	     * @param {MouseEvent} event 
	     * @param {string} type 
	     * @memberOf Viewer
	     * @instance
	     */
	    onTap ( event, type ) {
	  
	        const { left, top } = this.container.getBoundingClientRect();
	        const { clientWidth, clientHeight } = this.container;
	  
	        this.raycasterPoint.x = ( ( event.clientX - left ) / clientWidth ) * 2 - 1;
	        this.raycasterPoint.y = - ( ( event.clientY - top ) / clientHeight ) * 2 + 1;
	  
	        this.raycaster.setFromCamera( this.raycasterPoint, this.camera );
	  
	        // Return if no panorama 
	        if ( !this.panorama ) { 
	  
	            return; 
	  
	        }
	  
	        // output infospot information
	        if ( event.type !== 'mousedown' && this.touchSupported || this.OUTPUT_INFOSPOT ) { 
	  
	            this.outputPosition(); 
	  
	        }
	  
	  
	        const intersects = this.raycaster.intersectObjects( this.panorama.children, true );
	        const intersect_entity = this.getConvertedIntersect( intersects );
	        const intersect = ( intersects.length > 0 ) ? intersects[0].object : undefined;
	  
	        if ( this.userMouse.type === 'mouseup'  ) {
	  
	            if ( intersect_entity && this.pressEntityObject === intersect_entity && this.pressEntityObject.dispatchEvent ) {
	  
	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );
	  
	            }
	  
	            this.pressEntityObject = undefined;
	  
	        }
	  
	        if ( this.userMouse.type === 'mouseup'  ) {
	  
	            if ( intersect && this.pressObject === intersect && this.pressObject.dispatchEvent ) {
	  
	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );
	  
	            }
	  
	            this.pressObject = undefined;
	  
	        }
	  
	        if ( type === 'click' ) {
	  
	            this.panorama.dispatchEvent( { type: 'click', intersects: intersects, mouseEvent: event } );
	  
	            if ( intersect_entity && intersect_entity.dispatchEvent ) {
	  
	                intersect_entity.dispatchEvent( { type: 'click-entity', mouseEvent: event } );
	  
	            }
	  
	            if ( intersect && intersect.dispatchEvent ) {
	  
	                intersect.dispatchEvent( { type: 'click', mouseEvent: event } );
	  
	            }
	  
	        } else {
	  
	            this.panorama.dispatchEvent( { type: 'hover', intersects: intersects, mouseEvent: event } );
	  
	            if ( ( this.hoverObject && intersects.length > 0 && this.hoverObject !== intersect_entity )
	          || ( this.hoverObject && intersects.length === 0 ) ){
	  
	                if ( this.hoverObject.dispatchEvent ) {
	  
	                    this.hoverObject.dispatchEvent( { type: 'hoverleave', mouseEvent: event } );
	  
	                    this.reticle.end();
	  
	                }
	  
	                this.hoverObject = undefined;
	  
	            }
	  
	            if ( intersect_entity && intersects.length > 0 ) {
	  
	                if ( this.hoverObject !== intersect_entity ) {
	  
	                    this.hoverObject = intersect_entity;
	  
	                    if ( this.hoverObject.dispatchEvent ) {
	  
	                        this.hoverObject.dispatchEvent( { type: 'hoverenter', mouseEvent: event } );
	  
	                        // Start reticle timer
	                        if ( this.options.autoReticleSelect && this.options.enableReticle || this.tempEnableReticle ) {
	                            this.reticle.start( this.onTap.bind( this, event, 'click' ) );
	                        }
	  
	                    }
	  
	                }
	  
	                if ( this.userMouse.type === 'mousedown' && this.pressEntityObject != intersect_entity ) {
	  
	                    this.pressEntityObject = intersect_entity;
	  
	                    if ( this.pressEntityObject.dispatchEvent ) {
	  
	                        this.pressEntityObject.dispatchEvent( { type: 'pressstart-entity', mouseEvent: event } );
	  
	                    }
	  
	                }
	  
	                if ( this.userMouse.type === 'mousedown' && this.pressObject != intersect ) {
	  
	                    this.pressObject = intersect;
	  
	                    if ( this.pressObject.dispatchEvent ) {
	  
	                        this.pressObject.dispatchEvent( { type: 'pressstart', mouseEvent: event } );
	  
	                    }
	  
	                }
	  
	                if ( this.userMouse.type === 'mousemove' || this.options.enableReticle ) {
	  
	                    if ( intersect && intersect.dispatchEvent ) {
	  
	                        intersect.dispatchEvent( { type: 'hover', mouseEvent: event } );
	  
	                    }
	  
	                    if ( this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {
	  
	                        this.pressEntityObject.dispatchEvent( { type: 'pressmove-entity', mouseEvent: event } );
	  
	                    }
	  
	                    if ( this.pressObject && this.pressObject.dispatchEvent ) {
	  
	                        this.pressObject.dispatchEvent( { type: 'pressmove', mouseEvent: event } );
	  
	                    }
	  
	                }
	  
	            }
	  
	            if ( !intersect_entity && this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {
	  
	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );
	  
	                this.pressEntityObject = undefined;
	  
	            }
	  
	            if ( !intersect && this.pressObject && this.pressObject.dispatchEvent ) {
	  
	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );
	  
	                this.pressObject = undefined;
	  
	            }
	  
	        }
	  
	        // Infospot handler
	        if ( intersect && intersect instanceof Infospot ) {
	  
	            this.infospot = intersect;
	        
	            if ( type === 'click' ) {
	  
	                return true;
	  
	            }
	        
	  
	        } else if ( this.infospot ) {
	  
	            this.hideInfospot();
	  
	        }
	  
	        // Auto rotate
	        if ( this.options.autoRotate && this.userMouse.type !== 'mousemove' ) {
	  
	            // Auto-rotate idle timer
	            clearTimeout( this.autoRotateRequestId );
	  
	            if ( this.control === this.OrbitControls ) {
	  
	                this.OrbitControls.autoRotate = false;
	                this.autoRotateRequestId = window.setTimeout( this.enableAutoRate.bind( this ), this.options.autoRotateActivationDuration );
	  
	            }
	  
	        }		
	  
	    }
	  
	    /**
	     * Get converted intersect
	     * @param {array} intersects 
	     * @memberOf Viewer
	     * @instance
	     */
	    getConvertedIntersect ( intersects ) {
	  
	        let intersect;
	  
	        for ( let i = 0; i < intersects.length; i++ ) {
	  
	            if ( intersects[i].distance >= 0 && intersects[i].object && !intersects[i].object.passThrough ) {
	  
	                if ( intersects[i].object.entity && intersects[i].object.entity.passThrough ) {
	                    continue;
	                } else if ( intersects[i].object.entity && !intersects[i].object.entity.passThrough ) {
	                    intersect = intersects[i].object.entity;
	                    break;
	                } else {
	                    intersect = intersects[i].object;
	                    break;
	                }
	  
	            }
	  
	        }
	  
	        return intersect;
	  
	    }
	  
	    /**
	     * Hide infospot
	     * @memberOf Viewer
	     * @instance
	     */
	    hideInfospot () {
	  
	        if ( this.infospot ) {
	  
	            this.infospot.onHoverEnd();
	  
	            this.infospot = undefined;
	  
	        }
	  
	    }
	  
	    /**
	     * Toggle control bar
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#control-bar-toggle
	     */
	    toggleControlBar () {
	  
	        const { widget } = this;
	  
	        /**
	         * Toggle control bar event
	         * @type {object}
	         * @event Viewer#control-bar-toggle
	         */
	        if ( widget ) {
	  
	            widget.dispatchEvent( { type: 'control-bar-toggle' } );
	  
	        }
	  
	    }
	  
	    /**
	     * On key down
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyDown ( event ) {
	  
	        if ( this.options.output && this.options.output !== 'none' && event.key === 'Control' ) {
	  
	            this.OUTPUT_INFOSPOT = true;
	  
	        }
	  
	    }
	  
	    /**
	     * On key up
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyUp () {
	  
	        this.OUTPUT_INFOSPOT = false;
	  
	    }
	  
	    /**
	     * Update control and callbacks
	     * @memberOf Viewer
	     * @instance
	     */
	    update () {
	  
	        Tween.update();
	  
	        this.updateCallbacks.forEach( function( callback ){ callback(); } );
	  
	        this.control.update();
	  
	        this.scene.traverse( function( child ){
	            if ( child instanceof Infospot 
	          && child.element 
	          && ( this.hoverObject === child 
	            || child.element.style.display !== 'none' 
	            || (child.element.left && child.element.left.style.display !== 'none')
	            || (child.element.right && child.element.right.style.display !== 'none') ) ) {
	                if ( this.checkSpriteInViewport( child ) ) {
	                    const { x, y } = this.getScreenVector( child.getWorldPosition( new THREE__namespace.Vector3() ) );
	                    child.translateElement( x, y );
	                } else {
	                    child.onDismiss();
	                }
	          
	            }
	        }.bind( this ) );
	  
	    }
	  
	    /**
	     * Rendering function to be called on every animation frame
	     * Render reticle last
	     * @memberOf Viewer
	     * @instance
	     */
	    render () {
	  
	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {
	  
	            this.renderer.clear();
	            this.effect.render( this.scene, this.camera );
	            this.effect.render( this.sceneReticle, this.camera );
	        
	  
	        } else {
	  
	            this.renderer.clear();
	            this.renderer.render( this.scene, this.camera );
	            this.renderer.clearDepth();
	            this.renderer.render( this.sceneReticle, this.camera );
	  
	        }
	  
	    }
	  
	    /**
	     * Animate
	     * @memberOf Viewer
	     * @instance
	     */
	    animate () {
	  
	        this.requestAnimationId = window.requestAnimationFrame( this.animate.bind( this ) );
	  
	        this.onChange();
	  
	    }
	  
	    /**
	     * On change
	     * @memberOf Viewer
	     * @instance
	     */
	    onChange () {
	  
	        this.update();
	        this.render();
	  
	    }
	  
	    /**
	     * Register mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    registerMouseAndTouchEvents () {
	  
	        const options = { passive: false };
	  
	        this.container.addEventListener( 'mousedown' , 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'mousemove' , 	this.HANDLER_MOUSE_MOVE, options );
	        this.container.addEventListener( 'mouseup'	 , 	this.HANDLER_MOUSE_UP  , options );
	        this.container.addEventListener( 'touchstart', 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'touchend'  , 	this.HANDLER_MOUSE_UP  , options );
	  
	    }
	  
	    /**
	     * Unregister mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterMouseAndTouchEvents () {
	  
	        this.container.removeEventListener( 'mousedown' ,  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'mousemove' ,  this.HANDLER_MOUSE_MOVE, false );
	        this.container.removeEventListener( 'mouseup'	,  this.HANDLER_MOUSE_UP  , false );
	        this.container.removeEventListener( 'touchstart',  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'touchend'  ,  this.HANDLER_MOUSE_UP  , false );
	  
	    }
	  
	    /**
	     * Register reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    registerReticleEvent () {
	  
	        this.addUpdateCallback( this.HANDLER_TAP );
	  
	    }
	  
	    /**
	     * Unregister reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterReticleEvent () {
	  
	        this.removeUpdateCallback( this.HANDLER_TAP );
	  
	    }
	  
	    /**
	     * Update reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    updateReticleEvent () {
	  
	        const clientX = this.container.clientWidth / 2 + this.container.offsetLeft;
	        const clientY = this.container.clientHeight / 2;
	  
	        this.removeUpdateCallback( this.HANDLER_TAP );
	        this.HANDLER_TAP = this.onTap.bind( this, { clientX, clientY } );
	        this.addUpdateCallback( this.HANDLER_TAP );
	    }
	  
	    /**
	     * Register container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    registerEventListeners () {
	  
	        // Resize Event
	        window.addEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );
	  
	        // Keyboard Event
	        window.addEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.addEventListener( 'keyup'  , this.HANDLER_KEY_UP	 , true );
	  
	    }
	    /**
	     * Unregister container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterEventListeners () {
	  
	        // Resize Event
	        window.removeEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );
	  
	        // Keyboard Event
	        window.removeEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.removeEventListener( 'keyup'  , this.HANDLER_KEY_UP  , true );
	  
	    }
	  
	    /**
	     * Dispose all scene objects and clear cache
	     * @memberOf Viewer
	     * @instance
	     */
	    dispose () {
	  
	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();
	  
	        // Unregister dom event listeners
	        this.unregisterEventListeners();
	  
	        // recursive disposal on 3d objects
	        function recursiveDispose ( object ) {
	  
	            for ( let i = object.children.length - 1; i >= 0; i-- ) {
	  
	                recursiveDispose( object.children[i] );
	                object.remove( object.children[i] );
	  
	            }
	  
	            if ( object instanceof Panorama || object instanceof Infospot ) {
	  
	                object.dispose();
	                object = null;
	  
	            } else if ( object.dispatchEvent ){
	  
	                object.dispatchEvent( 'dispose' );
	  
	            }
	  
	        }
	  
	        recursiveDispose( this.scene );
	  
	        // dispose widget
	        if ( this.widget ) {
	  
	            this.widget.dispose();
	            this.widget = null;
	  
	        }
	  
	        // clear cache
	        if ( THREE__namespace.Cache && THREE__namespace.Cache.enabled ) {
	  
	            THREE__namespace.Cache.clear();
	  
	        }
	  
	    }
	  
	    /**
	     * Destroy viewer by disposing and stopping requestAnimationFrame
	     * @memberOf Viewer
	     * @instance
	     */
	    destroy () {
	        this.dispose();
	        this.render();
	        window.cancelAnimationFrame( this.requestAnimationId );		
	    }
	  
	    /**
	     * On panorama dispose
	     * @memberOf Viewer
	     * @instance
	     */
	    onPanoramaDispose ( panorama ) {
	        if ( panorama instanceof VideoPanorama ) {
	            this.hideVideoWidget();
	        }
	  
	        if ( panorama === this.panorama ) {
	            this.panorama = null;
	        }
	    }
	  
	    /**
	     * Load ajax call
	     * @param {string} url - URL to be requested
	     * @param {function} [callback] - Callback after request completes
	     * @memberOf Viewer
	     * @instance
	     */
	    loadAsyncRequest( url, callback = () => {} ) {
	        const request = new window.XMLHttpRequest();
	        request.onloadend = function ( event ) {
	            callback( event );
	        };
	        request.open( 'GET', url, true );
	        request.send( null );
	  
	    }
	  
	    /**
	     * View indicator in upper left
	     * @memberOf Viewer
	     * @instance
	     */
	    addViewIndicator () {
	  
	        const scope = this;
	  
	        function loadViewIndicator ( asyncEvent ) {
	            if ( asyncEvent.loaded === 0 ) return;
	  
	            const viewIndicatorDiv = asyncEvent.target.responseXML.documentElement;
	            viewIndicatorDiv.style.width = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.height = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.position = 'absolute';
	            viewIndicatorDiv.style.top = '10px';
	            viewIndicatorDiv.style.left = '10px';
	            viewIndicatorDiv.style.opacity = '0.5';
	            viewIndicatorDiv.style.cursor = 'pointer';
	            viewIndicatorDiv.id = 'panolens-view-indicator-container';
	  
	            scope.container.appendChild( viewIndicatorDiv );
	  
	            const indicator = viewIndicatorDiv.querySelector( '#indicator' );
	            const setIndicatorD = function () {
	                scope.radius = scope.viewIndicatorSize * 0.225;
	                scope.currentPanoAngle = scope.camera.rotation.y - THREE__namespace.Math.degToRad( 90 );
	                scope.fovAngle = THREE__namespace.Math.degToRad( scope.camera.fov ) ;
	                scope.leftAngle = -scope.currentPanoAngle - scope.fovAngle / 2;
	                scope.rightAngle = -scope.currentPanoAngle + scope.fovAngle / 2;
	                scope.leftX = scope.radius * Math.cos( scope.leftAngle );
	                scope.leftY = scope.radius * Math.sin( scope.leftAngle );
	                scope.rightX = scope.radius * Math.cos( scope.rightAngle );
	                scope.rightY = scope.radius * Math.sin( scope.rightAngle );
	                scope.indicatorD = 'M ' + scope.leftX + ' ' + scope.leftY + ' A ' + scope.radius + ' ' + scope.radius + ' 0 0 1 ' + scope.rightX + ' ' + scope.rightY;
	  
	                if ( scope.leftX && scope.leftY && scope.rightX && scope.rightY && scope.radius ) {
	                    indicator.setAttribute( 'd', scope.indicatorD );
	                }
	  
	            };
	  
	            scope.addUpdateCallback( setIndicatorD );
	  
	            const indicatorOnMouseEnter = function () {
	  
	                this.style.opacity = '1';
	  
	            };
	  
	            const indicatorOnMouseLeave = function () {
	  
	                this.style.opacity = '0.5';
	  
	            };
	  
	            viewIndicatorDiv.addEventListener( 'mouseenter', indicatorOnMouseEnter );
	            viewIndicatorDiv.addEventListener( 'mouseleave', indicatorOnMouseLeave );
	        }
	  
	        this.loadAsyncRequest( DataImage.ViewIndicator, loadViewIndicator );
	  
	    }

	    /**
	     * Append custom control item to existing control bar
	     * @param {object} [option={}] - Style object to overwirte default element style. It takes 'style', 'onTap' and 'group' properties.
	     * @memberOf Viewer
	     * @instance
	     */
	    appendControlItem ( option ) {
	        const item = this.widget.createCustomItem( option );		
	        if ( option.group === 'video' ) {
	            this.widget.videoElement.appendChild( item );
	        } else {
	            this.widget.barElement.appendChild( item );
	        }
	  
	        return item;

	    }
	  
	    /**
	     * Clear all cached files
	     * @memberOf Viewer
	     * @instance
	     */
	    clearAllCache() {
	        THREE__namespace.Cache.clear();
	    }

	}

	if ( THREE__namespace.REVISION != THREE_REVISION ) {

	    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

	}

	/**
	 * Panolens.js
	 * @author pchen66
	 * @namespace PANOLENS
	 */
	window.TWEEN = Tween;

	exports.BasicPanorama = BasicPanorama;
	exports.CONTROLS = CONTROLS;
	exports.CONTROL_BUTTONS = CONTROL_BUTTONS;
	exports.CameraPanorama = CameraPanorama;
	exports.CubePanorama = CubePanorama;
	exports.CubeTextureLoader = CubeTextureLoader;
	exports.DataImage = DataImage;
	exports.EmptyPanorama = EmptyPanorama;
	exports.GoogleStreetviewPanorama = GoogleStreetviewPanorama;
	exports.ImageLittlePlanet = ImageLittlePlanet;
	exports.ImageLoader = ImageLoader;
	exports.ImagePanorama = ImagePanorama;
	exports.Infospot = Infospot;
	exports.LittlePlanet = LittlePlanet;
	exports.MODES = MODES;
	exports.Media = Media;
	exports.OUTPUTS = OUTPUTS;
	exports.Panorama = Panorama;
	exports.REVISION = REVISION;
	exports.Reticle = Reticle;
	exports.THREE_REVISION = THREE_REVISION;
	exports.THREE_VERSION = THREE_VERSION;
	exports.TextureLoader = TextureLoader;
	exports.VERSION = VERSION;
	exports.VideoPanorama = VideoPanorama;
	exports.Viewer = Viewer;
	exports.Widget = Widget;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25zdGFudHMuanMiLCIuLi9zcmMvRGF0YUltYWdlLmpzIiwiLi4vc3JjL2xvYWRlcnMvSW1hZ2VMb2FkZXIuanMiLCIuLi9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXIuanMiLCIuLi9zcmMvbWVkaWEvTWVkaWEuanMiLCIuLi9zcmMvaW50ZXJmYWNlL1JldGljbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHR3ZWVuanMvdHdlZW4uanMvc3JjL1R3ZWVuLmpzIiwiLi4vc3JjL2luZm9zcG90L0luZm9zcG90LmpzIiwiLi4vc3JjL3dpZGdldC9XaWRnZXQuanMiLCIuLi9zcmMvcGFub3JhbWEvUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvSW1hZ2VQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9FbXB0eVBhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEuanMiLCIuLi9zcmMvbG9hZGVycy9Hb29nbGVTdHJlZXR2aWV3TG9hZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0dvb2dsZVN0cmVldHZpZXdQYW5vcmFtYS5qcyIsIi4uL3NyYy9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXIuanMiLCIuLi9zcmMvcGFub3JhbWEvTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9lZmZlY3RzL0NhcmRib2FyZEVmZmVjdC5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9TdGVyZW9FZmZlY3QuanMiLCIuLi9zcmMvdmlld2VyL1ZpZXdlci5qcyIsIi4uL3NyYy9DaGVjay5qcyIsIi4uL3NyYy9QYW5vbGVucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uLCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFJFVklTSU9OXG4gKiBAbW9kdWxlIFJFVklTSU9OXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5SRVZJU0lPTlxuICogQHR5cGUge3N0cmluZ30gcmV2aXNpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFJFVklTSU9OID0gdmVyc2lvbi5zcGxpdCggJy4nIClbIDEgXTtcblxuLyoqXG4gKiBWRVJTSU9OXG4gKiBAbW9kdWxlIFZFUlNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZFUlNJT05cbiAqIEB0eXBlIHtzdHJpbmd9IHZlcnNpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSB2ZXJzaW9uO1xuXG4vKipcbiAqIFRIUkVFSlMgUkVWSVNJT05cbiAqIEBtb2R1bGUgVEhSRUVfUkVWSVNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlRIUkVFX1JFVklTSU9OXG4gKiBAdHlwZSB7c3RyaW5nfSB0aHJlZWpzIHJldmlzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUSFJFRV9SRVZJU0lPTiA9IGRlcGVuZGVuY2llcy50aHJlZS5zcGxpdCggJy4nIClbIDEgXTtcblxuLyoqXG4gKiBUSFJFRUpTIFZFUlNJT05cbiAqIEBtb2R1bGUgVEhSRUVfVkVSU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuVEhSRUVfVkVSU0lPTlxuICogQHR5cGUge3N0cmluZ30gdGhyZWVqcyB2ZXJzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUSFJFRV9WRVJTSU9OID0gZGVwZW5kZW5jaWVzLnRocmVlLnJlcGxhY2UoIC9bXjAtOS5dL2csICcnICk7XG5cbi8qKlxuICogQ09OVFJPTFNcbiAqIEBtb2R1bGUgQ09OVFJPTFNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkNPTlRST0xTLk9SQklUXG4gKiBAcHJvcGVydHkge251bWJlcn0gT1JCSVQgMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFVklDRU9SSUVOVEFUSU9OIDFcbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRST0xTID0geyBPUkJJVDogMCwgREVWSUNFT1JJRU5UQVRJT046IDEgfTtcblxuLyoqXG4gKiBNT0RFU1xuICogQG1vZHVsZSBNT0RFU1xuICogQGV4YW1wbGUgUEFOT0xFTlMuTU9ERVMuVU5LTk9XTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFVOS05PV04gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IE5PUk1BTCAxXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ0FSREJPQVJEIDJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTVEVSRU8gM1xuICovXG5leHBvcnQgY29uc3QgTU9ERVMgPSB7IFVOS05PV046IDAsIE5PUk1BTDogMSwgQ0FSREJPQVJEOiAyLCBTVEVSRU86IDMgfTtcblxuLyoqXG4gKiBDT05UUk9MX0JVVFRPTlNcbiAqIEBtb2R1bGUgQ09OVFJPTF9CVVRUT05TXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5WSUVXRVIuQ09OVFJPTF9CVVRUT05TXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlVMTFNDUkVFTlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNFVFRJTkdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSURFT1xuICovXG5leHBvcnQgY29uc3QgQ09OVFJPTF9CVVRUT05TID0geyBGVUxMU0NSRUVOOiAnZnVsbHNjcmVlbicsIFNFVFRJTkc6ICdzZXR0aW5nJywgVklERU86ICd2aWRlbycgfTtcblxuLyoqXG4gKiBPVVRQVVRTXG4gKiBAbW9kdWxlIE9VVFBVVFNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZJRVdFUi5PVVRQVVRTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTk9ORVxuICogQHByb3BlcnR5IHtzdHJpbmd9IENPTlNPTEVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPVkVSTEFZXG4gKi9cbmV4cG9ydCBjb25zdCBPVVRQVVRTID0geyBOT05FOiAnbm9uZScsIENPTlNPTEU6ICdjb25zb2xlJywgT1ZFUkxBWTogJ292ZXJsYXknIH07XG5cbiIsIi8qKlxuICogRGF0YSBVUkkgSW1hZ2VzXG4gKiBAbW9kdWxlIERhdGFJbWFnZVxuICogQGV4YW1wbGUgUEFOT0xFTlMuRGF0YUltYWdlLkluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJbmZvIEluZm9ybWF0aW9uIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBcnJvdyBBcnJvdyBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRnVsbHNjcmVlbkVudGVyIEZ1bGxzY3JlZW4gRW50ZXIgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZ1bGxzY3JlZW5MZWF2ZSBGdWxsc2NyZWVuIExlYXZlIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BsYXkgVmlkZW8gUGxheSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlkZW9QYXVzZSBWaWRlbyBQYXVzZSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gV2hpdGVUaWxlIFdoaXRlIFRpbGUgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNldHRpbmcgU2V0dGluZ3MgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IENoZXZyb25SaWdodCBDaGV2cm9uIFJpZ2h0IEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDaGVjayBDaGVjayBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlld0luZGljYXRvciBWaWV3IEluZGljYXRvciBJY29uXG4gKi9cbmNvbnN0IERhdGFJbWFnZSA9IHtcbiAgICBJbmZvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEQmtsRVFWUjQydTJiUDA4VVFSaUhuekZhU1lDSS94b2tzZEJJcUd3SWlZV1JVQklTRXhwQ1EwZWozOEZXT21sSUtLaG9NUEViYUN4c3JySGlZclFnT1NsUUVhSUNyVCtMSFNQWnpOenQzczNjM0huN2xIdkx6dnY4MkwyZG0zMFhLaW9xS2dZWTA2MkJKRjBIcG9BN3dBUndCYmhzUHo0RGpvRUc4QW5ZTmNaOFN4MU9wOElYSk0xS1dwZFVWM25xOW05bkpWMUk3Vk5HZkV6U00wbU5OcVI5Tk93eHgxTDdOUk1mbGJRbTZTU2dlSjRUTzhab2F0KzgvTEtrZzRqaWVRNGtMYWYyUnRLd3BKMHVpdWZaa1RTY1NuNVMwbDVDK2Ivc1NacnN0dnlNcEtQVTV1YzRralRUamt2cGVZQ2thZUExLys3aHZjSVpNR3VNcVVVTFFOSVU4QWE0bHRyV3d5SHd5Qml6R3p3QVNTUEFlK0IyYXNzVzdBSDNqVEUvaSt4Y1pvYTEyUWZ5MkJvM2krNWNLQUJsOTl6RjFHWWxXRlRCZVVMTFMwRFpyT3NEY0ROZ2dUWGdjMjdiTFdBNjRCaGZnSHZHbUI4ZEhVWFoxRE0wUzQ1eGxpS01zOWJLcitrbElPa3FzQnJ3djlKdFZxMURld0VBVDRDaDFCWWRNR1FkeWdlZzdEZjRTbXFEQUt5b3lYcENzelBnSVRDZXV2b0FqRnVYMGdFOGpsalVkdjdiQ3RpT09KN1hwZFVaOEwvZ2RYSE9BNVF0WUg1TlhYVmdicmdXV24xbndGVHFhaVBnZFBJRmNEZDF0UkZ3T2wzMDdEd1J1WmdYd0x2Y3RnZkEwNGhqT3AxOEFjUmVaNnNaWTE2ZTN5RHBVdVF4blU2K1MyQWtjakVwY0RyMXp4T1hTUGdDS0xTYTBtYzRuWHdCL0VwZGJRU2NUcjRBR3FtcmpZRFR5UmZBeDlUVlJzRHA1QXVnOExKeUgrRjBjZ1pnNTh6MTFCVUhwTzVydUdoMkczeWJ1dXFBZUYyYUJmQXFkZFVCOGJxME9nUDJVMWNlZ0gzYU9RT01NYitCcmRUVkIyREx1cFFMd0xJT25LWTI2SUJUNitDbGFRREdtTy9BUm1xTER0aXdEbjdIVmtjWStFZGpOb1RsQ0krdFloTzJpVXBwbTZIS3NsUFVxMnFRS0hwVWU4QUZzamFVWHVVUVdDZ3FYeW9BRzhJdU1FL1drTlJybkFIelpmcURTZ2RnUTZnQmMyVGQzYjNDTVRCWHRrT3NJelRJalpMblFoamNWdGxjRUlQWkxKMExvVnZ0OHMvVmErM3l1U0FHODRVSlJ4Qjk4Y3BNOWRKVVJVVkZ4U0R6QnhLZGU0TGszL2gyQUFBQUFFbEZUa1N1UW1DQycsIFxuICAgIEFycm93OiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEUGtsRVFWUjQydTJiTVVzY1FSaUczMC9TUmFKRUkxWktVaVJFck5JRUxSVWJRWVNBblg4aHBWVWdrRFlwMHdnV1ZqWVcrUWNKYVF6WXBMb2pKSVhodERERUtCcGo2NXRpNThpeG1kbWIyWnZaNytUMkFVSHVkbWZtZVhmMmJuYjNPNkNtcHFabWdKR3FPaUk1QVdBV3dFTUEwd0R1QXJodDNyNENjQWFnQmVBYmdJYUkvTlFPcDFmaElaS0xKTitTYkRLY3B0bDNrZVNRdGsrSStCakpWeVJiSmFSZHRFeWJZOXArUmVLakpOK1F2SXdvbnVmUzlER3E3WnVYWHlkNW5GQTh6ekhKZFcxdmtMeERjcmRDOFR5N0pPOW95YytRUEZDVWIzTkFjcVpxK1RtU3A5cm1IWnlTbkN2akVyd09JUGtVd0h2OCt3N3ZGNjRBTElySWZySUFTTTRDK0FEZ25yYXRneE1BQ3lMU2lCNEF5UkVBbndFODBMYnN3Z0dBSnlKeTRiTnh5QXByNndiSXc0eHh5M2RqcndDWWZlZXVhWnNGc0ViUGRVTFhVNERacXVzTGdNa0VBMjFQMDVFRWJmOEE4RmhFem9zMjhwa0JMeExLTDVzL3IvTTFrRWt6OXZLUUhHZWF0ZjA1eWZtT2Z1Yk5hN0c1SkRsZTVOaHRCandITUJ6NXlGd0FXQmFSVCswWHpQOHBac0t3Y1FpSDJmWDhZY29qYitrenhVdzRaSm43Q1NRWHFwUlBITUtDcTcraVpKNzFNdmR5L0RmdFhTUTZIY0pkU0RhcVBQS1cvbVBPQk8rbGNidnpDVTM1UkNGTTJQcHduUUt6WlFmZGdmZTBkeEg1ZExBNnVRSjRwQzJmSUFTcmt5dUE2WDZRanh5QzFja1ZRTm43Yk5IbEk0WmdkWElGVU9iaUpKbDhwQkNzVGpHZnVJd0EyQ3Y0Rk43eGJZamtqcXNSQUh1SWVQWG9DaURGMVprMlZpZFhBTCsxUjVzQXE1TXJnSmIyYUJOZ2RYSUY4RlY3dEFtd09ya0NDRnM3M3d5c1R0WUFUSEZDVTN2RUVXbTZDaTZLdmdZL2FvODZJazZYb2dEZWFZODZJazZYYmpQZ1NIdmtFVGhDd1F5NDVYcERSSzVKYmdONEdXa2dVeVI5SDY1TVJReGdXMFN1blo1RmV6SzdwZndkOGU4TVY4VWZBUGRGNUpkcmc4SnJBYlBqcHJaRkQyd1d5UVA2ajhaU0V1ZlJtR2xnUTl1bUJCdmQ1SU9nYmpGVUtMdStYbldCaEcrcnBzRlZaR1VvL2NvSmdGVmYrYUFBVEFnTkFDdklDcEw2alNzQUt5SDFRY0VCbUJEMkFTd2hxKzd1Rjg0QUxJVldpUFVFQjdsUXNpT0V3UzJWelFVeG1NWFN1UkNxS3BkL3pYNHJsODhGTVpnL21MQUVjU04rTWxQL2FLcW1wcVpta1BrTDBoU2p3T3BOS3h3QUFBQUFTVVZPUks1Q1lJST0nLFxuICAgIEZ1bGxzY3JlZW5FbnRlcjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNJalJrWkdSa1pHSWlCb1pXbG5hSFE5SWpJMElpQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSGRwWkhSb1BTSXlOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLSUNBZ0lEeHdZWFJvSUdROUlrMHdJREJvTWpSMk1qUklNSG9pSUdacGJHdzlJbTV2Ym1VaUx6NEtJQ0FnSUR4d1lYUm9JR1E5SWswM0lERTBTRFYyTldnMWRpMHlTRGQyTFRONmJTMHlMVFJvTWxZM2FETldOVWcxZGpWNmJURXlJRGRvTFROMk1tZzFkaTAxYUMweWRqTjZUVEUwSURWMk1tZ3pkak5vTWxZMWFDMDFlaUl2UGdvOEwzTjJaejQ9JyxcbiAgICBGdWxsc2NyZWVuTGVhdmU6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTBTREU1VmpFMlNERTJWakU1U0RFMFZqRTBUVFVzTVRSSU1UQldNVGxJT0ZZeE5rZzFWakUwVFRnc05VZ3hNRll4TUVnMVZqaElPRlkxVFRFNUxEaFdNVEJJTVRSV05VZ3hObFk0U0RFNVdpSWdMejQ4TDNOMlp6ND0nLFxuICAgIFZpZGVvUGxheTogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJZ1pEMGlUVGdzTlM0eE5GWXhPUzR4TkV3eE9Td3hNaTR4TkV3NExEVXVNVFJhSWlBdlBqd3ZjM1puUGc9PScsXG4gICAgVmlkZW9QYXVzZTogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJZ1pEMGlUVEUwTERFNUxqRTBTREU0VmpVdU1UUklNVFJOTml3eE9TNHhORWd4TUZZMUxqRTBTRFpXTVRrdU1UUmFJaUF2UGp3dmMzWm5QZz09JyxcbiAgICBXaGl0ZVRpbGU6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFCQU1BQUFBR1ZzbkpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUIxV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlXRTFRSUVOdmNtVWdOUzQwTGpBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJK0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S0F0aUFCUUFBQUNSUVRGUkZBQUFBQUFBQUJnWUdCd2NISGg0ZUt5c3J4OGZIeTh2THpNek03T3pzQUFBQUJnWUcrcTdTWmdBQUFBcDBVazVUQVA3Ky92NysvdjcrL2lKeC9hOEFBQU93U1VSQlZIamE3ZDBoYnNOQUVBVlFvNlNGSTZYRWNBTERjZ05MdlVCdkVCUVZocGtXVllXbGhTc1ZGUzd0NVFJc2hSdDY5NWxFQVNaUCs4YzdhMWt6REwxZnorL3p5dXZ6cDZGYnZvZGRyTDZ1RGQxeUdaNWVYbGRlYjE4TjNmSXg3QSs1OHBybWhtNjVEZnZEY2QwOTUybHU2SmFiRmJEL3pWcHJaajFsemN5cytmajl6OHhUWnRiVDhydjh5V2x1NkJZQUlnQUFBQUFBQUFBQUFBQkFNNlFYRUFFQUFBQUFBQUFBZ0oyZ25hQUlpSUEzUTJxQUdnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRSnNBRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVmxmQWNaM2FlWm9idXNVS01HQmhWNktVRWxIR0tCRVJKUjYvZnhFeFJrUVpsOS9sVDhTMW9Wc3VocXlZTW1QS2pDa3p2ZmNDcHN4b2hyd1kwUTA2RUFFQUFBQUFBQUFBQUFDZ0dkSUxpQUFBQUFBQUFBQUF3RTdRVGxBRVJNQ2JJVFZBRFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdLbXdRMUVSQUFBQUFBQ1BRWTlCRVJBQkVSQUJFUkFCRVJBQkVSQUJBQUFBQUFBQUFJQ2RvSjJnQ0lpQVQyYlVBRFZBRFJBQkVRQUFRQkZVQkVWQUJFUmdFeXZBbEptK1Y0QXBNNmJNbURKanlvd3BNNmJNZE4wTG1ES2pHZkppUkRmb1FBUUFBQUFBQUFBQUFBQ0Faa2d2SUFJQUFBQUFBQUFBQUR0Qk8wRVJFQUZ2aHRRQU5RQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS2ZDRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVGF3QVUyYjZYZ0dtekpneVk4cU1LVE9tekpneTAzVXZZTXFNWnNpTEVkMmdBeEVBQUFBQUFBQUFBQUFBbWlHOWdBZ0FBQUFBQUFBQUFPd0U3UVJGUUFTOEdWSUQxQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUp3S094UVZBUUFBQUFEd0dQUVlGQUVSRUFFUkVBRVJFQUVSRUFFUkFBQUFBQUFBQUFEWUNkb0ppb0FJK0dSR0RWQUQxQUFSRUFFQUFCUkJSVkFFUkVBRU5yRUNUSm5wZXdXWU1tUEtqQ2t6cHN5WU1tUEtUTmU5Z0Nrem1pRXZSblNERGtRQUFBQUFBQUFBQUFBQWFJYjBBaUlBQUFBQUFBQUFBTEFUdEJNVUFSSHdaa2dOVUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQXE3RkJVQkFBQUFBREFZOUJqVUFSRVFBUkVRQVJFUUFSRVFBUkVBQUFBQUFBQUFBQmdKMmduS0FJaTRKTVpOVUFOVUFORVFBUUFBRkFFRlVFUkVBRVIyTVFLTUdXbTd4Vmd5b3dwTTUwUFdlbjl1Z05HWHoxWGFvY0FGZ0FBQUFCSlJVNUVya0pnZ2c9PScsXG4gICAgU2V0dGluZzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUJBQUFBQVFBRHE4L2hnQUFBRG4wbEVRVlI0MnUyYnpVc1ZVUmpHbnlPNkNQekFNblRqcHBBbzNMVHdIMUNxVGZheGJlT2lSUzM3QTB3WHRST0ZWaTFhUkJzM0xXb2hTSUdiUUFRWFZpQkdSaEcwVUlSS1VDcEs3cS9Gbk9CMnVjNmNPWE5tUm5HZTNlVytIOC83ekxsbjN2TnhwUW9WS2xRNHdqQkZKQUZPU1JxWDFPN29zaXZwdmpIbVUxbkNoQlpnbHZTWUxZSmJTMEVhbkN2SUp6V0srZ25zeUgzNC84T3VNYVlqYjI2NWp3Q2d6Nk40U1dxM3ZvZGJBRW1uUy9LdEJEZ29BZ3lVNUJ0ZUFPQWtNQVBjQnJvYzdQc2tEV2ZnTit3eUR3QmRsdE1NY0RJM3RZQm5kZS9wSGVBUk1OVEVyZ2Q0QVB6d2VQODM0b2VOMWRNa3o1RGxzRk5uL3l5djRrZGlTSzRBdDRBTzRDcXdHYUR3Um16YTJCMDIxMHFNN1loclhVNTlBTkFxNmJXa3dRVFRuNUtPNWZJRTB1VllsWFRlR0xPWEZNeDFEcmpsVUx3S0tONDF4NkRsbklqRUVRQ2NrUFJlMG9rQ2lndUpyNUxPR0dPK3hobTVqSUNKUTFpOExPZUpKS1BZRVFBTUt2cnR0NVpkalNmMkZNMEZxL3NaSkkyQTZVTmN2Q3ozNlRpRGZVY0FjRTFTUHUvVTZNbThrL1RGZnU2WGRGYjVpWDNkR1BNOGxRZndOb2QzK1Rvd0JuUTN5ZGR0djF2UEllK2IxSklCaXdFSjFJQUoyMDhrNVcyMXRyV0ErVi81Q0hBY21BdFUvQTJQL0RjQ2lUQUhIRTh0Z0NWaGdMdkFYZ1lDazE3Sm8veVRHZkx1V2U3WmQ3MkFDOENXQjRuM09BejdtTHl0TmtaYWJBRVhNaGZlUUtZZldFcEpaQ3hBM3JHVU9aZUEvcURGMTVGcEF6NDdFdmxOazluZUkyZTNqZVdDejBCYm12aXBOa1NNTVg4a3VTWllNOFo4enlxQWpiSG1hTjVtT2VZamdJWHJVOTNNV3J4SHJOUWpycWlEa1FNTEh3RytPZHFGM05OM2plWEt6VThBb0YxU3pkSDhYS2hKVU83SFpEWExNYndBd0lDa0pVVUxGeGUwU2JxU1ZRQWJ3M1hpN1plMFpMbUdBekFLYkhzMEpHVTFRdHZBYUlqQ1c0QjdaT3ZKeTJxRmE1YTczMFJQdEJpYXowQ2dua2laaTZGNWZCWkRWTXZobzdFaGN1UzN4SkoyaFY5SXVwZ1RxYUx3MGhoemFiOHZxMjN4T0cvcitMRHNLakxnWVZ6eFVuVTBsdHdLMndEZXpVeUptRXdxWGdwL1BMNHJ2eHRoYWVDU0krenh1QTEwSjhaa1dkSk5TYjJTTGt2YXlLSHdEUnU3MStaYWpyRzk0MUo4YWdBTERRM0dVL2EvSXZNa1lDUHptQ2J0TE5FVm1hY050Z3M1aVA5ZllWTkVWMVE2SGV6N3lOWlNMK0oyU2FyVGNwcWl5VjJpVWtHMEl2UEZ2Yno1RmJFbitLRWszd01qd01lU2ZDc0JYRkJkbHk5Q0FQazl5ZHlmZnBFQ3VCNXRaZlZKamFLV3VlT1NmaW5sbjZZSzRsYWhRb1VLUnhkL0FjUlBHVGNRQ0FVUUFBQUFBRWxGVGtTdVFtQ0MnLFxuICAgIENoZXZyb25SaWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVGd1TlRrc01UWXVOVGhNTVRNdU1UY3NNVEpNT0M0MU9TdzNMalF4VERFd0xEWk1NVFlzTVRKTU1UQXNNVGhNT0M0MU9Td3hOaTQxT0ZvaUlDOCtQQzl6ZG1jKycsXG4gICAgQ2hlY2s6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRJeExEZE1PU3d4T1V3ekxqVXNNVE11TlV3MExqa3hMREV5TGpBNVREa3NNVFl1TVRkTU1Ua3VOVGtzTlM0MU9Vd3lNU3czV2lJZ0x6NDhMM04yWno0PScsXG4gICAgVmlld0luZGljYXRvcjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BDRkVUME5VV1ZCRklITjJaeUJRVlVKTVNVTWdJaTB2TDFjelF5OHZSRlJFSUZOV1J5QXhMakV2TDBWT0lpQWlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZSM0poY0docFkzTXZVMVpITHpFdU1TOUVWRVF2YzNabk1URXVaSFJrSWo0S1BITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQnBaRDBpZG1sbGR5MXBibVJwWTJGMGIzSWlJR2hsYVdkb2REMGlNekFpSUhkcFpIUm9QU0l6TUNJZ2RtbGxkMEp2ZUQwaUxUSXVOU0F0TVNBek1DQXpNQ0krQ2drOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQaTV6ZERCN2MzUnliMnRsTFhkcFpIUm9Pakk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TVRBN1ptbHNiRHB1YjI1bE8zMHVjM1F4ZTNOMGNtOXJaUzEzYVdSMGFEbzJPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NUd3ZjM1I1YkdVK0NnazhaejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5JREV5TGpVZ01DQkJJREV5TGpVZ01USXVOU0F3SURBZ01DQXRNVEl1TlNBd0lFRWdNVEl1TlNBeE1pNDFJREFnTUNBd0lERXlMalVnTUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01Td3dMREFzTVN3eE15d3hOUzQxS1NJK1BDOXdZWFJvUGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERJaUlHUTlJazBnTVRNZ01DQk1JREV3SURJZ1RDQXhOaUF5SUZvaVBqd3ZjR0YwYUQ0S0NRazhjR0YwYUNCamJHRnpjejBpYzNReUlpQmtQU0pOSURJZ01DQkJJRElnTWlBd0lEQWdNQ0F0TWlBd0lFRWdNaUF5SURBZ01DQXdJRElnTUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01Td3dMREFzTVN3eE15d3hOUzQxS1NJK1BDOXdZWFJvUGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERFaUlHbGtQU0pwYm1ScFkyRjBiM0lpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFc01Dd3dMREVzTVRNc01UVXVOU2tpUGp3dmNHRjBhRDRLQ1R3dlp6NEtQQzl6ZG1jKydcbn07XG5cbmV4cG9ydCB7IERhdGFJbWFnZSB9OyIsImltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZS5qcyc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQG1vZHVsZSBJbWFnZUxvYWRlclxuICogQGRlc2NyaXB0aW9uIEltYWdlIGxvYWRlciB3aXRoIHByb2dyZXNzIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzfVxuICovXG5jb25zdCBJbWFnZUxvYWRlciA9IHtcblxuICAgIC8qKlxuICAgICAqIExvYWQgaW1hZ2VcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5JbWFnZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxuICAgICAqIEBtZXRob2QgbG9hZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB1cmwgICAgICAgIC0gQW4gaW1hZ2UgdXJsXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHVybCwgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MgPSAoKSA9PiB7fSwgb25FcnJvciA9ICgpID0+IHt9ICkge1xuXG4gICAgICAgIC8vIEVuYWJsZSBjYWNoZVxuICAgICAgICBUSFJFRS5DYWNoZS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICBsZXQgY2FjaGVkLCByZXF1ZXN0LCBhcnJheUJ1ZmZlclZpZXcsIGJsb2IsIHVybENyZWF0b3IsIGltYWdlLCByZWZlcmVuY2U7XG5cbiAgICAgICAgLy8gUmVmZXJlbmNlIGtleVxuICAgICAgICBmb3IgKGxldCBpY29uTmFtZSBpbiBEYXRhSW1hZ2UpIHtcblxuICAgICAgICAgICAgaWYgKERhdGFJbWFnZS5oYXNPd25Qcm9wZXJ0eShpY29uTmFtZSkgJiYgdXJsID09PSBEYXRhSW1hZ2VbaWNvbk5hbWVdKSB7XG5cbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgPSBpY29uTmFtZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWNoZWRcbiAgICAgICAgY2FjaGVkID0gVEhSRUUuQ2FjaGUuZ2V0KHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCk7XG5cbiAgICAgICAgaWYgKGNhY2hlZCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcblxuICAgICAgICAgICAgICAgIGlmICggY2FjaGVkLmNvbXBsZXRlICYmIGNhY2hlZC5zcmMgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCggY2FjaGVkICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgMCApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCggY2FjaGVkICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29uc3RydWN0IGEgbmV3IFhNTEh0dHBSZXF1ZXN0XG4gICAgICAgIHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJywgJ2ltZycpO1xuXG4gICAgICAgIC8vIEFkZCB0byBjYWNoZVxuICAgICAgICBUSFJFRS5DYWNoZS5hZGQocmVmZXJlbmNlID8gcmVmZXJlbmNlIDogdXJsLCBpbWFnZSk7XG5cbiAgICAgICAgY29uc3Qgb25JbWFnZUxvYWRlZCA9ICgpID0+IHtcblxuICAgICAgICAgICAgdXJsQ3JlYXRvci5yZXZva2VPYmplY3RVUkwoaW1hZ2Uuc3JjKTtcbiAgICAgICAgICAgIG9uTG9hZChpbWFnZSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcblxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uSW1hZ2VMb2FkZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5jcm9zc09yaWdpbiA6ICcnO1xuXG4gICAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIG9uRXJyb3IgKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCAncHJvZ3Jlc3MnLCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICAoICFldmVudCApIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgeyBsb2FkZWQsIHRvdGFsLCBsZW5ndGhDb21wdXRhYmxlIH0gPSBldmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBsZW5ndGhDb21wdXRhYmxlICkge1xuXHRcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZCwgdG90YWwgfSApO1xuXHRcbiAgICAgICAgICAgIH1cblx0XG4gICAgICAgIH0gKTtcbiAgICAgICAgXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlbmQnLCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICAoICFldmVudCApIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldDogeyByZXNwb25zZSB9IH0gPSBldmVudDtcblxuICAgICAgICAgICAgYXJyYXlCdWZmZXJWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoIHJlc3BvbnNlICk7XG4gICAgICAgICAgICBibG9iID0gbmV3IHdpbmRvdy5CbG9iKCBbIGFycmF5QnVmZmVyVmlldyBdICk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSApO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XG4gICAgICAgIH0gKTtcblx0XG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcblx0XG4gICAgfVxuXG59O1xuXG5leHBvcnQgeyBJbWFnZUxvYWRlciB9OyIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlci5qcyc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQG1vZHVsZSBUZXh0dXJlTG9hZGVyXG4gKiBAZGVzY3JpcHRpb24gVGV4dHVyZSBsb2FkZXIgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qc31cbiAqL1xuY29uc3QgVGV4dHVyZUxvYWRlciA9IHtcblxuICAgIC8qKlxuICAgICAqIExvYWQgaW1hZ2UgdGV4dHVyZVxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLlRleHR1cmVMb2FkZXIubG9hZCggSU1BR0VfVVJMIClcbiAgICAgKiBAbWV0aG9kIGxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7VEhSRUUuVGV4dHVyZX0gICBcdCAtIEltYWdlIHRleHR1cmVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHVybCwgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XG5cbiAgICAgICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpOyBcblxuICAgICAgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XG5cbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICAgICAgLy8gSlBFR3MgY2FuJ3QgaGF2ZSBhbiBhbHBoYSBjaGFubmVsLCBzbyBtZW1vcnkgY2FuIGJlIHNhdmVkIGJ5IHN0b3JpbmcgdGhlbSBhcyBSR0IuXG4gICAgICAgICAgICBjb25zdCBpc0pQRUcgPSB1cmwuc2VhcmNoKCAvXFwuKGpwZ3xqcGVnKSQvICkgPiAwIHx8IHVybC5zZWFyY2goIC9eZGF0YVxcOmltYWdlXFwvanBlZy8gKSA9PT0gMDtcblxuICAgICAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSBpc0pQRUcgPyBUSFJFRS5SR0JGb3JtYXQgOiBUSFJFRS5SR0JBRm9ybWF0O1xuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIG9uTG9hZCggdGV4dHVyZSApO1xuXG4gICAgICAgIH0sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcblxuICAgIH1cblxufTtcblxuZXhwb3J0IHsgVGV4dHVyZUxvYWRlciB9OyIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlci5qcyc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQG1vZHVsZSBDdWJlVGV4dHVyZUxvYWRlclxuICogQGRlc2NyaXB0aW9uIEN1YmUgVGV4dHVyZSBMb2FkZXIgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXIuanN9XG4gKi9cbmNvbnN0IEN1YmVUZXh0dXJlTG9hZGVyID0ge1xuXG4gICAgLyoqXG4gICAgICogTG9hZCA2IGltYWdlcyBhcyBhIGN1YmUgdGV4dHVyZVxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLkN1YmVUZXh0dXJlTG9hZGVyLmxvYWQoIFsgJ3B4LnBuZycsICdueC5wbmcnLCAncHkucG5nJywgJ255LnBuZycsICdwei5wbmcnLCAnbnoucG5nJyBdIClcbiAgICAgKiBAbWV0aG9kIGxvYWRcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gICB1cmxzICAgICAgICAtIGFycmF5IG9mIDYgdXJscyB0byBpbWFnZXMsIG9uZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBDdWJlVGV4dHVyZS4gVGhlIHVybHMgc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiBwb3MteCwgbmVnLXgsIHBvcy15LCBuZWcteSwgcG9zLXosIG5lZy16XG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5DdWJlVGV4dHVyZX0gICAtIEN1YmUgdGV4dHVyZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJscywgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MgPSAoKSA9PiB7fSwgb25FcnJvciApIHtcblxuXHQgICB2YXIgdGV4dHVyZSwgbG9hZGVkLCBwcm9ncmVzcywgYWxsLCBsb2FkaW5ncztcblxuXHQgICB0ZXh0dXJlID0gbmV3IFRIUkVFLkN1YmVUZXh0dXJlKCBbXSApO1xuXG5cdCAgIGxvYWRlZCA9IDA7XG5cdCAgIHByb2dyZXNzID0ge307XG5cdCAgIGFsbCA9IHt9O1xuXG5cdCAgIHVybHMubWFwKCBmdW5jdGlvbiAoIHVybCwgaW5kZXggKSB7XG5cblx0XHQgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XG5cblx0XHRcdCAgIHRleHR1cmUuaW1hZ2VzWyBpbmRleCBdID0gaW1hZ2U7XG5cblx0XHRcdCAgIGxvYWRlZCsrO1xuXG5cdFx0XHQgICBpZiAoIGxvYWRlZCA9PT0gNiApIHtcblxuXHRcdFx0XHQgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHQgICBvbkxvYWQoIHRleHR1cmUgKTtcblxuXHRcdFx0ICAgfVxuXG5cdFx0ICAgfSwgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0ICAgcHJvZ3Jlc3NbIGluZGV4IF0gPSB7IGxvYWRlZDogZXZlbnQubG9hZGVkLCB0b3RhbDogZXZlbnQudG90YWwgfTtcblxuXHRcdFx0ICAgYWxsLmxvYWRlZCA9IDA7XG5cdFx0XHQgICBhbGwudG90YWwgPSAwO1xuXHRcdFx0ICAgbG9hZGluZ3MgPSAwO1xuXG5cdFx0XHQgICBmb3IgKCB2YXIgaSBpbiBwcm9ncmVzcyApIHtcblxuXHRcdFx0XHQgICBsb2FkaW5ncysrO1xuXHRcdFx0XHQgICBhbGwubG9hZGVkICs9IHByb2dyZXNzWyBpIF0ubG9hZGVkO1xuXHRcdFx0XHQgICBhbGwudG90YWwgKz0gcHJvZ3Jlc3NbIGkgXS50b3RhbDtcblxuXHRcdFx0ICAgfVxuXG5cdFx0XHQgICBpZiAoIGxvYWRpbmdzIDwgNiApIHtcblxuXHRcdFx0XHQgICBhbGwudG90YWwgPSBhbGwudG90YWwgLyBsb2FkaW5ncyAqIDY7XG5cblx0XHRcdCAgIH1cblxuXHRcdFx0ICAgb25Qcm9ncmVzcyggYWxsICk7XG5cblx0XHQgICB9LCBvbkVycm9yICk7XG5cblx0ICAgfSApO1xuXG5cdCAgIHJldHVybiB0ZXh0dXJlO1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFVzZXIgTWVkaWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtjb25zdHJhaW50cz17IHZpZGVvOiB7IHdpZHRoOiB7IGlkZWFsOiAxOTIwIH0sIGhlaWdodDogeyBpZGVhbDogMTA4MCB9LCBmYWNpbmdNb2RlOiB7IGV4YWN0OiAnZW52aXJvbm1lbnQnIH0gfSwgYXVkaW86IGZhbHNlIH1dXG4gKi9cbmZ1bmN0aW9uIE1lZGlhICggY29uc3RyYWludHMgKSB7XG5cbiAgICBjb25zdCBkZWZhdWx0Q29uc3RyYWludHMgPSB7IHZpZGVvOiB7IHdpZHRoOiB7IGlkZWFsOiAxOTIwIH0sIGhlaWdodDogeyBpZGVhbDogMTA4MCB9LCBmYWNpbmdNb2RlOiB7IGV4YWN0OiAnZW52aXJvbm1lbnQnIH0gfSwgYXVkaW86IGZhbHNlIH07XG5cbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gT2JqZWN0LmFzc2lnbiggZGVmYXVsdENvbnN0cmFpbnRzLCBjb25zdHJhaW50cyApO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgdGhpcy5zdHJlYW0gPSBudWxsO1xuICAgIHRoaXMucmF0aW9TY2FsYXIgPSAxO1xuICAgIHRoaXMudmlkZW9EZXZpY2VJbmRleCA9IDA7XG5cbn07XG5cbk1lZGlhLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xuXG4gICAgc2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoIGNvbnRhaW5lciApIHtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIH0sXG5cbiAgICBzZXRTY2VuZTogZnVuY3Rpb24gKCBzY2VuZSApIHtcblxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW51bWVyYXRlIGRldmljZXNcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBlbnVtZXJhdGVEZXZpY2VzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlcztcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gbmV3IFByb21pc2UoIHJlc29sdmUgPT4geyByZXNvbHZlKCBkZXZpY2VzICk7IH0gKTtcblxuICAgICAgICByZXR1cm4gZGV2aWNlcy5sZW5ndGggPiAwID8gcmVzb2x2ZWRQcm9taXNlIDogd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCB0byBuZXh0IGF2YWlsYWJsZSB2aWRlbyBkZXZpY2VcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzd2l0Y2hOZXh0VmlkZW9EZXZpY2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBzdG9wID0gdGhpcy5zdG9wLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3Qgc2V0VmlkZURldmljZUluZGV4ID0gdGhpcy5zZXRWaWRlRGV2aWNlSW5kZXguYmluZCggdGhpcyApO1xuXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudmlkZW9EZXZpY2VJbmRleDtcblxuICAgICAgICB0aGlzLmdldERldmljZXMoICd2aWRlbycgKVxuICAgICAgICAgICAgLnRoZW4oIGRldmljZXMgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmICggaW5kZXggPj0gZGV2aWNlcy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVEZXZpY2VJbmRleCggMCApO1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVEZXZpY2VJbmRleCggaW5kZXggKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdGFydCggZGV2aWNlc1sgaW5kZXggXSApO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGV2aWNlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gdHlwZSBrZXl3b3JkIHRvIG1hdGNoIGRldmljZS5raW5kXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0RGV2aWNlczogZnVuY3Rpb24gKCB0eXBlID0gJ3ZpZGVvJyApIHtcblxuICAgICAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5kZXZpY2VzO1xuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IF9kZXZpY2VzID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIF9kZXZpY2VzLm1hcCggZGV2aWNlID0+IHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCAhZGV2aWNlcy5pbmNsdWRlcyggZGV2aWNlICkgKSB7IGRldmljZXMucHVzaCggZGV2aWNlICk7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IF9kZXZpY2VzID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cCggdHlwZSwgJ2knICk7XG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMuZmlsdGVyKCBkZXZpY2UgPT4gcmVnLnRlc3QoIGRldmljZS5raW5kICkgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgICAgLnRoZW4oIHZhbGlkYXRlIClcbiAgICAgICAgICAgIC50aGVuKCBmaWx0ZXIgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdXNlciBtZWRpYVxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gY29uc3RyYWludHNcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXRVc2VyTWVkaWE6IGZ1bmN0aW9uICggY29uc3RyYWludHMgKSB7XG5cbiAgICAgICAgY29uc3Qgc2V0TWVkaWFTdHJlYW0gPSB0aGlzLnNldE1lZGlhU3RyZWFtLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3QgcGxheVZpZGVvID0gdGhpcy5wbGF5VmlkZW8uYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBvbkNhdGNoRXJyb3IgPSBlcnJvciA9PiB7IGNvbnNvbGUud2FybiggYFBBTk9MRU5TLk1lZGlhOiAke2Vycm9yfWAgKTsgfTtcblxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKCBjb25zdHJhaW50cyApXG4gICAgICAgICAgICAudGhlbiggc2V0TWVkaWFTdHJlYW0gKVxuICAgICAgICAgICAgLnRoZW4oIHBsYXlWaWRlbyApXG4gICAgICAgICAgICAuY2F0Y2goIG9uQ2F0Y2hFcnJvciApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBkZXZpY2UgaW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0VmlkZURldmljZUluZGV4OiBmdW5jdGlvbiAoIGluZGV4ICkge1xuXG4gICAgICAgIHRoaXMudmlkZW9EZXZpY2VJbmRleCA9IGluZGV4O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHN0cmVhbWluZ1xuICAgICAqIEBwYXJhbSB7TWVkaWFEZXZpY2VJbmZvfSBbdGFyZ2V0RGV2aWNlXVxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiggdGFyZ2V0RGV2aWNlICkge1xuXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50cztcbiAgICAgICAgY29uc3QgZ2V0VXNlck1lZGlhID0gdGhpcy5nZXRVc2VyTWVkaWEuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBvblZpZGVvRGV2aWNlcyA9IGRldmljZXMgPT4ge1xuXG4gICAgICAgICAgICBpZiAoICFkZXZpY2VzIHx8IGRldmljZXMubGVuZ3RoID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoICdubyB2aWRlbyBkZXZpY2UgZm91bmQnICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGV2aWNlID0gdGFyZ2V0RGV2aWNlIHx8IGRldmljZXNbIDAgXTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gZGV2aWNlLmRldmljZUlkO1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0VXNlck1lZGlhKCBjb25zdHJhaW50cyApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVWaWRlb0VsZW1lbnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXZpY2VzKCkudGhlbiggb25WaWRlb0RldmljZXMgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHN0cmVhbWluZ1xuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLnN0cmVhbTtcblxuICAgICAgICBpZiAoIHN0cmVhbSAmJiBzdHJlYW0uYWN0aXZlICkge1xuXG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IHN0cmVhbS5nZXRUcmFja3MoKVsgMCBdO1xuXG4gICAgICAgICAgICB0cmFjay5zdG9wKCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IG1lZGlhIHN0cmVhbVxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbSBcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRNZWRpYVN0cmVhbTogZnVuY3Rpb24gKCBzdHJlYW0gKSB7XG5cbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMuZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKCB0aGlzLnNjZW5lICkge1xuXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSB0aGlzLmNyZWF0ZVZpZGVvVGV4dHVyZSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQbGF5IHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwbGF5VmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuXG4gICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSB2aWRlbyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcGF1c2VWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGF1c2UnIH0gKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIHRleHR1cmVcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7VEhSRUUuVmlkZW9UZXh0dXJlfVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvVGV4dHVyZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcblxuICAgICAgICB0ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUuZm9ybWF0ID0gVEhSRUUuUkdCRm9ybWF0O1xuICAgICAgICB0ZXh0dXJlLmNlbnRlci5zZXQoIDAuNSwgMC41ICk7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0hUTUxWaWRlb0VsZW1lbnR9XG4gICAgICogQGZpcmVzIE1lZGlhI2NhbnBsYXlcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0VsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVmlkZW8gY2FuIHBsYXkgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IE1lZGlhI2NhbnBsYXlcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNhblBsYXkgPSAoKSA9PiBkaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjYW5wbGF5JyB9ICk7XG4gICAgICAgIFxuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdhdXRvcGxheScsICcnICk7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ211dGVkJywgJycgKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xuXG4gICAgICAgIHZpZGVvLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdmlkZW8uc3R5bGUudG9wID0gJzAnO1xuICAgICAgICB2aWRlby5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB2aWRlby5zdHlsZS5vYmplY3RQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICB2aWRlby5zdHlsZS5vYmplY3RGaXQgPSAnY292ZXInO1xuICAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gdGhpcy5zY2VuZSA/ICdub25lJyA6ICcnO1xuXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdjYW5wbGF5JywgY2FuUGxheSApO1xuXG4gICAgICAgIHJldHVybiB2aWRlbztcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPbiB3aW5kb3cgcmVzaXplIGV2ZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQudmlkZW9XaWR0aCAmJiB0aGlzLmVsZW1lbnQudmlkZW9IZWlnaHQgJiYgdGhpcy5zY2VuZSApIHtcblxuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aDogd2lkdGgsIGNsaWVudEhlaWdodDogaGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLnNjZW5lLmJhY2tncm91bmQ7XG4gICAgICAgICAgICBjb25zdCB7IHZpZGVvV2lkdGgsIHZpZGVvSGVpZ2h0IH0gPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBjYW1lcmFSYXRpbyA9IHZpZGVvSGVpZ2h0IC8gdmlkZW9XaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB0aGlzLmNvbnRhaW5lciA/IHdpZHRoIC8gaGVpZ2h0IDogMS4wO1xuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSBjYW1lcmFSYXRpbyAqIHZpZXdwb3J0UmF0aW8gKiB0aGlzLnJhdGlvU2NhbGFyO1xuXG4gICAgICAgICAgICBpZiAoIHdpZHRoID4gaGVpZ2h0ICkge1xuICAgICAgICAgICAgICAgIHRleHR1cmUucmVwZWF0LnNldCggcmF0aW8sIDEgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCAxLCAxIC8gcmF0aW8gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgTWVkaWEgfTsiLCJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFJldGljbGUgM0QgU3ByaXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IFtjb2xvcj0weGZmZmZmZl0gLSBDb2xvciBvZiB0aGUgcmV0aWNsZSBzcHJpdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2F1dG9TZWxlY3Q9dHJ1ZV0gLSBBdXRvIHNlbGVjdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtkd2VsbFRpbWU9MTUwMF0gLSBEdXJhdGlvbiBmb3IgZHdlbGxpbmcgc2VxdWVuY2UgdG8gY29tcGxldGVcbiAqL1xuY2xhc3MgUmV0aWNsZSBleHRlbmRzIFRIUkVFLlNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IoIGNvbG9yID0gMHhmZmZmZmYsIGF1dG9TZWxlY3QgPSB0cnVlLCBkd2VsbFRpbWUgPSAxNTAwICkge1xuICAgICAgICBjb25zdCB7IGNhbnZhcywgY29udGV4dCB9ID0gUmV0aWNsZS5jcmVhdGVDYW52YXMod2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCggeyBjb2xvciwgbWFwOiBSZXRpY2xlLmNyZWF0ZUNhbnZhc1RleHR1cmUoIGNhbnZhcyApIH0gKTtcbiAgICAgICAgc3VwZXIobWF0ZXJpYWwpO1xuXG4gICAgICAgIHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gIFxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvciBpbnN0YW5jZW9mIFRIUkVFLkNvbG9yID8gY29sb3IgOiBuZXcgVEhSRUUuQ29sb3IoIGNvbG9yICk7ICAgIFxuICBcbiAgICAgICAgdGhpcy5hdXRvU2VsZWN0ID0gYXV0b1NlbGVjdDtcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMucmlwcGxlRHVyYXRpb24gPSA1MDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueiA9IC0xMDtcbiAgICAgICAgdGhpcy5jZW50ZXIuc2V0KCAwLjUsIDAuNSApO1xuICAgICAgICB0aGlzLnNjYWxlLnNldCggMC41LCAwLjUsIDEgKTtcbiAgXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuICBcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG1hdGVyaWFsIGNvbG9yXG4gICAgICogQHBhcmFtIHtUSFJFRS5Db2xvcn0gY29sb3IgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDb2xvciAoIGNvbG9yICkge1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuY29sb3IuY29weSggY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNhbnZhcyB0ZXh0dXJlXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RIUkVFLkNhbnZhc1RleHR1cmV9XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUNhbnZhc1RleHR1cmUgKCBjYW52YXMgKSB7XG4gIFxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoIGNhbnZhcyApO1xuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG4gIFxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcblxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNhbnZhcyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7SFRNTENhbnZhc0VsZW1lbnR9IG9iamVjdC5jYW52YXNcbiAgICAgKiBAcmV0dXJucyB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBvYmplY3QuY29udGV4dFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVDYW52YXMgKGRwcikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDMyO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAzMjtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG4gIFxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIGRwcjtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcbiAgICAgICAgY29udGV4dC5zY2FsZSggZHByLCBkcHIgKTtcbiAgXG4gICAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDU7XG4gICAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyMDAsMjAwLDIwMCwwLjkpJztcbiAgXG4gICAgICAgIHJldHVybiB7IGNhbnZhcywgY29udGV4dCB9O1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhbnZhcyBhcmMgYnkgcHJvZ3Jlc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZ3Jlc3MgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzICggcHJvZ3Jlc3MgKSB7XG4gIFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1hdGVyaWFsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gcHJvZ3Jlc3MgKiBNYXRoLlBJICogMjtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yLmdldFN0eWxlKCk7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMztcbiAgICAgICAgICBcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPT09IDAgKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgY2FudmFzV2lkdGggLyAxNiwgMCwgMiAqIE1hdGguUEkgKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCBjYW52YXNXaWR0aCAvIDQgLSBsaW5lV2lkdGgsIC1NYXRoLlBJIC8gMiwgLU1hdGguUEkgLyAyICsgZGVncmVlICk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIFxuICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFJpcHBsZSBlZmZlY3RcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLXN0YXJ0XG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1yaXBwbGUtZW5kXG4gICAgICovXG4gICAgcmlwcGxlKCkge1xuICBcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBtYXRlcmlhbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnJpcHBsZUR1cmF0aW9uO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcbiAgICAgICAgY29uc3QgeCA9IGNhbnZhc1dpZHRoICogMC41IC8gZHByO1xuICAgICAgICBjb25zdCB5ID0gY2FudmFzSGVpZ2h0ICogMC41IC8gZHByO1xuICBcbiAgICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICBcbiAgICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGUgKTtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IDEuMCAtIHByb2dyZXNzID4gMCA/IDEuMCAtIHByb2dyZXNzIDogMDtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHByb2dyZXNzICogY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XG4gIFxuICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiApO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yLnIgKiAyNTV9LCAke2NvbG9yLmcgKiAyNTV9LCAke2NvbG9yLmIgKiAyNTV9LCAke29wYWNpdHl9KWA7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIFxuICAgICAgICAgICAgaWYgKCBwcm9ncmVzcyA+PSAxLjAgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGltZXJJZCApO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xuICBcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBSZXRpY2xlIHJpcHBsZSBlbmQgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1yaXBwbGUtZW5kJyB9ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIFxuICAgICAgICB9O1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldGljbGUgcmlwcGxlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtcmlwcGxlLXN0YXJ0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLXN0YXJ0JyB9ICk7XG4gIFxuICAgICAgICB1cGRhdGUoKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBNYWtlIHJldGljbGUgdmlzaWJsZVxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyAoKSB7XG4gIFxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE1ha2UgcmV0aWNsZSBpbnZpc2libGVcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGhpZGUgKCkge1xuICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU3RhcnQgZHdlbGxpbmdcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtc3RhcnRcbiAgICAgKi9cbiAgICBzdGFydCAoIGNhbGxiYWNrICkge1xuICBcbiAgICAgICAgaWYgKCAhdGhpcy5hdXRvU2VsZWN0ICkge1xuICBcbiAgICAgICAgICAgIHJldHVybjtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtc3RhcnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1zdGFydCcgfSApO1xuICBcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRW5kIGR3ZWxsaW5nXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLWVuZFxuICAgICAqL1xuICAgIGVuZCgpe1xuICBcbiAgICAgICAgaWYgKCAhdGhpcy5zdGFydFRpbWVzdGFtcCApIHsgcmV0dXJuOyB9XG4gIFxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xuICBcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gbnVsbDtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIGVuZCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLWVuZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLWVuZCcgfSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS11cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuICBcbiAgICAgICAgdGhpcy50aW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy51cGRhdGUuYmluZCggdGhpcyApICk7XG4gIFxuICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyB0aGlzLmR3ZWxsVGltZTtcbiAgXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggcHJvZ3Jlc3MgKTtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIHVwZGF0ZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXVwZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXVwZGF0ZScsIHByb2dyZXNzIH0gKTtcbiAgXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xuICBcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy50aW1lcklkICk7XG4gICAgICAgICAgICBpZiAoIHRoaXMuY2FsbGJhY2sgKSB7IHRoaXMuY2FsbGJhY2soKTsgfVxuICAgICAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlKCk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH0gIFxufTtcblxuZXhwb3J0IHsgUmV0aWNsZSB9OyIsIi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91J3JlIGF3ZXNvbWUhXG4gKi9cblxuXG52YXIgX0dyb3VwID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl90d2VlbnMgPSB7fTtcblx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcbn07XG5cbl9Hcm91cC5wcm90b3R5cGUgPSB7XG5cdGdldEFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVucykubWFwKGZ1bmN0aW9uICh0d2VlbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHdlZW5zW3R3ZWVuSWRdO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fSxcblxuXHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX3R3ZWVucyA9IHt9O1xuXG5cdH0sXG5cblx0YWRkOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuXHRcdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXTtcblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV07XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lLCBwcmVzZXJ2ZSkge1xuXG5cdFx0dmFyIHR3ZWVuSWRzID0gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKTtcblxuXHRcdGlmICh0d2Vlbklkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IFRXRUVOLm5vdygpO1xuXG5cdFx0Ly8gVHdlZW5zIGFyZSB1cGRhdGVkIGluIFwiYmF0Y2hlc1wiLiBJZiB5b3UgYWRkIGEgbmV3IHR3ZWVuIGR1cmluZyBhbiB1cGRhdGUsIHRoZW4gdGhlXG5cdFx0Ly8gbmV3IHR3ZWVuIHdpbGwgYmUgdXBkYXRlZCBpbiB0aGUgbmV4dCBiYXRjaC5cblx0XHQvLyBJZiB5b3UgcmVtb3ZlIGEgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgaXQgbWF5IG9yIG1heSBub3QgYmUgdXBkYXRlZC4gSG93ZXZlcixcblx0XHQvLyBpZiB0aGUgcmVtb3ZlZCB0d2VlbiB3YXMgYWRkZWQgZHVyaW5nIHRoZSBjdXJyZW50IGJhdGNoLCB0aGVuIGl0IHdpbGwgbm90IGJlIHVwZGF0ZWQuXG5cdFx0d2hpbGUgKHR3ZWVuSWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHdlZW5JZHMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl90d2VlbnNbdHdlZW5JZHNbaV1dO1xuXG5cdFx0XHRcdGlmICh0d2VlbiAmJiB0d2Vlbi51cGRhdGUodGltZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCFwcmVzZXJ2ZSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHR3ZWVuSWRzID0gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cbnZhciBUV0VFTiA9IG5ldyBfR3JvdXAoKTtcblxuVFdFRU4uR3JvdXAgPSBfR3JvdXA7XG5UV0VFTi5fbmV4dElkID0gMDtcblRXRUVOLm5leHRJZCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIFRXRUVOLl9uZXh0SWQrKztcbn07XG5cblxuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbC5cbi8vIEluIG5vZGUuanMsIHVzZSBwcm9jZXNzLmhydGltZS5cbmlmICh0eXBlb2YgKHNlbGYpID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgKHByb2Nlc3MpICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmhydGltZSkge1xuXHRUV0VFTi5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuXG5cdFx0Ly8gQ29udmVydCBbc2Vjb25kcywgbmFub3NlY29uZHNdIHRvIG1pbGxpc2Vjb25kcy5cblx0XHRyZXR1cm4gdGltZVswXSAqIDEwMDAgKyB0aW1lWzFdIC8gMTAwMDAwMDtcblx0fTtcbn1cbi8vIEluIGEgYnJvd3NlciwgdXNlIHNlbGYucGVyZm9ybWFuY2Uubm93IGlmIGl0IGlzIGF2YWlsYWJsZS5cbmVsc2UgaWYgKHR5cGVvZiAoc2VsZikgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICBzZWxmLnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiZcblx0XHQgc2VsZi5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHQvLyBUaGlzIG11c3QgYmUgYm91bmQsIGJlY2F1c2UgZGlyZWN0bHkgYXNzaWduaW5nIHRoaXMgZnVuY3Rpb25cblx0Ly8gbGVhZHMgdG8gYW4gaW52b2NhdGlvbiBleGNlcHRpb24gaW4gQ2hyb21lLlxuXHRUV0VFTi5ub3cgPSBzZWxmLnBlcmZvcm1hbmNlLm5vdy5iaW5kKHNlbGYucGVyZm9ybWFuY2UpO1xufVxuLy8gVXNlIERhdGUubm93IGlmIGl0IGlzIGF2YWlsYWJsZS5cbmVsc2UgaWYgKERhdGUubm93ICE9PSB1bmRlZmluZWQpIHtcblx0VFdFRU4ubm93ID0gRGF0ZS5ub3c7XG59XG4vLyBPdGhlcndpc2UsIHVzZSAnbmV3IERhdGUoKS5nZXRUaW1lKCknLlxuZWxzZSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH07XG59XG5cblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAob2JqZWN0LCBncm91cCkge1xuXHR0aGlzLl9vYmplY3QgPSBvYmplY3Q7XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0ID0ge307XG5cdHRoaXMuX3ZhbHVlc0VuZCA9IHt9O1xuXHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCA9IHt9O1xuXHR0aGlzLl9kdXJhdGlvbiA9IDEwMDA7XG5cdHRoaXMuX3JlcGVhdCA9IDA7XG5cdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IHVuZGVmaW5lZDtcblx0dGhpcy5feW95byA9IGZhbHNlO1xuXHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dGhpcy5fcmV2ZXJzZWQgPSBmYWxzZTtcblx0dGhpcy5fZGVsYXlUaW1lID0gMDtcblx0dGhpcy5fc3RhcnRUaW1lID0gbnVsbDtcblx0dGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBUV0VFTi5FYXNpbmcuTGluZWFyLk5vbmU7XG5cdHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR0aGlzLl9jaGFpbmVkVHdlZW5zID0gW107XG5cdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9ncm91cCA9IGdyb3VwIHx8IFRXRUVOO1xuXHR0aGlzLl9pZCA9IFRXRUVOLm5leHRJZCgpO1xuXG59O1xuXG5UV0VFTi5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGdldElkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9LFxuXG5cdGlzUGxheWluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc1BsYXlpbmc7XG5cdH0sXG5cblx0dG86IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBkdXJhdGlvbikge1xuXG5cdFx0dGhpcy5fdmFsdWVzRW5kID0gcHJvcGVydGllcztcblxuXHRcdGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZHVyYXRpb246IGZ1bmN0aW9uIGR1cmF0aW9uKGQpIHtcblx0XHR0aGlzLl9kdXJhdGlvbiA9IGQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3RhcnQ6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR0aGlzLl9ncm91cC5hZGQodGhpcyk7XG5cblx0XHR0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHR5cGVvZiB0aW1lID09PSAnc3RyaW5nJyA/IFRXRUVOLm5vdygpICsgcGFyc2VGbG9hdCh0aW1lKSA6IHRpbWUgOiBUV0VFTi5ub3coKTtcblx0XHR0aGlzLl9zdGFydFRpbWUgKz0gdGhpcy5fZGVsYXlUaW1lO1xuXG5cdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XG5cdFx0XHRcdHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbdGhpcy5fb2JqZWN0W3Byb3BlcnR5XV0uY29uY2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGB0bygpYCBzcGVjaWZpZXMgYSBwcm9wZXJ0eSB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHNvdXJjZSBvYmplY3QsXG5cdFx0XHQvLyB3ZSBzaG91bGQgbm90IHNldCB0aGF0IHByb3BlcnR5IGluIHRoZSBvYmplY3Rcblx0XHRcdGlmICh0aGlzLl9vYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fb2JqZWN0W3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKCh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3A6IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICghdGhpcy5faXNQbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzLl9ncm91cC5yZW1vdmUodGhpcyk7XG5cdFx0dGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5fb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX29uU3RvcENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLnVwZGF0ZShJbmZpbml0eSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRzdG9wQ2hhaW5lZFR3ZWVuczogZnVuY3Rpb24gKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdG9wKCk7XG5cdFx0fVxuXG5cdH0sXG5cblx0Z3JvdXA6IGZ1bmN0aW9uIChncm91cCkge1xuXHRcdHRoaXMuX2dyb3VwID0gZ3JvdXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHJlcGVhdDogZnVuY3Rpb24gKHRpbWVzKSB7XG5cblx0XHR0aGlzLl9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHJlcGVhdERlbGF5OiBmdW5jdGlvbiAoYW1vdW50KSB7XG5cblx0XHR0aGlzLl9yZXBlYXREZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR5b3lvOiBmdW5jdGlvbiAoeW95bykge1xuXG5cdFx0dGhpcy5feW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlYXNpbmc6IGZ1bmN0aW9uIChlYXNpbmdGdW5jdGlvbikge1xuXG5cdFx0dGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGludGVycG9sYXRpb246IGZ1bmN0aW9uIChpbnRlcnBvbGF0aW9uRnVuY3Rpb24pIHtcblxuXHRcdHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb25GdW5jdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGNoYWluOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uVXBkYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uUmVwZWF0OiBmdW5jdGlvbiBvblJlcGVhdChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25Db21wbGV0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uU3RvcDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSkge1xuXG5cdFx0dmFyIHByb3BlcnR5O1xuXHRcdHZhciBlbGFwc2VkO1xuXHRcdHZhciB2YWx1ZTtcblxuXHRcdGlmICh0aW1lIDwgdGhpcy5fc3RhcnRUaW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XG5cblx0XHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRlbGFwc2VkID0gKHRpbWUgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fZHVyYXRpb247XG5cdFx0ZWxhcHNlZCA9ICh0aGlzLl9kdXJhdGlvbiA9PT0gMCB8fCBlbGFwc2VkID4gMSkgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhbHVlID0gdGhpcy5fZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XG5cblx0XHRmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBEb24ndCB1cGRhdGUgcHJvcGVydGllcyB0aGF0IGRvIG5vdCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc3RhcnQgPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblx0XHRcdHZhciBlbmQgPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZW5kIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHR0aGlzLl9vYmplY3RbcHJvcGVydHldID0gdGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGVuZCwgdmFsdWUpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0XHRcdGlmIChlbmQuY2hhckF0KDApID09PSAnKycgfHwgZW5kLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZW5kID0gcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3RlY3QgYWdhaW5zdCBub24gbnVtZXJpYyBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayh0aGlzLl9vYmplY3QsIGVsYXBzZWQpO1xuXHRcdH1cblxuXHRcdGlmIChlbGFwc2VkID09PSAxKSB7XG5cblx0XHRcdGlmICh0aGlzLl9yZXBlYXQgPiAwKSB7XG5cblx0XHRcdFx0aWYgKGlzRmluaXRlKHRoaXMuX3JlcGVhdCkpIHtcblx0XHRcdFx0XHR0aGlzLl9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQpIHtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldICsgcGFyc2VGbG9hdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodGhpcy5feW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5feW95bykge1xuXHRcdFx0XHRcdHRoaXMuX3JldmVyc2VkID0gIXRoaXMuX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3JlcGVhdERlbGF5VGltZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX3JlcGVhdERlbGF5VGltZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fZGVsYXlUaW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAodGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cblx0XHRcdFx0XHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBjaGFpbmVkIHR3ZWVucyBzdGFydCBleGFjdGx5IGF0IHRoZSB0aW1lIHRoZXkgc2hvdWxkLFxuXHRcdFx0XHRcdC8vIGV2ZW4gaWYgdGhlIGB1cGRhdGUoKWAgbWV0aG9kIHdhcyBjYWxsZWQgd2F5IHBhc3QgdGhlIGR1cmF0aW9uIG9mIHRoZSB0d2VlblxuXHRcdFx0XHRcdHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RhcnQodGhpcy5fc3RhcnRUaW1lICsgdGhpcy5fZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9XG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoMiAtIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLSAxMCAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgtIE1hdGgucG93KDIsIC0gMTAgKiAoayAtIDEpKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLSAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKGsgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRrICo9IDI7XG5cblx0XHRcdGlmIChrIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCYWNrOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAoMSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgxLjUgLyAyLjc1KSkgKiBrICsgMC43NTtcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjYyNSAvIDIuNzUpKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAwLjUpIHtcblx0XHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cblRXRUVOLkludGVycG9sYXRpb24gPSB7XG5cblx0TGluZWFyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoayA8IDApIHtcblx0XHRcdHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcblx0XHR9XG5cblx0XHRpZiAoayA+IDEpIHtcblx0XHRcdHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBiID0gMDtcblx0XHR2YXIgbiA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgcHcgPSBNYXRoLnBvdztcblx0XHR2YXIgYm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG47IGkrKykge1xuXHRcdFx0YiArPSBwdygxIC0gaywgbiAtIGkpICogcHcoaywgaSkgKiB2W2ldICogYm4obiwgaSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGI7XG5cblx0fSxcblxuXHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKHZbMF0gPT09IHZbbV0pIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdGkgPSBNYXRoLmZsb29yKGYgPSBtICogKDEgKyBrKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA+IDEpIHtcblx0XHRcdFx0cmV0dXJuIHZbbV0gLSAoZm4odlttXSwgdlttXSwgdlttIC0gMV0sIHZbbSAtIDFdLCBmIC0gbSkgLSB2W21dKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAocDAsIHAxLCB0KSB7XG5cblx0XHRcdHJldHVybiAocDEgLSBwMCkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAobiwgaSkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblxuXHRcdFx0cmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XG5cblx0XHR9LFxuXG5cdFx0RmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsxXTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChuKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxO1xuXG5cdFx0XHRcdGlmIChhW25dKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFbbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gbjsgaSA+IDE7IGktLSkge1xuXHRcdFx0XHRcdHMgKj0gaTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFbbl0gPSBzO1xuXHRcdFx0XHRyZXR1cm4gcztcblxuXHRcdFx0fTtcblxuXHRcdH0pKCksXG5cblx0XHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcblxuXHRcdFx0dmFyIHYwID0gKHAyIC0gcDApICogMC41O1xuXHRcdFx0dmFyIHYxID0gKHAzIC0gcDEpICogMC41O1xuXHRcdFx0dmFyIHQyID0gdCAqIHQ7XG5cdFx0XHR2YXIgdDMgPSB0ICogdDI7XG5cblx0XHRcdHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbihmdW5jdGlvbiAocm9vdCkge1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFRXRUVOO1xuXHRcdH0pO1xuXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cblx0XHQvLyBOb2RlLmpzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBUV0VFTjtcblxuXHR9IGVsc2UgaWYgKHJvb3QgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0Ly8gR2xvYmFsIHZhcmlhYmxlXG5cdFx0cm9vdC5UV0VFTiA9IFRXRUVOO1xuXG5cdH1cblxufSkodGhpcyk7XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xuaW1wb3J0IHsgTU9ERVMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgSW5mb3JtYXRpb24gc3BvdCBhdHRhY2hlZCB0byBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlPTMwMF0gLSBEZWZhdWx0IHNjYWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gW2ltYWdlU3JjPVBBTk9MRU5TLkRhdGFJbWFnZS5JbmZvXSAtIEltYWdlIG92ZXJsYXkgaW5mb1xuICogQHBhcmFtIHtib29sZWFufSBbYW5pbWF0ZWQ9dHJ1ZV0gLSBFbmFibGUgZGVmYXVsdCBob3ZlciBhbmltYXRpb25cbiAqL1xuY2xhc3MgSW5mb3Nwb3QgZXh0ZW5kcyBUSFJFRS5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoIHNjYWxlID0gMzAwLCBpbWFnZVNyYywgYW5pbWF0ZWQgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwLCBzY2FsZUZhY3RvciA9IDEuMztcblxuICAgICAgICBpbWFnZVNyYyA9IGltYWdlU3JjIHx8IERhdGFJbWFnZS5JbmZvO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdpbmZvc3BvdCc7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGFuaW1hdGVkICE9PSB1bmRlZmluZWQgPyBhbmltYXRlZCA6IHRydWU7XG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRPRE86IFRocmVlLmpzIGJ1ZyBob3RmaXggZm9yIHNwcml0ZSByYXljYXN0aW5nIHIxMDRcbiAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTQ2MjRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMudG9QYW5vcmFtYSA9IG51bGw7XG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcblxuICAgICAgICB0aGlzLnNjYWxlLnNldCggc2NhbGUsIHNjYWxlLCAxICk7XG4gICAgICAgIHRoaXMucm90YXRpb24ueSA9IE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub3JpZ2luYWxSYXljYXN0ID0gdGhpcy5yYXljYXN0O1xuXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJcbiAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gbnVsbDtcdFxuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIHRoaXMuc2NhbGVVcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuICAgICAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuXG5cbiAgICAgICAgY29uc3QgcG9zdExvYWQgPSBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgICAgIGlmICggIXRoaXMubWF0ZXJpYWwgKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2Uud2lkdGggPSB0ZXh0dXJlLmltYWdlLm5hdHVyYWxXaWR0aCB8fCA2NDtcbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2UuaGVpZ2h0ID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IDY0O1xuXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnNldCggcmF0aW8gKiBzY2FsZSwgc2NhbGUsIDEgKTtcblxuICAgICAgICAgICAgdGV4dHVyZVNjYWxlLmNvcHkoIHRoaXMuc2NhbGUgKTtcblxuICAgICAgICAgICAgdGhpcy5zY2FsZVVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgICAgICAudG8oIHsgeDogdGV4dHVyZVNjYWxlLnggKiBzY2FsZUZhY3RvciwgeTogdGV4dHVyZVNjYWxlLnkgKiBzY2FsZUZhY3RvciB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NhbGVEb3duQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgICAgICAudG8oIHsgeDogdGV4dHVyZVNjYWxlLngsIHk6IHRleHR1cmVTY2FsZS55IH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQgKTtcblxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgfS5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgLy8gQWRkIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9uc1xuICAgICAgICB0aGlzLnNob3dBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWF0ZXJpYWwgKVxuICAgICAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDEgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCB0cnVlICkgKVxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XG5cbiAgICAgICAgdGhpcy5oaWRlQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAwIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5vblN0YXJ0KCB0aGlzLmVuYWJsZVJheWNhc3QuYmluZCggdGhpcywgZmFsc2UgKSApXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcblxuICAgICAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5vbkNsaWNrICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVyJywgdGhpcy5vbkhvdmVyICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVyZW50ZXInLCB0aGlzLm9uSG92ZXJTdGFydCApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmxlYXZlJywgdGhpcy5vbkhvdmVyRW5kICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIHRoaXMub25EdWFsRXllRWZmZWN0ICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMuc2V0Q29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdkaXNtaXNzJywgdGhpcy5vbkRpc21pc3MgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtaW5mb3Nwb3QtZm9jdXMnLCB0aGlzLnNldEZvY3VzTWV0aG9kICk7XG5cbiAgICAgICAgVGV4dHVyZUxvYWRlci5sb2FkKCBpbWFnZVNyYywgcG9zdExvYWQgKTtcdFxuICAgIH1cblx0XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5mb3Nwb3QgY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q29udGFpbmVyICggZGF0YSApIHtcblxuICAgICAgICBsZXQgY29udGFpbmVyO1xuXG4gICAgICAgIGlmICggZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xuXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGRhdGEgJiYgZGF0YS5jb250YWluZXIgKSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudCBpZiBleGlzdHNcbiAgICAgICAgaWYgKCBjb250YWluZXIgJiYgdGhpcy5lbGVtZW50ICkge1xuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIG9mIHRoaXMgaW5mb3Nwb3RcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXIgKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgYSBjbGljayBldmVudFxuICAgICAqIFRyYW5zbGF0ZSBhbmQgbG9jayB0aGUgaG92ZXJpbmcgZWxlbWVudCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbmluZyBtb3VzZUV2ZW50IHdpdGggY2xpZW50WCBhbmQgY2xpZW50WVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uQ2xpY2sgKCBldmVudCApIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmdldENvbnRhaW5lcigpICkge1xuXG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJTdGFydCggZXZlbnQgKTtcblxuICAgICAgICAgICAgLy8gTG9jayBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmxvY2tIb3ZlckVsZW1lbnQoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIGN1cnJlbnQgZWxlbWVudCBpZiBhbnlcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRGlzbWlzcyBldmVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uRGlzbWlzcyAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJFbmQoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGEgbW91c2UgaG92ZXIgZXZlbnRcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGhvdmVyaW5nIGVsZW1lbnQgaWYgYW55XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5pbmcgbW91c2VFdmVudCB3aXRoIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkhvdmVyICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uIGEgbW91c2UgaG92ZXIgc3RhcnRcbiAgICAgKiBTZXRzIGN1cnNvciBzdHlsZSB0byAncG9pbnRlcicsIGRpc3BsYXkgdGhlIGVsZW1lbnQgYW5kIHNjYWxlIHVwIHRoZSBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uSG92ZXJTdGFydCAoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGN1cnNvclN0eWxlID0gdGhpcy5jdXJzb3JTdHlsZSB8fCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnICk7XG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9IGN1cnNvclN0eWxlO1xuICBcbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdGFydCgpO1xuXG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggZWxlbWVudCAmJiBldmVudC5tb3VzZUV2ZW50LmNsaWVudFggPj0gMCAmJiBldmVudC5tb3VzZUV2ZW50LmNsaWVudFkgPj0gMCApIHtcblxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCByaWdodCwgc3R5bGUgfSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XG5cbiAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGxlZnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgcmlnaHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBlbGVtZW50IHdpZHRoIGZvciByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll93aWR0aCA9IGxlZnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5faGVpZ2h0ID0gbGVmdC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBpZiAoIGxlZnQgKSB7IGxlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuICAgICAgICAgICAgICAgIGlmICggcmlnaHQgKSB7IHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGVsZW1lbnQgd2lkdGggZm9yIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX3dpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uIGEgbW91c2UgaG92ZXIgZW5kXG4gICAgICogU2V0cyBjdXJzb3Igc3R5bGUgdG8gJ2RlZmF1bHQnLCBoaWRlIHRoZSBlbGVtZW50IGFuZCBzY2FsZSBkb3duIHRoZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uSG92ZXJFbmQgKCkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzY2FsZVVwQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNjYWxlRG93bkFuaW1hdGlvbi5zdGFydCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5sb2NrZWQgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICAgICAgICAgIGlmICggcmlnaHQgKSB7IHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICAgICAgICAgICAgdGhpcy51bmxvY2tIb3ZlckVsZW1lbnQoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBkdWFsIGV5ZSBlZmZlY3QgaGFuZGxlclxuICAgICAqIENyZWF0ZXMgZHVwbGljYXRlIGxlZnQgYW5kIHJpZ2h0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0IGV2ZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25EdWFsRXllRWZmZWN0ICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cblxuICAgICAgICBsZXQgZWxlbWVudCwgaGFsZldpZHRoLCBoYWxmSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMubW9kZSA9IGV2ZW50Lm1vZGU7XG5cbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgICBoYWxmV2lkdGggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDI7XG4gICAgICAgIGhhbGZIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhZWxlbWVudC5sZWZ0ICYmICFlbGVtZW50LnJpZ2h0ICkge1xuXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQgPSBlbGVtZW50LmNsb25lTm9kZSggdHJ1ZSApO1xuICAgICAgICAgICAgZWxlbWVudC5yaWdodCA9IGVsZW1lbnQuY2xvbmVOb2RlKCB0cnVlICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBlbGVtZW50cyB0cmFuc2xhdGlvblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZUVsZW1lbnQoIGhhbGZXaWR0aCwgaGFsZkhlaWdodCApO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50LmxlZnQgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQucmlnaHQgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSB0aGUgaG92ZXJpbmcgZWxlbWVudCBieSBjc3MgdHJhbnNmb3JtXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IC0gWCBwb3NpdGlvbiBvbiB0aGUgd2luZG93IHNjcmVlblxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSAtIFkgcG9zaXRpb24gb24gdGhlIHdpbmRvdyBzY3JlZW5cbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVFbGVtZW50ICggeCwgeSApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQuX3dpZHRoIHx8ICF0aGlzLmVsZW1lbnQuX2hlaWdodCB8fCAhdGhpcy5nZXRDb250YWluZXIoKSApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVmdCwgdG9wLCBlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBkZWx0YSwgY29udGFpbmVyO1xuXG4gICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICB3aWR0aCA9IGVsZW1lbnQuX3dpZHRoIC8gMjtcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5faGVpZ2h0IC8gMjtcbiAgICAgICAgZGVsdGEgPSBlbGVtZW50LnZlcnRpY2FsRGVsdGEgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQudmVydGljYWxEZWx0YSA6IDQwO1xuXG4gICAgICAgIGxlZnQgPSB4IC0gd2lkdGg7XG4gICAgICAgIHRvcCA9IHkgLSBoZWlnaHQgLSBkZWx0YTtcblxuICAgICAgICBpZiAoICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSBcbiAgICAgICYmIGVsZW1lbnQubGVmdCAmJiBlbGVtZW50LnJpZ2h0XG4gICAgICAmJiAhKCB4ID09PSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyICYmIHkgPT09IGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyICkgKSB7XG5cbiAgICAgICAgICAgIGxlZnQgPSBjb250YWluZXIuY2xpZW50V2lkdGggLyA0IC0gd2lkdGggKyAoIHggLSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyICk7XG4gICAgICAgICAgICB0b3AgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiAtIGhlaWdodCAtIGRlbHRhICsgKCB5IC0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LmxlZnQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xuXG4gICAgICAgICAgICBsZWZ0ICs9IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDI7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudC5yaWdodCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmVuZG9yIHNwZWNpZmljIGNzc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQ1NTIHN0eWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHlsZSB2YWx1ZVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldEVsZW1lbnRTdHlsZSAoIHR5cGUsIGVsZW1lbnQsIHZhbHVlICkge1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcblxuICAgICAgICBpZiAoIHR5cGUgPT09ICd0cmFuc2Zvcm0nICkge1xuXG4gICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBob3ZlcmluZyB0ZXh0IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYmUgZGlzcGxheWVkXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0VGV4dCAoIHRleHQgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciBjc3Mgc3R5bGUgb24gaG92ZXJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDdXJzb3JIb3ZlclN0eWxlICggc3R5bGUgKSB7XG5cbiAgICAgICAgdGhpcy5jdXJzb3JTdHlsZSA9IHN0eWxlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGhvdmVyaW5nIHRleHQgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTQwXSAtIFZlcnRpY2FsIGRlbHRhIHRvIHRoZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZEhvdmVyVGV4dCAoIHRleHQsIGRlbHRhID0gNDAgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9ICc1MCUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICc1MCUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRleHRTaGFkb3cgPSAnMCAwIDNweCAjMDAwMDAwJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VGV4dCggdGV4dCApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGhvdmVyaW5nIGVsZW1lbnQgYnkgY2xvbmluZyBhbiBlbGVtZW50XG4gICAgICogQHBhcmFtIHtIVE1MRE9NRWxlbWVudH0gZWwgLSBFbGVtZW50IHRvIGJlIGNsb25lZCBhbmQgZGlzcGxheWVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT00MF0gLSBWZXJ0aWNhbCBkZWx0YSB0byB0aGUgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRIb3ZlckVsZW1lbnQgKCBlbCwgZGVsdGEgPSA0MCApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbC5jbG9uZU5vZGUoIHRydWUgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGhvdmVyaW5nIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmVIb3ZlckVsZW1lbnQgKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQubGVmdCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQubGVmdCApO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5sZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHRoaXMuZWxlbWVudC5yaWdodCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQucmlnaHQgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmlnaHQgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jayBob3ZlcmluZyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9ja0hvdmVyRWxlbWVudCAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmxvY2sgaG92ZXJpbmcgZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVubG9ja0hvdmVyRWxlbWVudCAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJheWNhc3RpbmdcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVkPXRydWVdXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZW5hYmxlUmF5Y2FzdCAoIGVuYWJsZWQgPSB0cnVlICkge1xuXG4gICAgICAgIGlmICggZW5hYmxlZCApIHtcblxuICAgICAgICAgICAgdGhpcy5yYXljYXN0ID0gdGhpcy5vcmlnaW5hbFJheWNhc3Q7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5yYXljYXN0ID0gKCkgPT4ge307XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2RlbGF5PTBdIC0gRGVsYXkgdGltZSB0byBzaG93XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyAoIGRlbGF5ID0gMCApIHtcblxuICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBoaWRlQW5pbWF0aW9uLCBzaG93QW5pbWF0aW9uLCBtYXRlcmlhbCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBoaWRlQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNob3dBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIHRydWUgKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtkZWxheT0wXSAtIERlbGF5IHRpbWUgdG8gaGlkZVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGhpZGUgKCBkZWxheSA9IDAgKSB7XG5cbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwsIGVsZW1lbnQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIGhpZGVBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIGZhbHNlICk7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMDtcblxuICAgICAgICB9XG4gIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBmb2N1cyBldmVudCBoYW5kbGVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Rm9jdXNNZXRob2QgKCBldmVudCApIHtcblxuICAgICAgICBpZiAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLkhBTkRMRVJfRk9DVVMgPSBldmVudC5tZXRob2Q7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgY2FtZXJhIGNlbnRlciB0byB0aGlzIGluZm9zcG90XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZvY3VzICggZHVyYXRpb24sIGVhc2luZyApIHtcblxuICAgICAgICBpZiAoIHRoaXMuSEFORExFUl9GT0NVUyApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTKCB0aGlzLnBvc2l0aW9uLCBkdXJhdGlvbiwgZWFzaW5nICk7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcygpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlICgpIHtcblxuICAgICAgICBjb25zdCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBtYXAgfSA9IG1hdGVyaWFsO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyBtYXRlcmlhbC5tYXAgPSBudWxsOyB9XG4gICAgICAgIGlmICggZ2VvbWV0cnkgKSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgdGhpcy5nZW9tZXRyeSA9IG51bGw7IH1cbiAgICAgICAgaWYgKCBtYXRlcmlhbCApIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyB0aGlzLm1hdGVyaWFsID0gbnVsbDsgfVxuXG4gICAgfVxuXG5cblxufTtcblxuZXhwb3J0IHsgSW5mb3Nwb3QgfTsiLCJpbXBvcnQgeyBDT05UUk9MUywgTU9ERVMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFdpZGdldCBmb3IgY29udHJvbHNcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gQSBkb21FbGVtZW50IHdoZXJlIGRlZmF1bHQgY29udHJvbCB3aWRnZXQgd2lsbCBiZSBhdHRhY2hlZCB0b1xuICovXG5jbGFzcyBXaWRnZXQgZXh0ZW5kcyBUSFJFRS5FdmVudERpc3BhdGNoZXIge1xuXG4gICAgY29uc3RydWN0b3IoIGNvbnRhaW5lciApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKCAhY29udGFpbmVyICkge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdQQU5PTEVOUy5XaWRnZXQ6IE5vIGNvbnRhaW5lciBzcGVjaWZpZWQnICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OICA9ICdhbGwgMC4yN3MgZWFzZSc7XG4gICAgICAgIHRoaXMuVE9VQ0hfRU5BQkxFRCA9ICEhKCggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcbiAgICAgICAgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0dGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTWFpbkl0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZVN1Yk1lbnUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hc2sgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb250cm9sIGJhclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRDb250cm9sQmFyICgpIHtcblxuICAgICAgICBpZiAoICF0aGlzLmNvbnRhaW5lciApIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV2lkZ2V0IGNvbnRhaW5lciBub3Qgc2V0JyApOyBcbiAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLCBiYXIsIHN0eWxlVHJhbnNsYXRlLCBzdHlsZU9wYWNpdHksIGdyYWRpZW50U3R5bGU7XG5cbiAgICAgICAgZ3JhZGllbnRTdHlsZSA9ICdsaW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDAsMCwwLDAuMiksIHJnYmEoMCwwLDAsMCkpJztcblxuICAgICAgICBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICBiYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XG4gICAgICAgIGJhci5zdHlsZS5mbG9hdCA9ICdsZWZ0JztcbiAgICAgICAgYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGJhci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBiYXIuc3R5bGUubXNUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctd2Via2l0LScgKyBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctbW96LScgKyBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctby0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW1zLScgKyBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XG4gICAgICAgIGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBiYXIuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgYmFyLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJhci5pc0hpZGRlbiA9ICFiYXIuaXNIaWRkZW47XG4gICAgICAgICAgICBzdHlsZVRyYW5zbGF0ZSA9IGJhci5pc0hpZGRlbiA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDAlKSc7XG4gICAgICAgICAgICBzdHlsZU9wYWNpdHkgPSBiYXIuaXNIaWRkZW4gPyAwIDogMTtcbiAgICAgICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBiYXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYmFyLnN0eWxlLm1zVHJhbnNmb3JtID0gc3R5bGVUcmFuc2xhdGU7XG4gICAgICAgICAgICBiYXIuc3R5bGUub3BhY2l0eSA9IHN0eWxlT3BhY2l0eTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBNZW51XG4gICAgICAgIHZhciBtZW51ID0gdGhpcy5jcmVhdGVEZWZhdWx0TWVudSgpO1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gdGhpcy5jcmVhdGVNYWluTWVudSggbWVudSApO1xuICAgICAgICBiYXIuYXBwZW5kQ2hpbGQoIHRoaXMubWFpbk1lbnUgKTtcblxuICAgICAgICAvLyBNYXNrXG4gICAgICAgIHZhciBtYXNrID0gdGhpcy5jcmVhdGVNYXNrKCk7XG4gICAgICAgIHRoaXMubWFzayA9IG1hc2s7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBtYXNrICk7XG5cbiAgICAgICAgLy8gRGlzcG9zZVxuICAgICAgICBiYXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCApIHtcblxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5mdWxsc2NyZWVuRWxlbWVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuc2V0dGluZ0VsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLnNldHRpbmdFbGVtZW50ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLnZpZGVvRWxlbWVudCApIHtcblxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUudmlkZW9FbGVtZW50ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUudmlkZW9FbGVtZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBzY29wZS52aWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggYmFyICk7XG5cbiAgICAgICAgLy8gTWFzayBldmVudHNcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgc2NvcGUubWFzay5oaWRlKCk7XG4gICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudC5kZWFjdGl2YXRlKCk7XG5cbiAgICAgICAgfSwgZmFsc2UgKTtcblxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdjb250cm9sLWJhci10b2dnbGUnLCBiYXIudG9nZ2xlICk7XG5cbiAgICAgICAgdGhpcy5iYXJFbGVtZW50ID0gYmFyO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGRlZmF1bHQgbWVudVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVEZWZhdWx0TWVudSAoKSB7XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgaGFuZGxlcjtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKCBtZXRob2QsIGRhdGEgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IFxuXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgXG5cbiAgICAgICAgICAgICAgICB9ICk7IFxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnRyb2wnLCBcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuVE9VQ0hfRU5BQkxFRCA/ICdUb3VjaCcgOiAnTW91c2UnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuT1JCSVQgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZW5zb3InLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuREVWSUNFT1JJRU5UQVRJT04gKSBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9kZScsIFxuICAgICAgICAgICAgICAgIHN1Yk1lbnU6IFsgXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZGlzYWJsZUVmZmVjdCcgKVxuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5DQVJEQk9BUkQgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdGVyZW9zY29waWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUVmZmVjdCcsIE1PREVTLlNURVJFTyApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgXTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBidXR0b25zIG9uIHRvcCBvZiBjb250cm9sIGJhclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGNvbnRyb2wgYnV0dG9uIG5hbWUgdG8gYmUgY3JlYXRlZFxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRDb250cm9sQnV0dG9uICggbmFtZSApIHtcblxuICAgICAgICBsZXQgZWxlbWVudDtcblxuICAgICAgICBzd2l0Y2goIG5hbWUgKSB7XG5cbiAgICAgICAgY2FzZSAnZnVsbHNjcmVlbic6XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUZ1bGxzY3JlZW5CdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPSBlbGVtZW50OyBcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2V0dGluZyc6XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZVNldHRpbmdCdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd2aWRlbyc6XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbCgpO1xuICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYXJFbGVtZW50LmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbW9kYWwgbWFza1xuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVNYXNrICgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBlbGVtZW50LnNob3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtZW50LmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFNldHRpbmcgYnV0dG9uIHRvIHRvZ2dsZSBtZW51XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNyZWF0ZVNldHRpbmdCdXR0b24gKCkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW07XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBzY29wZS5tYWluTWVudS50b2dnbGUoKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2YXRlZCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5TZXR0aW5nICsgJ1wiKScsXG4gICAgICAgICAgICAgICAgd2Via2l0VHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT04sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT05cblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0uYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDAsMCwxLDkwZGVnKSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgICAgICBzY29wZS5tYXNrLnNob3coKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlM2QoMCwwLDAsMCknO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlLm1hc2suaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm1haW5NZW51ICYmIHNjb3BlLm1haW5NZW51LnZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS5oaWRlKCk7XG4gICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBzY29wZS5hY3RpdmVTdWJNZW51ICYmIHNjb3BlLmFjdGl2ZVN1Yk1lbnUudmlzaWJsZSApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmFjdGl2ZVN1Yk1lbnUuaGlkZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubWFpbk1lbnUgJiYgc2NvcGUubWFpbk1lbnUuX3dpZHRoICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUuY2hhbmdlU2l6ZSggc2NvcGUubWFpbk1lbnUuX3dpZHRoICk7XG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUudW5zbGlkZUFsbCgpO1xuXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hY3RpdmF0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBGdWxsc2NyZWVuIGJ1dHRvblxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgZnVsbHNjcmVlblxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgY3JlYXRlRnVsbHNjcmVlbkJ1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbSwgaXNGdWxsc2NyZWVuID0gZmFsc2UsIHRhcFNraXBwZWQgPSB0cnVlLCBzdHlsZXNoZWV0SWQ7XG5cbiAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXM7XG5cbiAgICAgICAgc3R5bGVzaGVldElkID0gJ3Bhbm9sZW5zLXN0eWxlLWFkZG9uJztcblxuICAgICAgICAvLyBEb24ndCBjcmVhdGUgYnV0dG9uIGlmIG5vIHN1cHBvcnRcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgICAgICAgJiYgXG4gICAgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkICYmXG4gICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkICAgICYmXG4gICAgIWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCAhaXNGdWxsc2NyZWVuICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuICkgeyBjb250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oIEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQgKTsgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiApIHsgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oICk7IH1cblxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcbiAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxuICAgICAgICAgICAgICAgIDogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKSc7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkNoYW5nZSAoKSB7XG5cbiAgICAgICAgICAgIGlmICggdGFwU2tpcHBlZCApIHtcblxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9ICFpc0Z1bGxzY3JlZW47IFxuXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAoIGlzRnVsbHNjcmVlbiApIFxuICAgICAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxuICAgICAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uV2luZG93UmVzaXplJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uV2luZG93UmVzaXplJyB9ICk7XG5cbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnTVNGdWxsc2NyZWVuQ2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJyBcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIEFkZCBmdWxsc2NyZWVuIHN0bHllIGlmIG5vdCBleGlzdHNcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc3R5bGVzaGVldElkICkgKSB7XG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcbiAgICAgICAgICAgIHNoZWV0LmlkID0gc3R5bGVzaGVldElkO1xuICAgICAgICAgICAgc2hlZXQuaW5uZXJIVE1MID0gJzotd2Via2l0LWZ1bGwtc2NyZWVuIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQgfSc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBzaGVldCApO1xuICAgICAgICB9XG4gIFxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBjb250cm9sIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIGNvbnRyb2xcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2wgKCkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpdGVtLnNob3cgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uaGlkZSA9IGZ1bmN0aW9uICgpIHsgXG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLnVwZGF0ZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2xCdXR0b24oKTtcbiAgICAgICAgaXRlbS5zZWVrQmFyID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2xTZWVrYmFyKCk7XG4gIFxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5zZWVrQmFyICk7XG5cbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xuXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uID0gbnVsbDtcblxuICAgICAgICAgICAgaXRlbS5zZWVrQmFyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGl0ZW0uc2Vla0JhciA9IG51bGw7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby1jb250cm9sLXNob3cnLCBpdGVtLnNob3cgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1oaWRlJywgaXRlbS5oaWRlICk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gY29udHJvbCBidXR0b25cbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBjb250cm9sXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvQ29udHJvbEJ1dHRvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndG9nZ2xlVmlkZW9QbGF5JyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3RvZ2dsZVZpZGVvUGxheScsIGRhdGE6ICF0aGlzLnBhdXNlZCB9ICk7XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcblxuICAgICAgICAgICAgc3R5bGU6IHsgXG5cbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuVmlkZW9QbGF5ICsgJ1wiKSdcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0ucGF1c2VkID0gdHJ1ZTtcblxuICAgICAgICBpdGVtLnVwZGF0ZSA9IGZ1bmN0aW9uICggcGF1c2VkICkge1xuXG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHBhdXNlZCAhPT0gdW5kZWZpbmVkID8gcGF1c2VkIDogdGhpcy5wYXVzZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyAoIHRoaXMucGF1c2VkIFxuICAgICAgICAgICAgICAgID8gRGF0YUltYWdlLlZpZGVvUGxheSBcbiAgICAgICAgICAgICAgICA6IERhdGFJbWFnZS5WaWRlb1BhdXNlICkgKyAnXCIpJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIHNlZWtiYXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBzZWVrYmFyXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvQ29udHJvbFNlZWtiYXIgKCkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW0sIHByb2dyZXNzRWxlbWVudCwgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCxcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZSwgbW91c2VYLCBwZXJjZW50YWdlTm93LCBwZXJjZW50YWdlTmV4dDtcblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS53aWR0aCA9ICcxNHB4JztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSg3cHgsIC01cHgpJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RkZCc7XG5cbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvbk1vdXNlRG93biwgIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZURvd24gKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgIG1vdXNlWCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XG5cbiAgICAgICAgICAgIHBlcmNlbnRhZ2VOb3cgPSBwYXJzZUludCggcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoICkgLyAxMDA7XG5cbiAgICAgICAgICAgIGFkZENvbnRyb2xMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sRHJhZyAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiggaXNEcmFnZ2luZyApe1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XG4gICAgICBcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9ICggY2xpZW50WCAtIG1vdXNlWCApIC8gaXRlbS5jbGllbnRXaWR0aDtcblxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gcGVyY2VudGFnZU5vdyArIHBlcmNlbnRhZ2VOZXh0O1xuXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSBwZXJjZW50YWdlTmV4dCA+IDEgPyAxIDogKCAoIHBlcmNlbnRhZ2VOZXh0IDwgMCApID8gMCA6IHBlcmNlbnRhZ2VOZXh0ICk7XG5cbiAgICAgICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzICggcGVyY2VudGFnZU5leHQgKTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdzZXRWaWRlb0N1cnJlbnRUaW1lJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gUGVyY2VudGFnZSBvZiBjdXJyZW50IHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFZpZGVvQ3VycmVudFRpbWUnLCBkYXRhOiBwZXJjZW50YWdlTmV4dCB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25WaWRlb0NvbnRyb2xTdG9wICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkQ29udHJvbExpc3RlbmVycyAoKSB7XG5cbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25WaWRlb0NvbnRyb2xTdG9wLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25WaWRlb0NvbnRyb2xTdG9wLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMgKCkge1xuXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uVmlkZW9Db250cm9sU3RvcCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVmlkZW9Db250cm9sU3RvcCwgZmFsc2UgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldCA9PT0gcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDAgKVxuICAgICAgICAgICAgICAgID8gKCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICkgLyB0aGlzLmNsaWVudFdpZHRoXG4gICAgICAgICAgICAgICAgOiBldmVudC5vZmZzZXRYIC8gdGhpcy5jbGllbnRXaWR0aDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnc2V0VmlkZW9DdXJyZW50VGltZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gUGVyY2VudGFnZSBvZiBjdXJyZW50IHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRWaWRlb0N1cnJlbnRUaW1lJywgZGF0YTogcGVyY2VudGFnZSB9ICk7XG5cbiAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MoIGV2ZW50Lm9mZnNldFggLyB0aGlzLmNsaWVudFdpZHRoICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBvbkRpc3Bvc2UgKCkge1xuXG4gICAgICAgICAgICByZW1vdmVDb250cm9sTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5hcHBlbmRDaGlsZCggcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCApO1xuXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHtcblxuICAgICAgICAgICAgc3R5bGU6IHsgXG5cbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0cHgnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTg4LDE4OCwxODgsMC44KSdcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwLFxuICAgICAgICAgICAgb25EaXNwb3NlOiBvbkRpc3Bvc2VcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggcHJvZ3Jlc3NFbGVtZW50ICk7XG5cbiAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uKCBwZXJjZW50YWdlICkge1xuXG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggPSBwZXJjZW50YWdlICogMTAwICsgJyUnO1xuXG4gICAgICAgIH07XHRcdFxuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXVwZGF0ZScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IFxuXG4gICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKCBldmVudC5wZXJjZW50YWdlICk7IFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpdGVtLnByb2dyZXNzRWxlbWVudCA9IHByb2dyZXNzRWxlbWVudDtcbiAgICAgICAgaXRlbS5wcm9ncmVzc0VsZW1lbnRDb250cm9sID0gcHJvZ3Jlc3NFbGVtZW50Q29udHJvbDtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51SXRlbSAoIHRpdGxlICkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpczsgXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpdGVtLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgIGl0ZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xuXG4gICAgICAgIGl0ZW0uc2xpZGUgPSBmdW5jdGlvbiAoIHJpZ2h0ICkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoIHJpZ2h0ID8gJycgOiAnLScgKSArICcxMDAlKSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLnVuc2xpZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5zZXRJY29uID0gZnVuY3Rpb24gKCB1cmwgKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5pY29uICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHVybCArICcpJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5zZXRTZWxlY3Rpb25UaXRsZSA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5zZWxlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiA9IGZ1bmN0aW9uICggbmFtZSApIHtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnMzAwJztcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25UaXRsZSggbmFtZSApO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggc2VsZWN0aW9uICk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWRkSWNvbiA9IGZ1bmN0aW9uICggdXJsID0gRGF0YUltYWdlLkNoZXZyb25SaWdodCwgbGVmdCA9IGZhbHNlLCBmbGlwID0gZmFsc2UgKSB7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZsb2F0ID0gbGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzE3cHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTdweCc7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlWyAnbWFyZ2luJyArICggbGVmdCA/ICdSaWdodCcgOiAnTGVmdCcgKSBdID0gJzEycHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgICAgICAgICAgIGlmICggZmxpcCApIHtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooMTgwZGVnKSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pY29uID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbiggdXJsICk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hZGRTdWJNZW51ID0gZnVuY3Rpb24gKCB0aXRsZSwgaXRlbXMgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3ViTWVudSA9IHNjb3BlLmNyZWF0ZVN1Yk1lbnUoIHRpdGxlLCBpdGVtcyApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcblxuICAgICAgICB9LCBmYWxzZSApO1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmFmYWZhJztcblxuICAgICAgICB9LCBmYWxzZSApO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1lbnUgaXRlbSBoZWFkZXJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51SXRlbUhlYWRlciAoIHRpdGxlICkge1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY3JlYXRlTWVudUl0ZW0oIHRpdGxlICk7XG5cbiAgICAgICAgaGVhZGVyLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgIzMzMyc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzE1cHgnO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbWFpbiBtZW51XG4gICAgICogQHBhcmFtICB7YXJyYXl9IG1lbnVzIC0gTWVudSBhcnJheSBsaXN0XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgc3BhbiBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlTWFpbk1lbnUgKCBtZW51cyApIHtcbiAgXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIG1lbnUgPSB0aGlzLmNyZWF0ZU1lbnUoKTtcblxuICAgICAgICBtZW51Ll93aWR0aCA9IDIwMDtcbiAgICAgICAgbWVudS5jaGFuZ2VTaXplKCBtZW51Ll93aWR0aCApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgbGV0IG1haW5NZW51ID0gc2NvcGUubWFpbk1lbnUsIHN1Yk1lbnUgPSB0aGlzLnN1Yk1lbnU7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTmV4dFRpY2sgKCkge1xuXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuY2hhbmdlU2l6ZSggc3ViTWVudS5jbGllbnRXaWR0aCApO1xuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2hvdygpO1xuICAgICAgICAgICAgICAgIHN1Yk1lbnUudW5zbGlkZUFsbCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW5NZW51LmhpZGUoKTtcbiAgICAgICAgICAgIG1haW5NZW51LnNsaWRlQWxsKCk7XG4gICAgICAgICAgICBtYWluTWVudS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKCBzdWJNZW51ICk7XG5cbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZU1haW5JdGVtID0gdGhpcztcbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZVN1Yk1lbnUgPSBzdWJNZW51O1xuXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvbk5leHRUaWNrICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBtZW51cy5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBtZW51LmFkZEl0ZW0oIG1lbnVzWyBpIF0udGl0bGUgKTtcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcyMHB4JztcblxuICAgICAgICAgICAgaXRlbS5hZGRJY29uKClcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcblxuICAgICAgICAgICAgaWYgKCBtZW51c1sgaSBdLnN1Yk1lbnUgJiYgbWVudXNbIGkgXS5zdWJNZW51Lmxlbmd0aCA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBtZW51c1sgaSBdLnN1Yk1lbnVbIDAgXS50aXRsZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkU2VsZWN0aW9uKCB0aXRsZSApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTdWJNZW51KCBtZW51c1sgaSBdLnRpdGxlLCBtZW51c1sgaSBdLnN1Yk1lbnUgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVudTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzdWIgbWVudVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFN1YiBtZW51IHRpdGxlXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXMgLSBJdGVtIGFycmF5IGxpc3RcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVTdWJNZW51ICggdGl0bGUsIGl0ZW1zICkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIG1lbnUsIHN1Yk1lbnUgPSB0aGlzLmNyZWF0ZU1lbnUoKTtcblxuICAgICAgICBzdWJNZW51Lml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHN1Yk1lbnUuYWN0aXZlSXRlbSA9IG51bGw7XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBtZW51ID0gc2NvcGUubWFpbk1lbnU7XG4gICAgICAgICAgICBtZW51LmNoYW5nZVNpemUoIG1lbnUuX3dpZHRoICk7XG4gICAgICAgICAgICBtZW51LnVuc2xpZGVBbGwoKTtcbiAgICAgICAgICAgIG1lbnUuc2hvdygpO1xuICAgICAgICAgICAgc3ViTWVudS5zbGlkZUFsbCggdHJ1ZSApO1xuICAgICAgICAgICAgc3ViTWVudS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy50eXBlICE9PSAnaGVhZGVyJyApIHtcblxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggdGhpcyApO1xuICAgICAgICAgICAgICAgIHNjb3BlLmFjdGl2ZU1haW5JdGVtLnNldFNlbGVjdGlvblRpdGxlKCB0aGlzLnRleHRDb250ZW50ICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaGFuZGxlciApIHsgdGhpcy5oYW5kbGVyKCk7IH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJNZW51LmFkZEhlYWRlciggdGl0bGUgKS5hZGRJY29uKCB1bmRlZmluZWQsIHRydWUsIHRydWUgKS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3ViTWVudS5hZGRJdGVtKCBpdGVtc1sgaSBdLnRpdGxlICk7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZm9udFdlaWdodCA9IDMwMDtcbiAgICAgICAgICAgIGl0ZW0uaGFuZGxlciA9IGl0ZW1zWyBpIF0uaGFuZGxlcjtcbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbiggJyAnLCB0cnVlICk7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgICAgIGlmICggIXN1Yk1lbnUuYWN0aXZlSXRlbSApIHtcblxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcblxuICAgICAgICByZXR1cm4gc3ViTWVudTtcbiAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGdlbmVyYWwgbWVudVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1lbnUgKCkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICBjb25zdCBzdHlsZSA9IG1lbnUuc3R5bGU7XG5cbiAgICAgICAgc3R5bGUucGFkZGluZyA9ICc1cHggMCc7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc3R5bGUuYm90dG9tID0gJzEwMCUnO1xuICAgICAgICBzdHlsZS5yaWdodCA9ICcxNHB4JztcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmYWZhZmEnO1xuICAgICAgICBzdHlsZS5mb250RmFtaWx5ID0gJ0hlbHZldGljYSBOZXVlJztcbiAgICAgICAgc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XG4gICAgICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMTJwdCByZ2JhKDAsMCwwLDAuMjUpJztcbiAgICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gJzJweCc7XG4gICAgICAgIHN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHN0eWxlLndpbGxDaGFuZ2UgPSAnd2lkdGgsIGhlaWdodCwgb3BhY2l0eSc7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcblxuICAgICAgICBtZW51LnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBtZW51LmNoYW5nZVNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICAgICAgICAgIGlmICggd2lkdGggKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggaGVpZ2h0ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnNob3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5oaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMudmlzaWJsZSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuc2xpZGVBbGwgPSBmdW5jdGlvbiAoIHJpZ2h0ICkge1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZW51LmNoaWxkcmVuLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgICAgICAgICBpZiAoIG1lbnUuY2hpbGRyZW5bIGkgXS5zbGlkZSApIHtcblxuICAgICAgICAgICAgICAgICAgICBtZW51LmNoaWxkcmVuWyBpIF0uc2xpZGUoIHJpZ2h0ICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUudW5zbGlkZUFsbCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVudS5jaGlsZHJlbi5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51LmNoaWxkcmVuWyBpIF0udW5zbGlkZSApIHtcblxuICAgICAgICAgICAgICAgICAgICBtZW51LmNoaWxkcmVuWyBpIF0udW5zbGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LmFkZEhlYWRlciA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHNjb3BlLmNyZWF0ZU1lbnVJdGVtSGVhZGVyKCB0aXRsZSApO1xuICAgICAgICAgICAgaGVhZGVyLnR5cGUgPSAnaGVhZGVyJztcblxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggaGVhZGVyICk7XG5cbiAgICAgICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LmFkZEl0ZW0gPSBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc2NvcGUuY3JlYXRlTWVudUl0ZW0oIHRpdGxlICk7XG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAnaXRlbSc7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGl0ZW0gKTtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnNldEFjdGl2ZUl0ZW0gPSBmdW5jdGlvbiAoIGl0ZW0gKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5hY3RpdmVJdGVtICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEljb24oICcgJyApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uc2V0SWNvbiggRGF0YUltYWdlLkNoZWNrICk7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcblxuICAgICAgICByZXR1cm4gbWVudTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjdXN0b20gaXRlbSBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvblxuICAgICAqL1xuICAgIGNyZWF0ZUN1c3RvbUl0ZW0gKCBvcHRpb25zID0ge30gKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICBjb25zdCB7IG9uRGlzcG9zZSB9ID0gb3B0aW9ucztcblxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzYwJSc7XG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBpdGVtLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcbiAgaXRlbS5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXG4gIGl0ZW0uc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgaXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcblxuICAgICAgICAvLyBXaGl0ZSBnbG93IG9uIGljb25cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZmlsdGVyID0gXG4gICAgaXRlbS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDI1NSwyNTUsMjU1LDEpKSc7XG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxuICAgIGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJyc7XG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLm1lcmdlU3R5bGVPcHRpb25zKCBpdGVtLCBvcHRpb25zLnN0eWxlICk7XG5cbiAgICAgICAgaWYgKCBvcHRpb25zLm9uVGFwICkge1xuXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcblxuICAgICAgICAgICAgaWYgKCBvbkRpc3Bvc2UgKSB7IG9wdGlvbnMub25EaXNwb3NlKCk7IH1cblxuICAgICAgICB9O1xuICBcbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBpdGVtIGNzcyBzdHlsZVxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbWVyZ2VkIHdpdGggc3R5bGVcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgc3R5bGUgb3B0aW9uc1xuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgc2FtZSBlbGVtZW50IHdpdGggbWVyZ2VkIHN0eWxlc1xuICAgICAqL1xuICAgIG1lcmdlU3R5bGVPcHRpb25zICggZWxlbWVudCwgb3B0aW9ucyA9IHt9ICkge1xuXG4gICAgICAgIGZvciAoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb25zICl7XG5cbiAgICAgICAgICAgIGlmICggb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSggcHJvcGVydHkgKSApIHtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbIHByb3BlcnR5IF0gPSBvcHRpb25zWyBwcm9wZXJ0eSBdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB3aWRnZXRzIGJ5IGRldGFjaGluZyBkb20gZWxlbWVudHMgZnJvbSBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmJhckVsZW1lbnQgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5iYXJFbGVtZW50ICk7XG4gICAgICAgICAgICB0aGlzLmJhckVsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5iYXJFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgV2lkZ2V0IH07IiwiaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcblxuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQmFzZSBQYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1RIUkVFLkdlb21ldHJ5fSBnZW9tZXRyeSAtIFRoZSBnZW9tZXRyeSBmb3IgdGhpcyBwYW5vcmFtYVxuICogQHBhcmFtIHtUSFJFRS5NYXRlcmlhbH0gbWF0ZXJpYWwgLSBUaGUgbWF0ZXJpYWwgZm9yIHRoaXMgcGFub3JhbWFcbiAqL1xuY2xhc3MgUGFub3JhbWEgZXh0ZW5kcyBUSFJFRS5NZXNoIHtcbiAgICBjb25zdHJ1Y3RvcihnZW9tZXRyeSwgbWF0ZXJpYWwpIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAncGFub3JhbWEnO1xuXG4gICAgICAgIHRoaXMuSW1hZ2VRdWFsaXR5TG93ID0gMTtcbiAgICAgICAgdGhpcy5JbWFnZVF1YWxpdHlGYWlyID0gMjtcbiAgICAgICAgdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW0gPSAzO1xuICAgICAgICB0aGlzLkltYWdlUXVhbGl0eUhpZ2ggPSA0O1xuICAgICAgICB0aGlzLkltYWdlUXVhbGl0eVN1cGVySGlnaCA9IDU7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IDEwMDA7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0SW5mb3Nwb3RTaXplID0gMzUwO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5saW5rZWRTcG90cyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVVSTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5CYWNrU2lkZTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLnNjYWxlLnggKj0gLTE7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXIgPSAtMTtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4odGhpcykudG8oe30sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmZhZGVJbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLnNldENvbnRhaW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLnNldHVwVHJhbnNpdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhZGQob2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IGludmVydGVkT2JqZWN0O1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoYXJndW1lbnRzW2ldKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gY2FzZSBvZiBpbmZvc3BvdHNcbiAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90KSB7XG5cbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICBpZiAob2JqZWN0LmRpc3BhdGNoRXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikgeyBvYmplY3QuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXIgfSk7IH1cblxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhbm9sZW5zLWluZm9zcG90LWZvY3VzJywgbWV0aG9kOiBmdW5jdGlvbiAodmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSW5mb3Nwb3QgZm9jdXMgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd0d2VlbkNvbnRyb2xDZW50ZXInLCBkYXRhOiBbdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nXSB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIENvdW50ZXIgc2NhbGUueCA9IC0xIGVmZmVjdFxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlLnggPSAtMTtcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlUGxhY2VIb2xkZXIgPSB0cnVlO1xuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QuYWRkKG9iamVjdCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFRIUkVFLk9iamVjdDNELnByb3RvdHlwZS5hZGQuY2FsbCh0aGlzLCBpbnZlcnRlZE9iamVjdCk7XG5cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBldmVudCBoYW5kbGVyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIENsaWNrIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIEluZm9zcG90I2Rpc21pc3NcbiAgICAgKi9cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LmludGVyc2VjdHMgJiYgZXZlbnQuaW50ZXJzZWN0cy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgdGhpcy50cmF2ZXJzZShmdW5jdGlvbiAob2JqZWN0KSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBEaW1pc3MgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNkaXNtaXNzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnZGlzbWlzcycgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYSBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG9iamVjdH0gZGF0YSAtIERhdGEgd2l0aCBjb250YWluZXIgaW5mb3JtYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXG4gICAgICovXG4gICAgc2V0Q29udGFpbmVyKGRhdGEpIHtcblxuICAgICAgICBsZXQgY29udGFpbmVyO1xuXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5jb250YWluZXIpIHtcblxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSW5mb3Nwb3QgJiYgY2hpbGQuZGlzcGF0Y2hFdmVudCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgY29udGFpbmVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIHBhbm9yYW1hXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lcjogY29udGFpbmVyIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGxvYWRlZFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNsb2FkXG4gICAgICovXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCBwYW5vcmFtYSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2xvYWQnIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGluIHByb2dyZXNzXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Byb2dyZXNzXG4gICAgICovXG4gICAgb25Qcm9ncmVzcyhwcm9ncmVzcykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkaW5nIHBhbm9yYW1hIHByb2dyZXNzIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwcm9ncmVzc1xuICAgICAgICAgKiBAcHJvcGVydHkge29iamVjdH0gcHJvZ3Jlc3MgLSBUaGUgcHJvZ3Jlc3Mgb2JqZWN0IGNvbnRhaW5pbmcgbG9hZGVkIGFuZCB0b3RhbCBhbW91bnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdwcm9ncmVzcycsIHByb2dyZXNzOiBwcm9ncmVzcyB9KTtcblxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgbG9hZGluZyBoYXMgZXJyb3JcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZXJyb3JcbiAgICAgKi9cbiAgICBvbkVycm9yKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkaW5nIHBhbm9yYW1hIGVycm9yIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlcnJvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2Vycm9yJyB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB6b29tIGxldmVsIGJhc2VkIG9uIHdpbmRvdyB3aWR0aFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gem9vbSBsZXZlbCBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHlcbiAgICAgKi9cbiAgICBnZXRab29tTGV2ZWwoKSB7XG5cbiAgICAgICAgbGV0IHpvb21MZXZlbDtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gODAwKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5RmFpcjtcblxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEyODApIHtcblxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW07XG5cbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyODAgJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTkyMCkge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUhpZ2g7XG5cbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE5MjApIHtcblxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlTdXBlckhpZ2g7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlMb3c7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB6b29tTGV2ZWw7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGV4dHVyZSBvZiBhIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIC0gVGV4dHVyZSB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdXBkYXRlVGV4dHVyZSh0ZXh0dXJlKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGluZm9zcG90cyBpbiB0aGlzIHBhbm9yYW1hXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNWaXNpYmxlIC0gVmlzaWJpbGl0eSBvZiBpbmZvc3BvdHNcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIGNoYW5nZSB2aXNpYmlsaXR5XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZVxuICAgICAqL1xuICAgIHRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eShpc1Zpc2libGUsIGRlbGF5KSB7XG5cbiAgICAgICAgZGVsYXkgPSAoZGVsYXkgIT09IHVuZGVmaW5lZCkgPyBkZWxheSA6IDA7XG5cbiAgICAgICAgY29uc3QgdmlzaWJsZSA9IChpc1Zpc2libGUgIT09IHVuZGVmaW5lZCkgPyBpc1Zpc2libGUgOiAodGhpcy5pc0luZm9zcG90VmlzaWJsZSA/IGZhbHNlIDogdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZShmdW5jdGlvbiAob2JqZWN0KSB7XG5cbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc2hvdyhkZWxheSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5oaWRlKGRlbGF5KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSB2aXNpYmxlO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbXBsZXRlIHRvZ2dsaW5nIGluZm9zcG90IHZpc2liaWxpdHlcbiAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlJywgdmlzaWJsZTogdmlzaWJsZSB9KTtcblxuICAgICAgICB9LmJpbmQodGhpcykpLmRlbGF5KGRlbGF5KS5zdGFydCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGltYWdlIG9mIHRoaXMgcGFub3JhbWEncyBsaW5raW5nIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgIC0gVXJsIHRvIHRoZSBpbWFnZSBhc3NldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSAtIFNjYWxlIGZhY3RvciBvZiB0aGUgaW5mb3Nwb3RcbiAgICAgKi9cbiAgICBzZXRMaW5raW5nSW1hZ2UodXJsLCBzY2FsZSkge1xuXG4gICAgICAgIHRoaXMubGlua2luZ0ltYWdlVVJMID0gdXJsO1xuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVNjYWxlID0gc2NhbGU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW5rIG9uZS13YXkgcGFub3JhbWFcbiAgICAgKiBAcGFyYW0gIHtQYW5vcmFtYX0gcGFubyAgLSBUaGUgcGFub3JhbWEgdG8gYmUgbGlua2VkIHRvXG4gICAgICogQHBhcmFtICB7VEhSRUUuVmVjdG9yM30gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgaW5mb3Nwb3Qgd2hpY2ggbmF2aWdhdGVzIHRvIHRoZSBwYW5vXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbaW1hZ2VTY2FsZT0zMDBdIC0gSW1hZ2Ugc2NhbGUgb2YgbGlua2VkIGluZm9zcG90XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBbaW1hZ2VTcmM9RGF0YUltYWdlLkFycm93XSAtIFRoZSBpbWFnZSBzb3VyY2Ugb2YgbGlua2VkIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbGluayhwYW5vLCBwb3NpdGlvbiwgaW1hZ2VTY2FsZSwgaW1hZ2VTcmMpIHtcblxuICAgICAgICBsZXQgc2NhbGUsIGltZztcblxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIGlmICghcG9zaXRpb24pIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdQbGVhc2Ugc3BlY2lmeSBpbmZvc3BvdCBwb3NpdGlvbiBmb3IgbGlua2luZycpO1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZm9zcG90IHNjYWxlXG4gICAgICAgIGlmIChpbWFnZVNjYWxlICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgc2NhbGUgPSBpbWFnZVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocGFuby5saW5raW5nSW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIHNjYWxlID0gcGFuby5saW5raW5nSW1hZ2VTY2FsZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBzY2FsZSA9IDMwMDtcblxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBJbmZvc3BvdCBpbWFnZVxuICAgICAgICBpZiAoaW1hZ2VTcmMpIHtcblxuICAgICAgICAgICAgaW1nID0gaW1hZ2VTcmM7XG5cbiAgICAgICAgfSBlbHNlIGlmIChwYW5vLmxpbmtpbmdJbWFnZVVSTCkge1xuXG4gICAgICAgICAgICBpbWcgPSBwYW5vLmxpbmtpbmdJbWFnZVVSTDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpbWcgPSBEYXRhSW1hZ2UuQXJyb3c7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5mb3Nwb3RcbiAgICAgICAgY29uc3Qgc3BvdCA9IG5ldyBJbmZvc3BvdChzY2FsZSwgaW1nKTtcbiAgICAgICAgc3BvdC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcbiAgICAgICAgc3BvdC50b1Bhbm9yYW1hID0gcGFubztcbiAgICAgICAgc3BvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRQYW5vcmFtYScsIGRhdGE6IHBhbm8gfSk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmxpbmtlZFNwb3RzLnB1c2goc3BvdCk7XG5cbiAgICAgICAgdGhpcy5hZGQoc3BvdCk7XG5cbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICByZXNldCgpIHtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XG5cbiAgICB9XG5cbiAgICBzZXR1cFRyYW5zaXRpb25zKCkge1xuXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKHRoaXMubWF0ZXJpYWwpXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFydGljLk91dClcbiAgICAgICAgICAgIC5vblN0YXJ0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGZhZGUgaW4gc3RhcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItZmFkZS1zdGFydFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlbnRlci1mYWRlLXN0YXJ0JyB9KTtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4odGhpcy5tYXRlcmlhbClcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0KVxuICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGNvbXBsZXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2xlYXZlLWNvbXBsZXRlJyB9KTtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbih0aGlzKVxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQpXG4gICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIGNvbXBsZXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2VudGVyLWNvbXBsZXRlJyB9KTtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24gPSBuZXcgVFdFRU4uVHdlZW4odGhpcylcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0KTtcblxuICAgIH1cbiAgICBvbkZhZGVBbmltYXRpb25VcGRhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLm1hdGVyaWFsLm9wYWNpdHk7XG4gICAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWF0ZXJpYWw7XG5cbiAgICAgICAgaWYgKHVuaWZvcm1zICYmIHVuaWZvcm1zLm9wYWNpdHkpIHtcbiAgICAgICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgZmFkaW5nIGluIGFuaW1hdGlvblxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlci1mYWRlLWNvbXBsZXRlXG4gICAgICovXG4gICAgZmFkZUluKGR1cmF0aW9uKSB7XG5cbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiA+PSAwID8gZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uXG4gICAgICAgICAgICAudG8oeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uKVxuICAgICAgICAgICAgLm9uVXBkYXRlKHRoaXMub25GYWRlQW5pbWF0aW9uVXBkYXRlLmJpbmQodGhpcykpXG4gICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSh0cnVlLCBkdXJhdGlvbiAvIDIpO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZmFkZSBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1mYWRlLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2VudGVyLWZhZGUtY29tcGxldGUnIH0pO1xuXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGZhZGluZyBvdXQgYW5pbWF0aW9uXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZmFkZU91dChkdXJhdGlvbikge1xuXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gPj0gMCA/IGR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvblxuICAgICAgICAgICAgLnRvKHsgb3BhY2l0eTogMCB9LCBkdXJhdGlvbilcbiAgICAgICAgICAgIC5vblVwZGF0ZSh0aGlzLm9uRmFkZUFuaW1hdGlvblVwZGF0ZS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gZW50ZXJpbmcgYSBwYW5vcmFtYSBcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXItc3RhcnRcbiAgICAgKi9cbiAgICBvbkVudGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgICAudG8oe30sIGR1cmF0aW9uKVxuICAgICAgICAgICAgLm9uU3RhcnQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBzdGFydGluZyBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1zdGFydFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlbnRlci1zdGFydCcgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVJbihkdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZXZlbnRcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2VudGVyJyB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXG4gICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Bhbm9yYW1hLWVudGVyJyB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gbGVhdmluZyBhIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2xlYXZlXG4gICAgICovXG4gICAgb25MZWF2ZSgpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvblxuICAgICAgICAgICAgLnRvKHt9LCBkdXJhdGlvbilcbiAgICAgICAgICAgIC5vblN0YXJ0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gc3RhcnRpbmcgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbGVhdmUtc3RhcnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnbGVhdmUtc3RhcnQnIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0KGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eShmYWxzZSk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBldmVudFxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbGVhdmVcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnbGVhdmUnIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cbiAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncGFub3JhbWEtbGVhdmUnIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSgpIHtcblxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uLnN0b3AoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT24gcGFub3JhbWEgZGlzcG9zZSBoYW5kbGVyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcbiAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uUGFub3JhbWFEaXNwb3NlJywgZGF0YTogdGhpcyB9KTtcblxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlKG9iamVjdCkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gb2JqZWN0LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKG9iamVjdC5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZShvYmplY3QuY2hpbGRyZW5baV0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCkge1xuXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkpIHsgZ2VvbWV0cnkuZGlzcG9zZSgpOyBvYmplY3QuZ2VvbWV0cnkgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyBvYmplY3QubWF0ZXJpYWwgPSBudWxsOyB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG5cbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSh0aGlzKTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEVxdWlyZWN0YW5ndWxhciBiYXNlZCBpbWFnZSBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSB1cmwgb3IgSFRNTEltYWdlRWxlbWVudFxuICovXG5jbGFzcyBJbWFnZVBhbm9yYW1hIGV4dGVuZHMgUGFub3JhbWEge1xuICAgIGNvbnN0cnVjdG9yKCBpbWFnZSwgX2dlb21ldHJ5LCBfbWF0ZXJpYWwgKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gX2dlb21ldHJ5IHx8IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBfbWF0ZXJpYWwgfHwgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLnNyYyA9IGltYWdlO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBsb2FkICggc3JjICkge1xuXG4gICAgICAgIHNyYyA9IHNyYyB8fCB0aGlzLnNyYztcblxuICAgICAgICBpZiAoICFzcmMgKSB7IFxuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdJbWFnZSBzb3VyY2UgdW5kZWZpbmVkJyApO1xuXG4gICAgICAgICAgICByZXR1cm47IFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBUZXh0dXJlTG9hZGVyLmxvYWQoIHNyYywgdGhpcy5vbkxvYWQuYmluZCggdGhpcyApLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApLCB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc3JjIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5vbkxvYWQoIG5ldyBUSFJFRS5UZXh0dXJlKCBzcmMgKSApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbWFnZSBpcyBsb2FkZWRcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIC0gVGV4dHVyZSB0byBiZSB1cGRhdGVkXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkxvYWQoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB0ZXh0dXJlICk7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5iaW5kKCB0aGlzICkgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0XG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldCgpIHtcblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSgpIHtcblxuICAgICAgICBjb25zdCB7IG1hdGVyaWFsOiB7IG1hcCB9IH0gPSB0aGlzO1xuXG4gICAgICAgIC8vIFJlbGVhc2UgY2FjaGVkIGltYWdlXG4gICAgICAgIFRIUkVFLkNhY2hlLnJlbW92ZSggdGhpcy5zcmMgKTtcblxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgfVxuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IHsgSW1hZ2VQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBFbXB0eSBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEVtcHR5UGFub3JhbWEgZXh0ZW5kcyBQYW5vcmFtYSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwMDAwMCwgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoKSwgMSApICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbXB0eVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcbmltcG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBDdWJlbWFwLWJhc2VkIHBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7YXJyYXl9IGltYWdlcyAtIEFycmF5IG9mIDYgdXJscyB0byBpbWFnZXMsIG9uZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBDdWJlVGV4dHVyZS4gVGhlIHVybHMgc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiBwb3MteCwgbmVnLXgsIHBvcy15LCBuZWcteSwgcG9zLXosIG5lZy16XG4gKi9cbmNsYXNzIEN1YmVQYW5vcmFtYSBleHRlbmRzIFBhbm9yYW1hIHtcbiAgICBjb25zdHJ1Y3RvciAoIGltYWdlcyA9IFtdICkge1xuXG4gICAgICAgIGNvbnN0IGVkZ2VMZW5ndGggPSAxMDAwMDtcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gT2JqZWN0LmFzc2lnbigge30sIFRIUkVFLlNoYWRlckxpYlsgJ2N1YmUnIF0gKTtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGggKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcbiAgICAgICAgICAgIHVuaWZvcm1zOiBzaGFkZXIudW5pZm9ybXMsXG4gICAgICAgICAgICBzaWRlOiBUSFJFRS5CYWNrU2lkZSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgICAgIHRoaXMuZWRnZUxlbmd0aCA9IGVkZ2VMZW5ndGg7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDA7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFuZCBiaW5kIGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkICgpIHtcblxuICAgICAgICBDdWJlVGV4dHVyZUxvYWRlci5sb2FkKCBcdFxuXG4gICAgICAgICAgICB0aGlzLmltYWdlcywgXG5cbiAgICAgICAgICAgIHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKSwgXG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApLCBcbiAgICAgICAgICAgIHRoaXMub25FcnJvci5iaW5kKCB0aGlzICkgXG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiA2IHRleHR1cmVzIGFyZSByZWFkeVxuICAgICAqIEBwYXJhbSAge1RIUkVFLkN1YmVUZXh0dXJlfSB0ZXh0dXJlIC0gQ3ViZSB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTG9hZCAoIHRleHR1cmUgKSB7XG5cdFx0XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0Q3ViZScgXS52YWx1ZSA9IHRleHR1cmU7XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UgKCkge1x0XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50Q3ViZTtcblxuICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKCAoIGltYWdlICkgPT4geyBUSFJFRS5DYWNoZS5yZW1vdmUoIGltYWdlICk7IH0gKTtcblxuICAgICAgICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgVEhSRUUuQ3ViZVRleHR1cmUgKSB7XG5cbiAgICAgICAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxufVxuXG5leHBvcnQgeyBDdWJlUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBDdWJlUGFub3JhbWEgfSBmcm9tICcuL0N1YmVQYW5vcmFtYSc7XG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQmFzaWMgcGFub3JhbWEgd2l0aCA2IHByZS1kZWZpbmVkIGdyaWQgaW1hZ2VzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQmFzaWNQYW5vcmFtYSBleHRlbmRzIEN1YmVQYW5vcmFtYSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW107XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjsgaSsrICkge1xuICAgICAgICAgICAgaW1hZ2VzLnB1c2goIERhdGFJbWFnZS5XaGl0ZVRpbGUgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgQmFzaWNQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBWaWRlbyBQYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gRXF1aXJlY3Rhbmd1bGFyIHZpZGVvIHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbiBmb3IgdmlkZW8gc2V0dGluZ3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLnZpZGVvRWxlbWVudF0gLSBIVE1MNSB2aWRlbyBlbGVtZW50IGNvbnRhaW5zIHRoZSB2aWRlb1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sb29wPXRydWVdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGxvb3AgaW4gdGhlIGVuZFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5tdXRlZD10cnVlXSAtIE11dGUgdGhlIHZpZGVvIG9yIG5vdC4gTmVlZCB0byBiZSB0cnVlIGluIG9yZGVyIHRvIGF1dG9wbGF5IG9uIHNvbWUgYnJvd3NlcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGF1dG8gcGxheVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wbGF5c2lubGluZT10cnVlXSAtIFNwZWNpZnkgaWYgdmlkZW8gc2hvdWxkIHBsYXkgaW5saW5lIGZvciBpT1MuIElmIHlvdSB3YW50IGl0IHRvIGF1dG8gcGxheSBpbmxpbmUsIHNldCBib3RoIGF1dG9wbGF5IGFuZCBtdXRlZCBvcHRpb25zIHRvIHRydWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1cImFub255bW91c1wiXSAtIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgZm9yIHRoZSB2aWRlbywgd2hpY2ggYWxsb3dzIGZvciBjcm9zcy1vcmlnaW4gdmlkZW9zIGluIHNvbWUgYnJvd3NlcnMgKEZpcmVmb3gsIENocm9tZSkuIFNldCB0byBlaXRoZXIgXCJhbm9ueW1vdXNcIiBvciBcInVzZS1jcmVkZW50aWFsc1wiLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyYWRpdXM9NTAwMF0gLSBUaGUgbWluaW11bSByYWRpdXMgZm9yIHRoaXMgcGFub3JhbVxuICovXG5jbGFzcyBWaWRlb1Bhbm9yYW1hIGV4dGVuZHMgUGFub3JhbWEge1xuXG4gICAgY29uc3RydWN0b3IoIHNyYywgb3B0aW9ucyA9IHt9ICkge1xuICAgICAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIG11dGVkOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgcGxheXNpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cydcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcblxuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IHRoaXMub3B0aW9ucy52aWRlb0VsZW1lbnQ7XG4gICAgICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5wYXVzZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5yZXN1bWVWaWRlb1Byb2dyZXNzLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby10b2dnbGUnLCB0aGlzLnRvZ2dsZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby10aW1lJywgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lLmJpbmQoIHRoaXMgKSApO1xuICAgIH1cblxuXG4gICAgaXNNb2JpbGUgKCkge1xuXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KSggd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhICk7XG4gICAgICAgIHJldHVybiBjaGVjaztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdmlkZW8gcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyAgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBsb2FkICgpIHtcblxuICAgICAgICBjb25zdCB7IG11dGVkLCBsb29wLCBhdXRvcGxheSwgcGxheXNpbmxpbmUsIGNyb3NzT3JpZ2luIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcbiAgICAgICAgY29uc3Qgb25Qcm9ncmVzcyA9IHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKTtcblxuICAgICAgICB2aWRlby5sb29wID0gbG9vcDtcbiAgICAgICAgdmlkZW8uYXV0b3BsYXkgPSBhdXRvcGxheTtcbiAgICAgICAgdmlkZW8ucGxheXNpbmxpbmUgPSBwbGF5c2lubGluZTtcbiAgICAgICAgdmlkZW8uY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSBtdXRlZDtcblxuICAgICAgICBpZiAoIHBsYXlzaW5saW5lICkge1xuXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdwbGF5c2lubGluZScsICcnICk7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyApO1xuXG4gICAgICAgIH0gXG5cbiAgICAgICAgY29uc3Qgb25sb2FkZWRkYXRhID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9UZXh0dXJlKCB2aWRlbyApO1xuXG4gICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIG1vYmlsZSBzaWxlbnQgYXV0b3BsYXlcbiAgICAgICAgICAgIGlmICggdGhpcy5pc01vYmlsZSgpICkge1xuXG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcblxuICAgICAgICAgICAgICAgIGlmICggYXV0b3BsYXkgJiYgbXV0ZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIEZpeCBmb3IgdGhyZWVqcyByODkgZGVsYXllZCB1cGRhdGVcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcbiAgICAgICAgICAgICAgICBvbkxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggbG9hZGVkICk7XG4gIFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkeSBzdGF0ZSBvZiB0aGUgYXVkaW8vdmlkZW8gZWxlbWVudFxuICAgICAgICAgKiAwID0gSEFWRV9OT1RISU5HIC0gbm8gaW5mb3JtYXRpb24gd2hldGhlciBvciBub3QgdGhlIGF1ZGlvL3ZpZGVvIGlzIHJlYWR5XG4gICAgICAgICAqIDEgPSBIQVZFX01FVEFEQVRBIC0gbWV0YWRhdGEgZm9yIHRoZSBhdWRpby92aWRlbyBpcyByZWFkeVxuICAgICAgICAgKiAyID0gSEFWRV9DVVJSRU5UX0RBVEEgLSBkYXRhIGZvciB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpcyBhdmFpbGFibGUsIGJ1dCBub3QgZW5vdWdoIGRhdGEgdG8gcGxheSBuZXh0IGZyYW1lL21pbGxpc2Vjb25kXG4gICAgICAgICAqIDMgPSBIQVZFX0ZVVFVSRV9EQVRBIC0gZGF0YSBmb3IgdGhlIGN1cnJlbnQgYW5kIGF0IGxlYXN0IHRoZSBuZXh0IGZyYW1lIGlzIGF2YWlsYWJsZVxuICAgICAgICAgKiA0ID0gSEFWRV9FTk9VR0hfREFUQSAtIGVub3VnaCBkYXRhIGF2YWlsYWJsZSB0byBzdGFydCBwbGF5aW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIHZpZGVvLnJlYWR5U3RhdGUgPiAyICkge1xuXG4gICAgICAgICAgICBvbmxvYWRlZGRhdGEuY2FsbCggdGhpcyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggdmlkZW8ucXVlcnlTZWxlY3RvckFsbCggJ3NvdXJjZScgKS5sZW5ndGggPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc291cmNlJyApO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgICAgICAgICB2aWRlby5hcHBlbmRDaGlsZCggc291cmNlICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlZGRhdGEnLCBvbmxvYWRlZGRhdGEuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IHZpZGVvLmR1cmF0aW9uID49IDAgPyB2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uIDogMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnb25WaWRlb1VwZGF0ZSdcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdmlkZW8gcHJvZ3Jlc3MuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHRoaXMudmlkZW9Qcm9ncmVzcyB9ICk7XG5cbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnZW5kZWQnLCBmdW5jdGlvbiAoKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCAhbG9vcCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRWaWRlbygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiB0cnVlIH0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCggdGhpcyApLCBmYWxzZSApOyBcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvICAtIFRoZSBodG1sNSB2aWRlbyBlbGVtZW50XG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgc2V0VmlkZW9UZXh0dXJlICggdmlkZW8gKSB7XG5cbiAgICAgICAgaWYgKCAhdmlkZW8gKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdmlkZW9UZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdmlkZW9UZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHZpZGVvVGV4dHVyZSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcblxuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IHVuZGVmaW5lZDtcdFxuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB2aWRlbyBpcyBwYXVzZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gaXMgdmlkZW8gcGF1c2VkIG9yIG5vdFxuICAgICAqL1xuICAgIGlzVmlkZW9QYXVzZWQgKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudC5wYXVzZWQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdmlkZW8gdG8gcGxheSBvciBwYXVzZVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdG9nZ2xlVmlkZW8gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCAhdmlkZW8gKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHZpZGVvWyB2aWRlby5wYXVzZWQgPyAncGxheScgOiAncGF1c2UnIF0oKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBjdXJyZW50VGltZVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbnMgcGVyY2VudGFnZS4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICovXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZSAoIHsgcGVyY2VudGFnZSB9ICkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhTnVtYmVyLmlzTmFOKCBwZXJjZW50YWdlICkgJiYgcGVyY2VudGFnZSAhPT0gMSApIHtcblxuICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvblZpZGVvVXBkYXRlJywgZGF0YTogcGVyY2VudGFnZSB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGxheVxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcbiAgICAgKi9cbiAgICBwbGF5VmlkZW8gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBsYXlWaWRlbyA9IHRoaXMucGxheVZpZGVvLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoIGVycm9yICkgPT4ge1xuXG4gICAgICAgICAgICAvLyBFcnJvciBwbGF5aW5nIHZpZGVvLiBSZXRyeSBuZXh0IGZyYW1lLiBQb3NzaWJseSBXYWl0aW5nIGZvciB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBwbGF5VmlkZW8gKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheS1lcnJvclxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheS1lcnJvcicsIGVycm9yIH0gKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgdmlkZW8ucGF1c2VkICkge1xuXG4gICAgICAgICAgICB2aWRlby5wbGF5KCkudGhlbiggb25TdWNjZXNzICkuY2F0Y2goIG9uRXJyb3IgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGF1c2VcbiAgICAgKi9cbiAgICBwYXVzZVZpZGVvICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLnBhdXNlZCApIHtcblxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhdXNlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BhdXNlXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BhdXNlJyB9ICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWUgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc3VtZVZpZGVvUHJvZ3Jlc3MgKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlby5yZWFkeVN0YXRlID49IDQgJiYgdmlkZW8uYXV0b3BsYXkgJiYgIXRoaXMuaXNNb2JpbGUoKSApIHtcblxuICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8oKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5wYXVzZVZpZGVvKCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZSggeyBwZXJjZW50YWdlOiB0aGlzLnZpZGVvUHJvZ3Jlc3MgfSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdmlkZW8gYXQgc3RhdGluZyBwb2ludFxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXRWaWRlbyAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvICkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogMCB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdmlkZW8gaXMgbXV0ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gaXMgdmlkZW8gbXV0ZWQgb3Igbm90XG4gICAgICovXG4gICAgaXNWaWRlb011dGVkICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQubXV0ZWQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdXRlIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBtdXRlVmlkZW8gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhdmlkZW8ubXV0ZWQgKSB7XG5cbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2b2x1bWVjaGFuZ2UnIH0gKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVubXV0ZSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5tdXRlVmlkZW8gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyAmJiB0aGlzLmlzVmlkZW9NdXRlZCgpICkge1xuXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZvbHVtZWNoYW5nZScgfSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlkZW8gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldFZpZGVvRWxlbWVudCAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB2aWRlbyBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbDogeyBtYXAgfSB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcblxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdG9nZ2xlJywgdGhpcy50b2dnbGVWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgfVxuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cbiAgIFxufTtcblxuZXhwb3J0IHsgVmlkZW9QYW5vcmFtYSB9OyIsIlxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vVGV4dHVyZUxvYWRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBHb29nbGUgU3RyZWV0IFZpZXcgTG9hZGVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzIFxuICovXG5mdW5jdGlvbiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyICggcGFyYW1ldGVycyA9IHt9ICkge1xuXG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5fem9vbSA9IG51bGw7XG4gICAgdGhpcy5fcGFub0lkID0gbnVsbDtcbiAgICB0aGlzLl9wYW5vQ2xpZW50ID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdTZXJ2aWNlKCk7XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX3RvdGFsID0gMDtcbiAgICB0aGlzLl9jYW52YXMgPSBbXTtcbiAgICB0aGlzLl9jdHggPSBbXTtcbiAgICB0aGlzLl93YyA9IDA7XG4gICAgdGhpcy5faGMgPSAwO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICB0aGlzLmNvcHlyaWdodCA9ICcnO1xuICAgIHRoaXMub25TaXplQ2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9uUGFub3JhbWFMb2FkID0gbnVsbDtcblxuICAgIHRoaXMubGV2ZWxzVyA9IFsgMSwgMiwgNCwgNywgMTMsIDI2IF07XG4gICAgdGhpcy5sZXZlbHNIID0gWyAxLCAxLCAyLCA0LCA3LCAxMyBdO1xuXG4gICAgdGhpcy53aWR0aHMgPSBbIDQxNiwgODMyLCAxNjY0LCAzMzI4LCA2NjU2LCAxMzMxMiBdO1xuICAgIHRoaXMuaGVpZ2h0cyA9IFsgNDE2LCA0MTYsIDgzMiwgMTY2NCwgMzMyOCwgNjY1NiBdO1xuXG4gICAgdGhpcy5tYXhXID0gNjY1NjtcbiAgICB0aGlzLm1heEggPSA2NjU2O1xuXG4gICAgbGV0IGdsO1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXG4gICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnICk7XG5cbiAgICAgICAgaWYoICFnbCApIHtcblxuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCggJ3dlYmdsJyApO1xuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjYXRjaCAoIGVycm9yICkge1xuXG4gICAgfVxuXG4gICAgdGhpcy5tYXhXID0gTWF0aC5tYXgoIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApLCB0aGlzLm1heFcgKTtcbiAgICB0aGlzLm1heEggPSBNYXRoLm1heCggZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfVEVYVFVSRV9TSVpFICksIHRoaXMubWF4SCApO1xuXG59XG5cbk9iamVjdC5hc3NpZ24oIEdvb2dsZVN0cmVldHZpZXdMb2FkZXIucHJvdG90eXBlLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogR29vZ2xlU3RyZWV0dmlld0xvYWRlcixcblxuICAgIC8qKlxuICAgICAqIFNldCBwcm9ncmVzc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb2FkZWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsIFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICggbG9hZGVkLCB0b3RhbCApIHtcblxuICAgICAgICBpZiAoIHRoaXMub25Qcm9ncmVzcyApIHtcblxuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzKCB7IGxvYWRlZDogbG9hZGVkLCB0b3RhbDogdG90YWwgfSApO1xuXG4gICAgICAgIH1cblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRhcHQgdGV4dHVyZSB0byB6b29tXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGFwdFRleHR1cmVUb1pvb206IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB3ID0gdGhpcy53aWR0aHMgWyB0aGlzLl96b29tIF07XG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmhlaWdodHNbIHRoaXMuX3pvb20gXTtcblxuICAgICAgICBjb25zdCBtYXhXID0gdGhpcy5tYXhXO1xuICAgICAgICBjb25zdCBtYXhIID0gdGhpcy5tYXhIO1xuXG4gICAgICAgIHRoaXMuX3djID0gTWF0aC5jZWlsKCB3IC8gbWF4VyApO1xuICAgICAgICB0aGlzLl9oYyA9IE1hdGguY2VpbCggaCAvIG1heEggKTtcblxuICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IHRoaXMuX2hjOyB5KysgKSB7XG4gICAgICAgICAgICBmb3IoIGxldCB4ID0gMDsgeCA8IHRoaXMuX3djOyB4KysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG4gICAgICAgICAgICAgICAgaWYoIHggPCAoIHRoaXMuX3djIC0gMSApICkgYy53aWR0aCA9IG1heFc7IGVsc2UgYy53aWR0aCA9IHcgLSAoIG1heFcgKiB4ICk7XG4gICAgICAgICAgICAgICAgaWYoIHkgPCAoIHRoaXMuX2hjIC0gMSApICkgYy5oZWlnaHQgPSBtYXhIOyBlbHNlIGMuaGVpZ2h0ID0gaCAtICggbWF4SCAqIHkgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMucHVzaCggYyApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5wdXNoKCBjLmdldENvbnRleHQoICcyZCcgKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZSBmcm9tIHRpbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcbiAgICAgKiBAcGFyYW0geyp9IHRleHR1cmUgXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb21wb3NlRnJvbVRpbGU6IGZ1bmN0aW9uICggeCwgeSwgdGV4dHVyZSApIHtcblxuICAgICAgICBjb25zdCBtYXhXID0gdGhpcy5tYXhXO1xuICAgICAgICBjb25zdCBtYXhIID0gdGhpcy5tYXhIO1xuXG4gICAgICAgIHggKj0gNTEyO1xuICAgICAgICB5ICo9IDUxMjtcblxuICAgICAgICBjb25zdCBweCA9IE1hdGguZmxvb3IoIHggLyBtYXhXICk7XG4gICAgICAgIGNvbnN0IHB5ID0gTWF0aC5mbG9vciggeSAvIG1heEggKTtcblxuICAgICAgICB4IC09IHB4ICogbWF4VztcbiAgICAgICAgeSAtPSBweSAqIG1heEg7XG5cbiAgICAgICAgdGhpcy5fY3R4WyBweSAqIHRoaXMuX3djICsgcHggXS5kcmF3SW1hZ2UoIHRleHR1cmUsIDAsIDAsIHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0LCB4LCB5LCA1MTIsIDUxMiApO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MoKTtcblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJvZ3Jlc3NcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHByb2dyZXNzOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLl9jb3VudCsrO1xuXHRcdFxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKCB0aGlzLl9jb3VudCwgdGhpcy5fdG90YWwgKTtcblx0XHRcbiAgICAgICAgaWYgKCB0aGlzLl9jb3VudCA9PT0gdGhpcy5fdG90YWwpIHtcblxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLl9jYW52YXM7XG4gICAgICAgICAgICB0aGlzLnBhbm9JZCA9IHRoaXMuX3Bhbm9JZDtcbiAgICAgICAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb207XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5vblBhbm9yYW1hTG9hZCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMub25QYW5vcmFtYUxvYWQoIHRoaXMuX2NhbnZhc1sgMCBdICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2UgcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbXBvc2VQYW5vcmFtYTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoIDAsIDEgKTtcblx0XHRcbiAgICAgICAgY29uc3QgdyA9IHRoaXMubGV2ZWxzV1sgdGhpcy5fem9vbSBdO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5sZXZlbHNIWyB0aGlzLl96b29tIF07XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fdG90YWwgPSB3ICogaDtcblxuICAgICAgICBjb25zdCB7IHVzZVdlYkdMIH0gPSB0aGlzLl9wYXJhbWV0ZXJzO1xuXG4gICAgICAgIGZvciggbGV0IHkgPSAwOyB5IDwgaDsgeSsrICkge1xuICAgICAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB3OyB4KysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZ2VvMC5nZ3BodC5jb20vY2JrP2NiX2NsaWVudD1tYXBzX3N2LnRhY3RpbGUmYXV0aHVzZXI9MCZobD1lbiZvdXRwdXQ9dGlsZSZ6b29tPScgKyB0aGlzLl96b29tICsgJyZ4PScgKyB4ICsgJyZ5PScgKyB5ICsgJyZwYW5vaWQ9JyArIHRoaXMuX3Bhbm9JZCArICcmbmJ0JmZvdmVyPTInO1xuICAgICAgICAgICAgICAgICggZnVuY3Rpb24oIHgsIHkgKSB7IFxuICAgICAgICAgICAgICAgICAgICBpZiggdXNlV2ViR0wgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gVGV4dHVyZUxvYWRlci5sb2FkKCB1cmwsIG51bGwsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZUZyb21UaWxlKCB4LCB5LCB0ZXh0dXJlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZUZyb21UaWxlKCB4LCB5LCB0aGlzICk7XHRcdFx0XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICkoIHgsIHkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHRcdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhbm9pZCBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggcGFub2lkICkge1xuXG4gICAgICAgIHRoaXMubG9hZFBhbm8oIHBhbm9pZCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgcGFub3JhbWFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWRQYW5vOiBmdW5jdGlvbiggaWQgKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Bhbm9DbGllbnQuZ2V0UGFub3JhbWFCeUlkKCBpZCwgZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5TdHJlZXRWaWV3U3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgc2VsZi5jb3B5cmlnaHQgPSByZXN1bHQuY29weXJpZ2h0O1xuICAgICAgICAgICAgICAgIHNlbGYuX3Bhbm9JZCA9IHJlc3VsdC5sb2NhdGlvbi5wYW5vO1xuICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZVBhbm9yYW1hKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHRcdFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgem9vbSBsZXZlbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB6IFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Wm9vbTogZnVuY3Rpb24oIHogKSB7XG5cbiAgICAgICAgdGhpcy5fem9vbSA9IHo7XG4gICAgICAgIHRoaXMuYWRhcHRUZXh0dXJlVG9ab29tKCk7XG4gICAgfVxuXHRcbn0gKTtcblxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld0xvYWRlciB9OyIsImltcG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL0ltYWdlUGFub3JhbWEnO1xuaW1wb3J0IHsgR29vZ2xlU3RyZWV0dmlld0xvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBHb29nbGUgc3RyZWV0dmlldyBwYW5vcmFtYVxuICogQGRlc2NyaXB0aW9uIFtIb3cgdG8gZ2V0IFBhbm9yYW1hIElEXXtAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5OTE2MTQ5L2dvb2dsZS1tYXBzLXN0cmVldHZpZXctaG93LXRvLWdldC1wYW5vcmFtYS1pZH1cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHBhbm9JZCAtIFBhbm9yYW1hIGlkIGZyb20gR29vZ2xlIFN0cmVldHZpZXcgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaUtleV0gLSBHb29nbGUgU3RyZWV0IFZpZXcgQVBJIEtleVxuICovXG5jbGFzcyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgZXh0ZW5kcyBJbWFnZVBhbm9yYW1hIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciggcGFub0lkLCBhcGlLZXkgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFub0lkID0gcGFub0lkO1xuXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IGZhbHNlO1xuICBcbiAgICAgICAgdGhpcy5zZXR1cEdvb2dsZU1hcEFQSSggYXBpS2V5ICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBHb29nbGUgU3RyZWV0IFZpZXcgYnkgcGFub3JhbWEgaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFub0lkIC0gR29nb2dsZSBTdHJlZXQgVmlldyBwYW5vcmFtYSBpZFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkICggcGFub0lkICkge1xuXG4gICAgICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IHRydWU7XG4gIFxuICAgICAgICBwYW5vSWQgPSAoIHBhbm9JZCB8fCB0aGlzLnBhbm9JZCApIHx8IHt9O1xuICBcbiAgICAgICAgaWYgKCBwYW5vSWQgJiYgdGhpcy5nc3ZMb2FkZXIgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5sb2FkR1NWTG9hZGVyKCBwYW5vSWQgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBTZXR1cCBHb29nbGUgTWFwIEFQSVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgYXBpS2V5XG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldHVwR29vZ2xlTWFwQVBJICggYXBpS2V5ICkge1xuICBcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JztcbiAgICAgICAgc2NyaXB0LnNyYyArPSBhcGlLZXkgPyAna2V5PScgKyBhcGlLZXkgOiAnJztcbiAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcbiAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdoZWFkJyApLmFwcGVuZENoaWxkKCBzY3JpcHQgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBTZXQgR1NWIExvYWRlclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRHU1ZMb2FkZXIgKCkge1xuICBcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIgPSBuZXcgR29vZ2xlU3RyZWV0dmlld0xvYWRlcigpO1xuICBcbiAgICAgICAgaWYgKCB0aGlzLmxvYWRSZXF1ZXN0ZWQgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IEdTViBMb2FkZXJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R29vZ2xlU3RyZWV0dmlld0xvYWRlcn0gR1NWIExvYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldEdTVkxvYWRlciAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5nc3ZMb2FkZXI7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogTG9hZCBHU1YgTG9hZGVyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBwYW5vSWQgLSBHb2dvZ2xlIFN0cmVldCBWaWV3IHBhbm9yYW1hIGlkXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWRHU1ZMb2FkZXIgKCBwYW5vSWQgKSB7XG4gIFxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLm9uUHJvZ3Jlc3MgPSB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApO1xuICBcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIub25QYW5vcmFtYUxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICk7XG4gIFxuICAgICAgICB0aGlzLmdzdkxvYWRlci5zZXRab29tKCB0aGlzLmdldFpvb21MZXZlbCgpICk7XG4gIFxuICAgICAgICB0aGlzLmdzdkxvYWRlci5sb2FkKCBwYW5vSWQgKTtcbiAgXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgaXMgbG9hZGVkXG4gICAgICogQHBhcmFtICB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIENhbnZhcyB3aGVyZSB0aGUgdGlsZXMgaGF2ZSBiZWVuIGRyYXduXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTG9hZCAoIGNhbnZhcyApIHtcbiAgXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCBuZXcgVEhSRUUuVGV4dHVyZSggY2FudmFzICkgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZXNldFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gIFxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IHVuZGVmaW5lZDtcbiAgXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcbiAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgfTsiLCIvKipcbiAqIFN0ZXJlb2dyYXBoaWMgcHJvamVjdGlvbiBzaGFkZXJcbiAqIGJhc2VkIG9uIGh0dHA6Ly9ub3RsaW9uLmdpdGh1Yi5pby9zdHJlZXR2aWV3LXN0ZXJlb2dyYXBoaWNcbiAqIEBhdXRob3IgcGNoZW42NlxuICovXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gU3RlcmVvZ3JhaHBpYyBTaGFkZXJcbiAqIEBtb2R1bGUgU3RlcmVvZ3JhcGhpY1NoYWRlclxuICogQHByb3BlcnR5IHtvYmplY3R9IHVuaWZvcm1zXG4gKiBAcHJvcGVydHkge1RIUkVFLlRleHR1cmV9IHVuaWZvcm1zLnREaWZmdXNlIGRpZmZ1c2UgbWFwXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMucmVzb2x1dGlvbiBpbWFnZSByZXNvbHV0aW9uXG4gKiBAcHJvcGVydHkge1RIUkVFLk1hdHJpeDR9IHVuaWZvcm1zLnRyYW5zZm9ybSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmlmb3Jtcy56b29tIGltYWdlIHpvb20gZmFjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMub3BhY2l0eSBpbWFnZSBvcGFjaXR5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVydGV4U2hhZGVyIHZlcnRleCBzaGFkZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmcmFnbWVudFNoYWRlciBmcmFnbWVudCBzaGFkZXJcbiAqL1xuY29uc3QgU3RlcmVvZ3JhcGhpY1NoYWRlciA9IHtcblxuICAgIHVuaWZvcm1zOiB7XG5cbiAgICAgICAgJ3REaWZmdXNlJzogeyB2YWx1ZTogbmV3IFRIUkVFLlRleHR1cmUoKSB9LFxuICAgICAgICAncmVzb2x1dGlvbic6IHsgdmFsdWU6IDEuMCB9LFxuICAgICAgICAndHJhbnNmb3JtJzogeyB2YWx1ZTogbmV3IFRIUkVFLk1hdHJpeDQoKSB9LFxuICAgICAgICAnem9vbSc6IHsgdmFsdWU6IDEuMCB9LFxuICAgICAgICAnb3BhY2l0eSc6IHsgdmFsdWU6IDEuMCB9XG5cbiAgICB9LFxuXG4gICAgdmVydGV4U2hhZGVyOiBbXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcblxuICAgICAgICAndm9pZCBtYWluKCkgeycsXG5cbiAgICAgICAgJ3ZVdiA9IHV2OycsXG4gICAgICAgICdnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsnLFxuXG4gICAgICAgICd9JyBcblxuICAgIF0uam9pbiggJ1xcbicgKSxcblxuICAgIGZyYWdtZW50U2hhZGVyOiBbXG5cbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlOycsXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHJlc29sdXRpb247JyxcbiAgICAgICAgJ3VuaWZvcm0gbWF0NCB0cmFuc2Zvcm07JyxcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgem9vbTsnLFxuICAgICAgICAndW5pZm9ybSBmbG9hdCBvcGFjaXR5OycsXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcblxuICAgICAgICAnY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzsnLFxuXG4gICAgICAgICd2b2lkIG1haW4oKXsnLFxuXG4gICAgICAgICd2ZWMyIHBvc2l0aW9uID0gLTEuMCArICAyLjAgKiB2VXY7JyxcblxuICAgICAgICAncG9zaXRpb24gKj0gdmVjMiggem9vbSAqIHJlc29sdXRpb24sIHpvb20gKiAwLjUgKTsnLFxuXG4gICAgICAgICdmbG9hdCB4MnkyID0gcG9zaXRpb24ueCAqIHBvc2l0aW9uLnggKyBwb3NpdGlvbi55ICogcG9zaXRpb24ueTsnLFxuICAgICAgICAndmVjMyBzcGhlcmVfcG50ID0gdmVjMyggMi4gKiBwb3NpdGlvbiwgeDJ5MiAtIDEuICkgLyAoIHgyeTIgKyAxLiApOycsXG5cbiAgICAgICAgJ3NwaGVyZV9wbnQgPSB2ZWMzKCB0cmFuc2Zvcm0gKiB2ZWM0KCBzcGhlcmVfcG50LCAxLjAgKSApOycsXG5cbiAgICAgICAgJ3ZlYzIgc2FtcGxlVVYgPSB2ZWMyKCcsXG4gICAgICAgICcoYXRhbihzcGhlcmVfcG50LnksIHNwaGVyZV9wbnQueCkgLyBQSSArIDEuMCkgKiAwLjUsJyxcbiAgICAgICAgJyhhc2luKHNwaGVyZV9wbnQueikgLyBQSSArIDAuNSknLFxuICAgICAgICAnKTsnLFxuXG4gICAgICAgICdnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCBzYW1wbGVVViApOycsXG5cbiAgICAgICAgJ2dsX0ZyYWdDb2xvci5hICo9IG9wYWNpdHk7JyxcblxuICAgICAgICAnfSdcblxuICAgIF0uam9pbiggJ1xcbicgKVxuXG59O1xuXG5leHBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vSW1hZ2VQYW5vcmFtYSc7XG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcbmltcG9ydCB7IENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IFN0ZXJlb2dyYXBoaWNTaGFkZXIgfSBmcm9tICcuLi9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgTGl0dGxlIFBsYW5ldFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcdFx0LSBUeXBlIG9mIGxpdHRsZSBwbGFuZXQgYmFzaWMgY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHRcdC0gVVJMIGZvciB0aGUgaW1hZ2Ugc291cmNlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MTAwMDBdIC0gU2l6ZSBvZiBwbGFuZSBnZW9tZXRyeVxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpbz0wLjVdICAtIFJhdGlvIG9mIHBsYW5lIGdlb21ldHJ5J3MgaGVpZ2h0IGFnYWluc3Qgd2lkdGhcbiAqL1xuY2xhc3MgTGl0dGxlUGxhbmV0IGV4dGVuZHMgSW1hZ2VQYW5vcmFtYSB7XG4gICAgY29uc3RydWN0b3IoIHR5cGUgPSAnaW1hZ2UnLCBzb3VyY2UsIHNpemUgPSAxMDAwMCwgcmF0aW8gPSAwLjUgKSB7XG4gICAgICAgIGlmICggdHlwZSA9PT0gJ2ltYWdlJyApIHtcbiAgICAgICAgICAgIHN1cGVyKHNvdXJjZSwgTGl0dGxlUGxhbmV0LmNyZWF0ZUdlb21ldHJ5KCBzaXplLCByYXRpbyApLCBMaXR0bGVQbGFuZXQuY3JlYXRlTWF0ZXJpYWwoIHNpemUgKSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5FUFMgPSAwLjAwMDAwMTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlck1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgICAgICB0aGlzLnF1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy5xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMucXVhdEN1ciA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMucXVhdFNsZXJwID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgICAgICB0aGlzLnZlY3RvclggPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgICAgICB0aGlzLnZlY3RvclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3dpbmRvdy1yZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplICk7XG4gICAgfVxuXG4gICAgYWRkICggb2JqZWN0ICkge1xuXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gIFxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICBvYmplY3QubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XG4gIFxuICAgICAgICB9XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUuYWRkLmNhbGwoIHRoaXMsIG9iamVjdCApO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUdlb21ldHJ5ICggc2l6ZSwgcmF0aW8gKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCBzaXplLCBzaXplICogcmF0aW8gKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNYXRlcmlhbCAoIHNpemUgKSB7XG5cbiAgICAgICAgY29uc3Qgc2hhZGVyID0gT2JqZWN0LmFzc2lnbigge30sIFN0ZXJlb2dyYXBoaWNTaGFkZXIgKSwgdW5pZm9ybXMgPSBzaGFkZXIudW5pZm9ybXM7XG5cbiAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHNpemU7XG4gICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwLjA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuXG4gICAgICAgICAgICB1bmlmb3JtczogdW5pZm9ybXMsXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuICAgICAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxuXG4gICAgICAgIH0gKTtcblxuICAgIH1cblxuICAgIHJlZ2lzdGVyTW91c2VFdmVudHMgKCkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuICAgIH1cblxuICAgIHVucmVnaXN0ZXJNb3VzZUV2ZW50cyAoKSB7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcblxuICAgIH1cblxuICAgIG9uTW91c2VEb3duICggZXZlbnQgKSB7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xuXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnNldCggeCwgeSApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnBpbmNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUgKCBldmVudCApIHtcblxuICAgICAgICBjb25zdCBpbnB1dENvdW50ID0gKCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkgfHwgMSA7XG5cbiAgICAgICAgc3dpdGNoICggaW5wdXRDb3VudCApIHtcblxuICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICAgIGNvbnN0IHggPSAoIGV2ZW50LmNsaWVudFggPj0gMCApID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgeSA9ICggZXZlbnQuY2xpZW50WSA+PSAwICkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlWCA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHggLSB0aGlzLnVzZXJNb3VzZS54ICkgKiAwLjQ7XG4gICAgICAgICAgICBjb25zdCBhbmdsZVkgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCB5IC0gdGhpcy51c2VyTW91c2UueSApICogMC40O1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuZHJhZ2dpbmcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0QS5zZXRGcm9tQXhpc0FuZ2xlKCB0aGlzLnZlY3RvclksIGFuZ2xlWCApO1xuICAgICAgICAgICAgICAgIHRoaXMucXVhdEIuc2V0RnJvbUF4aXNBbmdsZSggdGhpcy52ZWN0b3JYLCBhbmdsZVkgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRDdXIubXVsdGlwbHkoIHRoaXMucXVhdEEgKS5tdWx0aXBseSggdGhpcy5xdWF0QiApO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnNldCggeCwgeSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRab29tRGVsdGEoIHRoaXMudXNlck1vdXNlLnBpbmNoRGlzdGFuY2UgLSBkaXN0YW5jZSApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAgKCkge1xuXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIG9uTW91c2VXaGVlbCAoIGV2ZW50ICkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGxldCBkZWx0YSA9IDA7XG5cbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcblxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRab29tRGVsdGEoIGRlbHRhICk7XG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfVxuXG4gICAgYWRkWm9vbURlbHRhICggZGVsdGEgKSB7XG5cbiAgICAgICAgY29uc3QgdW5pZm9ybXMgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zO1xuICAgICAgICBjb25zdCBsb3dlckJvdW5kID0gdGhpcy5zaXplICogMC4xO1xuICAgICAgICBjb25zdCB1cHBlckJvdW5kID0gdGhpcy5zaXplICogMTA7XG5cbiAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSArPSBkZWx0YTtcblxuICAgICAgICBpZiAoIHVuaWZvcm1zLnpvb20udmFsdWUgPD0gbG93ZXJCb3VuZCApIHtcblxuICAgICAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IGxvd2VyQm91bmQ7XG5cbiAgICAgICAgfSBlbHNlIGlmICggdW5pZm9ybXMuem9vbS52YWx1ZSA+PSB1cHBlckJvdW5kICkge1xuXG4gICAgICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gdXBwZXJCb3VuZDtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGVDYWxsYmFjayAoKSB7XG5cbiAgICAgICAgdGhpcy5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vblVwZGF0ZUNhbGxiYWNrLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNsZXJwKCB0aGlzLnF1YXRDdXIsIDAuMSApO1xuXG4gICAgICAgIGlmICggdGhpcy5tYXRlcmlhbCApIHtcblxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50cmFuc2Zvcm0udmFsdWUubWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24oIHRoaXMucXVhdFNsZXJwICk7XG5cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoICF0aGlzLmRyYWdnaW5nICYmIDEuMCAtIHRoaXMucXVhdFNsZXJwLmNsb25lKCkuZG90KCB0aGlzLnF1YXRDdXIgKSA8IHRoaXMuRVBTICkge1xuICBcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5mcmFtZUlkICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuXG4gICAgICAgIHRoaXMucXVhdEN1ci5zZXQoIDAsIDAsIDAsIDEgKTtcbiAgICAgICAgdGhpcy5xdWF0U2xlcnAuc2V0KCAwLCAwLCAwLCAxICk7XG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfVxuXG4gICAgb25Mb2FkICggdGV4dHVyZSApIHtcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2Rpc2FibGVDb250cm9sJyB9ICk7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMsIHRleHR1cmUgKTtcblxuICAgIH1cblxuICAgIG9uTGVhdmUgKCkge1xuXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2VuYWJsZUNvbnRyb2wnLCBkYXRhOiBDT05UUk9MUy5PUkJJVCB9ICk7XG5cbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLmZyYW1lSWQgKTtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxlYXZlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxuICAgIG9uV2luZG93UmVzaXplICgpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgb25Db250ZXh0TWVudSAoKSB7XG5cbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgZGlzcG9zZSAoKSB7XHRcblxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG4gXG5cbn1cblxuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9MaXR0bGVQbGFuZXQnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgSW1hZ2UgTGl0dGxlIFBsYW5ldFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXG4gKi9cbmNsYXNzIEltYWdlTGl0dGxlUGxhbmV0IGV4dGVuZHMgTGl0dGxlUGxhbmV0IHtcbiAgICBjb25zdHJ1Y3Rvciggc291cmNlLCBzaXplLCByYXRpbyApIHtcbiAgICAgICAgc3VwZXIoc291cmNlLCBzaXplLCByYXRpbyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBPbiBsb2FkZWQgd2l0aCB0ZXh0dXJlXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkICggdGV4dHVyZSApIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHRleHR1cmUgKTtcblxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGV4dHVyZVxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSBcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVUZXh0dXJlICggdGV4dHVyZSApIHtcblxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuICBcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3REaWZmdXNlJyBdLnZhbHVlID0gdGV4dHVyZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlICgpIHtcblxuICAgICAgICBjb25zdCB0RGlmZnVzZSA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0RGlmZnVzZScgXTtcblxuICAgICAgICBpZiAoIHREaWZmdXNlICYmIHREaWZmdXNlLnZhbHVlICkge1xuXG4gICAgICAgICAgICB0RGlmZnVzZS52YWx1ZS5kaXNwb3NlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIExpdHRsZVBsYW5ldC5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCB7IEltYWdlTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi4vbWVkaWEvTWVkaWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQ2FtZXJhIHBhbm9yYW1hXG4gKiBAZGVzY3JpcHRpb24gU2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFTdHJlYW1Db25zdHJhaW50c3xNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBmb3IgY29uc3RyYWludHNcbiAqIEBwYXJhbSB7b2JqZWN0fSAtIGNhbWVyYSBjb25zdHJhaW50c1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIENhbWVyYVBhbm9yYW1hIGV4dGVuZHMgUGFub3JhbWEge1xuICAgIGNvbnN0cnVjdG9yKCBjb25zdHJhaW50cyApIHtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gNTAwMDtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIFxuICAgICAgICBzdXBlcihnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgICAgIHRoaXMubWVkaWEgPSBuZXcgTWVkaWEoIGNvbnN0cmFpbnRzICk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyJywgdGhpcy5zdGFydC5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnN0b3AuYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMub25QYW5vbGVuc0NvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtc2NlbmUnLCB0aGlzLm9uUGFub2xlbnNTY2VuZS5iaW5kKCB0aGlzICkgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGNvbnRhaW5lciBldmVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uUGFub2xlbnNDb250YWluZXIgKCB7IGNvbnRhaW5lciB9ICkge1xuICAgICAgICB0aGlzLm1lZGlhLnNldENvbnRhaW5lciggY29udGFpbmVyICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gc2NlbmUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25QYW5vbGVuc1NjZW5lKCB7IHNjZW5lIH0gKSB7XG4gICAgICAgIHRoaXMubWVkaWEuc2V0U2NlbmUoIHNjZW5lICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgY2FtZXJhIHN0cmVhbWluZ1xuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgY2FtZXJhIHN0cmVhbWluZ1xuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMubWVkaWEuc3RvcCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ2FtZXJhUGFub3JhbWEgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBPcmJpdCBDb250cm9sc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgT3JiaXRDb250cm9sc1xuICogQHBhcmFtIHtUSFJFRS5PYmplY3R9IG9iamVjdCBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXG4gKi9cbmZ1bmN0aW9uIE9yYml0Q29udHJvbHMgKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG5cbiAgICAvLyBBUElcblxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvKlxuICAgICAqIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBjb250cm9sIG9yYml0cyBhcm91bmRcbiAgICAgKiBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICovXG4gICAgdGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgLy8gY2VudGVyIGlzIG9sZCwgZGVwcmVjYXRlZDsgdXNlIFwidGFyZ2V0XCIgaW5zdGVhZFxuICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvKlxuICAgICAqIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAqL1xuICAgIHRoaXMubm9ab29tID0gZmFsc2U7XG4gICAgdGhpcy56b29tU3BlZWQgPSAxLjA7XG4gICAgdGhpcy5yZXZlcnRab29tU2Nyb2xsRGlyZWN0aW9uID0gZmFsc2U7XG5cbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcbiAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcbiAgICB0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcbiAgICB0aGlzLm1pblpvb20gPSAwO1xuICAgIHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgdGhpcy5yb3RhdGVTcGVlZCA9IC0wLjE1O1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLm5vUGFuID0gdHJ1ZTtcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICB0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuICAgIC8qXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG4gICAgICogUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG4gICAgICovXG4gICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgIHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuICAgIC8vIE1vbWVudHVtXG4gIFx0dGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3IgPSAwLjkwO1xuICBcdHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yID0gLTAuMDA1O1xuICBcdHRoaXMubW9tZW50dW1LZXlkb3duRmFjdG9yID0gMjA7XG5cbiAgXHQvLyBGb3ZcbiAgXHR0aGlzLm1pbkZvdiA9IDMwO1xuICBcdHRoaXMubWF4Rm92ID0gMTIwO1xuXG4gICAgLypcbiAgICAgKiBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAqIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cbiAgICAgKi9cbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuICAgIHRoaXMubm9LZXlzID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG4gICAgdGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuICAgIC8vIE1vdXNlIGJ1dHRvbnNcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG4gICAgLypcbiAgICAgKiAvLy8vLy8vLy8vXG4gICAgICogaW50ZXJuYWxzXG4gICAgICovXG5cbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgdmFyIEVQUyA9IDEwZS04O1xuICAgIHZhciBNRVBTID0gMTBlLTU7XG5cbiAgICB2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHZhciB0aGV0YSA9IDA7XG4gICAgdmFyIHBoaSA9IDA7XG4gICAgdmFyIHBoaURlbHRhID0gMDtcbiAgICB2YXIgdGhldGFEZWx0YSA9IDA7XG4gICAgdmFyIHNjYWxlID0gMTtcbiAgICB2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICB2YXIgbW9tZW50dW1MZWZ0ID0gMCwgbW9tZW50dW1VcCA9IDA7XG4gICAgdmFyIGV2ZW50UHJldmlvdXM7XG4gICAgdmFyIG1vbWVudHVtT24gPSBmYWxzZTtcblxuICAgIHZhciBrZXlVcCwga2V5Qm90dG9tLCBrZXlMZWZ0LCBrZXlSaWdodDtcblxuICAgIHZhciBTVEFURSA9IHsgTk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1IH07XG5cbiAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgLy8gZm9yIHJlc2V0XG5cbiAgICB0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuICAgIHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcbiAgICB0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuICAgIC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXG4gICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG4gICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVydCgpO1xuXG4gICAgLy8gZXZlbnRzXG5cbiAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG4gICAgdmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcbiAgICB2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cbiAgICB0aGlzLnNldExhc3RRdWF0ZXJuaW9uID0gZnVuY3Rpb24gKCBxdWF0ZXJuaW9uICkge1xuICAgICAgICBsYXN0UXVhdGVybmlvbi5jb3B5KCBxdWF0ZXJuaW9uICk7XG4gICAgICAgIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkoIHF1YXRlcm5pb24gKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMYXN0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsYXN0UG9zaXRpb247XG4gICAgfTtcblxuICAgIHRoaXMucm90YXRlTGVmdCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoZXRhRGVsdGEgLT0gYW5nbGU7XG5cblxuICAgIH07XG5cbiAgICB0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcGhpRGVsdGEgLT0gYW5nbGU7XG5cbiAgICB9O1xuXG4gICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcbiAgICB0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAvLyBnZXQgWCBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyAwIF0sIHRlWyAxIF0sIHRlWyAyIF0gKTtcbiAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cbiAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICB9O1xuXG4gICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIHVwXG4gICAgdGhpcy5wYW5VcCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG4gICAgICAgIC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcbiAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDQgXSwgdGVbIDUgXSwgdGVbIDYgXSApO1xuICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cbiAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBwYXNzIGluIHgseSBvZiBjaGFuZ2UgZGVzaXJlZCBpbiBwaXhlbCBzcGFjZSxcbiAgICAgKiByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcbiAgICAgKi9cbiAgICB0aGlzLnBhbiA9IGZ1bmN0aW9uICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuICAgICAgICAgICAgLy8gcGVyc3BlY3RpdmVcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cbiAgICAgICAgICAgIC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuICAgICAgICAgICAgdGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG4gICAgICAgICAgICAvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG4gICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuICAgICAgICAgICAgc2NvcGUucGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG4gICAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcbiAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIGRlbHRhWCAqIChzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCkgLyBlbGVtZW50LmNsaWVudFdpZHRoICk7XG4gICAgICAgICAgICBzY29wZS5wYW5VcCggZGVsdGFZICogKHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tKSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG9yIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLm1vbWVudHVtID0gZnVuY3Rpb24oKXtcblx0XHRcbiAgICAgICAgaWYgKCAhbW9tZW50dW1PbiApIHJldHVybjtcblxuICAgICAgICBpZiAoIE1hdGguYWJzKCBtb21lbnR1bUxlZnQgKSA8IE1FUFMgJiYgTWF0aC5hYnMoIG1vbWVudHVtVXAgKSA8IE1FUFMgKSB7IFxuXG4gICAgICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7IFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9tZW50dW1VcCAgICo9IHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yO1xuICAgICAgICBtb21lbnR1bUxlZnQgKj0gdGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3I7XG5cbiAgICAgICAgdGhldGFEZWx0YSAtPSB0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqIG1vbWVudHVtTGVmdDtcbiAgICAgICAgcGhpRGVsdGEgICAtPSB0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqIG1vbWVudHVtVXA7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kb2xseUluID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG4gICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCB0aGlzLm1pblpvb20sIE1hdGgubWluKCB0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLmRvbGx5T3V0ID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG4gICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCB0aGlzLm1pblpvb20sIE1hdGgubWluKCB0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICggaWdub3JlVXBkYXRlICkge1xuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMub2JqZWN0LnBvc2l0aW9uO1xuXG4gICAgICAgIG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1YiggdGhpcy50YXJnZXQgKTtcblxuICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcbiAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG4gICAgICAgIC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblxuICAgICAgICB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xuXG4gICAgICAgIC8vIGFuZ2xlIGZyb20geS1heGlzXG5cbiAgICAgICAgcGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xuXG4gICAgICAgIGlmICggdGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb21lbnR1bSgpO1xuXG4gICAgICAgIHRoZXRhICs9IHRoZXRhRGVsdGE7XG4gICAgICAgIHBoaSArPSBwaGlEZWx0YTtcblxuICAgICAgICAvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgIHRoZXRhID0gTWF0aC5tYXgoIHRoaXMubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhBemltdXRoQW5nbGUsIHRoZXRhICkgKTtcblxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICBwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG4gICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWUgRVBTIGFuZCBQSS1FUFNcbiAgICAgICAgcGhpID0gTWF0aC5tYXgoIEVQUywgTWF0aC5taW4oIE1hdGguUEkgLSBFUFMsIHBoaSApICk7XG5cbiAgICAgICAgdmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG4gICAgICAgIC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KCB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggdGhpcy5tYXhEaXN0YW5jZSwgcmFkaXVzICkgKTtcblxuICAgICAgICAvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cbiAgICAgICAgdGhpcy50YXJnZXQuYWRkKCBwYW4gKTtcblxuICAgICAgICBvZmZzZXQueCA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguc2luKCB0aGV0YSApO1xuICAgICAgICBvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKCBwaGkgKTtcbiAgICAgICAgb2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcblxuICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcbiAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuICAgICAgICBwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cbiAgICAgICAgdGhpcy5vYmplY3QubG9va0F0KCB0aGlzLnRhcmdldCApO1xuXG4gICAgICAgIHRoZXRhRGVsdGEgPSAwO1xuICAgICAgICBwaGlEZWx0YSA9IDA7XG4gICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgcGFuLnNldCggMCwgMCwgMCApO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIHVwZGF0ZSBjb25kaXRpb24gaXM6XG4gICAgICAgICAqIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuICAgICAgICAgKiB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcbiAgICAgICAgICovXG4gICAgICAgIGlmICggbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCB0aGlzLm9iamVjdC5wb3NpdGlvbiApID4gRVBTXG5cdFx0ICAgIHx8IDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uKSkgPiBFUFMgKSB7XG5cbiAgICAgICAgICAgIGlmICggaWdub3JlVXBkYXRlICE9PSB0cnVlICkgeyB0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7IH1cblxuICAgICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkoIHRoaXMub2JqZWN0LnBvc2l0aW9uICk7XG4gICAgICAgICAgICBsYXN0UXVhdGVybmlvbi5jb3B5ICh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuY29weSggdGhpcy50YXJnZXQwICk7XG4gICAgICAgIHRoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHRoaXMucG9zaXRpb24wICk7XG4gICAgICAgIHRoaXMub2JqZWN0Lnpvb20gPSB0aGlzLnpvb20wO1xuXG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBwaGk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhldGE7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuICAgICAgICByZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTtcblxuICAgXHRcdG1vbWVudHVtTGVmdCA9IG1vbWVudHVtVXAgPSAwO1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5QQU47XG5cbiAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS51cGRhdGUoKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG4gICAgICAgICAgICBpZiggZXZlbnRQcmV2aW91cyApe1xuICAgICAgICAgICAgICAgIG1vbWVudHVtTGVmdCA9IGV2ZW50LmNsaWVudFggLSBldmVudFByZXZpb3VzLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgbW9tZW50dW1VcCA9IGV2ZW50LmNsaWVudFkgLSBldmVudFByZXZpb3VzLmNsaWVudFk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50UHJldmlvdXMgPSBldmVudDtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlPdXQoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgcGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG4gICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSBzY29wZS51cGRhdGUoKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCggLyogZXZlbnQgKi8gKSB7XG5cbiAgICAgICAgbW9tZW50dW1PbiA9IHRydWU7XG5cbiAgICAgICAgZXZlbnRQcmV2aW91cyA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG4gICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgfHwgc3RhdGUgIT09IFNUQVRFLk5PTkUgKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGRlbHRhID0gMDtcblxuICAgICAgICBpZiAoIGV2ZW50LndoZWVsRGVsdGEgIT09IHVuZGVmaW5lZCApIHsgLy8gV2ViS2l0IC8gT3BlcmEgLyBFeHBsb3JlciA5XG5cbiAgICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxuXG4gICAgICAgICAgICBkZWx0YSA9IC0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgem9vbU91dCA9IGRlbHRhID4gMDtcbiAgICAgICAgY29uc3Qgem9vbUluID0gZGVsdGEgPCAwO1xuXG4gICAgICAgIGlmICggIXNjb3BlLnJldmVydFpvb21TY3JvbGxEaXJlY3Rpb24gPyB6b29tT3V0IDogIXpvb21PdXQgKSB7XG5cbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5T3V0KCk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92ICsgMVxuICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCAhc2NvcGUucmV2ZXJ0Wm9vbVNjcm9sbERpcmVjdGlvbiA/IHpvb21JbiA6ICF6b29tSW4gKSB7XG5cbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5SW4oKTtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcbiAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgLSAxXG4gICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlVcCAoIGV2ZW50ICkge1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxuICAgICAgICAgICAga2V5VXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG4gICAgICAgICAgICBrZXlCb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuICAgICAgICAgICAga2V5TGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAga2V5UmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub0tleXMgPT09IHRydWUgfHwgc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuVVA6XG4gICAgICAgICAgICBrZXlVcCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAga2V5Qm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuICAgICAgICAgICAga2V5TGVmdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG4gICAgICAgICAgICBrZXlSaWdodCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleVVwIHx8IGtleUJvdHRvbSB8fCBrZXlMZWZ0IHx8IGtleVJpZ2h0KSB7XG5cbiAgICAgICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoa2V5VXApIG1vbWVudHVtVXAgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleUJvdHRvbSkgbW9tZW50dW1VcCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleUxlZnQpIG1vbWVudHVtTGVmdCA9IC0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XG4gICAgICAgICAgICBpZiAoa2V5UmlnaHQpIG1vbWVudHVtTGVmdCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTtcblxuICAgICAgICBtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG4gICAgICAgIGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudFByZXZpb3VzLnBhZ2VYO1xuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudFByZXZpb3VzLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0ge1xuICAgICAgICAgICAgICAgIHBhZ2VYOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsXG4gICAgICAgICAgICAgICAgcGFnZVk6IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5tYXhGb3Y7XG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcbiAgICAgICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxuICAgICAgICAgICAgICAgICAgICA6IHNjb3BlLm1pbkZvdjtcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47XG5cbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsICk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUgKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24gKTtcblxuICAgIH07XG5cbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSwgZmFsc2UgKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApOyAvLyBmaXJlZm94XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCBvbktleVVwLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuXG4gICAgLy8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKTtcblxufTtcblxuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBPcmJpdENvbnRyb2xzXG5cbn0gKTtcblxuZXhwb3J0IHsgT3JiaXRDb250cm9scyB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIERldmljZSBPcmllbnRhdGlvbiBDb250cm9sXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlcm5hbCBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXG4gKiBAcGFyYW0ge1RIUkVFLkNhbWVyYX0gY2FtZXJhIFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tRWxlbWVudCBcbiAqL1xuZnVuY3Rpb24gRGV2aWNlT3JpZW50YXRpb25Db250cm9scyAoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXG4gICAgdmFyIHJvdFkgPSAwO1xuICAgIHZhciByb3RYID0gMDtcbiAgICB2YXIgdGVtcFggPSAwO1xuICAgIHZhciB0ZW1wWSA9IDA7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5yZW9yZGVyKCAnWVhaJyApO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5kZXZpY2VPcmllbnRhdGlvbiA9IHt9O1xuICAgIHRoaXMuc2NyZWVuT3JpZW50YXRpb24gPSAwO1xuXG4gICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gMDtcblxuXG4gICAgdmFyIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICBzY29wZS5kZXZpY2VPcmllbnRhdGlvbiA9IGV2ZW50O1xuXG4gICAgfTtcblxuICAgIHZhciBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9IHdpbmRvdy5vcmllbnRhdGlvbiB8fCAwO1xuXG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoU3RhcnRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcblxuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaE1vdmVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHJvdFkgKz0gVEhSRUUuTWF0aC5kZWdUb1JhZCggKCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSB0ZW1wWCApIC8gNCApO1xuICAgICAgICByb3RYICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggdGVtcFkgLSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKSAvIDQgKTtcblxuICAgICAgICBzY29wZS51cGRhdGVBbHBoYU9mZnNldEFuZ2xlKCByb3RZICk7XG5cbiAgICAgICAgdGVtcFggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVg7XG4gICAgICAgIHRlbXBZID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZO1xuXG4gICAgfTtcblxuICAgIC8vIFRoZSBhbmdsZXMgYWxwaGEsIGJldGEgYW5kIGdhbW1hIGZvcm0gYSBzZXQgb2YgaW50cmluc2ljIFRhaXQtQnJ5YW4gYW5nbGVzIG9mIHR5cGUgWi1YJy1ZJydcblxuICAgIHZhciBzZXRDYW1lcmFRdWF0ZXJuaW9uID0gZnVuY3Rpb24oIHF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICkge1xuXG4gICAgICAgIHZhciB6ZWUgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMSApO1xuXG4gICAgICAgIHZhciBldWxlciA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXG4gICAgICAgIHZhciBxMCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgdmFyIHExID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oIC0gTWF0aC5zcXJ0KCAwLjUgKSwgMCwgMCwgTWF0aC5zcXJ0KCAwLjUgKSApOyAvLyAtIFBJLzIgYXJvdW5kIHRoZSB4LWF4aXNcblxuICAgICAgICB2YXIgdmVjdG9yRmluZ2VyWTtcbiAgICAgICAgdmFyIGZpbmdlclFZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICAgICAgdmFyIGZpbmdlclFYID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgICAgICBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDAgKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAxODAgKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgcm90WCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDkwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAtIDkwKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcTEubXVsdGlwbHkoIGZpbmdlclFZICk7XG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWCApO1xuXG4gICAgICAgIGV1bGVyLnNldCggYmV0YSwgYWxwaGEsIC0gZ2FtbWEsICdZWFonICk7IC8vICdaWFknIGZvciB0aGUgZGV2aWNlLCBidXQgJ1lYWicgZm9yIHVzXG5cbiAgICAgICAgcXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIGV1bGVyICk7IC8vIG9yaWVudCB0aGUgZGV2aWNlXG5cbiAgICAgICAgcXVhdGVybmlvbi5tdWx0aXBseSggcTEgKTsgLy8gY2FtZXJhIGxvb2tzIG91dCB0aGUgYmFjayBvZiB0aGUgZGV2aWNlLCBub3QgdGhlIHRvcFxuXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHEwLnNldEZyb21BeGlzQW5nbGUoIHplZSwgLSBvcmllbnQgKSApOyAvLyBhZGp1c3QgZm9yIHNjcmVlbiBvcmllbnRhdGlvblxuXG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCgpOyAvLyBydW4gb25jZSBvbiBsb2FkXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZUV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgICAgICBzY29wZS5lbmFibGVkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgb25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApLCBmYWxzZSApO1xuXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcblxuICAgICAgICBzY29wZS5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiggaWdub3JlVXBkYXRlICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFscGhhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5hbHBoYSApICsgc2NvcGUuYWxwaGFPZmZzZXRBbmdsZSA6IDA7IC8vIFpcbiAgICAgICAgdmFyIGJldGEgPSBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5iZXRhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSApIDogMDsgLy8gWCdcbiAgICAgICAgdmFyIGdhbW1hID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5nYW1tYSApIDogMDsgLy8gWScnXG4gICAgICAgIHZhciBvcmllbnQgPSBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uICkgOiAwOyAvLyBPXG5cbiAgICAgICAgc2V0Q2FtZXJhUXVhdGVybmlvbiggc2NvcGUuY2FtZXJhLnF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICk7XG4gICAgICAgIHNjb3BlLmFscGhhID0gYWxwaGE7XG5cbiAgICAgICAgaWYgKCBpZ25vcmVVcGRhdGUgIT09IHRydWUgKSB7IHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7IH1cblxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZUFscGhhT2Zmc2V0QW5nbGUgPSBmdW5jdGlvbiggYW5nbGUgKSB7XG5cbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5jb25uZWN0KCk7XG5cbn07XG5cbkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXG5cbn0gKTtcblxuZXhwb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9OyIsIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIENhcmRib2FyZCBFZmZlY3QgQ29tcG9zZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIENhcmRib2FyZEVmZmVjdFxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcbiAqL1xuY2xhc3MgQ2FyZGJvYXJkRWZmZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKCByZW5kZXJlciApIHtcbiAgICAgICAgdmFyIF9jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtIDEsIDEsIDEsIC0gMSwgMCwgMSApO1xuXG4gICAgICAgIHZhciBfc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgXG4gICAgICAgIHZhciBfc3RlcmVvID0gbmV3IFRIUkVFLlN0ZXJlb0NhbWVyYSgpO1xuICAgICAgICBfc3RlcmVvLmFzcGVjdCA9IDAuNTtcbiAgXG4gICAgICAgIHZhciBfcGFyYW1zID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXQgfTtcbiAgXG4gICAgICAgIHZhciBfcmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCA1MTIsIDUxMiwgX3BhcmFtcyApO1xuICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3JUZXN0ID0gdHJ1ZTtcbiAgICAgICAgX3JlbmRlclRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xuICBcbiAgICAgICAgLypcbiAgICAgICAgICogRGlzdG9ydGlvbiBNZXNoIHBvcnRlZCBmcm9tOlxuICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Rpc3RvcnRpb24vYmFycmVsLWRpc3RvcnRpb24tZnJhZ21lbnQuanNcbiAgICAgICAgICovXG4gIFxuICAgICAgICB2YXIgZGlzdG9ydGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjQ0MSwgMC4xNTYgKTtcbiAgXG4gICAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAxLCAxLCAxMCwgMjAgKS5yZW1vdmVBdHRyaWJ1dGUoICdub3JtYWwnICkudG9Ob25JbmRleGVkKCk7XG4gIFxuICAgICAgICB2YXIgcG9zaXRpb25zID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcbiAgICAgICAgdmFyIHV2cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXk7XG4gIFxuICAgICAgICAvLyBkdXBsaWNhdGVcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudCAqPSAyO1xuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmNvdW50ICo9IDI7XG4gIFxuICAgICAgICB2YXIgcG9zaXRpb25zMiA9IG5ldyBGbG9hdDMyQXJyYXkoIHBvc2l0aW9ucy5sZW5ndGggKiAyICk7XG4gICAgICAgIHBvc2l0aW9uczIuc2V0KCBwb3NpdGlvbnMgKTtcbiAgICAgICAgcG9zaXRpb25zMi5zZXQoIHBvc2l0aW9ucywgcG9zaXRpb25zLmxlbmd0aCApO1xuICBcbiAgICAgICAgdmFyIHV2czIgPSBuZXcgRmxvYXQzMkFycmF5KCB1dnMubGVuZ3RoICogMiApO1xuICAgICAgICB1dnMyLnNldCggdXZzICk7XG4gICAgICAgIHV2czIuc2V0KCB1dnMsIHV2cy5sZW5ndGggKTtcbiAgXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aCAvIDM7XG4gIFxuICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGwgPSBwb3NpdGlvbnMyLmxlbmd0aCAvIDM7IGkgPCBsOyBpICsrICkge1xuICBcbiAgICAgICAgICAgIHZlY3Rvci54ID0gcG9zaXRpb25zMlsgaSAqIDMgKyAwIF07XG4gICAgICAgICAgICB2ZWN0b3IueSA9IHBvc2l0aW9uczJbIGkgKiAzICsgMSBdO1xuICBcbiAgICAgICAgICAgIHZhciBkb3QgPSB2ZWN0b3IuZG90KCB2ZWN0b3IgKTtcbiAgICAgICAgICAgIHZhciBzY2FsYXIgPSAxLjUgKyAoIGRpc3RvcnRpb24ueCArIGRpc3RvcnRpb24ueSAqIGRvdCApICogZG90O1xuICBcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBpIDwgbGVuZ3RoID8gMCA6IDE7XG4gIFxuICAgICAgICAgICAgcG9zaXRpb25zMlsgaSAqIDMgKyAwIF0gPSAoIHZlY3Rvci54IC8gc2NhbGFyICkgKiAxLjUgLSAwLjUgKyBvZmZzZXQ7XG4gICAgICAgICAgICBwb3NpdGlvbnMyWyBpICogMyArIDEgXSA9ICggdmVjdG9yLnkgLyBzY2FsYXIgKSAqIDMuMDtcbiAgXG4gICAgICAgICAgICB1dnMyWyBpICogMiBdID0gKCB1dnMyWyBpICogMiBdICsgb2Zmc2V0ICkgKiAwLjU7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gcG9zaXRpb25zMjtcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5hcnJheSA9IHV2czI7XG4gIFxuICAgICAgICAvL1xuICBcbiAgICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG1hcDogX3JlbmRlclRhcmdldC50ZXh0dXJlIH0gKTtcbiAgICAgICAgdmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgICAgIF9zY2VuZS5hZGQoIG1lc2ggKTtcbiAgXG4gICAgICAgIC8vXG4gIFxuICAgICAgICB0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG4gIFxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuICBcbiAgICAgICAgICAgIHZhciBwaXhlbFJhdGlvID0gcmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xuICBcbiAgICAgICAgICAgIF9yZW5kZXJUYXJnZXQuc2V0U2l6ZSggd2lkdGggKiBwaXhlbFJhdGlvLCBoZWlnaHQgKiBwaXhlbFJhdGlvICk7XG4gIFxuICAgICAgICB9O1xuICBcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XG4gIFxuICAgICAgICAgICAgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcbiAgXG4gICAgICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcbiAgXG4gICAgICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XG4gIFxuICAgICAgICAgICAgdmFyIHdpZHRoID0gX3JlbmRlclRhcmdldC53aWR0aCAvIDI7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gX3JlbmRlclRhcmdldC5oZWlnaHQ7XG4gIFxuICAgICAgICAgICAgaWYgKCByZW5kZXJlci5hdXRvQ2xlYXIgKSByZW5kZXJlci5jbGVhcigpO1xuICBcbiAgICAgICAgICAgIF9yZW5kZXJUYXJnZXQuc2Npc3Nvci5zZXQoIDAsIDAsIHdpZHRoLCBoZWlnaHQgKTtcbiAgICAgICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhTCApO1xuICBcbiAgICAgICAgICAgIHJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcbiAgXG4gICAgICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3Iuc2V0KCB3aWR0aCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICAgICAgX3JlbmRlclRhcmdldC52aWV3cG9ydC5zZXQoIHdpZHRoLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhUiApO1xuICBcbiAgICAgICAgICAgIHJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcbiAgXG4gICAgICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIG51bGwgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlciggX3NjZW5lLCBfY2FtZXJhICk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgU3RlcmVvIEVmZmVjdCBDb21wb3NlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgU3RlcmVvRWZmZWN0XG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIFxuICovXG5jbGFzcyBTdGVyZW9FZmZlY3Qge1xuICAgIGNvbnN0cnVjdG9yICggcmVuZGVyZXIgKSB7XG4gICAgICAgIHZhciBfc3RlcmVvID0gbmV3IFRIUkVFLlN0ZXJlb0NhbWVyYSgpO1xuICAgICAgICBfc3RlcmVvLmFzcGVjdCA9IDAuNTtcbiAgICAgICAgdmFyIHNpemUgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgICAgIHRoaXMuc2V0RXllU2VwYXJhdGlvbiA9IGZ1bmN0aW9uICggZXllU2VwICkge1xuXG4gICAgICAgICAgICBfc3RlcmVvLmV5ZVNlcCA9IGV5ZVNlcDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cbiAgICAgICAgICAgIGlmICggY2FtZXJhLnBhcmVudCA9PT0gbnVsbCApIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLmdldFNpemUoIHNpemUgKTtcblxuICAgICAgICAgICAgaWYgKCByZW5kZXJlci5hdXRvQ2xlYXIgKSByZW5kZXJlci5jbGVhcigpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIHRydWUgKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvciggMCwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRWaWV3cG9ydCggMCwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3Nvciggc2l6ZS53aWR0aCAvIDIsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhUiApO1xuXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yVGVzdCggZmFsc2UgKTtcblxuICAgICAgICB9O1xuICAgIH1cbiAgXG59O1xuXG5leHBvcnQgeyBTdGVyZW9FZmZlY3QgfTsiLCJpbXBvcnQgeyBNT0RFUywgQ09OVFJPTFMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scyc7XG5pbXBvcnQgeyBDYXJkYm9hcmRFZmZlY3QgfSBmcm9tICcuLi9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QnO1xuaW1wb3J0IHsgU3RlcmVvRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldC9XaWRnZXQnO1xuaW1wb3J0IHsgUmV0aWNsZSB9IGZyb20gJy4uL2ludGVyZmFjZS9SZXRpY2xlJztcbmltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvUGFub3JhbWEnO1xuaW1wb3J0IHsgVmlkZW9QYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xuaW1wb3J0IHsgQ2FtZXJhUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVmlld2VyIGNvbnRhaW5zIHByZS1kZWZpbmVkIHNjZW5lLCBjYW1lcmEgYW5kIHJlbmRlcmVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBVc2UgY3VzdG9tIG9yIGRlZmF1bHQgY29uZmlnIG9wdGlvbnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmNvbnRhaW5lcl0gLSBBIEhUTUxFbGVtZW50IHRvIGhvc3QgdGhlIGNhbnZhc1xuICogQHBhcmFtIHtUSFJFRS5TY2VuZX0gW29wdGlvbnMuc2NlbmU9VEhSRUUuU2NlbmVdIC0gQSBUSFJFRS5TY2VuZSB3aGljaCBjb250YWlucyBwYW5vcmFtYSBhbmQgM0Qgb2JqZWN0c1xuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IFtvcHRpb25zLmNhbWVyYT1USFJFRS5QZXJzcGVjdGl2ZUNhbWVyYV0gLSBBIFRIUkVFLkNhbWVyYSB0byB2aWV3IHRoZSBzY2VuZVxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSBbb3B0aW9ucy5yZW5kZXJlcj1USFJFRS5XZWJHTFJlbmRlcmVyXSAtIEEgVEhSRUUuV2ViR0xSZW5kZXJlciB0byByZW5kZXIgY2FudmFzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbnRyb2xCYXI9dHJ1ZV0gLSBTaG93L2hpZGUgY29udHJvbCBiYXIgb24gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyXG4gKiBAcGFyYW0ge2FycmF5fSAgIFtvcHRpb25zLmNvbnRyb2xCdXR0b25zPVtdXSAtIEJ1dHRvbiBuYW1lcyB0byBtb3VudCBvbiBjb250cm9sQmFyIGlmIGNvbnRyb2xCYXIgZXhpc3RzLCBEZWZhdWx0cyB0byBbJ2Z1bGxzY3JlZW4nLCAnc2V0dGluZycsICd2aWRlbyddXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhcj1mYWxzZV0gLSBBdXRvIGhpZGUgY29udHJvbCBiYXIgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdD10cnVlXSAtIEF1dG8gaGlkZSBpbmZvc3BvdHMgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbFZpZXc9ZmFsc2VdIC0gQWxsb3cgb25seSBob3Jpem9udGFsIGNhbWVyYSBjb250cm9sXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNsaWNrVG9sZXJhbmNlPTEwXSAtIERpc3RhbmNlIHRvbGVyYW5jZSB0byB0aWdnZXIgY2xpY2sgLyB0YXAgZXZlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuY2FtZXJhRm92PTYwXSAtIENhbWVyYSBmaWVsZCBvZiB2aWV3IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldmVyc2VEcmFnZ2luZz1mYWxzZV0gLSBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbmFibGVSZXRpY2xlPWZhbHNlXSAtIEVuYWJsZSByZXRpY2xlIGZvciBtb3VzZWxlc3MgaW50ZXJhY3Rpb24gb3RoZXIgdGhhbiBWUiBtb2RlXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmR3ZWxsVGltZT0xNTAwXSAtIER3ZWxsIHRpbWUgZm9yIHJldGljbGUgc2VsZWN0aW9uIGluIG1zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0PXRydWVdIC0gQXV0byBzZWxlY3QgYSBjbGlja2FibGUgdGFyZ2V0IGFmdGVyIGR3ZWxsVGltZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52aWV3SW5kaWNhdG9yPWZhbHNlXSAtIEFkZHMgYW4gYW5nbGUgdmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdCBjb3JuZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuaW5kaWNhdG9yU2l6ZT0zMF0gLSBTaXplIG9mIFZpZXcgSW5kaWNhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gIFtvcHRpb25zLm91dHB1dD0nbm9uZSddIC0gV2hldGhlciBhbmQgd2hlcmUgdG8gb3V0cHV0IHJheWNhc3QgcG9zaXRpb24uIENvdWxkIGJlICdldmVudCcsICdjb25zb2xlJyBvciAnb3ZlcmxheScuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Sb3RhdGU9ZmFsc2VdIC0gQXV0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkPTIuMF0gLSBBdXRvIHJvdGF0ZSBzcGVlZCBhcyBpbiBkZWdyZWUgcGVyIHNlY29uZC4gUG9zaXRpdmUgaXMgY291bnRlci1jbG9ja3dpc2UgYW5kIG5lZ2F0aXZlIGlzIGNsb2Nrd2lzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbj01MDAwXSAtIER1cmF0aW9uIGJlZm9yZSBhdXRvIHJvdGF0YXRpb24gd2hlbiBubyB1c2VyIGludGVyYWN0aXZpdHkgaW4gbXNcbiAqL1xuY2xhc3MgVmlld2VyIGV4dGVuZHMgVEhSRUUuRXZlbnREaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5jb250cm9sQmFyID0gb3B0aW9ucy5jb250cm9sQmFyICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNvbnRyb2xCYXIgOiB0cnVlO1xuICAgICAgICBvcHRpb25zLmNvbnRyb2xCdXR0b25zID0gb3B0aW9ucy5jb250cm9sQnV0dG9ucyB8fCBbICdmdWxsc2NyZWVuJywgJ3NldHRpbmcnLCAndmlkZW8nIF07XG4gICAgICAgIG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyID0gb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyIDogZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCA9IG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90IDogdHJ1ZTtcbiAgICAgICAgb3B0aW9ucy5ob3Jpem9udGFsVmlldyA9IG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgOiBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5jbGlja1RvbGVyYW5jZSA9IG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgfHwgMTA7XG4gICAgICAgIG9wdGlvbnMuY2FtZXJhRm92ID0gb3B0aW9ucy5jYW1lcmFGb3YgfHwgNjA7XG4gICAgICAgIG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nID0gb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmcgfHwgZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuZW5hYmxlUmV0aWNsZSA9IG9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5kd2VsbFRpbWUgPSBvcHRpb25zLmR3ZWxsVGltZSB8fCAxNTAwO1xuICAgICAgICBvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ID0gb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA6IHRydWU7XG4gICAgICAgIG9wdGlvbnMudmlld0luZGljYXRvciA9IG9wdGlvbnMudmlld0luZGljYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy52aWV3SW5kaWNhdG9yIDogZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuaW5kaWNhdG9yU2l6ZSA9IG9wdGlvbnMuaW5kaWNhdG9yU2l6ZSB8fCAzMDtcbiAgICAgICAgb3B0aW9ucy5vdXRwdXQgPSBvcHRpb25zLm91dHB1dCA/IG9wdGlvbnMub3V0cHV0IDogJ25vbmUnO1xuICAgICAgICBvcHRpb25zLmF1dG9Sb3RhdGUgPSBvcHRpb25zLmF1dG9Sb3RhdGUgfHwgZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkID0gb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQgfHwgMi4wO1xuICAgICAgICBvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gPSBvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gfHwgNTAwMDtcbiAgXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIFxuICAgICAgICAvKlxuICAgICAgICAgKiBDU1MgSWNvblxuICAgICAgICAgKiBjb25zdCBzdHlsZUxvYWRlciA9IG5ldyBTdHlsZUxvYWRlcigpO1xuICAgICAgICAgKiBzdHlsZUxvYWRlci5pbmplY3QoICdpY29ubycgKTtcbiAgICAgICAgICovXG4gIFxuICAgICAgICAvLyBDb250YWluZXJcbiAgICAgICAgaWYgKCBvcHRpb25zLmNvbnRhaW5lciApIHtcbiAgXG4gICAgICAgICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fd2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb250YWluZXIuX2hlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWNvbnRhaW5lcicgKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBjb250YWluZXIuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjb250YWluZXIuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gIFxuICAgICAgICB0aGlzLmNhbWVyYSA9IG9wdGlvbnMuY2FtZXJhIHx8IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggdGhpcy5vcHRpb25zLmNhbWVyYUZvdiwgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQsIDEsIDEwMDAwICk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBvcHRpb25zLnNjZW5lIHx8IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9ICk7XG4gICAgICAgIHRoaXMuc2NlbmVSZXRpY2xlID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIFxuICAgICAgICB0aGlzLnZpZXdJbmRpY2F0b3JTaXplID0gdGhpcy5vcHRpb25zLmluZGljYXRvclNpemU7XG4gIFxuICAgICAgICB0aGlzLnJldGljbGUgPSB7fTtcbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlO1xuICBcbiAgICAgICAgdGhpcy5tb2RlID0gTU9ERVMuTk9STUFMO1xuICBcbiAgICAgICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XG4gICAgICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSBudWxsO1xuICAgICAgICB0aGlzLmluZm9zcG90ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSBudWxsO1xuICBcbiAgICAgICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMuY2FtZXJhRnJ1c3R1bSA9IG5ldyBUSFJFRS5GcnVzdHVtKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuICBcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudCA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLnRvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaDtcbiAgXG4gICAgICAgIC8vIEhhbmRsZXIgcmVmZXJlbmNlc1xuICAgICAgICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiA9IHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9LRVlfRE9XTiA9IHRoaXMub25LZXlEb3duLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgdGhpcy5IQU5ETEVSX0tFWV9VUCA9IHRoaXMub25LZXlVcC5iaW5kKCB0aGlzICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9UQVAgPSB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIHtcbiAgICAgICAgICAgIGNsaWVudFg6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcbiAgICAgICAgICAgIGNsaWVudFk6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcbiAgICAgICAgfSApO1xuICBcbiAgICAgICAgLy8gRmxhZyBmb3IgaW5mb3Nwb3Qgb3V0cHV0XG4gICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XG4gIFxuICAgICAgICAvLyBBbmltYXRpb25zXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuICBcbiAgICAgICAgLy8gUmVuZGVyZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweDAwMDAwMCwgMCApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuICBcbiAgICAgICAgLy8gQXBwZW5kIFJlbmRlcmVyIEVsZW1lbnQgdG8gY29udGFpbmVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtY2FudmFzJyApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCApO1xuICBcbiAgICAgICAgLy8gQ2FtZXJhIENvbnRyb2xzXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKCB0aGlzLmNhbWVyYSwgdGhpcy5jb250YWluZXIgKTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmlkID0gJ29yYml0JztcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm5vUGFuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IHRoaXMub3B0aW9ucy5hdXRvUm90YXRlU3BlZWQ7XG4gIFxuICAgICAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XG4gICAgICAgIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5pZCA9ICdkZXZpY2Utb3JpZW50YXRpb24nO1xuICAgICAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTtcbiAgXG4gICAgICAgIC8vIFJlZ2lzdGVyIGNoYW5nZSBldmVudCBpZiBwYXNzaXZlUmVuZXJpbmdcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucGFzc2l2ZVJlbmRlcmluZyApIHtcbiAgXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdwYXNzaXZlUmVuZGVyaW5nIGlzIG5vdyBkZXByZWNhdGVkJyApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQ29udHJvbHNcbiAgICAgICAgdGhpcy5jb250cm9scyA9IFsgdGhpcy5PcmJpdENvbnRyb2xzLCB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgXTtcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5PcmJpdENvbnRyb2xzO1xuICBcbiAgICAgICAgLy8gQ2FyZGJvYXJkIGVmZmVjdFxuICAgICAgICB0aGlzLkNhcmRib2FyZEVmZmVjdCA9IG5ldyBDYXJkYm9hcmRFZmZlY3QoIHRoaXMucmVuZGVyZXIgKTtcbiAgICAgICAgdGhpcy5DYXJkYm9hcmRFZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuICBcbiAgICAgICAgLy8gU3RlcmVvIGVmZmVjdFxuICAgICAgICB0aGlzLlN0ZXJlb0VmZmVjdCA9IG5ldyBTdGVyZW9FZmZlY3QoIHRoaXMucmVuZGVyZXIgKTtcbiAgICAgICAgdGhpcy5TdGVyZW9FZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuICBcbiAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcbiAgXG4gICAgICAgIC8vIEFkZCBkZWZhdWx0IGhpZGRlbiByZXRpY2xlXG4gICAgICAgIHRoaXMuYWRkUmV0aWNsZSgpO1xuICBcbiAgICAgICAgLy8gTG9jayBob3Jpem9udGFsIHZpZXdcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgKSB7XG4gICAgICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubWluUG9sYXJBbmdsZSA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQWRkIENvbnRyb2wgVUlcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuY29udHJvbEJhciAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICB0aGlzLmFkZERlZmF1bHRDb250cm9sQmFyKCB0aGlzLm9wdGlvbnMuY29udHJvbEJ1dHRvbnMgKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQWRkIFZpZXcgSW5kaWNhdG9yXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnZpZXdJbmRpY2F0b3IgKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFZpZXdJbmRpY2F0b3IoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucmV2ZXJzZURyYWdnaW5nICkge1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlRHJhZ2dpbmdEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gUmVnaXN0ZXIgZXZlbnQgaWYgcmV0aWNsZSBpcyBlbmFibGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbW91c2VcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIE91dHB1dCBpbmZvc3BvdCBwb3NpdGlvbiB0byBhbiBvdmVybGF5IGNvbnRhaW5lciBpZiBzcGVjaWZpZWRcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ID09PSAnb3ZlcmxheScgKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE91dHB1dEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gUmVnaXN0ZXIgZG9tIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgXG4gICAgICAgIC8vIEFuaW1hdGVcbiAgICAgICAgdGhpcy5hbmltYXRlLmNhbGwoIHRoaXMgKTtcbiAgICB9XG4gICBcbiAgICAvKipcbiAgICAgKiBBZGQgYW4gb2JqZWN0IHRvIHRoZSBzY2VuZVxuICAgICAqIEF1dG9tYXRpY2FsbHkgaG9va3VwIHdpdGggcGFub2xlbnMtdmlld2VyLWhhbmRsZXIgbGlzdGVuZXJcbiAgICAgKiB0byBjb21tdW5pY2F0ZSB3aXRoIHZpZXdlciBtZXRob2RcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZCAoIG9iamVjdCApIHtcblxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICBcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKCBvYmplY3QgKTtcbiAgXG4gICAgICAgIC8vIEFsbCBvYmplY3QgYWRkZWQgdG8gc2NlbmUgaGFzICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicgZXZlbnQgdG8gaGFuZGxlIHZpZXdlciBjb21tdW5pY2F0aW9uXG4gICAgICAgIGlmICggb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gIFxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQWxsIG9iamVjdCBhZGRlZCB0byBzY2VuZSBiZWluZyBwYXNzZWQgd2l0aCBjb250YWluZXJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBQYW5vcmFtYSAmJiBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lciB9ICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIENhbWVyYVBhbm9yYW1hICkge1xuICBcbiAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1zY2VuZScsIHNjZW5lOiB0aGlzLnNjZW5lIH0gKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIEhvb2t1cCBkZWZhdWx0IHBhbm9yYW1hIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBpZiAoIG9iamVjdC50eXBlID09PSAncGFub3JhbWEnICkge1xuICBcbiAgICAgICAgICAgIHRoaXMuYWRkUGFub3JhbWFFdmVudExpc3RlbmVyKCBvYmplY3QgKTtcbiAgXG4gICAgICAgICAgICBpZiAoICF0aGlzLnBhbm9yYW1hICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhbm9yYW1hKCBvYmplY3QgKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIG9iamVjdCBmcm9tIHRoZSBzY2VuZVxuICAgICAqIEBwYXJhbSAge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBPYmplY3QgdG8gYmUgcmVtb3ZlZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmUgKCBvYmplY3QgKSB7XG4gIFxuICAgICAgICBpZiAoIG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuICBcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKCBvYmplY3QgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBBZGQgZGVmYXVsdCBjb250cm9sIGJhclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IC0gVGhlIGNvbnRyb2wgYnV0dG9ucyBhcnJheVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGREZWZhdWx0Q29udHJvbEJhciAoIGFycmF5ICkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLndpZGdldCApIHtcbiAgXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdEZWZhdWx0IGNvbnRyb2wgYmFyIGV4aXN0cycgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoIHRoaXMuY29udGFpbmVyICk7XG4gICAgICAgIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCYXIoKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCggYnV0dG9uTmFtZSA9PiB7XG4gIFxuICAgICAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCdXR0b24oIGJ1dHRvbk5hbWUgKTtcbiAgXG4gICAgICAgIH0gKTtcbiAgXG4gICAgICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFNldCBhIHBhbm9yYW1hIHRvIGJlIHRoZSBjdXJyZW50IG9uZVxuICAgICAqIEBwYXJhbSB7UGFub3JhbWF9IHBhbm8gLSBQYW5vcmFtYSB0byBiZSBzZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0UGFub3JhbWEgKCBwYW5vICkge1xuICBcbiAgICAgICAgY29uc3QgbGVhdmluZ1Bhbm9yYW1hID0gdGhpcy5wYW5vcmFtYTtcbiAgXG4gICAgICAgIGlmICggcGFuby50eXBlID09PSAncGFub3JhbWEnICYmIGxlYXZpbmdQYW5vcmFtYSAhPT0gcGFubyApIHtcbiAgXG4gICAgICAgICAgICAvLyBDbGVhciBleGlzaXRpbmcgaW5mb3Nwb3RcbiAgICAgICAgICAgIHRoaXMuaGlkZUluZm9zcG90KCk7XG4gIFxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJFbnRlckNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICBcbiAgICAgICAgICAgICAgICBpZiAoIGxlYXZpbmdQYW5vcmFtYSApIHsgbGVhdmluZ1Bhbm9yYW1hLm9uTGVhdmUoKTsgfVxuICAgICAgICAgICAgICAgIHBhbm8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCBhZnRlckVudGVyQ29tcGxldGUgKTtcbiAgXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCBhZnRlckVudGVyQ29tcGxldGUgKTtcbiAgXG4gICAgICAgICAgICAvLyBBc3NpZ24gYW5kIGVudGVyIHBhbm9yYW1hXG4gICAgICAgICAgICAodGhpcy5wYW5vcmFtYSA9IHBhbm8pLm9uRW50ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGV4ZWN1dGUgY29tbWFuZHMgZnJvbSBjaGlsZCBvYmplY3RzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gVGhlIGRpc3BhdGNoZWQgZXZlbnQgd2l0aCBtZXRob2QgYXMgZnVuY3Rpb24gbmFtZSBhbmQgZGF0YSBhcyBhbiBhcmd1bWVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBldmVudEhhbmRsZXIgKCBldmVudCApIHtcbiAgXG4gICAgICAgIGlmICggZXZlbnQubWV0aG9kICYmIHRoaXNbIGV2ZW50Lm1ldGhvZCBdICkge1xuICBcbiAgICAgICAgICAgIHRoaXNbIGV2ZW50Lm1ldGhvZCBdKCBldmVudC5kYXRhICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggZXZlbnQgdG8gYWxsIGRlc2NlbmRhbnRzXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IHRvIGJlIHBhc3NlZCBhbG9uZ1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiAoIGV2ZW50ICkge1xuICBcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0IHdpZGdldCBjb250ZW50XG4gICAgICogQG1ldGhvZCBhY3RpdmF0ZVdpZGdldEl0ZW1cbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBjb250cm9sSW5kZXggLSBDb250cm9sIGluZGV4XG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gbW9kZSAtIE1vZGVzIGZvciBlZmZlY3RzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFjdGl2YXRlV2lkZ2V0SXRlbSAoIGNvbnRyb2xJbmRleCwgbW9kZSApIHtcbiAgICAgICAgaWYgKCF0aGlzLndpZGdldCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1haW5NZW51ID0gdGhpcy53aWRnZXQubWFpbk1lbnU7XG4gICAgICAgIGNvbnN0IENvbnRyb2xNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAwIF07XG4gICAgICAgIGNvbnN0IE1vZGVNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAxIF07XG4gIFxuICAgICAgICBsZXQgaXRlbTtcbiAgXG4gICAgICAgIGlmICggY29udHJvbEluZGV4ICE9PSB1bmRlZmluZWQgKSB7XG4gIFxuICAgICAgICAgICAgc3dpdGNoICggY29udHJvbEluZGV4ICkge1xuICBcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XG4gIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAyIF07XG4gIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICBcbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcbiAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XHRcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuICAgICAgICAgICAgQ29udHJvbE1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIG1vZGUgIT09IHVuZGVmaW5lZCApIHtcbiAgXG4gICAgICAgICAgICBzd2l0Y2goIG1vZGUgKSB7XG4gIFxuICAgICAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XG4gIFxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMiBdO1xuICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgICAgICBjYXNlIE1PREVTLlNURVJFTzpcbiAgXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAzIF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICBcbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcbiAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHJlbmRlcmluZyBlZmZlY3RcbiAgICAgKiBAcGFyYW0gIHtNT0RFU30gbW9kZSAtIE1vZGVzIGZvciBlZmZlY3RzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZUVmZmVjdCAoIG1vZGUgKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gbW9kZSApIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICggbW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyB0aGlzLmRpc2FibGVFZmZlY3QoKTsgcmV0dXJuOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLm1vZGUgPSBtb2RlOyB9XG4gIFxuICAgICAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3Y7XG4gIFxuICAgICAgICBzd2l0Y2goIG1vZGUgKSB7XG4gIFxuICAgICAgICBjYXNlIE1PREVTLkNBUkRCT0FSRDpcbiAgXG4gICAgICAgICAgICB0aGlzLmVmZmVjdCA9IHRoaXMuQ2FyZGJvYXJkRWZmZWN0O1xuICAgICAgICAgICAgdGhpcy5lbmFibGVSZXRpY2xlQ29udHJvbCgpO1xuICBcbiAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XG4gIFxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLlN0ZXJlb0VmZmVjdDtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgZGVmYXVsdDpcbiAgXG4gICAgICAgICAgICB0aGlzLmVmZmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVSZXRpY2xlQ29udHJvbCgpO1xuICBcbiAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIHVuZGVmaW5lZCwgdGhpcy5tb2RlICk7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogRHVhbCBleWUgZWZmZWN0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3RcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRUb0NoaWxkcmVuKCB7IHR5cGU6ICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuICBcbiAgICAgICAgLy8gRm9yY2UgZWZmZWN0IHN0ZXJlbyBjYW1lcmEgdG8gdXBkYXRlIGJ5IHJlZnJlc2hpbmcgZm92XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdiArIDEwZS0zO1xuICAgICAgICB0aGlzLmVmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaCBtb2RlIGNoYW5nZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI21vZGUtY2hhbmdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdtb2RlLWNoYW5nZScsIG1vZGU6IHRoaXMubW9kZSB9ICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhZGRpdGlvbmFsIHJlbmRlcmluZyBlZmZlY3RcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzYWJsZUVmZmVjdCAoKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyByZXR1cm47IH1cbiAgXG4gICAgICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcbiAgXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BhdGNoIG1vZGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjbW9kZS1jaGFuZ2VcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ21vZGUtY2hhbmdlJywgbW9kZTogdGhpcy5tb2RlIH0gKTtcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZXRpY2xlIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZW5hYmxlUmV0aWNsZUNvbnRyb2wgKCkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLnJldGljbGUudmlzaWJsZSApIHsgcmV0dXJuOyB9XG4gIFxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gdHJ1ZTtcbiAgXG4gICAgICAgIC8vIFJlZ2lzdGVyIHJldGljbGUgZXZlbnQgYW5kIHVucmVnaXN0ZXIgbW91c2UgZXZlbnRcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xuICAgICAgICB0aGlzLnJldGljbGUuc2hvdygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUmV0aWNsZUV2ZW50KCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSByZXRpY2xlIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzYWJsZVJldGljbGVDb250cm9sICgpIHtcbiAgXG4gICAgICAgIHRoaXMudGVtcEVuYWJsZVJldGljbGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIC8vIFJlZ2lzdGVyIG1vdXNlIGV2ZW50IGFuZCB1bnJlZ2lzdGVyIHJldGljbGUgZXZlbnRcbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlclJldGljbGVFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcbiAgXG4gICAgICAgIH0gZWxzZSB7XG4gIFxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBFbmFibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVBdXRvUmF0ZSAoKSB7XG4gIFxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlQXV0b1JhdGUgKCkge1xuICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdmlkZW8gcGxheSBvciBzdG9wXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgVmlld2VyI3ZpZGVvLXRvZ2dsZVxuICAgICAqL1xuICAgIHRvZ2dsZVZpZGVvUGxheSAoIHBhdXNlICkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcbiAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvZ2dsZSB2aWRlbyBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdG9nZ2xlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdG9nZ2xlJywgcGF1c2U6IHBhdXNlIH0gKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudFRpbWUgaW4gYSB2aWRlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10aW1lXG4gICAgICovXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZSAoIHBlcmNlbnRhZ2UgKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMucGFub3JhbWEgaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xuICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0dGluZyB2aWRlbyB0aW1lIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10aW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdGltZScsIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2UgfSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiB2aWRlbyB1cGRhdGVzIGlmIGFuIHdpZGdldCBpcyBwcmVzZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgVmlld2VyI3ZpZGVvLXVwZGF0ZVxuICAgICAqL1xuICAgIG9uVmlkZW9VcGRhdGUgKCBwZXJjZW50YWdlICkge1xuICBcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogVmlkZW8gdXBkYXRlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdXBkYXRlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgICAgICovXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby11cGRhdGUnLCBwZXJjZW50YWdlOiBwZXJjZW50YWdlIH0gKTsgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEFkZCB1cGRhdGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGV2ZXJ5IGFuaW1hdGlvbiBmcmFtZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFVwZGF0ZUNhbGxiYWNrICggZm4gKSB7XG4gIFxuICAgICAgICBpZiAoIGZuICkge1xuICBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLnB1c2goIGZuICk7XG4gIFxuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlVXBkYXRlQ2FsbGJhY2sgKCBmbiApIHtcbiAgXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51cGRhdGVDYWxsYmFja3MuaW5kZXhPZiggZm4gKTtcbiAgXG4gICAgICAgIGlmICggZm4gJiYgaW5kZXggPj0gMCApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2hvdyB2aWRlbyB3aWRnZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvd1ZpZGVvV2lkZ2V0ICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdmlkZW8gd2lkZ2V0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tY29udHJvbC1zaG93XG4gICAgICAgICAqL1xuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tY29udHJvbC1zaG93JyB9ICk7IH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBIaWRlIHZpZGVvIHdpZGdldFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlVmlkZW9XaWRnZXQgKCkge1xuICBcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB2aWRlbyB3aWRnZXRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby1jb250cm9sLWhpZGVcbiAgICAgICAgICovXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby1jb250cm9sLWhpZGUnIH0gKTsgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB2aWRlbyBwbGF5IGJ1dHRvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVWaWRlb1BsYXlCdXR0b24gKCBwYXVzZWQgKSB7XG4gIFxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcbiAgXG4gICAgICAgIGlmICggd2lkZ2V0ICYmIHdpZGdldC52aWRlb0VsZW1lbnQgJiYgd2lkZ2V0LnZpZGVvRWxlbWVudC5jb250cm9sQnV0dG9uICkge1xuICBcbiAgICAgICAgICAgIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbi51cGRhdGUoIHBhdXNlZCApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEFkZCBkZWZhdWx0IHBhbm9yYW1hIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqIEBwYXJhbSB7UGFub3JhbWF9IHBhbm8gLSBUaGUgcGFub3JhbWEgdG8gYmUgYWRkZWQgd2l0aCBldmVudCBsaXN0ZW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRQYW5vcmFtYUV2ZW50TGlzdGVuZXIgKCBwYW5vICkge1xuICBcbiAgICAgICAgLy8gU2V0IGNhbWVyYSBjb250cm9sIG9uIGV2ZXJ5IHBhbm9yYW1hXG4gICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNldENhbWVyYUNvbnRyb2wuYmluZCggdGhpcyApICk7XG4gIFxuICAgICAgICAvLyBTaG93IGFuZCBoaWRlIHdpZGdldCBldmVudCBvbmx5IHdoZW4gaXQncyBWaWRlb1Bhbm9yYW1hXG4gICAgICAgIGlmICggcGFubyBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG4gIFxuICAgICAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMuc2hvd1ZpZGVvV2lkZ2V0LmJpbmQoIHRoaXMgKSApO1xuICAgICAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gIFxuICAgICAgICAgICAgICAgIGlmICggISh0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSkgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVWaWRlb1dpZGdldC5jYWxsKCB0aGlzICk7XG4gIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGNhbWVyYSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldENhbWVyYUNvbnRyb2wgKCkge1xuICBcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnRhcmdldC5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgY2FtZXJhIGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gQ3VycmVudCBuYXZpZ2F0aW9uIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RIUkVFLk9yYml0Q29udHJvbHN8VEhSRUUuRGV2aWNlT3JpZW50YXRpb25Db250cm9sc31cbiAgICAgKi9cbiAgICBnZXRDb250cm9sICgpIHtcbiAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2w7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IHNjZW5lXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1RIUkVFLlNjZW5lfSAtIEN1cnJlbnQgc2NlbmUgd2hpY2ggdGhlIHZpZXdlciBpcyBidWlsdCBvblxuICAgICAqL1xuICAgIGdldFNjZW5lICgpIHtcbiAgXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBjYW1lcmFcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7VEhSRUUuQ2FtZXJhfSAtIFRoZSBzY2VuZSBjYW1lcmFcbiAgICAgKi9cbiAgICBnZXRDYW1lcmEgKCkge1xuICBcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCByZW5kZXJlclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSAtIFRoZSByZW5kZXJlciB1c2luZyB3ZWJnbFxuICAgICAqL1xuICAgIGdldFJlbmRlcmVyICgpIHtcbiAgXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBob2xkcyByZW5kZXJlcmQgY2FudmFzXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyICgpIHtcbiAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgY29udHJvbCBpZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gQ29udHJvbCBpZC4gJ29yYml0JyBvciAnZGV2aWNlLW9yaWVudGF0aW9uJ1xuICAgICAqL1xuICAgIGdldENvbnRyb2xJZCAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmlkO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTmV4dCBjb250cm9sIGlkXG4gICAgICovXG4gICAgZ2V0TmV4dENvbnRyb2xJZCAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sc1sgdGhpcy5nZXROZXh0Q29udHJvbEluZGV4KCkgXS5pZDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgbmV4dCBuYXZpZ2F0aW9uIGNvbnRyb2wgaW5kZXhcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE5leHQgY29udHJvbCBpbmRleFxuICAgICAqL1xuICAgIGdldE5leHRDb250cm9sSW5kZXggKCkge1xuICBcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLmNvbnRyb2xzO1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjb250cm9scy5pbmRleE9mKCBjb250cm9sICkgKyAxO1xuICBcbiAgICAgICAgcmV0dXJuICggbmV4dEluZGV4ID49IGNvbnRyb2xzLmxlbmd0aCApID8gMCA6IG5leHRJbmRleDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBTZXQgZmllbGQgb2YgdmlldyBvZiBjYW1lcmFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZm92XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldENhbWVyYUZvdiAoIGZvdiApIHtcbiAgXG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBjb250cm9sIGJ5IGluZGV4XG4gICAgICogQHBhcmFtICB7Q09OVFJPTFN9IGluZGV4IC0gSW5kZXggb2YgY2FtZXJhIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZW5hYmxlQ29udHJvbCAoIGluZGV4ICkge1xuICBcbiAgICAgICAgaW5kZXggPSAoIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRyb2xzLmxlbmd0aCApID8gaW5kZXggOiAwO1xuICBcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZWQgPSBmYWxzZTtcbiAgXG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY29udHJvbHNbIGluZGV4IF07XG4gIFxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IHRydWU7XG4gIFxuICAgICAgICBzd2l0Y2ggKCBpbmRleCApIHtcbiAgXG4gICAgICAgIGNhc2UgQ09OVFJPTFMuT1JCSVQ6XG4gIFxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSAxO1xuICBcbiAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgY2FzZSBDT05UUk9MUy5ERVZJQ0VPUklFTlRBVElPTjpcbiAgXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG4gIFxuICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICBkZWZhdWx0OlxuICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlKCk7XG4gIFxuICAgICAgICB0aGlzLmFjdGl2YXRlV2lkZ2V0SXRlbSggaW5kZXgsIHVuZGVmaW5lZCApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc2FibGUgY3VycmVudCBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc2FibGVDb250cm9sICgpIHtcbiAgXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIG5leHQgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0b2dnbGVOZXh0Q29udHJvbCAoKSB7XG4gIFxuICAgICAgICB0aGlzLmVuYWJsZUNvbnRyb2woIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2NyZWVuIFNwYWNlIFByb2plY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0U2NyZWVuVmVjdG9yICggd29ybGRWZWN0b3IgKSB7XG4gIFxuICAgICAgICBjb25zdCB2ZWN0b3IgPSB3b3JsZFZlY3Rvci5jbG9uZSgpO1xuICAgICAgICBjb25zdCB3aWR0aEhhbGYgPSAoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoICkgLyAyO1xuICAgICAgICBjb25zdCBoZWlnaHRIYWxmID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcbiAgXG4gICAgICAgIHZlY3Rvci5wcm9qZWN0KCB0aGlzLmNhbWVyYSApO1xuICBcbiAgICAgICAgdmVjdG9yLnggPSAoIHZlY3Rvci54ICogd2lkdGhIYWxmICkgKyB3aWR0aEhhbGY7XG4gICAgICAgIHZlY3Rvci55ID0gLSAoIHZlY3Rvci55ICogaGVpZ2h0SGFsZiApICsgaGVpZ2h0SGFsZjtcbiAgICAgICAgdmVjdG9yLnogPSAwO1xuICBcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBDaGVjayBTcHJpdGUgaW4gVmlld3BvcnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2hlY2tTcHJpdGVJblZpZXdwb3J0ICggc3ByaXRlICkge1xuICBcbiAgICAgICAgdGhpcy5jYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmNvcHkoICB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZCAgKS5pbnZlcnQoKTtcbiAgICAgICAgdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeC5tdWx0aXBseU1hdHJpY2VzKCB0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKTtcbiAgICAgICAgdGhpcy5jYW1lcmFGcnVzdHVtLnNldEZyb21Qcm9qZWN0aW9uTWF0cml4KCB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4ICk7XG4gIFxuICAgICAgICByZXR1cm4gc3ByaXRlLnZpc2libGUgJiYgdGhpcy5jYW1lcmFGcnVzdHVtLmludGVyc2VjdHNTcHJpdGUoIHNwcml0ZSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJldmVyc2VEcmFnZ2luZ0RpcmVjdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnJvdGF0ZVNwZWVkICo9IC0xO1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubW9tZW50dW1TY2FsaW5nRmFjdG9yICo9IC0xO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEFkZCByZXRpY2xlIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRSZXRpY2xlICgpIHtcbiAgXG4gICAgICAgIHRoaXMucmV0aWNsZSA9IG5ldyBSZXRpY2xlKCAweGZmZmZmZiwgdHJ1ZSwgdGhpcy5vcHRpb25zLmR3ZWxsVGltZSApO1xuICAgICAgICB0aGlzLnJldGljbGUuaGlkZSgpO1xuICAgICAgICB0aGlzLmNhbWVyYS5hZGQoIHRoaXMucmV0aWNsZSApO1xuICAgICAgICB0aGlzLnNjZW5lUmV0aWNsZS5hZGQoIHRoaXMuY2FtZXJhICk7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUd2VlbiBjb250cm9sIGxvb2tpbmcgY2VudGVyXG4gICAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IzfSB2ZWN0b3IgLSBWZWN0b3IgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHR3ZWVuQ29udHJvbENlbnRlciAoIHZlY3RvciwgZHVyYXRpb24sIGVhc2luZyApIHtcbiAgXG4gICAgICAgIGlmICggdGhpcy5jb250cm9sICE9PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XG4gIFxuICAgICAgICAgICAgcmV0dXJuO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gUGFzcyBpbiBhcmd1bWVudHMgYXMgYXJyYXlcbiAgICAgICAgaWYgKCB2ZWN0b3IgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHZlY3RvclsgMSBdO1xuICAgICAgICAgICAgZWFzaW5nID0gdmVjdG9yWyAyIF07XG4gICAgICAgICAgICB2ZWN0b3IgPSB2ZWN0b3JbIDAgXTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogMTAwMDtcbiAgICAgICAgZWFzaW5nID0gZWFzaW5nIHx8IFRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXQ7XG4gIFxuICAgICAgICBsZXQgc2NvcGUsIGhhLCB2YSwgY2h2LCBjdnYsIGh2LCB2diwgdnB0Yywgb3YsIG52O1xuICBcbiAgICAgICAgc2NvcGUgPSB0aGlzO1xuICBcbiAgICAgICAgY2h2ID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcbiAgICAgICAgY3Z2ID0gY2h2LmNsb25lKCk7XG4gIFxuICAgICAgICB2cHRjID0gdGhpcy5wYW5vcmFtYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkuc3ViKCB0aGlzLmNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcbiAgXG4gICAgICAgIGh2ID0gdmVjdG9yLmNsb25lKCk7XG4gICAgICAgIC8vIFNjYWxlIGVmZmVjdFxuICAgICAgICBodi54ICo9IC0xO1xuICAgICAgICBodi5hZGQoIHZwdGMgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdnYgPSBodi5jbG9uZSgpO1xuICBcbiAgICAgICAgY2h2LnkgPSAwO1xuICAgICAgICBodi55ID0gMDtcbiAgXG4gICAgICAgIGhhID0gTWF0aC5hdGFuMiggaHYueiwgaHYueCApIC0gTWF0aC5hdGFuMiggY2h2LnosIGNodi54ICk7XG4gICAgICAgIGhhID0gaGEgPiBNYXRoLlBJID8gaGEgLSAyICogTWF0aC5QSSA6IGhhO1xuICAgICAgICBoYSA9IGhhIDwgLU1hdGguUEkgPyBoYSArIDIgKiBNYXRoLlBJIDogaGE7XG4gICAgICAgIHZhID0gTWF0aC5hYnMoIGN2di5hbmdsZVRvKCBjaHYgKSArICggY3Z2LnkgKiB2di55IDw9IDAgPyB2di5hbmdsZVRvKCBodiApIDogLXZ2LmFuZ2xlVG8oIGh2ICkgKSApO1xuICAgICAgICB2YSAqPSB2di55IDwgY3Z2LnkgPyAxIDogLTE7XG4gIFxuICAgICAgICBvdiA9IHsgbGVmdDogMCwgdXA6IDAgfTtcbiAgICAgICAgbnYgPSB7IGxlZnQ6IDAsIHVwOiAwIH07XG4gIFxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XG4gIFxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbiggb3YgKVxuICAgICAgICAgICAgLnRvKCB7IGxlZnQ6IGhhIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5lYXNpbmcoIGVhc2luZyApXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24ob3Ype1xuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2wucm90YXRlTGVmdCggb3YubGVmdCAtIG52LmxlZnQgKTtcbiAgICAgICAgICAgICAgICBudi5sZWZ0ID0gb3YubGVmdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgXG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbiggb3YgKVxuICAgICAgICAgICAgLnRvKCB7IHVwOiB2YSB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAuZWFzaW5nKCBlYXNpbmcgKVxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uKG92KXtcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9sLnJvdGF0ZVVwKCBvdi51cCAtIG52LnVwICk7XG4gICAgICAgICAgICAgICAgbnYudXAgPSBvdi51cDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUd2VlbiBjb250cm9sIGxvb2tpbmcgY2VudGVyIGJ5IG9iamVjdFxuICAgICAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIE9iamVjdCB0byBiZSBsb29rZWQgYXQgdGhlIGNlbnRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MTAwMF0gLSBEdXJhdGlvbiB0byB0d2VlblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlYXNpbmc9VFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dF0gLSBFYXNpbmcgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdHdlZW5Db250cm9sQ2VudGVyQnlPYmplY3QgKCBvYmplY3QsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG4gIFxuICAgICAgICBsZXQgaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgPSBmYWxzZTtcbiAgXG4gICAgICAgIG9iamVjdC50cmF2ZXJzZUFuY2VzdG9ycyggZnVuY3Rpb24gKCBhbmNlc3RvciApIHtcbiAgXG4gICAgICAgICAgICBpZiAoIGFuY2VzdG9yLnNjYWxlUGxhY2VIb2xkZXIgKSB7XG4gIFxuICAgICAgICAgICAgICAgIGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgXG4gICAgICAgIGlmICggaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgKSB7XG4gIFxuICAgICAgICAgICAgY29uc3QgaW52ZXJ0WFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xuICBcbiAgICAgICAgICAgIHRoaXMudHdlZW5Db250cm9sQ2VudGVyKCBvYmplY3QuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLm11bHRpcGx5KCBpbnZlcnRYVmVjdG9yICksIGR1cmF0aW9uLCBlYXNpbmcgKTtcbiAgXG4gICAgICAgIH0gZWxzZSB7XG4gIFxuICAgICAgICAgICAgdGhpcy50d2VlbkNvbnRyb2xDZW50ZXIoIG9iamVjdC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICksIGR1cmF0aW9uLCBlYXNpbmcgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGNhbGxlZCB3aGVuIHdpbmRvdyBzaXplIGlzIGNoYW5nZWRcbiAgICAgKiBAZmlyZXMgVmlld2VyI3dpbmRvdy1yZXNpemVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd1dpZHRoXSAtIFNwZWNpZnkgaWYgY3VzdG9tIGVsZW1lbnQgaGFzIGNoYW5nZWQgd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd0hlaWdodF0gLSBTcGVjaWZ5IGlmIGN1c3RvbSBlbGVtZW50IGhhcyBjaGFuZ2VkIGhlaWdodFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbldpbmRvd1Jlc2l6ZSAoIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQgKSB7XG4gIFxuICAgICAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgXG4gICAgICAgIGNvbnN0IGV4cGFuZCA9IHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyggJ3Bhbm9sZW5zLWNvbnRhaW5lcicgKSB8fCB0aGlzLmNvbnRhaW5lci5pc0Z1bGxzY3JlZW47XG4gIFxuICAgICAgICBpZiAoIHdpbmRvd1dpZHRoICE9PSB1bmRlZmluZWQgJiYgd2luZG93SGVpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XG4gIFxuICAgICAgICAgICAgd2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl93aWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX2hlaWdodCA9IHdpbmRvd0hlaWdodDtcbiAgXG4gICAgICAgIH0gZWxzZSB7XG4gIFxuICAgICAgICAgICAgY29uc3QgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdFdpZHRoID0gaXNBbmRyb2lkIFxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSBcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIFxuICAgICAgICAgICAgY29uc3QgYWRqdXN0SGVpZ2h0ID0gaXNBbmRyb2lkIFxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIFxuICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICBcbiAgICAgICAgICAgIHdpZHRoID0gZXhwYW5kID8gYWRqdXN0V2lkdGggOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IGV4cGFuZCA/IGFkanVzdEhlaWdodCA6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICBcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG4gIFxuICAgICAgICAvLyBVcGRhdGUgcmV0aWNsZVxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IHRoaXMudGVtcEVuYWJsZVJldGljbGUgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaW5kb3cgcmVzaXppbmcgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN3aW5kb3ctcmVzaXplXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCAgLSBXaWR0aCBvZiB0aGUgd2luZG93XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgLSBIZWlnaHQgb2YgdGhlIHdpbmRvd1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd3aW5kb3ctcmVzaXplJywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3dpbmRvdy1yZXNpemUnLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0gKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBBZGQgb3V0cHV0IGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkT3V0cHV0RWxlbWVudCAoKSB7XG4gIFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMTBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzEwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuICAgICAgICB0aGlzLm91dHB1dERpdkVsZW1lbnQgPSBlbGVtZW50O1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE91dHB1dCBwb3NpdGlvbiBpbiBkZXZlbG9wZXIgY29uc29sZSBieSBob2xkaW5nIGRvd24gQ3RybCBidXR0b25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb3V0cHV0UG9zaXRpb24gKCkge1xuICBcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCggdGhpcy5wYW5vcmFtYSwgdHJ1ZSApO1xuICBcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XG4gIFxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBpbnRlcnNlY3RzWyAwIF0ucG9pbnQuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSB0aGlzLnBhbm9yYW1hLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcbiAgICAgICAgICAgIHBvaW50LnN1Yiggd29ybGQgKS5tdWx0aXBseSggY29udmVydGVyICk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICB6OiBwb2ludC56LnRvRml4ZWQoMiksXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtwb3NpdGlvbi54fSwgJHtwb3NpdGlvbi55fSwgJHtwb3NpdGlvbi56fWA7XG4gIFxuICAgICAgICAgICAgaWYgKCBwb2ludC5sZW5ndGgoKSA9PT0gMCApIHsgcmV0dXJuOyB9XG4gIFxuICAgICAgICAgICAgc3dpdGNoICggdGhpcy5vcHRpb25zLm91dHB1dCApIHtcbiAgXG4gICAgICAgICAgICBjYXNlICdldmVudCc6XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGlzcGF0Y2ggcmF5Y2FzdCBwb3NpdGlvbiBhcyBldmVudFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciNwb3NpdGlvbi1vdXRwdXRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bvc2l0aW9uLW91dHB1dCcsIHBvc2l0aW9uOiBwb3NpdGlvbiB9ICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgICAgY2FzZSAnY29uc29sZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCBtZXNzYWdlICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPbiBtb3VzZSBkb3duXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Nb3VzZURvd24gKCBldmVudCApIHtcbiAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgICAgICB0aGlzLnVzZXJNb3VzZS54ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHRoaXMudXNlck1vdXNlLnkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZWRvd24nO1xuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogT24gbW91c2UgbW92ZVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTW91c2VNb3ZlICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNlbW92ZSc7XG4gICAgICAgIHRoaXMub25UYXAoIGV2ZW50ICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogT24gbW91c2UgdXBcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlVXAgKCBldmVudCApIHtcbiAgXG4gICAgICAgIGxldCBvblRhcmdldCA9IGZhbHNlO1xuICBcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZXVwJztcbiAgXG4gICAgICAgIGNvbnN0IHR5cGUgPSAoIHRoaXMudXNlck1vdXNlLnggPj0gZXZlbnQuY2xpZW50WCAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSBcbiAgICAgICAgICAmJiB0aGlzLnVzZXJNb3VzZS54IDw9IGV2ZW50LmNsaWVudFggKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcbiAgICAgICAgICAmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcbiAgICAgICAgICAmJiB0aGlzLnVzZXJNb3VzZS55IDw9IGV2ZW50LmNsaWVudFkgKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgKSBcbiAgICAgICAgICB8fCAgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyBcbiAgICAgICAgICAmJiB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcbiAgICAgICAgICAmJiB0aGlzLnVzZXJNb3VzZS54IDw9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueSA+PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG4gICAgICAgICAgICA/ICdjbGljaycgOiB1bmRlZmluZWQ7XG4gIFxuICAgICAgICAvLyBFdmVudCBzaG91bGQgaGFwcGVuIG9uIGNhbnZhc1xuICAgICAgICBpZiAoIGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3Bhbm9sZW5zLWNhbnZhcycgKSApIHsgcmV0dXJuOyB9XG4gIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAgICAgaWYgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEgKSB7XG4gIFxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCB7IGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgfSwgdHlwZSApO1xuICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gIFxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCBldmVudCwgdHlwZSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdub25lJztcbiAgXG4gICAgICAgIGlmICggb25UYXJnZXQgKSB7IFxuICBcbiAgICAgICAgICAgIHJldHVybjsgXG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XG4gIFxuICAgICAgICAgICAgY29uc3QgeyBvcHRpb25zOiB7IGF1dG9IaWRlSW5mb3Nwb3QsIGF1dG9IaWRlQ29udHJvbEJhciB9LCBwYW5vcmFtYSwgdG9nZ2xlQ29udHJvbEJhciB9ID0gdGhpcztcbiAgXG4gICAgICAgICAgICBpZiAoIGF1dG9IaWRlSW5mb3Nwb3QgJiYgcGFub3JhbWEgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHBhbm9yYW1hLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSgpO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBpZiAoIGF1dG9IaWRlQ29udHJvbEJhciApIHtcbiAgXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udHJvbEJhcigpO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIHRhcCBldmVueSBmcmFtZVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uVGFwICggZXZlbnQsIHR5cGUgKSB7XG4gIFxuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5jb250YWluZXI7XG4gIFxuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50LnggPSAoICggZXZlbnQuY2xpZW50WCAtIGxlZnQgKSAvIGNsaWVudFdpZHRoICkgKiAyIC0gMTtcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHRvcCApIC8gY2xpZW50SGVpZ2h0ICkgKiAyICsgMTtcbiAgXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIHRoaXMucmF5Y2FzdGVyUG9pbnQsIHRoaXMuY2FtZXJhICk7XG4gIFxuICAgICAgICAvLyBSZXR1cm4gaWYgbm8gcGFub3JhbWEgXG4gICAgICAgIGlmICggIXRoaXMucGFub3JhbWEgKSB7IFxuICBcbiAgICAgICAgICAgIHJldHVybjsgXG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvdXRwdXQgaW5mb3Nwb3QgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSAnbW91c2Vkb3duJyAmJiB0aGlzLnRvdWNoU3VwcG9ydGVkIHx8IHRoaXMuT1VUUFVUX0lORk9TUE9UICkgeyBcbiAgXG4gICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uKCk7IFxuICBcbiAgICAgICAgfVxuICBcbiAgXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCB0aGlzLnBhbm9yYW1hLmNoaWxkcmVuLCB0cnVlICk7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdF9lbnRpdHkgPSB0aGlzLmdldENvbnZlcnRlZEludGVyc2VjdCggaW50ZXJzZWN0cyApO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApID8gaW50ZXJzZWN0c1swXS5vYmplY3QgOiB1bmRlZmluZWQ7XG4gIFxuICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZXVwJyAgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPT09IGludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZXVwJyAgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdCA9PT0gaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljaycsIGludGVyc2VjdHM6IGludGVyc2VjdHMsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RfZW50aXR5LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljaycsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXInLCBpbnRlcnNlY3RzOiBpbnRlcnNlY3RzLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgaWYgKCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICYmIHRoaXMuaG92ZXJPYmplY3QgIT09IGludGVyc2VjdF9lbnRpdHkgKVxuICAgICAgICAgIHx8ICggdGhpcy5ob3Zlck9iamVjdCAmJiBpbnRlcnNlY3RzLmxlbmd0aCA9PT0gMCApICl7XG4gIFxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmxlYXZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmVuZCgpO1xuICBcbiAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0X2VudGl0eSAmJiBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XG4gIFxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdCAhPT0gaW50ZXJzZWN0X2VudGl0eSApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSBpbnRlcnNlY3RfZW50aXR5O1xuICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmVudGVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHJldGljbGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ICYmIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IHRoaXMudGVtcEVuYWJsZVJldGljbGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLnN0YXJ0KCB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIGV2ZW50LCAnY2xpY2snICkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgIT0gaW50ZXJzZWN0X2VudGl0eSApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSBpbnRlcnNlY3RfZW50aXR5O1xuICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0YXJ0LWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NPYmplY3QgIT0gaW50ZXJzZWN0ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IGludGVyc2VjdDtcbiAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzbW92ZS1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NPYmplY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3Ntb3ZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IHVuZGVmaW5lZDtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgaWYgKCAhaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IHVuZGVmaW5lZDtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJbmZvc3BvdCBoYW5kbGVyXG4gICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuICBcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3QgPSBpbnRlcnNlY3Q7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xuICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICBcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5pbmZvc3BvdCApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLmhpZGVJbmZvc3BvdCgpO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQXV0byByb3RhdGVcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSAmJiB0aGlzLnVzZXJNb3VzZS50eXBlICE9PSAnbW91c2Vtb3ZlJyApIHtcbiAgXG4gICAgICAgICAgICAvLyBBdXRvLXJvdGF0ZSBpZGxlIHRpbWVyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCApO1xuICBcbiAgICAgICAgICAgIGlmICggdGhpcy5jb250cm9sID09PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gd2luZG93LnNldFRpbWVvdXQoIHRoaXMuZW5hYmxlQXV0b1JhdGUuYmluZCggdGhpcyApLCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbiApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cdFx0XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnZlcnRlZCBpbnRlcnNlY3RcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBpbnRlcnNlY3RzIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXRDb252ZXJ0ZWRJbnRlcnNlY3QgKCBpbnRlcnNlY3RzICkge1xuICBcbiAgICAgICAgbGV0IGludGVyc2VjdDtcbiAgXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLmRpc3RhbmNlID49IDAgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LnBhc3NUaHJvdWdoICkge1xuICBcbiAgICAgICAgICAgICAgICBpZiAoIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eSAmJiBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkucGFzc1Rocm91Z2ggKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eSAmJiAhaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5LnBhc3NUaHJvdWdoICkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdHNbaV0ub2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBIaWRlIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGhpZGVJbmZvc3BvdCAoKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdC5vbkhvdmVyRW5kKCk7XG4gIFxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdCA9IHVuZGVmaW5lZDtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY29udHJvbCBiYXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcbiAgICAgKi9cbiAgICB0b2dnbGVDb250cm9sQmFyICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSBjb250cm9sIGJhciBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI2NvbnRyb2wtYmFyLXRvZ2dsZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB3aWRnZXQgKSB7XG4gIFxuICAgICAgICAgICAgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NvbnRyb2wtYmFyLXRvZ2dsZScgfSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIGtleSBkb3duXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25LZXlEb3duICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5vdXRwdXQgJiYgdGhpcy5vcHRpb25zLm91dHB1dCAhPT0gJ25vbmUnICYmIGV2ZW50LmtleSA9PT0gJ0NvbnRyb2wnICkge1xuICBcbiAgICAgICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gdHJ1ZTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPbiBrZXkgdXBcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbktleVVwICgpIHtcbiAgXG4gICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNvbnRyb2wgYW5kIGNhbGxiYWNrc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuICBcbiAgICAgICAgVFdFRU4udXBkYXRlKCk7XG4gIFxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5mb3JFYWNoKCBmdW5jdGlvbiggY2FsbGJhY2sgKXsgY2FsbGJhY2soKTsgfSApO1xuICBcbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuICBcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24oIGNoaWxkICl7XG4gICAgICAgICAgICBpZiAoIGNoaWxkIGluc3RhbmNlb2YgSW5mb3Nwb3QgXG4gICAgICAgICAgJiYgY2hpbGQuZWxlbWVudCBcbiAgICAgICAgICAmJiAoIHRoaXMuaG92ZXJPYmplY3QgPT09IGNoaWxkIFxuICAgICAgICAgICAgfHwgY2hpbGQuZWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgXG4gICAgICAgICAgICB8fCAoY2hpbGQuZWxlbWVudC5sZWZ0ICYmIGNoaWxkLmVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpXG4gICAgICAgICAgICB8fCAoY2hpbGQuZWxlbWVudC5yaWdodCAmJiBjaGlsZC5lbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY2hlY2tTcHJpdGVJblZpZXdwb3J0KCBjaGlsZCApICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuVmVjdG9yKCBjaGlsZC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudHJhbnNsYXRlRWxlbWVudCggeCwgeSApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZW5kZXJpbmcgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGFuaW1hdGlvbiBmcmFtZVxuICAgICAqIFJlbmRlciByZXRpY2xlIGxhc3RcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyICgpIHtcbiAgXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5lZmZlY3QucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xuICAgICAgICAgICAgdGhpcy5lZmZlY3QucmVuZGVyKCB0aGlzLnNjZW5lUmV0aWNsZSwgdGhpcy5jYW1lcmEgKTtcbiAgICAgICAgXG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhckRlcHRoKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZVJldGljbGUsIHRoaXMuY2FtZXJhICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhbmltYXRlICgpIHtcbiAgXG4gICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5hbmltYXRlLmJpbmQoIHRoaXMgKSApO1xuICBcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIGNoYW5nZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkNoYW5nZSAoKSB7XG4gIFxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIG1vdXNlIGFuZCB0b3VjaCBldmVudCBvbiBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHBhc3NpdmU6IGZhbHNlIH07XG4gIFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJyAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIG9wdGlvbnMgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0ICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgb3B0aW9ucyApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIFx0dGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIG9wdGlvbnMgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJyAgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBvcHRpb25zICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciBtb3VzZSBhbmQgdG91Y2ggZXZlbnQgb24gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzICgpIHtcbiAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nICwgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnXHQsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgIHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBmYWxzZSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHJldGljbGUgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJSZXRpY2xlRXZlbnQgKCkge1xuICBcbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUmV0aWNsZUV2ZW50ICgpIHtcbiAgXG4gICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcmV0aWNsZSBldmVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVSZXRpY2xlRXZlbnQgKCkge1xuICBcbiAgICAgICAgY29uc3QgY2xpZW50WCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiArIHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xuICBcbiAgICAgICAgdGhpcy5yZW1vdmVVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfVEFQID0gdGhpcy5vblRhcC5iaW5kKCB0aGlzLCB7IGNsaWVudFgsIGNsaWVudFkgfSApO1xuICAgICAgICB0aGlzLmFkZFVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudExpc3RlbmVycyAoKSB7XG4gIFxuICAgICAgICAvLyBSZXNpemUgRXZlbnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnICwgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUsIHRydWUgKTtcbiAgXG4gICAgICAgIC8vIEtleWJvYXJkIEV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuSEFORExFUl9LRVlfRE9XTiwgdHJ1ZSApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJyAgLCB0aGlzLkhBTkRMRVJfS0VZX1VQXHQgLCB0cnVlICk7XG4gIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIGNvbnRhaW5lciBhbmQgd2luZG93IGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgKCkge1xuICBcbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XG4gIFxuICAgICAgICAvLyBLZXlib2FyZCBFdmVudFxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLkhBTkRMRVJfS0VZX0RPV04sIHRydWUgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcgICwgdGhpcy5IQU5ETEVSX0tFWV9VUCAgLCB0cnVlICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSBhbGwgc2NlbmUgb2JqZWN0cyBhbmQgY2xlYXIgY2FjaGVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSAoKSB7XG4gIFxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XG4gIFxuICAgICAgICAvLyBVbnJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBkaXNwb3NhbCBvbiAzZCBvYmplY3RzXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZURpc3Bvc2UgKCBvYmplY3QgKSB7XG4gIFxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIFBhbm9yYW1hIHx8IG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuICBcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IG51bGw7XG4gIFxuICAgICAgICAgICAgfSBlbHNlIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKXtcbiAgXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoICdkaXNwb3NlJyApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIHRoaXMuc2NlbmUgKTtcbiAgXG4gICAgICAgIC8vIGRpc3Bvc2Ugd2lkZ2V0XG4gICAgICAgIGlmICggdGhpcy53aWRnZXQgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy53aWRnZXQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy53aWRnZXQgPSBudWxsO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gY2xlYXIgY2FjaGVcbiAgICAgICAgaWYgKCBUSFJFRS5DYWNoZSAmJiBUSFJFRS5DYWNoZS5lbmFibGVkICkge1xuICBcbiAgICAgICAgICAgIFRIUkVFLkNhY2hlLmNsZWFyKCk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB2aWV3ZXIgYnkgZGlzcG9zaW5nIGFuZCBzdG9wcGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkICk7XHRcdFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogT24gcGFub3JhbWEgZGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblBhbm9yYW1hRGlzcG9zZSAoIHBhbm9yYW1hICkge1xuICAgICAgICBpZiAoIHBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZGVvV2lkZ2V0KCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggcGFub3JhbWEgPT09IHRoaXMucGFub3JhbWEgKSB7XG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogTG9hZCBhamF4IGNhbGxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIGJlIHJlcXVlc3RlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBDYWxsYmFjayBhZnRlciByZXF1ZXN0IGNvbXBsZXRlc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkQXN5bmNSZXF1ZXN0KCB1cmwsIGNhbGxiYWNrID0gKCkgPT4ge30gKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCBldmVudCApO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9wZW4oICdHRVQnLCB1cmwsIHRydWUgKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCBudWxsICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRWaWV3SW5kaWNhdG9yICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRWaWV3SW5kaWNhdG9yICggYXN5bmNFdmVudCApIHtcbiAgICAgICAgICAgIGlmICggYXN5bmNFdmVudC5sb2FkZWQgPT09IDAgKSByZXR1cm47XG4gIFxuICAgICAgICAgICAgY29uc3Qgdmlld0luZGljYXRvckRpdiA9IGFzeW5jRXZlbnQudGFyZ2V0LnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUud2lkdGggPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSArICdweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmhlaWdodCA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS50b3AgPSAnMTBweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmxlZnQgPSAnMTBweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5pZCA9ICdwYW5vbGVucy12aWV3LWluZGljYXRvci1jb250YWluZXInO1xuICBcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdmlld0luZGljYXRvckRpdiApO1xuICBcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IHZpZXdJbmRpY2F0b3JEaXYucXVlcnlTZWxlY3RvciggJyNpbmRpY2F0b3InICk7XG4gICAgICAgICAgICBjb25zdCBzZXRJbmRpY2F0b3JEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnJhZGl1cyA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICogMC4yMjU7XG4gICAgICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhbm9BbmdsZSA9IHNjb3BlLmNhbWVyYS5yb3RhdGlvbi55IC0gVEhSRUUuTWF0aC5kZWdUb1JhZCggOTAgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5mb3ZBbmdsZSA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmNhbWVyYS5mb3YgKSA7XG4gICAgICAgICAgICAgICAgc2NvcGUubGVmdEFuZ2xlID0gLXNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgLSBzY29wZS5mb3ZBbmdsZSAvIDI7XG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlICsgc2NvcGUuZm92QW5nbGUgLyAyO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRYID0gc2NvcGUucmFkaXVzICogTWF0aC5jb3MoIHNjb3BlLmxlZnRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLmxlZnRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5yaWdodEFuZ2xlICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLnJpZ2h0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5pbmRpY2F0b3JEID0gJ00gJyArIHNjb3BlLmxlZnRYICsgJyAnICsgc2NvcGUubGVmdFkgKyAnIEEgJyArIHNjb3BlLnJhZGl1cyArICcgJyArIHNjb3BlLnJhZGl1cyArICcgMCAwIDEgJyArIHNjb3BlLnJpZ2h0WCArICcgJyArIHNjb3BlLnJpZ2h0WTtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5sZWZ0WCAmJiBzY29wZS5sZWZ0WSAmJiBzY29wZS5yaWdodFggJiYgc2NvcGUucmlnaHRZICYmIHNjb3BlLnJhZGl1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSggJ2QnLCBzY29wZS5pbmRpY2F0b3JEICk7XG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgICAgICAgc2NvcGUuYWRkVXBkYXRlQ2FsbGJhY2soIHNldEluZGljYXRvckQgKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JPbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvck9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gIFxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgaW5kaWNhdG9yT25Nb3VzZUVudGVyICk7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgaW5kaWNhdG9yT25Nb3VzZUxlYXZlICk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMubG9hZEFzeW5jUmVxdWVzdCggRGF0YUltYWdlLlZpZXdJbmRpY2F0b3IsIGxvYWRWaWV3SW5kaWNhdG9yICk7XG4gIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjdXN0b20gY29udHJvbCBpdGVtIHRvIGV4aXN0aW5nIGNvbnRyb2wgYmFyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb249e31dIC0gU3R5bGUgb2JqZWN0IHRvIG92ZXJ3aXJ0ZSBkZWZhdWx0IGVsZW1lbnQgc3R5bGUuIEl0IHRha2VzICdzdHlsZScsICdvblRhcCcgYW5kICdncm91cCcgcHJvcGVydGllcy5cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYXBwZW5kQ29udHJvbEl0ZW0gKCBvcHRpb24gKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLndpZGdldC5jcmVhdGVDdXN0b21JdGVtKCBvcHRpb24gKTtcdFx0XG4gICAgICAgIGlmICggb3B0aW9uLmdyb3VwID09PSAndmlkZW8nICkge1xuICAgICAgICAgICAgdGhpcy53aWRnZXQudmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndpZGdldC5iYXJFbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtICk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY2FjaGVkIGZpbGVzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyQWxsQ2FjaGUoKSB7XG4gICAgICAgIFRIUkVFLkNhY2hlLmNsZWFyKCk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgeyBWaWV3ZXIgfTsiLCJpbXBvcnQgeyBUSFJFRV9SRVZJU0lPTiB9IGZyb20gJy4vQ29uc3RhbnRzJztcblxuaWYgKCBUSFJFRS5SRVZJU0lPTiAhPSBUSFJFRV9SRVZJU0lPTiApIHtcblxuICAgIGNvbnNvbGUud2FybiggYHRocmVlLmpzIHZlcnNpb24gaXMgbm90IG1hdGNoZWQuIFBsZWFzZSBjb25zaWRlciB1c2UgdGhlIHRhcmdldCByZXZpc2lvbiAke1RIUkVFX1JFVklTSU9OfWAgKTtcblxufSIsIi8qKlxuICogUGFub2xlbnMuanNcbiAqIEBhdXRob3IgcGNoZW42NlxuICogQG5hbWVzcGFjZSBQQU5PTEVOU1xuICovXG5leHBvcnQgKiBmcm9tICcuL0NvbnN0YW50cyc7XG5leHBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuL0RhdGFJbWFnZSc7XG5leHBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9JbWFnZUxvYWRlcic7XG5leHBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xuZXhwb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xuZXhwb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhL01lZGlhJztcbmV4cG9ydCB7IFJldGljbGUgfSBmcm9tICcuL2ludGVyZmFjZS9SZXRpY2xlJztcbmV4cG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi9pbmZvc3BvdC9JbmZvc3BvdCc7XG5leHBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldC9XaWRnZXQnO1xuZXhwb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1Bhbm9yYW1hJztcbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEnO1xuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvRW1wdHlQYW5vcmFtYSc7XG5leHBvcnQgeyBDdWJlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYSc7XG5leHBvcnQgeyBCYXNpY1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hJztcbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEnO1xuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9wYW5vcmFtYS9MaXR0bGVQbGFuZXQnO1xuZXhwb3J0IHsgSW1hZ2VMaXR0bGVQbGFuZXQgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0JztcbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XG5leHBvcnQgeyBWaWV3ZXIgfSBmcm9tICcuL3ZpZXdlci9WaWV3ZXInO1xuaW1wb3J0ICcuL0NoZWNrJztcblxuLy8gZXhwb3NlIFRXRUVOXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xud2luZG93LlRXRUVOID0gVFdFRU47Il0sIm5hbWVzIjpbIlRIUkVFIiwiVFdFRU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDWSxPQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRztBQUNsRDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNZLE9BQUMsT0FBTyxHQUFHLFFBQVE7QUFDL0I7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDWSxPQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUc7QUFDbkU7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDWSxPQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHO0FBQzFFO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDWSxPQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHO0FBQzNEO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ1ksT0FBQyxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFH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QUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RTtDQUNBLEdBQUcsTUFBTTtBQUNUO0NBQ0EsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Q0FDZCxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxRCxJQUFJO0FBQ0o7Q0FDQSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtDQUNkLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNyRSxJQUFJO0FBQ0o7Q0FDQSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FB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QUcsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNuRztDQUNBLFlBQVksSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFDMUc7Q0FDQSxZQUFZLElBQUksSUFBSSxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUM5QztDQUNBLFlBQVksSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFDM0c7Q0FDQSxTQUFTLE1BQU07QUFDZjtDQUNBLFlBQVksSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUNyRztDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUs7QUFDTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHO0FBQzdDO0NBQ0EsUUFBUSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ3BDO0NBQ0EsUUFBUSxLQUFLLElBQUksS0FBSyxXQUFXLEdBQUc7QUFDcEM7Q0FDQSxZQUFZLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUNoRjtDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUs7QUFDTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksT0FBTyxDQUFDLEVBQUUsSUFB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QUFHLENBQUM7QUFDakI7Q0FDQSxRQUFRLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0NBQzFDLFFBQVEsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDMUM7Q0FDQSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0NBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDdkI7Q0FDQSxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNsSDtDQUNBLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQ3hCO0NBQ0EsS0FBSztBQUNMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksUUFBUSxFQUFFLFdBQVc7QUFDekI7Q0FDQSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUN0QjtDQUNBLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNyRDtDQUNBLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDMUM7Q0FDQSxZQUFZLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztDQUN2QyxZQUFZLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztDQUN2QyxZQUFZLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FB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S0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDckM7Q0FDQSxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsR0FBRztBQUNqRDtDQUNBLFlBQVksS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQztDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNuQyxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxZQUFZLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFDM0I7Q0FDQSxRQUFRLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0NBQ2hELFFBQVEsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Q0FDM0MsUUFBUSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMxQztDQUNBLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3JDO0NBQ0EsUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsR0FBRztBQUNqRDtDQUNBLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzdDO0NBQ0EsU0FBUyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxHQUFHO0FBQ3hEO0NBQ0EsWUFBWSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDN0M7Q0FDQSxTQUFTO0NBQ1QsS0FBSztBQUNMO0NBQ0EsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHO0FBQ3hCO0NBQ0EsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7QUFDMUY7Q0FDQSxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDbEQ7Q0FDQSxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBRztBQUM3QjtDQUNBLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEc7Q0FDQSxTQUFTO0NBQ1Q7Q0FDQSxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztDQUM3RjtDQUNBLFlBQVksTUFBTSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4RDtDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksS0FBSyxDQUFDLEdBQUc7QUFDYjtDQUNBLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDdkMsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN6QyxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxNQUFNLENBQUMsRUFBRSxPQUFPLEdBQUc7QUFDdkI7Q0FDQSxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFDM0c7Q0FDQSxRQUFRLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0NBQ25DLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDaEM7Q0FDQSxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztBQUM1RjtDQUNBLFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUM3RDtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksT0FBTyxDQUFDLEdBQUc7QUFDZjtDQUNBLFFBQVEsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDckM7Q0FDQSxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDakg7Q0FDQSxRQUFRLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEQ7Q0FDQSxRQUFRLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNyRDtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksY0FBYyxDQUFDLEdBQUc7Q0FDdEIsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0NBQzNHLEtBQUs7QUFDTDtDQUNBLElBQUksYUFBYSxDQUFDLEdBQUc7QUFDckI7Q0FDQSxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzlCO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxPQUFPLENBQUMsR0FBRztBQUNmO0NBQ0EsUUFBUSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNyQztDQUNBLFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3JEO0NBQ0EsS0FBSztBQUNMO0NBQ0E7QUFDQTtDQUNBOztDQ3hUQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLE1BQU0saUJBQWlCLFNBQVMsWUFBWSxDQUFDO0NBQzdDLElBQUksV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHO0NBQ3ZDLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDbkMsS0FBSztBQUNMO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLE1BQU0sQ0FBQyxFQUFFLE9BQU8sR0FBRztBQUN2QjtDQUNBLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUN0QztDQUNBLFFBQVEsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztDQUM1RCxLQUFLO0NBQ0w7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGFBQWEsQ0FBQyxFQUFFLE9BQU8sR0FBRztBQUM5QjtDQUNBLFFBQVEsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHQSxnQkFBSyxDQUFDLFlBQVksQ0FBQztDQUNuRTtDQUNBLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUM3RDtDQUNBLEtBQUs7QUFDTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLE9BQU8sQ0FBQyxHQUFHO0FBQ2Y7Q0FDQSxRQUFRLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQzlEO0NBQ0EsUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHO0FBQzFDO0NBQ0EsWUFBWSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDO0NBQ0EsU0FBUztBQUNUO0NBQ0EsUUFBUSxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDcEQ7Q0FDQSxLQUFLO0NBQ0w7O0NDekRBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLE1BQU0sY0FBYyxTQUFTLFFBQVEsQ0FBQztDQUN0QyxJQUFJLFdBQVcsRUFBRSxXQUFXLEdBQUc7Q0FDL0IsUUFBUSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7Q0FDNUIsUUFBUSxNQUFNLFFBQVEsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3BFLFFBQVEsTUFBTSxRQUFRLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0NBQzFFO0NBQ0EsUUFBUSxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDO0NBQ0EsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO0NBQzlDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDN0I7Q0FDQSxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUNsRSxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUNqRSxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDN0YsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNyRjtDQUNBLEtBQUs7QUFDTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksbUJBQW1CLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHO0NBQzFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUM7Q0FDN0MsS0FBSztBQUNMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRztDQUNqQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQ3JDLEtBQUs7QUFDTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksS0FBSyxHQUFHO0NBQ1osUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDbEMsS0FBSztBQUNMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksSUFBSSxHQUFHO0NBQ1gsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQzFCLEtBQUs7Q0FDTDs7Q0NoRUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLGFBQWEsR0FBRyxNQUFNLEVBQUUsVUFBVSxHQUFHO0FBQzlDO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUM7Q0FDM0UsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUN4QjtDQUNBO0FBQ0E7Q0FDQTtDQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEI7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RDO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM5QjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztDQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0NBQ3pCLElBQUksSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztBQUMzQztDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztDQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQ2hDO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0NBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDNUI7Q0FDQTtDQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Q0FDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQzdCO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0NBQ3RCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDM0I7Q0FDQTtDQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Q0FDNUIsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztBQUMvQjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztDQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNqQztDQUNBO0NBQ0EsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0NBQ3JDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsS0FBSyxDQUFDO0NBQ3ZDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztBQUNuQztDQUNBO0NBQ0EsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztDQUNwQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3JCO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxRQUFRLENBQUM7Q0FDdEMsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUNwQztDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QjtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzVEO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUVBLGdCQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUVBLGdCQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUVBLGdCQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RHO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3JCO0NBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7Q0FDcEIsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7QUFDckI7Q0FDQSxJQUFJLElBQUksV0FBVyxHQUFHLElBQUlBLGdCQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDMUMsSUFBSSxJQUFJLFNBQVMsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ3hDLElBQUksSUFBSSxXQUFXLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMxQztDQUNBLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN2QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUlBLGdCQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDckMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ3ZDLElBQUksSUFBSSxTQUFTLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4QztDQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQztDQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6QyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUlBLGdCQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDdkMsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDO0NBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDaEIsSUFBSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7Q0FDckIsSUFBSSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7Q0FDdkIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xDO0NBQ0EsSUFBSSxJQUFJLFlBQVksR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQzNDLElBQUksSUFBSSxjQUFjLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoRDtDQUNBLElBQUksSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7Q0FDekMsSUFBSSxJQUFJLGFBQWEsQ0FBQztDQUN0QixJQUFJLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUMzQjtDQUNBLElBQUksSUFBSSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDNUM7Q0FDQSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDekc7Q0FDQSxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDM0I7Q0FDQTtBQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2xELElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNsQztDQUNBO0FBQ0E7Q0FDQSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUlBLGdCQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Q0FDcEcsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUM7Q0FDQTtBQUNBO0NBQ0EsSUFBSSxJQUFJLFdBQVcsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUN6QyxJQUFJLElBQUksVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0NBQ3ZDLElBQUksSUFBSSxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDbkM7Q0FDQSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLFVBQVUsR0FBRztDQUNyRCxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Q0FDMUMsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7Q0FDbkQsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWTtDQUN2QyxRQUFRLE9BQU8sWUFBWSxDQUFDO0NBQzVCLEtBQUssQ0FBQztBQUNOO0NBQ0EsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsS0FBSyxHQUFHO0FBQ3pDO0NBQ0EsUUFBUSxLQUFLLEtBQUssS0FBSyxTQUFTLEdBQUc7QUFDbkM7Q0FDQSxZQUFZLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0FBQzNDO0NBQ0EsU0FBUztBQUNUO0NBQ0EsUUFBUSxVQUFVLElBQUksS0FBSyxDQUFDO0FBQzVCO0FBQ0E7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEtBQUssR0FBRztBQUN2QztDQUNBLFFBQVEsS0FBSyxLQUFLLEtBQUssU0FBUyxHQUFHO0FBQ25DO0NBQ0EsWUFBWSxLQUFLLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztBQUMzQztDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsUUFBUSxJQUFJLEtBQUssQ0FBQztBQUMxQjtDQUNBLEtBQUssQ0FBQztBQUNOO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxRQUFRLEdBQUc7QUFDekM7Q0FDQSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM3QztDQUNBO0NBQ0EsUUFBUSxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Q0FDbkQsUUFBUSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFDL0M7Q0FDQSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDN0I7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsUUFBUSxHQUFHO0FBQ3ZDO0NBQ0EsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDN0M7Q0FDQTtDQUNBLFFBQVEsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0NBQ25ELFFBQVEsU0FBUyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUM3QztDQUNBLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM3QjtDQUNBLEtBQUssQ0FBQztBQUNOO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxNQUFNLEVBQUUsTUFBTSxHQUFHO0FBQzNDO0NBQ0EsUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQy9GO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxNQUFNLFlBQVlBLGdCQUFLLENBQUMsaUJBQWlCLEdBQUc7QUFDL0Q7Q0FDQTtDQUNBLFlBQVksSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Q0FDakQsWUFBWSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUM5RCxZQUFZLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqRDtDQUNBO0NBQ0EsWUFBWSxjQUFjLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ3JGO0NBQ0E7Q0FDQSxZQUFZLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0NBQ2hGLFlBQVksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUU7Q0FDQSxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZQSxnQkFBSyxDQUFDLGtCQUFrQixHQUFHO0FBQ3ZFO0NBQ0E7Q0FDQSxZQUFZLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQ3JHLFlBQVksS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEc7Q0FDQSxTQUFTLE1BQU07QUFDZjtDQUNBO0NBQ0EsWUFBWSxPQUFPLENBQUMsSUFBSSxFQUFFLDhFQUE4RSxFQUFFLENBQUM7QUFDM0c7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVO0NBQzlCO0NBQ0EsUUFBUSxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU87QUFDbEM7Q0FDQSxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLEdBQUc7QUFDaEY7Q0FDQSxZQUFZLFVBQVUsR0FBRyxLQUFLLENBQUM7Q0FDL0IsWUFBWSxPQUFPO0NBQ25CLFNBQVM7QUFDVDtDQUNBLFFBQVEsVUFBVSxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztDQUNuRCxRQUFRLFlBQVksSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUM7QUFDbkQ7Q0FDQSxRQUFRLFVBQVUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDO0NBQ2hFLFFBQVEsUUFBUSxNQUFNLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUM7QUFDOUQ7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLFVBQVUsR0FBRztBQUMzQztDQUNBLFFBQVEsS0FBSyxVQUFVLEtBQUssU0FBUyxHQUFHO0FBQ3hDO0NBQ0EsWUFBWSxVQUFVLEdBQUcsWUFBWSxFQUFFLENBQUM7QUFDeEM7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLE1BQU0sWUFBWUEsZ0JBQUssQ0FBQyxpQkFBaUIsR0FBRztBQUMvRDtDQUNBLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQztBQUNoQztDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLFlBQVlBLGdCQUFLLENBQUMsa0JBQWtCLEdBQUc7QUFDdkU7Q0FDQSxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEVBQUUsQ0FBQztDQUNsSCxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztDQUNsRCxZQUFZLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDL0M7Q0FDQSxTQUFTLE1BQU07QUFDZjtDQUNBLFlBQVksT0FBTyxDQUFDLElBQUksRUFBRSxxRkFBcUYsRUFBRSxDQUFDO0FBQ2xIO0NBQ0EsU0FBUztBQUNUO0NBQ0EsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxVQUFVLEdBQUc7QUFDNUM7Q0FDQSxRQUFRLEtBQUssVUFBVSxLQUFLLFNBQVMsR0FBRztBQUN4QztDQUNBLFlBQVksVUFBVSxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQ3hDO0NBQ0EsU0FBUztBQUNUO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxNQUFNLFlBQVlBLGdCQUFLLENBQUMsaUJBQWlCLEdBQUc7QUFDL0Q7Q0FDQSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUM7QUFDaEM7Q0FDQSxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZQSxnQkFBSyxDQUFDLGtCQUFrQixHQUFHO0FBQ3ZFO0NBQ0EsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRSxFQUFFLENBQUM7Q0FDbEgsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Q0FDbEQsWUFBWSxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQy9DO0NBQ0EsU0FBUyxNQUFNO0FBQ2Y7Q0FDQSxZQUFZLE9BQU8sQ0FBQyxJQUFJLEVBQUUscUZBQXFGLEVBQUUsQ0FBQztBQUNsSDtDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUssQ0FBQztBQUNOO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsWUFBWSxHQUFHO0FBQzVDO0NBQ0EsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM1QztDQUNBLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25EO0NBQ0E7Q0FDQSxRQUFRLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdkM7Q0FDQTtBQUNBO0NBQ0EsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNqRDtDQUNBO0FBQ0E7Q0FDQSxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM3RjtDQUNBLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHO0FBQ3ZEO0NBQ0EsWUFBWSxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztBQUN0RDtDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hCO0NBQ0EsUUFBUSxLQUFLLElBQUksVUFBVSxDQUFDO0NBQzVCLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztBQUN4QjtDQUNBO0NBQ0EsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQzFGO0NBQ0E7Q0FDQSxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDbEY7Q0FDQTtDQUNBLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztBQUM5RDtDQUNBLFFBQVEsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztBQUM3QztDQUNBO0NBQ0EsUUFBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQ3BGO0NBQ0E7Q0FDQSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQy9CO0NBQ0EsUUFBUSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDaEUsUUFBUSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQzVDLFFBQVEsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ2hFO0NBQ0E7Q0FDQSxRQUFRLE1BQU0sQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDOUM7Q0FDQSxRQUFRLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNuRDtDQUNBLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFDO0NBQ0EsUUFBUSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZCLFFBQVEsUUFBUSxHQUFHLENBQUMsQ0FBQztDQUNyQixRQUFRLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDbEIsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDM0I7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsUUFBUSxLQUFLLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUc7Q0FDekUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRztBQUN0RTtDQUNBLFlBQVksS0FBSyxZQUFZLEtBQUssSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO0FBQy9FO0NBQ0EsWUFBWSxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDdEQsWUFBWSxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUQ7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxLQUFLLENBQUM7QUFDTjtBQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVk7QUFDN0I7Q0FDQSxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzNCO0NBQ0EsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDekMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0NBQ3BELFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QztDQUNBLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0NBQzdDLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUMxQztDQUNBLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCO0NBQ0EsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWTtBQUNyQztDQUNBLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkI7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVk7QUFDekM7Q0FDQSxRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCO0NBQ0EsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLFNBQVMsb0JBQW9CLEdBQUc7QUFDcEM7Q0FDQSxRQUFRLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQzdEO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxTQUFTLFlBQVksR0FBRztBQUM1QjtDQUNBLFFBQVEsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDakQ7Q0FDQSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLFNBQVMsV0FBVyxFQUFFLEtBQUssR0FBRztBQUNsQztDQUNBLFFBQVEsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUMzQjtDQUNBLEtBQUssWUFBWSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbkM7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTztDQUM5QyxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvQjtDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHO0NBQ3pELFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPO0FBQ2xEO0NBQ0EsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNqQztDQUNBLFlBQVksV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RDtDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUc7Q0FDL0QsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87QUFDaEQ7Q0FDQSxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ2hDO0NBQ0EsWUFBWSxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNEO0NBQ0EsU0FBUyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRztDQUM5RCxZQUFZLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTztBQUMvQztDQUNBLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDOUI7Q0FDQSxZQUFZLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDekQ7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxRQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUc7Q0FDcEMsWUFBWSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUN6RSxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQ3JFLFlBQVksS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQztDQUM5QyxTQUFTO0FBQ1Q7Q0FDQSxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QjtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksU0FBUyxXQUFXLEVBQUUsS0FBSyxHQUFHO0FBQ2xDO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU87QUFDOUM7Q0FDQSxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvQjtDQUNBLFFBQVEsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUMvRjtDQUNBLFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRztBQUN0QztDQUNBLFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPO0FBQ2xEO0NBQ0EsWUFBWSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQzFELFlBQVksV0FBVyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDN0Q7Q0FDQTtDQUNBLFlBQVksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RHO0NBQ0E7Q0FDQSxZQUFZLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyRztDQUNBLFlBQVksV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUMxQztDQUNBLFlBQVksSUFBSSxhQUFhLEVBQUU7Q0FDL0IsZ0JBQWdCLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7Q0FDckUsZ0JBQWdCLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7Q0FDbkUsYUFBYTtBQUNiO0NBQ0EsWUFBWSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ2xDO0NBQ0EsU0FBUyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEdBQUc7QUFDNUM7Q0FDQSxZQUFZLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsT0FBTztBQUNoRDtDQUNBLFlBQVksUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6RCxZQUFZLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQzFEO0NBQ0EsWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQ3BDO0NBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNoQztDQUNBLGFBQWEsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQzNDO0NBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNqQztDQUNBLGFBQWE7QUFDYjtDQUNBLFlBQVksVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUN4QztDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHO0FBQzFDO0NBQ0EsWUFBWSxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLE9BQU87QUFDL0M7Q0FDQSxZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDdkQsWUFBWSxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNwRDtDQUNBLFlBQVksS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNoRDtDQUNBLFlBQVksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNwQztDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkQ7Q0FDQSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLFNBQVMsU0FBUyxnQkFBZ0I7QUFDdEM7Q0FDQSxRQUFRLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDMUI7Q0FDQSxRQUFRLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDbEM7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTztBQUM5QztDQUNBLFFBQVEsUUFBUSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDeEUsUUFBUSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNwRSxRQUFRLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDeEMsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMzQjtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksU0FBUyxZQUFZLEVBQUUsS0FBSyxHQUFHO0FBQ25DO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU87QUFDL0Y7Q0FDQSxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztDQUMvQixRQUFRLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNoQztDQUNBLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxHQUFHO0FBQzlDO0NBQ0EsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUNyQztDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHO0FBQ2pEO0NBQ0EsWUFBWSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ25DO0NBQ0EsU0FBUztDQUNULFFBQVEsTUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztDQUNsQyxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDakM7Q0FDQSxRQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsT0FBTyxHQUFHLENBQUMsT0FBTyxHQUFHO0FBQ3JFO0NBQ0E7Q0FDQSxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Q0FDaEUsa0JBQWtCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDdEMsa0JBQWtCLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDL0IsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDbEQ7Q0FDQSxTQUFTLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUc7QUFDMUU7Q0FDQTtDQUNBLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtDQUNoRSxrQkFBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN0QyxrQkFBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztDQUMvQixZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNsRDtDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ3ZCLFFBQVEsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztDQUMzQyxRQUFRLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUM7Q0FDMUMsUUFBUSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3hDO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxTQUFTLE9BQU8sR0FBRyxLQUFLLEdBQUc7QUFDL0I7Q0FDQSxRQUFRLFNBQVMsS0FBSyxDQUFDLE9BQU87QUFDOUI7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0NBQzFCLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQztDQUMxQixZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO0NBQzlCLFlBQVksU0FBUyxHQUFHLEtBQUssQ0FBQztDQUM5QixZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO0NBQzVCLFlBQVksT0FBTyxHQUFHLEtBQUssQ0FBQztDQUM1QixZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO0NBQzdCLFlBQVksUUFBUSxHQUFHLEtBQUssQ0FBQztDQUM3QixZQUFZLE1BQU07QUFDbEI7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLFNBQVMsU0FBUyxFQUFFLEtBQUssR0FBRztBQUNoQztDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPO0FBQ2xHO0NBQ0EsUUFBUSxTQUFTLEtBQUssQ0FBQyxPQUFPO0FBQzlCO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtDQUMxQixZQUFZLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDekIsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtDQUM5QixZQUFZLFNBQVMsR0FBRyxJQUFJLENBQUM7Q0FDN0IsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtDQUM1QixZQUFZLE9BQU8sR0FBRyxJQUFJLENBQUM7Q0FDM0IsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztDQUM3QixZQUFZLFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDNUIsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsU0FBUztBQUNUO0NBQ0EsUUFBUSxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTtBQUN2RDtDQUNBLFlBQVksVUFBVSxHQUFHLElBQUksQ0FBQztBQUM5QjtDQUNBLFlBQVksSUFBSSxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7Q0FDdEYsWUFBWSxJQUFJLFNBQVMsRUFBRSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7Q0FDeEYsWUFBWSxJQUFJLE9BQU8sRUFBRSxZQUFZLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztDQUMxRixZQUFZLElBQUksUUFBUSxFQUFFLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztBQUN6RjtDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksU0FBUyxVQUFVLEVBQUUsS0FBSyxHQUFHO0FBQ2pDO0NBQ0EsUUFBUSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0NBQ0EsUUFBUSxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN0QztDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPO0FBQzlDO0NBQ0EsUUFBUSxTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtBQUNyQztDQUNBLFFBQVEsS0FBSyxDQUFDO0FBQ2Q7Q0FDQSxZQUFZLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTztBQUNsRDtDQUNBLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDdkM7Q0FDQSxZQUFZLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNsRixZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssQ0FBQztBQUNkO0NBQ0EsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87QUFDaEQ7Q0FDQSxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3RDO0NBQ0EsWUFBWSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUN6RSxZQUFZLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQ3pFLFlBQVksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztBQUMxRDtDQUNBLFlBQVksVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFDMUM7Q0FDQSxZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssQ0FBQztBQUNkO0NBQ0EsWUFBWSxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLE9BQU87QUFDL0M7Q0FDQSxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3BDO0NBQ0EsWUFBWSxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDL0UsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsUUFBUTtBQUNSO0NBQ0EsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMvQjtDQUNBLFNBQVM7QUFDVDtDQUNBLFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ3RFO0NBQ0EsS0FBSztBQUNMO0NBQ0EsSUFBSSxTQUFTLFNBQVMsRUFBRSxLQUFLLEdBQUc7QUFDaEM7Q0FDQSxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTztBQUM5QztDQUNBLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQy9CLFFBQVEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQy9GO0NBQ0EsUUFBUSxTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtBQUNyQztDQUNBLFFBQVEsS0FBSyxDQUFDO0FBQ2Q7Q0FDQSxZQUFZLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTztDQUNsRCxZQUFZLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxZQUFZLEdBQUcsT0FBTztBQUN2RDtDQUNBLFlBQVksU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2hGLFlBQVksV0FBVyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDN0Q7Q0FDQTtDQUNBLFlBQVksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQ3RHO0NBQ0EsWUFBWSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckc7Q0FDQSxZQUFZLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDMUM7Q0FDQSxZQUFZLElBQUksYUFBYSxFQUFFO0NBQy9CLGdCQUFnQixZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztDQUM5RSxnQkFBZ0IsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7Q0FDNUUsYUFBYTtBQUNiO0NBQ0EsWUFBWSxhQUFhLEdBQUc7Q0FDNUIsZ0JBQWdCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Q0FDL0MsZ0JBQWdCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Q0FDL0MsYUFBYSxDQUFDO0FBQ2Q7Q0FDQSxZQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUMzQixZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssQ0FBQztBQUNkO0NBQ0EsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87Q0FDaEQsWUFBWSxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU87QUFDdEQ7Q0FDQSxZQUFZLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQ3pFLFlBQVksSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekUsWUFBWSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBQzFEO0NBQ0EsWUFBWSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUN4QyxZQUFZLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQzFEO0NBQ0EsWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQ3BDO0NBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Q0FDcEUsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDMUMsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDbkMsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUN0RDtDQUNBLGFBQWEsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQzNDO0NBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Q0FDcEUsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDMUMsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDbkMsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUN0RDtDQUNBLGFBQWE7QUFDYjtDQUNBLFlBQVksVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUN4QztDQUNBLFlBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQzNCLFlBQVksS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztDQUMvQyxZQUFZLE1BQU07QUFDbEI7Q0FDQSxRQUFRLEtBQUssQ0FBQztBQUNkO0NBQ0EsWUFBWSxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLE9BQU87Q0FDL0MsWUFBWSxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU87QUFDcEQ7Q0FDQSxZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUM3RSxZQUFZLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3BEO0NBQ0EsWUFBWSxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2hEO0NBQ0EsWUFBWSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3BDO0NBQ0EsWUFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FDM0IsWUFBWSxNQUFNO0FBQ2xCO0NBQ0EsUUFBUTtBQUNSO0NBQ0EsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMvQjtDQUNBLFNBQVM7QUFDVDtDQUNBLEtBQUs7QUFDTDtDQUNBLElBQUksU0FBUyxRQUFRLGdCQUFnQjtBQUNyQztDQUNBLFFBQVEsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMxQjtDQUNBLFFBQVEsYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNsQztDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPO0FBQzlDO0NBQ0EsUUFBUSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO0NBQ3hDLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDM0I7Q0FDQSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVztBQUM5QjtDQUNBLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDeEUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsQ0FBQztDQUMxRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7QUFDOUU7Q0FDQSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDO0NBQ3hFLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDcEUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUN0RTtDQUNBLFFBQVEsTUFBTSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztDQUN2RCxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDM0Q7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztDQUNyRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3ZGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztBQUMzRjtDQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDckYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztDQUNqRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQ25GO0NBQ0EsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3BFLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztBQUN4RTtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEI7Q0FDQSxDQUNBO0NBQ0EsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUVBLGdCQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFO0FBQzNGO0NBQ0EsSUFBSSxXQUFXLEVBQUUsYUFBYTtBQUM5QjtDQUNBLENBQUMsRUFBRTs7Q0M3MUJIO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsU0FBUyx5QkFBeUIsR0FBRyxNQUFNLEVBQUUsVUFBVSxHQUFHO0FBQzFEO0NBQ0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDckIsSUFBSSxJQUFJLFdBQVcsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUN6QztDQUNBLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0NBQ2pCLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0NBQ2pCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0NBQ2xCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUMxQyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDM0U7Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3hCO0NBQ0EsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0NBQ2hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUMvQjtDQUNBLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDbkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzlCO0FBQ0E7Q0FDQSxJQUFJLElBQUksOEJBQThCLEdBQUcsVUFBVSxLQUFLLEdBQUc7QUFDM0Q7Q0FDQSxRQUFRLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDeEM7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSw4QkFBOEIsR0FBRyxXQUFXO0FBQ3BEO0NBQ0EsUUFBUSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7QUFDMUQ7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxpQkFBaUIsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUM3QztDQUNBLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQy9CLFFBQVEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekMsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDekM7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUM1QztDQUNBLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQy9CLFFBQVEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsUUFBUSxJQUFJLElBQUlBLGdCQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztDQUNoRixRQUFRLElBQUksSUFBSUEsZ0JBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ2hGO0NBQ0EsUUFBUSxLQUFLLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDN0M7Q0FDQSxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUN6QyxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUN6QztDQUNBLEtBQUssQ0FBQztBQUNOO0NBQ0E7QUFDQTtDQUNBLElBQUksSUFBSSxtQkFBbUIsR0FBRyxVQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUc7QUFDakY7Q0FDQSxRQUFRLElBQUksR0FBRyxHQUFHLElBQUlBLGdCQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDL0M7Q0FDQSxRQUFRLElBQUksS0FBSyxHQUFHLElBQUlBLGdCQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEM7Q0FDQSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUlBLGdCQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDeEM7Q0FDQSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUlBLGdCQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztBQUNwRjtDQUNBLFFBQVEsSUFBSSxhQUFhLENBQUM7Q0FDMUIsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0NBQzlDLFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QztDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsaUJBQWlCLElBQUksQ0FBQyxHQUFHO0FBQzVDO0NBQ0EsWUFBWSxhQUFhLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN6RCxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5RDtDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLEdBQUc7QUFDckQ7Q0FDQSxZQUFZLGFBQWEsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3pELFlBQVksUUFBUSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3RDtDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLEdBQUc7QUFDcEQ7Q0FDQSxZQUFZLGFBQWEsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3pELFlBQVksUUFBUSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3RDtDQUNBLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNyRDtDQUNBLFlBQVksYUFBYSxHQUFHLElBQUlBLGdCQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDekQsWUFBWSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUQ7Q0FDQSxTQUFTO0FBQ1Q7Q0FDQSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDaEMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ2hDO0NBQ0EsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDakQ7Q0FDQSxRQUFRLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDekM7Q0FDQSxRQUFRLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDbEM7Q0FDQSxRQUFRLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7QUFDcEU7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXO0FBQzlCO0NBQ0EsUUFBUSw4QkFBOEIsRUFBRSxDQUFDO0FBQ3pDO0NBQ0EsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUMxRyxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQzFHLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7QUFDcEc7Q0FDQSxRQUFRLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDakcsUUFBUSxLQUFLLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQy9GO0NBQ0EsUUFBUSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUM3QjtDQUNBLEtBQUssQ0FBQztBQUNOO0NBQ0EsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVc7QUFDakM7Q0FDQSxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNqRyxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNqRyxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUMzRjtDQUNBLFFBQVEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDdkYsUUFBUSxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNyRjtDQUNBLFFBQVEsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDOUI7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLFlBQVksR0FBRztBQUMzQztDQUNBLFFBQVEsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPO0FBQzlDO0NBQ0EsUUFBUSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHQSxnQkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Q0FDdEksUUFBUSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHQSxnQkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztDQUMxRyxRQUFRLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUdBLGdCQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzdHLFFBQVEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixHQUFHQSxnQkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xHO0NBQ0EsUUFBUSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztDQUNuRixRQUFRLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzVCO0NBQ0EsUUFBUSxLQUFLLFlBQVksS0FBSyxJQUFJLEdBQUcsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7QUFDNUU7Q0FDQSxLQUFLLENBQUM7QUFDTjtDQUNBLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsS0FBSyxHQUFHO0FBQ3BEO0NBQ0EsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0NBQ3RDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCO0NBQ0EsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVztBQUM5QjtDQUNBLFFBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzFCO0NBQ0EsS0FBSyxDQUFDO0FBQ047Q0FDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNuQjtDQUNBLENBQ0E7Q0FDQSx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFQSxnQkFBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUN0RztDQUNBLElBQUksV0FBVyxFQUFFLHlCQUF5QjtBQUMxQztDQUNBLENBQUMsRUFBRTs7Q0N0TEg7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsTUFBTSxlQUFlLENBQUM7QUFDdEI7Q0FDQSxJQUFJLFdBQVcsRUFBRSxRQUFRLEdBQUc7Q0FDNUIsUUFBUSxJQUFJLE9BQU8sR0FBRyxJQUFJQSxnQkFBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzNFO0NBQ0EsUUFBUSxJQUFJLE1BQU0sR0FBRyxJQUFJQSxnQkFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ3ZDO0NBQ0EsUUFBUSxJQUFJLE9BQU8sR0FBRyxJQUFJQSxnQkFBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0NBQy9DLFFBQVEsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Q0FDN0I7Q0FDQSxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFQSxnQkFBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUVBLGdCQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRUEsZ0JBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztDQUNsSDtDQUNBLFFBQVEsSUFBSSxhQUFhLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDO0NBQzdFLFFBQVEsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Q0FDekMsUUFBUSxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Q0FDdEQ7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsUUFBUSxJQUFJLFVBQVUsR0FBRyxJQUFJQSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDM0Q7Q0FDQSxRQUFRLElBQUksUUFBUSxHQUFHLElBQUlBLGdCQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0NBQ2hIO0NBQ0EsUUFBUSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Q0FDM0QsUUFBUSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDL0M7Q0FDQTtDQUNBLFFBQVEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztDQUNoRCxRQUFRLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Q0FDMUM7Q0FDQSxRQUFRLElBQUksVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Q0FDbEUsUUFBUSxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO0NBQ3BDLFFBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ3REO0NBQ0EsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQ3RELFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUN4QixRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNwQztDQUNBLFFBQVEsSUFBSSxNQUFNLEdBQUcsSUFBSUEsZ0JBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6QyxRQUFRLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0NBQzFDO0NBQ0EsUUFBUSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztDQUNsRTtDQUNBLFlBQVksTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztDQUMvQyxZQUFZLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Q0FDL0M7Q0FDQSxZQUFZLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7Q0FDM0MsWUFBWSxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQztDQUMzRTtDQUNBLFlBQVksSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzVDO0NBQ0EsWUFBWSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0NBQ2pGLFlBQVksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUM7Q0FDbEU7Q0FDQSxZQUFZLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUM7Q0FDN0Q7Q0FDQSxTQUFTO0NBQ1Q7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QUFFLENBQUM7Q0FDdkQsWUFBWSxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzVDO0NBQ0EsWUFBWSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ3JFLFlBQVksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUN0RSxZQUFZLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0RDtDQUNBLFlBQVksUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ2xGLFlBQVksUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ25GLFlBQVksUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3REO0NBQ0EsWUFBWSxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQzdDO0NBQ0EsU0FBUyxDQUFDO0NBQ1YsS0FBSztDQUNMO0NBQ0E7O0NDckNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxNQUFNLE1BQU0s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
