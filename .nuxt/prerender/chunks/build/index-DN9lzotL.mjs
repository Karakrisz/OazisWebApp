import { b as __nuxt_component_0$2, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue/server-renderer/index.mjs';
import he from 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/he/he.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/OazisWebApp/node_modules/vue-router/dist/vue-router.node.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const itemsPost = ref(null);
    ref(null);
    ref(false);
    function getShortBody(body) {
      const decodedBody = he.decode(body);
      if (decodedBody.length > 100) {
        return decodedBody.substring(0, 100) + "...";
      }
      return decodedBody;
    }
    const sliderElem = ref([
      {
        title: "KIZ\xC1R\xD3LAG PR\xC9MIUM ALAPANYOGOKB\xD3L DOLGOZUNK",
        description: "Minden term\xE9k\xFCnket kiz\xE1r\xF3lag els\u0151 oszt\xE1ly\xFA sz\xF6vetek felhaszn\xE1l\xE1s\xE1val k\xE9sz\xEDtj\xFCk, \xEDgy garant\xE1lva otthona sz\xE1m\xE1ra a st\xEDlus \xE9s min\u0151s\xE9g t\xF6k\xE9letes harm\xF3ni\xE1j\xE1t. V\xE1lasszon boltunkat, ahol a kifinomults\xE1g \xE9s tart\xF3ss\xE1g tal\xE1lkozik, hogy otthon\xE1t a lehet\u0151 legjobban kieg\xE9sz\xEDthesse.",
        button: "TOV\xC1BB",
        number: "1 / 3"
      },
      {
        title: "KIZ\xC1R\xD3LAG PR\xC9MIUM ALAPANYOGOKB\xD3L DOLGOZUNK",
        description: "Minden term\xE9k\xFCnket kiz\xE1r\xF3lag els\u0151 oszt\xE1ly\xFA sz\xF6vetek felhaszn\xE1l\xE1s\xE1val k\xE9sz\xEDtj\xFCk, \xEDgy garant\xE1lva otthona sz\xE1m\xE1ra a st\xEDlus \xE9s min\u0151s\xE9g t\xF6k\xE9letes harm\xF3ni\xE1j\xE1t. V\xE1lasszon boltunkat, ahol a kifinomults\xE1g \xE9s tart\xF3ss\xE1g tal\xE1lkozik, hogy otthon\xE1t a lehet\u0151 legjobban kieg\xE9sz\xEDthesse.",
        button: "TOV\xC1BB",
        number: "2 / 3"
      },
      {
        title: "KIZ\xC1R\xD3LAG PR\xC9MIUM ALAPANYOGOKB\xD3L DOLGOZUNK",
        description: "Minden term\xE9k\xFCnket kiz\xE1r\xF3lag els\u0151 oszt\xE1ly\xFA sz\xF6vetek felhaszn\xE1l\xE1s\xE1val k\xE9sz\xEDtj\xFCk, \xEDgy garant\xE1lva otthona sz\xE1m\xE1ra a st\xEDlus \xE9s min\u0151s\xE9g t\xF6k\xE9letes harm\xF3ni\xE1j\xE1t. V\xE1lasszon boltunkat, ahol a kifinomults\xE1g \xE9s tart\xF3ss\xE1g tal\xE1lkozik, hogy otthon\xE1t a lehet\u0151 legjobban kieg\xE9sz\xEDthesse.",
        button: "TOV\xC1BB",
        number: "3 / 3"
      }
    ]);
    const highlightPremium = (text) => {
      if (!text) {
        return "";
      }
      return text.replace("PR\xC9MIUM", '<strong class="f-600">PR\xC9MIUM</strong>');
    };
    const currentSlide = ref(0);
    const quantity = ref(200);
    const quantityDisplay = computed(() => {
      return `${quantity.value} cm`;
    });
    const form = ref({
      name: "",
      email: "",
      phonenumber: "",
      subject: "",
      message: ""
    });
    const AccordionItems = [
      { title: "Kell-e regisztr\xE1lnom a v\xE1s\xE1rl\xE1shoz?", content: "Tartalom 1" },
      {
        title: "Okostelefonon \xE9s tableten is tudok v\xE1s\xE1rolni?",
        content: "Tartalom 2"
      },
      { title: "Hogy adhatom le a rendel\xE9sem?", content: "Tartalom 3" },
      {
        title: "Lehets\xE9ges e-mailben, vagy telefonon is rendelni?",
        content: "Tartalom 4"
      },
      {
        title: "Lehets\xE9ges e-mailben, vagy telefonon is rendelni?",
        content: "Tartalom 5"
      }
    ];
    const currentIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section><div class="slider-content position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "slider-content__img",
        src: "/img/slider/slider.webp",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<div class="slider-content__carousel-content position-absolute"><div class="carousel position-relative"><div class="carousel-slide d-flex" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(sliderElem.value, (item, index) => {
        _push(`<div class="carousel-item"><h1 class="carousel-item__h1 text-color f-300">${highlightPremium(item.title)}</h1><p class="carousel-item__p text-color f-300">${ssrInterpolate(item.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { class: "carousel-item__NuxtLink f-300" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.button)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.button), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="test-v"><div class="carousel__btn-content d-flex"><button class="carousel__btn-content__btn">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/a-left.svg",
          alt: "F\xFCgg\xF6ny O\xE1zis"
        }, null, _parent));
        _push(`</button><p class="carousel__btn-content__p text-color f-300">${ssrInterpolate(item.number)}</p><button class="carousel__btn-content__btn">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/a-right.svg",
          alt: "F\xFCgg\xF6ny O\xE1zis"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section><div class="products-content"><h2 class="products-content__h2 text-transform-uppercase f-300 text-center"> KIEMELT AJ\xC1NLATOK </h2><div class="counter d-flex d-none"><button class="counter__btn">-</button><input class="counter__input" type="text"${ssrRenderAttr("value", quantityDisplay.value)} readonly><button class="counter__btn">+</button></div><div class="products-content__link-content text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "products-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` term\xE9kek felt\xF6lt\xE9s alatt `);
          } else {
            return [
              createTextVNode(" term\xE9kek felt\xF6lt\xE9s alatt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><div class="navigation-content"><h3 class="navigation-content__h3 text-transform-uppercase f-300 text-center"> KERESSEN SZOBA SZERINT </h3><div class="navigation-content__link-content grid-6"><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/furdo.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> F\xDCRD\u0150SZOBA </h4></div><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/halo.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> H\xC1L\xD3SZOBA </h4></div><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/nappali.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> NAPPALI </h4></div><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/konyha.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> KONYHA </h4></div><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/iroda.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> IRODA </h4></div><div class="navigation-content__link-content__div text-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "navigation-content__link-content__div__img",
        src: "/img/navigation/gyerek.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"> GYEREKSZOBA </h4></div></div></div></section><section><div class="form-content"><div class="form-content__form-img-content position-relative grid-2"><div class="contact-form__content form-content__form-img-content__div bg-color-w"><div class="contact-form bg-color-w"><h5 class="contact-form__h5 f-300">K\xC9RD\xC9SE VAN?</h5><h6 class="contact-form__h6 f-500">KERESSEN MINKET BIZALOMMAL</h6><form><div class="form-group"><input class="form-group__input" placeholder="N\xE9v*" type="text" id="name"${ssrRenderAttr("value", form.value.name)} required></div><div class="form-group"><input class="form-group__input" placeholder="E-mail c\xEDm *" type="email" id="email"${ssrRenderAttr("value", form.value.email)} required></div><div class="form-group"><input class="form-group__input" placeholder="Telefonsz\xE1m" type="text" id="phonenumber"${ssrRenderAttr("value", form.value.phonenumber)} required></div><div class="form-group"><input class="form-group__input" placeholder="T\xE1rgy*" type="text" id="subject"${ssrRenderAttr("value", form.value.subject)} required></div><div class="form-group"><textarea rows="9" cols="300" class="form-group__textarea" placeholder="\xDCzenet..." id="message" required>${ssrInterpolate(form.value.message)}</textarea></div><div class="contact-form__btn-box"><button class="contact-form__btn-box__btn text-transform-uppercase text-color-w f-500" type="submit"> K\xFCld\xE9s `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "contact-form__btn-box__btn__img position-relative",
        src: "/img/navigation/mail-arrow.svg",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`</button></div></form></div></div><div class="form-content__div form-content__img-content form-content__form-img-content__div">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "form-content__img-content__img",
        src: "/img/navigation/navigation.webp",
        alt: "F\xFCgg\xF6ny O\xE1zis"
      }, null, _parent));
      _push(`</div></div></div></section><section><div class="FAQ-content"><h3 class="FAQ-content__h3 text-transform-uppercase f-300 text-center"> GYAKRAN ISM\xC9TELT K\xC9RD\xC9SEK </h3><div class="accordion-content d-flex"><!--[-->`);
      ssrRenderList(AccordionItems, (item, index) => {
        _push(`<div class="accordion-content__accordion"><div class="accordion-content__header d-flex"><h3 class="accordion-content__header__h3 f-600">${ssrInterpolate(item.title)}</h3><span class="${ssrRenderClass([{ "accordion-is-open": currentIndex.value === index }, "accordion-content__header__arrow"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "accordion-content__header__arrow__img",
          src: "/img/accordion/accordion-arrow.svg",
          alt: "F\xFCgg\xF6ny O\xE1zis"
        }, null, _parent));
        _push(`</span></div><div class="${ssrRenderClass([{ AccordionOpen: currentIndex.value === index }, "accordion-content__content"])}"><p class="accordion-content__content__p text-color-w">${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="FAQ-content__link-content text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "FAQ-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \xD6SSZES K\xC9RD\xC9S MEGTEKINT\xC9SE `);
          } else {
            return [
              createTextVNode(" \xD6SSZES K\xC9RD\xC9S MEGTEKINT\xC9SE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><div class="blog-content"><h4 class="blog-content__h4 text-transform-uppercase f-300 text-center"> BLOG </h4><div class="blog-content__img-text-box grid-3"><!--[-->`);
      ssrRenderList(itemsPost.value, (post) => {
        _push(`<div class="blog-content__img-text-box__div">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "blog-content__img-text-box__div__img",
          src: `https://fuggonyoazis.hu/api/public/storage/${post.image}`,
          alt: "{{ post.title }}"
        }, null, _parent));
        _push(`<div class="blog-content__img-text-box__div__tBox"><h3 class="blog-content__img-text-box__div__h3">${ssrInterpolate(post.title)}</h3><p class="blog-content__img-text-box__div__p">${getShortBody(post.body)}</p><div class="blog-content__img-text-box__div__link-box d-flex">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/posts/${post.id}`,
          class: "blog-content__img-text-box__div__link-box__NuxtLink f-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Tov\xE1bb olvasok `);
            } else {
              return [
                createTextVNode(" Tov\xE1bb olvasok ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DN9lzotL.mjs.map
