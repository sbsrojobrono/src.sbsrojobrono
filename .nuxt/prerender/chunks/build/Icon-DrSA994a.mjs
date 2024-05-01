import _sfc_main$1 from './IconTw-CFrXOsUf.mjs';
import __nuxt_component_1 from './IconSvg-CqQkWZ3R.mjs';
import { c as useAppConfig } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, renderSlot, useSSRContext } from 'file:///workspaces/src.sbsrojobrono/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///workspaces/src.sbsrojobrono/node_modules/vue/server-renderer/index.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///workspaces/src.sbsrojobrono/node_modules/@iconify/vue/dist/iconify.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    icon: {},
    name: {},
    tw: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const iconName = computed(() => {
      var _a;
      const name = props.icon || props.name || "";
      if (((_a = appConfig.nuxtIcon) == null ? void 0 : _a.aliases) && appConfig.nuxtIcon.aliases[name]) {
        return appConfig.nuxtIcon.aliases[name];
      }
      return name;
    });
    const useTwIcon = computed(() => {
      var _a, _b, _c;
      if (props.tw || ((_a = appConfig.nuxtIcon) == null ? void 0 : _a.forceTailwind))
        return true;
      if (iconName.value.includes(":"))
        return false;
      if ((_c = (_b = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _b.resolvedPrefixes) == null ? void 0 : _c.find((element) => {
        return iconName.value.startsWith(element);
      }))
        return true;
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTw = _sfc_main$1;
      const _component_IconSvg = __nuxt_component_1;
      if (useTwIcon.value) {
        _push(ssrRenderComponent(_component_IconTw, mergeProps({ name: iconName.value }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(_component_IconSvg, mergeProps({
          name: iconName.value
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon-tw/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Icon-DrSA994a.mjs.map
