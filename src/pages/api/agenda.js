import { sql_query } from './db'

const handlerNoticias = async (_, res) => {
  try{
    const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const datatratada = `${ano}-${mes}-${dia}`
    const results = await sql_query(`SELECT obr_nome FROM tab_obrigacoes WHERE (obr_datainicio <= '${datatratada}' AND obr_datafinal >= '${datatratada}') AND obr_destaque <> 1 ORDER BY obr_codigo ASC LIMIT 6`)

    return res.json(results)
  } catch (e) {
    
    res.status(500).json({ message: e.message })
    
  }
}

export default handlerNoticias