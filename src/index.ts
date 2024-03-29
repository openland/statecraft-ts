import * as db from './connector'
import * as api from './api'
import * as sample from './sample';
async function init() {
  try {
    if (process.env.NODE_ENV == "development") {
      console.info("Connecting to database in DEVELOPMENT mode")
      await db.connection.getQueryInterface().dropAllTables()
      await db.migrate()
      await sample.createEmptyData()
    } else {
      console.info("Connecting to database in RELEASE mode")
      await db.migrate()
    }
    console.info("Starting API endpoint")
    await api.default()
  } catch (e) {
    console.error("Unable to init server")
    console.error(e)
  }
}

init()