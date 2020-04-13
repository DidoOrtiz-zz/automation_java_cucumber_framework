package GlueCode;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import TestRunners.TestDefaultValues;

public class GeneralStepDefinitions {

    public static WebDriver driver;
    private String link = TestDefaultValues.getLink();
    

    @Before public void openBrowserWithLink() {
    	 	 	
    	System.setProperty("webdriver.chrome.driver","C:\\Users\\diana.ortiz\\Downloads\\ws\\automation_java_cucumber_framework\\src\\test\\resources\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(link);
    }

    @After public void closeBrowser() {
//        driver.quit();
    }

    public static WebDriver getDriver() {
        return driver;
    }

}
