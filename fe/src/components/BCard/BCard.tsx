"use client";

import { Card } from "flowbite-react";
import styles from "./BCard.module.scss";

interface BCardProps {
  imgAlt: string;
  imgSrc: string;
  children: React.ReactNode;
}

export default function BCard({
  imgAlt,
  imgSrc,
  children,
}: BCardProps): React.ReactElement {
  return (
    <Card className={styles.card} imgAlt={imgAlt} imgSrc={imgSrc}>
      {children}
    </Card>
  );
}
