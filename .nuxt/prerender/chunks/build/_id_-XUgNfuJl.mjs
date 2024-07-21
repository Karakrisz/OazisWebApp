import { a as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/ufo/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/ipx/dist/index.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const post = ref(null);
    const error = ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}>`);
      if (loading.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">Loading...</h2></div>`);
      } else if (error.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">${ssrInterpolate(error.value)}</h2></div>`);
      } else if (post.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">${ssrInterpolate(post.value.title)}</h2><img class="supage-content__img"${ssrRenderAttr("src", `https://fuggonyoazis.hu/api/public/storage/${post.value.image}`)}${ssrRenderAttr("alt", post.value.title)}><p class="supage-content__p">${post.value.body}</p></div>`);
      } else {
        _push(`<div><h2 class="supage-content__h2 f-300">No post available.</h2></div>`);
      }
      _push(`<div class="supage-content__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "supage-content__link-box__NuxtLink text-color-w f-600",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kezd\u0151lap`);
          } else {
            return [
              createTextVNode("Kezd\u0151lap")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-XUgNfuJl.mjs.map
