(function() {
    var t, e, n, i, o, a = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o, a;
            for (a = this.keys, e = i = 0, o = a.length; o > i; e = ++i)
                if (n = a[e], n === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, a, s;
            for (s = this.keys, n = o = 0, a = s.length; a > o; n = ++o)
                if (i = s[n], i === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                var t, n, i, o;
                for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.all = function() {
                var t, n, i, o;
                for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                return o
            }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, a, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) a = e[n], s.push(function() {
                        var t, e, n, i;
                        for (n = a.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function() {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, a;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
                return a
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                return function() {
                    return a.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, a;
            i = [];
            for (n in e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, s, r;
                for (s = this.vendors, r = [], e = 0, i = s.length; i > e; e++) a = s[e], r.push(t["" + a + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return r
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, a, s, r, l;
            for (r = i(t), s = r.getPropertyCSSValue(e), a = this.vendors, n = 0, o = a.length; o > n; n++) l = a[n], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, a;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= a
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this), wow = new WOW({
    offset: 100
}), wow.init(),
function(t) {
    function o(e) {
        e.addClass("countdownHolder"), t.each(["Days", "Hours", "Minutes", "Seconds"], function(n) {
            t('<span class="count' + this + '">').html('<span class="position">					<span class="digit static">0</span>				</span>				<span class="position">					<span class="digit static">0</span>				</span>').appendTo(e), "Seconds" != this && e.append('<span class="countDiv countDiv' + n + '"></span>')
        })
    }

    function a(e, n) {
        var i = e.find(".digit");
        if (i.is(":animated")) return !1;
        if (e.data("digit") == n) return !1;
        e.data("digit", n);
        var o = t("<span>", {
            "class": "digit",
            css: {
                top: "-2.1em",
                opacity: 0
            },
            html: n
        });
        i.before(o).removeClass("static").animate({
            top: "2.5em",
            opacity: 0
        }, "fast", function() {
            i.remove()
        }), o.delay(100).animate({
            top: 0,
            opacity: 1
        }, "fast", function() {
            o.addClass("static")
        })
    }
    var e = 86400,
        n = 3600,
        i = 60;
    t.fn.countdown = function(s) {
        function f(t, e, n) {
            a(p.eq(t), Math.floor(n / 10) % 10), a(p.eq(e), n % 10)
        }
        var l, c, u, d, h, p, r = t.extend({
                callback: function() {},
                timestamp: 0
            }, s);
        return o(this, r), p = this.find(".position"),
        function m() {
            l = Math.floor((r.timestamp - new Date) / 1e3), 0 > l && (l = 0), c = Math.floor(l / e), f(0, 1, c), l -= c * e, u = Math.floor(l / n), f(2, 3, u), l -= u * n, d = Math.floor(l / i), f(4, 5, d), l -= d * i, h = l, f(6, 7, h), r.callback(c, u, d, h), setTimeout(m, 1e3)
        }(), this
    }
}(jQuery), $(function() {
    var t = new Date,
        e = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
        n = $("#note"),
        i = $("#note2"),
        o = $("#note3"),
        a = $("#note4"),
        s = $("#note5"),
        r = $("#note6"),
        l = new Date(2017, 1, 14),
        c = !0;
    new Date > l && (l = e.valueOf() + 864e5, c = !1), $(".countdown").countdown({
        timestamp: l,
        callback: function(t, e, l, u) {
            var d = "";
            d += t + " дней" + (1 == t ? "" : "") + ", ", d += e + " часов" + (1 == e ? "" : "") + ", ", d += l + " минут" + (1 == l ? "" : "") + " и ", d += u + " секунд" + (1 == u ? "" : "") + " <br />", d += c ? "" : "", n.html(d), i.html(d), o.html(d), a.html(d), s.html(d), r.html(d)
        }
    }), $(".countdown2").countdown({
        timestamp: l
    }), $(".countdown3").countdown({
        timestamp: l
    }), $(".countdown4").countdown({
        timestamp: l
    }), $(".countdown5").countdown({
        timestamp: l
    }), $(".countdown6").countdown({
        timestamp: l
    })
}), $(function() {
    $(".menu").slicknav({
        label: "МЕНЮ"
    })
}), $(document).ready(function() {
    var t = $(".menu");
    $(window).scroll(function() {
        $(this).scrollTop() > 300 && t.hasClass("default") ? t.fadeOut("fast", function() {
            $(this).removeClass("default").addClass("fixed").fadeIn("fast")
        }) : $(this).scrollTop() <= 300 && t.hasClass("fixed") && t.fadeOut("fast", function() {
            $(this).removeClass("fixed").addClass("default").fadeOut("fast")
        })
    })
}), $(window).load(function() {
    var t, e = $(".menu__ul"),
        n = e.outerHeight() + 72,
        i = e.find("a"),
        o = i.map(function() {
            var t = $($(this).attr("href"));
            return t.length ? t : void 0
        });
    i.click(function(t) {
        var e = $(this).attr("href"),
            i = "#" === e ? 0 : $(e).offset().top - n + 1;
        $("html, body").stop().animate({
            scrollTop: i
        }, 300), t.preventDefault()
    }), $(window).scroll(function() {
        var e = $(this).scrollTop() + n,
            a = o.map(function() {
                return $(this).offset().top < e ? this : void 0
            });
        a = a[a.length - 1];
        var s = a && a.length ? a[0].id : "";
        t !== s && (t = s, i.parent().removeClass("active").end().filter("[href=#" + s + "]").parent().addClass("active"))
    })
}), $(document).ready(function() {
    $(".show").click(function() {
        return $("#spoiler").slideToggle("slow"), !1
    })
}), ! function(t, e) {
    function i(e, n) {
        this.element = e, this.settings = t.extend({}, o, n), this._defaults = o, this._name = a, this.init()
    }
    var o = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !1,
        removeClasses: !1,
        brand: "",
        init: function() {},
        beforeOpen: function() {},
        beforeClose: function() {},
        afterOpen: function() {},
        afterClose: function() {}
    }, a = "slicknav",
        s = "slicknav";
    i.prototype.init = function() {
        var n, i, o = this,
            a = t(this.element),
            r = this.settings;
        if (r.duplicate ? (o.mobileNav = a.clone(), o.mobileNav.removeAttr("id"), o.mobileNav.find("*").each(function(e, n) {
            t(n).removeAttr("id")
        })) : (o.mobileNav = a, o.mobileNav.removeAttr("id"), o.mobileNav.find("*").each(function(e, n) {
            t(n).removeAttr("id")
        })), r.removeClasses && (o.mobileNav.removeAttr("class"), o.mobileNav.find("*").each(function(e, n) {
            t(n).removeAttr("class")
        })), n = s + "_icon", "" === r.label && (n += " " + s + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), o.mobileNav.attr("class", s + "_nav"), i = t('<div class="' + s + '_menu"></div>'), "" !== r.brand) {
            var l = t('<div class="' + s + '_brand">' + r.brand + "</div>");
            t(i).append(l)
        }
        o.btn = t(["<" + r.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), t(i).append(o.btn), t(r.prependTo).prepend(i), i.append(o.mobileNav);
        var c = o.mobileNav.find("li");
        t(c).each(function() {
            var e = t(this),
                n = {};
            if (n.children = e.children("ul").attr("role", "menu"), e.data("menu", n), n.children.length > 0) {
                var i = e.contents(),
                    a = !1,
                    l = [];
                t(i).each(function() {
                    return t(this).is("ul") ? !1 : (l.push(this), void(t(this).is("a") && (a = !0)))
                });
                var c = t("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
                if (r.allowParentLinks && !r.nestedParentLinks && a) t(l).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
                else {
                    var u = t(l).wrapAll(c).parent();
                    u.addClass(s + "_row")
                }
                e.addClass(r.showChildren ? s + "_open" : s + "_collapsed"), e.addClass(s + "_parent");
                var d = t('<span class="' + s + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
                r.allowParentLinks && !r.nestedParentLinks && a && (d = d.wrap(c).parent()), t(l).last().after(d)
            } else 0 === e.children().length && e.addClass(s + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function(e) {
                r.closeOnClick && !t(e.target).parent().closest("li").hasClass(s + "_parent") && t(o.btn).click()
            }), r.closeOnClick && r.allowParentLinks && (e.children("a").children("a").click(function() {
                t(o.btn).click()
            }), e.find("." + s + "_parent-link a:not(." + s + "_item)").click(function() {
                t(o.btn).click()
            }))
        }), t(c).each(function() {
            var e = t(this).data("menu");
            r.showChildren || o._visibilityToggle(e.children, null, !1, null, !0)
        }), o._visibilityToggle(o.mobileNav, null, !1, "init", !0), o.mobileNav.attr("role", "menu"), t(e).mousedown(function() {
            o._outlines(!1)
        }), t(e).keyup(function() {
            o._outlines(!0)
        }), t(o.btn).click(function(t) {
            t.preventDefault(), o._menuToggle()
        }), o.mobileNav.on("click", "." + s + "_item", function(e) {
            e.preventDefault(), o._itemClick(t(this))
        }), t(o.btn).keydown(function(t) {
            var e = t || event;
            13 == e.keyCode && (t.preventDefault(), o._menuToggle())
        }), o.mobileNav.on("keydown", "." + s + "_item", function(e) {
            var n = e || event;
            13 == n.keyCode && (e.preventDefault(), o._itemClick(t(e.target)))
        }), r.allowParentLinks && r.nestedParentLinks && t("." + s + "_item a").click(function(t) {
            t.stopImmediatePropagation()
        })
    }, i.prototype._menuToggle = function() {
        var e = this,
            n = e.btn,
            i = e.mobileNav;
        n.hasClass(s + "_collapsed") ? (n.removeClass(s + "_collapsed"), n.addClass(s + "_open")) : (n.removeClass(s + "_open"), n.addClass(s + "_collapsed")), n.addClass(s + "_animating"), e._visibilityToggle(i, n.parent(), !0, n)
    }, i.prototype._itemClick = function(t) {
        var e = this,
            n = e.settings,
            i = t.data("menu");
        i || (i = {}, i.arrow = t.children("." + s + "_arrow"), i.ul = t.next("ul"), i.parent = t.parent(), i.parent.hasClass(s + "_parent-link") && (i.parent = t.parent().parent(), i.ul = t.parent().next("ul")), t.data("menu", i)), i.parent.hasClass(s + "_collapsed") ? (i.arrow.html(n.openedSymbol), i.parent.removeClass(s + "_collapsed"), i.parent.addClass(s + "_open"), i.parent.addClass(s + "_animating"), e._visibilityToggle(i.ul, i.parent, !0, t)) : (i.arrow.html(n.closedSymbol), i.parent.addClass(s + "_collapsed"), i.parent.removeClass(s + "_open"), i.parent.addClass(s + "_animating"), e._visibilityToggle(i.ul, i.parent, !0, t))
    }, i.prototype._visibilityToggle = function(e, n, i, o, a) {
        var r = this,
            l = r.settings,
            c = r._getActionItems(e),
            u = 0;
        i && (u = l.duration), e.hasClass(s + "_hidden") ? (e.removeClass(s + "_hidden"), a || l.beforeOpen(o), e.slideDown(u, l.easingOpen, function() {
            t(o).removeClass(s + "_animating"), t(n).removeClass(s + "_animating"), a || l.afterOpen(o)
        }), e.attr("aria-hidden", "false"), c.attr("tabindex", "0"), r._setVisAttr(e, !1)) : (e.addClass(s + "_hidden"), a ? "init" == o && l.init() : l.beforeClose(o), e.slideUp(u, this.settings.easingClose, function() {
            e.attr("aria-hidden", "true"), c.attr("tabindex", "-1"), r._setVisAttr(e, !0), e.hide(), t(o).removeClass(s + "_animating"), t(n).removeClass(s + "_animating"), a ? "init" == o && l.init() : l.afterClose(o)
        }))
    }, i.prototype._setVisAttr = function(e, n) {
        var i = this,
            o = e.children("li").children("ul").not("." + s + "_hidden");
        o.each(n ? function() {
            var e = t(this);
            e.attr("aria-hidden", "true");
            var o = i._getActionItems(e);
            o.attr("tabindex", "-1"), i._setVisAttr(e, n)
        } : function() {
            var e = t(this);
            e.attr("aria-hidden", "false");
            var o = i._getActionItems(e);
            o.attr("tabindex", "0"), i._setVisAttr(e, n)
        })
    }, i.prototype._getActionItems = function(t) {
        var e = t.data("menu");
        if (!e) {
            e = {};
            var n = t.children("li"),
                i = n.find("a");
            e.links = i.add(n.find("." + s + "_item")), t.data("menu", e)
        }
        return e.links
    }, i.prototype._outlines = function(e) {
        e ? t("." + s + "_item, ." + s + "_btn").css("outline", "") : t("." + s + "_item, ." + s + "_btn").css("outline", "none")
    }, i.prototype.toggle = function() {
        var t = this;
        t._menuToggle()
    }, i.prototype.open = function() {
        var t = this;
        t.btn.hasClass(s + "_collapsed") && t._menuToggle()
    }, i.prototype.close = function() {
        var t = this;
        t.btn.hasClass(s + "_open") && t._menuToggle()
    }, t.fn[a] = function(e) {
        var n = arguments;
        if (void 0 === e || "object" == typeof e) return this.each(function() {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new i(this, e))
        });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var o;
            return this.each(function() {
                var s = t.data(this, "plugin_" + a);
                s instanceof i && "function" == typeof s[e] && (o = s[e].apply(s, Array.prototype.slice.call(n, 1)))
            }), void 0 !== o ? o : this
        }
    }
}(jQuery, document, window);