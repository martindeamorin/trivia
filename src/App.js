import AppRouter from "./routers/AppRouter";
import StoreProvider from "./store/StoreProvider"

export default function App(){
  document.title = "Trivia-App"
  return(
    <StoreProvider>
      <AppRouter/>
    </StoreProvider>
  )
}

