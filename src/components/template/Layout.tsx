import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";
import ForceAuthentication from "../auth/ForceAuthentication";
import useTheme from "@/data/hooks/useTheme";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { theme } = useTheme()
  return (
    <ForceAuthentication>
      {/* <p className="flex justify-center text-xl">THEME useState: {theme}</p> */}
      <div className={`
        ${theme}
        flex h-screen w-screen 
      `}>
        <LateralMenu />
        <div className={`
        flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800
        `}>
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </ForceAuthentication>
  )
}
