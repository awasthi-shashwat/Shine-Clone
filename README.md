# Shine-Clone
Hi everyone, this is our first group project in which we are trying to clone the shine website as much as possible.

We have use HTML, CSS and JavaScript to achive the following functionality.

Out of all the functionality we tried to clone the jobAlert and jobPost feature of the original one.


#Home page

Our home page is very similar to the original one.


#Registration page

We have created the registeration page which will register the detail of the new user.

User register Data is stored in the localStorage under registerCandidateData (Which is not a good idea)

Once the registeration is sucessfully, an alert of the Sucessfull Registeration will appear.

And after clicking the ok the user will be redirected to the Home page were he can login and use the services.


#Login page 

When the register user login with the registered email id and password, if the credentials are valid user will get the sucessfull login and alert of invalid credentials if invalid.

For this we have add javaScript code which validate the provided login id and password with the registeration dataBase.


#Create jobAlert

On this page the user will add some keywords and create an alert which he will get on the another page related to the keywords.

On that page while appending the result we have also added the Apply button where user can directly apply for his desired job.

On that page we have also provided the search bar , were user can search for the keywords and the result will be appended below and can apply from  their.

We have added a small dataBase in the localStorage for some job profile under jobProfileData, from were we filter according to the keywords and append the result.



#post a job page

This page is used by the recruter to post a job.(we have not included the whole functionality)

When recruter add the require profile he has to select the package which we added in the form of select.

The recruter has to select the package and according to this he will receive the discount and after selecting every check box when he will click on the continue button we will be redirected to the payment checkout page.

On the payment page he has to enter the payment detail and can checkout from their. Their we have added the setTimeout function which will give an alert of sucessfull payment after 2 sec, because in the real world it take some time to validate the card detail along keeping the process secure.

And once the recruter click on the ok recruter will be send to the home page.





This is the ongrowing project and we are working to make it more efficent along with learning things.

Thankyou



