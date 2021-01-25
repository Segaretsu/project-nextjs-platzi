import DB from '../../../database/db'
import enablePublicAccess from '@cors'

const allAvos = async (request, response) => {
    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        await enablePublicAccess(req, res)

        const db = new DB()
        const allEntries = await db.getAll()
        const length = allEntries.length
        response.status(200).json({ data: allEntries, length })
    } catch (e) {
        console.error(e)
        response.status(500).json({ length: 0, data: [], error: 'Something went wrong' })
    }
}

export default allAvos;