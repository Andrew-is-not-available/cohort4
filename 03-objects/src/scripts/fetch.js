const functions = {

    async postData(url = '', data = {}){
        const response = await fetch(url, {
            method: 'POST',     
            mode: 'cors',       
            cache: 'no-cache',  
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        })
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },
}

export default functions;