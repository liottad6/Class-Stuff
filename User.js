
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
        constructor(user, pass) {
            if(userList.includes(user)){
                console.log("This user already exists!")
            }else{
                this.userName = user;
                this.password = pass; //TODO want to store this as a hashed value for security
                var email;
                var surveyList = [];
                var isAdmin = false;
                var userPic;
                var sList = 0;
            }
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

    //This and createAdmin could probably be one function
    function createUser(userName, password){
        var userName = new User(userName, password);
        userList.push(userName);
    }

    function createAdmin(admin, password){
        var temp = admin;
        temp = new User(admin, password);
        temp.isAdmin = true;
        userList.push(temp);
    }

    /*
    * A function uses to print out all of the usernames on our site
    */
    function printUsers(){
        for(i = 0; i < userList.length; i++)
            console.log(userList.indexOf(i).userName)
    }
    
    createAdmin("user1", "pass123");
    createUser("user2", "pass456");
    createUser("user3", "pass789");
    createUser("user4", "pass012");
    createUser("user3", "pass789");
    
    console.log(userList)
    var admin = new User("radar", "stuff");
    admin.isAdmin = true;

    admin.deleteUser(User.userName)

    console.log(uName)

    console.log(userList)

}
