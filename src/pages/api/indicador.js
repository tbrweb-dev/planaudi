import { sql_query } from './db'

const handlerIndicadorSelic = async (_, res) => {
  try {
    const results = await sql_query(`SELECT mn_codigo, mn_titulo, mn_link, mn_texto, mn_esubpasta FROM tab_menu WHERE mn_oculto=0 and mn_esubpasta=242 ORDER BY mn_peso desc, mn_titulo asc`)

    return res.json(results)
  } catch (e) {

    res.status(500).json({ message: e.message })

  }
}

export default handlerIndicadorSelic