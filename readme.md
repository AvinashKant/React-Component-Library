Option B: Use npm pack (simulate real package)

This is closer to how consumers will install it.

From the library root:

# npm run build
# npm pack
# npm publish


This creates a tarball file like react-alert-lib-1.0.0.tgz.

In your test React app:

npm install ../react-alert-lib/react-alert-lib-1.0.0.tgz


Import and use it normally:

import { Alert } from 'react-alert-lib';


## Extending Variants

You can easily add more button styles:
```bash
const variantClasses = {
  blue: "...",
  default: "...",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-400 text-gray-700",
};


# VerticalDivider
- <VerticalDivider className="mx-2 border-red-500 border-r-4"/>