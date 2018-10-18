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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateText() {
  const texts = ['Ежедневно делайте зарядку и различные физические упражнения. Развивайте своё тело и дух.',
    'Будьте благодарны Вселенной за каждый прожитый день.',
    'Любите себя таким, какой вы есть, со всеми достоинствами и недостатками',
    'Верьте только в самое лучшее и тогда в вашей жизни станет ещё больше приятных сюрпризов и хорошего настроения',
    'Прочтите как можно больше биографий великих людей',
    'Планируйте предстоящий день. Выделяйте наиболее приоритетные задачи, которые необходимо выполнить в первую очередь',
    'Определите, что сейчас в жизни для вас наиболее важно и развивайтесь в этом направлении',
    'Откажитесь от употребления алкоголя', 'Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды',
    'Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды',
    'Каждый день отмечайте для себя, насколько далеко вы продвинулись к своей цели. Помните, что каждый новый день - это шаг вперёд',
    'Найдите для себя наставника. Учитесь у того, кто уже находится там, куда вы только стремитесь',
    'Просыпайтесь в 6 утра. Утром можно успеть сделать гораздо больше дел, чем в течение дня, особенно, если вы творческий человек',
    'Забудьте о своих недостатках. Вместо этого сосредоточьтесь на своих достоинствах',
    'Ежемесячно откладывайте от 10 % от своего дохода. Инвестируйте в своё будущее',
    'Контролируйте свои эмоции. Старайтесь как можно чаще улыбаться и быть в отличном настроении'];
  const RandomNumber = Math.round(Math.random() * (15) + 1);

  document.getElementById('task').textContent = texts[RandomNumber];
  return texts[RandomNumber];
}

/* harmony default export */ __webpack_exports__["default"] = (generateText);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIGdlbmVyYXRlVGV4dCgpIHtcbiAgY29uc3QgdGV4dHMgPSBbJ9CV0LbQtdC00L3QtdCy0L3QviDQtNC10LvQsNC50YLQtSDQt9Cw0YDRj9C00LrRgyDQuCDRgNCw0LfQu9C40YfQvdGL0LUg0YTQuNC30LjRh9C10YHQutC40LUg0YPQv9GA0LDQttC90LXQvdC40Y8uINCg0LDQt9Cy0LjQstCw0LnRgtC1INGB0LLQvtGRINGC0LXQu9C+INC4INC00YPRhS4nLFxuICAgICfQkdGD0LTRjNGC0LUg0LHQu9Cw0LPQvtC00LDRgNC90Ysg0JLRgdC10LvQtdC90L3QvtC5INC30LAg0LrQsNC20LTRi9C5INC/0YDQvtC20LjRgtGL0Lkg0LTQtdC90YwuJyxcbiAgICAn0JvRjtCx0LjRgtC1INGB0LXQsdGPINGC0LDQutC40LwsINC60LDQutC+0Lkg0LLRiyDQtdGB0YLRjCwg0YHQviDQstGB0LXQvNC4INC00L7RgdGC0L7QuNC90YHRgtCy0LDQvNC4INC4INC90LXQtNC+0YHRgtCw0YLQutCw0LzQuCcsXG4gICAgJ9CS0LXRgNGM0YLQtSDRgtC+0LvRjNC60L4g0LIg0YHQsNC80L7QtSDQu9GD0YfRiNC10LUg0Lgg0YLQvtCz0LTQsCDQsiDQstCw0YjQtdC5INC20LjQt9C90Lgg0YHRgtCw0L3QtdGCINC10YnRkSDQsdC+0LvRjNGI0LUg0L/RgNC40Y/RgtC90YvRhSDRgdGO0YDQv9GA0LjQt9C+0LIg0Lgg0YXQvtGA0L7RiNC10LPQviDQvdCw0YHRgtGA0L7QtdC90LjRjycsXG4gICAgJ9Cf0YDQvtGH0YLQuNGC0LUg0LrQsNC6INC80L7QttC90L4g0LHQvtC70YzRiNC1INCx0LjQvtCz0YDQsNGE0LjQuSDQstC10LvQuNC60LjRhSDQu9GO0LTQtdC5JyxcbiAgICAn0J/Qu9Cw0L3QuNGA0YPQudGC0LUg0L/RgNC10LTRgdGC0L7Rj9GJ0LjQuSDQtNC10L3RjC4g0JLRi9C00LXQu9GP0LnRgtC1INC90LDQuNCx0L7Qu9C10LUg0L/RgNC40L7RgNC40YLQtdGC0L3Ri9C1INC30LDQtNCw0YfQuCwg0LrQvtGC0L7RgNGL0LUg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LLRi9C/0L7Qu9C90LjRgtGMINCyINC/0LXRgNCy0YPRjiDQvtGH0LXRgNC10LTRjCcsXG4gICAgJ9Ce0L/RgNC10LTQtdC70LjRgtC1LCDRh9GC0L4g0YHQtdC50YfQsNGBINCyINC20LjQt9C90Lgg0LTQu9GPINCy0LDRgSDQvdCw0LjQsdC+0LvQtdC1INCy0LDQttC90L4g0Lgg0YDQsNC30LLQuNCy0LDQudGC0LXRgdGMINCyINGN0YLQvtC8INC90LDQv9GA0LDQstC70LXQvdC40LgnLFxuICAgICfQntGC0LrQsNC20LjRgtC10YHRjCDQvtGCINGD0L/QvtGC0YDQtdCx0LvQtdC90LjRjyDQsNC70LrQvtCz0L7Qu9GPJywgJ9Cf0LXQudGC0LUg0YfQuNGB0YLRg9GOINCy0L7QtNGDINC4INC90LDRgtGD0YDQsNC70YzQvdGL0LUg0YHQvtC60LguINCe0LPRgNCw0L3QuNGH0YzRgtC1INGD0L/QvtGC0YDQtdCx0LvQtdC90LjQtSDQs9Cw0LfQuNGA0L7QstCw0L3QvdC+0Lkg0LLQvtC00YsnLFxuICAgICfQn9C10LnRgtC1INGH0LjRgdGC0YPRjiDQstC+0LTRgyDQuCDQvdCw0YLRg9GA0LDQu9GM0L3Ri9C1INGB0L7QutC4LiDQntCz0YDQsNC90LjRh9GM0YLQtSDRg9C/0L7RgtGA0LXQsdC70LXQvdC40LUg0LPQsNC30LjRgNC+0LLQsNC90L3QvtC5INCy0L7QtNGLJyxcbiAgICAn0JrQsNC20LTRi9C5INC00LXQvdGMINC+0YLQvNC10YfQsNC50YLQtSDQtNC70Y8g0YHQtdCx0Y8sINC90LDRgdC60L7Qu9GM0LrQviDQtNCw0LvQtdC60L4g0LLRiyDQv9GA0L7QtNCy0LjQvdGD0LvQuNGB0Ywg0Log0YHQstC+0LXQuSDRhtC10LvQuC4g0J/QvtC80L3QuNGC0LUsINGH0YLQviDQutCw0LbQtNGL0Lkg0L3QvtCy0YvQuSDQtNC10L3RjCAtINGN0YLQviDRiNCw0LMg0LLQv9C10YDRkdC0JyxcbiAgICAn0J3QsNC50LTQuNGC0LUg0LTQu9GPINGB0LXQsdGPINC90LDRgdGC0LDQstC90LjQutCwLiDQo9GH0LjRgtC10YHRjCDRgyDRgtC+0LPQviwg0LrRgtC+INGD0LbQtSDQvdCw0YXQvtC00LjRgtGB0Y8g0YLQsNC8LCDQutGD0LTQsCDQstGLINGC0L7Qu9GM0LrQviDRgdGC0YDQtdC80LjRgtC10YHRjCcsXG4gICAgJ9Cf0YDQvtGB0YvQv9Cw0LnRgtC10YHRjCDQsiA2INGD0YLRgNCwLiDQo9GC0YDQvtC8INC80L7QttC90L4g0YPRgdC/0LXRgtGMINGB0LTQtdC70LDRgtGMINCz0L7RgNCw0LfQtNC+INCx0L7Qu9GM0YjQtSDQtNC10LssINGH0LXQvCDQsiDRgtC10YfQtdC90LjQtSDQtNC90Y8sINC+0YHQvtCx0LXQvdC90L4sINC10YHQu9C4INCy0Ysg0YLQstC+0YDRh9C10YHQutC40Lkg0YfQtdC70L7QstC10LonLFxuICAgICfQl9Cw0LHRg9C00YzRgtC1INC+INGB0LLQvtC40YUg0L3QtdC00L7RgdGC0LDRgtC60LDRhS4g0JLQvNC10YHRgtC+INGN0YLQvtCz0L4g0YHQvtGB0YDQtdC00L7RgtC+0YfRjNGC0LXRgdGMINC90LAg0YHQstC+0LjRhSDQtNC+0YHRgtC+0LjQvdGB0YLQstCw0YUnLFxuICAgICfQldC20LXQvNC10YHRj9GH0L3QviDQvtGC0LrQu9Cw0LTRi9Cy0LDQudGC0LUg0L7RgiAxMCAlINC+0YIg0YHQstC+0LXQs9C+INC00L7RhdC+0LTQsC4g0JjQvdCy0LXRgdGC0LjRgNGD0LnRgtC1INCyINGB0LLQvtGRINCx0YPQtNGD0YnQtdC1JyxcbiAgICAn0JrQvtC90YLRgNC+0LvQuNGA0YPQudGC0LUg0YHQstC+0Lgg0Y3QvNC+0YbQuNC4LiDQodGC0LDRgNCw0LnRgtC10YHRjCDQutCw0Log0LzQvtC20L3QviDRh9Cw0YnQtSDRg9C70YvQsdCw0YLRjNGB0Y8g0Lgg0LHRi9GC0Ywg0LIg0L7RgtC70LjRh9C90L7QvCDQvdCw0YHRgtGA0L7QtdC90LjQuCddO1xuICBjb25zdCBSYW5kb21OdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTUpICsgMSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKS50ZXh0Q29udGVudCA9IHRleHRzW1JhbmRvbU51bWJlcl07XG4gIHJldHVybiB0ZXh0c1tSYW5kb21OdW1iZXJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9