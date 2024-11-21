// accordionState.ts (또는 .tsx)
import { createContext, useContext } from 'react';

type State = {
  toggleCollapse: () => void;
};

export const AccordionStateContext = createContext<State | null>(null);

export function useAccordionState(): State {
  const state = useContext(AccordionStateContext);

  if (!state) throw new Error('Not Found useAccordionState');

  return state;
}
