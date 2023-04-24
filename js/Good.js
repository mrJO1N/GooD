"use strict";
var _a;
var doc = (_a = document.querySelector("#page")) !== null && _a !== void 0 ? _a : document.body, d = function (text) { return doc.innerHTML = text; }, c = function (text) { return console.log(text); };
var colorTime, object, ctx, settings = {};
function setSettings(settingsTime) {
    var basic = {
        "path": "body",
        "height": window.innerHeight,
        "width": window.innerWidth
    }, basicKeys = Object.keys(basic), // better make this now, than make this in cycle "for"
    basicValues = Object.keys(basic).map(function (e) {
        return basic[e];
    }), reportTime = [];
    if (typeof settingsTime != "undefined") {
        for (var i = 0; i < basicKeys.length; i++) {
            if (typeof settingsTime[basicKeys[i]] == "undefined") {
                settings[basicKeys[i]] = basicValues[i]; // if no such value is specified
                reportTime.push(basicKeys[i]);
            }
            else {
                settings[basicKeys[i]] = settingsTime[basicKeys[i]]; // if such value is specified
            }
            ;
        }
        ;
        if (reportTime.length != 0)
            console.log("you don't write this in setSettings: " + reportTime); // report warnings to console
    }
    else {
        settings = basic;
    }
    ;
}
;
var Square = /** @class */ (function () {
    function Square(color, x, y, width, height) {
        var _newTarget = this.constructor;
        this.color = "";
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 10;
        if (!_newTarget) {
            new Square(color, x, y, width, height);
        }
        else {
            this.color = color;
            this.x = x | 0;
            this.y = y | 0;
            this.width = width | 10;
            this.height = height | 10;
        }
    }
    ;
    return Square;
}());
;
var Circle = /** @class */ (function () {
    function Circle(color, x, y, radius) {
        var _newTarget = this.constructor;
        this.color = "";
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        if (!_newTarget) {
            new Circle(color, x, y, radius);
        }
        else {
            this.color = color;
            this.x = x - radius | 0;
            this.y = y - radius | 0;
            this.radius = radius | 10;
        }
    }
    ;
    return Circle;
}());
;
var Render = {
    init: function (canvStyle) {
        var doc = document.querySelector(settings.path), canv = document.createElement("canvas");
        ctx = canv.getContext("2d"); // work only in 2d space
        doc.appendChild(canv);
        canv.setAttribute("style", "height: auto; width: auto; ".concat(canvStyle));
        document.body.setAttribute("style", "margin: 0; padding: 0; overflow: hidden; height: ".concat(settings.height, "; width: ").concat(settings.width));
        canv.height = settings.height;
        canv.width = settings.width;
    },
    draw: function (content) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
            var object_1 = content_1[_i];
            if (object_1.color != colorTime) { //if the color is changed in the array (content), then the color being drawn changes
                colorTime = object_1.color;
                ctx.fillStyle = colorTime;
            }
            ;
            switch (object_1.constructor.name) {
                case "Square":
                    ctx.fillRect(object_1.x, object_1.y, object_1.width, object_1.height); // drawning square
                    break;
                case "Circle":
                    ctx.beginPath();
                    ctx.arc(object_1.x, object_1.y, object_1.radius, 0, Math.PI * 2);
                    ctx.fill();
                    break;
            }
            ;
        }
        ;
    },
    clear: function () { return ctx.clearRect(0, 0, settings.width, settings.height); }
};
