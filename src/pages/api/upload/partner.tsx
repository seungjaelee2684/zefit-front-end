import path from "path";
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";

export default async function postPartnerApi(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ message: "Method Not Allowed" });;

    try {
        // JSON 파일의 경로 설정
        const filePath = path.join(process.cwd(), 'public', 'data', 'partner.json');

        // 파일 읽기
        const fileData = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileData);

        // 클라이언트로부터 받은 데이터
        const requestBody = req.body;

        const newPartnerData = {
            id: jsonData[jsonData.length].id + 1,
            requestBody
        };

        // 업데이트할 데이터
        const updatePartnerData = {
            ...jsonData,
            newPartnerData
        };

        // 업데이트된 데이터를 파일에 저장
        await fs.writeFile(filePath, JSON.stringify(updatePartnerData, null, 2), 'utf8');

        // JSON 데이터를 클라이언트에 반환
        res.status(200).json({ message: "Partner data updated successfully" });
    } catch (error: any) {
        console.error("Error updating file:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};