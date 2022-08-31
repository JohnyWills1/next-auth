import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (session) {
        return res.send({
            content:
                'Success, You can access this content because you are signed in.',
        });
    }

    res.send({
        error: 'You must be sign in to view the protected content on this page.',
    });
};
