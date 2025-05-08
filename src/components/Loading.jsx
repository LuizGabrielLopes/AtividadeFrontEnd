import React from "react";
import styles from "../styles/Loading.module.css";
import Image from "next/image";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Image width="100" height="100" src="/images/world.gif" alt="Loading" />
            <p>Carregando países...</p>
        </div>
    );
}
