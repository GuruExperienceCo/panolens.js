import * as THREE from 'three';

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
        THREE.Cache.enabled = true;

        let cached, request, arrayBufferView, blob, urlCreator, image, reference;

        // Reference key
        for (let iconName in DataImage) {

            if (DataImage.hasOwnProperty(iconName) && url === DataImage[iconName]) {

                reference = iconName;

            }

        }

        // Cached
        cached = THREE.Cache.get(reference ? reference : url);

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
        THREE.Cache.add(reference ? reference : url, image);

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

        var texture = new THREE.Texture(); 

        ImageLoader.load( url, function ( image ) {

            texture.image = image;

            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

            texture.format = isJPEG ? THREE.RGBFormat : THREE.RGBAFormat;
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

	   texture = new THREE.CubeTexture( [] );

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
Media.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

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
        const texture = new THREE.VideoTexture( video );

        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
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
class Reticle extends THREE.Sprite {
    constructor( color = 0xffffff, autoSelect = true, dwellTime = 1500 ) {
        const { canvas, context } = Reticle.createCanvas(window.devicePixelRatio);
        const material = new THREE.SpriteMaterial( { color, map: Reticle.createCanvasTexture( canvas ) } );
        super(material);

        this.dpr = window.devicePixelRatio;
  
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.context = context;
        this.color = color instanceof THREE.Color ? color : new THREE.Color( color );    
  
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

        this.material.color.copy( color instanceof THREE.Color ? color : new THREE.Color( color ) );
  
    }
  
    /**
     * Create canvas texture
     * @param {HTMLCanvasElement} canvas 
     * @memberOf Reticle
     * @instance
     * @returns {THREE.CanvasTexture}
     */
    static createCanvasTexture ( canvas ) {
  
        const texture = new THREE.CanvasTexture( canvas );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
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
class Infospot extends THREE.Sprite {

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

        this.material.side = THREE.DoubleSide;
        this.material.depthTest = false;
        this.material.transparent = true;
        this.material.opacity = 0;

        this.scaleUpAnimation = new Tween.Tween();
        this.scaleDownAnimation = new Tween.Tween();


        const postLoad = function ( texture ) {

            if ( !this.material ) { return; }

            const ratio = texture.image.width / texture.image.height;
            const textureScale = new THREE.Vector3();

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
class Widget extends THREE.EventDispatcher {

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
class Panorama extends THREE.Mesh {
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

        this.material.side = THREE.BackSide;
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
            invertedObject = new THREE.Object3D();
            invertedObject.scale.x = -1;
            invertedObject.scalePlaceHolder = true;
            invertedObject.add(object);

        }

        THREE.Object3D.prototype.add.call(this, invertedObject);

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
        const geometry = _geometry || new THREE.SphereGeometry( radius, 60, 40 );
        const material = _material || new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );
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

            this.onLoad( new THREE.Texture( src ) );

        }

    }

    /**
     * This will be called when image is loaded
     * @param  {THREE.Texture} texture - Texture to be updated
     * @memberOf ImagePanorama
     * @instance
     */
    onLoad( texture ) {

        texture.minFilter = texture.magFilter = THREE.LinearFilter;
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
        THREE.Cache.remove( this.src );

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
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );
        super(geometry, material);
        geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(), 1 ) );
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
        const shader = Object.assign( {}, THREE.ShaderLib[ 'cube' ] );
        const geometry = new THREE.BoxGeometry( edgeLength, edgeLength, edgeLength );
        const material = new THREE.ShaderMaterial( {

            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: shader.uniforms,
            side: THREE.BackSide,
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

        this.images.forEach( ( image ) => { THREE.Cache.remove( image ); } );

        if ( value instanceof THREE.CubeTexture ) {

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
        const geometry = new THREE.SphereGeometry( radius, 60, 40 );
        const material = new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );
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

        const videoTexture = new THREE.VideoTexture( video );
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

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
  
        ImagePanorama.prototype.onLoad.call( this, new THREE.Texture( canvas ) );
  
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

        'tDiffuse': { value: new THREE.Texture() },
        'resolution': { value: 1.0 },
        'transform': { value: new THREE.Matrix4() },
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
        this.userMouse = new THREE.Vector2();

        this.quatA = new THREE.Quaternion();
        this.quatB = new THREE.Quaternion();
        this.quatCur = new THREE.Quaternion();
        this.quatSlerp = new THREE.Quaternion();

        this.vectorX = new THREE.Vector3( 1, 0, 0 );
        this.vectorY = new THREE.Vector3( 0, 1, 0 );

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

        return new THREE.PlaneBufferGeometry( size, size * ratio );

    }

    static createMaterial ( size ) {

        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

        uniforms.zoom.value = size;
        uniforms.opacity.value = 0.0;

        return new THREE.ShaderMaterial( {

            uniforms: uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            side: THREE.BackSide,
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

            const angleX = THREE.Math.degToRad( x - this.userMouse.x ) * 0.4;
            const angleY = THREE.Math.degToRad( y - this.userMouse.y ) * 0.4;

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

        texture.minFilter = texture.magFilter = THREE.LinearFilter;
  
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
        const geometry = new THREE.SphereGeometry( radius, 60, 40 );
        const material = new THREE.MeshBasicMaterial( { visible: false });
    
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
    this.target = new THREE.Vector3();

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
    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

    /*
     * //////////
     * internals
     */

    var scope = this;

    var EPS = 10e-8;
    var MEPS = 10e-5;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();
    var panOffset = new THREE.Vector3();

    var offset = new THREE.Vector3();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    var theta = 0;
    var phi = 0;
    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var pan = new THREE.Vector3();

    var lastPosition = new THREE.Vector3();
    var lastQuaternion = new THREE.Quaternion();

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

    var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
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

        if ( scope.object instanceof THREE.PerspectiveCamera ) {

            // perspective
            var position = scope.object.position;
            var offset = position.clone().sub( scope.target );
            var targetDistance = offset.length();

            // half of the fov is center to top of screen
            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

            // we actually don't use screenWidth, since perspective camera is fixed to screen height
            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

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

        if ( scope.object instanceof THREE.PerspectiveCamera ) {

            scale /= dollyScale;

        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

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

        if ( scope.object instanceof THREE.PerspectiveCamera ) {

            scale *= dollyScale;

        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

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
OrbitControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

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

        rotY += THREE.Math.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
        rotX += THREE.Math.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

        scope.updateAlphaOffsetAngle( rotY );

        tempX = event.touches[ 0 ].pageX;
        tempY = event.touches[ 0 ].pageY;

    };

    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

        var zee = new THREE.Vector3( 0, 0, 1 );

        var euler = new THREE.Euler();

        var q0 = new THREE.Quaternion();

        var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

        var vectorFingerY;
        var fingerQY = new THREE.Quaternion();
        var fingerQX = new THREE.Quaternion();

        if ( scope.screenOrientation == 0 ) {

            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

        } else if ( scope.screenOrientation == 180 ) {

            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == 90 ) {

            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == - 90) {

            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
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

        var alpha = scope.deviceOrientation.alpha ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
        var beta = scope.deviceOrientation.beta ? THREE.Math.degToRad( scope.deviceOrientation.beta ) : 0; // X'
        var gamma = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
        var orient = scope.screenOrientation ? THREE.Math.degToRad( scope.screenOrientation ) : 0; // O

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
DeviceOrientationControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype), {

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
        var _camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

        var _scene = new THREE.Scene();
  
        var _stereo = new THREE.StereoCamera();
        _stereo.aspect = 0.5;
  
        var _params = { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat };
  
        var _renderTarget = new THREE.WebGLRenderTarget( 512, 512, _params );
        _renderTarget.scissorTest = true;
        _renderTarget.texture.generateMipmaps = false;
  
        /*
         * Distortion Mesh ported from:
         * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
         */
  
        var distortion = new THREE.Vector2( 0.441, 0.156 );
  
        var geometry = new THREE.PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();
  
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
  
        var vector = new THREE.Vector2();
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
  
        var material = new THREE.MeshBasicMaterial( { map: _renderTarget.texture } );
        var mesh = new THREE.Mesh( geometry, material );
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
        var _stereo = new THREE.StereoCamera();
        _stereo.aspect = 0.5;
        var size = new THREE.Vector2();

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
class Viewer extends THREE.EventDispatcher {
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
  
        this.camera = options.camera || new THREE.PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
        this.scene = options.scene || new THREE.Scene();
        this.renderer = options.renderer || new THREE.WebGLRenderer( { alpha: true, antialias: false } );
        this.sceneReticle = new THREE.Scene();
  
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
  
        this.raycaster = new THREE.Raycaster();
        this.raycasterPoint = new THREE.Vector2();
        this.userMouse = new THREE.Vector2();
        this.updateCallbacks = [];
        this.requestAnimationId = null;
  
        this.cameraFrustum = new THREE.Frustum();
        this.cameraViewProjectionMatrix = new THREE.Matrix4();
  
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
  
        chv = this.camera.getWorldDirection( new THREE.Vector3() );
        cvv = chv.clone();
  
        vptc = this.panorama.getWorldPosition( new THREE.Vector3() ).sub( this.camera.getWorldPosition( new THREE.Vector3() ) );
  
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
  
            const invertXVector = new THREE.Vector3( -1, 1, 1 );
  
            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ).multiply( invertXVector ), duration, easing );
  
        } else {
  
            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ), duration, easing );
  
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
            const converter = new THREE.Vector3( -1, 1, 1 );
            const world = this.panorama.getWorldPosition( new THREE.Vector3() );
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
                    const { x, y } = this.getScreenVector( child.getWorldPosition( new THREE.Vector3() ) );
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
        if ( THREE.Cache && THREE.Cache.enabled ) {
  
            THREE.Cache.clear();
  
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
                scope.currentPanoAngle = scope.camera.rotation.y - THREE.Math.degToRad( 90 );
                scope.fovAngle = THREE.Math.degToRad( scope.camera.fov ) ;
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
        THREE.Cache.clear();
    }

}

if ( THREE.REVISION != THREE_REVISION ) {

    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

}

/**
 * Panolens.js
 * @author pchen66
 * @namespace PANOLENS
 */
window.TWEEN = Tween;

export { BasicPanorama, CONTROLS, CONTROL_BUTTONS, CameraPanorama, CubePanorama, CubeTextureLoader, DataImage, EmptyPanorama, GoogleStreetviewPanorama, ImageLittlePlanet, ImageLoader, ImagePanorama, Infospot, LittlePlanet, MODES, Media, OUTPUTS, Panorama, REVISION, Reticle, THREE_REVISION, THREE_VERSION, TextureLoader, VERSION, VideoPanorama, Viewer, Widget };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL0RhdGFJbWFnZS5qcyIsIi4uL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qcyIsIi4uL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL21lZGlhL01lZGlhLmpzIiwiLi4vc3JjL2ludGVyZmFjZS9SZXRpY2xlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0d2VlbmpzL3R3ZWVuLmpzL3NyYy9Ud2Vlbi5qcyIsIi4uL3NyYy9pbmZvc3BvdC9JbmZvc3BvdC5qcyIsIi4uL3NyYy93aWRnZXQvV2lkZ2V0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvRW1wdHlQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DdWJlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvQmFzaWNQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hLmpzIiwiLi4vc3JjL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlci5qcyIsIi4uL3NyYy9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEuanMiLCIuLi9zcmMvc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYS5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvT3JiaXRDb250cm9scy5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QuanMiLCIuLi9zcmMvbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0LmpzIiwiLi4vc3JjL3ZpZXdlci9WaWV3ZXIuanMiLCIuLi9zcmMvQ2hlY2suanMiLCIuLi9zcmMvUGFub2xlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuLyoqXG4gKiBSRVZJU0lPTlxuICogQG1vZHVsZSBSRVZJU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuUkVWSVNJT05cbiAqIEB0eXBlIHtzdHJpbmd9IHJldmlzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBSRVZJU0lPTiA9IHZlcnNpb24uc3BsaXQoICcuJyApWyAxIF07XG5cbi8qKlxuICogVkVSU0lPTlxuICogQG1vZHVsZSBWRVJTSU9OXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5WRVJTSU9OXG4gKiBAdHlwZSB7c3RyaW5nfSB2ZXJzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gdmVyc2lvbjtcblxuLyoqXG4gKiBUSFJFRUpTIFJFVklTSU9OXG4gKiBAbW9kdWxlIFRIUkVFX1JFVklTSU9OXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5USFJFRV9SRVZJU0lPTlxuICogQHR5cGUge3N0cmluZ30gdGhyZWVqcyByZXZpc2lvblxuICovXG5leHBvcnQgY29uc3QgVEhSRUVfUkVWSVNJT04gPSBkZXBlbmRlbmNpZXMudGhyZWUuc3BsaXQoICcuJyApWyAxIF07XG5cbi8qKlxuICogVEhSRUVKUyBWRVJTSU9OXG4gKiBAbW9kdWxlIFRIUkVFX1ZFUlNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlRIUkVFX1ZFUlNJT05cbiAqIEB0eXBlIHtzdHJpbmd9IHRocmVlanMgdmVyc2lvblxuICovXG5leHBvcnQgY29uc3QgVEhSRUVfVkVSU0lPTiA9IGRlcGVuZGVuY2llcy50aHJlZS5yZXBsYWNlKCAvW14wLTkuXS9nLCAnJyApO1xuXG4vKipcbiAqIENPTlRST0xTXG4gKiBAbW9kdWxlIENPTlRST0xTXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5DT05UUk9MUy5PUkJJVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IE9SQklUIDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERVZJQ0VPUklFTlRBVElPTiAxXG4gKi9cbmV4cG9ydCBjb25zdCBDT05UUk9MUyA9IHsgT1JCSVQ6IDAsIERFVklDRU9SSUVOVEFUSU9OOiAxIH07XG5cbi8qKlxuICogTU9ERVNcbiAqIEBtb2R1bGUgTU9ERVNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLk1PREVTLlVOS05PV05cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBVTktOT1dOIDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT1JNQUwgMVxuICogQHByb3BlcnR5IHtudW1iZXJ9IENBUkRCT0FSRCAyXG4gKiBAcHJvcGVydHkge251bWJlcn0gU1RFUkVPIDNcbiAqL1xuZXhwb3J0IGNvbnN0IE1PREVTID0geyBVTktOT1dOOiAwLCBOT1JNQUw6IDEsIENBUkRCT0FSRDogMiwgU1RFUkVPOiAzIH07XG5cbi8qKlxuICogQ09OVFJPTF9CVVRUT05TXG4gKiBAbW9kdWxlIENPTlRST0xfQlVUVE9OU1xuICogQGV4YW1wbGUgUEFOT0xFTlMuVklFV0VSLkNPTlRST0xfQlVUVE9OU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEZVTExTQ1JFRU5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRVRUSU5HXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklERU9cbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRST0xfQlVUVE9OUyA9IHsgRlVMTFNDUkVFTjogJ2Z1bGxzY3JlZW4nLCBTRVRUSU5HOiAnc2V0dGluZycsIFZJREVPOiAndmlkZW8nIH07XG5cbi8qKlxuICogT1VUUFVUU1xuICogQG1vZHVsZSBPVVRQVVRTXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5WSUVXRVIuT1VUUFVUU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IE5PTkVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDT05TT0xFXG4gKiBAcHJvcGVydHkge3N0cmluZ30gT1ZFUkxBWVxuICovXG5leHBvcnQgY29uc3QgT1VUUFVUUyA9IHsgTk9ORTogJ25vbmUnLCBDT05TT0xFOiAnY29uc29sZScsIE9WRVJMQVk6ICdvdmVybGF5JyB9O1xuXG4iLCIvKipcbiAqIERhdGEgVVJJIEltYWdlc1xuICogQG1vZHVsZSBEYXRhSW1hZ2VcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkRhdGFJbWFnZS5JbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSW5mbyBJbmZvcm1hdGlvbiBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQXJyb3cgQXJyb3cgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZ1bGxzY3JlZW5FbnRlciBGdWxsc2NyZWVuIEVudGVyIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuTGVhdmUgRnVsbHNjcmVlbiBMZWF2ZSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlkZW9QbGF5IFZpZGVvIFBsYXkgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZpZGVvUGF1c2UgVmlkZW8gUGF1c2UgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFdoaXRlVGlsZSBXaGl0ZSBUaWxlIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTZXR0aW5nIFNldHRpbmdzIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDaGV2cm9uUmlnaHQgQ2hldnJvbiBSaWdodCBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hlY2sgQ2hlY2sgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZpZXdJbmRpY2F0b3IgVmlldyBJbmRpY2F0b3IgSWNvblxuICovXG5jb25zdCBEYXRhSW1hZ2UgPSB7XG4gICAgSW5mbzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUJBQUFBQVFBRHE4L2hnQUFBREJrbEVRVlI0MnUyYlAwOFVRUmlIbnpGYVNZQ0kveG9rc2RCSXFHd0lpWVdSVUJJU0V4cENRMGVqMzhGV09tbElLS2hvTVBFYmFDeHNyckhpWXJRZ09TbFFFYUlDclQrTEhTUFp6Tnp0M3MzYzNIbjdsSHZMenZ2ODJMMmRtMzBYS2lvcUtnWVkwNjJCSkYwSHBvQTd3QVJ3QmJoc1B6NERqb0VHOEFuWU5jWjhTeDFPcDhJWEpNMUtXcGRVVjNucTltOW5KVjFJN1ZOR2ZFelNNMG1OTnFSOU5Pd3h4MUw3TlJNZmxiUW02U1NnZUo0VE84Wm9hdCs4L0xLa2c0amllUTRrTGFmMlJ0S3dwSjB1aXVmWmtUU2NTbjVTMGw1QytiL3NTWnJzdHZ5TXBLUFU1dWM0a2pUVGprdnBlWUNrYWVBMS8rN2h2Y0laTUd1TXFVVUxRTklVOEFhNGx0cld3eUh3eUJpekd6d0FTU1BBZStCMmFzc1c3QUgzalRFL2kreGNab2ExMlFmeTJCbzNpKzVjS0FCbDk5ekYxR1lsV0ZUQmVVTExTMERack9zRGNETmdnVFhnYzI3YkxXQTY0QmhmZ0h2R21COGRIVVhaMURNMFM0NXhsaUtNczliS3Ira2xJT2txc0Jyd3Y5SnRWcTFEZXdFQVQ0Q2gxQllkTUdRZHlnZWc3RGY0U21xREFLeW95WHBDc3pQZ0lUQ2V1dm9BakZ1WDBnRThqbGpVZHY3YkN0aU9PSjdYcGRVWjhML2dkWEhPQTVRdFlINU5YWFZnYnJnV1duMW53RlRxYWlQZ2RQSUZjRGQxdFJGd09sMzA3RHdSdVpnWHdMdmN0Z2ZBMDRoak9wMThBY1JlWjZzWlkxNmUzeURwVXVReG5VNitTMkFrY2pFcGNEcjF6eE9YU1BnQ0tMU2EwbWM0blh3Qi9FcGRiUVNjVHI0QUdxbXJqWURUeVJmQXg5VFZSc0RwNUF1ZzhMSnlIK0YwY2daZzU4ejExQlVIcE81cnVHaDJHM3lidXVxQWVGMmFCZkFxZGRVQjhicTBPZ1AyVTFjZWdIM2FPUU9NTWIrQnJkVFZCMkRMdXBRTHdMSU9uS1kyNklCVDYrQ2xhUURHbU8vQVJtcUxEdGl3RG43SFZrY1krRWRqTm9UbENJK3RZaE8yaVVwcG02SEtzbFBVcTJxUUtIcFVlOEFGc2phVVh1VVFXQ2dxWHlvQUc4SXVNRS9Xa05Scm5BSHpaZnFEU2dkZ1E2Z0JjMlRkM2IzQ01UQlh0a09zSXpUSWpaTG5RaGpjVnRsY0VJUFpMSjBMb1Z2dDhzL1ZhKzN5dVNBRzg0VUpSeEI5OGNwTTlkSlVSVVZGeFNEekJ4S2RlNExrMy9oMkFBQUFBRWxGVGtTdVFtQ0MnLCBcbiAgICBBcnJvdzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUJBQUFBQVFBRHE4L2hnQUFBRFBrbEVRVlI0MnUyYk1Vc2NRUmlHMzAvU1JhSkVJMVpLVWlSRXJOSUVMUlViUVlTQW5YOGhwVlVna0RZcDB3Z1dWallXK1FjSmFRellwTG9qSklYaHREREVLQnBqNjV0aTU4aXhtZG1iMlp2WjcrVDJBVUh1ZG1mbWVYZjJibmIzTzZDbXBxWm1nSkdxT2lJNUFXQVd3RU1BMHdEdUFyaHQzcjRDY0FhZ0JlQWJnSWFJL05RT3AxZmhJWktMSk4rU2JES2NwdGwza2VTUXRrK0krQmpKVnlSYkphUmR0RXliWTlwK1JlS2pKTitRdkl3b251ZlM5REdxN1p1WFh5ZDVuRkE4enpISmRXMXZrTHhEY3JkQzhUeTdKTzlveWMrUVBGQ1ViM05BY3FacStUbVNwOXJtSFp5U25DdmpFcndPSVBrVXdIdjgrdzd2RjY0QUxJcklmcklBU000QytBRGducmF0Z3hNQUN5TFNpQjRBeVJFQW53RTgwTGJzd2dHQUp5Snk0Yk54eUFwcjZ3Ykl3NHh4eTNkanJ3Q1lmZWV1YVpzRnNFYlBkVUxYVTREWnF1c0xnTWtFQTIxUDA1RUViZjhBOEZoRXpvczI4cGtCTHhMS0w1cy9yL00xa0Vrejl2S1FIR2VhdGYwNXlmbU9mdWJOYTdHNUpEbGU1Tmh0Qmp3SE1CejV5RndBV0JhUlQrMFh6UDhwWnNLd2NRaUgyZlg4WWNvamIra3p4VXc0WkpuN0NTUVhxcFJQSE1LQ3E3K2laSjcxTXZkeS9EZnRYU1E2SGNKZFNEYXFQUEtXL21QT0JPK2xjYnZ6Q1UzNVJDRk0yUHB3blFLelpRZmRnZmUwZHhINWRMQTZ1UUo0cEMyZklBU3JreXVBNlg2UWp4eUMxY2tWUU5uN2JOSGxJNFpnZFhJRlVPYmlKSmw4cEJDc1RqR2Z1SXdBMkN2NEZON3hiWWpranFzUkFIdUllUFhvQ2lERjFaazJWaWRYQUwrMVI1c0FxNU1yZ0piMmFCTmdkWElGOEZWN3RBbXdPcmtDQ0ZzNzN3eXNUdFlBVEhGQ1UzdkVFV202Q2k2S3ZnWS9hbzg2SWs2WG9nRGVhWTg2SWs2WGJqUGdTSHZrRVRoQ3dReTQ1WHBEUks1SmJnTjRHV2tnVXlSOUg2NU1SUXhnVzBTdW5aNUZleks3cGZ3ZDhlOE1WOFVmQVBkRjVKZHJnOEpyQWJQanByWkZEMndXeVFQNmo4WlNFdWZSbUdsZ1E5dW1CQnZkNUlPZ2JqRlVLTHUrWG5XQmhHK3Jwc0ZWWkdVby9jb0pnRlZmK2FBQVRBZ05BQ3ZJQ3BMNmpTc0FLeUgxUWNFQm1CRDJBU3docSs3dUY4NEFMSVZXaVBVRUI3bFFzaU9Fd1MyVnpRVXhtTVhTdVJDcUtwZC96WDRybDg4Rk1aZy9tTEFFY1NOK01sUC9hS3FtcHFabWtQa0wwaFNqd09wTkt4d0FBQUFBU1VWT1JLNUNZSUk9JyxcbiAgICBGdWxsc2NyZWVuRW50ZXI6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSWpSa1pHUmtaR0lpQm9aV2xuYUhROUlqSTBJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhkcFpIUm9QU0l5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S0lDQWdJRHh3WVhSb0lHUTlJazB3SURCb01qUjJNalJJTUhvaUlHWnBiR3c5SW01dmJtVWlMejRLSUNBZ0lEeHdZWFJvSUdROUlrMDNJREUwU0RWMk5XZzFkaTB5U0RkMkxUTjZiUzB5TFRSb01sWTNhRE5XTlVnMWRqVjZiVEV5SURkb0xUTjJNbWcxZGkwMWFDMHlkak42VFRFMElEVjJNbWd6ZGpOb01sWTFhQzAxZWlJdlBnbzhMM04yWno0PScsXG4gICAgRnVsbHNjcmVlbkxlYXZlOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRURTBMREUwU0RFNVZqRTJTREUyVmpFNVNERTBWakUwVFRVc01UUklNVEJXTVRsSU9GWXhOa2cxVmpFMFRUZ3NOVWd4TUZZeE1FZzFWamhJT0ZZMVRURTVMRGhXTVRCSU1UUldOVWd4TmxZNFNERTVXaUlnTHo0OEwzTjJaejQ9JyxcbiAgICBWaWRlb1BsYXk6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRnc05TNHhORll4T1M0eE5Fd3hPU3d4TWk0eE5FdzRMRFV1TVRSYUlpQXZQand2YzNablBnPT0nLFxuICAgIFZpZGVvUGF1c2U6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTVMakUwU0RFNFZqVXVNVFJJTVRSTk5pd3hPUzR4TkVneE1GWTFMakUwU0RaV01Ua3VNVFJhSWlBdlBqd3ZjM1puUGc9PScsXG4gICAgV2hpdGVUaWxlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQkFNQUFBQUdWc25KQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFCMVdsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpV0UxUUlFTnZjbVVnTlM0MExqQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDBhV1ptUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzUnBabVl2TVM0d0x5SStDaUFnSUNBZ0lDQWdJRHgwYVdabU9rTnZiWEJ5WlhOemFXOXVQakU4TDNScFptWTZRMjl0Y0hKbGMzTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGpFOEwzUnBabVk2VDNKcFpXNTBZWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xCb2IzUnZiV1YwY21salNXNTBaWEp3Y21WMFlYUnBiMjQrTWp3dmRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQZ29nSUNBZ0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJQ0FnUEM5eVpHWTZVa1JHUGdvOEwzZzZlRzF3YldWMFlUNEtBdGlBQlFBQUFDUlFURlJGQUFBQUFBQUFCZ1lHQndjSEhoNGVLeXNyeDhmSHk4dkx6TXpNN096c0FBQUFCZ1lHK3E3U1pnQUFBQXAwVWs1VEFQNysvdjcrL3Y3Ky9pSngvYThBQUFPd1NVUkJWSGphN2QwaGJzTkFFQVZRbzZTRkk2WEVjQUxEY2dOTHZVQnZFQlFWaHBrV1ZZV2xoU3NWRlM3dDVRSXNoUnQ2OTVsRUFTWlArOGM3YTFrekRMMWZ6Ky96eXV2enA2RmJ2b2Rkckw2dURkMXlHWjVlWGxkZWIxOE4zZkl4N0ErNThwcm1obTY1RGZ2RGNkMDk1Mmx1NkphYkZiRC96VnByWmoxbHpjeXMrZmo5ejh4VFp0YlQ4cnY4eVdsdTZCWUFJZ0FBQUFBQUFBQUFBQUJBTTZRWEVBRUFBQUFBQUFBQWdKMmduYUFJaUlBM1EycUFHZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUpzQURrVkZBQUFBQUFBOEJqMEdSVUFFUkVBRVJFQUVSRUFFUkVBRUFBQUFBQUFBQUFCMmduYUNJaUFDUHBsUkE5UUFOVUFFUkFBQUFFVlFFUlFCRVJDQlZsZkFjWjNhZVpvYnVzVUtNR0JoVjZLVUVsSEdLQkVSSlI2L2Z4RXhSa1FabDkvbFQ4UzFvVnN1aHF5WU1tUEtqQ2t6dmZjQ3BzeG9ocndZMFEwNkVBRUFBQUFBQUFBQUFBQ2dHZElMaUFBQUFBQUFBQUFBd0U3UVRsQUVSTUNiSVRWQURRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3S213UTFFUkFBQUFBQUNQUVk5QkVSQUJFUkFCRVJBQkVSQUJFUkFCQUFBQUFBQUFBSUNkb0oyZ0NJaUFUMmJVQURWQURSQUJFUUFBUUJGVUJFVkFCRVJnRXl2QWxKbStWNEFwTTZiTW1ESmp5b3dwTTZiTWROMExtREtqR2ZKaVJEZm9RQVFBQUFBQUFBQUFBQUNBWmtndklBSUFBQUFBQUFBQUFEdEJPMEVSRUFGdmh0UUFOUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUtmQ0RrVkZBQUFBQUFBOEJqMEdSVUFFUkVBRVJFQUVSRUFFUkVBRUFBQUFBQUFBQUFCMmduYUNJaUFDUHBsUkE5UUFOVUFFUkFBQUFFVlFFUlFCRVJDQlRhd0FVMmI2WGdHbXpKZ3lZOHFNS1RPbXpKZ3kwM1V2WU1xTVpzaUxFZDJnQXhFQUFBQUFBQUFBQUFBQW1pRzlnQWdBQUFBQUFBQUFBT3dFN1FSRlFBUzhHVklEMUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKd0tPeFFWQVFBQUFBRHdHUFFZRkFFUkVBRVJFQUVSRUFFUkVBRVJBQUFBQUFBQUFBRFlDZG9KaW9BSStHUkdEVkFEMUFBUkVBRUFBQlJCUlZBRVJFQUVOckVDVEpucGV3V1lNbVBLakNrenBzeVlNbVBLVE5lOWdDa3ptaUV2Um5TRERrUUFBQUFBQUFBQUFBQUFhSWIwQWlJQUFBQUFBQUFBQUxBVHRCTVVBUkh3WmtnTlVBTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFxN0ZCVUJBQUFBQURBWTlCalVBUkVRQVJFUUFSRVFBUkVRQVJFQUFBQUFBQUFBQUJnSjJnbktBSWk0Sk1aTlVBTlVBTkVRQVFBQUZBRUZVRVJFQUVSMk1RS01HV203eFZneW93cE01MFBXZW45dWdOR1h6MVhhb2NBRmdBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuICAgIFNldHRpbmc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURuMGxFUVZSNDJ1MmJ6VXNWVVJqR255TzZDUHpBTW5UanBwQW8zTFR3SDFDcVRmYXhiZU9pUlMzN0Ewd1h0Uk9GVmkxYVJCczNMV29oU0lHYlFBUVhWaUJHUmhHMFVJUktVQ3BLN3EvRm5PQjJ1YzZjT1hObVJuR2UzZVcrSDgvN3pMbG4zdk54cFFvVktsUTR3akJGSkFGT1NScVgxTzdvc2l2cHZqSG1VMW5DaEJaZ2x2U1lMWUpiUzBFYW5DdklKeldLK2duc3lIMzQvOE91TWFZamIyNjVqd0NnejZONFNXcTN2b2RiQUVtblMvS3RCRGdvQWd5VTVCdGVBT0FrTUFQY0Jyb2M3UHNrRFdmZ04rd3lEd0JkbHRNTWNESTN0WUJuZGUvcEhlQVJNTlRFcmdkNEFQendlUDgzNG9lTjFkTWt6NURsc0ZObi95eXY0a2RpU0s0QXQ0QU80Q3F3R2FEd1JtemEyQjAyMTBxTTdZaHJYVTU5QU5BcTZiV2t3UVRUbjVLTzVmSUUwdVZZbFhUZUdMT1hGTXgxRHJqbFVMd0tLTjQxeDZEbG5JakVFUUNja1BSZTBva0NpZ3VKcjVMT0dHTyt4aG01aklDSlExaThMT2VKSktQWUVRQU1LdnJ0dDVaZGpTZjJGTTBGcS9zWkpJMkE2VU5jdkN6MzZUaURmVWNBY0UxU1B1L1U2TW04ay9URmZ1NlhkRmI1aVgzZEdQTThsUWZ3Tm9kMytUb3dCblEzeWRkdHYxdlBJZStiMUpJQml3RUoxSUFKMjA4azVXMjF0cldBK1YvNUNIQWNtQXRVL0EyUC9EY0NpVEFISEU4dGdDVmhnTHZBWGdZQ2sxN0pvL3lUR2ZMdVdlN1pkNzJBQzhDV0I0bjNPQXo3bUx5dE5rWmFiQUVYTWhmZVFLWWZXRXBKWkN4QTNyR1VPWmVBL3FERjE1RnBBejQ3RXZsTms5bmVJMmUzamVXQ3owQmJtdmlwTmtTTU1YOGt1U1pZTThaOHp5cUFqYkhtYU41bU9lWWpnSVhyVTkzTVdyeEhyTlFqcnFpRGtRTUxId0crT2RxRjNOTjNqZVhLelU4QW9GMVN6ZEg4WEtoSlVPN0haRFhMTWJ3QXdJQ2tKVVVMRnhlMFNicVNWUUFidzNYaTdaZTBaTG1HQXpBS2JIczBKR1UxUXR2QWFJakNXNEI3Wk92SnkycUZhNWE3MzBSUHRCaWF6MENnbmtpWmk2RjVmQlpEVk12aG83RWhjdVMzeEpKMmhWOUl1cGdUcWFMdzBoaHphYjh2cTIzeE9HL3IrTERzS2pMZ1lWenhVblUwbHR3SzJ3RGV6VXlKbUV3cVhncC9QTDRydnh0aGFlQ1NJK3p4dUExMEo4WmtXZEpOU2IyU0xrdmF5S0h3RFJ1NzErWmFqckc5NDFKOGFnQUxEUTNHVS9hL0l2TWtZQ1B6bUNidExORVZtYWNOdGdzNWlQOWZZVk5FVjFRNkhlejd5TlpTTCtKMlNhclRjcHFpeVYyaVVrRzBJdlBGdmJ6NUZiRW4rS0VrM3dNandNZVNmQ3NCWEZCZGx5OUNBUGs5eWR5ZmZwRUN1QjV0WmZWSmphS1d1ZU9TZmlubG42WUs0bGFoUW9VS1J4ZC9BY1JQR1RjUUNBVVFBQUFBQUVsRlRrU3VRbUNDJyxcbiAgICBDaGV2cm9uUmlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRndU5Ua3NNVFl1TlRoTU1UTXVNVGNzTVRKTU9DNDFPU3czTGpReFRERXdMRFpNTVRZc01USk1NVEFzTVRoTU9DNDFPU3d4Tmk0MU9Gb2lJQzgrUEM5emRtYysnLFxuICAgIENoZWNrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUSXhMRGRNT1N3eE9Vd3pMalVzTVRNdU5VdzBMamt4TERFeUxqQTVURGtzTVRZdU1UZE1NVGt1TlRrc05TNDFPVXd5TVN3M1dpSWdMejQ4TDNOMlp6ND0nLFxuICAgIFZpZXdJbmRpY2F0b3I6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQQ0ZFVDBOVVdWQkZJSE4yWnlCUVZVSk1TVU1nSWkwdkwxY3pReTh2UkZSRUlGTldSeUF4TGpFdkwwVk9JaUFpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2UjNKaGNHaHBZM012VTFaSEx6RXVNUzlFVkVRdmMzWm5NVEV1WkhSa0lqNEtQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJwWkQwaWRtbGxkeTFwYm1ScFkyRjBiM0lpSUdobGFXZG9kRDBpTXpBaUlIZHBaSFJvUFNJek1DSWdkbWxsZDBKdmVEMGlMVEl1TlNBdE1TQXpNQ0F6TUNJK0NnazhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGk1emREQjdjM1J5YjJ0bExYZHBaSFJvT2pJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdabWxzYkRwdWIyNWxPMzB1YzNReGUzTjBjbTlyWlMxM2FXUjBhRG8yTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zMEtDVHd2YzNSNWJHVStDZ2s4Wno0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOSURFeUxqVWdNQ0JCSURFeUxqVWdNVEl1TlNBd0lEQWdNQ0F0TVRJdU5TQXdJRUVnTVRJdU5TQXhNaTQxSURBZ01DQXdJREV5TGpVZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRESWlJR1E5SWswZ01UTWdNQ0JNSURFd0lESWdUQ0F4TmlBeUlGb2lQand2Y0dGMGFENEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXlJaUJrUFNKTklESWdNQ0JCSURJZ01pQXdJREFnTUNBdE1pQXdJRUVnTWlBeUlEQWdNQ0F3SURJZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRERWlJR2xrUFNKcGJtUnBZMkYwYjNJaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERXNNQ3d3TERFc01UTXNNVFV1TlNraVBqd3ZjR0YwYUQ0S0NUd3ZaejRLUEM5emRtYysnXG59O1xuXG5leHBvcnQgeyBEYXRhSW1hZ2UgfTsiLCJpbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UuanMnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBtb2R1bGUgSW1hZ2VMb2FkZXJcbiAqIEBkZXNjcmlwdGlvbiBJbWFnZSBsb2FkZXIgd2l0aCBwcm9ncmVzcyBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9JbWFnZUxvYWRlci5qc31cbiAqL1xuY29uc3QgSW1hZ2VMb2FkZXIgPSB7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuSW1hZ2VMb2FkZXIubG9hZCggSU1BR0VfVVJMIClcbiAgICAgKiBAbWV0aG9kIGxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzID0gKCkgPT4ge30sIG9uRXJyb3IgPSAoKSA9PiB7fSApIHtcblxuICAgICAgICAvLyBFbmFibGUgY2FjaGVcbiAgICAgICAgVEhSRUUuQ2FjaGUuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgbGV0IGNhY2hlZCwgcmVxdWVzdCwgYXJyYXlCdWZmZXJWaWV3LCBibG9iLCB1cmxDcmVhdG9yLCBpbWFnZSwgcmVmZXJlbmNlO1xuXG4gICAgICAgIC8vIFJlZmVyZW5jZSBrZXlcbiAgICAgICAgZm9yIChsZXQgaWNvbk5hbWUgaW4gRGF0YUltYWdlKSB7XG5cbiAgICAgICAgICAgIGlmIChEYXRhSW1hZ2UuaGFzT3duUHJvcGVydHkoaWNvbk5hbWUpICYmIHVybCA9PT0gRGF0YUltYWdlW2ljb25OYW1lXSkge1xuXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gaWNvbk5hbWU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FjaGVkXG4gICAgICAgIGNhY2hlZCA9IFRIUkVFLkNhY2hlLmdldChyZWZlcmVuY2UgPyByZWZlcmVuY2UgOiB1cmwpO1xuXG4gICAgICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBpZiAob25Mb2FkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNhY2hlZC5jb21wbGV0ZSAmJiBjYWNoZWQuc3JjICkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZWQuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBhIG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgICAgICB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsICdpbWcnKTtcblxuICAgICAgICAvLyBBZGQgdG8gY2FjaGVcbiAgICAgICAgVEhSRUUuQ2FjaGUuYWRkKHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCwgaW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IG9uSW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHVybENyZWF0b3IucmV2b2tlT2JqZWN0VVJMKGltYWdlLnNyYyk7XG4gICAgICAgICAgICBvbkxvYWQoaW1hZ2UpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG5cbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW4gIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Jvc3NPcmlnaW4gOiAnJztcblxuICAgICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCBvbkVycm9yICk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ3Byb2dyZXNzJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAgKCAhZXZlbnQgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbG9hZGVkLCB0b3RhbCwgbGVuZ3RoQ29tcHV0YWJsZSB9ID0gZXZlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggbGVuZ3RoQ29tcHV0YWJsZSApIHtcblx0XG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQsIHRvdGFsIH0gKTtcblx0XG4gICAgICAgICAgICB9XG5cdFxuICAgICAgICB9ICk7XG4gICAgICAgIFxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkZW5kJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAgKCAhZXZlbnQgKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQ6IHsgcmVzcG9uc2UgfSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgIGFycmF5QnVmZmVyVmlldyA9IG5ldyBVaW50OEFycmF5KCByZXNwb25zZSApO1xuICAgICAgICAgICAgYmxvYiA9IG5ldyB3aW5kb3cuQmxvYiggWyBhcnJheUJ1ZmZlclZpZXcgXSApO1xuXHRcdFx0XHRcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgb25JbWFnZUxvYWRlZCwgZmFsc2UgKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFxuICAgICAgICB9ICk7XG5cdFxuICAgICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG5cdFxuICAgIH1cblxufTtcblxuZXhwb3J0IHsgSW1hZ2VMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXIuanMnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBtb2R1bGUgVGV4dHVyZUxvYWRlclxuICogQGRlc2NyaXB0aW9uIFRleHR1cmUgbG9hZGVyIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL1RleHR1cmVMb2FkZXIuanN9XG4gKi9cbmNvbnN0IFRleHR1cmVMb2FkZXIgPSB7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlIHRleHR1cmVcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5UZXh0dXJlTG9hZGVyLmxvYWQoIElNQUdFX1VSTCApXG4gICAgICogQG1ldGhvZCBsb2FkXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHVybCAgICAgICAgLSBBbiBpbWFnZSB1cmxcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1RIUkVFLlRleHR1cmV9ICAgXHQgLSBJbWFnZSB0ZXh0dXJlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG4gICAgICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTsgXG5cbiAgICAgICAgSW1hZ2VMb2FkZXIubG9hZCggdXJsLCBmdW5jdGlvbiAoIGltYWdlICkge1xuXG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlID0gaW1hZ2U7XG5cbiAgICAgICAgICAgIC8vIEpQRUdzIGNhbid0IGhhdmUgYW4gYWxwaGEgY2hhbm5lbCwgc28gbWVtb3J5IGNhbiBiZSBzYXZlZCBieSBzdG9yaW5nIHRoZW0gYXMgUkdCLlxuICAgICAgICAgICAgY29uc3QgaXNKUEVHID0gdXJsLnNlYXJjaCggL1xcLihqcGd8anBlZykkLyApID4gMCB8fCB1cmwuc2VhcmNoKCAvXmRhdGFcXDppbWFnZVxcL2pwZWcvICkgPT09IDA7XG5cbiAgICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gaXNKUEVHID8gVEhSRUUuUkdCRm9ybWF0IDogVEhSRUUuUkdCQUZvcm1hdDtcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBvbkxvYWQoIHRleHR1cmUgKTtcblxuICAgICAgICB9LCBvblByb2dyZXNzLCBvbkVycm9yICk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7IFRleHR1cmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXIuanMnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBtb2R1bGUgQ3ViZVRleHR1cmVMb2FkZXJcbiAqIEBkZXNjcmlwdGlvbiBDdWJlIFRleHR1cmUgTG9hZGVyIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzfVxuICovXG5jb25zdCBDdWJlVGV4dHVyZUxvYWRlciA9IHtcblxuICAgIC8qKlxuICAgICAqIExvYWQgNiBpbWFnZXMgYXMgYSBjdWJlIHRleHR1cmVcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5DdWJlVGV4dHVyZUxvYWRlci5sb2FkKCBbICdweC5wbmcnLCAnbngucG5nJywgJ3B5LnBuZycsICdueS5wbmcnLCAncHoucG5nJywgJ256LnBuZycgXSApXG4gICAgICogQG1ldGhvZCBsb2FkXG4gICAgICogQHBhcmFtICB7YXJyYXl9ICAgdXJscyAgICAgICAgLSBhcnJheSBvZiA2IHVybHMgdG8gaW1hZ2VzLCBvbmUgZm9yIGVhY2ggc2lkZSBvZiB0aGUgQ3ViZVRleHR1cmUuIFRoZSB1cmxzIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogcG9zLXgsIG5lZy14LCBwb3MteSwgbmVnLXksIHBvcy16LCBuZWctelxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7VEhSRUUuQ3ViZVRleHR1cmV9ICAgLSBDdWJlIHRleHR1cmVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHVybHMsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzID0gKCkgPT4ge30sIG9uRXJyb3IgKSB7XG5cblx0ICAgdmFyIHRleHR1cmUsIGxvYWRlZCwgcHJvZ3Jlc3MsIGFsbCwgbG9hZGluZ3M7XG5cblx0ICAgdGV4dHVyZSA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZSggW10gKTtcblxuXHQgICBsb2FkZWQgPSAwO1xuXHQgICBwcm9ncmVzcyA9IHt9O1xuXHQgICBhbGwgPSB7fTtcblxuXHQgICB1cmxzLm1hcCggZnVuY3Rpb24gKCB1cmwsIGluZGV4ICkge1xuXG5cdFx0ICAgSW1hZ2VMb2FkZXIubG9hZCggdXJsLCBmdW5jdGlvbiAoIGltYWdlICkge1xuXG5cdFx0XHQgICB0ZXh0dXJlLmltYWdlc1sgaW5kZXggXSA9IGltYWdlO1xuXG5cdFx0XHQgICBsb2FkZWQrKztcblxuXHRcdFx0ICAgaWYgKCBsb2FkZWQgPT09IDYgKSB7XG5cblx0XHRcdFx0ICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0ICAgb25Mb2FkKCB0ZXh0dXJlICk7XG5cblx0XHRcdCAgIH1cblxuXHRcdCAgIH0sIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdCAgIHByb2dyZXNzWyBpbmRleCBdID0geyBsb2FkZWQ6IGV2ZW50LmxvYWRlZCwgdG90YWw6IGV2ZW50LnRvdGFsIH07XG5cblx0XHRcdCAgIGFsbC5sb2FkZWQgPSAwO1xuXHRcdFx0ICAgYWxsLnRvdGFsID0gMDtcblx0XHRcdCAgIGxvYWRpbmdzID0gMDtcblxuXHRcdFx0ICAgZm9yICggdmFyIGkgaW4gcHJvZ3Jlc3MgKSB7XG5cblx0XHRcdFx0ICAgbG9hZGluZ3MrKztcblx0XHRcdFx0ICAgYWxsLmxvYWRlZCArPSBwcm9ncmVzc1sgaSBdLmxvYWRlZDtcblx0XHRcdFx0ICAgYWxsLnRvdGFsICs9IHByb2dyZXNzWyBpIF0udG90YWw7XG5cblx0XHRcdCAgIH1cblxuXHRcdFx0ICAgaWYgKCBsb2FkaW5ncyA8IDYgKSB7XG5cblx0XHRcdFx0ICAgYWxsLnRvdGFsID0gYWxsLnRvdGFsIC8gbG9hZGluZ3MgKiA2O1xuXG5cdFx0XHQgICB9XG5cblx0XHRcdCAgIG9uUHJvZ3Jlc3MoIGFsbCApO1xuXG5cdFx0ICAgfSwgb25FcnJvciApO1xuXG5cdCAgIH0gKTtcblxuXHQgICByZXR1cm4gdGV4dHVyZTtcblxuICAgIH1cblxufTtcblxuZXhwb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBVc2VyIE1lZGlhXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uc3RyYWludHM9eyB2aWRlbzogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwODAgfSwgZmFjaW5nTW9kZTogeyBleGFjdDogJ2Vudmlyb25tZW50JyB9IH0sIGF1ZGlvOiBmYWxzZSB9XVxuICovXG5mdW5jdGlvbiBNZWRpYSAoIGNvbnN0cmFpbnRzICkge1xuXG4gICAgY29uc3QgZGVmYXVsdENvbnN0cmFpbnRzID0geyB2aWRlbzogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwODAgfSwgZmFjaW5nTW9kZTogeyBleGFjdDogJ2Vudmlyb25tZW50JyB9IH0sIGF1ZGlvOiBmYWxzZSB9O1xuXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oIGRlZmF1bHRDb25zdHJhaW50cywgY29uc3RyYWludHMgKTtcblxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLnJhdGlvU2NhbGFyID0gMTtcbiAgICB0aGlzLnZpZGVvRGV2aWNlSW5kZXggPSAwO1xuXG59O1xuXG5NZWRpYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcblxuICAgIHNldENvbnRhaW5lcjogZnVuY3Rpb24gKCBjb250YWluZXIgKSB7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB9LFxuXG4gICAgc2V0U2NlbmU6IGZ1bmN0aW9uICggc2NlbmUgKSB7XG5cbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVudW1lcmF0ZSBkZXZpY2VzXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZW51bWVyYXRlRGV2aWNlczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZXM7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHsgcmVzb2x2ZSggZGV2aWNlcyApOyB9ICk7XG5cbiAgICAgICAgcmV0dXJuIGRldmljZXMubGVuZ3RoID4gMCA/IHJlc29sdmVkUHJvbWlzZSA6IHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggdG8gbmV4dCBhdmFpbGFibGUgdmlkZW8gZGV2aWNlXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc3dpdGNoTmV4dFZpZGVvRGV2aWNlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IHNldFZpZGVEZXZpY2VJbmRleCA9IHRoaXMuc2V0VmlkZURldmljZUluZGV4LmJpbmQoIHRoaXMgKTtcblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZpZGVvRGV2aWNlSW5kZXg7XG5cbiAgICAgICAgdGhpcy5nZXREZXZpY2VzKCAndmlkZW8nIClcbiAgICAgICAgICAgIC50aGVuKCBkZXZpY2VzID0+IHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAoIGluZGV4ID49IGRldmljZXMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWRlRGV2aWNlSW5kZXgoIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWRlRGV2aWNlSW5kZXgoIGluZGV4ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhcnQoIGRldmljZXNbIGluZGV4IF0gKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGRldmljZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHR5cGUga2V5d29yZCB0byBtYXRjaCBkZXZpY2Uua2luZFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldERldmljZXM6IGZ1bmN0aW9uICggdHlwZSA9ICd2aWRlbycgKSB7XG5cbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlcztcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBfZGV2aWNlcyA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBfZGV2aWNlcy5tYXAoIGRldmljZSA9PiB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICggIWRldmljZXMuaW5jbHVkZXMoIGRldmljZSApICkgeyBkZXZpY2VzLnB1c2goIGRldmljZSApOyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBfZGV2aWNlcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoIHR5cGUsICdpJyApO1xuICAgICAgICAgICAgcmV0dXJuIF9kZXZpY2VzLmZpbHRlciggZGV2aWNlID0+IHJlZy50ZXN0KCBkZXZpY2Uua2luZCApICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAgIC50aGVuKCB2YWxpZGF0ZSApXG4gICAgICAgICAgICAudGhlbiggZmlsdGVyICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXIgbWVkaWFcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtQ29uc3RyYWludHN9IGNvbnN0cmFpbnRzXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0VXNlck1lZGlhOiBmdW5jdGlvbiAoIGNvbnN0cmFpbnRzICkge1xuXG4gICAgICAgIGNvbnN0IHNldE1lZGlhU3RyZWFtID0gdGhpcy5zZXRNZWRpYVN0cmVhbS5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IHBsYXlWaWRlbyA9IHRoaXMucGxheVZpZGVvLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3Qgb25DYXRjaEVycm9yID0gZXJyb3IgPT4geyBjb25zb2xlLndhcm4oIGBQQU5PTEVOUy5NZWRpYTogJHtlcnJvcn1gICk7IH07XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSggY29uc3RyYWludHMgKVxuICAgICAgICAgICAgLnRoZW4oIHNldE1lZGlhU3RyZWFtIClcbiAgICAgICAgICAgIC50aGVuKCBwbGF5VmlkZW8gKVxuICAgICAgICAgICAgLmNhdGNoKCBvbkNhdGNoRXJyb3IgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmlkZW8gZGV2aWNlIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFZpZGVEZXZpY2VJbmRleDogZnVuY3Rpb24gKCBpbmRleCApIHtcblxuICAgICAgICB0aGlzLnZpZGVvRGV2aWNlSW5kZXggPSBpbmRleDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBzdHJlYW1pbmdcbiAgICAgKiBAcGFyYW0ge01lZGlhRGV2aWNlSW5mb30gW3RhcmdldERldmljZV1cbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24oIHRhcmdldERldmljZSApIHtcblxuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IHRoaXMuY29uc3RyYWludHM7XG4gICAgICAgIGNvbnN0IGdldFVzZXJNZWRpYSA9IHRoaXMuZ2V0VXNlck1lZGlhLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3Qgb25WaWRlb0RldmljZXMgPSBkZXZpY2VzID0+IHtcblxuICAgICAgICAgICAgaWYgKCAhZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCAnbm8gdmlkZW8gZGV2aWNlIGZvdW5kJyApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRldmljZSA9IHRhcmdldERldmljZSB8fCBkZXZpY2VzWyAwIF07XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGRldmljZS5kZXZpY2VJZDtcblxuICAgICAgICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYSggY29uc3RyYWludHMgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlVmlkZW9FbGVtZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGV2aWNlcygpLnRoZW4oIG9uVmlkZW9EZXZpY2VzICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBzdHJlYW1pbmdcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5zdHJlYW07XG5cbiAgICAgICAgaWYgKCBzdHJlYW0gJiYgc3RyZWFtLmFjdGl2ZSApIHtcblxuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBzdHJlYW0uZ2V0VHJhY2tzKClbIDAgXTtcblxuICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbSA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBtZWRpYSBzdHJlYW1cbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW0gXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0TWVkaWFTdHJlYW06IGZ1bmN0aW9uICggc3RyZWFtICkge1xuXG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICggdGhpcy5zY2VuZSApIHtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gdGhpcy5jcmVhdGVWaWRlb1RleHR1cmUoKTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGxheSB2aWRlbyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXknIH0gKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdmlkZW8gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuXG4gICAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BhdXNlJyB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyB0ZXh0dXJlXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RIUkVFLlZpZGVvVGV4dHVyZX1cbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb1RleHR1cmU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5WaWRlb1RleHR1cmUoIHZpZGVvICk7XG5cbiAgICAgICAgdGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcbiAgICAgICAgdGV4dHVyZS5jZW50ZXIuc2V0KCAwLjUsIDAuNSApO1xuXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdjYW5wbGF5JywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtIVE1MVmlkZW9FbGVtZW50fVxuICAgICAqIEBmaXJlcyBNZWRpYSNjYW5wbGF5XG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9FbGVtZW50OiBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZpZGVvIGNhbiBwbGF5IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBNZWRpYSNjYW5wbGF5XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjYW5QbGF5ID0gKCkgPT4gZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2FucGxheScgfSApO1xuICAgICAgICBcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnYXV0b3BsYXknLCAnJyApO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdtdXRlZCcsICcnICk7XG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ3BsYXlzaW5saW5lJywgJycgKTtcblxuICAgICAgICB2aWRlby5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHZpZGVvLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdmlkZW8uc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdmlkZW8uc3R5bGUub2JqZWN0UG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgdmlkZW8uc3R5bGUub2JqZWN0Rml0ID0gJ2NvdmVyJztcbiAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9IHRoaXMuc2NlbmUgPyAnbm9uZScgOiAnJztcblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnY2FucGxheScsIGNhblBsYXkgKTtcblxuICAgICAgICByZXR1cm4gdmlkZW87XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gd2luZG93IHJlc2l6ZSBldmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnZpZGVvV2lkdGggJiYgdGhpcy5lbGVtZW50LnZpZGVvSGVpZ2h0ICYmIHRoaXMuc2NlbmUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGg6IHdpZHRoLCBjbGllbnRIZWlnaHQ6IGhlaWdodCB9ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5zY2VuZS5iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgY29uc3QgeyB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCB9ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhUmF0aW8gPSB2aWRlb0hlaWdodCAvIHZpZGVvV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB2aWV3cG9ydFJhdGlvID0gdGhpcy5jb250YWluZXIgPyB3aWR0aCAvIGhlaWdodCA6IDEuMDtcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gY2FtZXJhUmF0aW8gKiB2aWV3cG9ydFJhdGlvICogdGhpcy5yYXRpb1NjYWxhcjtcblxuICAgICAgICAgICAgaWYgKCB3aWR0aCA+IGhlaWdodCApIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoIHJhdGlvLCAxICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHR1cmUucmVwZWF0LnNldCggMSwgMSAvIHJhdGlvICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IE1lZGlhIH07IiwiXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBSZXRpY2xlIDNEIFNwcml0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1RIUkVFLkNvbG9yfSBbY29sb3I9MHhmZmZmZmZdIC0gQ29sb3Igb2YgdGhlIHJldGljbGUgc3ByaXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthdXRvU2VsZWN0PXRydWVdIC0gQXV0byBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHdlbGxUaW1lPTE1MDBdIC0gRHVyYXRpb24gZm9yIGR3ZWxsaW5nIHNlcXVlbmNlIHRvIGNvbXBsZXRlXG4gKi9cbmNsYXNzIFJldGljbGUgZXh0ZW5kcyBUSFJFRS5TcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKCBjb2xvciA9IDB4ZmZmZmZmLCBhdXRvU2VsZWN0ID0gdHJ1ZSwgZHdlbGxUaW1lID0gMTUwMCApIHtcbiAgICAgICAgY29uc3QgeyBjYW52YXMsIGNvbnRleHQgfSA9IFJldGljbGUuY3JlYXRlQ2FudmFzKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU3ByaXRlTWF0ZXJpYWwoIHsgY29sb3IsIG1hcDogUmV0aWNsZS5jcmVhdGVDYW52YXNUZXh0dXJlKCBjYW52YXMgKSB9ICk7XG4gICAgICAgIHN1cGVyKG1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLmRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICBcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApOyAgICBcbiAgXG4gICAgICAgIHRoaXMuYXV0b1NlbGVjdCA9IGF1dG9TZWxlY3Q7XG4gICAgICAgIHRoaXMuZHdlbGxUaW1lID0gZHdlbGxUaW1lO1xuICAgICAgICB0aGlzLnJpcHBsZUR1cmF0aW9uID0gNTAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnogPSAtMTA7XG4gICAgICAgIHRoaXMuY2VudGVyLnNldCggMC41LCAwLjUgKTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQoIDAuNSwgMC41LCAxICk7XG4gIFxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcbiAgXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBtYXRlcmlhbCBjb2xvclxuICAgICAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IGNvbG9yIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q29sb3IgKCBjb2xvciApIHtcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLmNvbG9yLmNvcHkoIGNvbG9yIGluc3RhbmNlb2YgVEhSRUUuQ29sb3IgPyBjb2xvciA6IG5ldyBUSFJFRS5Db2xvciggY29sb3IgKSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjYW52YXMgdGV4dHVyZVxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5DYW52YXNUZXh0dXJlfVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVDYW52YXNUZXh0dXJlICggY2FudmFzICkge1xuICBcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKCBjYW52YXMgKTtcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuICAgICAgICB0ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xuICBcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjYW52YXMgZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gb2JqZWN0XG4gICAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBvYmplY3QuY2FudmFzXG4gICAgICogQHJldHVybnMge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gb2JqZWN0LmNvbnRleHRcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlQ2FudmFzIChkcHIpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAzMjtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMzI7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuICBcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoIGRwciwgZHByICk7XG4gIFxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSA1O1xuICAgICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gJ3JnYmEoMjAwLDIwMCwyMDAsMC45KSc7XG4gIFxuICAgICAgICByZXR1cm4geyBjYW52YXMsIGNvbnRleHQgfTtcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYW52YXMgYXJjIGJ5IHByb2dyZXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyAoIHByb2dyZXNzICkge1xuICBcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBtYXRlcmlhbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG4gICAgICAgIGNvbnN0IGRlZ3JlZSA9IHByb2dyZXNzICogTWF0aC5QSSAqIDI7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvci5nZXRTdHlsZSgpO1xuICAgICAgICBjb25zdCB4ID0gY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XG4gICAgICAgIGNvbnN0IHkgPSBjYW52YXNIZWlnaHQgKiAwLjUgLyBkcHI7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDM7XG4gICAgICAgICAgXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIFxuICAgICAgICBpZiAoIHByb2dyZXNzID09PSAwICkge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIGNhbnZhc1dpZHRoIC8gMTYsIDAsIDIgKiBNYXRoLlBJICk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgY2FudmFzV2lkdGggLyA0IC0gbGluZVdpZHRoLCAtTWF0aC5QSSAvIDIsIC1NYXRoLlBJIC8gMiArIGRlZ3JlZSApO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICBcbiAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSaXBwbGUgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxuICAgICAqL1xuICAgIHJpcHBsZSgpIHtcbiAgXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgbWF0ZXJpYWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5yaXBwbGVEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcbiAgXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgXG4gICAgICAgICAgICBjb25zdCB0aW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdXBkYXRlICk7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lc3RhbXA7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSAxLjAgLSBwcm9ncmVzcyA+IDAgPyAxLjAgLSBwcm9ncmVzcyA6IDA7XG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSBwcm9ncmVzcyAqIGNhbnZhc1dpZHRoICogMC41IC8gZHByO1xuICBcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIgKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvci5yICogMjU1fSwgJHtjb2xvci5nICogMjU1fSwgJHtjb2xvci5iICogMjU1fSwgJHtvcGFjaXR5fSlgO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICBcbiAgICAgICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xuICBcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRpbWVySWQgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcbiAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0aWNsZSByaXBwbGUgZW5kIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1lbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLWVuZCcgfSApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIHJpcHBsZSBzdGFydCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXJpcHBsZS1zdGFydCcgfSApO1xuICBcbiAgICAgICAgdXBkYXRlKCk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogTWFrZSByZXRpY2xlIHZpc2libGVcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBNYWtlIHJldGljbGUgaW52aXNpYmxlXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlICgpIHtcbiAgXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGR3ZWxsaW5nXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XG4gICAgICovXG4gICAgc3RhcnQgKCBjYWxsYmFjayApIHtcbiAgXG4gICAgICAgIGlmICggIXRoaXMuYXV0b1NlbGVjdCApIHtcbiAgXG4gICAgICAgICAgICByZXR1cm47XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0aWNsZSBzdGFydCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtc3RhcnQnIH0gKTtcbiAgXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEVuZCBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1lbmRcbiAgICAgKi9cbiAgICBlbmQoKXtcbiAgXG4gICAgICAgIGlmICggIXRoaXMuc3RhcnRUaW1lc3RhbXAgKSB7IHJldHVybjsgfVxuICBcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnRpbWVySWQgKTtcbiAgXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IG51bGw7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0aWNsZSBlbmQgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1lbmRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1lbmQnIH0gKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZHdlbGxpbmdcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcbiAgXG4gICAgICAgIHRoaXMudGltZXJJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSApO1xuICBcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBlbGFwc2VkIC8gdGhpcy5kd2VsbFRpbWU7XG4gIFxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIHByb2dyZXNzICk7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0aWNsZSB1cGRhdGUgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS11cGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS11cGRhdGUnLCBwcm9ncmVzcyB9ICk7XG4gIFxuICAgICAgICBpZiAoIHByb2dyZXNzID49IDEuMCApIHtcbiAgXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xuICAgICAgICAgICAgaWYgKCB0aGlzLmNhbGxiYWNrICkgeyB0aGlzLmNhbGxiYWNrKCk7IH1cbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZSgpO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9ICBcbn07XG5cbmV4cG9ydCB7IFJldGljbGUgfTsiLCIvKipcbiAqIFR3ZWVuLmpzIC0gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdHdlZW5qcy90d2Vlbi5qc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdlZW5qcy90d2Vlbi5qcy9ncmFwaHMvY29udHJpYnV0b3JzIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNvbnRyaWJ1dG9ycy5cbiAqIFRoYW5rIHlvdSBhbGwsIHlvdSdyZSBhd2Vzb21lIVxuICovXG5cblxudmFyIF9Hcm91cCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5fdHdlZW5zID0ge307XG5cdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG59O1xuXG5fR3JvdXAucHJvdG90eXBlID0ge1xuXHRnZXRBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpLm1hcChmdW5jdGlvbiAodHdlZW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3R3ZWVuc1t0d2VlbklkXTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH0sXG5cblx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLl90d2VlbnMgPSB7fTtcblxuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHR0aGlzLl90d2VlbnNbdHdlZW4uZ2V0SWQoKV0gPSB0d2Vlbjtcblx0XHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuXG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNbdHdlZW4uZ2V0SWQoKV07XG5cdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlW3R3ZWVuLmdldElkKCldO1xuXG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSwgcHJlc2VydmUpIHtcblxuXHRcdHZhciB0d2VlbklkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVucyk7XG5cblx0XHRpZiAodHdlZW5JZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiBUV0VFTi5ub3coKTtcblxuXHRcdC8vIFR3ZWVucyBhcmUgdXBkYXRlZCBpbiBcImJhdGNoZXNcIi4gSWYgeW91IGFkZCBhIG5ldyB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCB0aGVuIHRoZVxuXHRcdC8vIG5ldyB0d2VlbiB3aWxsIGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgYmF0Y2guXG5cdFx0Ly8gSWYgeW91IHJlbW92ZSBhIHR3ZWVuIGR1cmluZyBhbiB1cGRhdGUsIGl0IG1heSBvciBtYXkgbm90IGJlIHVwZGF0ZWQuIEhvd2V2ZXIsXG5cdFx0Ly8gaWYgdGhlIHJlbW92ZWQgdHdlZW4gd2FzIGFkZGVkIGR1cmluZyB0aGUgY3VycmVudCBiYXRjaCwgdGhlbiBpdCB3aWxsIG5vdCBiZSB1cGRhdGVkLlxuXHRcdHdoaWxlICh0d2Vlbklkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHR3ZWVuSWRzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblxuXHRcdFx0XHRpZiAodHdlZW4gJiYgdHdlZW4udXBkYXRlKHRpbWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHR3ZWVuLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICghcHJlc2VydmUpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNbdHdlZW5JZHNbaV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0d2VlbklkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9XG59O1xuXG52YXIgVFdFRU4gPSBuZXcgX0dyb3VwKCk7XG5cblRXRUVOLkdyb3VwID0gX0dyb3VwO1xuVFdFRU4uX25leHRJZCA9IDA7XG5UV0VFTi5uZXh0SWQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBUV0VFTi5fbmV4dElkKys7XG59O1xuXG5cbi8vIEluY2x1ZGUgYSBwZXJmb3JtYW5jZS5ub3cgcG9seWZpbGwuXG4vLyBJbiBub2RlLmpzLCB1c2UgcHJvY2Vzcy5ocnRpbWUuXG5pZiAodHlwZW9mIChzZWxmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIChwcm9jZXNzKSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcblxuXHRcdC8vIENvbnZlcnQgW3NlY29uZHMsIG5hbm9zZWNvbmRzXSB0byBtaWxsaXNlY29uZHMuXG5cdFx0cmV0dXJuIHRpbWVbMF0gKiAxMDAwICsgdGltZVsxXSAvIDEwMDAwMDA7XG5cdH07XG59XG4vLyBJbiBhIGJyb3dzZXIsIHVzZSBzZWxmLnBlcmZvcm1hbmNlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmICh0eXBlb2YgKHNlbGYpICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgc2VsZi5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0IHNlbGYucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gVGhpcyBtdXN0IGJlIGJvdW5kLCBiZWNhdXNlIGRpcmVjdGx5IGFzc2lnbmluZyB0aGlzIGZ1bmN0aW9uXG5cdC8vIGxlYWRzIHRvIGFuIGludm9jYXRpb24gZXhjZXB0aW9uIGluIENocm9tZS5cblx0VFdFRU4ubm93ID0gc2VsZi5wZXJmb3JtYW5jZS5ub3cuYmluZChzZWxmLnBlcmZvcm1hbmNlKTtcbn1cbi8vIFVzZSBEYXRlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmIChEYXRlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFRXRUVOLm5vdyA9IERhdGUubm93O1xufVxuLy8gT3RoZXJ3aXNlLCB1c2UgJ25ldyBEYXRlKCkuZ2V0VGltZSgpJy5cbmVsc2Uge1xuXHRUV0VFTi5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9O1xufVxuXG5cblRXRUVOLlR3ZWVuID0gZnVuY3Rpb24gKG9iamVjdCwgZ3JvdXApIHtcblx0dGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xuXHR0aGlzLl92YWx1ZXNTdGFydCA9IHt9O1xuXHR0aGlzLl92YWx1ZXNFbmQgPSB7fTtcblx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQgPSB7fTtcblx0dGhpcy5fZHVyYXRpb24gPSAxMDAwO1xuXHR0aGlzLl9yZXBlYXQgPSAwO1xuXHR0aGlzLl9yZXBlYXREZWxheVRpbWUgPSB1bmRlZmluZWQ7XG5cdHRoaXMuX3lveW8gPSBmYWxzZTtcblx0dGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG5cdHRoaXMuX3JldmVyc2VkID0gZmFsc2U7XG5cdHRoaXMuX2RlbGF5VGltZSA9IDA7XG5cdHRoaXMuX3N0YXJ0VGltZSA9IG51bGw7XG5cdHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dGhpcy5fY2hhaW5lZFR3ZWVucyA9IFtdO1xuXHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uU3RvcENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fZ3JvdXAgPSBncm91cCB8fCBUV0VFTjtcblx0dGhpcy5faWQgPSBUV0VFTi5uZXh0SWQoKTtcblxufTtcblxuVFdFRU4uVHdlZW4ucHJvdG90eXBlID0ge1xuXHRnZXRJZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fSxcblxuXHRpc1BsYXlpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNQbGF5aW5nO1xuXHR9LFxuXG5cdHRvOiBmdW5jdGlvbiAocHJvcGVydGllcywgZHVyYXRpb24pIHtcblxuXHRcdHRoaXMuX3ZhbHVlc0VuZCA9IHByb3BlcnRpZXM7XG5cblx0XHRpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGR1cmF0aW9uOiBmdW5jdGlvbiBkdXJhdGlvbihkKSB7XG5cdFx0dGhpcy5fZHVyYXRpb24gPSBkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN0YXJ0OiBmdW5jdGlvbiAodGltZSkge1xuXG5cdFx0dGhpcy5fZ3JvdXAuYWRkKHRoaXMpO1xuXG5cdFx0dGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0eXBlb2YgdGltZSA9PT0gJ3N0cmluZycgPyBUV0VFTi5ub3coKSArIHBhcnNlRmxvYXQodGltZSkgOiB0aW1lIDogVFdFRU4ubm93KCk7XG5cdFx0dGhpcy5fc3RhcnRUaW1lICs9IHRoaXMuX2RlbGF5VGltZTtcblxuXHRcdGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBDaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcblx0XHRcdGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHR0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gW3RoaXMuX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBgdG8oKWAgc3BlY2lmaWVzIGEgcHJvcGVydHkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0LFxuXHRcdFx0Ly8gd2Ugc2hvdWxkIG5vdCBzZXQgdGhhdCBwcm9wZXJ0eSBpbiB0aGUgb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTYXZlIHRoZSBzdGFydGluZyB2YWx1ZS5cblx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX29iamVjdFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmICgodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRzdG9wOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoIXRoaXMuX2lzUGxheWluZykge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZ3JvdXAucmVtb3ZlKHRoaXMpO1xuXHRcdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMuX29uU3RvcENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblN0b3BDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVuZDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy51cGRhdGUoSW5maW5pdHkpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcENoYWluZWRUd2VlbnM6IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RvcCgpO1xuXHRcdH1cblxuXHR9LFxuXG5cdGdyb3VwOiBmdW5jdGlvbiAoZ3JvdXApIHtcblx0XHR0aGlzLl9ncm91cCA9IGdyb3VwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRlbGF5OiBmdW5jdGlvbiAoYW1vdW50KSB7XG5cblx0XHR0aGlzLl9kZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRyZXBlYXQ6IGZ1bmN0aW9uICh0aW1lcykge1xuXG5cdFx0dGhpcy5fcmVwZWF0ID0gdGltZXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRyZXBlYXREZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0eW95bzogZnVuY3Rpb24gKHlveW8pIHtcblxuXHRcdHRoaXMuX3lveW8gPSB5b3lvO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZWFzaW5nOiBmdW5jdGlvbiAoZWFzaW5nRnVuY3Rpb24pIHtcblxuXHRcdHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRpbnRlcnBvbGF0aW9uOiBmdW5jdGlvbiAoaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uRnVuY3Rpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRjaGFpbjogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fY2hhaW5lZFR3ZWVucyA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uU3RhcnQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblVwZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblJlcGVhdDogZnVuY3Rpb24gb25SZXBlYXQoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uQ29tcGxldGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0b3A6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHZhciBwcm9wZXJ0eTtcblx0XHR2YXIgZWxhcHNlZDtcblx0XHR2YXIgdmFsdWU7XG5cblx0XHRpZiAodGltZSA8IHRoaXMuX3N0YXJ0VGltZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xuXG5cdFx0XHRpZiAodGhpcy5fb25TdGFydENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZWxhcHNlZCA9ICh0aW1lIC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX2R1cmF0aW9uO1xuXHRcdGVsYXBzZWQgPSAodGhpcy5fZHVyYXRpb24gPT09IDAgfHwgZWxhcHNlZCA+IDEpID8gMSA6IGVsYXBzZWQ7XG5cblx0XHR2YWx1ZSA9IHRoaXMuX2Vhc2luZ0Z1bmN0aW9uKGVsYXBzZWQpO1xuXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgdXBkYXRlIHByb3BlcnRpZXMgdGhhdCBkbyBub3QgZXhpc3QgaW4gdGhlIHNvdXJjZSBvYmplY3Rcblx0XHRcdGlmICh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN0YXJ0ID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKGVuZCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZW5kLmNoYXJBdCgwKSA9PT0gJysnIHx8IGVuZC5jaGFyQXQoMCkgPT09ICctJykge1xuXHRcdFx0XHRcdFx0ZW5kID0gc3RhcnQgKyBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVuZCA9IHBhcnNlRmxvYXQoZW5kKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR0aGlzLl9vYmplY3RbcHJvcGVydHldID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sodGhpcy5fb2JqZWN0LCBlbGFwc2VkKTtcblx0XHR9XG5cblx0XHRpZiAoZWxhcHNlZCA9PT0gMSkge1xuXG5cdFx0XHRpZiAodGhpcy5fcmVwZWF0ID4gMCkge1xuXG5cdFx0XHRcdGlmIChpc0Zpbml0ZSh0aGlzLl9yZXBlYXQpKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVwZWF0LS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWFzc2lnbiBzdGFydGluZyB2YWx1ZXMsIHJlc3RhcnQgYnkgbWFraW5nIHN0YXJ0VGltZSA9IG5vd1xuXHRcdFx0XHRmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIHtcblx0XHRcdFx0XHRcdHZhciB0bXAgPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIHtcblx0XHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9ICF0aGlzLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9yZXBlYXREZWxheVRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9yZXBlYXREZWxheVRpbWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX2RlbGF5VGltZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9vblJlcGVhdENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gTWFrZSB0aGUgY2hhaW5lZCB0d2VlbnMgc3RhcnQgZXhhY3RseSBhdCB0aGUgdGltZSB0aGV5IHNob3VsZCxcblx0XHRcdFx0XHQvLyBldmVuIGlmIHRoZSBgdXBkYXRlKClgIG1ldGhvZCB3YXMgY2FsbGVkIHdheSBwYXN0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdHdlZW5cblx0XHRcdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KHRoaXMuX3N0YXJ0VGltZSArIHRoaXMuX2R1cmF0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gaztcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YWRyYXRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogKDIgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgtLWsgKiAoayAtIDIpIC0gMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDdWJpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSAoLS1rICogayAqIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrIC0gMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWludGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguY29zKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEV4cG9uZW50aWFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0gMTAgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoLSBNYXRoLnBvdygyLCAtIDEwICogKGsgLSAxKSkgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdENpcmN1bGFyOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNxcnQoMSAtICgtLWsgKiBrKSk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0gMC41ICogKE1hdGguc3FydCgxIC0gayAqIGspIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFbGFzdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLU1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiBrKSAqIE1hdGguc2luKChrIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0ayAqPSAyO1xuXG5cdFx0XHRpZiAoayA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0QmFjazoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogKGsgKiBrICogKChzICsgMSkgKiBrIC0gcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqICgocyArIDEpICogayArIHMpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCb3VuY2U6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KDEgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgKDEgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMiAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMS41IC8gMi43NSkpICogayArIDAuNzU7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMi41IC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjI1IC8gMi43NSkpICogayArIDAuOTM3NTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi42MjUgLyAyLjc1KSkgKiBrICsgMC45ODQzNzU7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgMC41KSB7XG5cdFx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLkluKGsgKiAyKSAqIDAuNTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KGsgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5UV0VFTi5JbnRlcnBvbGF0aW9uID0ge1xuXG5cdExpbmVhcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xuXG5cdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZm4odlswXSwgdlsxXSwgZik7XG5cdFx0fVxuXG5cdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRyZXR1cm4gZm4odlttXSwgdlttIC0gMV0sIG0gLSBmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XG5cblx0fSxcblxuXHRCZXppZXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgYiA9IDA7XG5cdFx0dmFyIG4gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIHB3ID0gTWF0aC5wb3c7XG5cdFx0dmFyIGJuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW47XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBuOyBpKyspIHtcblx0XHRcdGIgKz0gcHcoMSAtIGssIG4gLSBpKSAqIHB3KGssIGkpICogdltpXSAqIGJuKG4sIGkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiO1xuXG5cdH0sXG5cblx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcblxuXHRcdGlmICh2WzBdID09PSB2W21dKSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRpID0gTWF0aC5mbG9vcihmID0gbSAqICgxICsgaykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odlsoaSAtIDEgKyBtKSAlIG1dLCB2W2ldLCB2WyhpICsgMSkgJSBtXSwgdlsoaSArIDIpICUgbV0sIGYgLSBpKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gdlswXSAtIChmbih2WzBdLCB2WzBdLCB2WzFdLCB2WzFdLCAtZikgLSB2WzBdKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRcdHJldHVybiB2W21dIC0gKGZuKHZbbV0sIHZbbV0sIHZbbSAtIDFdLCB2W20gLSAxXSwgZiAtIG0pIC0gdlttXSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2W2kgPyBpIC0gMSA6IDBdLCB2W2ldLCB2W20gPCBpICsgMSA/IG0gOiBpICsgMV0sIHZbbSA8IGkgKyAyID8gbSA6IGkgKyAyXSwgZiAtIGkpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0VXRpbHM6IHtcblxuXHRcdExpbmVhcjogZnVuY3Rpb24gKHAwLCBwMSwgdCkge1xuXG5cdFx0XHRyZXR1cm4gKHAxIC0gcDApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKG4sIGkpIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cblx0XHRcdHJldHVybiBmYyhuKSAvIGZjKGkpIC8gZmMobiAtIGkpO1xuXG5cdFx0fSxcblxuXHRcdEZhY3RvcmlhbDogKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGEgPSBbMV07XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAobikge1xuXG5cdFx0XHRcdHZhciBzID0gMTtcblxuXHRcdFx0XHRpZiAoYVtuXSkge1xuXHRcdFx0XHRcdHJldHVybiBhW25dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IG47IGkgPiAxOyBpLS0pIHtcblx0XHRcdFx0XHRzICo9IGk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhW25dID0gcztcblx0XHRcdFx0cmV0dXJuIHM7XG5cblx0XHRcdH07XG5cblx0XHR9KSgpLFxuXG5cdFx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG5cblx0XHRcdHZhciB2MCA9IChwMiAtIHAwKSAqIDAuNTtcblx0XHRcdHZhciB2MSA9IChwMyAtIHAxKSAqIDAuNTtcblx0XHRcdHZhciB0MiA9IHQgKiB0O1xuXHRcdFx0dmFyIHQzID0gdCAqIHQyO1xuXG5cdFx0XHRyZXR1cm4gKDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEpICogdDMgKyAoLSAzICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pXG4oZnVuY3Rpb24gKHJvb3QpIHtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBUV0VFTjtcblx0XHR9KTtcblxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXG5cdFx0Ly8gTm9kZS5qc1xuXHRcdG1vZHVsZS5leHBvcnRzID0gVFdFRU47XG5cblx0fSBlbHNlIGlmIChyb290ICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdC8vIEdsb2JhbCB2YXJpYWJsZVxuXHRcdHJvb3QuVFdFRU4gPSBUV0VFTjtcblxuXHR9XG5cbn0pKHRoaXMpO1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCB7IE1PREVTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEluZm9ybWF0aW9uIHNwb3QgYXR0YWNoZWQgdG8gcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZT0zMDBdIC0gRGVmYXVsdCBzY2FsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtpbWFnZVNyYz1QQU5PTEVOUy5EYXRhSW1hZ2UuSW5mb10gLSBJbWFnZSBvdmVybGF5IGluZm9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuaW1hdGVkPXRydWVdIC0gRW5hYmxlIGRlZmF1bHQgaG92ZXIgYW5pbWF0aW9uXG4gKi9cbmNsYXNzIEluZm9zcG90IGV4dGVuZHMgVEhSRUUuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCBzY2FsZSA9IDMwMCwgaW1hZ2VTcmMsIGFuaW1hdGVkICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDUwMCwgc2NhbGVGYWN0b3IgPSAxLjM7XG5cbiAgICAgICAgaW1hZ2VTcmMgPSBpbWFnZVNyYyB8fCBEYXRhSW1hZ2UuSW5mbztcblxuICAgICAgICB0aGlzLnR5cGUgPSAnaW5mb3Nwb3QnO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZCAhPT0gdW5kZWZpbmVkID8gYW5pbWF0ZWQgOiB0cnVlO1xuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSBmYWxzZTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBUT0RPOiBUaHJlZS5qcyBidWcgaG90Zml4IGZvciBzcHJpdGUgcmF5Y2FzdGluZyByMTA0XG4gICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE0NjI0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnRvUGFub3JhbWEgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnNvclN0eWxlID0gbnVsbDtcblxuICAgICAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XG5cbiAgICAgICAgdGhpcy5zY2FsZS5zZXQoIHNjYWxlLCBzY2FsZSwgMSApO1xuICAgICAgICB0aGlzLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9yaWdpbmFsUmF5Y2FzdCA9IHRoaXMucmF5Y2FzdDtcblxuICAgICAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgICAgIHRoaXMuSEFORExFUl9GT0NVUyA9IG51bGw7XHRcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLnNjYWxlVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcbiAgICAgICAgdGhpcy5zY2FsZURvd25BbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcblxuXG4gICAgICAgIGNvbnN0IHBvc3RMb2FkID0gZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG4gICAgICAgICAgICBpZiAoICF0aGlzLm1hdGVyaWFsICkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSB0ZXh0dXJlLmltYWdlLndpZHRoIC8gdGV4dHVyZS5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlLndpZHRoID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsV2lkdGggfHwgNjQ7XG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlLmhlaWdodCA9IHRleHR1cmUuaW1hZ2UubmF0dXJhbEhlaWdodCB8fCA2NDtcblxuICAgICAgICAgICAgdGhpcy5zY2FsZS5zZXQoIHJhdGlvICogc2NhbGUsIHNjYWxlLCAxICk7XG5cbiAgICAgICAgICAgIHRleHR1cmVTY2FsZS5jb3B5KCB0aGlzLnNjYWxlICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NhbGVVcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5zY2FsZSApXG4gICAgICAgICAgICAgICAgLnRvKCB7IHg6IHRleHR1cmVTY2FsZS54ICogc2NhbGVGYWN0b3IsIHk6IHRleHR1cmVTY2FsZS55ICogc2NhbGVGYWN0b3IgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCApO1xuXG4gICAgICAgICAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5zY2FsZSApXG4gICAgICAgICAgICAgICAgLnRvKCB7IHg6IHRleHR1cmVTY2FsZS54LCB5OiB0ZXh0dXJlU2NhbGUueSB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XG5cbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIH0uYmluZCggdGhpcyApO1xuXG4gICAgICAgIC8vIEFkZCBzaG93IGFuZCBoaWRlIGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5vblN0YXJ0KCB0aGlzLmVuYWJsZVJheWNhc3QuYmluZCggdGhpcywgdHJ1ZSApIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xuXG4gICAgICAgIHRoaXMuaGlkZUFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgICAgICAudG8oIHsgb3BhY2l0eTogMCB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAub25TdGFydCggdGhpcy5lbmFibGVSYXljYXN0LmJpbmQoIHRoaXMsIGZhbHNlICkgKVxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XG5cbiAgICAgICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMub25DbGljayApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcicsIHRoaXMub25Ib3ZlciApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmVudGVyJywgdGhpcy5vbkhvdmVyU3RhcnQgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnaG92ZXJsZWF2ZScsIHRoaXMub25Ib3ZlckVuZCApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCB0aGlzLm9uRHVhbEV5ZUVmZmVjdCApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLnNldENvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZGlzbWlzcycsIHRoaXMub25EaXNtaXNzICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWluZm9zcG90LWZvY3VzJywgdGhpcy5zZXRGb2N1c01ldGhvZCApO1xuXG4gICAgICAgIFRleHR1cmVMb2FkZXIubG9hZCggaW1hZ2VTcmMsIHBvc3RMb2FkICk7XHRcbiAgICB9XG5cdFxuXG4gICAgLyoqXG4gICAgICogU2V0IGluZm9zcG90IGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8b2JqZWN0fSBkYXRhIC0gRGF0YSB3aXRoIGNvbnRhaW5lciBpbmZvcm1hdGlvblxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldENvbnRhaW5lciAoIGRhdGEgKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcblxuICAgICAgICBpZiAoIGRhdGEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcblxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBkYXRhICYmIGRhdGEuY29udGFpbmVyICkge1xuXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhLmNvbnRhaW5lcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnQgaWYgZXhpc3RzXG4gICAgICAgIGlmICggY29udGFpbmVyICYmIHRoaXMuZWxlbWVudCApIHtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCB0aGlzLmVsZW1lbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIGluZm9zcG90XG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGEgY2xpY2sgZXZlbnRcbiAgICAgKiBUcmFuc2xhdGUgYW5kIGxvY2sgdGhlIGhvdmVyaW5nIGVsZW1lbnQgaWYgYW55XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5pbmcgbW91c2VFdmVudCB3aXRoIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkNsaWNrICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgJiYgdGhpcy5nZXRDb250YWluZXIoKSApIHtcblxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyU3RhcnQoIGV2ZW50ICk7XG5cbiAgICAgICAgICAgIC8vIExvY2sgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5sb2NrSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzbWlzcyBjdXJyZW50IGVsZW1lbnQgaWYgYW55XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIERpc21pc3MgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkRpc21pc3MgKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLnVubG9ja0hvdmVyRWxlbWVudCgpO1xuICAgICAgICAgICAgdGhpcy5vbkhvdmVyRW5kKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBhIG1vdXNlIGhvdmVyIGV2ZW50XG4gICAgICogVHJhbnNsYXRlIHRoZSBob3ZlcmluZyBlbGVtZW50IGlmIGFueVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWluaW5nIG1vdXNlRXZlbnQgd2l0aCBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Ib3ZlciAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBhIG1vdXNlIGhvdmVyIHN0YXJ0XG4gICAgICogU2V0cyBjdXJzb3Igc3R5bGUgdG8gJ3BvaW50ZXInLCBkaXNwbGF5IHRoZSBlbGVtZW50IGFuZCBzY2FsZSB1cCB0aGUgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkhvdmVyU3RhcnQgKCBldmVudCApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBjdXJzb3JTdHlsZSA9IHRoaXMuY3Vyc29yU3R5bGUgfHwgKCB0aGlzLm1vZGUgPT09IE1PREVTLk5PUk1BTCA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JyApO1xuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBjdXJzb3JTdHlsZTtcbiAgXG4gICAgICAgIGlmICggdGhpcy5hbmltYXRlZCApIHtcblxuICAgICAgICAgICAgc2NhbGVEb3duQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNjYWxlVXBBbmltYXRpb24uc3RhcnQoKTtcblxuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRYID49IDAgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRZID49IDAgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgZWxlbWVudCB3aWR0aCBmb3IgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgZWxlbWVudC5fd2lkdGggPSBsZWZ0LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2hlaWdodCA9IGxlZnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICAgICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBlbGVtZW50IHdpZHRoIGZvciByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll93aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5faGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBhIG1vdXNlIGhvdmVyIGVuZFxuICAgICAqIFNldHMgY3Vyc29yIHN0eWxlIHRvICdkZWZhdWx0JywgaGlkZSB0aGUgZWxlbWVudCBhbmQgc2NhbGUgZG93biB0aGUgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkhvdmVyRW5kICgpIHtcblxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgICAgIGlmICggdGhpcy5hbmltYXRlZCApIHtcblxuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RhcnQoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBlbGVtZW50ICYmICF0aGlzLmVsZW1lbnQubG9ja2VkICkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0LCBzdHlsZSB9ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmICggbGVmdCApIHsgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gZHVhbCBleWUgZWZmZWN0IGhhbmRsZXJcbiAgICAgKiBDcmVhdGVzIGR1cGxpY2F0ZSBsZWZ0IGFuZCByaWdodCBlbGVtZW50XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIHBhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCBldmVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uRHVhbEV5ZUVmZmVjdCAoIGV2ZW50ICkge1xuICBcbiAgICAgICAgaWYgKCAhdGhpcy5nZXRDb250YWluZXIoKSApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGVsZW1lbnQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodDtcblxuICAgICAgICB0aGlzLm1vZGUgPSBldmVudC5tb2RlO1xuXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgICAgaGFsZldpZHRoID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xuICAgICAgICBoYWxmSGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgICBpZiAoICFlbGVtZW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIWVsZW1lbnQubGVmdCAmJiAhZWxlbWVudC5yaWdodCApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0ID0gZWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQgPSBlbGVtZW50LmNsb25lTm9kZSggdHJ1ZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZWxlbWVudHMgdHJhbnNsYXRpb25cbiAgICAgICAgdGhpcy50cmFuc2xhdGVFbGVtZW50KCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQgKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudC5sZWZ0ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50LnJpZ2h0ICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGhvdmVyaW5nIGVsZW1lbnQgYnkgY3NzIHRyYW5zZm9ybVxuICAgICAqIEBwYXJhbSAge251bWJlcn0geCAtIFggcG9zaXRpb24gb24gdGhlIHdpbmRvdyBzY3JlZW5cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgLSBZIHBvc2l0aW9uIG9uIHRoZSB3aW5kb3cgc2NyZWVuXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdHJhbnNsYXRlRWxlbWVudCAoIHgsIHkgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50Ll93aWR0aCB8fCAhdGhpcy5lbGVtZW50Ll9oZWlnaHQgfHwgIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlZnQsIHRvcCwgZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgZGVsdGEsIGNvbnRhaW5lcjtcblxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgd2lkdGggPSBlbGVtZW50Ll93aWR0aCAvIDI7XG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuX2hlaWdodCAvIDI7XG4gICAgICAgIGRlbHRhID0gZWxlbWVudC52ZXJ0aWNhbERlbHRhICE9PSB1bmRlZmluZWQgPyBlbGVtZW50LnZlcnRpY2FsRGVsdGEgOiA0MDtcblxuICAgICAgICBsZWZ0ID0geCAtIHdpZHRoO1xuICAgICAgICB0b3AgPSB5IC0gaGVpZ2h0IC0gZGVsdGE7XG5cbiAgICAgICAgaWYgKCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkgXG4gICAgICAmJiBlbGVtZW50LmxlZnQgJiYgZWxlbWVudC5yaWdodFxuICAgICAgJiYgISggeCA9PT0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiAmJiB5ID09PSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiApICkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gNCAtIHdpZHRoICsgKCB4IC0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiApO1xuICAgICAgICAgICAgdG9wID0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgLSBoZWlnaHQgLSBkZWx0YSArICggeSAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudC5sZWZ0LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcblxuICAgICAgICAgICAgbGVmdCArPSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xuXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQucmlnaHQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZlbmRvciBzcGVjaWZpYyBjc3NcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIENTUyBzdHlsZSBuYW1lXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlIG1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3R5bGUgdmFsdWVcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRFbGVtZW50U3R5bGUgKCB0eXBlLCBlbGVtZW50LCB2YWx1ZSApIHtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAndHJhbnNmb3JtJyApIHtcblxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc3R5bGUubXNUcmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaG92ZXJpbmcgdGV4dCBjb250ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGJlIGRpc3BsYXllZFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFRleHQgKCB0ZXh0ICkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJzb3IgY3NzIHN0eWxlIG9uIGhvdmVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q3Vyc29ySG92ZXJTdHlsZSAoIHN0eWxlICkge1xuXG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGUgPSBzdHlsZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBob3ZlcmluZyB0ZXh0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYmUgZGlzcGxheWVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT00MF0gLSBWZXJ0aWNhbCBkZWx0YSB0byB0aGUgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRIb3ZlclRleHQgKCB0ZXh0LCBkZWx0YSA9IDQwICkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSAnNTAlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnNTAlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50ZXh0U2hhZG93ID0gJzAgMCAzcHggIzAwMDAwMCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtaW5mb3Nwb3QnICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmVydGljYWxEZWx0YSA9IGRlbHRhO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFRleHQoIHRleHQgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBob3ZlcmluZyBlbGVtZW50IGJ5IGNsb25pbmcgYW4gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7SFRNTERPTUVsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBiZSBjbG9uZWQgYW5kIGRpc3BsYXllZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9NDBdIC0gVmVydGljYWwgZGVsdGEgdG8gdGhlIGluZm9zcG90XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkSG92ZXJFbGVtZW50ICggZWwsIGRlbHRhID0gNDAgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50ICkgeyBcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWwuY2xvbmVOb2RlKCB0cnVlICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtaW5mb3Nwb3QnICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmVydGljYWxEZWx0YSA9IGRlbHRhO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBob3ZlcmluZyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlSG92ZXJFbGVtZW50ICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXG5cbiAgICAgICAgICAgIGlmICggdGhpcy5lbGVtZW50LmxlZnQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LmxlZnQgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQucmlnaHQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LnJpZ2h0ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJpZ2h0ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2sgaG92ZXJpbmcgZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvY2tIb3ZlckVsZW1lbnQgKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5sb2NrIGhvdmVyaW5nIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bmxvY2tIb3ZlckVsZW1lbnQgKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByYXljYXN0aW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlZD10cnVlXVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZVJheWNhc3QgKCBlbmFibGVkID0gdHJ1ZSApIHtcblxuICAgICAgICBpZiAoIGVuYWJsZWQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9IHRoaXMub3JpZ2luYWxSYXljYXN0O1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9ICgpID0+IHt9O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtkZWxheT0wXSAtIERlbGF5IHRpbWUgdG8gc2hvd1xuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNob3cgKCBkZWxheSA9IDAgKSB7XG5cbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBhbmltYXRlZCApIHtcblxuICAgICAgICAgICAgaGlkZUFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5lbmFibGVSYXljYXN0KCB0cnVlICk7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGluZm9zcG90XG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MF0gLSBEZWxheSB0aW1lIHRvIGhpZGVcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlICggZGVsYXkgPSAwICkge1xuXG4gICAgICAgIGNvbnN0IHsgYW5pbWF0ZWQsIGhpZGVBbmltYXRpb24sIHNob3dBbmltYXRpb24sIG1hdGVyaWFsLCBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBhbmltYXRlZCApIHtcblxuICAgICAgICAgICAgc2hvd0FuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBoaWRlQW5pbWF0aW9uLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5lbmFibGVSYXljYXN0KCBmYWxzZSApO1xuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgfVxuICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZm9jdXMgZXZlbnQgaGFuZGxlclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldEZvY3VzTWV0aG9kICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gZXZlbnQubWV0aG9kO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvY3VzIGNhbWVyYSBjZW50ZXIgdG8gdGhpcyBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MTAwMF0gLSBEdXJhdGlvbiB0byB0d2VlblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlYXNpbmc9VFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dF0gLSBFYXNpbmcgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmb2N1cyAoIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLkhBTkRMRVJfRk9DVVMgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuSEFORExFUl9GT0NVUyggdGhpcy5wb3NpdGlvbiwgZHVyYXRpb24sIGVhc2luZyApO1xuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgbWFwIH0gPSBtYXRlcmlhbDtcblxuICAgICAgICB0aGlzLnJlbW92ZUhvdmVyRWxlbWVudCgpO1xuXG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgbWF0ZXJpYWwubWFwID0gbnVsbDsgfVxuICAgICAgICBpZiAoIGdlb21ldHJ5ICkgeyBnZW9tZXRyeS5kaXNwb3NlKCk7IHRoaXMuZ2VvbWV0cnkgPSBudWxsOyB9XG4gICAgICAgIGlmICggbWF0ZXJpYWwgKSB7IG1hdGVyaWFsLmRpc3Bvc2UoKTsgdGhpcy5tYXRlcmlhbCA9IG51bGw7IH1cblxuICAgIH1cblxuXG5cbn07XG5cbmV4cG9ydCB7IEluZm9zcG90IH07IiwiaW1wb3J0IHsgQ09OVFJPTFMsIE1PREVTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBXaWRnZXQgZm9yIGNvbnRyb2xzXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIEEgZG9tRWxlbWVudCB3aGVyZSBkZWZhdWx0IGNvbnRyb2wgd2lkZ2V0IHdpbGwgYmUgYXR0YWNoZWQgdG9cbiAqL1xuY2xhc3MgV2lkZ2V0IGV4dGVuZHMgVEhSRUUuRXZlbnREaXNwYXRjaGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCBjb250YWluZXIgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICggIWNvbnRhaW5lciApIHtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnUEFOT0xFTlMuV2lkZ2V0OiBObyBjb250YWluZXIgc3BlY2lmaWVkJyApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTiAgPSAnYWxsIDAuMjdzIGVhc2UnO1xuICAgICAgICB0aGlzLlRPVUNIX0VOQUJMRUQgPSAhISgoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCk7XG4gICAgICAgIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgICB0aGlzLmJhckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICB0aGlzLm1haW5NZW51ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmFjdGl2ZU1haW5JdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWJNZW51ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29udHJvbCBiYXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkQ29udHJvbEJhciAoKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5jb250YWluZXIgKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dpZGdldCBjb250YWluZXIgbm90IHNldCcgKTsgXG4gICAgICAgICAgICByZXR1cm47IFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgYmFyLCBzdHlsZVRyYW5zbGF0ZSwgc3R5bGVPcGFjaXR5LCBncmFkaWVudFN0eWxlO1xuXG4gICAgICAgIGdyYWRpZW50U3R5bGUgPSAnbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDApKSc7XG5cbiAgICAgICAgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gJzQ0cHgnO1xuICAgICAgICBiYXIuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBiYXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYmFyLnN0eWxlLm1zVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJztcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLXdlYmtpdC0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW1vei0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW8tJyArIGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1tcy0nICsgZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xuICAgICAgICBiYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgYmFyLmlzSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGJhci50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYXIuaXNIaWRkZW4gPSAhYmFyLmlzSGlkZGVuO1xuICAgICAgICAgICAgc3R5bGVUcmFuc2xhdGUgPSBiYXIuaXNIaWRkZW4gPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICAgICAgc3R5bGVPcGFjaXR5ID0gYmFyLmlzSGlkZGVuID8gMCA6IDE7XG4gICAgICAgICAgICBiYXIuc3R5bGUudHJhbnNmb3JtID0gYmFyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGJhci5zdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlVHJhbnNsYXRlO1xuICAgICAgICAgICAgYmFyLnN0eWxlLm9wYWNpdHkgPSBzdHlsZU9wYWNpdHk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTWVudVxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuY3JlYXRlRGVmYXVsdE1lbnUoKTtcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IHRoaXMuY3JlYXRlTWFpbk1lbnUoIG1lbnUgKTtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKCB0aGlzLm1haW5NZW51ICk7XG5cbiAgICAgICAgLy8gTWFza1xuICAgICAgICB2YXIgbWFzayA9IHRoaXMuY3JlYXRlTWFzaygpO1xuICAgICAgICB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggbWFzayApO1xuXG4gICAgICAgIC8vIERpc3Bvc2VcbiAgICAgICAgYmFyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLnNldHRpbmdFbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS5zZXR0aW5nRWxlbWVudCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBzY29wZS52aWRlb0VsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLnZpZGVvRWxlbWVudCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpZGVvRWxlbWVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgc2NvcGUudmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGJhciApO1xuXG4gICAgICAgIC8vIE1hc2sgZXZlbnRzXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHNjb3BlLm1hc2suaGlkZSgpO1xuICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIH0sIGZhbHNlICk7XG5cbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY29udHJvbC1iYXItdG9nZ2xlJywgYmFyLnRvZ2dsZSApO1xuXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IGJhcjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBkZWZhdWx0IG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlRGVmYXVsdE1lbnUgKCkge1xuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMsIGhhbmRsZXI7XG5cbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uICggbWV0aG9kLCBkYXRhICkge1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyBcblxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsIFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIFxuXG4gICAgICAgICAgICAgICAgfSApOyBcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb250cm9sJywgXG4gICAgICAgICAgICAgICAgc3ViTWVudTogWyBcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLlRPVUNIX0VOQUJMRUQgPyAnVG91Y2gnIDogJ01vdXNlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLk9SQklUIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2Vuc29yJywgXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OICkgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01vZGUnLCBcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdOb3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2Rpc2FibGVFZmZlY3QnIClcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhcmRib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlRWZmZWN0JywgTU9ERVMuQ0FSREJPQVJEIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RlcmVvc2NvcGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5TVEVSRU8gKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYnV0dG9ucyBvbiB0b3Agb2YgY29udHJvbCBiYXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBjb250cm9sIGJ1dHRvbiBuYW1lIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkQ29udHJvbEJ1dHRvbiAoIG5hbWUgKSB7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAgICAgc3dpdGNoKCBuYW1lICkge1xuXG4gICAgICAgIGNhc2UgJ2Z1bGxzY3JlZW4nOlxuXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVGdWxsc2NyZWVuQnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLmZ1bGxzY3JlZW5FbGVtZW50ID0gZWxlbWVudDsgXG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NldHRpbmcnOlxuXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVTZXR0aW5nQnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdFbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndmlkZW8nOlxuXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2woKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICFlbGVtZW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudC5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1vZGFsIG1hc2tcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlTWFzayAoKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgZWxlbWVudC5zaG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudC5oaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBTZXR0aW5nIGJ1dHRvbiB0byB0b2dnbGUgbWVudVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVTZXR0aW5nQnV0dG9uICgpIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUudG9nZ2xlKCk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5hY3RpdmF0ZWQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuU2V0dGluZyArICdcIiknLFxuICAgICAgICAgICAgICAgIHdlYmtpdFRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpdGVtLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUzZCgwLDAsMSw5MGRlZyknO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2NvcGUubWFzay5zaG93KCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDAsMCwwLDApJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZS5tYXNrLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5tYWluTWVudSAmJiBzY29wZS5tYWluTWVudS52aXNpYmxlICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUuaGlkZSgpO1xuICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuYWN0aXZlU3ViTWVudSAmJiBzY29wZS5hY3RpdmVTdWJNZW51LnZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51LmhpZGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm1haW5NZW51ICYmIHNjb3BlLm1haW5NZW51Ll93aWR0aCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LmNoYW5nZVNpemUoIHNjb3BlLm1haW5NZW51Ll93aWR0aCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LnVuc2xpZGVBbGwoKTtcblxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRnVsbHNjcmVlbiBidXR0b25cbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIGZ1bGxzY3JlZW5cbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGNyZWF0ZUZ1bGxzY3JlZW5CdXR0b24gKCkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW0sIGlzRnVsbHNjcmVlbiA9IGZhbHNlLCB0YXBTa2lwcGVkID0gdHJ1ZSwgc3R5bGVzaGVldElkO1xuXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzO1xuXG4gICAgICAgIHN0eWxlc2hlZXRJZCA9ICdwYW5vbGVucy1zdHlsZS1hZGRvbic7XG5cbiAgICAgICAgLy8gRG9uJ3QgY3JlYXRlIGJ1dHRvbiBpZiBubyBzdXBwb3J0XG4gICAgICAgIGlmICggIWRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkICAgICAgICYmIFxuICAgICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCAmJlxuICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZCAgICAmJlxuICAgICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbmFibGVkICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB0YXBTa2lwcGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICggIWlzRnVsbHNjcmVlbiApIHtcblxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApIHsgY29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4gKSB7IGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCApOyB9XG5cbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICggaXNGdWxsc2NyZWVuICkgXG4gICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcbiAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UgKCkge1xuXG4gICAgICAgICAgICBpZiAoIHRhcFNraXBwZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSAhaXNGdWxsc2NyZWVuOyBcblxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcbiAgICAgICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcbiAgICAgICAgICAgICAgICAgICAgOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdvbldpbmRvd1Jlc2l6ZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvbldpbmRvd1Jlc2l6ZScgfSApO1xuXG4gICAgICAgICAgICB0YXBTa2lwcGVkID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW96ZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ01TRnVsbHNjcmVlbkNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKScgXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBBZGQgZnVsbHNjcmVlbiBzdGx5ZSBpZiBub3QgZXhpc3RzXG4gICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHN0eWxlc2hlZXRJZCApICkge1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3R5bGUnICk7XG4gICAgICAgICAgICBzaGVldC5pZCA9IHN0eWxlc2hlZXRJZDtcbiAgICAgICAgICAgIHNoZWV0LmlubmVySFRNTCA9ICc6LXdlYmtpdC1mdWxsLXNjcmVlbiB7IHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IGhlaWdodDogMTAwJSAhaW1wb3J0YW50IH0nO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggc2hlZXQgKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gY29udHJvbCBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBjb250cm9sXG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9Db250cm9sICgpIHtcblxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaXRlbS5zaG93ID0gZnVuY3Rpb24gKCkgeyBcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmhpZGUgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi51cGRhdGUoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sQnV0dG9uKCk7XG4gICAgICAgIGl0ZW0uc2Vla0JhciA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sU2Vla2JhcigpO1xuICBcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xuXG4gICAgICAgIGl0ZW0uZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaXRlbS5yZW1vdmVDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLnNlZWtCYXIgKTtcblxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGl0ZW0uc2Vla0Jhci5kaXNwb3NlKCk7XG4gICAgICAgICAgICBpdGVtLnNlZWtCYXIgPSBudWxsO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1zaG93JywgaXRlbS5zaG93ICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLWNvbnRyb2wtaGlkZScsIGl0ZW0uaGlkZSApO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIGNvbnRyb2wgYnV0dG9uXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gY29udHJvbFxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xCdXR0b24gKCkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3RvZ2dsZVZpZGVvUGxheScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd0b2dnbGVWaWRlb1BsYXknLCBkYXRhOiAhdGhpcy5wYXVzZWQgfSApO1xuXG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcblxuICAgICAgICAgICAgaXRlbS51cGRhdGUoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgRGF0YUltYWdlLlZpZGVvUGxheSArICdcIiknXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpdGVtLnBhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgaXRlbS51cGRhdGUgPSBmdW5jdGlvbiAoIHBhdXNlZCApIHtcblxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBwYXVzZWQgIT09IHVuZGVmaW5lZCA/IHBhdXNlZCA6IHRoaXMucGF1c2VkO1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgKCB0aGlzLnBhdXNlZCBcbiAgICAgICAgICAgICAgICA/IERhdGFJbWFnZS5WaWRlb1BsYXkgXG4gICAgICAgICAgICAgICAgOiBEYXRhSW1hZ2UuVmlkZW9QYXVzZSApICsgJ1wiKSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBzZWVrYmFyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gc2Vla2JhclxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xTZWVrYmFyICgpIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtLCBwcm9ncmVzc0VsZW1lbnQsIHByb2dyZXNzRWxlbWVudENvbnRyb2wsXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2UsIG1vdXNlWCwgcGVyY2VudGFnZU5vdywgcGVyY2VudGFnZU5leHQ7XG5cbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUud2lkdGggPSAnMTRweCc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuaGVpZ2h0ID0gJzE0cHgnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoN3B4LCAtNXB4KSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZGQnO1xuXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Nb3VzZURvd24sICB7IHBhc3NpdmU6IHRydWUgfSApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIFxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBtb3VzZVggPSBldmVudC5jbGllbnRYIHx8ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCApO1xuXG4gICAgICAgICAgICBwZXJjZW50YWdlTm93ID0gcGFyc2VJbnQoIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCApIC8gMTAwO1xuXG4gICAgICAgICAgICBhZGRDb250cm9sTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblZpZGVvQ29udHJvbERyYWcgKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYoIGlzRHJhZ2dpbmcgKXtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYIHx8ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCApO1xuICAgICAgXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSAoIGNsaWVudFggLSBtb3VzZVggKSAvIGl0ZW0uY2xpZW50V2lkdGg7XG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9IHBlcmNlbnRhZ2VOb3cgKyBwZXJjZW50YWdlTmV4dDtcblxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gcGVyY2VudGFnZU5leHQgPiAxID8gMSA6ICggKCBwZXJjZW50YWdlTmV4dCA8IDAgKSA/IDAgOiBwZXJjZW50YWdlTmV4dCApO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyAoIHBlcmNlbnRhZ2VOZXh0ICk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnc2V0VmlkZW9DdXJyZW50VGltZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRWaWRlb0N1cnJlbnRUaW1lJywgZGF0YTogcGVyY2VudGFnZU5leHQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sU3RvcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICByZW1vdmVDb250cm9sTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbnRyb2xMaXN0ZW5lcnMgKCkge1xuXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVDb250cm9sTGlzdGVuZXJzICgpIHtcblxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQgPT09IHByb2dyZXNzRWxlbWVudENvbnRyb2wgKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwIClcbiAgICAgICAgICAgICAgICA/ICggZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCApIC8gdGhpcy5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgIDogZXZlbnQub2Zmc2V0WCAvIHRoaXMuY2xpZW50V2lkdGg7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3NldFZpZGVvQ3VycmVudFRpbWUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0VmlkZW9DdXJyZW50VGltZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKCBldmVudC5vZmZzZXRYIC8gdGhpcy5jbGllbnRXaWR0aCApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gb25EaXNwb3NlICgpIHtcblxuICAgICAgICAgICAgcmVtb3ZlQ29udHJvbExpc3RlbmVycygpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudENvbnRyb2wgKTtcblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7XG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNHB4JyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE4OCwxODgsMTg4LDAuOCknXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcCxcbiAgICAgICAgICAgIG9uRGlzcG9zZTogb25EaXNwb3NlXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudCApO1xuXG4gICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiggcGVyY2VudGFnZSApIHtcblxuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gcGVyY2VudGFnZSAqIDEwMCArICclJztcblxuICAgICAgICB9O1x0XHRcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby11cGRhdGUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBcblxuICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyggZXZlbnQucGVyY2VudGFnZSApOyBcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaXRlbS5wcm9ncmVzc0VsZW1lbnQgPSBwcm9ncmVzc0VsZW1lbnQ7XG4gICAgICAgIGl0ZW0ucHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IHByb2dyZXNzRWxlbWVudENvbnRyb2w7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZSAtIFRpdGxlIHRvIGRpc3BsYXlcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQW4gYW5jaG9yIHRhZyBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlTWVudUl0ZW0gKCB0aXRsZSApIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7IFxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xuICAgICAgICBpdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICBpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcblxuICAgICAgICBpdGVtLnNsaWRlID0gZnVuY3Rpb24gKCByaWdodCApIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKCByaWdodCA/ICcnIDogJy0nICkgKyAnMTAwJSknO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS51bnNsaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uc2V0SWNvbiA9IGZ1bmN0aW9uICggdXJsICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuaWNvbiApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB1cmwgKyAnKSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2VsZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hZGRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoIG5hbWUgKSB7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJzMwMCc7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uVGl0bGUoIG5hbWUgKTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIHNlbGVjdGlvbiApO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZEljb24gPSBmdW5jdGlvbiAoIHVybCA9IERhdGFJbWFnZS5DaGV2cm9uUmlnaHQsIGxlZnQgPSBmYWxzZSwgZmxpcCA9IGZhbHNlICkge1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mbG9hdCA9IGxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxN3B4JztcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzE3cHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVsgJ21hcmdpbicgKyAoIGxlZnQgPyAnUmlnaHQnIDogJ0xlZnQnICkgXSA9ICcxMnB4JztcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXG4gICAgICAgICAgICBpZiAoIGZsaXAgKSB7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKDE4MGRlZyknO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnNldEljb24oIHVybCApO1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWRkU3ViTWVudSA9IGZ1bmN0aW9uICggdGl0bGUsIGl0ZW1zICkge1xuXG4gICAgICAgICAgICB0aGlzLnN1Yk1lbnUgPSBzY29wZS5jcmVhdGVTdWJNZW51KCB0aXRsZSwgaXRlbXMgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2UwZTBlMCc7XG5cbiAgICAgICAgfSwgZmFsc2UgKTtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZmFmYSc7XG5cbiAgICAgICAgfSwgZmFsc2UgKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBtZW51IGl0ZW0gaGVhZGVyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZSAtIFRpdGxlIHRvIGRpc3BsYXlcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQW4gYW5jaG9yIHRhZyBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlTWVudUl0ZW1IZWFkZXIgKCB0aXRsZSApIHtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xuXG4gICAgICAgIGhlYWRlci5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICMzMzMnO1xuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcxNXB4JztcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1haW4gbWVudVxuICAgICAqIEBwYXJhbSAge2FycmF5fSBtZW51cyAtIE1lbnUgYXJyYXkgbGlzdFxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1haW5NZW51ICggbWVudXMgKSB7XG4gIFxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XG5cbiAgICAgICAgbWVudS5fd2lkdGggPSAyMDA7XG4gICAgICAgIG1lbnUuY2hhbmdlU2l6ZSggbWVudS5fd2lkdGggKTtcblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IHNjb3BlLm1haW5NZW51LCBzdWJNZW51ID0gdGhpcy5zdWJNZW51O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk5leHRUaWNrICgpIHtcblxuICAgICAgICAgICAgICAgIG1haW5NZW51LmNoYW5nZVNpemUoIHN1Yk1lbnUuY2xpZW50V2lkdGggKTtcbiAgICAgICAgICAgICAgICBzdWJNZW51LnNob3coKTtcbiAgICAgICAgICAgICAgICBzdWJNZW51LnVuc2xpZGVBbGwoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluTWVudS5oaWRlKCk7XG4gICAgICAgICAgICBtYWluTWVudS5zbGlkZUFsbCgpO1xuICAgICAgICAgICAgbWFpbk1lbnUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCggc3ViTWVudSApO1xuXG4gICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbSA9IHRoaXM7XG4gICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51ID0gc3ViTWVudTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggb25OZXh0VGljayApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gbWVudS5hZGRJdGVtKCBtZW51c1sgaSBdLnRpdGxlICk7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZ0xlZnQgPSAnMjBweCc7XG5cbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbigpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgICAgIGlmICggbWVudXNbIGkgXS5zdWJNZW51ICYmIG1lbnVzWyBpIF0uc3ViTWVudS5sZW5ndGggPiAwICkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gbWVudXNbIGkgXS5zdWJNZW51WyAwIF0udGl0bGU7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiggdGl0bGUgKVxuICAgICAgICAgICAgICAgICAgICAuYWRkU3ViTWVudSggbWVudXNbIGkgXS50aXRsZSwgbWVudXNbIGkgXS5zdWJNZW51ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgc3ViIG1lbnVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBTdWIgbWVudSB0aXRsZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGl0ZW1zIC0gSXRlbSBhcnJheSBsaXN0XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgc3BhbiBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlU3ViTWVudSAoIHRpdGxlLCBpdGVtcyApIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51LCBzdWJNZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XG5cbiAgICAgICAgc3ViTWVudS5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICBzdWJNZW51LmFjdGl2ZUl0ZW0gPSBudWxsO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgbWVudSA9IHNjb3BlLm1haW5NZW51O1xuICAgICAgICAgICAgbWVudS5jaGFuZ2VTaXplKCBtZW51Ll93aWR0aCApO1xuICAgICAgICAgICAgbWVudS51bnNsaWRlQWxsKCk7XG4gICAgICAgICAgICBtZW51LnNob3coKTtcbiAgICAgICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcbiAgICAgICAgICAgIHN1Yk1lbnUuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMudHlwZSAhPT0gJ2hlYWRlcicgKSB7XG5cbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIHRoaXMgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggdGhpcy50ZXh0Q29udGVudCApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhhbmRsZXIgKSB7IHRoaXMuaGFuZGxlcigpOyB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgc3ViTWVudS5hZGRIZWFkZXIoIHRpdGxlICkuYWRkSWNvbiggdW5kZWZpbmVkLCB0cnVlLCB0cnVlICkuYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN1Yk1lbnUuYWRkSXRlbSggaXRlbXNbIGkgXS50aXRsZSApO1xuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAzMDA7XG4gICAgICAgICAgICBpdGVtLmhhbmRsZXIgPSBpdGVtc1sgaSBdLmhhbmRsZXI7XG4gICAgICAgICAgICBpdGVtLmFkZEljb24oICcgJywgdHJ1ZSApO1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgICAgICBpZiAoICFzdWJNZW51LmFjdGl2ZUl0ZW0gKSB7XG5cbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJNZW51LnNsaWRlQWxsKCB0cnVlICk7XG5cbiAgICAgICAgcmV0dXJuIHN1Yk1lbnU7XG4gIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBnZW5lcmFsIG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGVNZW51ICgpIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBtZW51LnN0eWxlO1xuXG4gICAgICAgIHN0eWxlLnBhZGRpbmcgPSAnNXB4IDAnO1xuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHN0eWxlLmJvdHRvbSA9ICcxMDAlJztcbiAgICAgICAgc3R5bGUucmlnaHQgPSAnMTRweCc7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmFmYWZhJztcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgICAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDEycHQgcmdiYSgwLDAsMCwwLjI1KSc7XG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xuICAgICAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBzdHlsZS53aWxsQ2hhbmdlID0gJ3dpZHRoLCBoZWlnaHQsIG9wYWNpdHknO1xuICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XG5cbiAgICAgICAgbWVudS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgbWVudS5jaGFuZ2VTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gICAgICAgICAgICBpZiAoIHdpZHRoICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGhlaWdodCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5zaG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLnZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnNsaWRlQWxsID0gZnVuY3Rpb24gKCByaWdodCApIHtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVudS5jaGlsZHJlbi5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51LmNoaWxkcmVuWyBpIF0uc2xpZGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnNsaWRlKCByaWdodCApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnVuc2xpZGVBbGwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICAgICAgICAgIGlmICggbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRIZWFkZXIgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBzY29wZS5jcmVhdGVNZW51SXRlbUhlYWRlciggdGl0bGUgKTtcbiAgICAgICAgICAgIGhlYWRlci50eXBlID0gJ2hlYWRlcic7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGhlYWRlciApO1xuXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRJdGVtID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNjb3BlLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xuICAgICAgICAgICAgaXRlbS50eXBlID0gJ2l0ZW0nO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBpdGVtICk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5zZXRBY3RpdmVJdGVtID0gZnVuY3Rpb24gKCBpdGVtICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuYWN0aXZlSXRlbSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRJY29uKCAnICcgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLnNldEljb24oIERhdGFJbWFnZS5DaGVjayApO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY3VzdG9tIGl0ZW0gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb25cbiAgICAgKi9cbiAgICBjcmVhdGVDdXN0b21JdGVtICggb3B0aW9ucyA9IHt9ICkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgY29uc3QgeyBvbkRpc3Bvc2UgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIGl0ZW0uc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xuICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gJzQ0cHgnO1xuICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2MCUnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXG4gIGl0ZW0uc3R5bGUuTW96VXNlclNlbGVjdCA9IFxuICBpdGVtLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgIGl0ZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgICAgICAgLy8gV2hpdGUgZ2xvdyBvbiBpY29uXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxuICAgIGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJ2Ryb3Atc2hhZG93KDAgMCA1cHggcmdiYSgyNTUsMjU1LDI1NSwxKSknO1xuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5maWx0ZXIgPSBcbiAgICBpdGVtLnN0eWxlLndlYmtpdEZpbHRlciA9ICcnO1xuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICAgICAgdGhpcy5tZXJnZVN0eWxlT3B0aW9ucyggaXRlbSwgb3B0aW9ucy5zdHlsZSApO1xuXG4gICAgICAgIGlmICggb3B0aW9ucy5vblRhcCApIHtcblxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9wdGlvbnMub25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9wdGlvbnMub25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgICAgIGlmICggb25EaXNwb3NlICkgeyBvcHRpb25zLm9uRGlzcG9zZSgpOyB9XG5cbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgaXRlbSBjc3Mgc3R5bGVcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlIG1lcmdlZCB3aXRoIHN0eWxlXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIHN0eWxlIG9wdGlvbnNcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIHNhbWUgZWxlbWVudCB3aXRoIG1lcmdlZCBzdHlsZXNcbiAgICAgKi9cbiAgICBtZXJnZVN0eWxlT3B0aW9ucyAoIGVsZW1lbnQsIG9wdGlvbnMgPSB7fSApIHtcblxuICAgICAgICBmb3IgKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9ucyApe1xuXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoIHByb3BlcnR5ICkgKSB7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlWyBwcm9wZXJ0eSBdID0gb3B0aW9uc1sgcHJvcGVydHkgXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2Ugd2lkZ2V0cyBieSBkZXRhY2hpbmcgZG9tIGVsZW1lbnRzIGZyb20gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UgKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5iYXJFbGVtZW50ICkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuYmFyRWxlbWVudCApO1xuICAgICAgICAgICAgdGhpcy5iYXJFbGVtZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFdpZGdldCB9OyIsImltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjIEJhc2UgUGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtUSFJFRS5HZW9tZXRyeX0gZ2VvbWV0cnkgLSBUaGUgZ2VvbWV0cnkgZm9yIHRoaXMgcGFub3JhbWFcbiAqIEBwYXJhbSB7VEhSRUUuTWF0ZXJpYWx9IG1hdGVyaWFsIC0gVGhlIG1hdGVyaWFsIGZvciB0aGlzIHBhbm9yYW1hXG4gKi9cbmNsYXNzIFBhbm9yYW1hIGV4dGVuZHMgVEhSRUUuTWVzaCB7XG4gICAgY29uc3RydWN0b3IoZ2VvbWV0cnksIG1hdGVyaWFsKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ3Bhbm9yYW1hJztcblxuICAgICAgICB0aGlzLkltYWdlUXVhbGl0eUxvdyA9IDE7XG4gICAgICAgIHRoaXMuSW1hZ2VRdWFsaXR5RmFpciA9IDI7XG4gICAgICAgIHRoaXMuSW1hZ2VRdWFsaXR5TWVkaXVtID0gMztcbiAgICAgICAgdGhpcy5JbWFnZVF1YWxpdHlIaWdoID0gNDtcbiAgICAgICAgdGhpcy5JbWFnZVF1YWxpdHlTdXBlckhpZ2ggPSA1O1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAxMDAwO1xuXG4gICAgICAgIHRoaXMuZGVmYXVsdEluZm9zcG90U2l6ZSA9IDM1MDtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGlua2VkU3BvdHMgPSBbXTtcblxuICAgICAgICB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VVUkwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGlua2luZ0ltYWdlU2NhbGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuQmFja1NpZGU7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgdGhpcy5zY2FsZS54ICo9IC0xO1xuICAgICAgICB0aGlzLnJlbmRlck9yZGVyID0gLTE7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKHRoaXMpLnRvKHt9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5mYWRlSW4uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncGFub2xlbnMtY29udGFpbmVyJywgdGhpcy5zZXRDb250YWluZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5zZXR1cFRyYW5zaXRpb25zKCk7XG4gICAgfVxuXG4gICAgYWRkKG9iamVjdCkge1xuXG4gICAgICAgIGxldCBpbnZlcnRlZE9iamVjdDtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGFyZ3VtZW50c1tpXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgaW5mb3Nwb3RzXG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCkge1xuXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdCA9IG9iamVjdDtcblxuICAgICAgICAgICAgaWYgKG9iamVjdC5kaXNwYXRjaEV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHsgb2JqZWN0LmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyIH0pOyB9XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYW5vbGVucy1pbmZvc3BvdC1mb2N1cycsIG1ldGhvZDogZnVuY3Rpb24gKHZlY3RvciwgZHVyYXRpb24sIGVhc2luZykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEluZm9zcG90IGZvY3VzIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndHdlZW5Db250cm9sQ2VudGVyJywgZGF0YTogW3ZlY3RvciwgZHVyYXRpb24sIGVhc2luZ10gfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDb3VudGVyIHNjYWxlLnggPSAtMSBlZmZlY3RcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5zY2FsZS54ID0gLTE7XG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5zY2FsZVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LmFkZChvYmplY3QpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgaW52ZXJ0ZWRPYmplY3QpO1xuXG4gICAgfVxuXG4gICAgbG9hZCgpIHtcblxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgZXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBDbGljayBldmVudFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBJbmZvc3BvdCNkaXNtaXNzXG4gICAgICovXG4gICAgb25DbGljayhldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC5pbnRlcnNlY3RzICYmIGV2ZW50LmludGVyc2VjdHMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKG9iamVjdCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGltaXNzIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjZGlzbWlzc1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2Rpc21pc3MnIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY29udGFpbmVyIG9mIHRoaXMgcGFub3JhbWEgXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIEluZm9zcG90I3Bhbm9sZW5zLWNvbnRhaW5lclxuICAgICAqL1xuICAgIHNldENvbnRhaW5lcihkYXRhKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcblxuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEuY29udGFpbmVyKSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEluZm9zcG90ICYmIGNoaWxkLmRpc3BhdGNoRXZlbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogU2V0IGNvbnRhaW5lciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXI6IGNvbnRhaW5lciB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBsb2FkZWRcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjbG9hZFxuICAgICAqL1xuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgcGFub3JhbWEgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xvYWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdsb2FkJyB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBpbiBwcm9ncmVzc1xuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNwcm9ncmVzc1xuICAgICAqL1xuICAgIG9uUHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZGluZyBwYW5vcmFtYSBwcm9ncmVzcyBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcHJvZ3Jlc3NcbiAgICAgICAgICogQHByb3BlcnR5IHtvYmplY3R9IHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9iamVjdCBjb250YWluaW5nIGxvYWRlZCBhbmQgdG90YWwgYW1vdW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncHJvZ3Jlc3MnLCBwcm9ncmVzczogcHJvZ3Jlc3MgfSk7XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGxvYWRpbmcgaGFzIGVycm9yXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2Vycm9yXG4gICAgICovXG4gICAgb25FcnJvcigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZGluZyBwYW5vcmFtYSBlcnJvciBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZXJyb3JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlcnJvcicgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgem9vbSBsZXZlbCBiYXNlZCBvbiB3aW5kb3cgd2lkdGhcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHpvb20gbGV2ZWwgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5XG4gICAgICovXG4gICAgZ2V0Wm9vbUxldmVsKCkge1xuXG4gICAgICAgIGxldCB6b29tTGV2ZWw7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMCkge1xuXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUZhaXI7XG5cbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMjgwKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TWVkaXVtO1xuXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMjgwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE5MjApIHtcblxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlIaWdoO1xuXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiAxOTIwKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5U3VwZXJIaWdoO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TG93O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gem9vbUxldmVsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRleHR1cmUgb2YgYSBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSAtIFRleHR1cmUgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHVwZGF0ZVRleHR1cmUodGV4dHVyZSkge1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBpbmZvc3BvdHMgaW4gdGhpcyBwYW5vcmFtYVxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzVmlzaWJsZSAtIFZpc2liaWxpdHkgb2YgaW5mb3Nwb3RzXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGluIG1pbGxpc2Vjb25kcyB0byBjaGFuZ2UgdmlzaWJpbGl0eVxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcbiAgICAgKi9cbiAgICB0b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoaXNWaXNpYmxlLCBkZWxheSkge1xuXG4gICAgICAgIGRlbGF5ID0gKGRlbGF5ICE9PSB1bmRlZmluZWQpID8gZGVsYXkgOiAwO1xuXG4gICAgICAgIGNvbnN0IHZpc2libGUgPSAoaXNWaXNpYmxlICE9PSB1bmRlZmluZWQpID8gaXNWaXNpYmxlIDogKHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPyBmYWxzZSA6IHRydWUpO1xuXG4gICAgICAgIHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKG9iamVjdCkge1xuXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QpIHtcblxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnNob3coZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaGlkZShkZWxheSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID0gdmlzaWJsZTtcblxuICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGUgZXZlbnRcbiAgICAgICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbi5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb21wbGV0ZSB0b2dnbGluZyBpbmZvc3BvdCB2aXNpYmlsaXR5XG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZScsIHZpc2libGU6IHZpc2libGUgfSk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKS5kZWxheShkZWxheSkuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBpbWFnZSBvZiB0aGlzIHBhbm9yYW1hJ3MgbGlua2luZyBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAtIFVybCB0byB0aGUgaW1hZ2UgYXNzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGUgLSBTY2FsZSBmYWN0b3Igb2YgdGhlIGluZm9zcG90XG4gICAgICovXG4gICAgc2V0TGlua2luZ0ltYWdlKHVybCwgc2NhbGUpIHtcblxuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVVSTCA9IHVybDtcbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHNjYWxlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGluayBvbmUtd2F5IHBhbm9yYW1hXG4gICAgICogQHBhcmFtICB7UGFub3JhbWF9IHBhbm8gIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGxpbmtlZCB0b1xuICAgICAqIEBwYXJhbSAge1RIUkVFLlZlY3RvcjN9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIGluZm9zcG90IHdoaWNoIG5hdmlnYXRlcyB0byB0aGUgcGFub1xuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2ltYWdlU2NhbGU9MzAwXSAtIEltYWdlIHNjYWxlIG9mIGxpbmtlZCBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gW2ltYWdlU3JjPURhdGFJbWFnZS5BcnJvd10gLSBUaGUgaW1hZ2Ugc291cmNlIG9mIGxpbmtlZCBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxpbmsocGFubywgcG9zaXRpb24sIGltYWdlU2NhbGUsIGltYWdlU3JjKSB7XG5cbiAgICAgICAgbGV0IHNjYWxlLCBpbWc7XG5cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXBvc2l0aW9uKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIHNwZWNpZnkgaW5mb3Nwb3QgcG9zaXRpb24gZm9yIGxpbmtpbmcnKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmZvc3BvdCBzY2FsZVxuICAgICAgICBpZiAoaW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIHNjYWxlID0gaW1hZ2VTY2FsZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHBhbm8ubGlua2luZ0ltYWdlU2NhbGUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBzY2FsZSA9IHBhbm8ubGlua2luZ0ltYWdlU2NhbGU7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgc2NhbGUgPSAzMDA7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSW5mb3Nwb3QgaW1hZ2VcbiAgICAgICAgaWYgKGltYWdlU3JjKSB7XG5cbiAgICAgICAgICAgIGltZyA9IGltYWdlU3JjO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocGFuby5saW5raW5nSW1hZ2VVUkwpIHtcblxuICAgICAgICAgICAgaW1nID0gcGFuby5saW5raW5nSW1hZ2VVUkw7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaW1nID0gRGF0YUltYWdlLkFycm93O1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGVzIGEgbmV3IGluZm9zcG90XG4gICAgICAgIGNvbnN0IHNwb3QgPSBuZXcgSW5mb3Nwb3Qoc2NhbGUsIGltZyk7XG4gICAgICAgIHNwb3QucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgICAgIHNwb3QudG9QYW5vcmFtYSA9IHBhbm87XG4gICAgICAgIHNwb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0UGFub3JhbWEnLCBkYXRhOiBwYW5vIH0pO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5saW5rZWRTcG90cy5wdXNoKHNwb3QpO1xuXG4gICAgICAgIHRoaXMuYWRkKHNwb3QpO1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwO1xuXG4gICAgfVxuXG4gICAgc2V0dXBUcmFuc2l0aW9ucygpIHtcblxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbih0aGlzLm1hdGVyaWFsKVxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQpXG4gICAgICAgICAgICAub25TdGFydChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWF0ZXJpYWwudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBmYWRlIGluIHN0YXJ0IGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWZhZGUtc3RhcnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnZW50ZXItZmFkZS1zdGFydCcgfSk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKHRoaXMubWF0ZXJpYWwpXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFydGljLk91dClcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWF0ZXJpYWwudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZS1jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdsZWF2ZS1jb21wbGV0ZScgfSk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24gPSBuZXcgVFdFRU4uVHdlZW4odGhpcylcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0KVxuICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlbnRlci1jb21wbGV0ZScgfSk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKHRoaXMpXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFydGljLk91dCk7XG5cbiAgICB9XG4gICAgb25GYWRlQW5pbWF0aW9uVXBkYXRlKCkge1xuXG4gICAgICAgIGNvbnN0IGFscGhhID0gdGhpcy5tYXRlcmlhbC5vcGFjaXR5O1xuICAgICAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLm1hdGVyaWFsO1xuXG4gICAgICAgIGlmICh1bmlmb3JtcyAmJiB1bmlmb3Jtcy5vcGFjaXR5KSB7XG4gICAgICAgICAgICB1bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGZhZGluZyBpbiBhbmltYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXItZmFkZS1jb21wbGV0ZVxuICAgICAqL1xuICAgIGZhZGVJbihkdXJhdGlvbikge1xuXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gPj0gMCA/IGR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvblxuICAgICAgICAgICAgLnRvKHsgb3BhY2l0eTogMSB9LCBkdXJhdGlvbilcbiAgICAgICAgICAgIC5vblVwZGF0ZSh0aGlzLm9uRmFkZUFuaW1hdGlvblVwZGF0ZS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkodHJ1ZSwgZHVyYXRpb24gLyAyKTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGZhZGUgY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItZmFkZS1jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlbnRlci1mYWRlLWNvbXBsZXRlJyB9KTtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBmYWRpbmcgb3V0IGFuaW1hdGlvblxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZhZGVPdXQoZHVyYXRpb24pIHtcblxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb25cbiAgICAgICAgICAgIC50byh7IG9wYWNpdHk6IDAgfSwgZHVyYXRpb24pXG4gICAgICAgICAgICAub25VcGRhdGUodGhpcy5vbkZhZGVBbmltYXRpb25VcGRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGVudGVyaW5nIGEgcGFub3JhbWEgXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyLXN0YXJ0XG4gICAgICovXG4gICAgb25FbnRlcigpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvblxuICAgICAgICAgICAgLnRvKHt9LCBkdXJhdGlvbilcbiAgICAgICAgICAgIC5vblN0YXJ0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gc3RhcnRpbmcgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItc3RhcnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAnZW50ZXItc3RhcnQnIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlSW4oZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGV2ZW50XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdlbnRlcicgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblxuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCh7IHR5cGU6ICdwYW5vcmFtYS1lbnRlcicgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGxlYXZpbmcgYSBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNsZWF2ZVxuICAgICAqL1xuICAgIG9uTGVhdmUoKSB7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb25cbiAgICAgICAgICAgIC50byh7fSwgZHVyYXRpb24pXG4gICAgICAgICAgICAub25TdGFydChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIHN0YXJ0aW5nIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLXN0YXJ0XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2xlYXZlLXN0YXJ0JyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU91dChkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoZmFsc2UpO1xuXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgcGFub3JhbWEgZXZlbnRcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ2xlYXZlJyB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXG4gICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KHsgdHlwZTogJ3Bhbm9yYW1hLWxlYXZlJyB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG5cbiAgICAgICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2UgaGFuZGxlclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvblBhbm9yYW1hRGlzcG9zZScsIGRhdGE6IHRoaXMgfSk7XG5cbiAgICAgICAgLy8gcmVjdXJzaXZlIGRpc3Bvc2FsIG9uIDNkIG9iamVjdHNcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRGlzcG9zZShvYmplY3QpIHtcblxuICAgICAgICAgICAgY29uc3QgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSA9IG9iamVjdDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG9iamVjdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlRGlzcG9zZShvYmplY3QuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmNoaWxkcmVuW2ldKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QpIHtcblxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwb3NlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdlb21ldHJ5KSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgb2JqZWN0Lmdlb21ldHJ5ID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsKSB7IG1hdGVyaWFsLmRpc3Bvc2UoKTsgb2JqZWN0Lm1hdGVyaWFsID0gbnVsbDsgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZWN1cnNpdmVEaXNwb3NlKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUodGhpcyk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBFcXVpcmVjdGFuZ3VsYXIgYmFzZWQgaW1hZ2UgcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgdXJsIG9yIEhUTUxJbWFnZUVsZW1lbnRcbiAqL1xuY2xhc3MgSW1hZ2VQYW5vcmFtYSBleHRlbmRzIFBhbm9yYW1hIHtcbiAgICBjb25zdHJ1Y3RvciggaW1hZ2UsIF9nZW9tZXRyeSwgX21hdGVyaWFsICkge1xuICAgICAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IF9nZW9tZXRyeSB8fCBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gX21hdGVyaWFsIHx8IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICAgICAgdGhpcy5zcmMgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgbG9hZCAoIHNyYyApIHtcblxuICAgICAgICBzcmMgPSBzcmMgfHwgdGhpcy5zcmM7XG5cbiAgICAgICAgaWYgKCAhc3JjICkgeyBcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnSW1hZ2Ugc291cmNlIHVuZGVmaW5lZCcgKTtcblxuICAgICAgICAgICAgcmV0dXJuOyBcblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgVGV4dHVyZUxvYWRlci5sb2FkKCBzcmMsIHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKSwgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgdGhpcy5vbkVycm9yLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNyYyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCBuZXcgVEhSRUUuVGV4dHVyZSggc3JjICkgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW1hZ2UgaXMgbG9hZGVkXG4gICAgICogQHBhcmFtICB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSAtIFRleHR1cmUgdG8gYmUgdXBkYXRlZFxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkKCB0ZXh0dXJlICkge1xuXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSggdGV4dHVyZSApO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuYmluZCggdGhpcyApICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldFxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG5cbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbDogeyBtYXAgfSB9ID0gdGhpcztcblxuICAgICAgICAvLyBSZWxlYXNlIGNhY2hlZCBpbWFnZVxuICAgICAgICBUSFJFRS5DYWNoZS5yZW1vdmUoIHRoaXMuc3JjICk7XG5cbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IH1cblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgRW1wdHkgcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBFbXB0eVBhbm9yYW1hIGV4dGVuZHMgUGFub3JhbWEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMDAwMDAsIG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCBuZXcgRmxvYXQzMkFycmF5KCksIDEgKSApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQ3ViZW1hcC1iYXNlZCBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2FycmF5fSBpbWFnZXMgLSBBcnJheSBvZiA2IHVybHMgdG8gaW1hZ2VzLCBvbmUgZm9yIGVhY2ggc2lkZSBvZiB0aGUgQ3ViZVRleHR1cmUuIFRoZSB1cmxzIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogcG9zLXgsIG5lZy14LCBwb3MteSwgbmVnLXksIHBvcy16LCBuZWctelxuICovXG5jbGFzcyBDdWJlUGFub3JhbWEgZXh0ZW5kcyBQYW5vcmFtYSB7XG4gICAgY29uc3RydWN0b3IgKCBpbWFnZXMgPSBbXSApIHtcblxuICAgICAgICBjb25zdCBlZGdlTGVuZ3RoID0gMTAwMDA7XG4gICAgICAgIGNvbnN0IHNoYWRlciA9IE9iamVjdC5hc3NpZ24oIHt9LCBUSFJFRS5TaGFkZXJMaWJbICdjdWJlJyBdICk7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoICk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG5cbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgICAgICB1bmlmb3Jtczogc2hhZGVyLnVuaWZvcm1zLFxuICAgICAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBzdXBlcihnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgICB0aGlzLmVkZ2VMZW5ndGggPSBlZGdlTGVuZ3RoO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCA2IGltYWdlcyBhbmQgYmluZCBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZCAoKSB7XG5cbiAgICAgICAgQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggXHRcblxuICAgICAgICAgICAgdGhpcy5pbWFnZXMsIFxuXG4gICAgICAgICAgICB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICksIFxuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApIFxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gNiB0ZXh0dXJlcyBhcmUgcmVhZHlcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5DdWJlVGV4dHVyZX0gdGV4dHVyZSAtIEN1YmUgdGV4dHVyZVxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkxvYWQgKCB0ZXh0dXJlICkge1xuXHRcdFxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndEN1YmUnIF0udmFsdWUgPSB0ZXh0dXJlO1xuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlICgpIHtcdFxuXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudEN1YmU7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaCggKCBpbWFnZSApID0+IHsgVEhSRUUuQ2FjaGUucmVtb3ZlKCBpbWFnZSApOyB9ICk7XG5cbiAgICAgICAgaWYgKCB2YWx1ZSBpbnN0YW5jZW9mIFRIUkVFLkN1YmVUZXh0dXJlICkge1xuXG4gICAgICAgICAgICB2YWx1ZS5kaXNwb3NlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IHsgQ3ViZVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgQ3ViZVBhbm9yYW1hIH0gZnJvbSAnLi9DdWJlUGFub3JhbWEnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEJhc2ljIHBhbm9yYW1hIHdpdGggNiBwcmUtZGVmaW5lZCBncmlkIGltYWdlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJhc2ljUGFub3JhbWEgZXh0ZW5kcyBDdWJlUGFub3JhbWEge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDY7IGkrKyApIHtcbiAgICAgICAgICAgIGltYWdlcy5wdXNoKCBEYXRhSW1hZ2UuV2hpdGVUaWxlICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEJhc2ljUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVmlkZW8gUGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIEVxdWlyZWN0YW5ndWxhciB2aWRlbyB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb24gZm9yIHZpZGVvIHNldHRpbmdzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy52aWRlb0VsZW1lbnRdIC0gSFRNTDUgdmlkZW8gZWxlbWVudCBjb250YWlucyB0aGUgdmlkZW9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubG9vcD10cnVlXSAtIFNwZWNpZnkgaWYgdGhlIHZpZGVvIHNob3VsZCBsb29wIGluIHRoZSBlbmRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9dHJ1ZV0gLSBNdXRlIHRoZSB2aWRlbyBvciBub3QuIE5lZWQgdG8gYmUgdHJ1ZSBpbiBvcmRlciB0byBhdXRvcGxheSBvbiBzb21lIGJyb3dzZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXSAtIFNwZWNpZnkgaWYgdGhlIHZpZGVvIHNob3VsZCBhdXRvIHBsYXlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucGxheXNpbmxpbmU9dHJ1ZV0gLSBTcGVjaWZ5IGlmIHZpZGVvIHNob3VsZCBwbGF5IGlubGluZSBmb3IgaU9TLiBJZiB5b3Ugd2FudCBpdCB0byBhdXRvIHBsYXkgaW5saW5lLCBzZXQgYm90aCBhdXRvcGxheSBhbmQgbXV0ZWQgb3B0aW9ucyB0byB0cnVlXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIl0gLSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGZvciB0aGUgdmlkZW8sIHdoaWNoIGFsbG93cyBmb3IgY3Jvc3Mtb3JpZ2luIHZpZGVvcyBpbiBzb21lIGJyb3dzZXJzIChGaXJlZm94LCBDaHJvbWUpLiBTZXQgdG8gZWl0aGVyIFwiYW5vbnltb3VzXCIgb3IgXCJ1c2UtY3JlZGVudGlhbHNcIi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXVzPTUwMDBdIC0gVGhlIG1pbmltdW0gcmFkaXVzIGZvciB0aGlzIHBhbm9yYW1cbiAqL1xuY2xhc3MgVmlkZW9QYW5vcmFtYSBleHRlbmRzIFBhbm9yYW1hIHtcblxuICAgIGNvbnN0cnVjdG9yKCBzcmMsIG9wdGlvbnMgPSB7fSApIHtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gNTAwMDtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLnNyYyA9IHNyYztcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBtdXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlzaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XG5cbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB0aGlzLm9wdGlvbnMudmlkZW9FbGVtZW50O1xuICAgICAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdG9nZ2xlJywgdGhpcy50b2dnbGVWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcbiAgICB9XG5cblxuICAgIGlzTW9iaWxlICgpIHtcblxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkoIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSApO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHZpZGVvIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgbG9hZCAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBtdXRlZCwgbG9vcCwgYXV0b3BsYXksIHBsYXlzaW5saW5lLCBjcm9zc09yaWdpbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XG4gICAgICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBvbkxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgdmlkZW8ubG9vcCA9IGxvb3A7XG4gICAgICAgIHZpZGVvLmF1dG9wbGF5ID0gYXV0b3BsYXk7XG4gICAgICAgIHZpZGVvLnBsYXlzaW5saW5lID0gcGxheXNpbmxpbmU7XG4gICAgICAgIHZpZGVvLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIHZpZGVvLm11dGVkID0gbXV0ZWQ7XG5cbiAgICAgICAgaWYgKCBwbGF5c2lubGluZSApIHtcblxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnd2Via2l0LXBsYXlzaW5saW5lJywgJycgKTtcblxuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnN0IG9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvVGV4dHVyZSggdmlkZW8gKTtcblxuICAgICAgICAgICAgaWYgKCBhdXRvcGxheSApIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciBtb2JpbGUgc2lsZW50IGF1dG9wbGF5XG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNNb2JpbGUoKSApIHtcblxuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICYmIG11dGVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXggZm9yIHRocmVlanMgcjg5IGRlbGF5ZWQgdXBkYXRlXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgb25Mb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGxvYWRlZCApO1xuICBcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZHkgc3RhdGUgb2YgdGhlIGF1ZGlvL3ZpZGVvIGVsZW1lbnRcbiAgICAgICAgICogMCA9IEhBVkVfTk9USElORyAtIG5vIGluZm9ybWF0aW9uIHdoZXRoZXIgb3Igbm90IHRoZSBhdWRpby92aWRlbyBpcyByZWFkeVxuICAgICAgICAgKiAxID0gSEFWRV9NRVRBREFUQSAtIG1ldGFkYXRhIGZvciB0aGUgYXVkaW8vdmlkZW8gaXMgcmVhZHlcbiAgICAgICAgICogMiA9IEhBVkVfQ1VSUkVOVF9EQVRBIC0gZGF0YSBmb3IgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaXMgYXZhaWxhYmxlLCBidXQgbm90IGVub3VnaCBkYXRhIHRvIHBsYXkgbmV4dCBmcmFtZS9taWxsaXNlY29uZFxuICAgICAgICAgKiAzID0gSEFWRV9GVVRVUkVfREFUQSAtIGRhdGEgZm9yIHRoZSBjdXJyZW50IGFuZCBhdCBsZWFzdCB0aGUgbmV4dCBmcmFtZSBpcyBhdmFpbGFibGVcbiAgICAgICAgICogNCA9IEhBVkVfRU5PVUdIX0RBVEEgLSBlbm91Z2ggZGF0YSBhdmFpbGFibGUgdG8gc3RhcnQgcGxheWluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB2aWRlby5yZWFkeVN0YXRlID4gMiApIHtcblxuICAgICAgICAgICAgb25sb2FkZWRkYXRhLmNhbGwoIHRoaXMgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIHZpZGVvLnF1ZXJ5U2VsZWN0b3JBbGwoICdzb3VyY2UnICkubGVuZ3RoID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NvdXJjZScgKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3JjID0gdGhpcy5zcmM7XG4gICAgICAgICAgICAgICAgdmlkZW8uYXBwZW5kQ2hpbGQoIHNvdXJjZSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpZGVvLmxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkZWRkYXRhJywgb25sb2FkZWRkYXRhLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSB2aWRlby5kdXJhdGlvbiA+PSAwID8gdmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiA6IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uVmlkZW9VcGRhdGUnXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFRoZSBwZXJjZW50YWdlIG9mIHZpZGVvIHByb2dyZXNzLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uVmlkZW9VcGRhdGUnLCBkYXRhOiB0aGlzLnZpZGVvUHJvZ3Jlc3MgfSApO1xuXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICBcbiAgICAgICAgICAgIGlmICggIWxvb3AgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VmlkZW8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTsgXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmlkZW8gdGV4dHVyZVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyAgLSBUaGUgaHRtbDUgdmlkZW8gZWxlbWVudFxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIHNldFZpZGVvVGV4dHVyZSAoIHZpZGVvICkge1xuXG4gICAgICAgIGlmICggIXZpZGVvICkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvVGV4dHVyZSA9IG5ldyBUSFJFRS5WaWRlb1RleHR1cmUoIHZpZGVvICk7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHZpZGVvVGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXQ7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB2aWRlb1RleHR1cmUgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0XG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG5cbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB1bmRlZmluZWQ7XHRcblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdmlkZW8gaXMgcGF1c2VkXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGlzIHZpZGVvIHBhdXNlZCBvciBub3RcbiAgICAgKi9cbiAgICBpc1ZpZGVvUGF1c2VkICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQucGF1c2VkO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHZpZGVvIHRvIHBsYXkgb3IgcGF1c2VcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRvZ2dsZVZpZGVvICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggIXZpZGVvICkgeyByZXR1cm47IH1cblxuICAgICAgICB2aWRlb1sgdmlkZW8ucGF1c2VkID8gJ3BsYXknIDogJ3BhdXNlJyBdKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmlkZW8gY3VycmVudFRpbWVcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5zIHBlcmNlbnRhZ2UuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAqL1xuICAgIHNldFZpZGVvQ3VycmVudFRpbWUgKCB7IHBlcmNlbnRhZ2UgfSApIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIU51bWJlci5pc05hTiggcGVyY2VudGFnZSApICYmIHBlcmNlbnRhZ2UgIT09IDEgKSB7XG5cbiAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BsYXlcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwbGF5LWVycm9yXG4gICAgICovXG4gICAgcGxheVZpZGVvICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGxheSBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXlcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXknIH0gKTtcblxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkVycm9yID0gKCBlcnJvciApID0+IHtcblxuICAgICAgICAgICAgLy8gRXJyb3IgcGxheWluZyB2aWRlby4gUmV0cnkgbmV4dCBmcmFtZS4gUG9zc2libHkgV2FpdGluZyBmb3IgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcGxheVZpZGVvICk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUGxheSBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXktZXJyb3InLCBlcnJvciB9ICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIHZpZGVvICYmIHZpZGVvLnBhdXNlZCApIHtcblxuICAgICAgICAgICAgdmlkZW8ucGxheSgpLnRoZW4oIG9uU3VjY2VzcyApLmNhdGNoKCBvbkVycm9yICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BhdXNlXG4gICAgICovXG4gICAgcGF1c2VWaWRlbyAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvICYmICF2aWRlby5wYXVzZWQgKSB7XG5cbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXVzZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlkZW9QYW5vcmFtYSNwYXVzZVxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYXVzZScgfSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXN1bWVWaWRlb1Byb2dyZXNzICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8ucmVhZHlTdGF0ZSA+PSA0ICYmIHZpZGVvLmF1dG9wbGF5ICYmICF0aGlzLmlzTW9iaWxlKCkgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogdGhpcy52aWRlb1Byb2dyZXNzIH0gKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHZpZGVvIGF0IHN0YXRpbmcgcG9pbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0VmlkZW8gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyApIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lKCB7IHBlcmNlbnRhZ2U6IDAgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZpZGVvIGlzIG11dGVkXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGlzIHZpZGVvIG11dGVkIG9yIG5vdFxuICAgICAqL1xuICAgIGlzVmlkZW9NdXRlZCAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50Lm11dGVkO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXV0ZSB2aWRlb1xuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbXV0ZVZpZGVvICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLm11dGVkICkge1xuXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndm9sdW1lY2hhbmdlJyB9ICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbm11dGUgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVubXV0ZVZpZGVvICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgdGhpcy5pc1ZpZGVvTXV0ZWQoKSApIHtcblxuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2b2x1bWVjaGFuZ2UnIH0gKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRWaWRlb0VsZW1lbnQgKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgdmlkZW8gcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UgKCkge1xuXG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWw6IHsgbWFwIH0gfSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5wYXVzZVZpZGVvKCk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnBhdXNlVmlkZW8uYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnJlc3VtZVZpZGVvUHJvZ3Jlc3MuYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRvZ2dsZScsIHRoaXMudG9nZ2xlVmlkZW8uYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRpbWUnLCB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IH1cblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG4gICBcbn07XG5cbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfTsiLCJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuL1RleHR1cmVMb2FkZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIFN0cmVldCBWaWV3IExvYWRlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyBcbiAqL1xuZnVuY3Rpb24gR29vZ2xlU3RyZWV0dmlld0xvYWRlciAoIHBhcmFtZXRlcnMgPSB7fSApIHtcblxuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMuX3pvb20gPSBudWxsO1xuICAgIHRoaXMuX3Bhbm9JZCA9IG51bGw7XG4gICAgdGhpcy5fcGFub0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5TdHJlZXRWaWV3U2VydmljZSgpO1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgdGhpcy5fY2FudmFzID0gW107XG4gICAgdGhpcy5fY3R4ID0gW107XG4gICAgdGhpcy5fd2MgPSAwO1xuICAgIHRoaXMuX2hjID0gMDtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5jb3B5cmlnaHQgPSAnJztcbiAgICB0aGlzLm9uU2l6ZUNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vblBhbm9yYW1hTG9hZCA9IG51bGw7XG5cbiAgICB0aGlzLmxldmVsc1cgPSBbIDEsIDIsIDQsIDcsIDEzLCAyNiBdO1xuICAgIHRoaXMubGV2ZWxzSCA9IFsgMSwgMSwgMiwgNCwgNywgMTMgXTtcblxuICAgIHRoaXMud2lkdGhzID0gWyA0MTYsIDgzMiwgMTY2NCwgMzMyOCwgNjY1NiwgMTMzMTIgXTtcbiAgICB0aGlzLmhlaWdodHMgPSBbIDQxNiwgNDE2LCA4MzIsIDE2NjQsIDMzMjgsIDY2NTYgXTtcblxuICAgIHRoaXMubWF4VyA9IDY2NTY7XG4gICAgdGhpcy5tYXhIID0gNjY1NjtcblxuICAgIGxldCBnbDtcblxuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblxuICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJyApO1xuXG4gICAgICAgIGlmKCAhZ2wgKSB7XG5cbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoICd3ZWJnbCcgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2F0Y2ggKCBlcnJvciApIHtcblxuICAgIH1cblxuICAgIHRoaXMubWF4VyA9IE1hdGgubWF4KCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9URVhUVVJFX1NJWkUgKSwgdGhpcy5tYXhXICk7XG4gICAgdGhpcy5tYXhIID0gTWF0aC5tYXgoIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApLCB0aGlzLm1heEggKTtcblxufVxuXG5PYmplY3QuYXNzaWduKCBHb29nbGVTdHJlZXR2aWV3TG9hZGVyLnByb3RvdHlwZSwge1xuXG4gICAgY29uc3RydWN0b3I6IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJvZ3Jlc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbG9hZGVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbCBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFByb2dyZXNzOiBmdW5jdGlvbiAoIGxvYWRlZCwgdG90YWwgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9uUHJvZ3Jlc3MgKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcyggeyBsb2FkZWQ6IGxvYWRlZCwgdG90YWw6IHRvdGFsIH0gKTtcblxuICAgICAgICB9XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkYXB0IHRleHR1cmUgdG8gem9vbVxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRhcHRUZXh0dXJlVG9ab29tOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdyA9IHRoaXMud2lkdGhzIFsgdGhpcy5fem9vbSBdO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5oZWlnaHRzWyB0aGlzLl96b29tIF07XG5cbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcblxuICAgICAgICB0aGlzLl93YyA9IE1hdGguY2VpbCggdyAvIG1heFcgKTtcbiAgICAgICAgdGhpcy5faGMgPSBNYXRoLmNlaWwoIGggLyBtYXhIICk7XG5cbiAgICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCB0aGlzLl9oYzsgeSsrICkge1xuICAgICAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB0aGlzLl93YzsgeCsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgICAgICAgICAgIGlmKCB4IDwgKCB0aGlzLl93YyAtIDEgKSApIGMud2lkdGggPSBtYXhXOyBlbHNlIGMud2lkdGggPSB3IC0gKCBtYXhXICogeCApO1xuICAgICAgICAgICAgICAgIGlmKCB5IDwgKCB0aGlzLl9oYyAtIDEgKSApIGMuaGVpZ2h0ID0gbWF4SDsgZWxzZSBjLmhlaWdodCA9IGggLSAoIG1heEggKiB5ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLnB1c2goIGMgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHgucHVzaCggYy5nZXRDb250ZXh0KCAnMmQnICkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2UgZnJvbSB0aWxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHsqfSB0ZXh0dXJlIFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29tcG9zZUZyb21UaWxlOiBmdW5jdGlvbiAoIHgsIHksIHRleHR1cmUgKSB7XG5cbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcblxuICAgICAgICB4ICo9IDUxMjtcbiAgICAgICAgeSAqPSA1MTI7XG5cbiAgICAgICAgY29uc3QgcHggPSBNYXRoLmZsb29yKCB4IC8gbWF4VyApO1xuICAgICAgICBjb25zdCBweSA9IE1hdGguZmxvb3IoIHkgLyBtYXhIICk7XG5cbiAgICAgICAgeCAtPSBweCAqIG1heFc7XG4gICAgICAgIHkgLT0gcHkgKiBtYXhIO1xuXG4gICAgICAgIHRoaXMuX2N0eFsgcHkgKiB0aGlzLl93YyArIHB4IF0uZHJhd0ltYWdlKCB0ZXh0dXJlLCAwLCAwLCB0ZXh0dXJlLndpZHRoLCB0ZXh0dXJlLmhlaWdodCwgeCwgeSwgNTEyLCA1MTIgKTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzKCk7XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByb2dyZXNzXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcm9ncmVzczogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5fY291bnQrKztcblx0XHRcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyggdGhpcy5fY291bnQsIHRoaXMuX3RvdGFsICk7XG5cdFx0XG4gICAgICAgIGlmICggdGhpcy5fY291bnQgPT09IHRoaXMuX3RvdGFsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5fY2FudmFzO1xuICAgICAgICAgICAgdGhpcy5wYW5vSWQgPSB0aGlzLl9wYW5vSWQ7XG4gICAgICAgICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub25QYW5vcmFtYUxvYWQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFub3JhbWFMb2FkKCB0aGlzLl9jYW52YXNbIDAgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb21wb3NlUGFub3JhbWE6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKCAwLCAxICk7XG5cdFx0XG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLmxldmVsc1dbIHRoaXMuX3pvb20gXTtcbiAgICAgICAgY29uc3QgaCA9IHRoaXMubGV2ZWxzSFsgdGhpcy5fem9vbSBdO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX3RvdGFsID0gdyAqIGg7XG5cbiAgICAgICAgY29uc3QgeyB1c2VXZWJHTCB9ID0gdGhpcy5fcGFyYW1ldGVycztcblxuICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IGg7IHkrKyApIHtcbiAgICAgICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgdzsgeCsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2dlbzAuZ2dwaHQuY29tL2Niaz9jYl9jbGllbnQ9bWFwc19zdi50YWN0aWxlJmF1dGh1c2VyPTAmaGw9ZW4mb3V0cHV0PXRpbGUmem9vbT0nICsgdGhpcy5fem9vbSArICcmeD0nICsgeCArICcmeT0nICsgeSArICcmcGFub2lkPScgKyB0aGlzLl9wYW5vSWQgKyAnJm5idCZmb3Zlcj0yJztcbiAgICAgICAgICAgICAgICAoIGZ1bmN0aW9uKCB4LCB5ICkgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVzZVdlYkdMICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IFRleHR1cmVMb2FkZXIubG9hZCggdXJsLCBudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGV4dHVyZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGhpcyApO1x0XHRcdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSApKCB4LCB5ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vaWQgXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHBhbm9pZCApIHtcblxuICAgICAgICB0aGlzLmxvYWRQYW5vKCBwYW5vaWQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHBhbm9yYW1hXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkUGFubzogZnVuY3Rpb24oIGlkICkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wYW5vQ2xpZW50LmdldFBhbm9yYW1hQnlJZCggaWQsIGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHNlbGYuY29weXJpZ2h0ID0gcmVzdWx0LmNvcHlyaWdodDtcbiAgICAgICAgICAgICAgICBzZWxmLl9wYW5vSWQgPSByZXN1bHQubG9jYXRpb24ucGFubztcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VQYW5vcmFtYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHpvb20gbGV2ZWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geiBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFpvb206IGZ1bmN0aW9uKCB6ICkge1xuXG4gICAgICAgIHRoaXMuX3pvb20gPSB6O1xuICAgICAgICB0aGlzLmFkYXB0VGV4dHVyZVRvWm9vbSgpO1xuICAgIH1cblx0XG59ICk7XG5cbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9JbWFnZVBhbm9yYW1hJztcbmltcG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL0dvb2dsZVN0cmVldHZpZXdMb2FkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIHN0cmVldHZpZXcgcGFub3JhbWFcbiAqIEBkZXNjcmlwdGlvbiBbSG93IHRvIGdldCBQYW5vcmFtYSBJRF17QGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTkxNjE0OS9nb29nbGUtbWFwcy1zdHJlZXR2aWV3LWhvdy10by1nZXQtcGFub3JhbWEtaWR9XG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vSWQgLSBQYW5vcmFtYSBpZCBmcm9tIEdvb2dsZSBTdHJlZXR2aWV3IFxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlLZXldIC0gR29vZ2xlIFN0cmVldCBWaWV3IEFQSSBLZXlcbiAqL1xuY2xhc3MgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIGV4dGVuZHMgSW1hZ2VQYW5vcmFtYSB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHBhbm9JZCwgYXBpS2V5ICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhbm9JZCA9IHBhbm9JZDtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgXG4gICAgICAgIHRoaXMuc2V0dXBHb29nbGVNYXBBUEkoIGFwaUtleSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgR29vZ2xlIFN0cmVldCBWaWV3IGJ5IHBhbm9yYW1hIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhbm9JZCAtIEdvZ29nbGUgU3RyZWV0IFZpZXcgcGFub3JhbWEgaWRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZCAoIHBhbm9JZCApIHtcblxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSB0cnVlO1xuICBcbiAgICAgICAgcGFub0lkID0gKCBwYW5vSWQgfHwgdGhpcy5wYW5vSWQgKSB8fCB7fTtcbiAgXG4gICAgICAgIGlmICggcGFub0lkICYmIHRoaXMuZ3N2TG9hZGVyICkge1xuICBcbiAgICAgICAgICAgIHRoaXMubG9hZEdTVkxvYWRlciggcGFub0lkICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0dXAgR29vZ2xlIE1hcCBBUElcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGFwaUtleVxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXR1cEdvb2dsZU1hcEFQSSAoIGFwaUtleSApIHtcbiAgXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyc7XG4gICAgICAgIHNjcmlwdC5zcmMgKz0gYXBpS2V5ID8gJ2tleT0nICsgYXBpS2V5IDogJyc7XG4gICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB0aGlzLnNldEdTVkxvYWRlci5iaW5kKCB0aGlzICk7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSB0aGlzLnNldEdTVkxvYWRlci5iaW5kKCB0aGlzICk7XG4gIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaGVhZCcgKS5hcHBlbmRDaGlsZCggc2NyaXB0ICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0IEdTViBMb2FkZXJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0R1NWTG9hZGVyICgpIHtcbiAgXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyID0gbmV3IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIoKTtcbiAgXG4gICAgICAgIGlmICggdGhpcy5sb2FkUmVxdWVzdGVkICkge1xuICBcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBHU1YgTG9hZGVyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dvb2dsZVN0cmVldHZpZXdMb2FkZXJ9IEdTViBMb2FkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXRHU1ZMb2FkZXIgKCkge1xuICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3N2TG9hZGVyO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIExvYWQgR1NWIExvYWRlclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcGFub0lkIC0gR29nb2dsZSBTdHJlZXQgVmlldyBwYW5vcmFtYSBpZFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkR1NWTG9hZGVyICggcGFub0lkICkge1xuICBcbiAgICAgICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gZmFsc2U7XG4gIFxuICAgICAgICB0aGlzLmdzdkxvYWRlci5vblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKTtcbiAgXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLm9uUGFub3JhbWFMb2FkID0gdGhpcy5vbkxvYWQuYmluZCggdGhpcyApO1xuICBcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIuc2V0Wm9vbSggdGhpcy5nZXRab29tTGV2ZWwoKSApO1xuICBcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIubG9hZCggcGFub0lkICk7XG4gIFxuICAgICAgICB0aGlzLmdzdkxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGxvYWRlZFxuICAgICAqIEBwYXJhbSAge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBDYW52YXMgd2hlcmUgdGhlIHRpbGVzIGhhdmUgYmVlbiBkcmF3blxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkxvYWQgKCBjYW52YXMgKSB7XG4gIFxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgbmV3IFRIUkVFLlRleHR1cmUoIGNhbnZhcyApICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogUmVzZXRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICBcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XG4gIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH07IiwiLyoqXG4gKiBTdGVyZW9ncmFwaGljIHByb2plY3Rpb24gc2hhZGVyXG4gKiBiYXNlZCBvbiBodHRwOi8vbm90bGlvbi5naXRodWIuaW8vc3RyZWV0dmlldy1zdGVyZW9ncmFwaGljXG4gKiBAYXV0aG9yIHBjaGVuNjZcbiAqL1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFN0ZXJlb2dyYWhwaWMgU2hhZGVyXG4gKiBAbW9kdWxlIFN0ZXJlb2dyYXBoaWNTaGFkZXJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmlmb3Jtc1xuICogQHByb3BlcnR5IHtUSFJFRS5UZXh0dXJlfSB1bmlmb3Jtcy50RGlmZnVzZSBkaWZmdXNlIG1hcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLnJlc29sdXRpb24gaW1hZ2UgcmVzb2x1dGlvblxuICogQHByb3BlcnR5IHtUSFJFRS5NYXRyaXg0fSB1bmlmb3Jtcy50cmFuc2Zvcm0gdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMuem9vbSBpbWFnZSB6b29tIGZhY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLm9wYWNpdHkgaW1hZ2Ugb3BhY2l0eVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnRleFNoYWRlciB2ZXJ0ZXggc2hhZGVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJhZ21lbnRTaGFkZXIgZnJhZ21lbnQgc2hhZGVyXG4gKi9cbmNvbnN0IFN0ZXJlb2dyYXBoaWNTaGFkZXIgPSB7XG5cbiAgICB1bmlmb3Jtczoge1xuXG4gICAgICAgICd0RGlmZnVzZSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlKCkgfSxcbiAgICAgICAgJ3Jlc29sdXRpb24nOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgJ3RyYW5zZm9ybSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXg0KCkgfSxcbiAgICAgICAgJ3pvb20nOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgJ29wYWNpdHknOiB7IHZhbHVlOiAxLjAgfVxuXG4gICAgfSxcblxuICAgIHZlcnRleFNoYWRlcjogW1xuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXG5cbiAgICAgICAgJ3ZvaWQgbWFpbigpIHsnLFxuXG4gICAgICAgICd2VXYgPSB1djsnLFxuICAgICAgICAnZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7JyxcblxuICAgICAgICAnfScgXG5cbiAgICBdLmpvaW4oICdcXG4nICksXG5cbiAgICBmcmFnbWVudFNoYWRlcjogW1xuXG4gICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTsnLFxuICAgICAgICAndW5pZm9ybSBmbG9hdCByZXNvbHV0aW9uOycsXG4gICAgICAgICd1bmlmb3JtIG1hdDQgdHJhbnNmb3JtOycsXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHpvb207JyxcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgb3BhY2l0eTsnLFxuXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXG5cbiAgICAgICAgJ2NvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTM7JyxcblxuICAgICAgICAndm9pZCBtYWluKCl7JyxcblxuICAgICAgICAndmVjMiBwb3NpdGlvbiA9IC0xLjAgKyAgMi4wICogdlV2OycsXG5cbiAgICAgICAgJ3Bvc2l0aW9uICo9IHZlYzIoIHpvb20gKiByZXNvbHV0aW9uLCB6b29tICogMC41ICk7JyxcblxuICAgICAgICAnZmxvYXQgeDJ5MiA9IHBvc2l0aW9uLnggKiBwb3NpdGlvbi54ICsgcG9zaXRpb24ueSAqIHBvc2l0aW9uLnk7JyxcbiAgICAgICAgJ3ZlYzMgc3BoZXJlX3BudCA9IHZlYzMoIDIuICogcG9zaXRpb24sIHgyeTIgLSAxLiApIC8gKCB4MnkyICsgMS4gKTsnLFxuXG4gICAgICAgICdzcGhlcmVfcG50ID0gdmVjMyggdHJhbnNmb3JtICogdmVjNCggc3BoZXJlX3BudCwgMS4wICkgKTsnLFxuXG4gICAgICAgICd2ZWMyIHNhbXBsZVVWID0gdmVjMignLFxuICAgICAgICAnKGF0YW4oc3BoZXJlX3BudC55LCBzcGhlcmVfcG50LngpIC8gUEkgKyAxLjApICogMC41LCcsXG4gICAgICAgICcoYXNpbihzcGhlcmVfcG50LnopIC8gUEkgKyAwLjUpJyxcbiAgICAgICAgJyk7JyxcblxuICAgICAgICAnZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgc2FtcGxlVVYgKTsnLFxuXG4gICAgICAgICdnbF9GcmFnQ29sb3IuYSAqPSBvcGFjaXR5OycsXG5cbiAgICAgICAgJ30nXG5cbiAgICBdLmpvaW4oICdcXG4nIClcblxufTtcblxuZXhwb3J0IHsgU3RlcmVvZ3JhcGhpY1NoYWRlciB9OyIsImltcG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL0ltYWdlUGFub3JhbWEnO1xuaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XG5pbXBvcnQgeyBDT05UUk9MUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIExpdHRsZSBQbGFuZXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHRcdC0gVHlwZSBvZiBsaXR0bGUgcGxhbmV0IGJhc2ljIGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXG4gKi9cbmNsYXNzIExpdHRsZVBsYW5ldCBleHRlbmRzIEltYWdlUGFub3JhbWEge1xuICAgIGNvbnN0cnVjdG9yKCB0eXBlID0gJ2ltYWdlJywgc291cmNlLCBzaXplID0gMTAwMDAsIHJhdGlvID0gMC41ICkge1xuICAgICAgICBpZiAoIHR5cGUgPT09ICdpbWFnZScgKSB7XG4gICAgICAgICAgICBzdXBlcihzb3VyY2UsIExpdHRsZVBsYW5ldC5jcmVhdGVHZW9tZXRyeSggc2l6ZSwgcmF0aW8gKSwgTGl0dGxlUGxhbmV0LmNyZWF0ZU1hdGVyaWFsKCBzaXplICkgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgICAgIHRoaXMuRVBTID0gMC4wMDAwMDE7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAgICAgdGhpcy5xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMucXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgICAgICB0aGlzLnF1YXRDdXIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICAgICAgICB0aGlzLnF1YXRTbGVycCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgdGhpcy52ZWN0b3JYID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICAgICAgdGhpcy52ZWN0b3JZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd3aW5kb3ctcmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSApO1xuICAgIH1cblxuICAgIGFkZCAoIG9iamVjdCApIHtcblxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICBcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcblxuICAgICAgICAgICAgb2JqZWN0Lm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xuICBcbiAgICAgICAgfVxuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmFkZC5jYWxsKCB0aGlzLCBvYmplY3QgKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVHZW9tZXRyeSAoIHNpemUsIHJhdGlvICkge1xuXG4gICAgICAgIHJldHVybiBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggc2l6ZSwgc2l6ZSAqIHJhdGlvICk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTWF0ZXJpYWwgKCBzaXplICkge1xuXG4gICAgICAgIGNvbnN0IHNoYWRlciA9IE9iamVjdC5hc3NpZ24oIHt9LCBTdGVyZW9ncmFwaGljU2hhZGVyICksIHVuaWZvcm1zID0gc2hhZGVyLnVuaWZvcm1zO1xuXG4gICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSBzaXplO1xuICAgICAgICB1bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMC4wO1xuXG4gICAgICAgIHJldHVybiBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblxuICAgICAgICAgICAgdW5pZm9ybXM6IHVuaWZvcm1zLFxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWVcblxuICAgICAgICB9ICk7XG5cbiAgICB9XG5cbiAgICByZWdpc3Rlck1vdXNlRXZlbnRzICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0TWVudS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG5cbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyTW91c2VFdmVudHMgKCkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0TWVudS5iaW5kKCB0aGlzICksIGZhbHNlICk7XG5cbiAgICB9XG5cbiAgICBvbk1vdXNlRG93biAoIGV2ZW50ICkge1xuXG4gICAgICAgIGNvbnN0IGlucHV0Q291bnQgPSAoIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggKSB8fCAxIDtcblxuICAgICAgICBzd2l0Y2ggKCBpbnB1dENvdW50ICkge1xuXG4gICAgICAgIGNhc2UgMTpcblxuICAgICAgICAgICAgY29uc3QgeCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCB5ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5zZXQoIHgsIHkgKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG4gICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5waW5jaERpc3RhbmNlID0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcblxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlICggZXZlbnQgKSB7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xuXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xuXG4gICAgICAgICAgICBjb25zdCBhbmdsZVggPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCB4IC0gdGhpcy51c2VyTW91c2UueCApICogMC40O1xuICAgICAgICAgICAgY29uc3QgYW5nbGVZID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggeSAtIHRoaXMudXNlck1vdXNlLnkgKSAqIDAuNDtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmRyYWdnaW5nICkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVhdEEuc2V0RnJvbUF4aXNBbmdsZSggdGhpcy52ZWN0b3JZLCBhbmdsZVggKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRCLnNldEZyb21BeGlzQW5nbGUoIHRoaXMudmVjdG9yWCwgYW5nbGVZICk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0Q3VyLm11bHRpcGx5KCB0aGlzLnF1YXRBICkubXVsdGlwbHkoIHRoaXMucXVhdEIgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5zZXQoIHgsIHkgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkWm9vbURlbHRhKCB0aGlzLnVzZXJNb3VzZS5waW5jaERpc3RhbmNlIC0gZGlzdGFuY2UgKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25Nb3VzZVVwICgpIHtcblxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBvbk1vdXNlV2hlZWwgKCBldmVudCApIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBsZXQgZGVsdGEgPSAwO1xuXG4gICAgICAgIGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcblxuICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkICkgeyAvLyBGaXJlZm94XG5cbiAgICAgICAgICAgIGRlbHRhID0gLSBldmVudC5kZXRhaWw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkWm9vbURlbHRhKCBkZWx0YSApO1xuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcblxuICAgIH1cblxuICAgIGFkZFpvb21EZWx0YSAoIGRlbHRhICkge1xuXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gdGhpcy5tYXRlcmlhbC51bmlmb3JtcztcbiAgICAgICAgY29uc3QgbG93ZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDAuMTtcbiAgICAgICAgY29uc3QgdXBwZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDEwO1xuXG4gICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgKz0gZGVsdGE7XG5cbiAgICAgICAgaWYgKCB1bmlmb3Jtcy56b29tLnZhbHVlIDw9IGxvd2VyQm91bmQgKSB7XG5cbiAgICAgICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSBsb3dlckJvdW5kO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHVuaWZvcm1zLnpvb20udmFsdWUgPj0gdXBwZXJCb3VuZCApIHtcblxuICAgICAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHVwcGVyQm91bmQ7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBkYXRlQ2FsbGJhY2sgKCkge1xuXG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMub25VcGRhdGVDYWxsYmFjay5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB0aGlzLnF1YXRTbGVycC5zbGVycCggdGhpcy5xdWF0Q3VyLCAwLjEgKTtcblxuICAgICAgICBpZiAoIHRoaXMubWF0ZXJpYWwgKSB7XG5cbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudHJhbnNmb3JtLnZhbHVlLm1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKCB0aGlzLnF1YXRTbGVycCApO1xuXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKCAhdGhpcy5kcmFnZ2luZyAmJiAxLjAgLSB0aGlzLnF1YXRTbGVycC5jbG9uZSgpLmRvdCggdGhpcy5xdWF0Q3VyICkgPCB0aGlzLkVQUyApIHtcbiAgXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuZnJhbWVJZCApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcblxuICAgICAgICB0aGlzLnF1YXRDdXIuc2V0KCAwLCAwLCAwLCAxICk7XG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNldCggMCwgMCwgMCwgMSApO1xuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcblxuICAgIH1cblxuICAgIG9uTG9hZCAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdkaXNhYmxlQ29udHJvbCcgfSApO1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XG5cbiAgICB9XG5cbiAgICBvbkxlYXZlICgpIHtcblxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdlbmFibGVDb250cm9sJywgZGF0YTogQ09OVFJPTFMuT1JCSVQgfSApO1xuXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5mcmFtZUlkICk7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25MZWF2ZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbiAgICBvbldpbmRvd1Jlc2l6ZSAoKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZSA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIG9uQ29udGV4dE1lbnUgKCkge1xuXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIGRpc3Bvc2UgKCkge1x0XG5cbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxuIFxuXG59XG5cbmV4cG9ydCB7IExpdHRsZVBsYW5ldCB9OyIsImltcG9ydCB7IExpdHRsZVBsYW5ldCB9IGZyb20gJy4vTGl0dGxlUGxhbmV0JztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEltYWdlIExpdHRsZSBQbGFuZXRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBcdFx0LSBVUkwgZm9yIHRoZSBpbWFnZSBzb3VyY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xMDAwMF0gLSBTaXplIG9mIHBsYW5lIGdlb21ldHJ5XG4gKiBAcGFyYW0ge251bWJlcn0gW3JhdGlvPTAuNV0gIC0gUmF0aW8gb2YgcGxhbmUgZ2VvbWV0cnkncyBoZWlnaHQgYWdhaW5zdCB3aWR0aFxuICovXG5jbGFzcyBJbWFnZUxpdHRsZVBsYW5ldCBleHRlbmRzIExpdHRsZVBsYW5ldCB7XG4gICAgY29uc3RydWN0b3IoIHNvdXJjZSwgc2l6ZSwgcmF0aW8gKSB7XG4gICAgICAgIHN1cGVyKHNvdXJjZSwgc2l6ZSwgcmF0aW8pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT24gbG9hZGVkIHdpdGggdGV4dHVyZVxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZVxuICAgICAqIEBtZW1iZXJPZiBJbWFnZUxpdHRsZVBsYW5ldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTG9hZCAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB0ZXh0dXJlICk7XG5cbiAgICAgICAgTGl0dGxlUGxhbmV0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgdGV4dHVyZSApO1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRleHR1cmVcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlVGV4dHVyZSAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0RGlmZnVzZScgXS52YWx1ZSA9IHRleHR1cmU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZSAoKSB7XG5cbiAgICAgICAgY29uc3QgdERpZmZ1c2UgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndERpZmZ1c2UnIF07XG5cbiAgICAgICAgaWYgKCB0RGlmZnVzZSAmJiB0RGlmZnVzZS52YWx1ZSApIHtcblxuICAgICAgICAgICAgdERpZmZ1c2UudmFsdWUuZGlzcG9zZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxufVxuXG5leHBvcnQgeyBJbWFnZUxpdHRsZVBsYW5ldCB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4uL21lZGlhL01lZGlhJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIENhbWVyYSBwYW5vcmFtYVxuICogQGRlc2NyaXB0aW9uIFNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhU3RyZWFtQ29uc3RyYWludHN8TWVkaWFTdHJlYW1Db25zdHJhaW50c30gZm9yIGNvbnN0cmFpbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gLSBjYW1lcmEgY29uc3RyYWludHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBDYW1lcmFQYW5vcmFtYSBleHRlbmRzIFBhbm9yYW1hIHtcbiAgICBjb25zdHJ1Y3RvciggY29uc3RyYWludHMgKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICBcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLm1lZGlhID0gbmV3IE1lZGlhKCBjb25zdHJhaW50cyApO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlcicsIHRoaXMuc3RhcnQuYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5zdG9wLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLm9uUGFub2xlbnNDb250YWluZXIuYmluZCggdGhpcyApICk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXNjZW5lJywgdGhpcy5vblBhbm9sZW5zU2NlbmUuYmluZCggdGhpcyApICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBjb250YWluZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblBhbm9sZW5zQ29udGFpbmVyICggeyBjb250YWluZXIgfSApIHtcbiAgICAgICAgdGhpcy5tZWRpYS5zZXRDb250YWluZXIoIGNvbnRhaW5lciApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHNjZW5lIGV2ZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uUGFub2xlbnNTY2VuZSggeyBzY2VuZSB9ICkge1xuICAgICAgICB0aGlzLm1lZGlhLnNldFNjZW5lKCBzY2VuZSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGNhbWVyYSBzdHJlYW1pbmdcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWEuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGNhbWVyYSBzdHJlYW1pbmdcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLm1lZGlhLnN0b3AoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgT3JiaXQgQ29udHJvbHNcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIE9yYml0Q29udHJvbHNcbiAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0fSBvYmplY3QgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IFxuICovXG5mdW5jdGlvbiBPcmJpdENvbnRyb2xzICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcbiAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuXG4gICAgLy8gQVBJXG5cbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgLypcbiAgICAgKiBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgY29udHJvbCBvcmJpdHMgYXJvdW5kXG4gICAgICogYW5kIHdoZXJlIGl0IHBhbnMgd2l0aCByZXNwZWN0IHRvLlxuICAgICAqL1xuICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIC8vIGNlbnRlciBpcyBvbGQsIGRlcHJlY2F0ZWQ7IHVzZSBcInRhcmdldFwiIGluc3RlYWRcbiAgICB0aGlzLmNlbnRlciA9IHRoaXMudGFyZ2V0O1xuXG4gICAgLypcbiAgICAgKiBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgKi9cbiAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgIHRoaXMuem9vbVNwZWVkID0gMS4wO1xuICAgIHRoaXMucmV2ZXJ0Wm9vbVNjcm9sbERpcmVjdGlvbiA9IGZhbHNlO1xuXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5ab29tID0gMDtcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgdGhpcy5ub1JvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMucm90YXRlU3BlZWQgPSAtMC4xNTtcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgdGhpcy5ub1BhbiA9IHRydWU7XG4gICAgdGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG4gICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cbiAgICAvKlxuICAgICAqIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAqIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuICAgICAqL1xuICAgIHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAvLyBNb21lbnR1bVxuICBcdHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yID0gMC45MDtcbiAgXHR0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciA9IC0wLjAwNTtcbiAgXHR0aGlzLm1vbWVudHVtS2V5ZG93bkZhY3RvciA9IDIwO1xuXG4gIFx0Ly8gRm92XG4gIFx0dGhpcy5taW5Gb3YgPSAzMDtcbiAgXHR0aGlzLm1heEZvdiA9IDEyMDtcblxuICAgIC8qXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cbiAgICAgKiBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG4gICAgICovXG4gICAgdGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG4gICAgdGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICB0aGlzLm5vS2V5cyA9IGZhbHNlO1xuXG4gICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xuICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cbiAgICAvLyBNb3VzZSBidXR0b25zXG4gICAgdGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuICAgIC8qXG4gICAgICogLy8vLy8vLy8vL1xuICAgICAqIGludGVybmFsc1xuICAgICAqL1xuXG4gICAgdmFyIHNjb3BlID0gdGhpcztcblxuICAgIHZhciBFUFMgPSAxMGUtODtcbiAgICB2YXIgTUVQUyA9IDEwZS01O1xuXG4gICAgdmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgdmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB2YXIgdGhldGEgPSAwO1xuICAgIHZhciBwaGkgPSAwO1xuICAgIHZhciBwaGlEZWx0YSA9IDA7XG4gICAgdmFyIHRoZXRhRGVsdGEgPSAwO1xuICAgIHZhciBzY2FsZSA9IDE7XG4gICAgdmFyIHBhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICB2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgdmFyIG1vbWVudHVtTGVmdCA9IDAsIG1vbWVudHVtVXAgPSAwO1xuICAgIHZhciBldmVudFByZXZpb3VzO1xuICAgIHZhciBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgICB2YXIga2V5VXAsIGtleUJvdHRvbSwga2V5TGVmdCwga2V5UmlnaHQ7XG5cbiAgICB2YXIgU1RBVEUgPSB7IE5PTkU6IC0xLCBST1RBVEU6IDAsIERPTExZOiAxLCBQQU46IDIsIFRPVUNIX1JPVEFURTogMywgVE9VQ0hfRE9MTFk6IDQsIFRPVUNIX1BBTjogNSB9O1xuXG4gICAgdmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgIC8vIGZvciByZXNldFxuXG4gICAgdGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcbiAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cbiAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblxuICAgIHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuICAgIHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnQoKTtcblxuICAgIC8vIGV2ZW50c1xuXG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuICAgIHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG4gICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG4gICAgdGhpcy5zZXRMYXN0UXVhdGVybmlvbiA9IGZ1bmN0aW9uICggcXVhdGVybmlvbiApIHtcbiAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSggcXVhdGVybmlvbiApO1xuICAgICAgICBzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KCBxdWF0ZXJuaW9uICk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGFzdFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGFzdFBvc2l0aW9uO1xuICAgIH07XG5cbiAgICB0aGlzLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xuXG4gICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGV0YURlbHRhIC09IGFuZ2xlO1xuXG5cbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHBoaURlbHRhIC09IGFuZ2xlO1xuXG4gICAgfTtcblxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XG4gICAgdGhpcy5wYW5MZWZ0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XG4gICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgfTtcblxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSB1cFxuICAgIHRoaXMucGFuVXAgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAvLyBnZXQgWSBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcbiAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgfTtcblxuICAgIC8qXG4gICAgICogcGFzcyBpbiB4LHkgb2YgY2hhbmdlIGRlc2lyZWQgaW4gcGl4ZWwgc3BhY2UsXG4gICAgICogcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG4gICAgICovXG4gICAgdGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuICAgICAgICAgICAgdmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG4gICAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cbiAgICAgICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuICAgICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgICAgIHNjb3BlLnBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgLy8gb3J0aG9ncmFwaGljXG4gICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCBkZWx0YVggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xuICAgICAgICAgICAgc2NvcGUucGFuVXAoIGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5tb21lbnR1bSA9IGZ1bmN0aW9uKCl7XG5cdFx0XG4gICAgICAgIGlmICggIW1vbWVudHVtT24gKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCBNYXRoLmFicyggbW9tZW50dW1MZWZ0ICkgPCBNRVBTICYmIE1hdGguYWJzKCBtb21lbnR1bVVwICkgPCBNRVBTICkgeyBcblxuICAgICAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbWVudHVtVXAgICAqPSB0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvcjtcbiAgICAgICAgbW9tZW50dW1MZWZ0ICo9IHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yO1xuXG4gICAgICAgIHRoZXRhRGVsdGEgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bUxlZnQ7XG4gICAgICAgIHBoaURlbHRhICAgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bVVwO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIGlnbm9yZVVwZGF0ZSApIHtcblxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcblxuICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cbiAgICAgICAgdGhldGEgPSBNYXRoLmF0YW4yKCBvZmZzZXQueCwgb2Zmc2V0LnogKTtcblxuICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG4gICAgICAgIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcblxuICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9tZW50dW0oKTtcblxuICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xuICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICB0aGV0YSA9IE1hdGgubWF4KCB0aGlzLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4QXppbXV0aEFuZ2xlLCB0aGV0YSApICk7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgcGhpID0gTWF0aC5tYXgoIHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4UG9sYXJBbmdsZSwgcGhpICkgKTtcblxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KCBFUFMsIE1hdGgubWluKCBNYXRoLlBJIC0gRVBTLCBwaGkgKSApO1xuXG4gICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcblxuICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heCggdGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHRoaXMubWF4RGlzdGFuY2UsIHJhZGl1cyApICk7XG5cbiAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XG5cbiAgICAgICAgb2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcbiAgICAgICAgb2Zmc2V0LnkgPSByYWRpdXMgKiBNYXRoLmNvcyggcGhpICk7XG4gICAgICAgIG9mZnNldC56ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5jb3MoIHRoZXRhICk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cbiAgICAgICAgcG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG4gICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblxuICAgICAgICB0aGV0YURlbHRhID0gMDtcbiAgICAgICAgcGhpRGVsdGEgPSAwO1xuICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgIHBhbi5zZXQoIDAsIDAsIDAgKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiB1cGRhdGUgY29uZGl0aW9uIGlzOlxuICAgICAgICAgKiBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcbiAgICAgICAgICogdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IEVQU1xuXHRcdCAgICB8fCA4ICogKDEgLSBsYXN0UXVhdGVybmlvbi5kb3QodGhpcy5vYmplY3QucXVhdGVybmlvbikpID4gRVBTICkge1xuXG4gICAgICAgICAgICBpZiAoIGlnbm9yZVVwZGF0ZSAhPT0gdHJ1ZSApIHsgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XG5cbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbi5jb3B5KCB0aGlzLm9iamVjdC5wb3NpdGlvbiApO1xuICAgICAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSAodGhpcy5vYmplY3QucXVhdGVybmlvbiApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0MCApO1xuICAgICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KCB0aGlzLnBvc2l0aW9uMCApO1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gdGhpcy56b29tMDtcblxuICAgICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gcGhpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoZXRhO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgIFx0XHRtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgIGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC5jbGllbnRYIC0gZXZlbnRQcmV2aW91cy5jbGllbnRYO1xuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC5jbGllbnRZIC0gZXZlbnRQcmV2aW91cy5jbGllbnRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0gZXZlbnQ7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkgc2NvcGUudXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9ab29tID09PSB0cnVlIHx8IHN0YXRlICE9PSBTVEFURS5OT05FICkgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG5cbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcblxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHpvb21PdXQgPSBkZWx0YSA+IDA7XG4gICAgICAgIGNvbnN0IHpvb21JbiA9IGRlbHRhIDwgMDtcblxuICAgICAgICBpZiAoICFzY29wZS5yZXZlcnRab29tU2Nyb2xsRGlyZWN0aW9uID8gem9vbU91dCA6ICF6b29tT3V0ICkge1xuXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseU91dCgpO1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxuICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcbiAgICAgICAgICAgICAgICA6IHNjb3BlLm1heEZvdjtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggIXNjb3BlLnJldmVydFpvb21TY3JvbGxEaXJlY3Rpb24gPyB6b29tSW4gOiAhem9vbUluICkge1xuXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseUluKCk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxuICAgICAgICAgICAgICAgIDogc2NvcGUubWluRm92O1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5VXAgKCBldmVudCApIHtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcbiAgICAgICAgICAgIGtleVVwID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAga2V5Qm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcbiAgICAgICAgICAgIGtleUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcbiAgICAgICAgICAgIGtleVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9LZXlzID09PSB0cnVlIHx8IHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxuICAgICAgICAgICAga2V5VXAgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcbiAgICAgICAgICAgIGtleUJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcbiAgICAgICAgICAgIGtleUxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAga2V5UmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlVcCB8fCBrZXlCb3R0b20gfHwga2V5TGVmdCB8fCBrZXlSaWdodCkge1xuXG4gICAgICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGtleVVwKSBtb21lbnR1bVVwID0gLSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcbiAgICAgICAgICAgIGlmIChrZXlCb3R0b20pIG1vbWVudHVtVXAgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcbiAgICAgICAgICAgIGlmIChrZXlMZWZ0KSBtb21lbnR1bUxlZnQgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleVJpZ2h0KSBtb21lbnR1bUxlZnQgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaHN0YXJ0KCBldmVudCApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgICAgICAgbW9tZW50dW1MZWZ0ID0gbW9tZW50dW1VcCA9IDA7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICBjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3VjaG1vdmUoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgY2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xuXG4gICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgIGlmKCBldmVudFByZXZpb3VzICl7XG4gICAgICAgICAgICAgICAgbW9tZW50dW1MZWZ0ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnRQcmV2aW91cy5wYWdlWDtcbiAgICAgICAgICAgICAgICBtb21lbnR1bVVwID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnRQcmV2aW91cy5wYWdlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnRQcmV2aW91cyA9IHtcbiAgICAgICAgICAgICAgICBwYWdlWDogZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgIHBhZ2VZOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxuICAgICAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgKyAxXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiAtIDFcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG4gICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoZW5kKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcblxuICAgICAgICBldmVudFByZXZpb3VzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCApO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlICk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIG9uS2V5VXAgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duICk7XG5cbiAgICB9O1xuXG4gICAgLy8gdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0sIGZhbHNlICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTsgLy8gZmlyZWZveFxuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuICAgIHRoaXMudXBkYXRlKCk7XG5cbn07XG5cbk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogT3JiaXRDb250cm9sc1xuXG59ICk7XG5cbmV4cG9ydCB7IE9yYml0Q29udHJvbHMgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBEZXZpY2UgT3JpZW50YXRpb24gQ29udHJvbFxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IGNhbWVyYSBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXG4gKi9cbmZ1bmN0aW9uIERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblxuICAgIHZhciByb3RZID0gMDtcbiAgICB2YXIgcm90WCA9IDA7XG4gICAgdmFyIHRlbXBYID0gMDtcbiAgICB2YXIgdGVtcFkgPSAwO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW1lcmEucm90YXRpb24ucmVvcmRlciggJ1lYWicgKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZGV2aWNlT3JpZW50YXRpb24gPSB7fTtcbiAgICB0aGlzLnNjcmVlbk9yaWVudGF0aW9uID0gMDtcblxuICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IDA7XG5cblxuICAgIHZhciBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgc2NvcGUuZGV2aWNlT3JpZW50YXRpb24gPSBldmVudDtcblxuICAgIH07XG5cbiAgICB2YXIgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPSB3aW5kb3cub3JpZW50YXRpb24gfHwgMDtcblxuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0ZW1wWCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWDtcbiAgICAgICAgdGVtcFkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVk7XG5cbiAgICB9O1xuXG4gICAgdmFyIG9uVG91Y2hNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICByb3RZICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gdGVtcFggKSAvIDQgKTtcbiAgICAgICAgcm90WCArPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCAoIHRlbXBZIC0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICkgLyA0ICk7XG5cbiAgICAgICAgc2NvcGUudXBkYXRlQWxwaGFPZmZzZXRBbmdsZSggcm90WSApO1xuXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcblxuICAgIH07XG5cbiAgICAvLyBUaGUgYW5nbGVzIGFscGhhLCBiZXRhIGFuZCBnYW1tYSBmb3JtIGEgc2V0IG9mIGludHJpbnNpYyBUYWl0LUJyeWFuIGFuZ2xlcyBvZiB0eXBlIFotWCctWScnXG5cbiAgICB2YXIgc2V0Q2FtZXJhUXVhdGVybmlvbiA9IGZ1bmN0aW9uKCBxdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApIHtcblxuICAgICAgICB2YXIgemVlID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDEgKTtcblxuICAgICAgICB2YXIgZXVsZXIgPSBuZXcgVEhSRUUuRXVsZXIoKTtcblxuICAgICAgICB2YXIgcTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG4gICAgICAgIHZhciBxMSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCAtIE1hdGguc3FydCggMC41ICksIDAsIDAsIE1hdGguc3FydCggMC41ICkgKTsgLy8gLSBQSS8yIGFyb3VuZCB0aGUgeC1heGlzXG5cbiAgICAgICAgdmFyIHZlY3RvckZpbmdlclk7XG4gICAgICAgIHZhciBmaW5nZXJRWSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgICAgIHZhciBmaW5nZXJRWCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gMTgwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSA5MCApIHtcblxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCByb3RYICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gLSA5MCkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWSApO1xuICAgICAgICBxMS5tdWx0aXBseSggZmluZ2VyUVggKTtcblxuICAgICAgICBldWxlci5zZXQoIGJldGEsIGFscGhhLCAtIGdhbW1hLCAnWVhaJyApOyAvLyAnWlhZJyBmb3IgdGhlIGRldmljZSwgYnV0ICdZWFonIGZvciB1c1xuXG4gICAgICAgIHF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBldWxlciApOyAvLyBvcmllbnQgdGhlIGRldmljZVxuXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHExICk7IC8vIGNhbWVyYSBsb29rcyBvdXQgdGhlIGJhY2sgb2YgdGhlIGRldmljZSwgbm90IHRoZSB0b3BcblxuICAgICAgICBxdWF0ZXJuaW9uLm11bHRpcGx5KCBxMC5zZXRGcm9tQXhpc0FuZ2xlKCB6ZWUsIC0gb3JpZW50ICkgKTsgLy8gYWRqdXN0IGZvciBzY3JlZW4gb3JpZW50YXRpb25cblxuICAgIH07XG5cbiAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQoKTsgLy8gcnVuIG9uY2Ugb24gbG9hZFxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydEV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcblxuICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIGZhbHNlICk7XG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlRXZlbnQsIGZhbHNlICk7XG5cbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oIGlnbm9yZVVwZGF0ZSApIHtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhbHBoYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmFscGhhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgKSArIHNjb3BlLmFscGhhT2Zmc2V0QW5nbGUgOiAwOyAvLyBaXG4gICAgICAgIHZhciBiZXRhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmJldGEgKSA6IDA7IC8vIFgnXG4gICAgICAgIHZhciBnYW1tYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmdhbW1hID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgKSA6IDA7IC8vIFknJ1xuICAgICAgICB2YXIgb3JpZW50ID0gc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiApIDogMDsgLy8gT1xuXG4gICAgICAgIHNldENhbWVyYVF1YXRlcm5pb24oIHNjb3BlLmNhbWVyYS5xdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApO1xuICAgICAgICBzY29wZS5hbHBoYSA9IGFscGhhO1xuXG4gICAgICAgIGlmICggaWdub3JlVXBkYXRlICE9PSB0cnVlICkgeyBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVBbHBoYU9mZnNldEFuZ2xlID0gZnVuY3Rpb24oIGFuZ2xlICkge1xuXG4gICAgICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCgpO1xuXG59O1xuXG5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xuXG59ICk7XG5cbmV4cG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfTsiLCJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBDYXJkYm9hcmQgRWZmZWN0IENvbXBvc2VyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlcm5hbCBDYXJkYm9hcmRFZmZlY3RcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgXG4gKi9cbmNsYXNzIENhcmRib2FyZEVmZmVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvciggcmVuZGVyZXIgKSB7XG4gICAgICAgIHZhciBfY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLSAxLCAxLCAxLCAtIDEsIDAsIDEgKTtcblxuICAgICAgICB2YXIgX3NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIFxuICAgICAgICB2YXIgX3N0ZXJlbyA9IG5ldyBUSFJFRS5TdGVyZW9DYW1lcmEoKTtcbiAgICAgICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XG4gIFxuICAgICAgICB2YXIgX3BhcmFtcyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0IH07XG4gIFxuICAgICAgICB2YXIgX3JlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggNTEyLCA1MTIsIF9wYXJhbXMgKTtcbiAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yVGVzdCA9IHRydWU7XG4gICAgICAgIF9yZW5kZXJUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcbiAgXG4gICAgICAgIC8qXG4gICAgICAgICAqIERpc3RvcnRpb24gTWVzaCBwb3J0ZWQgZnJvbTpcbiAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLWJvaWxlcnBsYXRlL2Jsb2IvbWFzdGVyL3NyYy9kaXN0b3J0aW9uL2JhcnJlbC1kaXN0b3J0aW9uLWZyYWdtZW50LmpzXG4gICAgICAgICAqL1xuICBcbiAgICAgICAgdmFyIGRpc3RvcnRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMiggMC40NDEsIDAuMTU2ICk7XG4gIFxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMSwgMSwgMTAsIDIwICkucmVtb3ZlQXR0cmlidXRlKCAnbm9ybWFsJyApLnRvTm9uSW5kZXhlZCgpO1xuICBcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XG4gICAgICAgIHZhciB1dnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmFycmF5O1xuICBcbiAgICAgICAgLy8gZHVwbGljYXRlXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQgKj0gMjtcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5jb3VudCAqPSAyO1xuICBcbiAgICAgICAgdmFyIHBvc2l0aW9uczIgPSBuZXcgRmxvYXQzMkFycmF5KCBwb3NpdGlvbnMubGVuZ3RoICogMiApO1xuICAgICAgICBwb3NpdGlvbnMyLnNldCggcG9zaXRpb25zICk7XG4gICAgICAgIHBvc2l0aW9uczIuc2V0KCBwb3NpdGlvbnMsIHBvc2l0aW9ucy5sZW5ndGggKTtcbiAgXG4gICAgICAgIHZhciB1dnMyID0gbmV3IEZsb2F0MzJBcnJheSggdXZzLmxlbmd0aCAqIDIgKTtcbiAgICAgICAgdXZzMi5zZXQoIHV2cyApO1xuICAgICAgICB1dnMyLnNldCggdXZzLCB1dnMubGVuZ3RoICk7XG4gIFxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xuICBcbiAgICAgICAgZm9yICggdmFyIGkgPSAwLCBsID0gcG9zaXRpb25zMi5sZW5ndGggLyAzOyBpIDwgbDsgaSArKyApIHtcbiAgXG4gICAgICAgICAgICB2ZWN0b3IueCA9IHBvc2l0aW9uczJbIGkgKiAzICsgMCBdO1xuICAgICAgICAgICAgdmVjdG9yLnkgPSBwb3NpdGlvbnMyWyBpICogMyArIDEgXTtcbiAgXG4gICAgICAgICAgICB2YXIgZG90ID0gdmVjdG9yLmRvdCggdmVjdG9yICk7XG4gICAgICAgICAgICB2YXIgc2NhbGFyID0gMS41ICsgKCBkaXN0b3J0aW9uLnggKyBkaXN0b3J0aW9uLnkgKiBkb3QgKSAqIGRvdDtcbiAgXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gaSA8IGxlbmd0aCA/IDAgOiAxO1xuICBcbiAgICAgICAgICAgIHBvc2l0aW9uczJbIGkgKiAzICsgMCBdID0gKCB2ZWN0b3IueCAvIHNjYWxhciApICogMS41IC0gMC41ICsgb2Zmc2V0O1xuICAgICAgICAgICAgcG9zaXRpb25zMlsgaSAqIDMgKyAxIF0gPSAoIHZlY3Rvci55IC8gc2NhbGFyICkgKiAzLjA7XG4gIFxuICAgICAgICAgICAgdXZzMlsgaSAqIDIgXSA9ICggdXZzMlsgaSAqIDIgXSArIG9mZnNldCApICogMC41O1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheSA9IHBvc2l0aW9uczI7XG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXkgPSB1dnMyO1xuICBcbiAgICAgICAgLy9cbiAgXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBtYXA6IF9yZW5kZXJUYXJnZXQudGV4dHVyZSB9ICk7XG4gICAgICAgIHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuICAgICAgICBfc2NlbmUuYWRkKCBtZXNoICk7XG4gIFxuICAgICAgICAvL1xuICBcbiAgICAgICAgdGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xuICBcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcbiAgXG4gICAgICAgICAgICB2YXIgcGl4ZWxSYXRpbyA9IHJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKTtcbiAgXG4gICAgICAgICAgICBfcmVuZGVyVGFyZ2V0LnNldFNpemUoIHdpZHRoICogcGl4ZWxSYXRpbywgaGVpZ2h0ICogcGl4ZWxSYXRpbyApO1xuICBcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xuICBcbiAgICAgICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gIFxuICAgICAgICAgICAgaWYgKCBjYW1lcmEucGFyZW50ID09PSBudWxsICkgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gIFxuICAgICAgICAgICAgX3N0ZXJlby51cGRhdGUoIGNhbWVyYSApO1xuICBcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IF9yZW5kZXJUYXJnZXQud2lkdGggLyAyO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IF9yZW5kZXJUYXJnZXQuaGVpZ2h0O1xuICBcbiAgICAgICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcbiAgXG4gICAgICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3Iuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgICAgICBfcmVuZGVyVGFyZ2V0LnZpZXdwb3J0LnNldCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBfcmVuZGVyVGFyZ2V0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcbiAgXG4gICAgICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XG4gIFxuICAgICAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yLnNldCggd2lkdGgsIDAsIHdpZHRoLCBoZWlnaHQgKTtcbiAgICAgICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCB3aWR0aCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBfcmVuZGVyVGFyZ2V0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYVIgKTtcbiAgXG4gICAgICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XG4gIFxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBudWxsICk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoIF9zY2VuZSwgX2NhbWVyYSApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IENhcmRib2FyZEVmZmVjdCB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFN0ZXJlbyBFZmZlY3QgQ29tcG9zZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIFN0ZXJlb0VmZmVjdFxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcbiAqL1xuY2xhc3MgU3RlcmVvRWZmZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoIHJlbmRlcmVyICkge1xuICAgICAgICB2YXIgX3N0ZXJlbyA9IG5ldyBUSFJFRS5TdGVyZW9DYW1lcmEoKTtcbiAgICAgICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XG4gICAgICAgIHZhciBzaXplID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgICAgICB0aGlzLnNldEV5ZVNlcGFyYXRpb24gPSBmdW5jdGlvbiAoIGV5ZVNlcCApIHtcblxuICAgICAgICAgICAgX3N0ZXJlby5leWVTZXAgPSBleWVTZXA7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY2VuZS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICAgICAgX3N0ZXJlby51cGRhdGUoIGNhbWVyYSApO1xuXG4gICAgICAgICAgICByZW5kZXJlci5nZXRTaXplKCBzaXplICk7XG5cbiAgICAgICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3JUZXN0KCB0cnVlICk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFMICk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFZpZXdwb3J0KCBzaXplLndpZHRoIC8gMiwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYVIgKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIGZhbHNlICk7XG5cbiAgICAgICAgfTtcbiAgICB9XG4gIFxufTtcblxuZXhwb3J0IHsgU3RlcmVvRWZmZWN0IH07IiwiaW1wb3J0IHsgTU9ERVMsIENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAnLi4vbGliL2NvbnRyb2xzL0RldmljZU9yaWVudGF0aW9uQ29udHJvbHMnO1xuaW1wb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvQ2FyZGJvYXJkRWZmZWN0JztcbmltcG9ydCB7IFN0ZXJlb0VmZmVjdCB9IGZyb20gJy4uL2xpYi9lZmZlY3RzL1N0ZXJlb0VmZmVjdCc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQvV2lkZ2V0JztcbmltcG9ydCB7IFJldGljbGUgfSBmcm9tICcuLi9pbnRlcmZhY2UvUmV0aWNsZSc7XG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1Bhbm9yYW1hJztcbmltcG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hJztcbmltcG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvQ2FtZXJhUGFub3JhbWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFZpZXdlciBjb250YWlucyBwcmUtZGVmaW5lZCBzY2VuZSwgY2FtZXJhIGFuZCByZW5kZXJlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gVXNlIGN1c3RvbSBvciBkZWZhdWx0IGNvbmZpZyBvcHRpb25zXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy5jb250YWluZXJdIC0gQSBIVE1MRWxlbWVudCB0byBob3N0IHRoZSBjYW52YXNcbiAqIEBwYXJhbSB7VEhSRUUuU2NlbmV9IFtvcHRpb25zLnNjZW5lPVRIUkVFLlNjZW5lXSAtIEEgVEhSRUUuU2NlbmUgd2hpY2ggY29udGFpbnMgcGFub3JhbWEgYW5kIDNEIG9iamVjdHNcbiAqIEBwYXJhbSB7VEhSRUUuQ2FtZXJhfSBbb3B0aW9ucy5jYW1lcmE9VEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFdIC0gQSBUSFJFRS5DYW1lcmEgdG8gdmlldyB0aGUgc2NlbmVcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gW29wdGlvbnMucmVuZGVyZXI9VEhSRUUuV2ViR0xSZW5kZXJlcl0gLSBBIFRIUkVFLldlYkdMUmVuZGVyZXIgdG8gcmVuZGVyIGNhbnZhc1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb250cm9sQmFyPXRydWVdIC0gU2hvdy9oaWRlIGNvbnRyb2wgYmFyIG9uIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxuICogQHBhcmFtIHthcnJheX0gICBbb3B0aW9ucy5jb250cm9sQnV0dG9ucz1bXV0gLSBCdXR0b24gbmFtZXMgdG8gbW91bnQgb24gY29udHJvbEJhciBpZiBjb250cm9sQmFyIGV4aXN0cywgRGVmYXVsdHMgdG8gWydmdWxsc2NyZWVuJywgJ3NldHRpbmcnLCAndmlkZW8nXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXI9ZmFsc2VdIC0gQXV0byBoaWRlIGNvbnRyb2wgYmFyIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3Q9dHJ1ZV0gLSBBdXRvIGhpZGUgaW5mb3Nwb3RzIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWxWaWV3PWZhbHNlXSAtIEFsbG93IG9ubHkgaG9yaXpvbnRhbCBjYW1lcmEgY29udHJvbFxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5jbGlja1RvbGVyYW5jZT0xMF0gLSBEaXN0YW5jZSB0b2xlcmFuY2UgdG8gdGlnZ2VyIGNsaWNrIC8gdGFwIGV2ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNhbWVyYUZvdj02MF0gLSBDYW1lcmEgZmllbGQgb2YgdmlldyB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmc9ZmFsc2VdIC0gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZW5hYmxlUmV0aWNsZT1mYWxzZV0gLSBFbmFibGUgcmV0aWNsZSBmb3IgbW91c2VsZXNzIGludGVyYWN0aW9uIG90aGVyIHRoYW4gVlIgbW9kZVxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5kd2VsbFRpbWU9MTUwMF0gLSBEd2VsbCB0aW1lIGZvciByZXRpY2xlIHNlbGVjdGlvbiBpbiBtc1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0IGEgY2xpY2thYmxlIHRhcmdldCBhZnRlciBkd2VsbFRpbWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmlld0luZGljYXRvcj1mYWxzZV0gLSBBZGRzIGFuIGFuZ2xlIHZpZXcgaW5kaWNhdG9yIGluIHVwcGVyIGxlZnQgY29ybmVyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmluZGljYXRvclNpemU9MzBdIC0gU2l6ZSBvZiBWaWV3IEluZGljYXRvclxuICogQHBhcmFtIHtzdHJpbmd9ICBbb3B0aW9ucy5vdXRwdXQ9J25vbmUnXSAtIFdoZXRoZXIgYW5kIHdoZXJlIHRvIG91dHB1dCByYXljYXN0IHBvc2l0aW9uLiBDb3VsZCBiZSAnZXZlbnQnLCAnY29uc29sZScgb3IgJ292ZXJsYXknLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvUm90YXRlPWZhbHNlXSAtIEF1dG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZD0yLjBdIC0gQXV0byByb3RhdGUgc3BlZWQgYXMgaW4gZGVncmVlIHBlciBzZWNvbmQuIFBvc2l0aXZlIGlzIGNvdW50ZXItY2xvY2t3aXNlIGFuZCBuZWdhdGl2ZSBpcyBjbG9ja3dpc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb249NTAwMF0gLSBEdXJhdGlvbiBiZWZvcmUgYXV0byByb3RhdGF0aW9uIHdoZW4gbm8gdXNlciBpbnRlcmFjdGl2aXR5IGluIG1zXG4gKi9cbmNsYXNzIFZpZXdlciBleHRlbmRzIFRIUkVFLkV2ZW50RGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBjb250YWluZXI7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIG9wdGlvbnMuY29udHJvbEJhciA9IG9wdGlvbnMuY29udHJvbEJhciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250cm9sQmFyIDogdHJ1ZTtcbiAgICAgICAgb3B0aW9ucy5jb250cm9sQnV0dG9ucyA9IG9wdGlvbnMuY29udHJvbEJ1dHRvbnMgfHwgWyAnZnVsbHNjcmVlbicsICdzZXR0aW5nJywgJ3ZpZGVvJyBdO1xuICAgICAgICBvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhciA9IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhciA6IGZhbHNlO1xuICAgICAgICBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgPSBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCA6IHRydWU7XG4gICAgICAgIG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgPSBvcHRpb25zLmhvcml6b250YWxWaWV3ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmhvcml6b250YWxWaWV3IDogZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgPSBvcHRpb25zLmNsaWNrVG9sZXJhbmNlIHx8IDEwO1xuICAgICAgICBvcHRpb25zLmNhbWVyYUZvdiA9IG9wdGlvbnMuY2FtZXJhRm92IHx8IDYwO1xuICAgICAgICBvcHRpb25zLnJldmVyc2VEcmFnZ2luZyA9IG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nIHx8IGZhbHNlO1xuICAgICAgICBvcHRpb25zLmVuYWJsZVJldGljbGUgPSBvcHRpb25zLmVuYWJsZVJldGljbGUgfHwgZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuZHdlbGxUaW1lID0gb3B0aW9ucy5kd2VsbFRpbWUgfHwgMTUwMDtcbiAgICAgICAgb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA9IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgOiB0cnVlO1xuICAgICAgICBvcHRpb25zLnZpZXdJbmRpY2F0b3IgPSBvcHRpb25zLnZpZXdJbmRpY2F0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudmlld0luZGljYXRvciA6IGZhbHNlO1xuICAgICAgICBvcHRpb25zLmluZGljYXRvclNpemUgPSBvcHRpb25zLmluZGljYXRvclNpemUgfHwgMzA7XG4gICAgICAgIG9wdGlvbnMub3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQgPyBvcHRpb25zLm91dHB1dCA6ICdub25lJztcbiAgICAgICAgb3B0aW9ucy5hdXRvUm90YXRlID0gb3B0aW9ucy5hdXRvUm90YXRlIHx8IGZhbHNlO1xuICAgICAgICBvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZCA9IG9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkIHx8IDIuMDtcbiAgICAgICAgb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uID0gb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uIHx8IDUwMDA7XG4gIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICBcbiAgICAgICAgLypcbiAgICAgICAgICogQ1NTIEljb25cbiAgICAgICAgICogY29uc3Qgc3R5bGVMb2FkZXIgPSBuZXcgU3R5bGVMb2FkZXIoKTtcbiAgICAgICAgICogc3R5bGVMb2FkZXIuaW5qZWN0KCAnaWNvbm8nICk7XG4gICAgICAgICAqL1xuICBcbiAgICAgICAgLy8gQ29udGFpbmVyXG4gICAgICAgIGlmICggb3B0aW9ucy5jb250YWluZXIgKSB7XG4gIFxuICAgICAgICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICBjb250YWluZXIuX3dpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICBcbiAgICAgICAgfSBlbHNlIHtcbiAgXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1jb250YWluZXInICk7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgY29udGFpbmVyLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICBcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBvcHRpb25zLmNhbWVyYSB8fCBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIHRoaXMub3B0aW9ucy5jYW1lcmFGb3YsIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0LCAxLCAxMDAwMCApO1xuICAgICAgICB0aGlzLnNjZW5lID0gb3B0aW9ucy5zY2VuZSB8fCBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHsgYWxwaGE6IHRydWUsIGFudGlhbGlhczogZmFsc2UgfSApO1xuICAgICAgICB0aGlzLnNjZW5lUmV0aWNsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBcbiAgICAgICAgdGhpcy52aWV3SW5kaWNhdG9yU2l6ZSA9IHRoaXMub3B0aW9ucy5pbmRpY2F0b3JTaXplO1xuICBcbiAgICAgICAgdGhpcy5yZXRpY2xlID0ge307XG4gICAgICAgIHRoaXMudGVtcEVuYWJsZVJldGljbGUgPSB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZTtcbiAgXG4gICAgICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcbiAgXG4gICAgICAgIHRoaXMucGFub3JhbWEgPSBudWxsO1xuICAgICAgICB0aGlzLndpZGdldCA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmZvc3BvdCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gbnVsbDtcbiAgXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdGhpcy51c2VyTW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLmNhbWVyYUZydXN0dW0gPSBuZXcgVEhSRUUuRnJ1c3R1bSgpO1xuICAgICAgICB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcbiAgXG4gICAgICAgIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCA9IG51bGw7XG4gIFxuICAgICAgICB0aGlzLm91dHB1dERpdkVsZW1lbnQgPSBudWxsO1xuICBcbiAgICAgICAgdGhpcy50b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2g7XG4gIFxuICAgICAgICAvLyBIYW5kbGVyIHJlZmVyZW5jZXNcbiAgICAgICAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgdGhpcy5IQU5ETEVSX01PVVNFX1VQID0gdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfS0VZX0RPV04gPSB0aGlzLm9uS2V5RG93bi5iaW5kKCB0aGlzICk7XG4gICAgICAgIHRoaXMuSEFORExFUl9LRVlfVVAgPSB0aGlzLm9uS2V5VXAuYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLkhBTkRMRVJfVEFQID0gdGhpcy5vblRhcC5iaW5kKCB0aGlzLCB7XG4gICAgICAgICAgICBjbGllbnRYOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXG4gICAgICAgICAgICBjbGllbnRZOiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyXG4gICAgICAgIH0gKTtcbiAgXG4gICAgICAgIC8vIEZsYWcgZm9yIGluZm9zcG90IG91dHB1dFxuICAgICAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IGZhbHNlO1xuICBcbiAgICAgICAgLy8gQW5pbWF0aW9uc1xuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcbiAgXG4gICAgICAgIC8vIFJlbmRlcmVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAsIDAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcbiAgXG4gICAgICAgIC8vIEFwcGVuZCBSZW5kZXJlciBFbGVtZW50IHRvIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWNhbnZhcycgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcbiAgXG4gICAgICAgIC8vIENhbWVyYSBDb250cm9sc1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5pZCA9ICdvcmJpdCc7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5taW5EaXN0YW5jZSA9IDE7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5ub1BhbiA9IHRydWU7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGU7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlU3BlZWQgPSB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkO1xuICBcbiAgICAgICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzID0gbmV3IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMoIHRoaXMuY2FtZXJhLCB0aGlzLmNvbnRhaW5lciApO1xuICAgICAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuaWQgPSAnZGV2aWNlLW9yaWVudGF0aW9uJztcbiAgICAgICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gIFxuICAgICAgICAvLyBSZWdpc3RlciBjaGFuZ2UgZXZlbnQgaWYgcGFzc2l2ZVJlbmVyaW5nXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnBhc3NpdmVSZW5kZXJpbmcgKSB7XG4gIFxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAncGFzc2l2ZVJlbmRlcmluZyBpcyBub3cgZGVwcmVjYXRlZCcgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIENvbnRyb2xzXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBbIHRoaXMuT3JiaXRDb250cm9scywgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIF07XG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuT3JiaXRDb250cm9scztcbiAgXG4gICAgICAgIC8vIENhcmRib2FyZCBlZmZlY3RcbiAgICAgICAgdGhpcy5DYXJkYm9hcmRFZmZlY3QgPSBuZXcgQ2FyZGJvYXJkRWZmZWN0KCB0aGlzLnJlbmRlcmVyICk7XG4gICAgICAgIHRoaXMuQ2FyZGJvYXJkRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgXG4gICAgICAgIC8vIFN0ZXJlbyBlZmZlY3RcbiAgICAgICAgdGhpcy5TdGVyZW9FZmZlY3QgPSBuZXcgU3RlcmVvRWZmZWN0KCB0aGlzLnJlbmRlcmVyICk7XG4gICAgICAgIHRoaXMuU3RlcmVvRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgXG4gICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5DYXJkYm9hcmRFZmZlY3Q7XG4gIFxuICAgICAgICAvLyBBZGQgZGVmYXVsdCBoaWRkZW4gcmV0aWNsZVxuICAgICAgICB0aGlzLmFkZFJldGljbGUoKTtcbiAgXG4gICAgICAgIC8vIExvY2sgaG9yaXpvbnRhbCB2aWV3XG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmhvcml6b250YWxWaWV3ICkge1xuICAgICAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pblBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSSAvIDI7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIEFkZCBDb250cm9sIFVJXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmNvbnRyb2xCYXIgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgdGhpcy5hZGREZWZhdWx0Q29udHJvbEJhciggdGhpcy5vcHRpb25zLmNvbnRyb2xCdXR0b25zICk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIEFkZCBWaWV3IEluZGljYXRvclxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy52aWV3SW5kaWNhdG9yICkge1xuICAgICAgICAgICAgdGhpcy5hZGRWaWV3SW5kaWNhdG9yKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnJldmVyc2VEcmFnZ2luZyApIHtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZURyYWdnaW5nRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGlmIHJldGljbGUgaXMgZW5hYmxlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG1vdXNlXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBPdXRwdXQgaW5mb3Nwb3QgcG9zaXRpb24gdG8gYW4gb3ZlcmxheSBjb250YWluZXIgaWYgc3BlY2lmaWVkXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLm91dHB1dCA9PT0gJ292ZXJsYXknICkge1xuICAgICAgICAgICAgdGhpcy5hZGRPdXRwdXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIFJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gIFxuICAgICAgICAvLyBBbmltYXRlXG4gICAgICAgIHRoaXMuYW5pbWF0ZS5jYWxsKCB0aGlzICk7XG4gICAgfVxuICAgXG4gICAgLyoqXG4gICAgICogQWRkIGFuIG9iamVjdCB0byB0aGUgc2NlbmVcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGhvb2t1cCB3aXRoIHBhbm9sZW5zLXZpZXdlci1oYW5kbGVyIGxpc3RlbmVyXG4gICAgICogdG8gY29tbXVuaWNhdGUgd2l0aCB2aWV3ZXIgbWV0aG9kXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBhZGRlZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGQgKCBvYmplY3QgKSB7XG5cbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcbiAgXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICsrICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnNjZW5lLmFkZCggb2JqZWN0ICk7XG4gIFxuICAgICAgICAvLyBBbGwgb2JqZWN0IGFkZGVkIHRvIHNjZW5lIGhhcyAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInIGV2ZW50IHRvIGhhbmRsZSB2aWV3ZXIgY29tbXVuaWNhdGlvblxuICAgICAgICBpZiAoIG9iamVjdC5hZGRFdmVudExpc3RlbmVyICkge1xuICBcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIEFsbCBvYmplY3QgYWRkZWQgdG8gc2NlbmUgYmVpbmcgcGFzc2VkIHdpdGggY29udGFpbmVyXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgUGFub3JhbWEgJiYgb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIgfSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBDYW1lcmFQYW5vcmFtYSApIHtcbiAgXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtc2NlbmUnLCBzY2VuZTogdGhpcy5zY2VuZSB9ICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBIb29rdXAgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKCBvYmplY3QudHlwZSA9PT0gJ3Bhbm9yYW1hJyApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLmFkZFBhbm9yYW1hRXZlbnRMaXN0ZW5lciggb2JqZWN0ICk7XG4gIFxuICAgICAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYW5vcmFtYSggb2JqZWN0ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBvYmplY3QgZnJvbSB0aGUgc2NlbmVcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gT2JqZWN0IHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlICggb2JqZWN0ICkge1xuICBcbiAgICAgICAgaWYgKCBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcbiAgXG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSggb2JqZWN0ICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQWRkIGRlZmF1bHQgY29udHJvbCBiYXJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJheSAtIFRoZSBjb250cm9sIGJ1dHRvbnMgYXJyYXlcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkRGVmYXVsdENvbnRyb2xCYXIgKCBhcnJheSApIHtcbiAgXG4gICAgICAgIGlmICggdGhpcy53aWRnZXQgKSB7XG4gIFxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnRGVmYXVsdCBjb250cm9sIGJhciBleGlzdHMnICk7XG4gICAgICAgICAgICByZXR1cm47XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBjb25zdCB3aWRnZXQgPSBuZXcgV2lkZ2V0KCB0aGlzLmNvbnRhaW5lciApO1xuICAgICAgICB3aWRnZXQuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XG4gICAgICAgIHdpZGdldC5hZGRDb250cm9sQmFyKCk7XG4gICAgICAgIGFycmF5LmZvckVhY2goIGJ1dHRvbk5hbWUgPT4ge1xuICBcbiAgICAgICAgICAgIHdpZGdldC5hZGRDb250cm9sQnV0dG9uKCBidXR0b25OYW1lICk7XG4gIFxuICAgICAgICB9ICk7XG4gIFxuICAgICAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBwYW5vcmFtYSB0byBiZSB0aGUgY3VycmVudCBvbmVcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gUGFub3JhbWEgdG8gYmUgc2V0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFBhbm9yYW1hICggcGFubyApIHtcbiAgXG4gICAgICAgIGNvbnN0IGxlYXZpbmdQYW5vcmFtYSA9IHRoaXMucGFub3JhbWE7XG4gIFxuICAgICAgICBpZiAoIHBhbm8udHlwZSA9PT0gJ3Bhbm9yYW1hJyAmJiBsZWF2aW5nUGFub3JhbWEgIT09IHBhbm8gKSB7XG4gIFxuICAgICAgICAgICAgLy8gQ2xlYXIgZXhpc2l0aW5nIGluZm9zcG90XG4gICAgICAgICAgICB0aGlzLmhpZGVJbmZvc3BvdCgpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IGFmdGVyRW50ZXJDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKCBsZWF2aW5nUGFub3JhbWEgKSB7IGxlYXZpbmdQYW5vcmFtYS5vbkxlYXZlKCk7IH1cbiAgICAgICAgICAgICAgICBwYW5vLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XG4gIFxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XG4gIFxuICAgICAgICAgICAgLy8gQXNzaWduIGFuZCBlbnRlciBwYW5vcmFtYVxuICAgICAgICAgICAgKHRoaXMucGFub3JhbWEgPSBwYW5vKS5vbkVudGVyKCk7XG4gICAgICAgIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciB0byBleGVjdXRlIGNvbW1hbmRzIGZyb20gY2hpbGQgb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIFRoZSBkaXNwYXRjaGVkIGV2ZW50IHdpdGggbWV0aG9kIGFzIGZ1bmN0aW9uIG5hbWUgYW5kIGRhdGEgYXMgYW4gYXJndW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZXZlbnRIYW5kbGVyICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBpZiAoIGV2ZW50Lm1ldGhvZCAmJiB0aGlzWyBldmVudC5tZXRob2QgXSApIHtcbiAgXG4gICAgICAgICAgICB0aGlzWyBldmVudC5tZXRob2QgXSggZXZlbnQuZGF0YSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGV2ZW50IHRvIGFsbCBkZXNjZW5kYW50c1xuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCB0byBiZSBwYXNzZWQgYWxvbmdcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4gKCBldmVudCApIHtcbiAgXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xuICBcbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH0pO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFNldCB3aWRnZXQgY29udGVudFxuICAgICAqIEBtZXRob2QgYWN0aXZhdGVXaWRnZXRJdGVtXG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gY29udHJvbEluZGV4IC0gQ29udHJvbCBpbmRleFxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhY3RpdmF0ZVdpZGdldEl0ZW0gKCBjb250cm9sSW5kZXgsIG1vZGUgKSB7XG4gICAgICAgIGlmICghdGhpcy53aWRnZXQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtYWluTWVudSA9IHRoaXMud2lkZ2V0Lm1haW5NZW51O1xuICAgICAgICBjb25zdCBDb250cm9sTWVudUl0ZW0gPSBtYWluTWVudS5jaGlsZHJlblsgMCBdO1xuICAgICAgICBjb25zdCBNb2RlTWVudUl0ZW0gPSBtYWluTWVudS5jaGlsZHJlblsgMSBdO1xuICBcbiAgICAgICAgbGV0IGl0ZW07XG4gIFxuICAgICAgICBpZiAoIGNvbnRyb2xJbmRleCAhPT0gdW5kZWZpbmVkICkge1xuICBcbiAgICAgICAgICAgIHN3aXRjaCAoIGNvbnRyb2xJbmRleCApIHtcbiAgXG4gICAgICAgICAgICBjYXNlIDA6XG4gIFxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xuICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgICAgICBjYXNlIDE6XG4gIFxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMiBdO1xuICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XG4gIFxuICAgICAgICAgICAgICAgIGJyZWFrO1x0XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIENvbnRyb2xNZW51SXRlbS5zdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcbiAgICAgICAgICAgIENvbnRyb2xNZW51SXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggaXRlbS50ZXh0Q29udGVudCApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBtb2RlICE9PSB1bmRlZmluZWQgKSB7XG4gIFxuICAgICAgICAgICAgc3dpdGNoKCBtb2RlICkge1xuICBcbiAgICAgICAgICAgIGNhc2UgTU9ERVMuQ0FSREJPQVJEOlxuICBcbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcbiAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XG4gIFxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMyBdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XG4gIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIE1vZGVNZW51SXRlbS5zdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcbiAgICAgICAgICAgIE1vZGVNZW51SXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggaXRlbS50ZXh0Q29udGVudCApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQHBhcmFtICB7TU9ERVN9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVFZmZlY3QgKCBtb2RlICkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IG1vZGUgKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoIG1vZGUgPT09IE1PREVTLk5PUk1BTCApIHsgdGhpcy5kaXNhYmxlRWZmZWN0KCk7IHJldHVybjsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5tb2RlID0gbW9kZTsgfVxuICBcbiAgICAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92O1xuICBcbiAgICAgICAgc3dpdGNoKCBtb2RlICkge1xuICBcbiAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XG4gIFxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgXG4gICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgIGNhc2UgTU9ERVMuU1RFUkVPOlxuICBcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5TdGVyZW9FZmZlY3Q7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgIGRlZmF1bHQ6XG4gIFxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgXG4gICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcbiAgXG4gICAgICAgIC8vIEZvcmNlIGVmZmVjdCBzdGVyZW8gY2FtZXJhIHRvIHVwZGF0ZSBieSByZWZyZXNoaW5nIGZvdlxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3YgKyAxMGUtMztcbiAgICAgICAgdGhpcy5lZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWRkaXRpb25hbCByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc2FibGVFZmZlY3QgKCkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLk5PUk1BTCApIHsgcmV0dXJuOyB9XG4gIFxuICAgICAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJldGljbGVDb250cm9sKCk7XG4gIFxuICAgICAgICB0aGlzLmFjdGl2YXRlV2lkZ2V0SXRlbSggdW5kZWZpbmVkLCB0aGlzLm1vZGUgKTtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEdWFsIGV5ZSBlZmZlY3QgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdFxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4oIHsgdHlwZTogJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIG1vZGU6IHRoaXMubW9kZSB9ICk7XG4gIFxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaCBtb2RlIGNoYW5nZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI21vZGUtY2hhbmdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdtb2RlLWNoYW5nZScsIG1vZGU6IHRoaXMubW9kZSB9ICk7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmV0aWNsZSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZVJldGljbGVDb250cm9sICgpIHtcbiAgXG4gICAgICAgIGlmICggdGhpcy5yZXRpY2xlLnZpc2libGUgKSB7IHJldHVybjsgfVxuICBcbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRydWU7XG4gIFxuICAgICAgICAvLyBSZWdpc3RlciByZXRpY2xlIGV2ZW50IGFuZCB1bnJlZ2lzdGVyIG1vdXNlIGV2ZW50XG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXRpY2xlLnNob3coKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJldGljbGVFdmVudCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc2FibGUgcmV0aWNsZSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc2FibGVSZXRpY2xlQ29udHJvbCAoKSB7XG4gIFxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gZmFsc2U7XG4gIFxuICAgICAgICAvLyBSZWdpc3RlciBtb3VzZSBldmVudCBhbmQgdW5yZWdpc3RlciByZXRpY2xlIGV2ZW50XG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xuICBcbiAgICAgICAgICAgIHRoaXMucmV0aWNsZS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJSZXRpY2xlRXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogRW5hYmxlIGF1dG8gcm90YXRpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZW5hYmxlQXV0b1JhdGUgKCkge1xuICBcbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGF1dG8gcm90YXRpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzYWJsZUF1dG9SYXRlICgpIHtcbiAgXG4gICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkICk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHZpZGVvIHBsYXkgb3Igc3RvcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10b2dnbGVcbiAgICAgKi9cbiAgICB0b2dnbGVWaWRlb1BsYXkgKCBwYXVzZSApIHtcbiAgXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG4gIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2dnbGUgdmlkZW8gZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXRvZ2dsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLXRvZ2dsZScsIHBhdXNlOiBwYXVzZSB9ICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnJlbnRUaW1lIGluIGEgdmlkZW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdGltZVxuICAgICAqL1xuICAgIHNldFZpZGVvQ3VycmVudFRpbWUgKCBwZXJjZW50YWdlICkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcbiAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHRpbmcgdmlkZW8gdGltZSBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdGltZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLXRpbWUnLCBwZXJjZW50YWdlOiBwZXJjZW50YWdlIH0gKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gdmlkZW8gdXBkYXRlcyBpZiBhbiB3aWRnZXQgaXMgcHJlc2VudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby11cGRhdGVcbiAgICAgKi9cbiAgICBvblZpZGVvVXBkYXRlICggcGVyY2VudGFnZSApIHtcbiAgXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZpZGVvIHVwZGF0ZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXVwZGF0ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAqL1xuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdXBkYXRlJywgcGVyY2VudGFnZTogcGVyY2VudGFnZSB9ICk7IH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBBZGQgdXBkYXRlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBldmVyeSBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRVcGRhdGVDYWxsYmFjayAoIGZuICkge1xuICBcbiAgICAgICAgaWYgKCBmbiApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5wdXNoKCBmbiApO1xuICBcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHVwZGF0ZSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBiZSByZW1vdmVkXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZVVwZGF0ZUNhbGxiYWNrICggZm4gKSB7XG4gIFxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBkYXRlQ2FsbGJhY2tzLmluZGV4T2YoIGZuICk7XG4gIFxuICAgICAgICBpZiAoIGZuICYmIGluZGV4ID49IDAgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3Muc3BsaWNlKCBpbmRleCwgMSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFNob3cgdmlkZW8gd2lkZ2V0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNob3dWaWRlb1dpZGdldCAoKSB7XG4gIFxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHZpZGVvIHdpZGdldCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLWNvbnRyb2wtc2hvd1xuICAgICAgICAgKi9cbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLWNvbnRyb2wtc2hvdycgfSApOyB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogSGlkZSB2aWRlbyB3aWRnZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgaGlkZVZpZGVvV2lkZ2V0ICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdmlkZW8gd2lkZ2V0XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tY29udHJvbC1oaWRlXG4gICAgICAgICAqL1xuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tY29udHJvbC1oaWRlJyB9ICk7IH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdmlkZW8gcGxheSBidXR0b25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlZCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlVmlkZW9QbGF5QnV0dG9uICggcGF1c2VkICkge1xuICBcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG4gIFxuICAgICAgICBpZiAoIHdpZGdldCAmJiB3aWRnZXQudmlkZW9FbGVtZW50ICYmIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbiApIHtcbiAgXG4gICAgICAgICAgICB3aWRnZXQudmlkZW9FbGVtZW50LmNvbnRyb2xCdXR0b24udXBkYXRlKCBwYXVzZWQgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBBZGQgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGFkZGVkIHdpdGggZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGFub3JhbWFFdmVudExpc3RlbmVyICggcGFubyApIHtcbiAgXG4gICAgICAgIC8vIFNldCBjYW1lcmEgY29udHJvbCBvbiBldmVyeSBwYW5vcmFtYVxuICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5zZXRDYW1lcmFDb250cm9sLmJpbmQoIHRoaXMgKSApO1xuICBcbiAgICAgICAgLy8gU2hvdyBhbmQgaGlkZSB3aWRnZXQgZXZlbnQgb25seSB3aGVuIGl0J3MgVmlkZW9QYW5vcmFtYVxuICAgICAgICBpZiAoIHBhbm8gaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xuICBcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNob3dWaWRlb1dpZGdldC5iaW5kKCB0aGlzICkgKTtcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgZnVuY3Rpb24gKCkge1xuICBcbiAgICAgICAgICAgICAgICBpZiAoICEodGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEpICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQuY2FsbCggdGhpcyApO1xuICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFNldCBjYW1lcmEgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDYW1lcmFDb250cm9sICgpIHtcbiAgXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy50YXJnZXQuY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGNhbWVyYSBjb250cm9sXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIEN1cnJlbnQgbmF2aWdhdGlvbiBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5PcmJpdENvbnRyb2xzfFRIUkVFLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHN9XG4gICAgICovXG4gICAgZ2V0Q29udHJvbCAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBzY2VuZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5TY2VuZX0gLSBDdXJyZW50IHNjZW5lIHdoaWNoIHRoZSB2aWV3ZXIgaXMgYnVpbHQgb25cbiAgICAgKi9cbiAgICBnZXRTY2VuZSAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgY2FtZXJhXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1RIUkVFLkNhbWVyYX0gLSBUaGUgc2NlbmUgY2FtZXJhXG4gICAgICovXG4gICAgZ2V0Q2FtZXJhICgpIHtcbiAgXG4gICAgICAgIHJldHVybiB0aGlzLmNhbWVyYTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgcmVuZGVyZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gLSBUaGUgcmVuZGVyZXIgdXNpbmcgd2ViZ2xcbiAgICAgKi9cbiAgICBnZXRSZW5kZXJlciAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBjb250YWluZXIgaG9sZHMgcmVuZGVyZXJkIGNhbnZhc1xuICAgICAqL1xuICAgIGdldENvbnRhaW5lciAoKSB7XG4gIFxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRyb2wgaWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIENvbnRyb2wgaWQuICdvcmJpdCcgb3IgJ2RldmljZS1vcmllbnRhdGlvbidcbiAgICAgKi9cbiAgICBnZXRDb250cm9sSWQgKCkge1xuICBcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC5pZDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBHZXQgbmV4dCBuYXZpZ2F0aW9uIGNvbnRyb2wgaWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIE5leHQgY29udHJvbCBpZFxuICAgICAqL1xuICAgIGdldE5leHRDb250cm9sSWQgKCkge1xuICBcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHNbIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpIF0uaWQ7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogR2V0IG5leHQgbmF2aWdhdGlvbiBjb250cm9sIGluZGV4XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBOZXh0IGNvbnRyb2wgaW5kZXhcbiAgICAgKi9cbiAgICBnZXROZXh0Q29udHJvbEluZGV4ICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5jb250cm9scztcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY29udHJvbHMuaW5kZXhPZiggY29udHJvbCApICsgMTtcbiAgXG4gICAgICAgIHJldHVybiAoIG5leHRJbmRleCA+PSBjb250cm9scy5sZW5ndGggKSA/IDAgOiBuZXh0SW5kZXg7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGZpZWxkIG9mIHZpZXcgb2YgY2FtZXJhXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZvdlxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDYW1lcmFGb3YgKCBmb3YgKSB7XG4gIFxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBFbmFibGUgY29udHJvbCBieSBpbmRleFxuICAgICAqIEBwYXJhbSAge0NPTlRST0xTfSBpbmRleCAtIEluZGV4IG9mIGNhbWVyYSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZUNvbnRyb2wgKCBpbmRleCApIHtcbiAgXG4gICAgICAgIGluZGV4ID0gKCBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5jb250cm9scy5sZW5ndGggKSA/IGluZGV4IDogMDtcbiAgXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XG4gIFxuICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmNvbnRyb2xzWyBpbmRleCBdO1xuICBcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZWQgPSB0cnVlO1xuICBcbiAgICAgICAgc3dpdGNoICggaW5kZXggKSB7XG4gIFxuICAgICAgICBjYXNlIENPTlRST0xTLk9SQklUOlxuICBcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoIHRoaXMucGFub3JhbWEucG9zaXRpb24gKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gMTtcbiAgXG4gICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgIGNhc2UgQ09OVFJPTFMuREVWSUNFT1JJRU5UQVRJT046XG4gIFxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xuICBcbiAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgZGVmYXVsdDpcbiAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuICBcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIGluZGV4LCB1bmRlZmluZWQgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGN1cnJlbnQgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlQ29udHJvbCAoKSB7XG4gIFxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IGZhbHNlO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBuZXh0IGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdG9nZ2xlTmV4dENvbnRyb2wgKCkge1xuICBcbiAgICAgICAgdGhpcy5lbmFibGVDb250cm9sKCB0aGlzLmdldE5leHRDb250cm9sSW5kZXgoKSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFNjcmVlbiBTcGFjZSBQcm9qZWN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldFNjcmVlblZlY3RvciAoIHdvcmxkVmVjdG9yICkge1xuICBcbiAgICAgICAgY29uc3QgdmVjdG9yID0gd29ybGRWZWN0b3IuY2xvbmUoKTtcbiAgICAgICAgY29uc3Qgd2lkdGhIYWxmID0gKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCApIC8gMjtcbiAgICAgICAgY29uc3QgaGVpZ2h0SGFsZiA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDI7XG4gIFxuICAgICAgICB2ZWN0b3IucHJvamVjdCggdGhpcy5jYW1lcmEgKTtcbiAgXG4gICAgICAgIHZlY3Rvci54ID0gKCB2ZWN0b3IueCAqIHdpZHRoSGFsZiApICsgd2lkdGhIYWxmO1xuICAgICAgICB2ZWN0b3IueSA9IC0gKCB2ZWN0b3IueSAqIGhlaWdodEhhbGYgKSArIGhlaWdodEhhbGY7XG4gICAgICAgIHZlY3Rvci56ID0gMDtcbiAgXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQ2hlY2sgU3ByaXRlIGluIFZpZXdwb3J0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNoZWNrU3ByaXRlSW5WaWV3cG9ydCAoIHNwcml0ZSApIHtcbiAgXG4gICAgICAgIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZS5jb3B5KCAgdGhpcy5jYW1lcmEubWF0cml4V29ybGQgICkuaW52ZXJ0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXgubXVsdGlwbHlNYXRyaWNlcyggdGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICk7XG4gICAgICAgIHRoaXMuY2FtZXJhRnJ1c3R1bS5zZXRGcm9tUHJvamVjdGlvbk1hdHJpeCggdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeCApO1xuICBcbiAgICAgICAgcmV0dXJuIHNwcml0ZS52aXNpYmxlICYmIHRoaXMuY2FtZXJhRnJ1c3R1bS5pbnRlcnNlY3RzU3ByaXRlKCBzcHJpdGUgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXZlcnNlRHJhZ2dpbmdEaXJlY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5yb3RhdGVTcGVlZCAqPSAtMTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqPSAtMTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBBZGQgcmV0aWNsZSBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUmV0aWNsZSAoKSB7XG4gIFxuICAgICAgICB0aGlzLnJldGljbGUgPSBuZXcgUmV0aWNsZSggMHhmZmZmZmYsIHRydWUsIHRoaXMub3B0aW9ucy5kd2VsbFRpbWUgKTtcbiAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYWRkKCB0aGlzLnJldGljbGUgKTtcbiAgICAgICAgdGhpcy5zY2VuZVJldGljbGUuYWRkKCB0aGlzLmNhbWVyYSApO1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yM30gdmVjdG9yIC0gVmVjdG9yIHRvIGJlIGxvb2tlZCBhdCB0aGUgY2VudGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0d2VlbkNvbnRyb2xDZW50ZXIgKCB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMuY29udHJvbCAhPT0gdGhpcy5PcmJpdENvbnRyb2xzICkge1xuICBcbiAgICAgICAgICAgIHJldHVybjtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIFBhc3MgaW4gYXJndW1lbnRzIGFzIGFycmF5XG4gICAgICAgIGlmICggdmVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gIFxuICAgICAgICAgICAgZHVyYXRpb24gPSB2ZWN0b3JbIDEgXTtcbiAgICAgICAgICAgIGVhc2luZyA9IHZlY3RvclsgMiBdO1xuICAgICAgICAgICAgdmVjdG9yID0gdmVjdG9yWyAwIF07XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBkdXJhdGlvbiA6IDEwMDA7XG4gICAgICAgIGVhc2luZyA9IGVhc2luZyB8fCBUV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0O1xuICBcbiAgICAgICAgbGV0IHNjb3BlLCBoYSwgdmEsIGNodiwgY3Z2LCBodiwgdnYsIHZwdGMsIG92LCBudjtcbiAgXG4gICAgICAgIHNjb3BlID0gdGhpcztcbiAgXG4gICAgICAgIGNodiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICk7XG4gICAgICAgIGN2diA9IGNodi5jbG9uZSgpO1xuICBcbiAgICAgICAgdnB0YyA9IHRoaXMucGFub3JhbWEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLnN1YiggdGhpcy5jYW1lcmEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XG4gIFxuICAgICAgICBodiA9IHZlY3Rvci5jbG9uZSgpO1xuICAgICAgICAvLyBTY2FsZSBlZmZlY3RcbiAgICAgICAgaHYueCAqPSAtMTtcbiAgICAgICAgaHYuYWRkKCB2cHRjICkubm9ybWFsaXplKCk7XG4gICAgICAgIHZ2ID0gaHYuY2xvbmUoKTtcbiAgXG4gICAgICAgIGNodi55ID0gMDtcbiAgICAgICAgaHYueSA9IDA7XG4gIFxuICAgICAgICBoYSA9IE1hdGguYXRhbjIoIGh2LnosIGh2LnggKSAtIE1hdGguYXRhbjIoIGNodi56LCBjaHYueCApO1xuICAgICAgICBoYSA9IGhhID4gTWF0aC5QSSA/IGhhIC0gMiAqIE1hdGguUEkgOiBoYTtcbiAgICAgICAgaGEgPSBoYSA8IC1NYXRoLlBJID8gaGEgKyAyICogTWF0aC5QSSA6IGhhO1xuICAgICAgICB2YSA9IE1hdGguYWJzKCBjdnYuYW5nbGVUbyggY2h2ICkgKyAoIGN2di55ICogdnYueSA8PSAwID8gdnYuYW5nbGVUbyggaHYgKSA6IC12di5hbmdsZVRvKCBodiApICkgKTtcbiAgICAgICAgdmEgKj0gdnYueSA8IGN2di55ID8gMSA6IC0xO1xuICBcbiAgICAgICAgb3YgPSB7IGxlZnQ6IDAsIHVwOiAwIH07XG4gICAgICAgIG52ID0geyBsZWZ0OiAwLCB1cDogMCB9O1xuICBcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24uc3RvcCgpO1xuICBcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcbiAgICAgICAgICAgIC50byggeyBsZWZ0OiBoYSB9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAuZWFzaW5nKCBlYXNpbmcgKVxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uKG92KXtcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9sLnJvdGF0ZUxlZnQoIG92LmxlZnQgLSBudi5sZWZ0ICk7XG4gICAgICAgICAgICAgICAgbnYubGVmdCA9IG92LmxlZnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gIFxuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcbiAgICAgICAgICAgIC50byggeyB1cDogdmEgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLmVhc2luZyggZWFzaW5nIClcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbihvdil7XG4gICAgICAgICAgICAgICAgc2NvcGUuY29udHJvbC5yb3RhdGVVcCggb3YudXAgLSBudi51cCApO1xuICAgICAgICAgICAgICAgIG52LnVwID0gb3YudXA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlciBieSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBPYmplY3QgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHR3ZWVuQ29udHJvbENlbnRlckJ5T2JqZWN0ICggb2JqZWN0LCBkdXJhdGlvbiwgZWFzaW5nICkge1xuICBcbiAgICAgICAgbGV0IGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gZmFsc2U7XG4gIFxuICAgICAgICBvYmplY3QudHJhdmVyc2VBbmNlc3RvcnMoIGZ1bmN0aW9uICggYW5jZXN0b3IgKSB7XG4gIFxuICAgICAgICAgICAgaWYgKCBhbmNlc3Rvci5zY2FsZVBsYWNlSG9sZGVyICkge1xuICBcbiAgICAgICAgICAgICAgICBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciA9IHRydWU7XG4gIFxuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gIFxuICAgICAgICBpZiAoIGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyICkge1xuICBcbiAgICAgICAgICAgIGNvbnN0IGludmVydFhWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggLTEsIDEsIDEgKTtcbiAgXG4gICAgICAgICAgICB0aGlzLnR3ZWVuQ29udHJvbENlbnRlciggb2JqZWN0LmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKS5tdWx0aXBseSggaW52ZXJ0WFZlY3RvciApLCBkdXJhdGlvbiwgZWFzaW5nICk7XG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIHRoaXMudHdlZW5Db250cm9sQ2VudGVyKCBvYmplY3QuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLCBkdXJhdGlvbiwgZWFzaW5nICk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBjYWxsZWQgd2hlbiB3aW5kb3cgc2l6ZSBpcyBjaGFuZ2VkXG4gICAgICogQGZpcmVzIFZpZXdlciN3aW5kb3ctcmVzaXplXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dXaWR0aF0gLSBTcGVjaWZ5IGlmIGN1c3RvbSBlbGVtZW50IGhhcyBjaGFuZ2VkIHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dIZWlnaHRdIC0gU3BlY2lmeSBpZiBjdXN0b20gZWxlbWVudCBoYXMgY2hhbmdlZCBoZWlnaHRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25XaW5kb3dSZXNpemUgKCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0ICkge1xuICBcbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gIFxuICAgICAgICBjb25zdCBleHBhbmQgPSB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jb250YWluZXInICkgfHwgdGhpcy5jb250YWluZXIuaXNGdWxsc2NyZWVuO1xuICBcbiAgICAgICAgaWYgKCB3aW5kb3dXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd0hlaWdodCAhPT0gdW5kZWZpbmVkICkge1xuICBcbiAgICAgICAgICAgIHdpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XG4gIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIGNvbnN0IGlzQW5kcm9pZCA9IC8oYW5kcm9pZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RXaWR0aCA9IGlzQW5kcm9pZCBcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdEhlaWdodCA9IGlzQW5kcm9pZCBcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSBcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgXG4gICAgICAgICAgICB3aWR0aCA9IGV4cGFuZCA/IGFkanVzdFdpZHRoIDogdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBleHBhbmQgPyBhZGp1c3RIZWlnaHQgOiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5faGVpZ2h0ID0gaGVpZ2h0O1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuICBcbiAgICAgICAgLy8gVXBkYXRlIHJldGljbGVcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xuICBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvKipcbiAgICAgICAgICogV2luZG93IHJlc2l6aW5nIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjd2luZG93LXJlc2l6ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggIC0gV2lkdGggb2YgdGhlIHdpbmRvd1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSB3aW5kb3dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnd2luZG93LXJlc2l6ZScsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xuICBcbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd3aW5kb3ctcmVzaXplJywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9ICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQWRkIG91dHB1dCBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZE91dHB1dEVsZW1lbnQgKCkge1xuICBcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJzEwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcxMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcbiAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50ID0gZWxlbWVudDtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgcG9zaXRpb24gaW4gZGV2ZWxvcGVyIGNvbnNvbGUgYnkgaG9sZGluZyBkb3duIEN0cmwgYnV0dG9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG91dHB1dFBvc2l0aW9uICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QoIHRoaXMucGFub3JhbWEsIHRydWUgKTtcbiAgXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xuICBcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gaW50ZXJzZWN0c1sgMCBdLnBvaW50LmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyggLTEsIDEsIDEgKTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0gdGhpcy5wYW5vcmFtYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICk7XG4gICAgICAgICAgICBwb2ludC5zdWIoIHdvcmxkICkubXVsdGlwbHkoIGNvbnZlcnRlciApO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LngudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55LnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgejogcG9pbnQuei50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7cG9zaXRpb24ueH0sICR7cG9zaXRpb24ueX0sICR7cG9zaXRpb24uen1gO1xuICBcbiAgICAgICAgICAgIGlmICggcG9pbnQubGVuZ3RoKCkgPT09IDAgKSB7IHJldHVybjsgfVxuICBcbiAgICAgICAgICAgIHN3aXRjaCAoIHRoaXMub3B0aW9ucy5vdXRwdXQgKSB7XG4gIFxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERpc3BhdGNoIHJheWNhc3QgcG9zaXRpb24gYXMgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjcG9zaXRpb24tb3V0cHV0XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwb3NpdGlvbi1vdXRwdXQnLCBwb3NpdGlvbjogcG9zaXRpb24gfSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNvbGUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyggbWVzc2FnZSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICBcbiAgICAgICAgICAgIGNhc2UgJ292ZXJsYXknOlxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogT24gbW91c2UgZG93blxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uTW91c2VEb3duICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAgICAgdGhpcy51c2VyTW91c2UueCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZS55ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbW91c2Vkb3duJztcbiAgICAgICAgdGhpcy5vblRhcCggZXZlbnQgKTtcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIG1vdXNlIG1vdmVcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZSAoIGV2ZW50ICkge1xuICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZW1vdmUnO1xuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIG1vdXNlIHVwXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Nb3VzZVVwICggZXZlbnQgKSB7XG4gIFxuICAgICAgICBsZXQgb25UYXJnZXQgPSBmYWxzZTtcbiAgXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbW91c2V1cCc7XG4gIFxuICAgICAgICBjb25zdCB0eXBlID0gKCB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueSA+PSBldmVudC5jbGllbnRZIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG4gICAgICAgICAgfHwgICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueCA+PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXG4gICAgICAgICAgJiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlIFxuICAgICAgICAgICYmIHRoaXMudXNlck1vdXNlLnkgPj0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxuICAgICAgICAgICYmIHRoaXMudXNlck1vdXNlLnkgPD0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSApIFxuICAgICAgICAgICAgPyAnY2xpY2snIDogdW5kZWZpbmVkO1xuICBcbiAgICAgICAgLy8gRXZlbnQgc2hvdWxkIGhhcHBlbiBvbiBjYW52YXNcbiAgICAgICAgaWYgKCBldmVudCAmJiBldmVudC50YXJnZXQgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jYW52YXMnICkgKSB7IHJldHVybjsgfVxuICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgICAgIGlmICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSAxICkge1xuICBcbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggeyBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIH0sIHR5cGUgKTtcbiAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggZXZlbnQsIHR5cGUgKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbm9uZSc7XG4gIFxuICAgICAgICBpZiAoIG9uVGFyZ2V0ICkgeyBcbiAgXG4gICAgICAgICAgICByZXR1cm47IFxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xuICBcbiAgICAgICAgICAgIGNvbnN0IHsgb3B0aW9uczogeyBhdXRvSGlkZUluZm9zcG90LCBhdXRvSGlkZUNvbnRyb2xCYXIgfSwgcGFub3JhbWEsIHRvZ2dsZUNvbnRyb2xCYXIgfSA9IHRoaXM7XG4gIFxuICAgICAgICAgICAgaWYgKCBhdXRvSGlkZUluZm9zcG90ICYmIHBhbm9yYW1hICkge1xuICBcbiAgICAgICAgICAgICAgICBwYW5vcmFtYS50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgaWYgKCBhdXRvSGlkZUNvbnRyb2xCYXIgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbnRyb2xCYXIoKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPbiB0YXAgZXZlbnkgZnJhbWVcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblRhcCAoIGV2ZW50LCB0eXBlICkge1xuICBcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyO1xuICBcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC54ID0gKCAoIGV2ZW50LmNsaWVudFggLSBsZWZ0ICkgLyBjbGllbnRXaWR0aCApICogMiAtIDE7XG4gICAgICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQueSA9IC0gKCAoIGV2ZW50LmNsaWVudFkgLSB0b3AgKSAvIGNsaWVudEhlaWdodCApICogMiArIDE7XG4gIFxuICAgICAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCB0aGlzLnJheWNhc3RlclBvaW50LCB0aGlzLmNhbWVyYSApO1xuICBcbiAgICAgICAgLy8gUmV0dXJuIGlmIG5vIHBhbm9yYW1hIFxuICAgICAgICBpZiAoICF0aGlzLnBhbm9yYW1hICkgeyBcbiAgXG4gICAgICAgICAgICByZXR1cm47IFxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gb3V0cHV0IGluZm9zcG90IGluZm9ybWF0aW9uXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gJ21vdXNlZG93bicgJiYgdGhpcy50b3VjaFN1cHBvcnRlZCB8fCB0aGlzLk9VVFBVVF9JTkZPU1BPVCApIHsgXG4gIFxuICAgICAgICAgICAgdGhpcy5vdXRwdXRQb3NpdGlvbigpOyBcbiAgXG4gICAgICAgIH1cbiAgXG4gIFxuICAgICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggdGhpcy5wYW5vcmFtYS5jaGlsZHJlbiwgdHJ1ZSApO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3RfZW50aXR5ID0gdGhpcy5nZXRDb252ZXJ0ZWRJbnRlcnNlY3QoIGludGVyc2VjdHMgKTtcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSA/IGludGVyc2VjdHNbMF0ub2JqZWN0IDogdW5kZWZpbmVkO1xuICBcbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xuICBcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0X2VudGl0eSAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID09PSBpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gdW5kZWZpbmVkO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xuICBcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QgPT09IGludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gdW5kZWZpbmVkO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xuICBcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2snLCBpbnRlcnNlY3RzOiBpbnRlcnNlY3RzLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIGludGVyc2VjdF9lbnRpdHkuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljay1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2snLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfSBlbHNlIHtcbiAgXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgaW50ZXJzZWN0czogaW50ZXJzZWN0cywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgIGlmICggKCB0aGlzLmhvdmVyT2JqZWN0ICYmIGludGVyc2VjdHMubGVuZ3RoID4gMCAmJiB0aGlzLmhvdmVyT2JqZWN0ICE9PSBpbnRlcnNlY3RfZW50aXR5IClcbiAgICAgICAgICB8fCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPT09IDAgKSApe1xuICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXJsZWF2ZScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5lbmQoKTtcbiAgXG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gdW5kZWZpbmVkO1xuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xuICBcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QgIT09IGludGVyc2VjdF9lbnRpdHkgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXJlbnRlcicsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCByZXRpY2xlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5zdGFydCggdGhpcy5vblRhcC5iaW5kKCB0aGlzLCBldmVudCwgJ2NsaWNrJyApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICE9IGludGVyc2VjdF9lbnRpdHkgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzT2JqZWN0ICE9IGludGVyc2VjdCApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSBpbnRlcnNlY3Q7XG4gIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RhcnQnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcicsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc21vdmUtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzbW92ZScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcbiAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICBpZiAoICFpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcbiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gSW5mb3Nwb3QgaGFuZGxlclxuICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90ID0gaW50ZXJzZWN0O1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICggdHlwZSA9PT0gJ2NsaWNrJyApIHtcbiAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gIFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XG4gIFxuICAgICAgICAgICAgdGhpcy5oaWRlSW5mb3Nwb3QoKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIEF1dG8gcm90YXRlXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgJiYgdGhpcy51c2VyTW91c2UudHlwZSAhPT0gJ21vdXNlbW92ZScgKSB7XG4gIFxuICAgICAgICAgICAgLy8gQXV0by1yb3RhdGUgaWRsZSB0aW1lclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgKTtcbiAgXG4gICAgICAgICAgICBpZiAoIHRoaXMuY29udHJvbCA9PT0gdGhpcy5PcmJpdENvbnRyb2xzICkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCB0aGlzLmVuYWJsZUF1dG9SYXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XHRcdFxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEdldCBjb252ZXJ0ZWQgaW50ZXJzZWN0XG4gICAgICogQHBhcmFtIHthcnJheX0gaW50ZXJzZWN0cyBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0Q29udmVydGVkSW50ZXJzZWN0ICggaW50ZXJzZWN0cyApIHtcbiAgXG4gICAgICAgIGxldCBpbnRlcnNlY3Q7XG4gIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xuICBcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0c1tpXS5kaXN0YW5jZSA+PSAwICYmIGludGVyc2VjdHNbaV0ub2JqZWN0ICYmICFpbnRlcnNlY3RzW2ldLm9iamVjdC5wYXNzVGhyb3VnaCApIHtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5LnBhc3NUaHJvdWdoICkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eS5wYXNzVGhyb3VnaCApIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldLm9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Q7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogSGlkZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlSW5mb3Nwb3QgKCkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLmluZm9zcG90ICkge1xuICBcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3Qub25Ib3ZlckVuZCgpO1xuICBcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3QgPSB1bmRlZmluZWQ7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGNvbnRyb2wgYmFyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWV3ZXIjY29udHJvbC1iYXItdG9nZ2xlXG4gICAgICovXG4gICAgdG9nZ2xlQ29udHJvbEJhciAoKSB7XG4gIFxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcbiAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2dnbGUgY29udHJvbCBiYXIgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcbiAgICAgICAgICovXG4gICAgICAgIGlmICggd2lkZ2V0ICkge1xuICBcbiAgICAgICAgICAgIHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjb250cm9sLWJhci10b2dnbGUnIH0gKTtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPbiBrZXkgZG93blxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICBcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ICYmIHRoaXMub3B0aW9ucy5vdXRwdXQgIT09ICdub25lJyAmJiBldmVudC5rZXkgPT09ICdDb250cm9sJyApIHtcbiAgXG4gICAgICAgICAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IHRydWU7XG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogT24ga2V5IHVwXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25LZXlVcCAoKSB7XG4gIFxuICAgICAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IGZhbHNlO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjb250cm9sIGFuZCBjYWxsYmFja3NcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcbiAgXG4gICAgICAgIFRXRUVOLnVwZGF0ZSgpO1xuICBcbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MuZm9yRWFjaCggZnVuY3Rpb24oIGNhbGxiYWNrICl7IGNhbGxiYWNrKCk7IH0gKTtcbiAgXG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcbiAgXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uKCBjaGlsZCApe1xuICAgICAgICAgICAgaWYgKCBjaGlsZCBpbnN0YW5jZW9mIEluZm9zcG90IFxuICAgICAgICAgICYmIGNoaWxkLmVsZW1lbnQgXG4gICAgICAgICAgJiYgKCB0aGlzLmhvdmVyT2JqZWN0ID09PSBjaGlsZCBcbiAgICAgICAgICAgIHx8IGNoaWxkLmVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnIFxuICAgICAgICAgICAgfHwgKGNoaWxkLmVsZW1lbnQubGVmdCAmJiBjaGlsZC5lbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKVxuICAgICAgICAgICAgfHwgKGNoaWxkLmVsZW1lbnQucmlnaHQgJiYgY2hpbGQuZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpICkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNoZWNrU3ByaXRlSW5WaWV3cG9ydCggY2hpbGQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblZlY3RvciggY2hpbGQuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRyYW5zbGF0ZUVsZW1lbnQoIHgsIHkgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogUmVuZGVyaW5nIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBSZW5kZXIgcmV0aWNsZSBsYXN0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbmRlciAoKSB7XG4gIFxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuICBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZVJldGljbGUsIHRoaXMuY2FtZXJhICk7XG4gICAgICAgIFxuICBcbiAgICAgICAgfSBlbHNlIHtcbiAgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmVSZXRpY2xlLCB0aGlzLmNhbWVyYSApO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIEFuaW1hdGVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYW5pbWF0ZSAoKSB7XG4gIFxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMuYW5pbWF0ZS5iaW5kKCB0aGlzICkgKTtcbiAgXG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBPbiBjaGFuZ2VcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25DaGFuZ2UgKCkge1xuICBcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBtb3VzZSBhbmQgdG91Y2ggZXZlbnQgb24gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cyAoKSB7XG4gIFxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBwYXNzaXZlOiBmYWxzZSB9O1xuICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgb3B0aW9ucyApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCdcdCAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIG9wdGlvbnMgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgb3B0aW9ucyApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgbW91c2UgYW5kIHRvdWNoIGV2ZW50IG9uIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cyAoKSB7XG4gIFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScgLCAgdGhpcy5IQU5ETEVSX01PVVNFX01PVkUsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0LCAgdGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnICAsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciByZXRpY2xlIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUmV0aWNsZUV2ZW50ICgpIHtcbiAgXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcbiAgXG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIHJldGljbGUgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5yZWdpc3RlclJldGljbGVFdmVudCAoKSB7XG4gIFxuICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XG4gIFxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHJldGljbGUgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlUmV0aWNsZUV2ZW50ICgpIHtcbiAgXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgKyB0aGlzLmNvbnRhaW5lci5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBjbGllbnRZID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcbiAgXG4gICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcbiAgICAgICAgdGhpcy5IQU5ETEVSX1RBUCA9IHRoaXMub25UYXAuYmluZCggdGhpcywgeyBjbGllbnRYLCBjbGllbnRZIH0gKTtcbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgY29udGFpbmVyIGFuZCB3aW5kb3cgbGlzdGVuZXJzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgKCkge1xuICBcbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XG4gIFxuICAgICAgICAvLyBLZXlib2FyZCBFdmVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLkhBTkRMRVJfS0VZX0RPV04sIHRydWUgKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcgICwgdGhpcy5IQU5ETEVSX0tFWV9VUFx0ICwgdHJ1ZSApO1xuICBcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzICgpIHtcbiAgXG4gICAgICAgIC8vIFJlc2l6ZSBFdmVudFxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScgLCB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSwgdHJ1ZSApO1xuICBcbiAgICAgICAgLy8gS2V5Ym9hcmQgRXZlbnRcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5IQU5ETEVSX0tFWV9ET1dOLCB0cnVlICk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5dXAnICAsIHRoaXMuSEFORExFUl9LRVlfVVAgICwgdHJ1ZSApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgYWxsIHNjZW5lIG9iamVjdHMgYW5kIGNsZWFyIGNhY2hlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2UgKCkge1xuICBcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24uc3RvcCgpO1xuICBcbiAgICAgICAgLy8gVW5yZWdpc3RlciBkb20gZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gIFxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlICggb2JqZWN0ICkge1xuICBcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gb2JqZWN0LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBQYW5vcmFtYSB8fCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcbiAgXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBudWxsO1xuICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICl7XG4gIFxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCAnZGlzcG9zZScgKTtcbiAgXG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCB0aGlzLnNjZW5lICk7XG4gIFxuICAgICAgICAvLyBkaXNwb3NlIHdpZGdldFxuICAgICAgICBpZiAoIHRoaXMud2lkZ2V0ICkge1xuICBcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIGNsZWFyIGNhY2hlXG4gICAgICAgIGlmICggVEhSRUUuQ2FjaGUgJiYgVEhSRUUuQ2FjaGUuZW5hYmxlZCApIHtcbiAgXG4gICAgICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xuICBcbiAgICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdmlld2VyIGJ5IGRpc3Bvc2luZyBhbmQgc3RvcHBpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCApO1x0XHRcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25QYW5vcmFtYURpc3Bvc2UgKCBwYW5vcmFtYSApIHtcbiAgICAgICAgaWYgKCBwYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVWaWRlb1dpZGdldCgpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoIHBhbm9yYW1hID09PSB0aGlzLnBhbm9yYW1hICkge1xuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIExvYWQgYWpheCBjYWxsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBiZSByZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgYWZ0ZXIgcmVxdWVzdCBjb21wbGV0ZXNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZEFzeW5jUmVxdWVzdCggdXJsLCBjYWxsYmFjayA9ICgpID0+IHt9ICkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayggZXZlbnQgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCAnR0VUJywgdXJsLCB0cnVlICk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCggbnVsbCApO1xuICBcbiAgICB9XG4gIFxuICAgIC8qKlxuICAgICAqIFZpZXcgaW5kaWNhdG9yIGluIHVwcGVyIGxlZnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkVmlld0luZGljYXRvciAoKSB7XG4gIFxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gIFxuICAgICAgICBmdW5jdGlvbiBsb2FkVmlld0luZGljYXRvciAoIGFzeW5jRXZlbnQgKSB7XG4gICAgICAgICAgICBpZiAoIGFzeW5jRXZlbnQubG9hZGVkID09PSAwICkgcmV0dXJuO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHZpZXdJbmRpY2F0b3JEaXYgPSBhc3luY0V2ZW50LnRhcmdldC5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLndpZHRoID0gc2NvcGUudmlld0luZGljYXRvclNpemUgKyAncHgnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5oZWlnaHQgPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSArICdweCc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUudG9wID0gJzEwcHgnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5sZWZ0ID0gJzEwcHgnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuaWQgPSAncGFub2xlbnMtdmlldy1pbmRpY2F0b3ItY29udGFpbmVyJztcbiAgXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHZpZXdJbmRpY2F0b3JEaXYgKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSB2aWV3SW5kaWNhdG9yRGl2LnF1ZXJ5U2VsZWN0b3IoICcjaW5kaWNhdG9yJyApO1xuICAgICAgICAgICAgY29uc3Qgc2V0SW5kaWNhdG9yRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5yYWRpdXMgPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSAqIDAuMjI1O1xuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgPSBzY29wZS5jYW1lcmEucm90YXRpb24ueSAtIFRIUkVFLk1hdGguZGVnVG9SYWQoIDkwICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuZm92QW5nbGUgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5jYW1lcmEuZm92ICkgO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlIC0gc2NvcGUuZm92QW5nbGUgLyAyO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0QW5nbGUgPSAtc2NvcGUuY3VycmVudFBhbm9BbmdsZSArIHNjb3BlLmZvdkFuZ2xlIC8gMjtcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5sZWZ0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5sZWZ0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5yaWdodFggPSBzY29wZS5yYWRpdXMgKiBNYXRoLmNvcyggc2NvcGUucmlnaHRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5yaWdodEFuZ2xlICk7XG4gICAgICAgICAgICAgICAgc2NvcGUuaW5kaWNhdG9yRCA9ICdNICcgKyBzY29wZS5sZWZ0WCArICcgJyArIHNjb3BlLmxlZnRZICsgJyBBICcgKyBzY29wZS5yYWRpdXMgKyAnICcgKyBzY29wZS5yYWRpdXMgKyAnIDAgMCAxICcgKyBzY29wZS5yaWdodFggKyAnICcgKyBzY29wZS5yaWdodFk7XG4gIFxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubGVmdFggJiYgc2NvcGUubGVmdFkgJiYgc2NvcGUucmlnaHRYICYmIHNjb3BlLnJpZ2h0WSAmJiBzY29wZS5yYWRpdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5zZXRBdHRyaWJ1dGUoICdkJywgc2NvcGUuaW5kaWNhdG9yRCApO1xuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgICAgICAgIHNjb3BlLmFkZFVwZGF0ZUNhbGxiYWNrKCBzZXRJbmRpY2F0b3JEICk7XG4gIFxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yT25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICBcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIFxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JPbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gIFxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICBcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIGluZGljYXRvck9uTW91c2VFbnRlciApO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIGluZGljYXRvck9uTW91c2VMZWF2ZSApO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLmxvYWRBc3luY1JlcXVlc3QoIERhdGFJbWFnZS5WaWV3SW5kaWNhdG9yLCBsb2FkVmlld0luZGljYXRvciApO1xuICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY3VzdG9tIGNvbnRyb2wgaXRlbSB0byBleGlzdGluZyBjb250cm9sIGJhclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uPXt9XSAtIFN0eWxlIG9iamVjdCB0byBvdmVyd2lydGUgZGVmYXVsdCBlbGVtZW50IHN0eWxlLiBJdCB0YWtlcyAnc3R5bGUnLCAnb25UYXAnIGFuZCAnZ3JvdXAnIHByb3BlcnRpZXMuXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFwcGVuZENvbnRyb2xJdGVtICggb3B0aW9uICkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy53aWRnZXQuY3JlYXRlQ3VzdG9tSXRlbSggb3B0aW9uICk7XHRcdFxuICAgICAgICBpZiAoIG9wdGlvbi5ncm91cCA9PT0gJ3ZpZGVvJyApIHtcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LnZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aWRnZXQuYmFyRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xuICAgICAgICB9XG4gIFxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cbiAgXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIGNhY2hlZCBmaWxlc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhckFsbENhY2hlKCkge1xuICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xuICAgIH1cblxufTtcblxuZXhwb3J0IHsgVmlld2VyIH07IiwiaW1wb3J0IHsgVEhSRUVfUkVWSVNJT04gfSBmcm9tICcuL0NvbnN0YW50cyc7XG5cbmlmICggVEhSRUUuUkVWSVNJT04gIT0gVEhSRUVfUkVWSVNJT04gKSB7XG5cbiAgICBjb25zb2xlLndhcm4oIGB0aHJlZS5qcyB2ZXJzaW9uIGlzIG5vdCBtYXRjaGVkLiBQbGVhc2UgY29uc2lkZXIgdXNlIHRoZSB0YXJnZXQgcmV2aXNpb24gJHtUSFJFRV9SRVZJU0lPTn1gICk7XG5cbn0iLCIvKipcbiAqIFBhbm9sZW5zLmpzXG4gKiBAYXV0aG9yIHBjaGVuNjZcbiAqIEBuYW1lc3BhY2UgUEFOT0xFTlNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9Db25zdGFudHMnO1xuZXhwb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi9EYXRhSW1hZ2UnO1xuZXhwb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvSW1hZ2VMb2FkZXInO1xuZXhwb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcbmV4cG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyJztcbmV4cG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYS9NZWRpYSc7XG5leHBvcnQgeyBSZXRpY2xlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUmV0aWNsZSc7XG5leHBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xuZXhwb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQvV2lkZ2V0JztcbmV4cG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9QYW5vcmFtYSc7XG5leHBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9JbWFnZVBhbm9yYW1hJztcbmV4cG9ydCB7IEVtcHR5UGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0VtcHR5UGFub3JhbWEnO1xuZXhwb3J0IHsgQ3ViZVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9DdWJlUGFub3JhbWEnO1xuZXhwb3J0IHsgQmFzaWNQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQmFzaWNQYW5vcmFtYSc7XG5leHBvcnQgeyBWaWRlb1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hJztcbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hJztcbmV4cG9ydCB7IExpdHRsZVBsYW5ldCB9IGZyb20gJy4vcGFub3JhbWEvTGl0dGxlUGxhbmV0JztcbmV4cG9ydCB7IEltYWdlTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldCc7XG5leHBvcnQgeyBDYW1lcmFQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQ2FtZXJhUGFub3JhbWEnO1xuZXhwb3J0IHsgVmlld2VyIH0gZnJvbSAnLi92aWV3ZXIvVmlld2VyJztcbmltcG9ydCAnLi9DaGVjayc7XG5cbi8vIGV4cG9zZSBUV0VFTlxuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcbndpbmRvdy5UV0VFTiA9IFRXRUVOOyJdLCJuYW1lcyI6WyJUV0VFTiJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZLE1BQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1ksTUFBQyxPQUFPLEdBQUcsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZLE1BQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZLE1BQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNZLE1BQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEdBQUc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWSxNQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUc7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDNUM7QUFDQSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNiLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNiLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRDtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN6QjtBQUNBLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2QixFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDcEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDL0M7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDL0IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEQsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNYO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzdCO0FBQ0EsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2QixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ2hEO0FBQ0EsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDckI7QUFDQSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxJQUFJO0FBQ0o7QUFDQSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlFO0FBQ0EsR0FBRyxNQUFNO0FBQ1Q7QUFDQSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNkLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELElBQUk7QUFDSjtBQUNBLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2QsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLElBQUk7QUFDSjtBQUNBLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7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LFFBQVEsR0FBRztBQUN6QztBQUNBLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQzdDO0FBQ0E7QUFDQSxRQUFRLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNuRCxRQUFRLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUMvQztBQUNBLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM3QjtBQUNBLEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxRQUFRLEdBQUc7QUFDdkM7QUFDQSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM3QztBQUNBO0FBQ0EsUUFBUSxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDbkQsUUFBUSxTQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQzdDO0FBQ0EsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQzdCO0FBQ0EsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLE1BQU0sRUFBRSxNQUFNLEdBQUc7QUFDM0M7QUFDQSxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDL0Y7QUFDQSxRQUFRLEtB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QUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUN6RSxZQUFZLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDMUQ7QUFDQSxZQUFZLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3hDLFlBQVksVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDMUQ7QUFDQSxZQUFZLEtBQUssVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDcEM7QUFDQSxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUNwRSxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMxQyxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3REO0FBQ0EsYUFBYSxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDM0M7QUFDQSxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUNwRSxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMxQyxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3REO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsWUFBWSxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFB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QUMsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUMvQztBQUNBO0FBQ0EsUUFBUSxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ2hELFFBQVEsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztBQUMxQztBQUNBLFFBQVEsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNsRSxRQUFRLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDcEMsUUFBUSxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEQ7QUFDQSxRQUFRLElBQUksSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDdEQsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDO0FBQ0EsUUFBUSxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QyxRQUFRLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzFDO0FBQ0EsUUFBUSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsRTtBQUNBLFlBQVksTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUMvQyxZQUFZLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFF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RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCO0FBQ0EsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCO0FBQ0EsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25FLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDbEQsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ25ELFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMzRyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDO0FBQ0EsUUFB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
