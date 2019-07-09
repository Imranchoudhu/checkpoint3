var manager= {
    editEmployee : function (edit) {
    
    this
    .waitForElementPresent('@searchEmployee', 20000)
    .click('@Imran')
    .waitForElementPresent('@searchresultTitle', 'Imran')
    .clearValue('@name')
    .setValue('@name', edit.name)
    .clearValue('@phone')
    .setValue('@phone', edit.phone)
    .clearValue('@email')
    .setValue('@email', edit.email)
    .clearValue('@title')
    .setValue('@title', edit.title)
    .click('@saveBtn')
    return this
    }
 }

module.exports = {
    url: "https://devmountain-qa.github.io/employee-manager-v2/build/index.html",
    commands:[manager],
    elements: {
        employeeLogo: '[class="titleText"]',
        searchEmployee: '[name="searchBox"]',
        clearSearch: '[name="clearSearch"]',
        Imran: '[name="employee6343"]',
        searchresultTitle: '[name="employeeName"]',
        name:'[name="nameEntry"]',
        phone:'[name="phoneEntry"]',
        email:'[name="emailEntry"]',
        title:'[name="titleEntry"]',
        saveBtn:'#saveBtn'
    












    }











}