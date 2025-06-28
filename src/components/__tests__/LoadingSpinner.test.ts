import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoadingSpinner from "../LoadingSpinner.vue";

describe("LoadingSpinner", () => {
  it("renders properly", () => {
    const wrapper = mount(LoadingSpinner);
    expect(wrapper.find(".loading-container").exists()).toBe(true);
    expect(wrapper.find(".spinner").exists()).toBe(true);
  });

  it("has correct CSS classes", () => {
    const wrapper = mount(LoadingSpinner);
    const container = wrapper.find(".loading-container");
    const spinner = wrapper.find(".spinner");

    expect(container.classes()).toContain("loading-container");
    expect(spinner.classes()).toContain("spinner");
  });
});
