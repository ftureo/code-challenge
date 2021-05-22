//Set endpoint
var url = 'https://api.propublica.org/congress/v1/113/house/members.json'

//Set key for fetch endpoint
function dataFetcher (url) {
    fetch(url, {
        headers: {
        'X-API-Key': 'KTp3E1dke3t7dTkaFLQNEtygiQSg1e9ThL6VBUzQ' } 
    })
    .then(response => response.json())
    .then(data => {
        //For more clarity, I create a variable
        var apiResponse = data.results[0].members
        //I call function needed for render the information 
        dataSet(apiResponse)
    })
}

function dataSet(apiResponse) {
    //Capturing the datatable
    const tableCaptured = document.querySelector('.tableInformation')
    //Iterating the datalist
    for(var i=0; apiResponse.length; i++) {
        //Creating the elements for the datatable
        const newRow = document.createElement('tr')
        const newID = document.createElement('td')
        const newLastName = document.createElement('td')
        const newFirstName = document.createElement('td')
        const newBirth = document.createElement('td')
        const newVotesWithParty = document.createElement('td')
        const newVotesAgainstParty = document.createElement('td')
        
        // Setting up the information
        newID.innerHTML = apiResponse[i]['id']
        newLastName.innerHTML = apiResponse[i]['last_name']
        newFirstName.innerHTML = apiResponse[i]['first_name']
        newBirth.innerHTML = apiResponse[i]['date_of_birth']
        newVotesWithParty.innerHTML = apiResponse[i]['votes_against_party_pct']
        newVotesAgainstParty.innerHTML = apiResponse[i]['votes_with_party_pct']
        
        // Appending up the information to the datatable
        newRow.appendChild(newID)
        newRow.appendChild(newLastName)
        newRow.appendChild(newFirstName)
        newRow.appendChild(newBirth)
        newRow.appendChild(newVotesWithParty)
        newRow.appendChild(newVotesAgainstParty)
        tableCaptured.appendChild(newRow)
    }
}
// Calling the function for FETCH
dataFetcher (url)