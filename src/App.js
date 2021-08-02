import AuthProvider from "./auth/authProvider";
import AppRouter from "./routers/AppRouter";
import StoreProvider from "./store/StoreProvider"

export default function App(){
  document.title = "Trivia-App"
  return(
    <StoreProvider>
      <AuthProvider>
          <AppRouter/>
      </AuthProvider>
    </StoreProvider>
      
  )
}

