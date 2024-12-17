(this["webpackJsonpsecret-hitler"] = this["webpackJsonpsecret-hitler"] || []).push([[0], {
    113: function(e, t) {},
    135: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , r = n.n(a)
          , c = n(28)
          , l = n.n(c)
          , o = n(1)
          , i = n(72)
          , s = n(15)
          , d = n(18)
          , u = n(5)
          , m = function(e) {
            return e.user.username
        }
          , b = function(e) {
            return e.user.socketId
        }
          , p = function(e) {
            return e.user.connected
        }
          , h = function(e) {
            return e.user.viewBig
        }
          , E = function(e) {
            return e.game.roomId
        }
          , g = function(e) {
            return e.game.view
        }
          , f = function(e) {
            return e.game.players
        }
          , v = function(e) {
            return e.game.hostId
        }
          , y = function(e) {
            return e.game.roundState
        }
          , O = function(e) {
            var t = b(e);
            return !!e.game.sockets[t]
        }
          , k = function(e) {
            return e.game.electionTracker
        }
          , x = function(e) {
            return e.game.votingFailed
        }
          , w = function(e) {
            return e.game.lastPolicy
        }
          , j = function(e) {
            return e.game.cardThroughTracker
        }
          , I = function(e) {
            return e.game.executeUsed
        }
          , S = function(e) {
            return e.game.vetoDenied
        }
          , C = function(e) {
            return e.game.winningTeam
        }
          , T = function(e) {
            return e.game.winningReason
        }
          , P = function(e) {
            return e.game.deadPlayers
        }
          , R = function(e) {
            return e.game.deadPlayers.slice(-1)[0] || {}
        }
          , D = function(e) {
            return e.game.currentPlayer
        }
          , _ = function(e) {
            return e.game.chancellor
        }
          , N = Object(u.a)(b, f, (function(e, t) {
            return t.findIndex((function(t) {
                return t.socketId === e
            }
            ))
        }
        ))
          , A = Object(u.a)(_, f, (function(e, t) {
            return e < 0 ? {} : t[e]
        }
        ))
          , L = Object(u.a)((function(e) {
            return e.game.lastChancellor
        }
        ), f, (function(e, t) {
            return e < 0 ? {} : t[e]
        }
        ))
          , H = Object(u.a)(N, D, (function(e, t) {
            return e === t
        }
        ))
          , V = Object(u.a)(N, _, (function(e, t) {
            return e === t
        }
        ))
          , B = Object(u.a)(f, D, (function(e, t) {
            return t < 0 ? {} : e[t]
        }
        ))
          , G = Object(u.a)(f, (function(e) {
            return e.game.lastPresident
        }
        ), (function(e, t) {
            return e[t] || {}
        }
        ))
          , Y = Object(u.a)(b, f, P, (function(e, t, n) {
            var a = t.concat(n).find((function(t) {
                return t.socketId === e
            }
            ));
            return {
                role: a.role,
                isBoss: a.isBoss
            }
        }
        ))
          , z = Object(u.a)([f, P], (function(e, t) {
            return e.length + t.length <= 6
        }
        ))
          , F = Object(u.a)([b, f, P], (function(e, t, n) {
            return [].concat(Object(d.a)(t), Object(d.a)(n)).filter((function(t) {
                return "bad" === t.role && t.socketId !== e
            }
            ))
        }
        ))
          , M = (Object(u.a)(b, f, (function(e, t) {
            return t.filter((function(t) {
                return t.socketId !== e
            }
            ))
        }
        )),
        Object(u.a)(b, f, (function(e, t) {
            return t.find((function(t) {
                return t.socketId === e
            }
            )).vote
        }
        )))
          , U = Object(u.a)(f, (function(e) {
            var t = e.map((function(e) {
                return e.voted
            }
            ))
              , n = t.reduce((function(e, t) {
                return "yes" === t ? e + 1 : e
            }
            ), 0);
            return {
                votes: t,
                nYes: n,
                nNo: t.length - n
            }
        }
        ))
          , W = function(e) {
            return e.game.drawPile
        }
          , K = function(e) {
            return e.game.discardPile
        }
          , q = Object(u.a)(W, (function(e) {
            return function(t) {
                return e.slice(e.length - t, e.length).reverse()
            }
        }
        ))
          , X = function(e) {
            var t = e.game;
            return {
                goodTrack: t.goodTrack,
                badTrack: t.badTrack
            }
        }
          , J = function(e) {
            return e.game.presidentialPower
        }
          , Z = Object(u.a)(f, (function(e) {
            return e.game.idInspectedPlayer
        }
        ), (function(e, t) {
            return e.find((function(e) {
                return e.socketId === t
            }
            ))
        }
        ))
          , Q = Object(u.a)(f, P, (function(e, t) {
            return function(n) {
                return [].concat(Object(d.a)(e), Object(d.a)(t)).find((function(e) {
                    return e.socketId === n
                }
                ))
            }
        }
        ))
          , $ = function(e) {
            return e.game.withHistory
        }
          , ee = function(e) {
            return e.game.history
        }
          , te = n(2)
          , ne = n(3)
          , ae = "#000"
          , re = "#fff"
          , ce = "#3a0808"
          , le = "#00d7ff"
          , oe = "#d50000"
          , ie = "#00d7ff"
          , se = "#aaaaaa"
          , de = "SET_USERNAME"
          , ue = "SET_SOCKET_ID"
          , me = "UPDATE_CONNECTION_STATUS"
          , be = "SET_VIEW_BIG"
          , pe = function(e) {
            return {
                type: me,
                data: e
            }
        }
          , he = "SET_ROOM_ID"
          , Ee = "UPDATE_GAME_STATE"
          , ge = n(6)
          , fe = n(23)
          , ve = n.n(fe)
          , ye = n(66)
          , Oe = n(67)
          , ke = n(37)
          , xe = n(68)
          , we = n.n(xe)
          , je = "UPDATE_IS_LOADING";
        function Ie(e) {
            return {
                type: je,
                data: e
            }
        }
        var Se = n(14)
          , Ce = n(69)
          , Te = {
            username: localStorage.getItem("username") || "",
            socketId: localStorage.getItem("socketId") || "",
            viewBig: !("false" === localStorage.getItem("viewBig")),
            connected: !1
        };
        var Pe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === de ? (localStorage.setItem("username", t.data),
            Object(ge.a)(Object(ge.a)({}, e), {}, {
                username: t.data
            })) : t.type === ue ? (localStorage.setItem("socketId", t.data),
            Object(ge.a)(Object(ge.a)({}, e), {}, {
                socketId: t.data
            })) : t.type === be ? (localStorage.setItem("viewBig", t.data),
            Object(ge.a)(Object(ge.a)({}, e), {}, {
                viewBig: t.data
            })) : t.type === me ? Object(ge.a)(Object(ge.a)({}, e), {}, {
                connected: t.data
            }) : e
        }
          , Re = {
            roomId: localStorage.getItem("roomId") || "",
            view: "start",
            players: [],
            hostId: ""
        };
        var De = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case he:
                return Object(ge.a)(Object(ge.a)({}, e), {}, {
                    roomId: t.data
                });
            case Ee:
                return Object(ge.a)({}, t.data);
            default:
                return e
            }
        }
          , _e = "OPEN_MODAL"
          , Ne = "CLOSE_MODAL"
          , Ae = {
            open: !1,
            type: ""
        };
        var Le = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === _e ? {
                open: !0,
                type: t.data
            } : t.type === Ne ? {
                open: !1,
                type: ""
            } : e
        }
          , He = {
            isLoading: !1
        };
        var Ve = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === je ? {
                isLoading: t.data
            } : e
        }
          , Be = Object(Se.c)({
            user: Pe,
            game: De,
            modal: Le,
            loading: Ve
        })
          , Ge = window.location.href.includes("localhost")
          , Ye = ("object" === typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && Ge ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : Se.d)(Object(Se.a)(Ce.a))
          , ze = Object(Se.e)(Be, Ye)
          , Fe = function(e) {
            return {
                type: _e,
                data: e
            }
        }
          , Me = function() {
            return {
                type: Ne
            }
        }
          , Ue = {
            PLAYERS: "PLAYERS",
            IDENTITY: "IDENTITY",
            ACTION: "ACTION",
            RULES: "RULES"
        };
        var We = {
            CHOOSE_CHANCELLOR: "CHOOSE_CHANCELLOR",
            VOTING: "VOTING",
            PRESIDENT_DISCARD: "PRESIDENT_DISCARD",
            CHANCELLOR_DISCARD: "CHANCELLOR_DISCARD",
            PRESIDENT_POWER: "PRESIDENT_POWER",
            CHANCELLOR_VETO: "CHANCELLOR_VETO",
            PRESIDENT_VETO: "PRESIDENT_VETO",
            GAME_END: "GAME_END"
        }
          , Ke = {
            CARD: "CARD",
            SKIPPED: "SKIPPED",
            INSPECTED_CARDS: "INSPECTED_CARDS",
            INSPECTED_PLAYERS: "INSPECTED_PLAYERS",
            VETO: "VETO",
            KILLED: "KILLED",
            PASSED_PRESIDENT: "PASSED_PRESIDENT"
        }
          , qe = n(38)
          , Xe = n.n(qe)
          , Je = {
            start: "start",
            restartGame: "restartGame",
            chooseChancellor: "chooseChancellor",
            vote: "vote",
            discardCard: "discardCard",
            inspectPlayer: "inspectPlayer",
            choosePresident: "choosePresident",
            executePlayer: "executePlayer",
            nextState: "nextState",
            activateVeto: "activateVeto",
            decideVeto: "decideVeto",
            moveUp: "moveUp",
            kickPlayer: "kickPlayer"
        };
        function Ze() {
            var e = window.document.querySelector(".links-wrapper");
            e && e.remove()
        }
        var Qe = window.location.href.includes("localhost") ? [{
            prefix: "a",
            value: "http://localhost:52921"
        }, {
            prefix: "b",
            value: "http://localhost:52921"
        }] : [{
            prefix: "a",
            value: "https://sehi.uber.space"
        }, {
            prefix: "b",
            value: "https://sehi2.uber.space"
        }, {
            prefix: "c",
            value: "https://sehi3.uber.space"
        }];
        function $e(e) {
            return (Qe.find((function(t) {
                return t.prefix === e
            }
            )) || Qe[0]).value
        }
        function et(e) {
            return function(t) {
                if (t.some((function(e) {
                    return e.error
                }
                )))
                    throw t;
                return e(t)
            }
        }
        function tt(e) {
            var t = 0
              , n = 99999;
            return e.forEach((function(e, a) {
                e.data < n && (t = a,
                n = e.data)
            }
            )),
            t
        }
        function nt(e) {
            return at.apply(this, arguments)
        }
        function at() {
            return (at = Object(ke.a)(ve.a.mark((function e(t) {
                var n, a, r, c;
                return ve.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!t) {
                                e.next = 3;
                                break
                            }
                            return n = t[0],
                            e.abrupt("return", $e(n));
                        case 3:
                            return a = Qe.map((function(e) {
                                return Xe.a.get("".concat(e.value, "/workload"))
                            }
                            )),
                            r = a.map((function(e) {
                                return e.catch((function(e) {
                                    return {
                                        error: e
                                    }
                                }
                                ))
                            }
                            )),
                            e.next = 7,
                            Xe.a.all(r).then(et((function(e) {
                                var t, n = tt(e);
                                return null === (t = Qe[n]) || void 0 === t ? void 0 : t.value
                            }
                            ))).catch((function(e) {
                                var t, n, a = e.map((function(e, t) {
                                    return Object(ge.a)(Object(ge.a)({}, e), {}, {
                                        host: Qe[t]
                                    })
                                }
                                )).filter((function(e) {
                                    return !e.error
                                }
                                ));
                                return null === (t = a[tt(a)]) || void 0 === t || null === (n = t.host) || void 0 === n ? void 0 : n.value
                            }
                            ));
                        case 7:
                            return c = e.sent,
                            e.abrupt("return", c);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var rt = new (function() {
            function e() {
                Object(ye.a)(this, e),
                this._initiated = !1,
                this._socket = null,
                this.mode = "",
                this.username = "",
                this.roomId = "",
                this.retries = 0
            }
            return Object(Oe.a)(e, [{
                key: "reconnect",
                value: function() {
                    var e = this;
                    if (this.retries >= 3)
                        return alert("connection lost. page will reload"),
                        void (window.location.href = "");
                    setTimeout((function() {
                        e.retries += 1;
                        var t = E(ze.getState());
                        e.connect("join", e.username, t)
                    }
                    ), 2e3)
                }
            }, {
                key: "connect",
                value: function() {
                    var e = Object(ke.a)(ve.a.mark((function e(t, n, a) {
                        var r, c = this;
                        return ve.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    nt(a);
                                case 2:
                                    r = e.sent,
                                    this._socket = we()(r, {
                                        query: {
                                            mode: t,
                                            username: n,
                                            roomId: a,
                                            socketId: b(ze.getState()),
                                            boss: "hitler",
                                            viewBig: h(ze.getState())
                                        },
                                        reconnection: !1
                                    }),
                                    this.mode = t,
                                    this.username = n,
                                    this.roomId = a,
                                    window.testsocket = this._socket,
                                    this._socket.on("connect", (function() {
                                        c._initiated = !0,
                                        c.retries = 0,
                                        ze.dispatch(pe(!0)),
                                        console.log("Connected")
                                    }
                                    )),
                                    this._socket.on("connect_failed", (function(e) {
                                        c.reconnect()
                                    }
                                    )),
                                    this._socket.on("connect_error", (function(e) {
                                        c.reconnect()
                                    }
                                    )),
                                    this._socket.on("message", (function(e) {
                                        var t = JSON.parse(e)
                                          , n = t.data
                                          , a = y(ze.getState());
                                        if (ze.dispatch(Ie(!1)),
                                        "gameState" === t.ws_type) {
                                            var r = n.roundState;
                                            n.roomId && localStorage.setItem("roomId", n.roomId),
                                            r === We.PRESIDENT_DISCARD && a !== We.PRESIDENT_DISCARD && ze.dispatch(Fe(Ue.PLAYERS)),
                                            r === We.CHOOSE_CHANCELLOR && a !== We.CHOOSE_CHANCELLOR && ze.dispatch(Me()),
                                            a === We.PRESIDENT_POWER || r !== We.PRESIDENT_POWER || n.idInspectedPlayer.length || ze.dispatch(Me()),
                                            ze.dispatch({
                                                type: Ee,
                                                data: n
                                            })
                                        }
                                        "socketId" === t.ws_type && (Ze(),
                                        ze.dispatch({
                                            type: ue,
                                            data: n
                                        })),
                                        "openModal" === t.ws_type && a !== We.PRESIDENT_DISCARD && ze.dispatch(Fe(Ue.ACTION)),
                                        "error" === t.ws_type && window.alert(n)
                                    }
                                    )),
                                    this._socket.on("disconnect", (function() {
                                        var e = g(ze.getState());
                                        console.log("disconnected"),
                                        "start" !== e && (ze.dispatch(pe(!1)),
                                        c.reconnect())
                                    }
                                    ));
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "emit",
                value: function(e, t) {
                    this._socket || alert("this state should never happen, WebSocketService.emit()"),
                    ze.dispatch(Ie(!0)),
                    this._socket.emit("message", {
                        client_type: e,
                        data: t
                    })
                }
            }]),
            e
        }());
        var ct, lt, ot, it, st, dt, ut = function() {
            return r.a.createElement("div", {
                className: "sk-chase"
            }, r.a.createElement("div", {
                className: "sk-chase-dot"
            }), r.a.createElement("div", {
                className: "sk-chase-dot"
            }), r.a.createElement("div", {
                className: "sk-chase-dot"
            }), r.a.createElement("div", {
                className: "sk-chase-dot"
            }), r.a.createElement("div", {
                className: "sk-chase-dot"
            }), r.a.createElement("div", {
                className: "sk-chase-dot"
            }))
        }, mt = function(e) {
            return e.loading.isLoading
        }, bt = n(10), pt = n(39);
        var ht = ne.b.div(ct || (ct = Object(te.a)(["\n    text-align: center;\n    padding-top: 12vh;\n"])))
          , Et = ne.b.div(lt || (lt = Object(te.a)(["\n    color: ", ";\n    width: 70%;\n    margin: auto;\n    margin-top: 6%;\n    font-size: 20px;\n    font-weight: bold;\n"])), ae)
          , gt = ne.b.input(ot || (ot = Object(te.a)(["\n    margin-top: 39%;\n    margin-left: 10%;\n    width: 130px;\n\n    ", "\n"])), (function() {
            return "\n        margin: auto;\n        margin-top: 41%;\n    "
        }
        ))
          , ft = ne.b.input(it || (it = Object(te.a)(["\n    margin-top: 2%;\n    margin-left: 35%;\n    width: 130px;\n\n    ", "\n"])), (function() {
            return "\n        margin: auto;\n        margin-top: 2%;\n    "
        }
        ))
          , vt = ne.b.div(st || (st = Object(te.a)(["\n    display: none;\n    position: absolute;\n    top: 70px;\n    background: rgba(50,50,50,148);\n    color: red;\n    padding: 10px;\n    border: 1px solid black;\n    font-family: Verdana;\n"])))
          , yt = ne.b.div(dt || (dt = Object(te.a)(["\n    display: none;\n    position: absolute;\n    bottom: -100px;\n    background: rgba(50,50,50,148);\n    color: red;\n    padding: 10px;\n    border: 1px solid black;\n    font-family: Verdana;\n    font-size: 12px;\n"])))
          , Ot = function() {
            var e = Object(o.c)(m)
              , t = Object(o.c)(E)
              , n = Object(o.c)(mt)
              , c = Object(o.b)()
              , l = function(e, t) {
                e && t ? e.length > 15 ? alert("Please enter a name shorter than 15 characters") : (c(Ie(!0)),
                rt.connect("join", e, t)) : alert("Please enter username and room ID")
            }
              , i = function() {
                var e = window.location.search
                  , t = Object(a.useState)(Object(pt.parse)(e))
                  , n = Object(bt.a)(t, 2)
                  , r = n[0]
                  , c = n[1];
                return Object(a.useEffect)((function() {
                    c(Object(pt.parse)(e))
                }
                ), [e]),
                r
            }()
              , s = i.name
              , d = i.roomId;
            return Object(a.useEffect)((function() {
                if (s && d) {
                    var e = document.querySelector(".content");
                    e && e.remove(),
                    localStorage.setItem("username", s),
                    l(s, d)
                }
            }
            ), [s, d]),
            r.a.createElement(ht, null, r.a.createElement(yt, null, "There is a hard-to-fix-bug, where players are skipped after special elected president. If this bug occurs in your game, please send an email to hello@dviet.de with your roomId and the date of your round."), r.a.createElement(vt, null, "Secret Hitler Server will be restarted at 11:30 MEZ 22.03.2020 and will take 5 minutes. Please don't start a game, if you cant finish till 11:30."), !1, r.a.createElement(gt, {
                type: "text",
                value: e,
                onChange: function(e) {
                    return c(function(e) {
                        return {
                            type: de,
                            data: e
                        }
                    }(e.target.value))
                },
                placeholder: "Username"
            }), r.a.createElement(ft, {
                type: "text",
                value: t,
                onChange: function(e) {
                    return c(function(e) {
                        return {
                            type: he,
                            data: e
                        }
                    }(e.target.value))
                },
                placeholder: "Room ID (If joining)"
            }), r.a.createElement("button", {
                disabled: n,
                onClick: function() {
                    localStorage.setItem("roomId", t),
                    l(e, t)
                },
                style: {
                    marginTop: "7%"
                }
            }, "Join Game"), r.a.createElement("br", null), r.a.createElement(Et, null, n ? r.a.createElement(ut, null) : r.a.createElement("span", null, "-- OR --")), r.a.createElement("button", {
                disabled: n,
                onClick: function() {
                    return function(e) {
                        e ? e.length > 15 ? alert("please use a name shorter than 15 chars") : (c(Ie(!0)),
                        rt.connect("create", e)) : alert("please enter username")
                    }(e)
                },
                style: {
                    marginTop: "4%"
                }
            }, "Create Room"))
        };
        var kt, xt, wt, jt = function() {
            var e = Object(a.useState)({
                width: void 0,
                height: void 0
            })
              , t = Object(bt.a)(e, 2)
              , n = t[0]
              , r = t[1];
            return Object(a.useEffect)((function() {
                function e() {
                    r({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                return window.addEventListener("resize", e),
                e(),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            n
        }, It = ne.b.div(kt || (kt = Object(te.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background:rgba(50,50,50,148);\n    padding: 10px;\n    text-align: center;\n"]))), St = ne.b.div(xt || (xt = Object(te.a)(["\n    line-height: 0;\n    display: none;\n\n    @media (min-width: 768px) {\n        display: block;\n    }\n"]))), Ct = function() {
            var e = Object(o.c)(E)
              , t = Object(o.c)(m)
              , n = Object(o.c)(p)
              , a = Object(o.c)(h)
              , c = Object(o.b)();
            return r.a.createElement(It, null, r.a.createElement("div", null, t, " - Room ID: ", e), r.a.createElement("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, r.a.createElement(St, null, r.a.createElement("ion-icon", {
                onClick: function() {
                    return c(function(e) {
                        return {
                            type: be,
                            data: e
                        }
                    }(!a))
                },
                style: {
                    background: "none",
                    color: "black",
                    fontSize: 22,
                    marginRight: 10
                },
                name: a ? "phone-portrait" : "desktop"
            })), r.a.createElement("ion-icon", {
                style: {
                    background: "none",
                    color: n ? "green" : "red",
                    fontSize: 22,
                    padding: 0,
                    margin: 0,
                    border: 0
                },
                name: "ios-wifi"
            })))
        }, Tt = {
            path: "original",
            boss: "Pierce",
            bad: "Hydra Agent",
            badP: "Hydra Agents",
            goodSingle: "SHIELD Agent",
            good: "SHIELD Agent",
            goodP: "SHIELD Agents",
            badShortcut: "H",
            bossShortcut: "P",
            goodPolicy: "SHIELD Mission",
            badPolicy: "Hydra Mission",
            president: "Deputy Director",
            presidentLetter: "d",
            chancellor: "Director",
            chancellorLetter: "D"
        };
        function Pt(e) {
            return Tt[e]
        }
        var Rt, Dt, _t, Nt, At, Lt, Ht, Vt = ne.b.div(wt || (wt = Object(te.a)(["\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    text-align: right;\n    div {\n        margin-bottom: 30px;\n    }\n"]))), Bt = function(e) {
            var t = e.small;
            return r.a.createElement("ion-icon", {
                style: {
                    background: "rgba(50,50,50,148)",
                    color: "#05bd05",
                    verticalAlign: "middle",
                    fontSize: t ? "18px" : "50px",
                    cursor: "pointer"
                },
                name: "thumbs-up",
                title: "Vote Yes"
            })
        }, Gt = function(e) {
            var t = e.small;
            return r.a.createElement("ion-icon", {
                style: {
                    background: "rgba(50,50,50,148)",
                    color: "#af0000",
                    verticalAlign: "middle",
                    fontSize: t ? "18px" : "50px",
                    cursor: "pointer"
                },
                name: "thumbs-down",
                title: "Vote No"
            })
        }, Yt = function() {
            var e = Object(o.c)(A)
              , t = Object(o.c)(M)
              , n = Object(o.b)();
            function a(e) {
                rt.emit(Je.vote, e),
                n(Me())
            }
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("h4", null, "Should ", e.username, " be", " ", Pt("chancellor"), "?"), r.a.createElement(Vt, null, !!t && r.a.createElement("div", null, "Your vote: ", t), r.a.createElement("button", {
                "aria-label": "vote yes",
                style: {
                    marginRight: 20,
                    padding: 0,
                    border: "none"
                },
                onClick: function() {
                    return a("yes")
                }
            }, r.a.createElement(Bt, null)), r.a.createElement("button", {
                "aria-label": "vote no",
                style: {
                    padding: 0,
                    border: "none"
                },
                onClick: function() {
                    return a("no")
                }
            }, r.a.createElement(Gt, null))))
        }, zt = function(e, t) {
            return Pt("bad" === e && t ? "boss" : "bad" === e ? "bad" : "good")
        }, Ft = ne.b.div(Rt || (Rt = Object(te.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    line-height: 1.4;\n"]))), Mt = ne.b.div(Dt || (Dt = Object(te.a)(["\n    font-size: 20px;\n    border-bottom: 2px solid transparent;\n    border-color: ", ";\n"])), (function(e) {
            return e.connected ? le : oe
        }
        )), Ut = ne.b.div(_t || (_t = Object(te.a)(["\n    margin-left: 10px;\n"]))), Wt = ne.b.div(Nt || (Nt = Object(te.a)(["\n    border-radius: 4px;\n    display: inline-block;\n    width: 40px;\n    height: 20px;\n    text-align: center;\n    line-height: 1.5;\n    background: ", ";\n    color: rgba(50,50,50,148);\n"])), (function(e) {
            return e.chancellor ? "#a66504" : "#f8d178"
        }
        )), Kt = Object(ne.b)(Wt)(At || (At = Object(te.a)(["\n    background: rgba(50,50,50,148);\n    color: ", ";\n    border: 1px solid\n        ", ";\n"])), (function(e) {
            return e.chancellor ? "#a66504" : "#f8d178"
        }
        ), (function(e) {
            return e.chancellor ? "#a66504" : "#f8d178"
        }
        )), qt = function(e) {
            var t = e.player
              , n = e.isHost
              , a = e.index
              , c = t.socketId
              , l = Object(o.c)(g)
              , i = Object(o.c)(b)
              , s = Object(o.c)(B).socketId === c
              , d = Object(o.c)(A).socketId === c
              , u = Object(o.c)(G).socketId === c
              , m = Object(o.c)(L).socketId === c
              , p = Object(o.c)(y)
              , h = p === We.VOTING
              , E = Object(o.c)(x) && p === We.CHOOSE_CHANCELLOR || p === We.PRESIDENT_DISCARD || p === We.GAME_END
              , f = p === We.GAME_END
              , v = zt(t.role, t.isBoss)
              , O = "lobby" === l;
            return r.a.createElement(Ft, null, n && r.a.createElement("ion-icon", {
                onClick: function() {
                    return rt.emit(Je.moveUp, a)
                },
                style: {
                    background: "none",
                    color: "black",
                    fontSize: 26,
                    marginRight: 10
                },
                name: "arrow-up"
            }), r.a.createElement(Mt, {
                connected: t.connected
            }, t.username), s && r.a.createElement(Ut, null, r.a.createElement(Wt, null, Pt("presidentLetter"))), d && r.a.createElement(Ut, null, r.a.createElement(Wt, {
                chancellor: !0
            }, Pt("chancellorLetter")), " "), u && r.a.createElement(Ut, null, r.a.createElement(Kt, null, Pt("presidentLetter"))), m && r.a.createElement(Ut, null, r.a.createElement(Kt, {
                chancellor: !0
            }, Pt("chancellorLetter")), " "), h && (t.vote ? r.a.createElement("span", null, "\xa0Voted") : r.a.createElement("span", null, "\xa0Vote Missing")), E && r.a.createElement("span", null, "\xa0Voted:", " ", "yes" === t.voted ? r.a.createElement(Bt, {
                small: !0
            }) : r.a.createElement(Gt, {
                small: !0
            })), O && n && c !== i && r.a.createElement("div", {
                onClick: function() {
                    rt.emit(Je.kickPlayer, t.socketId)
                },
                style: {
                    marginLeft: 10
                }
            }, r.a.createElement("ion-icon", {
                name: "close-circle-outline",
                style: {
                    background: "none",
                    color: "black",
                    fontSize: 26,
                    marginRight: 10
                }
            })), f && r.a.createElement("span", null, "\xa0Role: ", v))
        }, Xt = ne.b.div(Lt || (Lt = Object(te.a)(["\n    margin: 10px 0;\n"]))), Jt = ne.b.div(Ht || (Ht = Object(te.a)(["\n    display: flex;\n    align-items: center;\n"])));
        var Zt, Qt, $t = function(e) {
            var t = e.isHost
              , n = Object(o.c)(f)
              , a = n.length
              , c = Object(o.c)(z)
              , l = Object(o.c)(y)
              , i = Object(o.c)(P)
              , s = l === We.GAME_END
              , d = a + i.length
              , u = function(e) {
                return e <= 6 ? 2 : e <= 8 ? 3 : 4
            }(d)
              , m = d - u;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", null, "Game status"), r.a.createElement(Xt, null, "Players: ", d, " (total)"), d >= 5 && r.a.createElement(r.a.Fragment, null, r.a.createElement(Xt, null, Pt("goodP"), ": ", m), r.a.createElement(Xt, null, Pt("badP"), " (", Pt("badShortcut"), "): ", u, " ", "incl. ", Pt("boss"), " (", Pt("bossShortcut"), ")"), r.a.createElement(Xt, null, c ? "".concat(Pt("boss"), " knows ").concat(Pt("bad")) : "".concat(Pt("boss"), " doesnt know the ").concat(Pt("badP")))), r.a.createElement(Xt, null, "Alive: ", a), r.a.createElement(Jt, null, r.a.createElement("div", {
                style: {
                    borderBottom: "2px solid ".concat(le),
                    marginRight: 10
                }
            }, "Connected"), r.a.createElement("div", {
                style: {
                    borderBottom: "2px solid ".concat(oe)
                }
            }, "Not Connected")), " ", r.a.createElement("br", null), r.a.createElement("div", null, Pt("presidentLetter"), " - ", Pt("president")), r.a.createElement("div", null, Pt("chancellorLetter"), " - ", Pt("chancellor")), n.map((function(e, n) {
                return r.a.createElement(qt, {
                    isHost: t,
                    index: n,
                    key: e.socketId,
                    player: e
                })
            }
            )), s && i.map((function(e) {
                return r.a.createElement(qt, {
                    key: e.socketId,
                    player: e
                })
            }
            )))
        }, en = ne.b.div(Zt || (Zt = Object(te.a)(["\n    margin: 10px;\n    padding: 10px;\n    background: rgba(50,50,50,148);\n    min-height: 200px;\n    border: 1px solid black;\n"]))), tn = ne.b.div(Qt || (Qt = Object(te.a)(["\n    margin: 10px;\n    background: rgba(50,50,50,148);\n    padding: 10px;\n"])));
        var nn, an = function() {
            var e = Object(o.c)(v)
              , t = Object(o.c)(b)
              , n = Object(o.c)(mt)
              , c = Object(o.c)(f)
              , l = Object(o.c)(h)
              , i = Object(o.c)(O)
              , s = "true" === (localStorage.getItem("withHistoryChecked") || !1)
              , d = Object(a.useState)(s)
              , u = Object(bt.a)(d, 2)
              , m = u[0]
              , p = u[1]
              , E = e === t
              , g = jt().width < 768 || !l;
            return Object(a.useEffect)((function() {
                i || (window.location.href = window.location.href)
            }
            ), [i]),
            r.a.createElement(r.a.Fragment, null, r.a.createElement(Ct, null), r.a.createElement(en, null, r.a.createElement($t, {
                isHost: E
            }), E && r.a.createElement("span", null, "You may change the player order by clicking on the arrow icon. To kick a player (only here in the lobby), click the X.")), E ? r.a.createElement("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, r.a.createElement("button", {
                disabled: n,
                style: {
                    marginLeft: 10
                },
                onClick: function() {
                    c.length >= 5 ? rt.emit(Je.start, {
                        withHistory: m
                    }) : alert("You need at least five players to begin")
                }
            }, "Start"), !g && r.a.createElement("div", {
                style: {
                    background: "black",
                    display: "flex",
                    alignItems: "flex-end"
                }
            }, r.a.createElement("input", {
                id: "withHistory",
                type: "checkbox",
                checked: true,
                onChange: function() {
                    return e = !m,
                    localStorage.setItem("withHistoryChecked", e),
                    void p(e);
                    var e
                }
            }), r.a.createElement("label", {
                htmlFor: "withHistory"
            }, "Allow history? (Desktop only)"))) : r.a.createElement(tn, null, "Host can change player order & start the game"))
        }, rn = function(e) {
            return e.modal.open
        }, cn = function(e) {
            return e.modal.type
        }, ln = ne.b.div(nn || (nn = Object(te.a)(["\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    ion-icon {\n        margin-bottom: 12px;\n        font-size: 34px;\n        padding: 10px;\n        border-radius: 12px;\n        border-color: black;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n"])));
        function on(e, t, n) {
            if (e === We.VOTING)
                return !0;
            if (e === We.GAME_END)
                return !1;
            if (t)
                switch (e) {
                case We.CHOOSE_CHANCELLOR:
                case We.PRESIDENT_DISCARD:
                case We.PRESIDENT_POWER:
                case We.PRESIDENT_VETO:
                    return !0;
                default:
                    return !1
                }
            if (n)
                switch (e) {
                case We.CHANCELLOR_DISCARD:
                case We.CHANCELLOR_VETO:
                    return !0;
                default:
                    return !1
                }
        }
        var sn, dn = function() {
            var e = Object(o.b)()
              , t = Object(o.c)(cn)
              , n = on(Object(o.c)(y), Object(o.c)(H), Object(o.c)(V));
            return r.a.createElement(ln, null, r.a.createElement("button", {
                style: {
                    padding: 0,
                    lineHeight: 0,
                    border: "none",
                    marginBottom: 10,
                    borderRadius: 12
                },
                onClick: function() {
                    return e(Fe(Ue.PLAYERS))
                }
            }, r.a.createElement("ion-icon", {
                active: t === Ue.PLAYERS,
                name: "list"
            })), r.a.createElement("button", {
                style: {
                    padding: 0,
                    lineHeight: 0,
                    border: "none",
                    marginBottom: 10
                },
                onClick: function() {
                    return e(Fe(Ue.IDENTITY))
                }
            }, r.a.createElement("ion-icon", {
                active: t === Ue.IDENTITY,
                name: "person"
            })), r.a.createElement("button", {
                onClick: function() {
                    n && e(Fe(Ue.ACTION))
                },
                disabled: !n,
                style: {
                    padding: 0,
                    lineHeight: 0,
                    border: "none",
                    marginBottom: 10
                }
            }, r.a.createElement("ion-icon", {
                disabled: !n,
                active: t === Ue.ACTION,
                name: "ios-flash"
            })), r.a.createElement("button", {
                style: {
                    padding: 0,
                    lineHeight: 0,
                    border: "none",
                    marginBottom: 10
                },
                onClick: function() {
                    return e(Fe(Ue.RULES))
                }
            }, r.a.createElement("ion-icon", {
                active: t === Ue.RULES,
                name: "book"
            })))
        }, un = ne.b.div(sn || (sn = Object(te.a)(["\n    margin: 20px 0;\n    width: 22px;\n    height: 22px;\n    padding: 6px;\n    padding-right: 8px;\n    padding-bottom: 8px;\n    border: 1px solid white;\n\n    ", "\n\n    &:first-child {\n        margin-top: 0;\n    }\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    ion-icon {\n        background: none;\n        font-size: 24px;\n        padding: 0;\n        border: none;\n        border-radius: 0;\n    }\n\n    img {\n        max-width: 100%;\n    }\n"])), (function(e) {
            return e.hasCard && "\n        padding: 0;\n        width: 38px;\n        height: 38px;\n        border: 0;\n    "
        }
        ));
        var mn = {
            inspect: r.a.createElement("ion-icon", {
                name: "search",
                "aria-label": "inspect power"
            }),
            viewCards: r.a.createElement("ion-icon", {
                name: "albums",
                "aria-label": "view cards power"
            }),
            selectPresident: r.a.createElement("ion-icon", {
                name: "ios-git-merge",
                "aria-label": "select president power"
            }),
            execute: r.a.createElement("ion-icon", {
                name: "ios-heart-dislike",
                "aria-label": "execute power"
            })
        };
        function bn(e, t) {
            return 3 === e || 4 === e ? mn.execute : t >= 9 ? function(e) {
                return e <= 1 ? mn.inspect : 2 === e ? mn.selectPresident : null
            }(e) : t >= 7 ? function(e) {
                return 1 === e ? mn.inspect : 2 === e ? mn.selectPresident : null
            }(e) : function(e) {
                return 2 === e ? mn.viewCards : null
            }(e)
        }
        var pn, hn, En, gn, fn = function(e) {
            var t = e.good
              , n = e.bad
              , a = e.index
              , c = e.nPlayers
              , l = function(e) {
                var t = e.index
                  , n = e.good
                  , a = e.bad
                  , r = e.goodTrack
                  , c = e.badTrack;
                return n && t + 1 <= r || a && t + 1 <= c
            }(e);
            if (l && t)
                return r.a.createElement(un, {
                    hasCard: !0
                }, r.a.createElement("img", {
                    alt: "card liberal",
                    "aria-label": "card liberal",
                    src: "/images/".concat(Pt("path"), "/track-good.jpg")
                }));
            if (l && n)
                return r.a.createElement(un, {
                    hasCard: !0
                }, r.a.createElement("img", {
                    alt: "card fascist",
                    "aria-label": "card fascist",
                    src: "/images/".concat(Pt("path"), "/track-bad.jpg")
                }));
            if (t)
                return r.a.createElement(un, null);
            var o = bn(a, c);
            return r.a.createElement(un, null, o)
        }, vn = ne.b.div(pn || (pn = Object(te.a)(["\n    display: flex;\n    justify-content: flex-start;\n"]))), yn = ne.b.div(hn || (hn = Object(te.a)(["\n    margin-left: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n"]))), On = ne.b.div(En || (En = Object(te.a)(["\n    margin-top: -1px;\n    padding: 10px;\n    background: ", ";\n    color: white;\n\n    ", "\n"])), (function(e) {
            return e.phoenix ? "#eb4141" : e.dark ? "#684a6f" : "#805a89"
        }
        ), (function(e) {
            return "\n        background: ".concat(e.phoenix ? "#6a97c1" : e.dark ? "#a04b4b" : "#c36969", ";\n    ")
        }
        )), kn = ne.b.div(gn || (gn = Object(te.a)(["\n    border: 2px solid black;\n"])));
        function xn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return Array.from({
                length: t
            }).map((function(t, n) {
                return n + e
            }
            ))
        }
        var wn = function() {
            var e = Object(o.c)(f)
              , t = Object(o.c)(X)
              , n = t.goodTrack
              , a = t.badTrack
              , c = e.length
              , l = xn(0, 5)
              , i = xn(0, 3)
              , s = xn(3, 3);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(vn, null, r.a.createElement(yn, null, r.a.createElement(kn, null, r.a.createElement(On, {
                phoenix: !0
            }, l.map((function(e) {
                return r.a.createElement(fn, {
                    good: !0,
                    key: e,
                    index: e,
                    goodTrack: n
                })
            }
            ))))), r.a.createElement(yn, null, r.a.createElement(kn, null, r.a.createElement(On, null, i.map((function(e) {
                return r.a.createElement(fn, {
                    bad: !0,
                    key: e,
                    index: e,
                    badTrack: a,
                    nPlayers: c
                })
            }
            ))), r.a.createElement(On, {
                dark: !0
            }, s.map((function(e) {
                return r.a.createElement(fn, {
                    bad: !0,
                    key: e,
                    index: e,
                    badTrack: a,
                    nPlayers: c
                })
            }
            )))))))
        };
        function jn(e) {
            var t = e.title
              , n = e.defaultOpen
              , c = e.children
              , l = Object(a.useState)(n)
              , o = Object(bt.a)(l, 2)
              , i = o[0]
              , s = o[1];
            return r.a.createElement("div", {
                style: {
                    border: "1px solid black",
                    marginBottom: 2,
                    paddingLeft: 6,
                    paddingRight: 6,
                    borderRadius: 1
                }
            }, r.a.createElement("div", {
                onClick: function() {
                    return s(!i)
                }
            }, t), i && r.a.createElement("div", null, c))
        }
        jn.defaultProps = {
            defaultOpen: !1
        };
        var In = jn;
        var Sn, Cn, Tn = function() {
            return r.a.createElement("div", null, r.a.createElement("h2", null, "Rules"), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Overview"),
                defaultOpen: !0
            }, r.a.createElement("p", null, "Each player is secretly assigned to one of 3 roles:", " ", Pt("good"), ", ", Pt("bad"), " or", " ", Pt("boss"), ". The opposing teams are\xa0", Pt("goodP"), " and ", Pt("badP"), ". The", " ", Pt("goodP"), " have a majority, but they dont know who anyone is. The ", Pt("badP"), "\xa0knows", " ", Pt("boss"), " and each other. ", Pt("boss"), " ", "belongs to team\xa0", Pt("bad"), " but does not know who anyone is - like a ", Pt("good"), ".")), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Object")
            }, r.a.createElement("p", null, Pt("goodSingle"), " team win: ", r.a.createElement("br", null), "\u2022 Five", " ", Pt("goodSingle"), " Policies are enacted. ", r.a.createElement("br", null), "OR ", r.a.createElement("br", null), "\u2022 ", Pt("boss"), " is assassinated."), r.a.createElement("p", null, Pt("bad"), " team win: ", r.a.createElement("br", null), "\u2022 Six ", Pt("bad"), " ", "Policies are enacted. ", r.a.createElement("br", null), "OR ", r.a.createElement("br", null), "\u2022 ", Pt("boss"), " is elected Chancellor any time after the third ", Pt("badPolicy"), " has been enacted.")), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Gameplay")
            }, r.a.createElement("p", null, "Secret ", Pt("boss"), " is played in rounds. Each round has an Election, a Legislative Session to enact a new Policy and an Executive Action to use a presidential power, if possible.")), r.a.createElement(In, {
                title: r.a.createElement("h4", null, "Election")
            }, r.a.createElement("p", null, "Each round the president placard is moving to the next player. The president has to choose a chancellor. The previous chancellor or president cant be nominated. (Except only 5 or less players are left, then the previous president can be chancellor as well) Then everyone votes if they agree to the election. The election tracker will be moved by 1 whenever the election fails.")), r.a.createElement(In, {
                title: r.a.createElement("h4", null, "Legislative Session")
            }, r.a.createElement("p", null, "During this stage the president and chancellor are not allowed to talk. The president gets 3 policies and discards one. The remaining 2 policies will be given to the chancellor. The chancellor then discards 1 policy and the remaining one will be enacted. ", r.a.createElement("br", null), " In total there are 6", " ", Pt("good"), " policies and 11 ", Pt("bad"), " ", "policies.")), r.a.createElement(In, {
                title: r.a.createElement("h4", null, "Executive Action")
            }, r.a.createElement("p", null, "Whenever a ", Pt("badPolicy"), " was enacted on a slot with an Icon a special presidential power is activated. The president has to use this power before the next round starts.")), r.a.createElement(In, {
                title: r.a.createElement("h4", null, "Presidential powers")
            }, r.a.createElement("p", null, "The availability of a certain power is dependent on the number of players.")), r.a.createElement(In, {
                title: r.a.createElement("h5", null, "Inspect cards")
            }, r.a.createElement("p", null, "See the next 3 cards.")), r.a.createElement(In, {
                title: r.a.createElement("h5", null, "Inspect player")
            }, r.a.createElement("p", null, "See the membership card (", Pt("good"), " or", " ", Pt("bad"), ") of a player. ", Pt("bad"), " can be a normal ", Pt("bad"), " or\xa0", Pt("boss"), ".")), r.a.createElement(In, {
                title: r.a.createElement("h5", null, "Select president")
            }, r.a.createElement("p", null, "Select the next president. After the round the regular order will be continued.")), r.a.createElement(In, {
                title: r.a.createElement("h5", null, "Execute")
            }, r.a.createElement("p", null, "Execute a player. If ", Pt("boss"), " is executed, the", " ", Pt("goodP"), " win.")), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Election tracker")
            }, r.a.createElement("p", null, "The election tracker is moved by 1 slot each time an election fails. If it fails for the 3rd time the top most card will be enacted without activating the presidential power. Each time a policy has been enacted the election tracker will be resetted.")), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Veto power")
            }, r.a.createElement("p", null, "If there are 5 ", Pt("bad"), " policies on the board the chancellor has the option to veto during the Legislative session. If the president then agrees, the cards will be discarded and the election tracker will be moved by 1 slot. If the president denies the veto, the chancellor must choose to discard one policy and enact the remaining.")), r.a.createElement(In, {
                title: r.a.createElement("h3", null, "Shuffle cards")
            }, r.a.createElement("p", null, "If there are less than 3 cards remaining in the drawpile at the end of a round, the cards will be shuffled automatically.")))
        }, Pn = ne.b.img(Sn || (Sn = Object(te.a)(["\n    width: 48%;\n"]))), Rn = ne.b.div(Cn || (Cn = Object(te.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: 100%;\n"])));
        var Dn = function() {
            var e = Object(o.c)(Y)
              , t = e.role
              , n = e.isBoss
              , a = "/images/".concat(Pt("path"), "/").concat(n ? "boss" : t, ".jpg")
              , c = "/images/".concat(Pt("path"), "/a-").concat(t, ".jpg")
              , l = Object(o.c)(z)
              , i = Object(o.c)(F)
              , s = r.a.createElement("h4", null, l ? "".concat(Pt("boss"), " knows ").concat(Pt("bad")) : "".concat(Pt("boss"), " doesnt know his ").concat(Pt("badP")))
              , d = function(e, t, n) {
                return e && !t ? r.a.createElement("h4", null, "You play with ", n.length, " ", Pt("badP"), " but don't know who they are.") : r.a.createElement(r.a.Fragment, null, r.a.createElement("h4", null, "Team:"), r.a.createElement("h4", null, n.map((function(e) {
                    return r.a.createElement("div", {
                        key: e.socketId
                    }, e.username, " -", " ", zt("bad", e.isBoss))
                }
                ))))
            }(n, l, i);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", null, "Your identity"), r.a.createElement(Rn, null, r.a.createElement(Pn, {
                src: a,
                alt: ""
            }), r.a.createElement(Pn, {
                src: c,
                alt: ""
            })), "bad" === t ? r.a.createElement("h4", null, "You are a ", Pt("bad")) : r.a.createElement("h4", null, "You are a ", Pt("good")), n && r.a.createElement("h4", null, "Also: you are ", Pt("boss")), "bad" === t ? d : s)
        };
        var _n, Nn = function() {
            return r.a.createElement(a.Fragment, null, r.a.createElement("h4", null, "Veto: Do you agree to discard all cards?"), r.a.createElement(Vt, null, r.a.createElement("button", {
                type: "button",
                onClick: function() {
                    return rt.emit(Je.decideVeto, "yes")
                },
                className: "secondary"
            }, "YES"), r.a.createElement("button", {
                type: "button",
                onClick: function() {
                    return rt.emit(Je.decideVeto, "no")
                },
                className: "secondary"
            }, "NO")))
        }, An = ne.b.div(_n || (_n = Object(te.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n    padding: 6px 0;\n"])));
        var Ln, Hn, Vn = function(e) {
            var t = e.players
              , n = e.emitType
              , a = Object(o.c)(b)
              , c = Object(o.c)(y)
              , l = Object(o.c)(J)
              , i = Object(o.c)(L)
              , s = Object(o.c)(G)
              , d = Object(o.c)(mt)
              , u = function(e, t) {
                if (e === We.CHOOSE_CHANCELLOR)
                    return "Please choose a ".concat(Pt("chancellor"), ".");
                if (e === We.PRESIDENT_POWER) {
                    if ("inspect" === t)
                        return "Please choose player you would like to inspect.";
                    if ("selectPresident" === t)
                        return "Please choose the next ".concat(Pt("president"), ".");
                    if ("execute" === t)
                        return "Choose player you would like to execute."
                }
            }(c, l)
              , m = c === We.CHOOSE_CHANCELLOR;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("h4", null, u), t.map((function(e) {
                var c = e.socketId === a
                  , l = m && e.socketId === i.socketId
                  , o = m && t.length > 5 && e.socketId === s.socketId;
                return r.a.createElement(An, {
                    key: e.socketId
                }, r.a.createElement(qt, {
                    player: e
                }), !l && !o && !c && r.a.createElement("button", {
                    "aria-label": "select ".concat(e.username),
                    disabled: d,
                    type: "button",
                    onClick: function() {
                        return rt.emit(n, e.socketId)
                    },
                    className: "secondary"
                }, "select"))
            }
            )))
        }, Bn = ne.b.div(Ln || (Ln = Object(te.a)(["\n    display: flex;\n    margin-bottom: 10px;\n\n    img {\n        max-width: 100%;\n    }\n\n    ion-icon {\n        margin-bottom: 6px;\n        position: relative !important;\n        border: 1px solid black !important;\n        border-radius: 2px;\n        font-size: 32px;\n    }\n"]))), Gn = function(e) {
            var t = e.nCardsToShow
              , n = e.power
              , c = Object(o.c)(q)
              , l = Object(o.c)(X).badTrack
              , i = Object(o.c)(S)
              , s = Object(a.useState)([])
              , u = Object(bt.a)(s, 2)
              , m = u[0]
              , b = u[1]
              , p = !i && l >= 5 && 2 === t
              , h = c(t);
            var E = 3 === t ? 2 : 1;
            return r.a.createElement(r.a.Fragment, null, n ? r.a.createElement("h3", null, "next 3 cards") : r.a.createElement("h3", null, "Policy selection"), p && r.a.createElement("div", {
                style: {
                    marginBottom: 20,
                    textAlign: "right"
                }
            }, r.a.createElement("button", {
                type: "button",
                className: "secondary",
                onClick: function() {
                    return rt.emit(Je.activateVeto)
                }
            }, "Veto")), r.a.createElement(Bn, null, h.map((function(e, t) {
                var a = m.includes(t);
                return r.a.createElement("div", {
                    style: {
                        padding: 3,
                        margin: 2,
                        border: "3px solid transparent",
                        borderColor: a ? ie : "transparent"
                    },
                    key: t
                }, r.a.createElement("button", {
                    style: {
                        padding: 0,
                        border: "none",
                        lineHeight: 0
                    },
                    onClick: function() {
                        return n ? null : function(e) {
                            if (!m.includes(e)) {
                                var t = [].concat(Object(d.a)(m), [e]);
                                b(t.splice(t.length - E))
                            }
                        }(t)
                    }
                }, r.a.createElement("img", {
                    tabIndex: 1,
                    role: "button",
                    "aria-label": "policy ".concat(e),
                    title: "policy ".concat(e),
                    src: "/images/".concat(Pt("path"), "/policy-").concat(e, ".jpg")
                })))
            }
            ))), n ? r.a.createElement("button", {
                type: "button",
                className: "secondary",
                onClick: function() {
                    rt.emit(Je.nextState)
                }
            }, "ok") : r.a.createElement("span", null, r.a.createElement("button", {
                type: "button",
                className: "secondary",
                onClick: function() {
                    return function() {
                        for (var e, n = 0; n < h.length; n++)
                            m.includes(n) || (e = h[n]);
                        console.log(e),
                        rt.emit(Je.discardCard, {
                            card: e,
                            nCardsToShow: t
                        })
                    }()
                },
                disabled: E !== m.length
            }, "Accept selection"), r.a.createElement("br", null), r.a.createElement("br", null), 3 === t && r.a.createElement("span", null, "Choose the policy you want to keep. They will be passed to ", Pt("chancellor"), "."), 2 === t && r.a.createElement("span", null, "Choose the policy you want to keep. This card will be placed on board.")))
        }, Yn = ne.b.img(Hn || (Hn = Object(te.a)(["\n    width: 48%;\n"]))), zn = function(e) {
            var t = e.player
              , n = "/images/".concat(Pt("path"), "/a-").concat(t.role, ".jpg");
            return r.a.createElement("div", null, r.a.createElement("h3", null, "Membership of ", t.username), r.a.createElement(Yn, {
                src: n,
                alt: "role: ".concat(t.role),
                "aria-label": "role: ".concat(t.role)
            }), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("button", {
                type: "button",
                onClick: function() {
                    return rt.emit(Je.nextState)
                },
                className: "secondary"
            }, "done"))
        };
        var Fn, Mn, Un, Wn, Kn, qn, Xn = function() {
            return r.a.createElement("div", null, "end")
        }, Jn = function() {
            var e = Object(o.c)(y)
              , t = Object(o.c)(f)
              , n = Object(o.c)(b)
              , a = Object(o.c)(P)
              , c = Object(o.c)(Z)
              , l = Object(o.c)(J)
              , i = Object(o.c)(H)
              , s = Object(o.c)(V)
              , d = a.some((function(e) {
                return e.socketId === n
            }
            ));
            if (!on(e, i, s) || d)
                return r.a.createElement("div", null, "There is nothing to do at the moment");
            if (e === We.CHOOSE_CHANCELLOR)
                return r.a.createElement(Vn, {
                    players: t,
                    emitType: Je.chooseChancellor
                });
            if (e === We.VOTING)
                return r.a.createElement(Yt, null);
            if (e === We.PRESIDENT_DISCARD)
                return r.a.createElement(Gn, {
                    nCardsToShow: 3
                });
            if (e === We.CHANCELLOR_DISCARD)
                return r.a.createElement(Gn, {
                    nCardsToShow: 2
                });
            if (e === We.PRESIDENT_VETO)
                return r.a.createElement(Nn, null);
            if (e === We.GAME_END)
                return r.a.createElement(Xn, null);
            if (e === We.PRESIDENT_POWER) {
                if ("viewCards" === l)
                    return r.a.createElement(Gn, {
                        nCardsToShow: 3,
                        power: l
                    });
                if ("inspect" === l)
                    return c ? r.a.createElement(zn, {
                        player: c
                    }) : r.a.createElement(Vn, {
                        players: t,
                        emitType: Je.inspectPlayer
                    });
                if ("selectPresident" === l)
                    return r.a.createElement(Vn, {
                        players: t,
                        emitType: Je.choosePresident
                    });
                if ("execute" === l)
                    return r.a.createElement(Vn, {
                        players: t,
                        emitType: Je.executePlayer
                    })
            }
            return r.a.createElement("div", null, "action content for: ", e)
        }, Zn = function() {
            var e = Object(o.c)(cn)
              , t = Object(o.c)(P)
              , n = Object(o.c)(b)
              , a = t.some((function(e) {
                return e.socketId === n
            }
            ));
            return e === Ue.PLAYERS ? r.a.createElement($t, null) : e === Ue.IDENTITY ? r.a.createElement(Dn, null) : e === Ue.RULES ? r.a.createElement(Tn, null) : a ? r.a.createElement("div", null, "You have been executed") : e === Ue.ACTION ? r.a.createElement(Jn, null) : r.a.createElement("div", null, e)
        }, Qn = ne.b.div(Fn || (Fn = Object(te.a)(["\n    background: rgba(50,50,50,148);\n    border-radius: 2px;\n    left: 0;\n    margin: auto;\n    height: 340px;\n    padding: 10px;\n    padding-bottom: 60px; /* space for close button */\n    position: fixed;\n    right: 0;\n    top: 10%;\n    width: 80%;\n    z-index: 999;\n\n    @media (min-width: 400px) {\n        width: 260px;\n        margin: auto;\n    }\n\n    .close {\n        position: absolute;\n        bottom: 1px;\n        right: 0;\n        color: black;\n        background: rgba(50,50,50,148);\n        border: none;\n        line-height: 0;\n        padding: 0;\n    }\n"]))), $n = ne.b.div(Mn || (Mn = Object(te.a)(["\n    position: relative;\n    height: 100%;\n    overflow-y: scroll;\n"]))), ea = ne.b.div(Un || (Un = Object(te.a)(["\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 2;\n"]))), ta = function() {
            var e = Object(o.b)()
              , t = Object(o.c)(rn)
              , n = Object(o.c)(cn)
              , a = Object(o.c)(y)
              , c = Object(o.c)(h)
              , l = Object(o.c)(H)
              , i = Object(o.c)(V)
              , s = jt();
            return !t || c && s.width >= 768 ? null : n !== Ue.ACTION || on(a, l, i) ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ea, {
                onClick: function() {
                    return e(Me())
                }
            }), r.a.createElement(Qn, null, r.a.createElement($n, null, r.a.createElement(Zn, null)), r.a.createElement("button", {
                class: "close",
                "aria-label": "close modal",
                onClick: function() {
                    return e(Me())
                }
            }, r.a.createElement("ion-icon", {
                style: {
                    background: "none",
                    color: "black"
                },
                name: "ios-close"
            })))) : null
        }, na = ne.b.div(Wn || (Wn = Object(te.a)(["\n    display: flex;\n    align-items: flex-start;\n    margin-left: 20px;\n"]))), aa = ne.b.div(Kn || (Kn = Object(te.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 4px;\n    background: rgba(50,50,50,148);\n    margin-right: 10px;\n    text-align: center;\n    border-radius: 3px;\n    border: 1px solid black;\n\n    & > div {\n        color: white;\n        background: ", ";\n        width: 26px;\n        height: 36px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 3px;\n    }\n\n    ion-icon {\n        font-size: 20px;\n        border: none;\n        background: none;\n        color: ", ";\n    }\n"])), (function(e) {
            return e.draw ? ie : se
        }
        ), ce), ra = function() {
            var e = Object(o.c)(W)
              , t = Object(o.c)(K)
              , n = Object(o.c)(y)
              , a = e.length
              , c = t.length;
            return n === We.PRESIDENT_DISCARD && (a -= 3),
            n === We.CHANCELLOR_DISCARD && (a -= 2),
            r.a.createElement(na, null, r.a.createElement(aa, {
                draw: !0
            }, r.a.createElement("ion-icon", {
                name: "ios-arrow-up"
            }), r.a.createElement("div", null, a)), r.a.createElement(aa, null, r.a.createElement("ion-icon", {
                name: "ios-arrow-down"
            }), r.a.createElement("div", null, c)))
        }, ca = ne.b.div(qn || (qn = Object(te.a)(["\n    white-space: pre-line;\n    background: rgba(50,50,50,148);\n    padding: 14px;\n    border-radius: 4px;\n    border: 1px solid black;\n"])));
        var la, oa, ia, sa = function() {
            var e = Object(o.c)(y)
              , t = Object(o.c)(w)
              , n = Object(o.c)(B)
              , a = Object(o.c)(j)
              , c = Object(o.c)(x)
              , l = Object(o.c)(A)
              , i = Object(o.c)(U)
              , s = i.nYes
              , d = i.nNo
              , u = function(e, t, n, a, r, c, l, o, i, s) {
                if (e === We.CHOOSE_CHANCELLOR) {
                    var d = l ? "".concat(o.username, " was executed.\n\n") : ""
                      , u = c ? "Election tracker reached 3 fails. Top-most card is placed without side effects.\n\n" : ""
                      , m = r && "".concat(Pt("good" === r ? "goodPolicy" : "badPolicy"), " has been placed.\n\n");
                    return "".concat(d).concat(u).concat(m && m, " ").concat(t.username, " is electing the ").concat(Pt("chancellor"), ".")
                }
                if (e === We.VOTING)
                    return "".concat(t.username, " elected ").concat(n.username, " to be ").concat(Pt("chancellor"), "\n\nEveryone votes now.");
                if (e === We.PRESIDENT_DISCARD)
                    return "".concat(t.username, " is ").concat(Pt("president"), " and gets 3 cards and passes 2 to ").concat(Pt("chancellor"), " ").concat(n.username, ".");
                if (e === We.CHANCELLOR_DISCARD)
                    return "".concat(Pt("chancellor"), " ").concat(n.username, " got 2 cards and now discards 1.");
                if (e === We.PRESIDENT_POWER) {
                    var b = {
                        viewCards: "".concat(Pt("president"), " views top-most 3 cards."),
                        execute: "".concat(Pt("president"), " executes a player."),
                        inspect: "".concat(Pt("president"), " views membership of a player."),
                        selectPresident: "".concat(Pt("president"), " selects the next ").concat(Pt("president"), ".")
                    };
                    return "".concat(Pt("bad"), " policy has been placed.\n\nCurrent power: ").concat(b[a])
                }
                if (e === We.PRESIDENT_VETO)
                    return "".concat(Pt("chancellor"), " ").concat(n.username, " wishes to veto.\n\n").concat(Pt("president"), " ").concat(t.username, " can accept.");
                if (e === We.GAME_END) {
                    var p, h = Pt("bad" === i ? "badP" : "goodP");
                    return "boss-elected" === s && (p = "".concat(Pt("boss"), " was elected after 3 ").concat(Pt("bad"), " policies have been placed.")),
                    "boss-executed" === s && (p = "".concat(Pt("boss"), " was executed.")),
                    "policy" === s && (p = "Enough policies have been placed."),
                    "Team ".concat(h, " won!\n\n").concat(p)
                }
                return "this should never happen"
            }(e, n, l, Object(o.c)(J), t, a, Object(o.c)(I), Object(o.c)(R), Object(o.c)(C), Object(o.c)(T))
              , m = e === We.PRESIDENT_DISCARD;
            return r.a.createElement(ca, null, c && "Voting failed.\n", m && "Vote success.\n", (c || m) && r.a.createElement("div", null, r.a.createElement(Bt, {
                small: !0
            }), " ", s, " \xa0\xa0", r.a.createElement(Gt, {
                small: !0
            }), " ", d, r.a.createElement("br", null), r.a.createElement("br", null)), u)
        }, da = ne.b.div(la || (la = Object(te.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]))), ua = ne.b.div(oa || (oa = Object(te.a)(["\n    background: ", ";\n    padding: 6px;\n    border: 1px solid black;\n"])), re), ma = ne.b.div(ia || (ia = Object(te.a)(["\n    margin-bottom: 10px;\n    border: 1px solid ", ";\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    &:last-child {\n        margin-bottom: 0;\n    }\n    text-align: center;\n    background: ", ";\n"])), (function(e) {
            return e.active ? "transparent" : ae
        }
        ), (function(e) {
            return e.active ? ie : "none"
        }
        )), ba = function() {
            var e = Object(o.c)(k);
            return r.a.createElement(da, null, r.a.createElement(ua, null, r.a.createElement(ma, {
                active: 0 === e
            }), r.a.createElement(ma, {
                active: 1 === e
            }), r.a.createElement(ma, {
                active: 2 === e
            }), r.a.createElement(ma, null, "x")))
        }, pa = Ke, ha = pa.CARD, Ea = pa.SKIPPED, ga = pa.INSPECTED_CARDS, fa = pa.INSPECTED_PLAYERS, va = pa.VETO, ya = pa.KILLED, Oa = pa.PASSED_PRESIDENT;
        var ka = function() {
            var e = Object(o.c)(ee)
              , t = Object(o.c)(Q);
            return r.a.createElement("div", null, r.a.createElement("h3", null, "History"), e.map((function(e, n) {
                var a = Object(bt.a)(e, 3)
                  , c = a[0]
                  , l = a[1]
                  , o = a[2];
                return r.a.createElement("div", {
                    key: n,
                    style: {
                        display: "flex",
                        wrap: "nowrap",
                        alignItems: "center",
                        marginBottom: 4
                    }
                }, r.a.createElement("div", {
                    style: {
                        width: 28
                    }
                }, n + 1, ".\xa0"), r.a.createElement("div", {
                    style: {
                        width: 160
                    }
                }, t(c).username), r.a.createElement("div", {
                    style: {
                        flexShrink: 0
                    }
                }, "\xa0->\xa0"), r.a.createElement("div", {
                    style: {
                        width: 160
                    }
                }, t(l).username), r.a.createElement("div", null, "\xa0|\xa0"), r.a.createElement("div", null, function(e) {
                    if (e.type === ha)
                        return r.a.createElement("img", {
                            style: {
                                width: 20
                            },
                            src: "/images/".concat(Pt("path"), "/policy-").concat(e.payload, ".jpg")
                        });
                    if (e.type === Ea)
                        return "skipped";
                    if (e.type === ga)
                        return r.a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, r.a.createElement("img", {
                            style: {
                                width: 20,
                                marginRight: 10
                            },
                            src: "/images/".concat(Pt("path"), "/policy-bad.jpg")
                        }), r.a.createElement("div", null, "inspected cards"));
                    if (e.type === fa) {
                        var n = t(e.payload);
                        return r.a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, r.a.createElement("img", {
                            style: {
                                width: 20,
                                marginRight: 10
                            },
                            src: "/images/".concat(Pt("path"), "/policy-bad.jpg")
                        }), r.a.createElement("div", null, "inspected ", n.username))
                    }
                    if (e.type === va)
                        return "veto";
                    if (e.type === ya) {
                        var a = t(e.payload);
                        return r.a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, r.a.createElement("img", {
                            style: {
                                width: 20,
                                marginRight: 10
                            },
                            src: "/images/".concat(Pt("path"), "/policy-bad.jpg")
                        }), r.a.createElement("div", null, "killed ", a.username))
                    }
                    if (e.type === Oa) {
                        var c = t(e.payload);
                        return r.a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, r.a.createElement("img", {
                            style: {
                                width: 20,
                                marginRight: 10
                            },
                            src: "/images/".concat(Pt("path"), "/policy-bad.jpg")
                        }), r.a.createElement("div", null, "passed ", Pt("president"), " to ", c.username))
                    }
                }(o)))
            }
            )))
        };
        var xa, wa, ja = function() {
            var e = Object(o.c)(v)
              , t = Object(o.c)(b)
              , n = Object(o.c)(mt)
              , a = e === t
              , c = Object(o.c)(y) === We.GAME_END;
            return a && c ? r.a.createElement("button", {
                disabled: n,
                onClick: function() {
                    rt.emit(Je.restartGame)
                }
            }, "Restart") : null
        }, Ia = ne.b.div(xa || (xa = Object(te.a)(["\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n"]))), Sa = ne.b.div(wa || (wa = Object(te.a)(["\n    background: rgba(50,50,50,148);\n    padding: 10px;\n    margin: 10px;\n    border-radius: 10px;\n    border: 1px solid black;\n"])));
        var Ca, Ta = function() {
            var e = Object(o.c)($);
            return r.a.createElement("div", null, r.a.createElement(Ia, {
                style: {
                    alignItems: "flex-start"
                }
            }, r.a.createElement("div", null, r.a.createElement("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, r.a.createElement(wn, null), r.a.createElement("div", {
                style: {
                    marginLeft: 10
                }
            }, r.a.createElement(ba, null))), r.a.createElement(Sa, {
                style: {
                    maxWidth: 200
                }
            }, r.a.createElement(Dn, null))), r.a.createElement(Sa, {
                style: {
                    minWidth: 250
                }
            }, r.a.createElement($t, null)), r.a.createElement("div", null, r.a.createElement(Sa, {
                style: {
                    position: "relative",
                    minHeight: 180
                }
            }, r.a.createElement(Jn, null)), r.a.createElement("div", {
                style: {
                    margin: 10
                }
            }, r.a.createElement(sa, null)), r.a.createElement("div", {
                style: {
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center"
                }
            }, r.a.createElement(ra, null), r.a.createElement(ja, null)))), !!e && r.a.createElement(Sa, {
                style: {
                    margin: 10
                }
            }, r.a.createElement(ka, null)))
        }, Pa = ne.b.div(Ca || (Ca = Object(te.a)(["\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n"]))), Ra = function() {
            var e = Object(o.c)(h)
              , t = jt()
              , n = t.width < 768 || !e;
            return Object(a.useEffect)((function() {
                n ? document.querySelector("body").classList.remove("viewBig") : document.querySelector("body").classList.add("viewBig")
            }
            ), [t.width, e]),
            r.a.createElement(r.a.Fragment, null, r.a.createElement(ta, null), r.a.createElement(Ct, null), n ? r.a.createElement(Pa, null, r.a.createElement(wn, null), r.a.createElement(ba, null), r.a.createElement(dn, null)) : r.a.createElement(Ta, null), n && r.a.createElement("div", {
                style: {
                    textAlign: "center",
                    marginTop: 10
                }
            }, r.a.createElement(ja, null)), n && r.a.createElement(Pa, null, r.a.createElement(ra, null), r.a.createElement("div", {
                style: {
                    marginRight: 20
                }
            }, r.a.createElement(sa, null))))
        }, Da = function() {
            var e = Object(o.c)(g);
            return "start" === e ? r.a.createElement(Ot, null) : "lobby" === e ? r.a.createElement(an, null) : "mainView" === e ? r.a.createElement(Ra, null) : null
        };
        var _a, Na = function() {
            return r.a.createElement(i.a, null, r.a.createElement(s.a, {
                path: "/",
                exact: !0,
                component: Da
            }))
        }, Aa = Object(ne.a)(_a || (_a = Object(te.a)(["\n  h1 {\n    width: 290px;\n    margin: auto;\n    background: linear-gradient(210deg, rgba(157, 16, 16, 0.5), rgba(0, 0, 0, 0.8));\n    padding: 10px 10px 5px;\n    border-radius: 14px;\n    color: #efefef;\n  }\n\n  p {\n      line-height: 1.3;\n  }\n\n  h4 {\n      margin: 10px 0;\n      margin-left: 10px;\n  }\n\n  h5 {\n      margin: 8px 0;\n      margin-left: 20px;\n  }\n\n  input {\n    font-family: 'Special Elite', cursive;\n    text-align: center;\n    display: block;\n    padding: 10px;\n    border: 2px solid ", ";\n    border-radius: 4px;\n  }\n\n  img:focus {\n    outline: 2px solid red;\n  }\n\n  button {\n    cursor: pointer;\n    font-family: 'Special Elite', cursive;\n    background: ", ";\n    color: ", ";\n    padding: 10px;\n    font-size: 20px;\n    border: 2px solid ", ";\n    border-radius: 2px;\n\n    &:focus {\n        outline: 2px solid red;\n    }\n\n    &.secondary {\n        color: ", ";\n        background: ", ";\n        font-size: 16px;\n        padding: 6px 10px;\n        border: none;\n        margin: 3px;\n\n        &:active {\n            box-shadow: 0px 0px 5px -3px #333;\n        }\n    }\n\n    &[disabled] {\n      background: #cacaca;\n    }\n  }\n\n  ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n  }\n\n  ion-icon {\n      color: white;\n      font-size: 50px;\n      border: 1px solid white;\n      background: rgba(11, 0, 0, 0.4);\n      padding: 4px;\n      border-radius: 2px;\n\n      &[active=true] {\n        color: ", ";\n      }\n\n      &[disabled=true] {\n        color: ", ";\n      }\n  }\n\n  /* loading */\n  .sk-chase {\n    margin: auto;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    animation: sk-chase 2.5s infinite linear both;\n  }\n\n  .sk-chase-dot {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    animation: sk-chase-dot 2.0s infinite ease-in-out both;\n  }\n\n  .sk-chase-dot:before {\n    content: '';\n    display: block;\n    width: 25%;\n    height: 25%;\n    background-color: ", ";\n    border-radius: 100%;\n    animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\n  }\n\n  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }\n  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }\n  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }\n  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }\n  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }\n  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }\n  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }\n  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }\n  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }\n  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }\n  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }\n  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }\n\n  @keyframes sk-chase {\n    100% { transform: rotate(360deg); }\n  }\n\n  @keyframes sk-chase-dot {\n    80%, 100% { transform: rotate(360deg); }\n  }\n\n  @keyframes sk-chase-dot-before {\n    50% {\n      transform: scale(0.4);\n    } 100%, 0% {\n      transform: scale(1.0);\n    }\n  }\n\n  .dark-container {\n    background: rgb(22,74,101);\n    background: radial-gradient(circle, rgba(22,74,101,0.8) 2%, rgba(22,74,101,0.8) 15%, rgba(22,74,101,0.8) 26%, rgba(18,61,83,0.8) 41%, rgba(14,47,65,0.8) 56%, rgba(11,38,54,0.8) 66%, rgba(8,29,41,0.8) 77%, rgba(5,20,29,0.8) 88%, rgba(2,10,15,0.8) 100%);\n    background-attachment: fixed; /* Optional: makes the background fixed during scroll */\n  }\n"])), ae, re, ae, ae, re, ie, ie, se, "#000");
        var La = function() {
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Aa, null), r.a.createElement(Na, null))
        };
        l.a.render(r.a.createElement(o.a, {
            store: ze
        }, r.a.createElement(La, null)), document.getElementById("root"))
    }
}, [[135, 1, 2]]]);
