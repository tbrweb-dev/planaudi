import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.REACT_SERVER,
    user: process.env.REACT_USER,
    password: process.env.REACT_PASSWORD,
    database: process.env.REACT_DATABASE
  }
})

export async function sql_query(query_string, values=[]) {
  try {
    const results = await db.query(query_string, values)
    await db.end()
    
    return results
  } catch (e) {
    throw Error(e.message)
  }
}