import Head from "next/head";
import Image from "next/image"
import loading from '@/../public/images/loading.gif'
import useAuth from "@/data/hooks/useAuth"
import route from 'next/router';

// https://loading.io/
export default function ForceAuthentication(props: any) {

  const { user, isLoading } = useAuth()

  const renderContent = () => {
    return (
      <>
        <Head>
          <script
             dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes('admin-template-cod3r-auth=true')) {
                window.location.hrf = "/authentication"
              }`
             }} 
          />


          </Head >
          {props.children}
        </>
        )
  }

  const renderLoading = () => {
    return (
        <div className={`
        flex justify-center items-center h-screen
      `}>
          <Image src={loading} alt="Gif de loading" />
        </div>
        )
  }

        if (!isLoading && user?.email) {
    return renderContent()
  } else if (isLoading) {
    return renderLoading()
  } else {
          route.push('/authentication')
    return null
  }
}