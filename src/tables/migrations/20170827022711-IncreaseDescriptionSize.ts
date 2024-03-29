import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.changeColumn('projects', 'description', { type: dataTypes.STRING(65536), allowNull: true })
}

export async function down(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.changeColumn('projects', 'description', { type: dataTypes.STRING, allowNull: true })
}