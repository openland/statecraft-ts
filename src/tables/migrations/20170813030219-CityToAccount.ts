import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.renameTable('cities', 'accounts')
}

export async function down(queryInterface: QueryInterface, dataTypes: DataTypes) {
    await queryInterface.renameTable('accounts', 'cities')
}