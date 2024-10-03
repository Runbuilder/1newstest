// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
    try {
        const records = await base(process.env.AIRTABLE_TABLE_NAME).select().all();
        const news = records.map(record => ({
            id: record.id,
            title: record.fields.Title,
            content: record.fields.Content,
            category: record.fields.Category,
            date: record.fields.Date,
        }));
        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
