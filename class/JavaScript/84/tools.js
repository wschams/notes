var pcs = (function () {
    "use strict";

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    return function (id) {
        var elem = get(id);
        var oldDisplayVal;

        return {
            setCss: function (property, value) {
                setCss(elem, property, value);
                return this;
            },
            getCss: function (property) {
                return getComputedStyle(elem).getPropertyValue(property);
            },
            pulsate: function () {
                var fontSize = 32,
                    i = 1,
                    //that = this,
                    interval = setInterval(function () {
                        if (i <= 5 || i > 15) {
                            fontSize += 5;
                        } else {
                            fontSize -= 5;
                        }

                        //that.setCss("fontSize", fontSize + 'px');
                        setCss(elem, "fontSize", fontSize + 'px');

                        if (i++ === 20) {
                            clearInterval(interval);
                        }
                    }, 100);

                return this;
            },
            click: function (callback) {
                elem.addEventListener('click', callback);
                return this;
            },
            hide: function () {
                oldDisplayVal = this.getCss("display");
                this.setCss("display", "none");
                //setCss(elem, "display", "none");

                return this;
            },
            show: function () {
                var newDisplay = oldDisplayVal !== "none" ? oldDisplayVal : "inline-block";
                this.setCss("display", newDisplay);

                return this;
            },
            setInnerHtml: function (html) {
                elem.innerHTML = html;
                return this;
            },
            getElement: function () {
                return elem;
            }
        };
    };
}());