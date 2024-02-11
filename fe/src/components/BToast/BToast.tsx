"use client";

import { Toast } from "flowbite-react";
import cx from "classnames";
import styles from "./BToast.module.scss";
// import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
{/* <HiX className="h-5 w-5" /> */}

interface BToastProps {
  children?: React.ReactNode;
  color?: string;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BToast({ children, color, setShowToast }: BToastProps) {
  return (
      <Toast className={cx(styles.container, `bg-${color}-100 text-${color}-500 dark:bg-${color}-800 dark:text-${color}-200`)}>
          {children}
        <Toast.Toggle onDismiss={() => setShowToast(false)} />
      </Toast>
  );
}
