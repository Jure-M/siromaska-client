import './unit.scss';

// global imports
import React, { useState } from 'react';

// api
import { IUnit } from '../../api/unit';
import Button from '../elements/Button';

interface IUnitProps {
  unit: IUnit;
  deleteUnit: (id: string) => void;
  editUnit: (newName: string, id: string) => void;
}

const Unit: React.FC<IUnitProps> = ({ unit, deleteUnit, editUnit }) => {
  const [name, setName] = useState(unit.name);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveUnit = async () => {
    try {
      setLoading(true);
      await editUnit(name, unit._id);
      setIsEditing(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const handleDeleteUnit = async () => {
    try {
      setLoading(true);
      await deleteUnit(unit._id);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      throw err;
    }
  };

  return (
    <li className="unit-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <Button
              title={loading ? 'loading' : 'save'}
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
        <>
          {unit.name}
          <div>
            <Button
              title="edit"
              classes="btn--small"
              handleClick={() => setIsEditing(true)}
            />
            <Button
              title="delete"
              classes="btn--small btn--alert u-ml-s"
              handleClick={handleDeleteUnit}
            />
          </div>
        </>
      )}
    </li>
  );
};

export default Unit;
