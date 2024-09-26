import WorkInProgress from "./Graphics/NorsmanArchitectsforweb.gif";
export default function ErrorPage() {
  const divStyle = {
    backgroundSize: "contain",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${WorkInProgress})`,
  };
  return <div style={divStyle}></div>;
}
