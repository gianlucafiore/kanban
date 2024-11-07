module.exports = {
  headers: [
    {
      script: "/plugins/public/kanban/dragula.min.js",
    },
    {
      css: "/plugins/public/kanban/dragula.min.css",
    },
  ],
  sc_plugin_api_version: 1,
  plugin_name: "kanban_v2",
  viewtemplates: [require("./kanban"), require("./allocator")],
};
