import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layouts/PreLoader';
import { getLogs } from '../../actions/logActions';

const Logs = () => {

    const log = useSelector(state => state.log);
    const { logs, loading } = log;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLogs());
        //eslint-disable-next-line
    }, []);
    
    return (
        !loading && logs !== null ?
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
