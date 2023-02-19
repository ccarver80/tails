import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { Modal } from "../../common/Modal";
import { Select } from "../../common/Select";
import { TextArea } from "../../common/TextArea";
import CheckBox from "../../common/CheckBox";
import { numbers, states } from "../../constants";
import Image from "next/image";
import TextInput from "../../common/TextInput";
import logo from "../../../public/imgs/logoText.png";
import styles from "./styles.module.css";
import Radio from "../../common/Radio";

export function FosterModal({ isOpen, closeModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    toast("Please wait", { autoClose: 2000 });
    await fetch("/api/foster", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Your form was submitted");
        setIsLoading(false);
        closeModal();
      } else {
        setIsLoading(false);
        toast("Something went wrong. Please try again");
      }
    });
  };
  return (
    <Modal maxWidth="1200px" isModalOpen={isOpen} closeModal={closeModal}>
      <div className={styles.foster}>
        <div className={styles.foster__header}>
          <Image src={logo} />
          <h1>Foster Application</h1>
        </div>

        <div className={styles.foster__description}>
          <h2>
            To qualify as a foster for Tails of the Midwest Rescue you must:
          </h2>

          <ul>
            <li>* Be at least 21-years of age</li>
            <li>* If you rent, you must have consent from your landlord.</li>
            <li>
              * All animals in your home must be spayed/neutered if they are 6
              months or older, unless there are medical reasons for not doing
              so.
            </li>
            <li>
              * All animals in the home must be up to date with vaccinations.
            </li>
            <li>
              * Agree to have a home visit done by a Tails of the Midwest Rescue
              representative.
            </li>
            <li>
              * Agree to have the animal wear a Tails of the Midwest Rescue ID
              tag on its collar at all times when it public or outdoors.
            </li>
            <li>
              * Agree to never allow the foster animal to be off leash when it’s
              outdoors, unless it is in a securely fenced in area.
            </li>
            <li>
              * Agree to have the foster animal reside in the home, not outside.
              The foster animal may not be left outdoors when you are not at
              home. This includes outdoor kennel runs.
            </li>
            <li>
              * Agree to never allow foster dog to be left unattended with young
              children.
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.foster__form}>
            <h3 className="col-span-2">Applicant Info:</h3>
            <TextInput
              lable="Applicants First Name:"
              register={register}
              name="first_name"
              placeholder="Bob"
            />

            <TextInput
              lable="Applicants Last Name:"
              register={register}
              name="last_name"
              placeholder="Smith"
            />
            <div className="col-span-2 ">
              <TextInput
                lable="Email:"
                register={register}
                name="email"
                type="email"
                placeholder="bob_smith@email.com"
              />
            </div>

            <div className="flex flex-col col-span-2">
              <h4 className="mx-auto text-red-500 text-1xl">
                Do you regularly monitor this email address and agree to provide
                us with timely responses to our emails?
              </h4>

              <div className="flex flex-row">
                <Radio
                  register={register}
                  name="monitor_email"
                  value="yes"
                  lable="Yes"
                />
                <Radio
                  register={register}
                  name="monitor_email"
                  value="no"
                  lable="No"
                />
              </div>
              <p className="mt-5 text-sm">
                You may need to monitor your email’s spam folder for emails from
                our organization:
              </p>
            </div>

            <div className="col-span-2 ">
              <TextInput
                lable="Applicant's Address 1:"
                register={register}
                name="address_1"
                placeholder="123 Apple St"
              />
            </div>

            <div className="col-span-2 ">
              <TextInput
                lable="Applicant's Address 2:"
                register={register}
                name="address_2"
                placeholder="Apt #123"
              />
            </div>

            <TextInput
              lable="City"
              register={register}
              name="city"
              placeholder="Bismarck"
            />
            <div className="col-span-2">
              <Select
                label="State/Province"
                register={register}
                options={states}
                name="state"
                required
              />
            </div>

            <TextInput
              lable="Zip Code"
              register={register}
              name="zip_code"
              placeholder="58504"
            />

            <TextInput
              lable="Country"
              register={register}
              name="country"
              placeholder="United States"
            />

            <div className="col-span-2">
              <TextInput
                lable="Applicants Phone:"
                register={register}
                name="phone"
                placeholder="111-222-3456"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <h3 className="col-span-2">Co Applicant Info:</h3>
            <TextInput
              register={register}
              lable="Co-Applicants First Name:"
              name="co_app_first_name"
              placeholder="Jane"
            />

            <TextInput
              register={register}
              lable="Co-Applicants Last Name:"
              name="co_app_last_name"
              placeholder="Smith"
            />

            <div className="col-span-2 ">
              <TextInput
                lable="Co-Applicant's Email:"
                register={register}
                name="co_email"
                type="email"
                placeholder="jane_smith@email.com"
              />
            </div>
            <div className="col-span-2">
              <TextInput
                lable="Co-Applicants Phone:"
                register={register}
                name="co_phone"
                placeholder="111-222-3456"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <h3 className="col-span-2 mt-5">General Information</h3>
            <div className="col-span-2">
              <TextInput
                lable="Applicants Occupation"
                register={register}
                name="applicant_occupation"
                placeholder="Cashier at wal-mart"
              />
            </div>

            <div className="flex flex-col col-span-2 gap-y-5">
              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                label="Does EVERYONE in the household agree to fostering pets?"
                name="agree_foster"
              />

              <Select
                options={numbers}
                register={register}
                label="How many people reside in your home?"
                name="residents"
              />

              <Select
                options={numbers}
                register={register}
                label="How many residents are OVER 21 years old"
                name="residents_21Over"
              />

              <Select
                options={numbers}
                register={register}
                label="How many residents are UNDER 21 years old"
                name="residents_21Under"
              />

              <TextArea
                rows="2"
                register={register}
                name="children_count"
                label="What are the ages of the children in the household? "
                placeholder="6, 3, and 4 months old"
              />

              <h4 className="mx-auto mb-2 text-1xl">
                What type of home do you live in?
              </h4>
              <div className="flex flex-row">
                <Radio
                  register={register}
                  name="type_of_home"
                  value="house"
                  lable="House"
                />
                <Radio
                  register={register}
                  name="type_of_home"
                  value="apartment"
                  lable="Apartment"
                />

                <Radio
                  register={register}
                  name="type_of_home"
                  value="condo"
                  lable="Condo"
                />
                <Radio
                  register={register}
                  name="type_of_home"
                  value="twin-home"
                  lable="Twin Home"
                />
              </div>
              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="home_yard"
                label="Does your home have a yard?"
              />

              <TextArea
                label="If yes, please tell us the material and height of the fence."
                register={register}
                name="fence"
                placeholder="Wooden picket fence 6 feet high"
              />

              <Select
                options={[
                  { name: "Own", value: "own" },
                  { name: "Lease", value: "lease" },
                  { name: "Rent", value: "rent" },
                ]}
                register={register}
                name="ownOrLease"
                label="Do you?"
              />

              <TextInput
                register={register}
                name="restrictions"
                lable="Does your residence have any pet restrictions?"
              />

              <TextArea
                rows="2"
                placeholder="Greg Johnson, 701-222-3456, Cottonwood Apartments"
                register={register}
                label="If you are renting, please provide your landlord's name and phone number"
                name="landlord_info"
              />

              <TextArea
                rows="2"
                placeholder="Busy, Quiet, Active, etc...."
                register={register}
                label="How would you describe your household?"
                name="household_activity"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="adequate_love"
                label="Does your family have the adequate time to provide the necessary love and attention for a new pet?"
              />

              <TextArea
                rows="2"
                name="reason"
                placeholder="Companionship, Guard Dog, freind for another pet in household, etc... "
                register={register}
                label="Please tell us why you want a new pet!"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="allergies"
                label="Does anyone in the household have allergies to pets?"
              />

              <TextArea
                rows="4"
                name="allergies_desc"
                label="If yes, please explain the plan to manage the allergies with adopting a new pet: "
                register={register}
              />

              <TextArea
                rows="5"
                label="Please list all current pets owned"
                register={register}
                placeholder="Include type of animal, breed (if know), age, gender, and if they were spayed/neutered: "
                name="current_pets"
              />

              <TextArea
                rows="3"
                label=" If applicable, who is your current veterinarian and their phone number: "
                register={register}
                placeholder="Joe at High Plains vet, 701-222-1234"
                name="current_vet"
              />

              <TextArea
                rows="3"
                label="Please list all previously owned pets within the last five years. Include type of animal, breed (if known), age, gender, spayed/neutered status, and the reason for no longer owning the pet:"
                name="prev_animals"
                register={register}
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="surrender_pet"
                label="Have you ever surrendered a pet"
              />

              <TextArea
                rows="3"
                label="If yes, please describe the situation and reason for surrendering:"
                name="surrender_pet_desc"
                register={register}
              />

              <h4>
                For what reason(s) would you consider giving up your pet(s)
              </h4>
              <CheckBox
                register={register}
                label="Moving"
                value="Moving"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Medical Issues"
                value="Medical Issues"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Chewing"
                value="Chewing"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Divorce"
                value="Divorce"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="New Baby"
                value="New Baby"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Allergies"
                value="Allergies"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Housebreaking Issues"
                value="Housebreaking Issues"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Animal becomes too large"
                value="Animal becomes too large"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Financial Hardship"
                value="Financial Hardship"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Behavioral Issues"
                value="Behavioral Issues"
                name="giving_up_pet"
              />
              <CheckBox
                register={register}
                label="Other"
                value="Other"
                name="giving_up_pet"
              />

              <TextArea
                label="If other, please explain"
                register={register}
                rows="4"
                name="other_reasons"
              />

              <TextInput
                register={register}
                lable="Where will this pet be kept when you aren't at home"
                name="not_home"
                placeholder="In a kennel in the mud room"
              />

              <TextInput
                register={register}
                lable="Where will the animal sleep at night?"
                name="animal_sleep"
                placeholder="In a dog bed in our bedroom"
              />

              <Select
                register={register}
                label="How many hours (on average) will the animal be left alone?"
                name="hours_alone"
                options={numbers}
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="vet_care"
                label=" Do you agree to provide necessary vet care by a licensed veterinarian?"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="home_visit"
                label="Are you willing to allow a home visit to be completed before an adoption would be approved?"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="house_train"
                label="Are you willing to take the time to housetrain the animal, if necessary?"
              />

              <TextArea
                register={register}
                name="accident_plan"
                label="If your new pet has an accident in your home, what correction do you plan on using?"
                rows="3"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="work_foster"
                label="Are you willing to work with your foster animal on any issues it may have?"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="contact_ASAP"
                label="Will you contact us ASAP if you encounter situations in which you may need assistance?"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="crate_training"
                label="Are you familiar with crate training?"
              />

              <Select
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                register={register}
                name="crate_training_willing"
                label="Are you willing to crate train?"
              />

              <h4 className="mx-auto mb-2 text-1xl">
                How long will you be willing to provide a foster home for an
                animal?
              </h4>
              <div className="flex flex-col gap-5">
                <Radio
                  register={register}
                  name="how_long_foster"
                  value="as long as it takes"
                  lable="As long as it takes"
                />
                <Radio
                  register={register}
                  name="how_long_foster"
                  value="1-6 months"
                  lable="1-6 months"
                />

                <Radio
                  register={register}
                  name="how_long_foster"
                  value="6-12 months"
                  lable="6-12 months"
                />
                <Radio
                  register={register}
                  name="how_long_foster"
                  value="Emergency Foster only (1-2 weeks)"
                  lable="Emergency Foster only (1-2 weeks)"
                />
              </div>
              <h3 className="col-span-2 ">References</h3>
              <h4 className="col-span-2">Referance #1</h4>
              <TextInput
                lable="First Name"
                name="ref1_first_name"
                register={register}
              />

              <TextInput
                lable="Last Name"
                name="ref1_last_name"
                register={register}
              />

              <div className="col-span-2">
                <TextInput
                  lable="Referance Phone:"
                  register={register}
                  name="ref1_phone"
                  placeholder="111-222-3456"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>
              <h4 className="col-span-2 mt-2">Referance #2</h4>
              <TextInput
                lable="First Name"
                name="ref2_first_name"
                register={register}
              />

              <TextInput
                lable="Last Name"
                name="ref2_last_name"
                register={register}
              />

              <div className="col-span-2">
                <TextInput
                  lable="Referance Phone:"
                  register={register}
                  name="ref2_phone"
                  placeholder="111-222-3456"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>

              {isLoading ? (
                <ClipLoader />
              ) : (
                <button
                  className="p-5 text-white bg-pink-500 w-fit rounded-xl"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </div>
          </div>

          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </Modal>
  );
}
