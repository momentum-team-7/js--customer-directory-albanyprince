const container = document.querySelector(".customer-directory")

let customerPro = customers[0]

console.log("customer name is", customerPro.name)
console.log("customer location is", customerPro.location)
console.log("customer email is", customerPro.email)
console.log("customer phone is", customerPro.phone)
console.log("customer cell is", customerPro.cell)
console.log("customer photo", customerPro.picture.thumbnail)
console.log("customer nat is", customerPro.nat)


for (let customerPro of customers) {
    // console.log(customers.customerPro.name)
    const customerPhoto = document.createElement("img")
    customerPhoto.src = customerPro.picture.thumbnail
    container.appendChild(customerPhoto)
   
    const customerName = document.createElement ("h2")
    customerName.innerText = `${customerPro.name.title} ${customerPro.name.first} ${customerPro.name.last}`
    container.appendChild(customerName)

    const customerEmail = document.createElement ("h2")
    customerEmail.innerText = customerPro.email
    container.appendChild(customerEmail)
    
    const customerLocation = document.createElement("h2")
    customerLocation.innerText = `${customerPro.location.street.number} ${customerPro.location.street.name} 
    ${customerPro.location.city}, ${nameToAbbr(customerPro.location.state)} ${customerPro.location.postcode}`
    container.appendChild(customerLocation)
    
    // const customerBirth = document.createElement("h2")
    // customerBirth.innerText = 

    // const customerLocation2 = document.createElement("h2")
    // customerLocation2.innerText = `${customerPro.location.street.number} ${customerPro.location.street.name} 
    // ${customerPro.location.city}, ${nameToAbbr(customerPro.location.state)} ${customerPro.location.postcode}`
    // container.appendChild(customerLocation2)

    // const customerState = document.createElement("h2")
    // customerState.innerText = customerPro.state
    // container.appendChild(customerState)
    
        
}


