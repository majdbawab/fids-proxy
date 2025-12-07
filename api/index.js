import fetch from "node-fetch";

export default async function handler(req, res) {
    const API_KEY = "f76cc7a734cbd9daae6d9ec1e653f60a";
    const airport = req.query.airport || "DXB";

    try {
        const url = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${airport}`;
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
}
