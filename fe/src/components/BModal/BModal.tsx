"use client";

import { Button, Card, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./BModal.module.scss";
import { IDriver } from "@/types";
import driverImage from "@/assets/driver.jpeg";

interface BModalProps {
  children?: React.ReactNode;
  buttonText: string;
  driver?: IDriver;
}

export default function BModal({ buttonText, driver }: BModalProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{buttonText}</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div className={styles.cardContainer}>
            <div className="flex flex-col items-center pb-10">
              <Image
                alt="Bonnie image"
                height="96"
                src={driver?.img || driverImage}
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {driver?.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designerasdasdasdasdas asdasdasdas dasd asd asd asd
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <Button onClick={() => setOpenModal(false)}>Close</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
