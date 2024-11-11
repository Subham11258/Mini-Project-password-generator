# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


LEARNING:

useRef: A react hook that allows to store and persist data across renders. The hook also allows to change the value without triggering a rerender.

useCallback: A hook that is used to memoize a function, so that it doesn't rerender everytime the component rerenders unless its dependecies change.

Project Description:

1. **State Management:**
    - Good use of the **`useState`** hook to manage the state variables (**`password`**, **`length`**, **`includeNumbers`**, **`includeCharacters`**).
2. **Password Generation Logic:**
    - The **`generatePassword`** function generates a password based on the specified criteria, including length and character sets. The logic seems sound for creating random passwords.
3. **Clipboard Copy:**
    - The **`copyToClipboard`** function uses **`document.execCommand("copy")`** to copy the generated password to the clipboard. This is a valid approach, though keep in mind that **`execCommand`** is considered obsolete. However, for simple use cases like this, it's still widely used and supported.
4. **Ref Usage:**
    - The use of **`useRef`** for the **`textarea`** element (**`passwordRef`**) is appropriate for programmatically selecting and copying text.

