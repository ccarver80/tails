export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  let testAccount = await nodemailer.createTestAccount();

  try {
    const transporter = nodemailer.createTransport({
      port: 587,
      host: "smtp.office365.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: false,
    });

    await transporter.sendMail({
      from: "chrisCarverTest@outlook.com",
      to: "melissa.langer@outlook.com",
      subject: "NEW FOSTER FORM",
      html: `<div>
          <h1>New Adopt Form:</h1>
          <br>
          <h2>Applicant</h2>
          <p><b>Applicant First Name: </b>${req.body.first_name}</p>
          <p><b>Applicant Last Name: </b>${req.body.last_name}</p>
          <p><b>Applicant Email: </b>${req.body.email}</p>
          <p><b>Do they montior email?: </b>${req.body.monitor_email}</p>
          <p><b>Applicant Address Line 1: </b>${req.body.address_1}</p>
          <p><b>Applicant Address Line 2: </b>${req.body.address_2}</p>
          <p><b>Applicant City: </b>${req.body.city}</p>
          <p><b>Applicant State: </b>${req.body.state}</p>
          <p><b>Applicant Zip Code: </b>${req.body.zip_code}</p>
          <p><b>Applicant Country: </b>${req.body.country}</p>
          <p><b>Applicant Phone: </b>${req.body.phone}</p>


          <br>
          <h2>Co-Applicant</h2>
          <p><b>Co-Applicant First Name: </b>${req.body.co_app_first_name}</p>
          <p><b>Co-Applicant Last Name: </b>${req.body.co_app_last_name}</p>
          <p><b>Co-Applicant Email: </b>${req.body.co_email}</p>
          <p><b>Co-Applicant Phone: </b>${req.body.co_phone}</p>
          <h2>General Questions</h2>
          <p><b>Applicant Occupation: </b>${req.body.applicant_occupation}</p>
          <p><b>Everyone in household agree to fostering pets: </b>${req.body.agree_foster}</p>
          <p><b>Residents In Household: </b>${req.body.residents}</p>
          <p><b>Residents OVER 21: </b>${req.body.residents_21Over}</p>
          <p><b>Residents Under 21: </b>${req.body.residents_21Under}</p>
          <p><b>Ages of Children: </b>${req.body.children_count}</p>
          <p><b>Type of Home: </b>${req.body.type_of_home}</p>
          <p><b>Does the home have a yard?: </b>${req.body.home_yard}</p>
          <p><b>Type of fence: </b>${req.body.fence}</p>
          <p><b>Own, Lease, or Rent: </b>${req.body.ownOrLease}</p>
          <p><b>Residence have any restrictions: </b>${req.body.restrictions}</p>
          <p><b>If renting, Landlord info: </b>${req.body.landlord_info}</p>
          <p><b>How would you describe your household?:</b>${req.body.household_activity}</p>
          <p><b>Family have adequate time to provide love and attention?:</b>${req.body.adequate_love}</p>
          <p><b>Please tell us why you want a new pet?:</b>${req.body.reason}</p>
          <p><b>Does anyone in the household have allergies to pets?:</b>${req.body.allergies}</p>
          <p><b>If yes please explain how to manage allergies:</b>${req.body.allergies_desc}</p>
          <p><b>Current pets: </b>${req.body.current_pets}</p>
          <p><b>Current Vet: </b>${req.body.current_vet}</p>
          <p><b>List previously owned pets within last 5 years:</b>${req.body.prev_animals}</p>
          <p><b>Have you ever surrendered a pet?:</b>${req.body.surrender_pet}</p>
          <p><b>Pleae describe the reason for surrendering:</b>${req.body.surrender_pet_desc}</p>
          <p><b>Reasons to give up pets: </b>${req.body.giving_up_pet}</p>
          <p><b>Other reasons to give up pet: </b>${req.body.other_reasons}</p>
          <p><b>Where will this pet be kept when you are NOT home?: </b>${req.body.not_home}</p>
          <p><b>Where will the animal sleep: </b>${req.body.animal_sleep}</p>
          <p><b>How many hours left alone per day?: </b>${req.body.hours_alone}</p>
          <p><b>Do you agree to provide necessary vet care?:</b>${req.body.vet_care}</p>
          <p><b>Allow a home visit?:</b>${req.body.home_visit}</p>
          <p><b>Take time to housetrain:</b>${req.body.house_train}</p>
          <p><b>New pet has a accident what do you do?:</b>${req.body.accident_plan}</p>
          <p><b>Are you willing to work with your foster animal?:</b>${req.body.work_foster}</p>
          <p><b>Contact the ASAP they encounter a situation:</b>${req.body.contact_ASAP}</p>
          <p><b>Familar with crate training?:</b>${req.body.crate_training}</p>
          <p><b>Willing to crate train?:</b>${req.body.crate_training_willing}</p>
          <p><b>How long will they be able to provide foster care for?:</b>${req.body.how_long_foster}</p>

          <br>
          <h2>References</h2>
          <p><b>Referance #1 First Name: </b>${req.body.ref1_first_name}</p>
          <p><b>Referance #1 Last Name: </b>${req.body.ref1_last_name}</p>
          <p><b>Referance #1 Phone: </b>${req.body.ref1_phone}</p>
          <br>
          <p><b>Referance #2 First Name: </b>${req.body.ref2_first_name}</p>
          <p><b>Referance #2 Last Name: </b>${req.body.ref2_last_name}</p>
          <p><b>Referance #2 Phone: </b>${req.body.ref2_phone}</p>
      </div>`,
    });

    res.status(201).json({ message: `Sent sucsessful` });
  } catch (err) {
    res.status(500).json({ message: `Error on server, ${err}` });
  }
}
