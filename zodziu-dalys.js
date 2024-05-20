function zdDecorateSuffixes(diff = 0.4, mainContainer = document) {
  [...mainContainer.getElementsByClassName("zd_suffix")]
    .map((element) => {
      const { width } = element.getBoundingClientRect();
      const FS = parseFloat(
        window.getComputedStyle(element, null).getPropertyValue("font-size")
      );
      const H = diff * FS;
      const W = width / 2;
      const S = Math.sqrt(H ** 2 + W ** 2);
      const A = Math.acos(W / S);
      return { S, A, W, element, H: H / 2 };
    })
    .forEach(({ S, A, element, W, H }) => {
      element.setAttribute(
        "style",
        `--zd-suffix-angle: ${A}rad; --zd-suffix-slope: ${S}px; --zd-suffix-width: ${W}px; --zd-suffix-height: ${H}px;`
      );
    });
}
