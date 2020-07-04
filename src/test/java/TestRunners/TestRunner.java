package TestRunners;

import org.junit.BeforeClass;
import org.testng.annotations.Parameters;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = "classpath:Feature_Files/S4Npage",
		glue ={"GlueCode"},
		monochrome = true,
		format = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber.json"}				
)

public class TestRunner extends AbstractTestNGCucumberTests{
	@Parameters ({"link"})
	
	@BeforeClass
	public void beforeClass(String link) {
		TestDefaultValues.setLink(link);
	}
	

}
