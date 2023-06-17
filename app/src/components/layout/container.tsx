import { ReactNode } from "react";

interface ContainerProps {
    children?: ReactNode,
}

const Container = (props: ContainerProps) => {
    return <div className="container">{props.children}</div>;
}

export default Container;
