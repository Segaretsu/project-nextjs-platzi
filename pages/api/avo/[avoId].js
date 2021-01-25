import DB from '../../../database/db'
import enablePublicAccess from '@cors'

const avo = async (request, response) => {
    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        await enablePublicAccess(req, res)

        const db = new DB()
        const { query: { avoId } } = request;
        const entry = await db.getById(avoId);
        response.status(200).json({ data: entry })
    } catch (e) {
        console.error(e)
        res.status(404).end()
    }
}

export default avo;