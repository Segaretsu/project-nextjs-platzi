import DB from '../../../database/db'

const avo = async (request, response) => {
    const db = new DB()
    const { query: { avoId } } = request;
    const entry = await db.getById(avoId);
    response.status(200).json({ data: entry })
}

export default avo;