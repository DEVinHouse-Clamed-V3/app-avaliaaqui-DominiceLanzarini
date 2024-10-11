import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Intro from "./src/pages/Intro";
import Avaliacao from "./src/pages/Avaliacao";
import Listagens from "./src/pages/Listagens";
import Test from "./src/pages/Test";


const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Intro">

        <Stack.Screen
          name="Intro"
          component={Intro}
          options={
            {
              header: () => <></>
            }
          }
        />

        <Stack.Screen
          name="Listagens"
          component={Listagens}
          options={
            {
              header: () => <></>
            }
          }
        />

        <Stack.Screen
          name="Avaliacao"
          component={Avaliacao}
          options={
            {
              header: () => <></>
            }
          }
        />


        <Stack.Screen
          name="Test"
          component={Test}
          options={
            {
              header: () => <></>
            }
          }
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
