/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "user_roles";
exports.up = function (migration) {
  return migration.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("user_id").unsigned().nullable();
    table.integer("role_id").unsigned().nullable();
    table.foreign("user_id").references("id").inTable("users");
    table.foreign("role_id").references("id").inTable("roles");
    table.timestamps(true, true);
  });
};

exports.down = function (migration) {
  return migration.schema.dropTable(tableName);
};
