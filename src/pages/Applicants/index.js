import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getApplicant } from '../../utilities/applicant-service'

export default function Applicant(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [applicants, setApplicants] = useState([])

    const BASE_URL = "http://localhost:4000/applicants";
 
    const [applicant, setApplicant] = useState(null)

    // const [count, setCount] = useState(1)

 
    const [newForm, setNewForm] = useState({
        firstName: "",
        lastName: "",
        email: "",

    })

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

    return (isLoading ? (<h1> loading</h1>) : loaded())

}



