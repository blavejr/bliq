"use client";

import { useEffect, useState } from "react";
import BCard from "@/components/BCard/BCard";
import styles from "./BHomePage.module.scss";
import BButton from "@/components/BButton/BButton";
import BPagination from "@/components/BPagination/BPagination";
import BRating from "@/components/BRating/BRating";
import BSpinner from "@/components/BSpinner/BSpinner";
import ridesApi from "@/api/rides";
import BHailIcon from "@/components/svg/BHailIcon/BHailIcon";
import BBoltLogoIcon from "@/components/svg/BBoltLogoIcon/BBoltLogoIcon";
import UberLogoIcon from "@/components/svg/BUberLogoIcon/BUberLogoIcon";
import LyftLogoIcon from "@/components/svg/LyftLogoIcon/LyftLogoIcon";
import BTaxiAppLogoIcon from "@/components/svg/BTaxiAppLogoIcon/BTaxiAppLogoIcon";
import BShareNowLogoIcon from "@/components/svg/BShareNowLogoIcon/BShareNowLogoIcon";
import BModal from "@/components/BModal/BModal";
import BToast from "@/components/BToast/BToast";
import { IRide } from "@/types";

export default function BHomePage() {
  const [rides, setRides] = useState<IRide[]>([]);
  const [page, setPage] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const itemsLimit = 10;

  const ProviderLogo = (providerName: string): React.ReactNode => {
    switch (providerName) {
      case "uber":
        return <UberLogoIcon />;
      case "bolt":
        return <BBoltLogoIcon />;
      case "lyft":
        return <LyftLogoIcon />;
      case "taxiApp":
        return <BTaxiAppLogoIcon />;
      case "shareNow":
        return <BShareNowLogoIcon />;
      default:
        return <BTaxiAppLogoIcon />;
    }
  };

  useEffect(() => {
    const fetchRides = async () => {
      const { data, totalPages } = await ridesApi.getrides({
        page,
        limit: itemsLimit,
      });
      setRides(data);
    };

    fetchRides();
  }, [page]);
  return (
    <div>
      <div className={styles.container}>
        {showNotification && <BToast color="green" setShowToast={setShowNotification}>
          <p>Booked!</p>
        </BToast>}
        {rides.length <= 0 ? (
          <div className={styles.spinner}>
            <BSpinner />
          </div>
        ) : (
          rides.map((ride, i) => (
            <BCard imgAlt="alt" imgSrc={ride.car.img || "https://via.placeholder.com/150"}>
              <div className={styles.driver}>
                <p>{ride.driver.name}</p>
                <BRating filled={ride.driver.rating} />
              </div>
              <div className={styles.carAndProvider}>
                <p>{`${ride.car.make} ${ride.car.model} ${ride.car.year}`}</p>
                {ProviderLogo(ride.provider.name)}
              </div>
              <div className={styles.priceAndDuration}>
                <h3>{`$${ride.price.averagePrice}`}</h3>
                <h3>{`${ride.duration} min`}</h3>
              </div>
              <div className={styles.cardButtonsContainer}>
                <BButton onClick={()=>setShowNotification(true)}>
                  <p>Book</p>
                  <BHailIcon />
                </BButton>
                  <BModal buttonText="Driver" driver={ride.driver} />
              </div>
            </BCard>
          ))
        )}
      </div>
      <BPagination currentPage={page} setPage={setPage} />
    </div>
  );
}
