import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getApplicant, deleteApplicant} from '../../utilities/applicant-service'
import {  useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const Show = () => {
  const [applicant, setApplicant] = useState(null)
  const { id } = useParams()

 const handleRequest = async () => {
		try {
				const applicantData = await getApplicant(id)
				setApplicant(applicantData)
		}catch(err){
				console.log(err)
		}
}

  console.log(`Current Applicant: ${JSON.stringify(applicant)}`)

  useEffect(() => {
    handleRequest()
  }, [])

  
// After testing that person is defined you can use a ternary statement to
// conditionally render either a person's data or a loading message

const loaded = () => (
  <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024,h_683/https://warehouse.ninja/wp-content/uploads/2021/11/amazon-delivery-van-1024x683.jpg" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {applicant.firstName}
        </Typography>
        <Typography>
        {applicant.lastName}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='delete' onClick={handleDelete}>
        Delete Applicant</Button>
      </CardFooter>
    </Card>
    
)

const loading = () => {
    return <h1>Loading.........</h1>
            // alternatively you can use the spinner
}


const navigate = useNavigate()

const handleDelete = async () => {
    
        try {
      
      const deletedResp = await deleteApplicant(id)

       console.log(deletedResp)

      navigate('/')
      // navigate will change the browser's URL
      // which will cause react-router to "redirect" to home page;
      // the Main will then re-render the People component
      // upon mount People will fetch the updated index of people data

  } catch (err) {
      console.log(err)
      navigate(`/people/${id}`)
  }
}








return applicant ? loaded() : loading()






}

export default Show
