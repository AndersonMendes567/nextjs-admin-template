import { useAuth } from "@/data/hook/useAuth";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import loadingGif from '../../../public/loading.gif'

export default function ForceAuth({ children } : { children: any }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  const renderLoading = ()=> (
    <div className="flex w-screen h-screen items-center justify-center">
      <Image src={loadingGif} alt="GIF de carregamento" />
    </div>
  )

  const renderContent = ()=> (
    <Fragment>
      { children }
    </Fragment>
  )

  if(user?.email && !loading) {
    return renderContent()
  } else if(loading) {
    return renderLoading()
  } else {
    router.push('/auth')
    return null
  }
}