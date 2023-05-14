import { useState, useEffect } from 'react'
import { getApplicants, createApplicant, } from '../../utilities/applicant-service'

// import {create } from '../'
import { Link } from 'react-router-dom'
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";



const Applicants = (props) => {

    const [applicants, setApplicants] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const BASE_URL = "http://localhost:4000/applicants";
    const getApplicant = async () => {
        try {
            const response = await getApplicants()
            console.log(response)
            // const allApplicants = await response.json()
            setApplicants(response)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { getApplicant() }, [])



    async function handleRequest() {
        try {
            const apiResponse = await getApplicants()
            setApplicants(apiResponse)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [isLoading])
//my output 
    const loaded = () => {
        console.log(applicants)
        return applicants?.map((applicant) => {
            return <Link to={`/applicant/${applicant._id}`}>
                <Card className="w-96">
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <Avatar variant="circular" alt="candice" src="https://cdn-icons-png.flaticon.com/512/299/299378.png" />
                            </ListItemPrefix>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {applicant.firstName}   {applicant.lastName}
                                </Typography>
                                
                               
                                <Typography variant="small" color="gray" className="font-normal" >
                                {applicant.email}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal" >
                                {applicant.createdAt}
                                </Typography>
                            </div>
                        </ListItem>

                    </List>
                </Card>

            </Link>
        })
    }




    const loading = () => {
        return (
            <div className="applicant-list">
                <h1>
                    Loading...
                    <span>
                        <img
                            className="spinner"
                            src="https://freesvg.org/img/1544764567.png"
                        /> {" "}
                    </span>
                </h1>
            </div>
        )
    }




    return (
        isLoading ? loading() : loaded()
    )
}


export default Applicants