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
        var originalDisplay;
        var data = {};

        return {
            setCss: function (property, value) {
                setCss(elem, property, value);
                return this;
            },
            getCss: function (property) {
                return getComputedStyle(elem).getPropertyValue(property);
            },
            setGetCss: function (property, value) {
                if (value) {
                    setCss(elem, property, value);
                    return this;
                }
                return getComputedStyle(elem).getPropertyValue(property);
            },
            pulsate: function () {
                var fontSize = parseInt(this.setGetCss('font-size')),
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
            clickHandler: function (callback) {
                elem.addEventListener("click", callback);
                return this;
            },
            hide: function () {
                originalDisplay = this.setGetCss('display');
                this.setGetCss('display', 'none');
                return this;
            },
            show: function () {
                this.setGetCss('display', originalDisplay);
                return this;
            },
            setData: function (property, value) {
                data[property] = value;
                return this;
            },
            getData: function (property) {
                return data[property];
            },
            setGetData: function (property, value) {
                if (value) {
                    data[property] = value;
                    return this;
                }
                return data[property];
            },
            getElement: function () {
                return elem;
            }
        };
    };
}());