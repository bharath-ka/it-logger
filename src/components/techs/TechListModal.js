import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
const TechListModal = () => {

    const { techs, loading } = useSelector(state => state.tech);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTechs());
        //eslint-disable-next-line
    }, [])
    return (
        <div id="tech-list-modal" className="modal">
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className="collection">
                    {
                        !loading && techs !== null && techs.length !== 0 && techs.map(tech => (
                            <TechItem key={tech.id} tech={tech} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;
