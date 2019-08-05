(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"heading\">\n  <h1>\n      <a class=\"home-link\" href=\"/\">Star Wars</a>\n  </h1>\n  <hr>\n</div>\n<div class=\"main-content\">\n  <h2 class=\"info\">\n      Character Film Information\n  </h2>\n  <div class=\"instructions\">\n    <p>Select a character <br>to see information about the films<br>in the Star Wars universe they have appeared in.</p>\n  </div>\n  <div class=\"characters\">\n    <ul>\n      <li *ngFor=\"let character of characters; let i = index\" >\n       <a (click)=\"characterSelect(i)\">{{character.name}}</a> \n      </li>\n    </ul>\n  </div>\n</div>\n<hr>\n<div *ngIf=\"error\">\n  <p>We're sorry, there seems to be something wrong with that request, please check back later.</p>\n</div>\n<div *ngIf=\"selected && !error\" class=\"filmInfoTitle\">\n  <p> {{selected}} Films</p>\n</div>\n<app-character-detail *ngIf=\"selected && !error\" [isLoading]=\"loading\" [films]=\"details\"></app-character-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/character-detail/character-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/character-detail/character-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filmContainer\">\n  <ul class=\"filmList\">\n      <li *ngFor=\"let film of films\">\n        <span class=\"title\">{{ film.title }}</span><br>\n        <span>Released:</span><br>\n        <span>{{ film.release_date | date:'fullDate'}}</span><br>\n        <span>Episode #{{ film.episode_id }}</span><br>\n        <span>Director:</span><br>\n        <span>{{ film.director }}</span>\n      </li>\n      <br>\n  </ul>\n</div>\n<hr>\n<div class=\"loader\" *ngIf=\"isLoading\">\n    <img src=\"/assets/imperial_emblem.gif\">\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"STARWARS\";\n  src: url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.eot\");\n  /* IE9*/\n  src: url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.woff2\") format(\"woff2\"), url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.woff\") format(\"woff\"), url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.ttf\") format(\"truetype\"), url(\"https://db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.svg#STARWARS\") format(\"svg\");\n  /* iOS 4.1- */\n}\nbody {\n  background: #000;\n  color: #fff;\n  font-family: \"STARWARS\";\n  text-transform: uppercase;\n}\n.home-link {\n  font-family: \"STARWARS\";\n  font-size: 60px;\n  color: #000;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-shadow: -1px -1px 0 #ffe81f, 1px -1px 0 #ffe81f, -1px 1px 0 #ffe81f, 1px 1px 0 #ffe81f;\n}\n.info {\n  text-align: center;\n  letter-spacing: 0.07em;\n}\n.heading {\n  text-align: center;\n  margin-top: 24px;\n}\nhr {\n  border-bottom: solid 1px #ffe81f;\n}\n.instructions {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.instructions p {\n  font-size: 20px;\n}\n.characters {\n  text-align: center;\n}\nul {\n  display: inline-block;\n  text-align: left;\n  border: solid 1px #ffe81f;\n  border-radius: 25px;\n  text-align: center;\n  padding: 20px;\n}\nli {\n  list-style: none;\n  padding: 10px 0 15px 0;\n}\nli a {\n  letter-spacing: 0.1em;\n  font-size: 16px;\n  color: #ffe81f;\n  text-decoration: none;\n}\nli a:hover {\n  text-decoration: underline;\n}\nli a:hover {\n  color: #fff;\n}\nli a:visited {\n  color: #ffe81f;\n}\n.filmInfoTitle {\n  text-align: center;\n  font-size: 1.2rem;\n}\n@media (max-width: 768px) {\n  .info {\n    text-align: center;\n    font-size: 16px;\n    letter-spacing: 0.07em;\n  }\n\n  .instructions {\n    color: #fff;\n    text-align: center;\n    margin-bottom: 30px;\n    line-height: 20px;\n  }\n  .instructions p {\n    font-size: 1rem;\n    letter-spacing: 0.07em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY3VtZW50c1xcY29kZVxcdHJ1Y2tzdG9wLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSx1QkFBQTtFQUNSLGdGQUFBO0VBQWtGLE9BQUE7RUFDbEYsbWZBQUE7RUFJb0csYUFBQTtBQ0F4RztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkZBQ0Y7QUNGRjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURRQTtFQUNJLGdDQUFBO0FDTEo7QURRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURPSTtFQUNJLGVBQUE7QUNMUjtBRFNBO0VBQ0ksa0JBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNOSjtBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ05KO0FEUUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNOUjtBRFFRO0VBQ0ksMEJBQUE7QUNOWjtBRFVJO0VBQ0ksV0FBQTtBQ1JSO0FEV0k7RUFDSSxjQUFBO0FDVFI7QURhQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ1ZOOztFRGNFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ1hOO0VEYU07SUFDSSxlQUFBO0lBQ0Esc0JBQUE7RUNYVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6IFwiU1RBUldBUlNcIjtcclxuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS5lb3RcIik7IC8qIElFOSovXHJcbiAgICBzcmM6IHVybChcImh0dHBzOi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvYzAwNTQ4ZjVkMjE3ZWQzMjRhZTkwOTYwNTE5MjcwMDEuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgLyogSUU2LUlFOCAqL1xyXG4gICAgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgLyogY2hyb21lIGZpcmVmb3ggKi9cclxuICAgIHVybChcImh0dHBzOi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvYzAwNTQ4ZjVkMjE3ZWQzMjRhZTkwOTYwNTE5MjcwMDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCAvKiBjaHJvbWUgZmlyZWZveCAqL1xyXG4gICAgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIC8qIGNocm9tZSBmaXJlZm94IG9wZXJhIFNhZmFyaSwgQW5kcm9pZCwgaU9TIDQuMisqL1xyXG4gICAgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS5zdmcjU1RBUldBUlNcIikgZm9ybWF0KFwic3ZnXCIpOyAvKiBpT1MgNC4xLSAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNUQVJXQVJTXCI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaG9tZS1saW5rIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNUQVJXQVJTXCI7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuXHRcdC0xcHggLTFweCAwICNmZmU4MWYsXHJcblx0XHQxcHggLTFweCAwICNmZmU4MWYsXHJcblx0XHQtMXB4IDFweCAwICNmZmU4MWYsXHJcblx0XHQxcHggMXB4IDAgI2ZmZTgxZjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZmU4MWY7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoYXJhY3RlcnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZTgxZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZlODFmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgYTp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogI2ZmZTgxZjtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbG1JbmZvVGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmluc3RydWN0aW9ucyB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNUQVJXQVJTXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS5lb3RcIik7XG4gIC8qIElFOSovXG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90L2MwMDU0OGY1ZDIxN2VkMzI0YWU5MDk2MDUxOTI3MDAxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90L2MwMDU0OGY1ZDIxN2VkMzI0YWU5MDk2MDUxOTI3MDAxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC9jMDA1NDhmNWQyMTdlZDMyNGFlOTA5NjA1MTkyNzAwMS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcImh0dHBzOi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvYzAwNTQ4ZjVkMjE3ZWQzMjRhZTkwOTYwNTE5MjcwMDEuc3ZnI1NUQVJXQVJTXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgLyogaU9TIDQuMS0gKi9cbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiU1RBUldBUlNcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhvbWUtbGluayB7XG4gIGZvbnQtZmFtaWx5OiBcIlNUQVJXQVJTXCI7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI2ZmZTgxZiwgMXB4IC0xcHggMCAjZmZlODFmLCAtMXB4IDFweCAwICNmZmU4MWYsIDFweCAxcHggMCAjZmZlODFmO1xufVxuXG4uaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcbn1cblxuLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZmU4MWY7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmluc3RydWN0aW9ucyBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hhcmFjdGVycyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmU4MWY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDAgMTVweCAwO1xufVxubGkgYSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZTgxZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxubGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxubGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxubGkgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmU4MWY7XG59XG5cbi5maWxtSW5mb1RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIH1cblxuICAuaW5zdHJ1Y3Rpb25zIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuaW5zdHJ1Y3Rpb25zIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.loading = false;
        this.characters = [
            {
                name: 'Luke Skywalker',
                url: 'https://swapi.co/api/people/1/'
            },
            {
                name: 'C-3PO',
                url: 'https://swapi.co/api/people/2/'
            },
            {
                name: 'Leia Organa',
                url: 'https://swapi.co/api/people/unknown/'
            },
            {
                name: 'R2-D2',
                url: 'https://swapi.co/api/people/3/'
            }
        ];
    }
    OnInit() {
        this.selected = '';
        this.error = false;
    }
    characterSelect(index) {
        this.resetData();
        this.loading = true;
        this.selected = this.characters[index].name;
        this.appService.getCharacterData(this.characters[index].url)
            .subscribe(data => this.callFilms(data), err => this.errorHandler(err));
    }
    resetData() {
        this.error = false;
        this.details = [];
        this.selected = '';
    }
    callFilms(data) {
        this.loading = false;
        this.films = data.films;
        this.appService.getFilmData(this.films)
            .subscribe(res => this.filmHandler(res), err => this.errorHandler(err));
    }
    filmHandler(data) {
        this.details = data;
    }
    errorHandler(data) {
        this.details = [];
        this.loading = false;
        this.error = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppComponent.prototype, "details", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-detail/character-detail.component */ "./src/app/character-detail/character-detail.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    getCharacterData(url) {
        return this.http.get(url);
    }
    getFilmData(films) {
        const callArray = [];
        for (const film of films) {
            callArray.push(this.http.get(film));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(callArray);
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppService);



/***/ }),

/***/ "./src/app/character-detail/character-detail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-title {\n  text-align: center;\n  font-size: 24px;\n  margin: 10px 0;\n  letter-spacing: 0.1em;\n  font-size: 1.5rem;\n}\n\n.loader {\n  text-align: center;\n}\n\n.filmContainer {\n  text-align: center;\n}\n\n.filmList {\n  text-align: left;\n  font-size: 1.5rem;\n}\n\n.filmList span {\n  line-height: 30px;\n}\n\n.title {\n  color: #ffe81f;\n}\n\n@media (max-width: 768px) {\n  .details-title {\n    text-align: center;\n    font-size: 24px;\n    margin: 10px 0;\n    letter-spacing: 0.1em;\n    font-size: 1.2rem;\n  }\n\n  .filmList {\n    font-size: 1.2rem;\n  }\n  .filmList li {\n    line-height: 27px;\n    letter-spacing: 0.06em;\n  }\n  .filmList span {\n    line-height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9EOlxcRG9jdW1lbnRzXFxjb2RlXFx0cnVja3N0b3AtYXBwL3NyY1xcYXBwXFxjaGFyYWN0ZXItZGV0YWlsXFxjaGFyYWN0ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFyYWN0ZXItZGV0YWlsL2NoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBRElBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtFQ0ROOztFRElFO0lBQ0ksaUJBQUE7RUNETjtFREdNO0lBQ0ksaUJBQUE7SUFDQSxzQkFBQTtFQ0RWO0VESU07SUFDSSxpQkFBQTtFQ0ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItZGV0YWlsL2NoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbG1Db250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlsbUxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmU4MWY7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGV0YWlscy10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbG1MaXN0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5kZXRhaWxzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubG9hZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlsbUNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbG1MaXN0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uZmlsbUxpc3Qgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogI2ZmZTgxZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5maWxtTGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmZpbG1MaXN0IGxpIHtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB9XG4gIC5maWxtTGlzdCBzcGFuIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/character-detail/character-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterDetailComponent = class CharacterDetailComponent {
    constructor() {
        this.isLoading = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharacterDetailComponent.prototype, "isLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CharacterDetailComponent.prototype, "films", void 0);
CharacterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-detail',
        template: __webpack_require__(/*! raw-loader!./character-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/character-detail/character-detail.component.html"),
        styles: [__webpack_require__(/*! ./character-detail.component.scss */ "./src/app/character-detail/character-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CharacterDetailComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\code\truckstop-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map