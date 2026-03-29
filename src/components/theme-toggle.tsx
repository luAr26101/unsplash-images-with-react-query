import { useGlobalContext } from "../context/use-global-context";

function ThemeToggle() {
  const context = useGlobalContext();
  console.log(context);
  return <>Theme toggle</>;
}

export default ThemeToggle;
