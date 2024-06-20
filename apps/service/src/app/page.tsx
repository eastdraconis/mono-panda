import Image from "next/image";
import styles from "./page.module.css";
import { css } from "styled-system/css";
import { Button } from "ui";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={css({color:'blue.500'})}>Hello world</div>
      <Button/>
    </main>
  );
}
