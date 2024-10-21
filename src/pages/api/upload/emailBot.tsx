import path from "path";
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";

// export default async function postEmailBotApi(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { record } = req.body;
//     if (record && record.email) {
//       await sendEmail(
//         record.email,
//         'Title', // 메일 타이틀
//         `Content: ${record.event_description}` // 메일 컨텐트
//       );
//       res.status(200).json({ message: '이메일 전송 완료' });
//     } else {
//       res.status(400).json({ error: '유효하지 않은 데이터' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };