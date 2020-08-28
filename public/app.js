document.getElementById('add').addEventListener('click', event => {
  event.preventDefault()

  axios.post('api/burgers', {
    burger_name: document.getElementById('burger').value,
    devoured: false
  })
    .then(({ data }) => {
      let burgerElem = document.createElement('li')
      burgerElem.id = data.id
      burgerElem.className = 'list-group-item list-group-item-info'
      burgerElem.dataset.name = document.getElementById('burger').value
      burgerElem.innerHTML = `
            ${document.getElementById('burger').value}
          <button class="btn btn-success devour">Devour It!</button>
        `

      document.getElementById('notDevoured').append(burgerElem)

      document.getElementById('burger').value = ''
    })
    .catch(err => console.log(err))
})


document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.classList.contains('devour')) {
    axios.put(`api/burgers/${event.target.parentNode.id}`, {
      devoured: true
    })
      .then(({ data }) => {
        console.log(({ data }))

        let burgerElem = document.createElement('li')
        burgerElem.id = data.id
        burgerElem.className = 'list-group-item list-group-item-danger'
        burgerElem.innerHTML = 
            `${event.target.parentNode.dataset.name}`
        

        document.getElementById('devoured').append(burgerElem)


        event.target.parentNode.remove()

      })
      .catch(err => console.log(err))
  }
})