'use client'

import { IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import { Share } from "@capacitor/share"
import Container from "./components/Container"

import { setupIonicReact } from '@ionic/react'
setupIonicReact()

export default function Home() {

  const share = async () => {
    await Share.share({
      title: "Simons YT Channel",
      text: "Learn to build awesome mobile apps!",
      url: "https://google.com",
      dialogTitle: "Share with friends",
    })
  }

  return (
    <Container>
      <h1 className='font-bold text-xl	'>Title</h1>
      <div className="bg-red-100">
        <button onClick={() => share()}>Share now!</button>
      </div>
    </Container>
  )
}
