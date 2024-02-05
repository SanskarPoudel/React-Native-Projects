import React from 'react';
import FlatCards from './components/FlatCards';
import {SafeAreaView, ScrollView} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import Cards3 from './components/Cards3';
import ActionCard from './components/ActionCard';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <Cards3 />
        <Cards3 />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
