import { ssrRenderSlot } from 'file:///workspaces/src.sbsrojobrono/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///workspaces/src.sbsrojobrono/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/devalue/index.js';
import 'file:///workspaces/src.sbsrojobrono/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/klona/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/defu/dist/defu.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspaces/src.sbsrojobrono/node_modules/pathe/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unhead/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CL_5-sAb.mjs.map
