document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();

    fetch ('https://httpbin.org/post', 
    {
        method: "POST",
        body: JSON.stringify(
            {
                name: document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                day: document.getElementById("day").value,
                month: document.getElementById("month").value,
                year: document.getElementById("year").value,
                gender: document.querySelector('input[name="g"]:checked').value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            }
        ),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error))
    
});