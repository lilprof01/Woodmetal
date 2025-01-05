import React from "react";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fcard from "./featuresCard";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";

function Feature() {
  return (
    <div className="py-16 px-16 dark:bg-[#a52a2a] dark:text-white dark:shadow-4xl">
      <div className="flex flex-col sm:flex-row align-middle justify-between sm:justify-center gap-6 shadow-3xl dark:shadow-black">
        <Fcard icon={faCar} title='Swift delivery' text='Stress free delivery service' />
        <Fcard icon={faPeopleGroup} title='Customer service' text='Adequate customer services' />
        <Fcard icon={faScrewdriverWrench} title='Professionalism' text='Professional team at your service' />
        <Fcard className="" icon={faShield} title='Trust' text='Trusted services/delivery internationally' />
      </div>
    </div>
  )
};

export default Feature;