var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.github.com",
  contentScriptFile: [data.url("content-script.js")],
  contentScriptOptions : { "message" : data.url('remove_colon.js') }
});






























