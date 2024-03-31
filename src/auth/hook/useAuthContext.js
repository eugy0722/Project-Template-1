import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

function useAuthContext() {
  const useAuthContext = useContext(AuthContext);
  if (useAuthContext === undefined) {
    throw new Error("It's out side the context");
  }
  return useAuthContext;
}

export default useAuthContext;
