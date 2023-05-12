import {useState, useEffect} from "react";
import {getApplicant, createApplicant} from "../../../utilities/applicant-service.js"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

   
  export default function SignUp() {
    const [newForm, setNewForm] = useState()
       // handleChange function for form
       const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.firstName]: e.target.value, [e.target.lastName]: e.target.value, [e.target.email]: e.target.value  });
      };
     
      const handleSubmit = async (e) => {
        // prevents the page from refreshing / redirecting request to external source
        e.preventDefault()
        try {
            // pass local state (after submit) to API utility service
            await createApplicant(newForm)
            // after async process is complete, set loading to true if no error is returned and clear out form
            // setIsLoading(true)
            setNewForm({
                firstName: "",
                lastName: "",
                email: ""
            })
        } catch (err) {
            console.log(err)
        }
    }

  
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up/Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="First" />
            <Input size="lg" label="Last Name" />
            <Input size="lg" label="Email" />
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
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }