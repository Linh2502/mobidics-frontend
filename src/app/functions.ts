import {CheckboxState} from './components/checkbox/checkbox-state.model';
import {subPhases} from './models/constants';

export const updateSelectionArray = (arrayToUpdate: any[], checkBoxState: CheckboxState) => {
  if (checkBoxState.selectionState) {
    arrayToUpdate.push(checkBoxState.value);
  } else {
    arrayToUpdate.splice(arrayToUpdate.indexOf(checkBoxState.value), 1);
  }
};

export const mapSubphaseToPhaseIndex = (subphase: string): number => {
  switch (subphase) {
    case '11':
    case '12':
    case '13':
    case '6':
    case '14':
      return 0;
    case '0':
      return 1;
    case '1':
    case '2':
      return 2;
    case '3':
    case '4':
      return 3;
    case '5':
    case '7':
    case '8':
    case '19':
      return 4;
    case '9':
    case '10':
    case '18':
      return 5;
  }
};

export const singleColonDataToArray = (data: string): string[] => {
  const result: string[] = [];
  data.split(':').forEach(
    (element: string) => result.push(element)
  );
  return result;
};
