import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements'

interface AvaliacaoProps {
    navigation: NavigationProp<any>
    route: any
}

const Avaliacao = ({ navigation, route }: AvaliacaoProps) => {
  const { productId } = route.params;


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [experience, setExperience] = useState(null);
  const [recommend, setRecommend] = useState(false);

  
  const handleSubmit = async () => {
    if (!name || !email || !feedback || !experience) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const evaluationData = {
      id: Math.floor(Math.random() * 1000), 
      productId: productId,
      name: name,
      email: email,
      feedback: feedback,
      experience: experience,
      recommend: recommend,
    };

    try {
      const response = await fetch('http://192.168.1.153:3000/evaluations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(evaluationData),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Avaliação enviada com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'Houve um erro ao enviar sua avaliação.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Nos dê seu Feedback</Text>
      <Text style={styles.subtitle}>
        Sua opinião é importante para nós. Por favor, compartilhe sua experiência.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva sua experiência..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Text style={styles.sectionTitle}>Compartilhe sua experiência</Text>

      <View style={styles.ratingContainer}>
        {['Feliz', 'Bom', 'Médio', 'Ruim'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.ratingButton,
              experience === option && styles.selectedButton,
            ]}
            onPress={() => setExperience(option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title='Recomendaria para outras pessoas?'
          checked={recommend}
          onPress={() => setRecommend(!recommend)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    color: '#999',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  ratingButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  selectedButton: {
    backgroundColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Avaliacao;
