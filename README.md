# Installation

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git
```

Install a specific branch

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git#{branch_name}
```

Install a specific commit

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git#{commit_hash}
```

# Usage

Basic usage

```jsx
import { AuthContext, CognitoAuthProvider } from '@devblock/react-auth';

const authProvider = new CognitoAuthProvider({});

function App() {
  return (
    <AuthContext.Provider value={{ provider: authProvider }}>
      <div className="app-content" />
    </AuthContext.Provider>
  );
}
```

Using AuthContextProps in component

```js
function Component() {
  const { provider } = useAuthContext();

  return <Button onClick={() => provider.signOut()} />;
}
```

Implement your own auth provider

```js
import {
  BaseAuthProvider,
  SignUpRequest,
  SignUpResponse,
} from '@devblock/react-auth';

export class CustomAuthProvider extends BaseAuthProvider {
  signUp(request: SignUpRequest): Promise<SignUpResponse> {
    // implement your own logic here
  }

  ...
}
```
