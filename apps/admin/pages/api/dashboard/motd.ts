import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(403).json({
        message: 'forbidden',
      });
    }

    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const { value } = await response.json();

    return res.status(200).json({
      message: value,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
