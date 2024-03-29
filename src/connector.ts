import * as sequelize from 'sequelize'
import * as cls from 'continuation-local-storage';
import * as umzug from 'umzug';
var namespace = cls.createNamespace('tx-namespace');
(<any>sequelize).useCLS(namespace)

export var connection: sequelize.Sequelize

if (process.env.DATABASE_URL != undefined) {
    connection = new sequelize(process.env.DATABASE_URL!);
} else {
    connection = new sequelize('postgres', 'steve', '', {
        host: 'localhost',
        dialect: 'postgres'
    });
}

require('./tables')

var migrator = new umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: connection
    },
    migrations: {
        params: [connection.getQueryInterface(), sequelize],
        path: __dirname + '/tables/migrations'
    }
})

export async function migrate() {
    await migrator.up()
}

export async function reset() {
    var args = { to: 0 }
    await migrator.down(<any>args)
}