import React from 'react';

import { IUnit } from '../../api/unit';
import Unit from './Unit';

interface IUnitListProps {
  units: IUnit[];
  deleteUnit: (id: string) => void;
  editUnit: (newName: string, id: string) => void;
}

const UnitList: React.FC<IUnitListProps> = ({
  units,
  deleteUnit,
  editUnit,
}) => (
  <ul>
    {units.map((unit) => (
      <Unit
        key={unit._id}
        unit={unit}
        deleteUnit={deleteUnit}
        editUnit={editUnit}
      />
    ))}
  </ul>
);

export default UnitList;
