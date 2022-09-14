import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
