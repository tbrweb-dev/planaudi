import { sql_query } from './db'

const handlePublicacao = async (req, res) => {
  try {
    var sql = "SELECT * FROM tab_menu WHERE mn_oculto = 0 AND Mn_Codigo = ?"
    var sqlchildren = "SELECT * FROM tab_menu WHERE mn_oculto = 0 AND mn_esubpasta = ?"

    const publication = await sql_query(sql, [req.query.id])

    const children = await sql_query(sqlchildren, [req.query.id])

    const results = { ...publication[0], children: children }

    return res.json(results)
  } catch (e) {

    res.status(500).json({ message: e.message })

  }
}

export default handlePublicacao