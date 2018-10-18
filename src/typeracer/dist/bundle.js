/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typeracer/typeracer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./typeracer/generate.js":
/*!*******************************!*\
  !*** ./typeracer/generate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction generateText() {\n  const texts = ['Ежедневно делайте зарядку и различные физические упражнения. Развивайте своё тело и дух.',\n    'Будьте благодарны Вселенной за каждый прожитый день.',\n    'Любите себя таким, какой вы есть, со всеми достоинствами и недостатками',\n    'Верьте только в самое лучшее и тогда в вашей жизни станет ещё больше приятных сюрпризов и хорошего настроения',\n    'Прочтите как можно больше биографий великих людей',\n    'Планируйте предстоящий день. Выделяйте наиболее приоритетные задачи, которые необходимо выполнить в первую очередь',\n    'Определите, что сейчас в жизни для вас наиболее важно и развивайтесь в этом направлении',\n    'Откажитесь от употребления алкоголя', 'Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды',\n    'Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды',\n    'Каждый день отмечайте для себя, насколько далеко вы продвинулись к своей цели. Помните, что каждый новый день - это шаг вперёд',\n    'Найдите для себя наставника. Учитесь у того, кто уже находится там, куда вы только стремитесь',\n    'Просыпайтесь в 6 утра. Утром можно успеть сделать гораздо больше дел, чем в течение дня, особенно, если вы творческий человек',\n    'Забудьте о своих недостатках. Вместо этого сосредоточьтесь на своих достоинствах',\n    'Ежемесячно откладывайте от 10 % от своего дохода. Инвестируйте в своё будущее',\n    'Контролируйте свои эмоции. Старайтесь как можно чаще улыбаться и быть в отличном настроении'];\n  const RandomNumber = Math.round(Math.random() * (15) + 1);\n\n  document.getElementById('task').textContent = texts[RandomNumber];\n  return texts[RandomNumber];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateText);\n\n\n//# sourceURL=webpack:///./typeracer/generate.js?");

/***/ }),

/***/ "./typeracer/typeracer.js":
/*!********************************!*\
  !*** ./typeracer/typeracer.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate */ \"./typeracer/generate.js\");\n\n\nfunction test() { return false; }\ndocument.onselectstart = test;\n\nlet text;\nlet c;\nlet t;\nlet sc;\nlet st;\nlet speed;\nlet lifes;\nlet inputCount = 0;\nlet isPaused = true;\n\nfunction newGame() {\n  document.getElementById('alreadytext').textContent = '';\n  setTimeout(settime('3...'), 1000);\n  setTimeout(settime('2...'), 2000);\n  setTimeout(settime('1...'), 3000);\n  setTimeout(startGame, 4000);\n}\n\nfunction speedTimer() {\n  if (!isPaused) {\n    speed = inputCount / sc * 60;\n    document.getElementById('speed_timer').value = speed.toFixed(2);\n    sc += 3;\n    st = setTimeout(speedTimer, 3000);\n  }\n}\n\nfunction timedCount() {\n  if (!isPaused) {\n    if (c >= 0) {\n      if (c < 10) {\n        document.getElementById('timer').style.color = 'red';\n        const fontsize = getComputedStyle(document.getElementById('timer')).fontSize;\n\n        document.getElementById('timer').style.fontSize = `${parseInt(fontsize, 2) + 1}px`;\n      }\n      document.getElementById('timer').textContent = c;\n      c--;\n      t = setTimeout(timedCount, 1000);\n    } else if (confirm('Начать заново?')) {\n      newGame();\n    }\n  }\n}\n\nfunction startTimer() {\n  if (isPaused) {\n    isPaused = false;\n    timedCount();\n    speedTimer();\n  }\n}\n\nfunction startGame() {\n  text = Object(_generate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  currentLength = 0;\n  lifes = 3;\n  inputCount = 0;\n  sc = 0; speed = 0;\n  initializeHTML();\n  startTimer();\n  speedTimer();\n}\n\nfunction settime(txt) {\n  document.getElementById('task').textContent = txt;\n}\n\n\nfunction stopTimer() {\n  clearTimeout(t);\n  clearTimeout(st);\n  isPaused = true;\n}\n\nfunction initializeHTML() {\n  document.getElementById('records').innerText = document.cookie;\n  for (let i = 0; i < lifes; i++) {\n    if (!document.getElementById(`life${i + 1}`)) {\n      const div = document.createElement('div');\n\n      div.className = 'life_icon';\n      div.id = `life${i + 1}`;\n      document.getElementById('lb').appendChild(div);\n    }\n  }\n  document.getElementById('timer_block').style.visibility = 'visible';\n  document.getElementById('pause_Button').style.visibility = 'visible';\n  document.getElementById('intext').value = '';\n  document.getElementById('intext').disabled = false;\n  c = document.getElementById('task').textContent.length;\n}\n\n\nfunction pauseGame() {\n  console.log('test');\n  if (!isPaused) {\n    stopTimer();\n    document.getElementById('pause_Button').textContent = 'Продолжить';\n    document.getElementById('intext').disabled = true;\n  } else {\n    document.getElementById('pause_Button').textContent = 'Пауза';\n    document.getElementById('intext').disabled = false;\n    startTimer();\n  }\n}\n\nfunction endGame() {\n  stopTimer();\n  document.cookie += speed.toFixed(2);\n  alert('Поздравляем!');\n}\n\nlet currentLength;\n\nfunction check() {\n  if (document.getElementById('intext').value.length > currentLength) {\n    inputCount++;\n  }\n  currentLength = document.getElementById('intext').value.length;\n  if (document.getElementById('intext').value === text) {\n    win();\n  } else if (document.getElementById('intext').value[document.getElementById('intext').value.length - 1] === text[document.getElementById('intext').value.length - 1]) {\n    document.getElementById('intext').style.borderColor = 'gray';\n    document.getElementById('alreadytext').textContent = document.getElementById('intext').value;\n    document.getElementById('task').textContent = text.substr(document.getElementById('alreadytext').textContent.length, text.length - document.getElementById('alreadytext').textContent.length);\n  } else {\n    error();\n  }\n}\n\nfunction win() {\n  document.getElementById('alreadytext').textContent = document.getElementById('intext').value;\n  document.getElementById('task').textContent = '';\n  document.getElementById('intext').style.borderColor = 'green';\n  endGame();\n}\n\nfunction error() {\n  document.getElementById('intext').style.borderColor = 'red';\n  if (lifes > 0) {\n    document.getElementById('lb').removeChild(document.getElementById(`life${lifes}`));\n  } else {\n    document.getElementById('intext').disabled = true;\n    stopTimer();\n    if (confirm('Вы проиграли:( Начать заново?')) {\n      newGame();\n    }\n  }\n  lifes--;\n}\n\ndocument.getElementById('new_game_Button').onclick = () => { newGame(); };\ndocument.getElementById('pause_Button').onclick = () => { pauseGame(); };\ndocument.getElementById('intext').oninput = () => { check(); };\n\n\n//# sourceURL=webpack:///./typeracer/typeracer.js?");

/***/ })

/******/ });