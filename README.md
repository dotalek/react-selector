# React Selector

Implements an interactive, keyboard accessible, dropdown type selector that can be configured as a single or multiple value selector.

## Single vs. Multiple

A single value selector will work similarly to the HTML base \<select> and \<option> tags combo.

In contrast, a multiple value selector will add badges with the user selected values to the display area, and provide a remove button to each of the displayed badges.

The rest of the functionality is identical, both of them:

- Display a dropdown when clicked
- Provide a clear-all button
- Are Navigatable with keyboard controls:
  - Enter/Space: Open and select an option
  - Up/Down Arrow: Navigate through the list
  - Escape: Close the dropdown

## How to run

1. Clone the repository by your preferred method.
2. Install dependencies with npm by running:

```
npm install
```

3. Start the dev build by running:

```
npm run dev
```

4. Access `localhost:5173` on the browser of your choice
