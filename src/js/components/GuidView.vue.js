import { ref } from 'vue';
import SectionContainer from './SectionContainer.vue';
const guid = ref(generateGUID());
function regenerateGUID() {
    guid.value = generateGUID();
}
;
async function copyToClipboard() {
    await navigator.clipboard.writeText(guid.value.toString());
}
;
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
const __VLS_0 = __VLS_asFunctionalComponent(SectionContainer, new SectionContainer({
    title: "Value",
}));
const __VLS_1 = __VLS_0({
    title: "Value",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    readonly: true,
    type: "text",
    value: (__VLS_ctx.guid),
    name: "value",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.regenerateGUID) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.copyToClipboard) },
});
var __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SectionContainer: SectionContainer,
            guid: guid,
            regenerateGUID: regenerateGUID,
            copyToClipboard: copyToClipboard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=GuidView.vue.js.map