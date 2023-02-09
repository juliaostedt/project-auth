import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from 'components/Content';
import LogIn from 'components/LogIn';
import NotFound from 'components/NotFound';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/' element={<Content />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}