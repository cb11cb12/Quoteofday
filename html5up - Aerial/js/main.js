//Example fetch using favquotes.com


document.querySelector('button').addEventListener('click', quoteOfDay)

function quoteOfDay(){
  // let search = document.querySelector('input').value 
  const url = 'https://favqs.com/api/qotd'

  fetch(url)
      .then(res => res.json())// parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = `by ${data.quote.author}`
        document.querySelector('h2').innerText = `"${data.quote.body}"`
        
        // document.querySelector('img').src = data[0].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  
    }
    
    // api_key=17c97fb2-af11-4d9a-b149-fb1dc7e0e904

   