(() => {
  const t = document.querySelectorAll(".faq__collapsible-button"),
    l = document.querySelectorAll(".faq__collapsible-icon");
  let e;
  for (e = 0; e < t.length; e++)
    t[e].addEventListener("click", function () {
      this.classList.toggle("active");
      let e = this.nextElementSibling;
      "block" === e.style.display
        ? (e.style.display = "none")
        : (e.style.display = "block"),
        s(t, l);
    });
  function s(t, l) {
    for (e = 0; e < l.length; e++)
      for (e = 0; e < t.length; e++)
        t[e].classList.contains("active")
          ? l[e].classList.add("rotate180")
          : l[e].classList.remove("rotate180");
  }
})();
