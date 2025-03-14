import { sequelize } from "../configs/postgresDB.js";
import { DataTypes } from "sequelize";

/**
 * @swagger
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       properties:
 *         tag_id:
 *           type: integer
 *           description: The unique identifier for the tag.
 *         name:
 *           type: string
 *           description: The name of the tag.
 *       required:
 *         - tag_id
 *         - name
 *       example:
 *         tag_id: 1
 *         name: "Technology"
 */
const Tag = sequelize.define('Tag', {
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'Tags',
    schema: 'public',
    timestamps: true
});

export default Tag;