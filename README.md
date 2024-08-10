# create-context-safe

Is a React library that ensures that your components always have safe access to the appropriate context. It simplifies the creation and use of contexts, ensuring that any attempt to use a context outside its bounds results in a clear, easy-to-debug error.

## Install

```console
$npm install --save create-context-safe
```

or

```console
$yarn add create-context-safe
```

## Usage

```typescript
import { useContext, createContext } from "create-context-safe";

interface ContextProps {
  slug: string;
  isOpen: boolean;
}

const Context =
  createContext<ContextProps>({ isOpen: false, slug: "" });

export const Provider = (props) => (
  <Context.Provider value={{ isOpen: false, slug: "" }}>
    {props.children}
  </Context.Provider>
);

Context.displayName = "Context";

const useProviderContext = () =>
  useContext<ContextProps>(Context, Provider.name);


const ModalAuthSignIn = () => {
  const { slug, isOpen } = useProviderContext();

  if (!isOpen) return null;

  return "Success"
}
```
