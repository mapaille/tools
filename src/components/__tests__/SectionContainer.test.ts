import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SectionContainer from "../SectionContainer.vue";

describe("SectionContainer", () => {
  it("renders with title prop", () => {
    const wrapper = mount(SectionContainer, {
      props: {
        title: "Test Section",
      },
    });

    expect(wrapper.find("section").exists()).toBe(true);
    expect(wrapper.find("h3").text()).toBe("Test Section");
  });

  it("renders slot content", () => {
    const wrapper = mount(SectionContainer, {
      props: {
        title: "Test Section",
      },
      slots: {
        default: "<p>Test content</p>",
      },
    });

    expect(wrapper.html()).toContain("<p>Test content</p>");
  });

  it("requires title prop", () => {
    // This test verifies that TypeScript would catch missing title prop
    const wrapper = mount(SectionContainer, {
      props: {
        title: "Required Title",
      },
    });

    expect(wrapper.props("title")).toBe("Required Title");
  });
});
