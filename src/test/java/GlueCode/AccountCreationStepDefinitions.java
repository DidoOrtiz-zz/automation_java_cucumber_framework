package GlueCode;



import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.S4nAccountCreationPage;

public class AccountCreationStepDefinitions {

    private S4nAccountCreationPage accountCreationPage;
    
    @Given("^I'm a user that sucessfully open the account creation page$")
    public void i_sucessfully_open_the_account_creation_page() throws Throwable {
    	accountCreationPage = new S4nAccountCreationPage();
    	accountCreationPage.loadPage();
    }
    	
    @When("^fill up the new account form with the following data$")
    public void fillUpNewAccountForm(DataTable dt) throws Throwable {
    	
    	setFormData(dt);  	
    }
    
    @Then("^an account must be created$")
    public void createAccount() throws Throwable {
    	accountCreationPage.clickCreateAccountButton();
    	boolean isEqualResponse = accountCreationPage.isEqualResponse("Bienvenido Diana Ortiz");
    	if (isEqualResponse) {
    		accountCreationPage.closeAlert();
    	}
    	
    	accountCreationPage.closePage(); 
    }
    	
    @When("^I try to create an account with an existing user$")
    public void tryCreateAccountExistingUser(DataTable dt) throws Throwable {   	
    	accountCreationPage = new S4nAccountCreationPage();
    	accountCreationPage.loadPage();
    	accountCreationPage.suspendPage(10);
		setFormData(dt);
		accountCreationPage.clickCreateAccountButton();		
    }

    @Then("^an account must not be created$")
    public void AccountMustNotBeCreated() throws Throwable {
    	boolean isLoadedPopUp = accountCreationPage.isLoadedPopUp(); 
    	accountCreationPage.closePage();
    	assertEquals(false, isLoadedPopUp);
    }
    
    @When("^I try to create an account without fill up the account form$")
    public void tryCreateAccountWithoutFillUpForm(DataTable dt) throws Throwable {
    	accountCreationPage = new S4nAccountCreationPage();
    	accountCreationPage.loadPage();
    	accountCreationPage.suspendPage(10);
		setFormData(dt);
		accountCreationPage.clickCreateAccountButton();		
    }
    
    @When("^I try to create an account without enter the required field name$")
    public void tryCreateAccountWithoutEnterTheRequiredFieldName(DataTable dt) throws Throwable {  	
    	accountCreationPage = new S4nAccountCreationPage();
    	accountCreationPage.loadPage();
    	accountCreationPage.suspendPage(10);
		setFormData(dt);
		accountCreationPage.clickCreateAccountButton();		
    }
    
    @When("^I try to create an account without select a genre$")
    public void tryCreateAccountWithoutSelectGenre(DataTable dt) throws Throwable {
    	accountCreationPage = new S4nAccountCreationPage();
    	accountCreationPage.loadPage();
    	accountCreationPage.suspendPage(10);
		setFormData(dt);
		accountCreationPage.clickCreateAccountButton();	
    }
    
    @Then("^I must be able to see the message \"([^\"]*)\"$")
    public void iMustBeAbleToSeeTheMessage(String expectedMessage) throws Throwable {
    	String actualMessage = accountCreationPage.validateNoGenreSelected();
    	accountCreationPage.closePage();
    	assertEquals("Validar si los mensajes son iguales", expectedMessage, actualMessage);
    }


    public void setFormData(DataTable dt) throws Throwable {
    	List<Map<String, String>> list = dt.asMaps(String.class, String.class);

    	String nombre = list.get(0).get("Nombre");
    	accountCreationPage.setName(nombre);

    	String apellido = list.get(0).get("Apellido");
    	accountCreationPage.setLastName(apellido);

    	String correo = list.get(0).get("Correo");
    	accountCreationPage.setEmail(correo);

    	String pass = list.get(0).get("Contrasena");
    	accountCreationPage.setPassword(pass);

    	String fechaNac = list.get(0).get("Fecha Nacimiento");
    	accountCreationPage.setBirthday(fechaNac);

    	String genero = list.get(0).get("Genero");
    	accountCreationPage.selectGenre(genero);

    }
      
       
}
