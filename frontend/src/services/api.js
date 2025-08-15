
const API_URL = "http://localhost:8080/api"

//Function Fetch Data
const getData = async (data, USE_DUMMY_DATA) => {
    const response = await fetch(`${API_URL}/${data}`);    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
};


export { getData };