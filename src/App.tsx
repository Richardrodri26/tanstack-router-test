import { RouterProvider } from "react-router-dom"
import { CustomeNotification } from "@utils/animation"
import DynamicGlobalStyle from "@components/styled"
import { UtilGlobalClassStyle } from "@components/styled/GlobalStyled"
import { appRouter } from "@ui/router"


function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
      <DynamicGlobalStyle />
      <UtilGlobalClassStyle />
      <CustomeNotification />
    </>
  )
}

export default App
