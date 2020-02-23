import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../actions/techActions';
const TechSelectOptions = () => {
    const tech = useSelector(state => state.tech);
    const { techs, loading } = tech;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTechs());
        //eslint-disable-next-line
    }, [])
    return (
        !loading && techs !== null && techs.map(t => <option key={t.id} value={`${t.firstName} ${t.firstName}`}>
            {t.firstName} {t.lastName}
        </option>)
    )
}

export default TechSelectOptions;
