<!DOCTYPE html>
<html>
    <head>
        <title>Person</title>
    </head>
    <body>
        <script>
            /*
            * @author David Liotta
            */

            function main(){
                var userList = [];

                /*
                *   This is the standard user for our site.
                *   The have many things stored about them
                */
                function User(userName, password) {
                    this.userName = userName;
                    this.password = password;  //TODO want to store this as a hashed value for security
                    var email;
                    var surveyList = [];
                    var isAdmin = false;
                    var userPic;
                }

                /*
                * Allows user to set their email
                */
                function setEmail(user, email){
                    user.email = email;
                }
                
                /*
                * Allows user to set their profile picture
                */
                function setPic(user, picFile){
                    user.userPic = picFile;
                }

                //This and createAdmin could probably be one function
                function createUser(userName, password){
                    var userName = new User(userName, password);
                    userList.push(userName);
                }

                function createAdmin(userName, password){
                    var admin = new User(userName, password);
                    admin.isAdmin = true;
                    userList.push(userName);
                }

                function createSurvey(survey){
                    this.surveyList.push(survey);                
                }

                function changePassword(user, newPass){
                    user.password = newPass.hash();

                }

            }
        </script>
    </body>
</html>
