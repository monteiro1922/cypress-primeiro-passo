import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {        
    loginPage.accessLoginPage() 
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)


    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
          
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'DriversNumber', '2025-07-10', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm() 
  })
    

  

})