package pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static GlueCode.GeneralStepDefinitions.getDriver;

import java.util.concurrent.TimeUnit;

public class S4nAccountCreationPage {
	WebDriver driver;

    public S4nAccountCreationPage (){
    }

    public void setName(String name_p){

    	WebElement name = this.driver.findElement(By.id("id_nombre"));
    	name.sendKeys(name_p);
    	return;
    }
    
    public void setLastName(String lastName_p){

    	WebElement lastName = this.driver.findElement(By.id("id_apellido"));
    	lastName.sendKeys(lastName_p);
    	return;
    }
    
    public void setEmail(String email_p){

    	WebElement email = this.driver.findElement(By.id("id_email"));
    	email.sendKeys(email_p);
    	return;
    }
    
    public void setPassword(String pass_p){

    	WebElement password = this.driver.findElement(By.id("id_password"));
    	password.sendKeys(pass_p);
    	return;
    }
    
    public void setBirthday(String birthday_p){

    	WebElement birthday = this.driver.findElement(By.name("birthdate"));
    	birthday.sendKeys(birthday_p);
    	return;
    }
    
  public void selectGenre(String genre_p){
	  
	
  	 if (genre_p.contentEquals("Mujer")) {
  		 
  	  	WebElement genreWoman = this.driver.findElement(By.id("id_genero_mujer"));
  	  	genreWoman.click();
	} 
  	 
 	else if (genre_p.contentEquals("Hombre")){
 		
    	WebElement genreMan = this.driver.findElement(By.id("id_genero_hombre"));
    	genreMan.click();
	}
  	 
 	return;
  }
	  
    
    public void clickCreateAccountButton(){

//    	absolute xpath locator "/html/body/div[1]/div/form/div[8]/button"
    	WebElement createAccountButton = this.driver.findElement(By.xpath("//button[contains(text(),'Crear cuenta')]"));
    	createAccountButton.click();
    	return;
    }
    
    public boolean isEqualResponse(String response_p){

    	Alert alert = driver.switchTo().alert();
    	String response = alert.getText();
    	
    	if (response.contentEquals(response_p)) {
    		return true;
    	}
    	else {
    		return false;
    	}  	
    }
    
    public String validateNoGenreSelected(){
    	
    	try {

//    		absolute xpath locator "/html/body/div[1]/div/form/div[6]/span"
    		WebElement genreMessage = this.driver.findElement(By.xpath("//span[contains(text(),'El género es obligatorio')]"));
    		String message = genreMessage.getText(); 
    		return message;
    	}
    	
    	catch(Exception ex) {
    		return "";

    	}
    }
    	
    
    public boolean isLoadedPopUp() {
    	boolean foundAlert = false;
        WebDriverWait wait = new WebDriverWait(driver, 0);
        try {
            wait.until(ExpectedConditions.alertIsPresent());
            foundAlert = true;
        } catch (TimeoutException e) {
            foundAlert = false;
        }
        return foundAlert;
    	
    }
    
    public void closeAlert(){

    	Alert alert = driver.switchTo().alert();
    	alert.accept();  	
    }
    
    public void loadPage(){
        this.driver = getDriver();
        return;
    }
    
    public void closePage(){
        this.driver.quit();
        return;
    }
  
    public void suspendPage(long timeInSeconds){   	
    	this.driver.manage().timeouts().implicitlyWait(timeInSeconds, TimeUnit.SECONDS);
        return;
    }
    
}
