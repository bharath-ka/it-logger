import React, { useState, Fragment, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layouts/PreLoader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }
    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])
    return (
        !loading ?
            <Fragment>
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4 className="center">System Logs</h4>
                    </li>
                    {
                        !loading && logs.length === 0
                            ? (<p className="center">No Logs to show...</p>)
                            : (logs.map(log => <LogItem key={log.id} log={log} />))
                    }
                </ul>
            </Fragment> : <Preloader />
    )
}

export default Logs;
