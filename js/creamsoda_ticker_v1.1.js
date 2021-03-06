(function (e) {
    e.fn.csTicker = function (t) {
        function f(t) {
            e(t).find("li").css("width", e(t).outerWidth() - e(t).find(".csTicker__title").outerWidth());
            e(t).find("ul").css("left", e(t).find(".csTicker__title").outerWidth());
            e(t).find(".wrapper").css("height", e(t).find("li").outerHeight());
            e(window).resize(function () {
                var n = e(t).find(".csTicker__title").outerWidth();
                e(t).find("li").css("width", e(t).outerWidth() - n);
                var r = e(t).find("ul").children("li").eq(s).position().left;
                var i = r - n;
                e(t).find("ul").css("left", -i);
                e(t).find(".wrapper").css("height", e(t).find("li").outerHeight())
            })
        }

        function l(n) {
            titleWidth = e(n).find(".csTicker__title").outerWidth();
            buttonWidth = e(n).find(".csTicker__buttons").outerWidth();
            var r = e(n).parent().innerWidth();
            var i;
            if (r > 768) {
                i = 3
            } else if (r > 480) {
                i = 2
            } else {
                i = 1
            }
            e(n).find("li").css("width", e(n).outerWidth() / i);
            var o = e(n).find("li").map(function () {
                return e(this).height()
            }).get();
            e(n).find(".wrapper").css("height", Math.max.apply(null, o) + 20);
            e(n).find("ul").animate({
                left: "-" + e(n).find("ul").children("li").eq(s).position().left
            }, t.speed, "swing");
            e(window).resize(function () {
                var r;
                var i = e(n).parent().innerWidth();
                if (i > 768) {
                    r = 3
                } else if (i > 480) {
                    r = 2
                } else {
                    r = 1
                }
                e(n).find("li").css("width", e(n).outerWidth() / r);
                var o = e(n).find("li").map(function () {
                    return e(this).height()
                }).get();
                e(n).find(".wrapper").css("height", Math.max.apply(null, o) + 20);
                e(n).find("ul").animate({
                    left: "-" + e(n).find("ul").children("li").eq(s).position().left
                }, t.speed, "swing")
            })
        }

        function c(e) {
            setInterval(function () {
                h("next", e)
            }, t.delay)
        }

        function h(n, r, i) {
            if (!o || i) {
                switch (n) {
                case "next":
                    if (s < e(r).find("li").length - 1) {
                        switch (t.tickerMode) {
                        case "mini":
                            e(r).find("ul").animate({
                                left: "-" + (e(r).find("ul").children("li").eq(s + 1).position().left - e(r).find(".csTicker__title").outerWidth())
                            }, t.speed, "swing");
                            break;
                        case "horizontal":
                            e(r).find("ul").animate({
                                left: "-" + e(r).find("ul").children("li").eq(s + 1).position().left
                            }, t.speed, "swing");
                            break;
                        default:
                            e(r).find("ul").animate({
                                top: "-" + (e(r).find("ul").children("li").eq(s + 1).position().top - e(r).find(".csTicker__title").outerHeight())
                            }, t.speed, "swing");
                            break
                        }
                        s++
                    } else {
                        switch (t.tickerMode) {
                        case "mini":
                            e(r).find("ul li").clone(true).appendTo(e(r).find("ul"));
                            e(r).find("ul").animate({
                                left: "-" + (e(r).find("ul").children("li").eq(s + 1).position().left - e(r).find(".csTicker__title").outerWidth())
                            }, t.speed, "swing");
                            break;
                            
                        case "horizontal":
                            e(r).find("ul").animate({
                                left: 0
                            }, t.speed, "swing");
                            break;
                        default:
                            e(r).find("ul").animate({
                                top: e(r).find(".csTicker__title").outerHeight()
                            }, t.speed, "swing");
                            break
                        }
                        s++;
                    }
                    break;
                case "prev":
                    if (s > 1) {
                        switch (t.tickerMode) {
                        case "mini":
                            e(r).find("ul").animate({
                                left: "-" + (e(r).find("ul").children("li").eq(s - 1).position().left - e(r).find(".csTicker__title").outerWidth())
                            }, t.speed, "swing");
                            break;
                        case "horizontal":
                            e(r).find("ul").animate({
                                left: "-" + e(r).find("ul").children("li").eq(s - 1).position().left
                            }, t.speed, "swing");
                            break;
                        default:
                            e(r).find("ul").animate({
                                top: "-" + (e(r).find("ul").children("li").eq(s - 1).position().top - e(r).find(".csTicker__title").outerHeight())
                            }, t.speed, "swing");
                            break
                        }
                        s--
                    } else {
                        switch (t.tickerMode) {
                        case "mini":
                            e(r).find("ul").animate({
                                left: e(r).find(".csTicker__title").outerWidth()
                            }, t.speed, "swing");
                            break;
                        case "horizontal":
                            e(r).find("ul").animate({
                                left: 0
                            }, t.speed, "swing");
                            break;
                        default:
                            e(r).find("ul").animate({
                                top: e(r).find(".csTicker__title").outerHeight()
                            }, t.speed, "swing");
                            break
                        }
                        s = 0
                    }
                    break
                }
            }
        }
        var n = {
            tickerMode: "vertical",
            customCSS: false,
            delay: 5e3,
            speed: 300,
            autoAnimate: true,
            buttons: true,
            highlightFeatured: true,
            stickyFeature: false,
            tickerTitle: false,
            contentFeed: false,
            feedCount: 10,
            truncateAt: 100,
            linkTarget: "_blank",
            addEllipsis: false,
            pauseOnHover: true,
            backgroundColour: false,
            titleColour: false,
            titleTextColour: false
        };
        var t = e.extend({}, n, t);
        var r;
        var i = e(this).attr("id");
        var s = 0;
        var o = false;
        if (t.customCSS) {
            e("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: customCSS
            }).appendTo("head")
        }
        var u = this;
        if (t.contentFeed) {
            var a;
            e.ajax({
                type: "GET",
                url: document.location.protocol + "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=" + encodeURIComponent(t.contentFeed),
                dataType: "json",
                error: function () {},
                success: function (n) {
                    a = n.responseData.feed.entries;
                    var r = "<ul>";
                    e(a).each(function () {
                        var n = e(this).html();
                        r += "<li>";
                        if (e(this).data("img")) {
                            r += '<div class="col"><img src="' + e(this).attr("img") + '"/>';
                            r += '</div><div class="col">'
                        }
                        r += '<p class="h3"><a target="' + t.linkTarget + '" href="' + e(this).attr("link") + '">' + e(this).attr("title") + "</a></p>";
                        if (t.truncateAt) {
                            var i = e(this).attr("contentSnippet").substr(0, t.truncateAt);
                            i = i.substr(0, Math.min(i).length, i.lastIndexOf(" "))
                        } else {
                            var i = e(this).attr("contentSnippet")
                        } if (t.addEllipsis) {
                            i += "..."
                        }
                        r += "<p>" + i + "</p>";
                        r += '<p class="small">' + e(this).attr("author") + " - " + e(this).attr("publishedDate") + "</p>";
                        if (e(this).data("img")) {
                            r += "</div>"
                        }
                        r += "</li>"
                    });
                    e(u).append(r + "</ul>").find(".csTicker__spinner").remove();
                    f(u)
                }
            });
            e(this).append('<div class="csTicker__spinner"><img src="img/spinner.gif" /></div>')
        }
        if (t.tickerTitle) {
            e(this).prepend('<div class="csTicker__title">' + t.tickerTitle + "</div>")
        }
        e(this).find("ul").wrap('<div class="wrapper"></div>');
        if (t.buttons) {
            e(this).prepend('<div class="csTicker__buttons"><div class="buttons__prev-button"></div><div class="buttons__next-button"></div></div>')
        }
        if (!t.contentFeed) {
            e(this).find("li").each(function () {
                var n = e(this).html();
                if (t.highlightFeatured && e(this).data("featured") == true) {
                    e(this).addClass("featured")
                }
                var r = "";
                if (e(this).data("img")) {
                    r += '<div class="col">';
                    r += '<img src="' + e(this).data("img") + '"/>';
                    r += '</div><div class="col">'
                }
                if (e(this).data("title")) {
                    r += '<p class="h3"><a target="' + t.linkTarget + '" href="' + e(this).data("link") + '">' + e(this).data("title") + "</a></p>"
                }
                if (t.truncateAt) {
                    var i = n.substr(0, t.truncateAt);
                    i = i.substr(0, Math.min(i).length, i.lastIndexOf(" "))
                } else {
                    var i = n
                } if (t.addEllipsis) {
                    i += "..."
                }
                r += "<p>" + i + "</p>";
                if (e(this).data("meta")) {
                    r += '<p class="small">' + e(this).data("meta") + "</p>"
                }
                if (e(this).data("img")) {
                    r += "</div>"
                }
                e(this).empty().append(r)
            })
        }
        e(this).addClass("csTicker");
        switch (t.tickerMode) {
        case "horizontal":
            e(this).addClass("csTicker--horizontal");
            l(this);
            break;
        case "mini":
            e(this).addClass("csTicker--mini");
            f(this);
            break;
        case "grid":
            e(this).addClass("csTicker--grid");
            break;
        default:
            break
        }
        if (t.backgroundColour) {
            e(this).css("background", t.backgroundColour)
        }
        if (t.titleColour) {
            e(this).find(".csTicker__title").css("background", t.titleColour)
        }
        if (t.titleTextColour) {
            e(this).find(".csTicker__title").css("color", t.titleTextColour)
        }
        if (t.pauseOnHover) {
            e(u).mouseenter(function () {
                o = true
            }).mouseleave(function () {
                o = false
            })
        }
        return this.each(function () {
            var n = e(this);
            if (t.autoAnimate) {
                c(n)
            }
            if (t.buttons) {
                e(this).find(".buttons__prev-button").click(function () {
                    h("prev", n, true)
                });
                e(this).find(".buttons__next-button").click(function () {
                    h("next", n, true)
                })
            }
        })
    }
})(jQuery)