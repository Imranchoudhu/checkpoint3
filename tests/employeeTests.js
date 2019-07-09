var employeeManagerPage = {}
 
 var myData = [
     {name: 'Imran Choudhury',
      phone: '728666777',
      email: 'Imran@gmail.com',
      title: 'Ceo'},
      
      {name: 'Tawfique',
      phone: '1234567890',
      email: 'Taw@gmail.com',
      title: 'Ceo'}
      

]

    
module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.employee(),
        employeeManagerPage.navigate()
    },


    after: browser => {
     browser.end()
    },
    'Edit Imran': browser => {
        myData.forEach(edit =>{employeeManagerPage.editEmployee(edit)
            })
        
    
}







}