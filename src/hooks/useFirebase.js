import { useEffect, useState } from "react"
import getFirebase from "../utils/firebase"

export default function useFirebase() {
  const [instance, setInstance] = useState(false)

  useEffect(() => {
    setInstance(!!getFirebase())
  }, [])

  return instance
}