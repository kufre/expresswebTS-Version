"use strict";
    import Model from "Elucidate/Database/Model";
    class Role_permissions extends Model{
      static get tableName() {
        return "role_permissions";
      }
    }

    export default Role_permissions;