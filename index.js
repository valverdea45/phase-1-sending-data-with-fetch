// Add your code here
function submitData(userName, userEmail){
    return fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(obj => document.body.append(obj.id))
    .catch(function (message){
        document.body.append(message)
    })
}
