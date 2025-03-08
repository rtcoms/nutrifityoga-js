import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

// Create a new task with the given text
export const createTask = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("tasks", { text: args.text });
    return newTaskId;
  },
});

// export const updateTask = mutation({
//   args: { id: v.id("tasks") },
//   handler: async (ctx, args) => {
//     const { id } = args;
//     console.log(await ctx.db.get(id));
//     // { text: "foo", status: { done: true }, _id: ... }

//     // Add `tag` and overwrite `status`:
//     await ctx.db.patch(id, { tag: "bar", status: { archived: true } });
//     console.log(await ctx.db.get(id));
//     // { text: "foo", tag: "bar", status: { archived: true }, _id: ... }

//     // Unset `tag` by setting it to `undefined`
//     await ctx.db.patch(id, { tag: undefined });
//     console.log(await ctx.db.get(id));
//     // { text: "foo", status: { archived: true }, _id: ... }
//   },
// });

export const updateTask = mutation({
  args: { id: v.id("tasks"), text: v.string() },
  handler: async (ctx, args) => {
    const { id, text } = args;
    await ctx.db.patch(id, { text });
    return id;
  },
});


