
/*
* @author David Liotta
* 10/2/18
**/

main()

function main(){

    var userList = [] //We need this to store all of our users

    /*
    *   This is the standard user for our site.
    *   The have many things stored about them
    */
    class User {
        constructor(email, user, pass) {
            this.userName = user;
            this.password = pass; //TODO want to store this as a hashed value for security
            this.email = email;
            var surveyList = [];
            var isAdmin = false;
            var userPic;
        }
        /*
         *   Allows Users to set their email
        */
        setEmail(email){
            this.email = email;
        }
                    
        /*
        * Allows user to set their profile picture
        */
        setPic(picFile){
            this.userPic = picFile;
        }

        /*
        * Add the survey made to the user's list of surveys
        */
        createSurvey(survey){
            //this.surveyList.push(survey)
            this.sList++;               
        }

        /*
        * Allows the user to change their password
        */
        changePassword(newPass){
            this.password = newPass.hashCode();
        }

        /**
         * Used to filter a user out of our userList
         */
        deleteUser(userName){
            if(this.isAdmin == true || this.userName == userName)
                userList = userList.filter(item => item !== userName)
        }

        toString(){
            console.log("User: " , this.userName, " has ", this.surveyList.size() , " survey(s)" );
        }
    }

    /**
     * This is code taken from Stack Overflow user Jared Forsyth
     * The purpose of this code block is to create a function that hashes
     * strings to a hash value since JS does not have an integrated hash function
     */
    String.prototype.hashCode = function() {
        var hash = 0;
        if (this.length == 0) {
            return hash;
        }
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    //TODO email duplication checking does not work yet
    //This and createAdmin could probably be one function
    function createUser(email, userName, password, repass){
        if(!userList.includes(email)){
            if(password == repass){
                var userName = new User(email, userName, password);
                userList.push(userName);
            }else{
                console.log("The passwords don't match!")
            }
        }else{
            console.log("This user already exists");
        } 
    }

    function createAdmin(email, adminName, password, repass){
        if(!userList.includes(email)){
            if(password == repass){
                var admin = new User(email, adminName, password);
                admin.isAdmin = true;
                userList.push(admin);
            }else{
                console.log("The passwords don't match!")
            }
        }else{
            console.log("This user already exists");
        } 
    }

    /*
    * A function uses to print out all of the usernames on our site
    */
    function printUsers(){
        for(i = 0; i < userList.length; i++)
            console.log(userList.indexOf(i).userName)
    }
    
    createAdmin("a1@users.com", "admin", "pass123", "pass123");
    createUser("u1@users.com", "user1", "pass456", "pass456");
    createUser("u2@users.com", "user2", "pass789", "pass789");
    createUser("u3@users.com", "user3", "pass012", "pass012");
    createUser("u3@users.com", "user3", "pass789", "pass789");  //should not be able to create this user for due to repeated email
    createUser("u4@users.com", "user4", "pass000", "wrong");  //should not be able to create this user for due passwords not matching
    
    console.log(userList)
    var admin = new User("fake@email.com", "radar", "stuff");
    admin.isAdmin = true;

    admin.deleteUser(userList.user2)

    console.log(userList)

}

