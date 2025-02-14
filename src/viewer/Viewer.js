import { MODES, CONTROLS } from '../Constants';
import { OrbitControls } from '../lib/controls/OrbitControls';
import { DeviceOrientationControls } from '../lib/controls/DeviceOrientationControls';
import { CardboardEffect } from '../lib/effects/CardboardEffect';
import { StereoEffect } from '../lib/effects/StereoEffect';
import { Widget } from '../widget/Widget';
import { Reticle } from '../interface/Reticle';
import { Infospot } from '../infospot/Infospot';
import { DataImage } from '../DataImage';
import { Panorama } from '../panorama/Panorama';
import { VideoPanorama } from '../panorama/VideoPanorama';
import { CameraPanorama } from '../panorama/CameraPanorama';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

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
        this.tweenLeftAnimation = new TWEEN.Tween();
        this.tweenUpAnimation = new TWEEN.Tween();
  
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
  
        default:
  
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
        easing = easing || TWEEN.Easing.Exponential.Out;
  
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
  
        this.tweenLeftAnimation = new TWEEN.Tween( ov )
            .to( { left: ha }, duration )
            .easing( easing )
            .onUpdate(function(ov){
                scope.control.rotateLeft( ov.left - nv.left );
                nv.left = ov.left;
            })
            .start();
  
        this.tweenUpAnimation = new TWEEN.Tween( ov )
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
  
            default:
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
  
        TWEEN.update();
  
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
                scope.currentPanoAngle = scope.camera.rotation.y - THREE.MathUtils.degToRad( 90 );
                scope.fovAngle = THREE.MathUtils.degToRad( scope.camera.fov ) ;
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

};

export { Viewer };