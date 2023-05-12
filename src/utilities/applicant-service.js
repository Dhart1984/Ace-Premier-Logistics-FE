import * as applicantAPI from './applicant-api'
// because the api will export an exports object all modules can be imported with an * (wildcard)
// the as import keywork will provide a variable reference to the different sub-modules we will export from people-api.js 

export async function getApplicant(){
    try {
        // Delegate the network request code to the people-api.js API module
			  // which will ultimately return a JSON document
        const data = await applicantAPI.index()
        return data
    
		}catch(err){
        return err
    }
}


//is my appplicant api th ename of my be data? 