import Model from "Elucidate/Database/Model";
import Role_mode from './Roles_model'


class User extends Model {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  static tableName = "users";

  static relationMappings = {
    roles: {
      relation: Model.ManyToManyRelation,
      modelClass: Role_mode,
      join: {
        from: "users.id",
        through: {
          from: "user_roles.user_id",
          to: "user_roles.role_id",
        },
        to: "roles.id",
      },
    },
  };
}

export default User;