let teachersForms = document.getElementsByClassName("teacher-contract")
for(let teacherForm of teachersForms){
    teacherForm.addEventListener("submit", function(event){
        event.preventDefault()
        
        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price * hours
        console.log(total)

        alert("O valor total do contrato é de R$ " + total)
    })
}