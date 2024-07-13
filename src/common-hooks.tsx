import type { CommonHooks } from "rakkasjs";
import ConvexClientProvider from "./ConvexClientProvider";

const hooks: CommonHooks = {
  extendPageContext(ctx) {
    // Add properties to the page context,
    // especially to ctx.locals.
    // Extensions added here will be
    // available both on the server and the client.
    // Client and server `extendPageContext` hooks
    // will be called _before_ this.
    console.log('STARTING COMMON HOOK');
  },
  wrapApp(app) {
    // Wrap the Rakkas application in some provider component.
    return <ConvexClientProvider>{app}</ConvexClientProvider>;
  },
  beforePageLookup(ctx) {
    console.log('BEFORE PAGE LOOKUP');
    // This will be called before the page route
    // lookup is performed.
    // - Return `false` to prevent the page from rendering.
    // - Return `{ redirect: "/some/url" }` to redirect.
    // - Return `{ rewrite: "/new/url" }` to render as if the URL was `/new/url`.
    // - Return true to continue as normal.
    return true;
  },
};

export default hooks;