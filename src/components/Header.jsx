import style from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="logotipo ignite" />
    </header>
  );
}
