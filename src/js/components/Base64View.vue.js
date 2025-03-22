import { ref } from 'vue';
import SectionContainer from './SectionContainer.vue';
const from = ref('');
const to = ref('');
const fromBase64 = () => {
    from.value = atob(to.value);
};
const toBase64 = () => {
    to.value = btoa(from.value);
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
const __VLS_0 = __VLS_asFunctionalComponent(SectionContainer, new SectionContainer({
    title: "Plain",
}));
const __VLS_1 = __VLS_0({
    title: "Plain",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    value: (__VLS_ctx.from),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toBase64) },
});
var __VLS_2;
;
const __VLS_3 = __VLS_asFunctionalComponent(SectionContainer, new SectionContainer({
    title: "Base64",
}));
const __VLS_4 = __VLS_3({
    title: "Base64",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_5.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    value: (__VLS_ctx.to),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.fromBase64) },
});
var __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SectionContainer: SectionContainer,
            from: from,
            to: to,
            fromBase64: fromBase64,
            toBase64: toBase64,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Base64View.vue.js.map