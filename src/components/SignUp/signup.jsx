import { useState, useEffect } from "react";
import { createApplicant } from "../../utilities/applicant-service.js"
import { Link } from 'react-router-dom';
// import pick from ""
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";


export default function SignUp() {
  const [newForm, setNewForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  // handleChange function for form
  const handleSubmit = async (e) => {
    // prevents the page from refreshing / redirecting request to external source
    e.preventDefault()
    try {
      // pass local state (after submit) to API utility service
      await createApplicant(newForm)
      // after async process is complete, set loading to true if no error is returned and clear out form

      setNewForm({
        firstName: "",
        lastName: "",
        email: ""
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    console.log(newForm)
    setNewForm({ ...newForm, [e.target.name]: e.target.value, });
  };

  return (
    <Card color="transparent" shadow={false} >
      <Typography variant="h4" color="white">
        Sign Up/Register
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6" >
          <Input onChange={handleChange} name='firstName' value={newForm.firstName} size="lg" label="First Name" color="white" />
          <Input onChange={handleChange} name='lastName' value={newForm.lastName} size="lg" label="Last Name" color="white" />

          <Input onChange={handleChange} name='email' value={newForm.email} size="lg" label="Email" color="white" />


          {/* <Input type="password" size="lg" label="Password" /> */}
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Link to="/thanks" className="mt-6" style={{ width: '100%' }}>
          <Button type="submit" fullWidth>
            Register
          </Button>
        </Link>
        










        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );



}