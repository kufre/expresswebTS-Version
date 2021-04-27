"use strict";
import Model from "Elucidate/Database/Model";
import Permission_model from './Permissions_model'
class Roles extends Model {
  id!: number;
  name!: string;
  description!: string;

  static tableName = "roles";



  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        descriptioon: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }

  static relationMappings = {
    permissions: {
      relation: Model.ManyToManyRelation,
      modelClass: Permission_model,
      join: {
        from: "roles.id",
        through: {
          from: "role_permissions.role_id",
          to: "role_permissions.permission_id",
        },
        to: "permissions.id",
      },
    },
  };
}

export default Roles;