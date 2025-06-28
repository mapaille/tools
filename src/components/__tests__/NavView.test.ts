import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
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

describe("NavView", () => {
  it("renders all navigation links", () => {
    const wrapper = mount(NavView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.text()).toContain("HOME");
    expect(wrapper.text()).toContain("BASE64");
    expect(wrapper.text()).toContain("GUID");
    expect(wrapper.text()).toContain("SQL");
    expect(wrapper.text()).toContain("NOTES");
  });

  it("has correct number of router links", () => {
    const wrapper = mount(NavView, {
      global: {
        plugins: [router],
      },
    });

    const links = wrapper.findAllComponents({ name: "RouterLink" });
    expect(links).toHaveLength(5);
  });

  it("has correct link destinations", () => {
    const wrapper = mount(NavView, {
      global: {
        plugins: [router],
      },
    });

    const links = wrapper.findAllComponents({ name: "RouterLink" });
    expect(links[0].props("to")).toBe("/");
    expect(links[1].props("to")).toBe("/base64");
    expect(links[2].props("to")).toBe("/guid");
    expect(links[3].props("to")).toBe("/sql");
    expect(links[4].props("to")).toBe("/notes");
  });
});
