import { j as jsxs, a as jsx } from "../hattip.js";
import { useQuery } from "convex/react";
import { anyApi } from "convex/server";
import "react";
import "devalue";
import "@hattip/compose";
import "react-dom/server.browser";
import "react/jsx-runtime";
const api = anyApi;
const HomePage = function HomePage2() {
  const tasks = useQuery(api.tasks.get);
  console.log("TASKS:", tasks);
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello world!" }),
    /* @__PURE__ */ jsx("p", { children: "Welcome to the Rakkas demo page 💃" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Try editing the files in ",
      /* @__PURE__ */ jsx("code", { children: "src/routes" }),
      " to get started or go to the",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://rakkasjs.org", target: "_blank", rel: "noreferrer", children: "website" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "You may also check the little ",
      /* @__PURE__ */ jsx("a", { href: "/todo", children: "todo application" }),
      " to learn about API endpoints and data fetching."
    ] })
  ] });
};
export {
  HomePage as default
};
