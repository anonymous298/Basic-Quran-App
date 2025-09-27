"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import PlayerComponent from "@/components/PlayerComponent";
// import PlayerComponent from "@/components/PlayerComponent";


export default function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <PlayerComponent />
    </Provider>
  );
}
