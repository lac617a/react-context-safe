import {
  Context,
  useContext as useGenericContext,
  createContext as createGenericContext,
} from "react"

const createContext = <CreateContext = unknown>(defaultValue: CreateContext) =>
  createGenericContext<CreateContext>(defaultValue)

const useContext = <UseContext = unknown>(
  ctx: Context<UseContext>,
  displayName: string
) => {
  const context = useGenericContext(ctx)

  if (!context)
    throw new Error(
      `${displayName} components cannot be rendered outside the ${ctx.displayName}`
    )

  return context
}

export { useContext, createContext }
