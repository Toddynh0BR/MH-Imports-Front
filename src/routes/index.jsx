import { BrowserRouter } from "react-router-dom";

import { useEffect, useState } from "react";

import { AppRoutes } from "./app.routes";
import { OffRoutes } from "./off.routes";
import { api } from "../services/api";

export function Routes() {
  const [status, setStatus] = useState(1);

  async function fetchStatus() {
    Response = await api.get("/store/");

    setStatus(Response.data.store.status)
  }

  useEffect(()=> {
    fetchStatus()
  }, [])

  return (
    <BrowserRouter>
        { status == 1 ? <AppRoutes /> : <OffRoutes/>}
    </BrowserRouter>
  )
}