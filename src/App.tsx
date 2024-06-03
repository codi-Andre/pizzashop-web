import "./index.css"

import { QueryClientProvider } from "@tanstack/react-query"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { ThemeProvider } from "./components/theme/theme-provider"
import { queryClient } from "./lib/query-client"
import { router } from "./routes"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Toaster richColors />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
