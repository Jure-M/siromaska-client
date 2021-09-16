import './unitDashboard.scss';

import React, { useEffect, useState } from 'react';

// api
import {
  fetchAllUnits,
  fetchCreateUnit,
  fetchDeleteUnit,
  fetchEditUnit,
  IUnit,
} from '../../api/unit';

// hooks
import useTypedSelector from '../../hooks/useTypedSelector';
import UnitList from './UnitList';
import Button from '../elements/Button';

// components
import InfoMessage from '../elements/InfoMessage';
import ErrorMesssage from '../elements/ErrorMessage';

const UnitDashboard = () => {
  const [units, setUnits] = useState<IUnit[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [apiSuccesMessage, setApiSuccesMessage] = useState('');
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const [newUnitName, setNewUnitName] = useState('');

  const { token } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await fetchAllUnits(token);
        setUnits(res.data.units);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };
    fetch();
  }, []);

  const handleAddUnitClick = () => {
    setIsEditing(true);
  };

  const handleSaveUnit = async () => {
    try {
      const res = await fetchCreateUnit(newUnitName, token);
      setUnits([
        ...units,
        { _id: res.data.unit._id, name: res.data.unit.name },
      ]);
      setApiSuccesMessage(res.data.message);
      setIsEditing(false);
      setNewUnitName('');
      setTimeout(() => {
        setApiSuccesMessage('');
      }, 2000);
    } catch (err) {
      setApiErrorMessage(err.response.data.message);
      setTimeout(() => {
        setApiErrorMessage('');
      }, 2000);
    }
  };

  const handleDeleteUnit = async (id: string) => {
    try {
      const res = await fetchDeleteUnit(id, token);
      setUnits(units.filter((unit) => unit._id !== id));
      setApiSuccesMessage(res.data.message);
      setTimeout(() => {
        setApiSuccesMessage('');
      }, 2000);
    } catch (err) {
      setApiErrorMessage(err.response.data.message);
      setTimeout(() => {
        setApiErrorMessage('');
      }, 2000);
    }
  };

  const handleEditUnit = async (newName: string, id: string) => {
    try {
      const res = await fetchEditUnit(newName, id, token);
      const newUnits = units.map((unit) =>
        unit._id === id ? { _id: unit._id, name: newName } : unit,
      );
      setUnits(newUnits);
      setApiSuccesMessage(res.data.message);
      setTimeout(() => {
        setApiSuccesMessage('');
      }, 2000);
    } catch (err) {
      setApiErrorMessage(err.response.data.message);
      setTimeout(() => {
        setApiErrorMessage('');
      }, 2000);
    }
  };

  return (
    <div className="unit-dashboard">
      <h3 className="unit-dashboard__title">Your apartments:</h3>
      {apiSuccesMessage && <InfoMessage message={apiSuccesMessage} />}
      {apiErrorMessage && <ErrorMesssage title={apiErrorMessage} />}
      {loading && <p>Loading</p>}
      {!loading && units.length === 0 ? (
        <p>You do not have any apartment</p>
      ) : (
        <UnitList
          units={units}
          deleteUnit={handleDeleteUnit}
          editUnit={handleEditUnit}
        />
      )}
      <div className="unit-dashboard__row">
        {isEditing ? (
          <>
            <input
              type="text"
              value={newUnitName}
              onChange={(e) => setNewUnitName(e.target.value)}
            />
            <div className="u-ml-s">
              <Button
                title="save"
                classes="btn--small"
                handleClick={handleSaveUnit}
              />

              <Button
                title="cancel"
                classes="btn--small u-ml-s"
                handleClick={() => setIsEditing(false)}
              />
            </div>
          </>
        ) : (
          <Button
            title="add apartment"
            classes="btn--small"
            handleClick={handleAddUnitClick}
          />
        )}
      </div>
    </div>
  );
};

export default UnitDashboard;
