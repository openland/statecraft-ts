import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.addColumn('projects', 'intro', { type: dataTypes.STRING, allowNull: true })
}

export async function down(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.removeColumn('projects', 'intro')
}