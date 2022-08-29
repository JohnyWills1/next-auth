import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GithubProvider({
            // eslint-disable-next-line no-undef
            clientId: process.env.GITHUB_ID ?? '',
            // eslint-disable-next-line no-undef
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
    ],
    session: {
        strategy: 'jwt',
    },
});
