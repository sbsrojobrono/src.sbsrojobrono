import { c as useAppConfig } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconTw",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const props = __props;
    const iconName = computed(() => {
      var _a;
      let result = props.name;
      if (((_a = appConfig.nuxtIcon) == null ? void 0 : _a.aliases) && appConfig.nuxtIcon.aliases[props.name]) {
        result = appConfig.nuxtIcon.aliases[props.name];
      }
      return result;
    });
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig.nuxtIcon) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: iconName.value,
        style: { width: sSize.value, height: sSize.value }
      }, _attrs))}></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon-tw/dist/runtime/IconTw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=IconTw-CFrXOsUf.mjs.map
