import React from 'react';
import MainLayout from '../layout/MainLayout';
import CardList from './CardList/CardList';

export default function App() {
  return (
    <>
      <MainLayout
        titulo="Página actual"
      >
        <CardList />
      </MainLayout>
    </>
  );
}