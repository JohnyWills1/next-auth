import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import styles from '../../../styles/Layout.module.css';

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    const { data: session } = useSession();

    return (
        <div>
            {session ? (
                <div className={styles.layout}>
                    <p>{session.user && session.user.email}</p>
                    <div className={styles.avatar}>
                        {session.user && session.user.image && (
                            <img
                                alt="Avatar"
                                height="60"
                                src={session.user.image}
                                width="60"
                            />
                        )}
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                </div>
            ) : (
                <div className={styles.layout}>
                    Not signed in
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            )}
            {children}
        </div>
    );
}

export default Layout;
