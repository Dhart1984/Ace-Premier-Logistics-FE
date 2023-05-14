

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getApplicant } from '../../utilities/applicant-service'


const Edit = () => {
    const [applicant, setApplicant] = useState(null)
    const { id } = useParams()
    
    const navigate = useNavigate()

    const handleRequest = async () => {
        try {
            const applicantData = await getApplicant(id)
            setApplicant(applicantData)
						// ... we will also update a local form state next
        } catch (err) {
            console.log(err)
						
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    const loaded = () => (
        <div className="person">
            <h1>Edit Page</h1>
            <p>...form goes here</p>
        </div>
    )

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return applicant ? loaded() : loading()

}

export default Edit