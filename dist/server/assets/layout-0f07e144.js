import { j as jsxs, F as Fragment, a as jsx, H as Head, L as Link, S as StyledLink } from "../hattip.js";
import "react";
import "devalue";
import "@hattip/compose";
import "react-dom/server.browser";
import "react/jsx-runtime";
import "convex/react";
const header = "_header_13fto_35";
const logo = "_logo_13fto_56";
const nav = "_nav_13fto_61";
const activeLink = "_activeLink_13fto_79";
const main = "_main_13fto_83";
const footer = "_footer_13fto_88";
const css = {
  header,
  logo,
  nav,
  activeLink,
  main,
  footer
};
const MainLayout = ({ children }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Head, { title: "Rakkas Demo App" }),
  /* @__PURE__ */ jsxs("header", { className: css.header, children: [
    /* @__PURE__ */ jsx(Link, { className: css.logo, href: "/", children: "Rakkas Demo App" }),
    /* @__PURE__ */ jsx("nav", { className: css.nav, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(StyledLink, { href: "/", activeClass: css.activeLink, children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(StyledLink, { href: "/about", activeClass: css.activeLink, children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(StyledLink, { href: "/todo", activeClass: css.activeLink, children: "Todo" }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsx("section", { className: css.main, children }),
  /* @__PURE__ */ jsxs("footer", { className: css.footer, children: [
    /* @__PURE__ */ jsx("p", { children: "Software and documentation: Copyright 2021 Fatih Aygün. MIT License." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Favicon: “Flamenco” by",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://thenounproject.com/term/flamenco/111303/", children: "gzz from Noun Project" }),
      " ",
      "(not affiliated).",
      /* @__PURE__ */ jsx("br", {}),
      "Used under",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://creativecommons.org/licenses/by/2.0/", children: "Creative Commons Attribution Generic license (CCBY)" })
    ] })
  ] })
] });
export {
  MainLayout as default
};
