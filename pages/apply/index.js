import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/main";
import Logo from "../../components/main/Logo";
import styles from "./styles.module.css";
import { AdoptModal } from "../../components/modals/adopt";
import { FosterModal } from "../../components/modals/foster";

export default function Apply() {
  const [adoptModal, setAdoptModal] = useState(false);
  const [fosterModal, setFosterModal] = useState(false);
  return (
    <>
      <div className={styles.adoptMain}>
        <Header />

        <div className={styles.adoptMain__buttonContainer}>
          <button onClick={() => setAdoptModal(true)}>Adopt</button>
          <div className={styles.adoptMain__logo}>
            <Logo />
            {/* <button className="mx-auto mt-10 scale-150 w-fit">Surrender</button> */}
          </div>

          <button onClick={() => setFosterModal(true)}>Foster</button>
        </div>

        <AdoptModal
          isOpen={adoptModal}
          closeModal={() => setAdoptModal(false)}
        />

        <FosterModal
          isOpen={fosterModal}
          closeModal={() => setFosterModal(false)}
        />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
