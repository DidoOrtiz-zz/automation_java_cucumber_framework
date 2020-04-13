$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature_Files/S4Npage/S4N_CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create S4N Account",
  "description": "",
  "id": "create-s4n-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7212040100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m a user that sucessfully open the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.i_sucessfully_open_the_account_creation_page()"
});
formatter.result({
  "duration": 179166700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Successful S4N Account Creation",
  "description": "",
  "id": "create-s4n-account;successful-s4n-account-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "fill up the new account form with the following data",
  "rows": [
    {
      "cells": [
        "Nombre",
        "Apellido",
        "Correo",
        "Contrasena",
        "Fecha Nacimiento",
        "Genero"
      ],
      "line": 8
    },
    {
      "cells": [
        "Diana",
        "Ortiz",
        "dilorly@hotmail.com",
        "Pass456",
        "1998-12-12",
        "Mujer"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "an account must be created",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.fillUpNewAccountForm(DataTable)"
});
formatter.result({
  "duration": 930790300,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreationStepDefinitions.createAccount()"
});
formatter.result({
  "duration": 906339600,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 8406749100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m a user that sucessfully open the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.i_sucessfully_open_the_account_creation_page()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Try create account without fill up the account form",
  "description": "",
  "id": "create-s4n-account;try-create-account-without-fill-up-the-account-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I try to create an account without fill up the account form",
  "rows": [
    {
      "cells": [
        "Nombre",
        "Apellido",
        "Correo",
        "Contrasena",
        "Fecha Nacimiento",
        "Genero"
      ],
      "line": 14
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "an account must not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.tryCreateAccountWithoutFillUpForm(DataTable)"
});
formatter.result({
  "duration": 780550900,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreationStepDefinitions.AccountMustNotBeCreated()"
});
formatter.result({
  "duration": 739042500,
  "status": "passed"
});
formatter.after({
  "duration": 24100,
  "status": "passed"
});
formatter.before({
  "duration": 7386310400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m a user that sucessfully open the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.i_sucessfully_open_the_account_creation_page()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Try create account without enter the required field name",
  "description": "",
  "id": "create-s4n-account;try-create-account-without-enter-the-required-field-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I try to create an account without enter the required field name",
  "rows": [
    {
      "cells": [
        "Nombre",
        "Apellido",
        "Correo",
        "Contrasena",
        "Fecha Nacimiento",
        "Genero"
      ],
      "line": 20
    },
    {
      "cells": [
        "",
        "Sanchez",
        "erika@gmail.com",
        "contra456",
        "1982-10-11",
        "Mujer"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "an account must not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.tryCreateAccountWithoutEnterTheRequiredFieldName(DataTable)"
});
formatter.result({
  "duration": 1064193200,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreationStepDefinitions.AccountMustNotBeCreated()"
});
formatter.result({
  "duration": 732446900,
  "status": "passed"
});
formatter.after({
  "duration": 23300,
  "status": "passed"
});
formatter.before({
  "duration": 9132514300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m a user that sucessfully open the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.i_sucessfully_open_the_account_creation_page()"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Try create account without select genre",
  "description": "",
  "id": "create-s4n-account;try-create-account-without-select-genre",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I try to create an account without select a genre",
  "rows": [
    {
      "cells": [
        "Nombre",
        "Apellido",
        "Correo",
        "Contrasena",
        "Fecha Nacimiento",
        "Genero"
      ],
      "line": 26
    },
    {
      "cells": [
        "Camilo",
        "Rivera",
        "camilo@yahoo.com",
        "Cami123",
        "1986-07-14",
        ""
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I must be able to see the message \"El género es obligatorio\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.tryCreateAccountWithoutSelectGenre(DataTable)"
});
formatter.result({
  "duration": 1125269300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "El género es obligatorio",
      "offset": 35
    }
  ],
  "location": "AccountCreationStepDefinitions.iMustBeAbleToSeeTheMessage(String)"
});
formatter.result({
  "duration": 842708200,
  "status": "passed"
});
formatter.after({
  "duration": 15600,
  "status": "passed"
});
formatter.before({
  "duration": 7693463700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m a user that sucessfully open the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.i_sucessfully_open_the_account_creation_page()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#And an account must not be created"
    }
  ],
  "line": 31,
  "name": "Try create account with existing user",
  "description": "",
  "id": "create-s4n-account;try-create-account-with-existing-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I try to create an account with an existing user",
  "rows": [
    {
      "cells": [
        "Nombre",
        "Apellido",
        "Correo",
        "Contrasena",
        "Fecha Nacimiento",
        "Genero"
      ],
      "line": 33
    },
    {
      "cells": [
        "Diana",
        "Ortiz",
        "dilorly@hotmail.com",
        "Pass456",
        "1998-12-12",
        "Mujer"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "an account must not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDefinitions.tryCreateAccountExistingUser(DataTable)"
});
formatter.result({
  "duration": 1144384300,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreationStepDefinitions.AccountMustNotBeCreated()"
});
formatter.result({
  "duration": 737814000,
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GlueCode.AccountCreationStepDefinitions.AccountMustNotBeCreated(AccountCreationStepDefinitions.java:57)\r\n\tat ✽.Then an account must not be created(Feature_Files/S4Npage/S4N_CreateAccount.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
});