import * as applicantAPI from './applicant-api'
// because the api will export an exports object all modules can be imported with an * (wildcard)
// the as import keywork will provide a variable reference to the different sub-modules we will export from people-api.js 

export async function createApplicant(data){
    try {
        // const applicantData = await applicantAPI.create(data)
        // return applicantData 
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}
//is my appplicant api th ename of my be data? 