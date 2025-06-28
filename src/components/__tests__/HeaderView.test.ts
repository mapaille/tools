import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import HeaderView from "../HeaderView.vue";
import NavView from "../NavView.vue";

// Create a mock router for testing
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: { template: "Home" } },
    { path: "/base64", component: { template: "Base64" } },
    { path: "/guid", component: { template: "Guid" } },
    { path: "/sql", component: { template: "SQL" } },
    { path: "/notes", component: { template: "Notes" } },
  ],
});

describe("HeaderView", () => {
  it("renders properly", () => {
    const wrapper = mount(HeaderView, {
      global: {
        plugins: [router],
        components: {
          NavView,
        },
      },
    });
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("contains NavView component", () => {
    const wrapper = mount(HeaderView, {
      global: {
        plugins: [router],
        components: {
          NavView,
        },
      },
    });
    expect(wrapper.findComponent(NavView).exists()).toBe(true);
  });
});
