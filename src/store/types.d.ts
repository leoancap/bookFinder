import IFilterActions from './filters/types';
import IBooksActions from './books/types';
import rootReducer from './rootReducer';

export type IAppState = ReturnType<typeof rootReducer>;
export type IAppActions = IBooksActions | IFilterActions;
