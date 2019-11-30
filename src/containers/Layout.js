import React from 'react';
import { Header } from '../components/Header';
import { Contact } from '../components/Contact';

export const Layout = ({ children }) =>
    <>
        <Header />
        {children}
        <Contact />
    </>
