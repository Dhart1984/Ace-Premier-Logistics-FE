import * as applicantAPI from './applicant-api'
// because the api will export an exports object all modules can be imported with an * (wildcard)
// the as import keywork will provide a variable reference to the different sub-modules we will export from people-api.js 

export async function getApplicants(){
    try {
        const data = await applicantAPI.index()
        return data
		}catch(err){
        return err
    }
    
}
export async function createApplicant(data){
    try {
        const applicantData = await applicantAPI.create(data)
        return applicantData 
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function getApplicant(id){
    try {
        const foundApplicant = await applicantAPI.detail(id)
        return foundApplicant
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function deleteApplicant(id){
    try {
        const deletedApplicant = await applicantAPI.destroy(id)
        return deletedApplicant
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}