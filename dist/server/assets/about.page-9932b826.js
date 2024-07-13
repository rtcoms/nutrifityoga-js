import { j as jsxs, a as jsx } from "../hattip.js";
import "react";
import "devalue";
import "@hattip/compose";
import "react-dom/server.browser";
import "react/jsx-runtime";
import "convex/react";
const AboutPage = () => /* @__PURE__ */ jsxs("main", { children: [
  /* @__PURE__ */ jsx("h1", { children: "About" }),
  /* @__PURE__ */ jsxs("p", { children: [
    /* @__PURE__ */ jsx("b", { children: "Rakkas" }),
    " aims to be a",
    " ",
    /* @__PURE__ */ jsx("a", { href: "https://reactjs.org", target: "_blank", rel: "noreferrer", children: "React" }),
    " ",
    "framework powered by",
    " ",
    /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", rel: "noreferrer", children: "Vite" }),
    ", with a developer experience inspired by",
    " ",
    /* @__PURE__ */ jsx("a", { href: "https://nextjs.org", target: "_blank", rel: "noreferrer", children: "Next.js" }),
    " ",
    "and",
    " ",
    /* @__PURE__ */ jsx("a", { href: "https://kit.svelte.dev", target: "_blank", rel: "noreferrer", children: "Svelte Kit" }),
    ". Pages of a Rakkas web applications are rendered on the server-side and hydrated on the client side."
  ] })
] });
export {
  AboutPage as default
};
