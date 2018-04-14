! function (x) {
  function w() {
    var v, u, t, tes, scale,
      s = x.document,
      r = s.documentElement,
      a = r.clientWidth,
      h = r.clientHeight,
      ratio = 1080 / 1736;
    if (!v && !u) {
      var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);
      v = x.devicePixelRatio;
      v = n ? v : 1, u = 1 / v;
    }
    r.style.fontSize = a / h > ratio ? h * ratio / 320 * 20 + "px" : a / 320 * 20 + "px";
    scale = a / h > ratio ? h / 1736 : a / 1080;
    document.write('\
      <style>\
      .m{ -webkit-transform:scale(' + scale + ') translate3d(-50%,-50%,0); transform:scale(' + scale + ') translate3d(-50%,-50%,0); -webkit-transform-origin:0 0; transform-origin:0 0;}\
      </style>\
        ');
  }
  w();
}(window);