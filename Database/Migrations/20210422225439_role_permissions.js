/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "role_permissions";
exports.up = function (migration) {
  return migration.schema.createTable(tableName, (table) => {
    table.increments("id");
     table.integer("role_id").unsigned().nullable();
     table.integer("permission_id").unsigned().nullable();
     table.foreign("role_id").references("id").inTable("roles");
     table.foreign("permission_id").references("id").inTable("permissions");
    table.timestamps(true, true);
  });
};

exports.down = function (migration) {
  return migration.schema.dropTable(tableName);
};
