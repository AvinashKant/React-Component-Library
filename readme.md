Option B: Use npm pack (simulate real package)

This is closer to how consumers will install it.

From the library root:

npm run build
npm pack


This creates a tarball file like react-alert-lib-1.0.0.tgz.

In your test React app:

npm install ../react-alert-lib/react-alert-lib-1.0.0.tgz


Import and use it normally:

import { Alert } from 'react-alert-lib';