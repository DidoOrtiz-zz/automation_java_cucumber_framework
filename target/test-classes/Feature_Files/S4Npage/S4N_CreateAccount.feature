Feature: Create S4N Account

	Background:
		Given I'm a user that sucessfully open the account creation page

   Scenario: Successful S4N Account Creation
  	When fill up the new account form with the following data
  	| Nombre   | Apellido | Correo              | Contrasena | Fecha Nacimiento | Genero |
		| Diana 	 | Ortiz 	  | dilorly@hotmail.com | Pass456    | 1998-12-12       | Mujer  |
    Then an account must be created
    
   Scenario: Try create account without fill up the account form
  	When I try to create an account without fill up the account form
  	| Nombre | Apellido | Correo | Contrasena | Fecha Nacimiento | Genero |
		|      	 | 			 	  |		  	 |            |                  | 			  |
    Then an account must not be created
    
   Scenario: Try create account without enter the required field name
 		When I try to create an account without enter the required field name
 		| Nombre | Apellido | Correo | Contrasena | Fecha Nacimiento | Genero |
		| 		 	 | Sanchez 	  | erika@gmail.com | contra456    | 1982-10-11       | Mujer  |
    Then an account must not be created
    
   Scenario: Try create account without select genre
  	When I try to create an account without select a genre
  	| Nombre | Apellido | Correo 					 | Contrasena | Fecha Nacimiento | Genero |
		| Camilo | Rivera	  | camilo@yahoo.com | Cami123    | 1986-07-14       | 			  |
    Then I must be able to see the message "El género es obligatorio"
    #And an account must not be created
    
   Scenario: Try create account with existing user
  	When I try to create an account with an existing user
  	| Nombre   | Apellido | Correo              | Contrasena | Fecha Nacimiento | Genero |
		| Diana 	 | Ortiz 	  | dilorly@hotmail.com | Pass456    | 1998-12-12       | Mujer  |
    Then an account must not be created