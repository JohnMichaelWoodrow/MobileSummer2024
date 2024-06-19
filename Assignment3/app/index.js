import React from 'react';
import { registerRootComponent } from 'expo';
import HomeLayout from './layout'; // Correct import path

const App = () => <HomeLayout />;

registerRootComponent(App); // Ensure this registers the main component
