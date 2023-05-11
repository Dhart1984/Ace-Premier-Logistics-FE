import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Applicant = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [applicants, setApplicants] = useState([])

    const BASE_URL = "http://localhost:4000/applicants";
    // this base url variable will be replaced with an environmental variables once we migrate the fetch to service modules 

    const getApplicant = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allApplicant = await response.json()
            setApplicants(allApplicant)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { getApplicant() }, [])

    const loaded = () => {
        return applicants?.map((applicant) => {
            return <Link to={`/applicant/${applicant._id}`}>{applicant._id}</Link>
        })
    }

    console.log(`There are ${applicants.length} people available to render`)

    return ( isLoading?(<h1> loading</h1>) : loaded()  )
      
}

export default Applicant

