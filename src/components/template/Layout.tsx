import Header from "./Header";
import LateralMenu from "./LateralMenu";

interface LayoutProps {
    title: string;
    subtitle: string;
    children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
        <LateralMenu/>
        <Header title={props.title} subtitle={props.subtitle}/>
    </div>
  )
}
