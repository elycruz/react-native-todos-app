import {NextApiRequest, NextApiResponse} from "next";

export default async function handleIntakeFormStart(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).write('hello');
}

