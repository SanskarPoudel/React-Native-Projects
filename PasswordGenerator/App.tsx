import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

// Define the password schema for validation
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Length is required')
    .min(1, 'Minimum of 1 characters')
    .max(16, 'Maximum of 16 characters')
    .integer('Length must be an integer'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  // Correct state setter names
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const generatePasswordString = passwordLength => {
    let characters = '';

    if (lowerCase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (upperCase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (numbers) {
      characters += '0123456789';
    }

    if (specialChars) {
      characters += '!@#$%^&*()_+';
    }

    setPassword(createPassword(characters, passwordLength));
    setIsPassGenerated(true);
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSpecialChars(false);
  };

  const initialValues = {
    passwordLength: '',
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Password Generator</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={PasswordSchema}
          onSubmit={values =>
            generatePasswordString(Number(values.passwordLength))
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('passwordLength')}
                onBlur={handleBlur('passwordLength')}
                value={values.passwordLength}
                keyboardType="numeric"
                placeholder="Password Length"
              />
              {errors.passwordLength && touched.passwordLength ? (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              ) : null}

              {/* Correct Switch value props */}
              <View style={styles.switchRow}>
                <Text>Include Uppercase Letters</Text>
                <Switch value={upperCase} onValueChange={setUpperCase} />
              </View>

              <View style={styles.switchRow}>
                <Text>Include Lowercase Letters</Text>
                <Switch value={lowerCase} onValueChange={setLowerCase} />
              </View>

              <View style={styles.switchRow}>
                <Text>Include Numbers</Text>
                <Switch value={numbers} onValueChange={setNumbers} />
              </View>

              <View style={styles.switchRow}>
                <Text>Include Special Characters</Text>
                <Switch value={specialChars} onValueChange={setSpecialChars} />
              </View>
              <View style={styles.submitButton}>
                <Button
                  onPress={handleSubmit}
                  title="Generate Password"
                  color="#0066cc"
                />
              </View>
              {isPassGenerated && (
                <Text style={styles.generatedPassword}>{password}</Text>
              )}
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    borderRadius: 40,
  },
  generatedPassword: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default App;
