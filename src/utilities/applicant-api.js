const BASE_URL = `${process.env.REACT_APP_BASE_URL}/`
console.log(BASE_URL)
export async function index() {
    try {
        const res = await fetch(BASE_URL, { method: 'GET' })
        // console.log(res)
          // Check if request was successful
        if (res.ok) {
            // res.json() - the returned JSON serialzier data from our people API 
            return res.json()
        }else {
					throw new Error('Invalid Request')
				}
	
    } catch (err) {
				console.log(err) 
				return err       
    }
}
export async function create(data){
    try {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        } 

        const response = await fetch(BASE_URL, options)
        console.log(response)
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid POST Request")
        }

    } catch(err){
        console.log(err)
        return err
    }
}

export async function detail(id){
    try {
        const options = {
            method: 'GET'
        } 
        const url = `${BASE_URL}/${id}`
        const response = await fetch(url, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    } catch(err){
        console.log(err)
        return err
    }
}



export async function destroy(id){
    try {
		const url = `${BASE_URL}/${id}`
        const res = await fetch(url, { 
            method: 'DELETE',
        })
        if (res.ok) {
            return res.json()
        }
    } catch (err) {
        console.log(err)
        throw new Error('Invalid Request')
    }
}
