"use strict";
    import Model from "Elucidate/Database/Model";
    class User_roles extends Model{
      static get tableName() {
        return "user_roles";
      }
     
    }

    export default User_roles;