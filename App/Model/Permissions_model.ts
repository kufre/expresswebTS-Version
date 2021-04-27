"use strict";
    import Model from "Elucidate/Database/Model";
    class Permissions extends Model {
      id!: number;
      name!: string;
      description!: string;
      static tableName = "permissions";
    }

    export default Permissions;