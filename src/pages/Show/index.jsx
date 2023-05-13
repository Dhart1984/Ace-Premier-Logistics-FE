import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getApplicant, deleteApplicant} from '../../utilities/applicant-service'
import {  useNavigate } from 'react-router-dom'

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
    <div className="applicant">
        <h1>Show Page</h1>
        <h2>{applicant.firstName}</h2>
        <h2>{applicant.lastName}</h2>
        <div>
        <button>{applicant.reviewed}</button>
        </div>
        <div>
            <button className='delete' onClick={handleDelete}>
                Remove Person
            </button>
        </div>
       

        {/* <img src={person.image} alt={person.name+" image"} /> */}
        </div>
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
