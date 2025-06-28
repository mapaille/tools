# Testing Guide

## Overview

This project uses **Vitest** and **Vue Test Utils** for testing Vue components.

## Available Test Scripts

```bash
# Run tests once
npm run test:run

# Run tests in watch mode (for development)
npm run test

# Run tests with UI (visual interface)
npm run test:ui
```

## Test Structure

Tests are located in `src/components/__tests__/` directory with the naming pattern:

```
ComponentName.test.ts
```

## Example Test Files

- `LoadingSpinner.test.ts` - Basic component rendering tests
- `NavView.test.ts` - Router-based component with link testing
- `HeaderView.test.ts` - Component composition testing
- `SectionContainer.test.ts` - Props and slots testing

## Test Patterns

### Basic Component Test

```typescript
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import YourComponent from "../YourComponent.vue";

describe("YourComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(YourComponent);
    expect(wrapper.find(".your-class").exists()).toBe(true);
  });
});
```

### Component with Router

```typescript
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* your routes */
  ],
});

const wrapper = mount(YourComponent, {
  global: {
    plugins: [router],
  },
});
```

### Component with Props

```typescript
const wrapper = mount(YourComponent, {
  props: {
    title: "Test Title",
  },
});
```

### Component with Slots

```typescript
const wrapper = mount(YourComponent, {
  slots: {
    default: "<p>Slot content</p>",
  },
});
```

## Configuration

- **Vitest config**: `vite.config.ts` (includes test configuration)
- **Test environment**: jsdom (for DOM simulation)
- **Global test functions**: Available without imports (describe, it, expect)
