---
"@repo/ui": major
"admin-dashboard": patch
"web-app": patch
"@repo/eslint-config": major
"@repo/tailwind-config": major
"@repo/typescript-config": major
---

# UI Button Component Enhancement

## BREAKING CHANGES
- Updated the Button component in `@repo/ui` to include a new `disabled` prop
- Changed primary variant colors from blue-500/green to blue-600/white for better contrast

## WHY
- The disabled state is a common requirement for buttons in web applications
- The color scheme has been adjusted to meet accessibility standards

## HOW TO UPDATE
- If you're using the Button component, check if you need to handle the new disabled state
- Verify that the new color scheme works with your existing UI design
