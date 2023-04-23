import React, { useState } from 'react';
import Button from "./src/components/Button";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import calculator, { initialState } from './src/util/calculator';
import Row from './src/components/Row';

export default function App() {
  const [state, setState] = useState(initialState);
  handleTap = (type, value) => {
    setState((state) => calculator(type, value, state));
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>

        <Row >
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")} />

          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />

          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />

          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => handleTap("number", 0)} />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button
            text="="
            theme="primary"
            onPress={() => handleTap("equal", "=")}
          />
        </Row>

      </SafeAreaView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 42,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10
  }
});
