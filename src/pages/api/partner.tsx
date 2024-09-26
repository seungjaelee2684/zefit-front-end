import path from "path";
import { promises as fs } from 'fs';

export default async function getPartnerApi({ req, res }: any) {
    // JSON 파일의 경로 설정
    const filePath = path.join(process.cwd(), 'data', 'partner.json');

    // 파일 읽기
    const jsonData = await fs.readFile(filePath, 'utf8');

    // JSON 데이터를 클라이언트에 반환
    res.status(200).json(JSON.parse(jsonData));
}