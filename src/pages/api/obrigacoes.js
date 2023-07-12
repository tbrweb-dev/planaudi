import { sql_query } from './db'

const handlerObrigacoes = async (_, res) => {
  try{
    const results = await sql_query(`SELECT Mn_Titulo, mn_esubpasta, mn_texto FROM tab_menu WHERE mn_oculto=0 AND mn_destaque=1 AND (mn_esubpasta=152 or mn_esubpasta=168 or mn_esubpasta=5443 or mn_esubpasta=169 or mn_esubpasta=155 or mn_esubpasta=158 or mn_esubpasta=153 or mn_esubpasta=154) ORDER BY mn_peso DESC, mn_titulo DESC LIMIT 48`)

    return res.json(results)
  } catch (e) {
    
    res.status(500).json({ message: e.message })
    
  }
}

export default handlerObrigacoes