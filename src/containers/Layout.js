import React from 'react';
import { Header } from '../components/header';
import { Contact } from '../components/contact';

export const Layout = ({ children }) =>
    <>
        <Header />
        {children}
        <Contact />
    </>
