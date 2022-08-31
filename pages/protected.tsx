import { Layout } from '@Components';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Protected.module.css';

// eslint-disable-next-line no-undef
function ProtectedPage(): JSX.Element {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/restricted');
            const json = await res.data;
            if (json) {
                setContent(json.content);
            }
        };
        fetchData();
    }, [session]);

    if (typeof window !== 'undefined' && loading) return <></>;

    if (!session) {
        return (
            <div className={styles.main}>
                <h1>Access Denied</h1>
            </div>
        );
    }

    return (
        <Layout>
            <div className={styles.main}>
                <h1>Protected Page</h1>
                <p>{content}</p>
            </div>
        </Layout>
    );
}

export default ProtectedPage;
