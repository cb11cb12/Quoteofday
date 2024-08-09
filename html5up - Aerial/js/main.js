$('button').on('click', quoteOfDay);

function quoteOfDay(){
  $.ajax({
    url: 'https://quotes-api-self.vercel.app/quote',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $('h3').text(`by ${data.author}`);
      $('h2').text(`"${data.quote}"`);
      // $('img').attr('src', data.url);
    },
    error: function(err) {
      console.log(`error ${err}`);
    }
  });
}

// //Example fetch using api.quotable.io

// document.querySelector('button').addEventListener('click', quoteOfDay)

// function quoteOfDay(){
//   // let search = document.querySelector('input').value 
//   const url = 'https://api.quotable.io/quotes/random'

//   fetch(url)
//       .then(res => res.json())// parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h3').innerText = `by ${data[0].author}`
//         document.querySelector('h2').innerText = `"${data[0].content}"`
        
//         // document.querySelector('img').src = data[0].url
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
//     }
    
    

   