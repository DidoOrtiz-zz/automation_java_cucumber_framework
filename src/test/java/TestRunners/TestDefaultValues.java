package TestRunners;

import org.apache.commons.lang3.StringUtils;

public class TestDefaultValues {
	
	public static final String DEFAULT_LINK = "http://3.87.50.247:3000";
	
	private static String link;
	
	
	public static String getLink() {
		return StringUtils.isEmpty(link) ? DEFAULT_LINK : link;
	}
	
	public static void setLink(String link) {
		TestDefaultValues.link= link;

	}

}
