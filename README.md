# React Icons

[![npm](https://img.shields.io/npm/v/react-icons.svg)](https://www.npmjs.com/package/react-icons)
[![npm downloads](https://img.shields.io/npm/dm/react-icons.svg)](https://www.npmjs.com/package/react-icons)
[![Build Status](https://github.com/react-icons/react-icons/actions/workflows/build.yml/badge.svg)](https://github.com/react-icons/react-icons/actions)

SVG React icons of popular icon libraries.

## Installation

Install React Icons using npm:

```bash
npm install react-icons --save
```

Or using Yarn:

```bash
yarn add react-icons
```

## Quick Start

Import an icon from React Icons and use it inside your React component.

```jsx
import { FaReact } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>React Icons Example</h1>

      <FaReact size={50} color="blue" />

      <p>
        This is a simple example of using React Icons in a React application.
      </p>
    </div>
  );
}

export default App;
```

## Customizing Icons

React Icons can be customized using properties such as `size`, `color`, and `className`.

### Change the Size

```jsx
<FaReact size={60} />
```

### Change the Color

```jsx
<FaReact color="green" />
```

### Change Size and Color

```jsx
<FaReact size={80} color="purple" />
```

### Using CSS Classes

```jsx
<FaReact className="react-icon" />
```

Example CSS:

```css
.react-icon {
  font-size: 50px;
  color: blue;
}
```

## Example Application

Here is a complete example:

```jsx
import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>My React Icons App</h1>

      <FaReact size={70} color="blue" />

      <p>React Icons makes it easy to use popular SVG icons in React.</p>

      <FaGithub size={40} />
    </div>
  );
}

export default App;
```

## Supported Icon Libraries

React Icons provides access to many popular icon libraries, including:

* Font Awesome
* Material Design Icons
* Bootstrap Icons
* Feather Icons
* Heroicons
* Ant Design Icons
* BoxIcons
* Remix Icons
* Tabler Icons

## Documentation

For more information about React Icons, visit the official documentation.

## Contributing

Contributions are welcome.

If you find a bug, have an idea, or want to improve the project, please create an issue or submit a pull request.

## License

MIT
