/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/style.css?");

/***/ }),

/***/ "./src/Camera.ts":
/*!***********************!*\
  !*** ./src/Camera.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/util.ts\");\nclass Camera {\n    x;\n    y;\n    maxX;\n    maxY;\n    minX;\n    minY;\n    constructor(x, y, minX, maxX, minY, maxY, canvas) {\n        this.x = x;\n        this.y = y;\n        this.maxX = -minX;\n        this.maxY = -minY;\n        this.minX = -maxX - canvas.width / 2;\n        this.minY = -maxY - canvas.height / 2;\n    }\n    /**\n     * Adjusts the camera's position to focus on a specific coordinate point.\n     *\n     * This method smoothly updates the camera's position using linear interpolation\n     * (lerp) to approach the specified target coordinates (x, y). It also ensures\n     * that the camera remains within the specified boundaries defined by minX, minY,\n     * maxX, and maxY.\n     *\n     * @param x - The target X-coordinate to focus on.\n     * @param y - The target Y-coordinate to focus on.\n     * @returns {void}\n     */\n    lookAt(x, y) {\n        this.x = (0, util_1.constrain)((0, util_1.lerp)(this.x, x, 0.1), this.minX, this.maxX);\n        this.y = (0, util_1.constrain)((0, util_1.lerp)(this.y, y, 0.1), this.minY, this.maxY);\n    }\n}\nexports[\"default\"] = Camera;\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/Camera.ts?");

/***/ }),

/***/ "./src/Circle.ts":
/*!***********************!*\
  !*** ./src/Circle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Circle {\n    x;\n    y;\n    radius;\n    constructor(x, y, radius) {\n        this.x = x;\n        this.y = y;\n        this.radius = radius;\n    }\n}\nexports[\"default\"] = Circle;\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/Circle.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Circle_1 = __importDefault(__webpack_require__(/*! ./Circle */ \"./src/Circle.ts\"));\nlet assets;\nconst HALF_PI = Math.PI * 0.5;\nclass Player extends Circle_1.default {\n    angle;\n    hitpoints;\n    knockback;\n    movementSpeed;\n    punchAnimationOffset;\n    punchSide;\n    punchSpeed;\n    swingAnimationOffset;\n    swingDelay;\n    swingDirection;\n    swingSpeed;\n    weaponIndex;\n    worldXMax;\n    worldXMin;\n    worldYMax;\n    worldYMin;\n    xVelocity;\n    yVelocity;\n    #maxSwingAngle = Math.PI;\n    #constSwingDelay = 90;\n    constructor(x, y) {\n        super(x, y, 19);\n        this.angle = 0;\n        this.hitpoints = 3;\n        this.knockback = 0.5;\n        this.movementSpeed = 2;\n        this.punchAnimationOffset = 0;\n        this.punchSide = false;\n        this.punchSpeed = 0.3333;\n        this.swingAnimationOffset = 0;\n        this.swingDelay = 0;\n        this.swingDirection = false;\n        this.swingSpeed = 6;\n        this.weaponIndex = 0;\n        this.xVelocity = 0;\n        this.yVelocity = 0;\n    }\n    bindEventListeners(canvas) {\n        canvas.onmousemove = (event) => {\n            this.angle =\n                Math.atan2(event.offsetY - this.y, event.offsetX - this.x) +\n                    Math.PI / 2;\n        };\n    }\n    setWorldBounds(worldXMin, worldXMax, worldYMin, worldYMax) {\n        this.worldXMin = worldXMin;\n        this.worldXMax = worldXMax;\n        this.worldYMin = worldYMin;\n        this.worldYMax = worldYMax;\n    }\n    update(camera, mouseX, mouseY, keys, walls) {\n        this.angle =\n            Math.atan2(mouseY - this.y - camera.y, mouseX - this.x - camera.x) +\n                HALF_PI;\n        this.xVelocity = 0;\n        this.yVelocity = 0;\n        if (keys[49]) {\n            this.weaponIndex = 0;\n        }\n        else if (keys[50]) {\n            this.weaponIndex = 1;\n        }\n        if (keys[65]) {\n            this.xVelocity -= this.movementSpeed;\n        }\n        if (keys[87]) {\n            this.xVelocity += this.movementSpeed;\n        }\n        if (keys[83]) {\n            this.yVelocity -= this.movementSpeed;\n        }\n        if (keys[68]) {\n            this.yVelocity += this.movementSpeed;\n        }\n        this.x += this.xVelocity;\n        this.y += this.yVelocity;\n        // World boundaries\n        if (this.x < this.worldXMin + this.radius) {\n            this.x = this.worldXMin + this.radius;\n        }\n        else if (this.x > this.worldXMax - this.radius) {\n            this.x = this.worldXMax - this.radius;\n        }\n        if (this.y < this.worldYMin + this.radius) {\n            this.y = this.worldYMin + this.radius;\n        }\n        else if (this.y > this.worldYMax - this.radius) {\n            this.y = this.worldYMax - this.radius;\n        }\n        // Walls\n        walls.forEach((wall) => wall.resolveCircleCollision(this));\n    }\n    render(ctx, assets) {\n        ctx.save();\n        ctx.translate(this.x, this.y);\n        ctx.rotate(this.angle);\n        switch (this.weaponIndex) {\n            default:\n                ctx.fillStyle = `rgb(245, 216, 166)`;\n                ctx.strokeStyle = \"#000\";\n                ctx.lineWidth = 3;\n                if (this.punchSide) {\n                    ctx.beginPath();\n                    ctx.ellipse(12, -16 - this.punchAnimationOffset, 6, 6, 0, 0, Math.PI * 2);\n                    ctx.closePath();\n                    ctx.fill();\n                    ctx.stroke();\n                    ctx.beginPath();\n                    ctx.ellipse(-12, -16, 6, 6, 0, 0, Math.PI * 2);\n                    ctx.closePath();\n                    ctx.fill();\n                    ctx.stroke();\n                }\n                else {\n                    ctx.beginPath();\n                    ctx.ellipse(12, -16, 6, 6, 0, 0, Math.PI * 2);\n                    ctx.closePath();\n                    ctx.fill();\n                    ctx.stroke();\n                    ctx.beginPath();\n                    ctx.ellipse(-12, -16 - this.punchAnimationOffset, 6, 6, 0, 0, Math.PI * 2);\n                    ctx.closePath();\n                    ctx.fill();\n                    ctx.stroke();\n                }\n                ctx.drawImage(assets.player_body, -this.radius, -this.radius);\n        }\n        ctx.restore();\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/Player.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Camera_1 = __importDefault(__webpack_require__(/*! ./Camera */ \"./src/Camera.ts\"));\nconst Player_1 = __importDefault(__webpack_require__(/*! ./Player */ \"./src/Player.ts\"));\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n// Set up globals\nlet assets = {};\nconst palette = {\n    player_skin_tone: [245, 216, 166],\n    asset_background: [0, 0, 0, 0],\n};\n// Create canvas\nconst gameWrapper = document.getElementById(\"game-wrapper\");\nconst canvas = document.createElement(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 600;\ncanvas.height = 600;\ngameWrapper.appendChild(canvas);\n// Setup player\nconst player = new Player_1.default(300, 300);\nplayer.bindEventListeners(canvas);\nlet scene;\nlet shake = 0;\nconst camera = new Camera_1.default(0, 0, 0, 1200, 0, 1200, canvas);\nfunction game() {\n    // Render objects\n    ctx.save();\n    ctx.translate((camera.x + shake * Math.random()) | 0, (camera.y + shake * Math.random()) | 0);\n    if (shake) {\n        shake *= shake > 1 ? 0.8 : 0;\n    }\n    ctx.drawImage(assets.background, 0, 0);\n    player.render(ctx, assets);\n    ctx.restore();\n    // Update game state\n    camera.lookAt(player.x, player.y);\n}\nlet loadAssets = (function () {\n    let assetsToLoad = {\n        background() {\n            let capturedCanvas = document.createElement(\"canvas\");\n            capturedCanvas.width = 1200;\n            capturedCanvas.height = 1200;\n            let capturedCtx = capturedCanvas.getContext(\"2d\");\n            capturedCtx.fillStyle = \"rgb(31, 105, 27)\";\n            capturedCtx.strokeStyle = \"rgb(21, 84, 17)\";\n            for (let i = 0; i < 30; i++) {\n                for (let j = 0; j < 30; j++) {\n                    capturedCtx.fillRect(j * 44, i * 44, 44, 44);\n                    capturedCtx.strokeRect(j * 44, i * 44, 44, 44);\n                }\n            }\n            return capturedCanvas;\n        },\n        crate() {\n            ctx.fillStyle = `rgb(${palette.asset_background.join(\",\")})`;\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n            ctx.strokeStyle = \"rgb(94, 54, 14)\";\n            ctx.lineWidth = 3;\n            ctx.fillStyle = \"rgb(158, 117, 76)\";\n            ctx.fillStyle = \"rgb(158, 117, 76)\";\n            ctx.fillRect(1, 1, 61, 61);\n            ctx.strokeRect(1, 1, 61, 61);\n            ctx.fillRect(12, 12, 40, 40);\n            ctx.strokeRect(12, 12, 40, 40);\n            ctx.fillRect(12, 12, 10, 40);\n            ctx.strokeRect(12, 12, 10, 40);\n            ctx.fillRect(22, 12, 10, 40);\n            ctx.strokeRect(22, 12, 10, 40);\n            ctx.fillRect(32, 12, 10, 40);\n            ctx.strokeRect(32, 12, 10, 40);\n            // Draw lines on the canvas\n            ctx.beginPath();\n            ctx.moveTo(3, 3);\n            ctx.lineTo(12, 12);\n            ctx.stroke();\n            ctx.beginPath();\n            ctx.moveTo(60, 60);\n            ctx.lineTo(51, 51);\n            ctx.stroke();\n            ctx.beginPath();\n            ctx.moveTo(60, 3);\n            ctx.lineTo(51, 12);\n            ctx.stroke();\n            ctx.beginPath();\n            ctx.moveTo(3, 60);\n            ctx.lineTo(12, 51);\n            ctx.stroke();\n            return (0, util_1.get)(canvas, 0, 0, 64, 64);\n        },\n        player_body() {\n            ctx.fillStyle = `rgb(${palette.asset_background.join(\",\")})`;\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n            ctx.strokeStyle = \"#000\";\n            ctx.lineWidth = 3;\n            ctx.fillStyle = `rgb(${palette.player_skin_tone.join(\",\")})`;\n            ctx.beginPath();\n            ctx.ellipse(19, 19, 34 / 2, 34 / 2, 0, 0, Math.PI * 2);\n            ctx.closePath();\n            ctx.fill();\n            ctx.stroke();\n            ctx.fillStyle = \"#000\";\n            ctx.beginPath();\n            ctx.ellipse(14, 18, 7 / 2, 7 / 2, 0, 0, Math.PI * 2);\n            ctx.closePath();\n            ctx.fill();\n            ctx.beginPath();\n            ctx.ellipse(26, 18, 7 / 2, 7 / 2, 0, 0, Math.PI * 2);\n            ctx.closePath();\n            ctx.fill();\n            return (0, util_1.get)(canvas, 0, 0, 38, 38);\n        },\n    };\n    let index = 0;\n    let keys = Object.keys(assetsToLoad);\n    return function () {\n        if (index < keys.length) {\n            let key = keys[index++];\n            assets[key] = assetsToLoad[key]();\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n        }\n        else {\n            scene = game;\n        }\n    };\n})();\nscene = loadAssets;\nconst FPS = 60;\nconst FRAME_TIME = 1000 / FPS;\nlet then = window.performance.now();\nconst startTime = then;\nlet frameCount = 0;\nfunction animationLoop(now) {\n    requestAnimationFrame(animationLoop);\n    let elapsed = now - then;\n    if (elapsed > FRAME_TIME) {\n        then = now - (elapsed % FRAME_TIME);\n        const __frameRate = (1000 * ++frameCount) / (now - startTime);\n        console.log(`__frameRate: ${__frameRate.toFixed(3)}`);\n        scene();\n    }\n}\nrequestAnimationFrame(animationLoop);\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/app.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.get = exports.constrain = exports.slerp = exports.lerp = void 0;\n/**\n * Linearly interpolates between two numbers.\n *\n * @param {number} oldValue - The starting value.\n * @param {number} newValue - The ending value.\n * @param {number} amount - The interpolation factor, a value within the range [0, 1].\n * @returns {number} - The interpolated number between oldValue and newValue.\n */\nfunction lerp(oldValue, newValue, amount) {\n    return (newValue - oldValue) * amount + oldValue;\n}\nexports.lerp = lerp;\n/**\n * Performs spherical linear interpolation (slerp) between two angles.\n *\n * @param {number} startAngle - The starting angle in degrees.\n * @param {number} endAngle - The ending angle in degrees.\n * @param {number} t - The interpolation factor, a value between 0 and 1.\n * @returns {number} - The interpolated angle in degrees.\n */\nfunction slerp(startAngle, endAngle, t) {\n    // Ensure angles are within the range [0, 360)\n    startAngle = ((startAngle % 360) + 360) % 360;\n    endAngle = ((endAngle % 360) + 360) % 360;\n    // Calculate the angular difference while considering wrap-around\n    let angleDiff = endAngle - startAngle;\n    if (angleDiff > 180) {\n        angleDiff -= 360;\n    }\n    else if (angleDiff < -180) {\n        angleDiff += 360;\n    }\n    // Perform spherical linear interpolation\n    return startAngle + angleDiff * t;\n}\nexports.slerp = slerp;\n/**\n * Constrains a value to be within a specified range.\n *\n * @param {number} value - The value to be constrained.\n * @param {number} min - The minimum allowable value.\n * @param {number} max - The maximum allowable value.\n * @returns {number} - The constrained value.\n */\nfunction constrain(value, min, max) {\n    return value > max ? max : value < min ? min : value;\n}\nexports.constrain = constrain;\nfunction get(canvas, x, y, width, height) {\n    // Create a new canvas to store the captured portion\n    let capturedCanvas = document.createElement(\"canvas\");\n    capturedCanvas.width = width;\n    capturedCanvas.height = height;\n    // Get the 2D rendering context of the new canvas\n    let capturedCtx = capturedCanvas.getContext(\"2d\");\n    // Copy the specified portion of the source canvas to the new canvas\n    capturedCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);\n    return capturedCanvas;\n}\nexports.get = get;\n\n\n//# sourceURL=webpack://sorcerers-sonata/./src/util.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;