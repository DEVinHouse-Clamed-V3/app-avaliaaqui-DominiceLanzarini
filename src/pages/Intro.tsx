import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Alert, Image } from 'react-native'
import { useState } from 'react'
import { globalStyles } from '../global/styles'

export default function Login({ navigation }: any) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showLogin, setShowLogin] = useState(false)

    function handleLogin() {
        if (email === "avaliaaqui@gmail.com" && password === "123456") {
            navigation.navigate("Listagens")
        } else {
            Alert.alert("Usuário não encontrado")
        }
    }


    return (

        <SafeAreaView style={styles.container}>


            <View style={styles.imgSection}>

                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages7.kabum.com.br%2Fprodutos%2Ffotos%2F471917%2Fmonitor-gamer-kbm-gaming-mg700-27-led-full-hd-240hz-1ms-hdmi-e-displayport-96-srgb-adaptive-sync-ajuste-de-altura-kgmg70027pt_1704462104_g.jpg&w=640&q=100' }}
                />
                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages7.kabum.com.br%2Fprodutos%2Ffotos%2F104667%2Fheadset-gamer-razer-kraken-x-lite-p2_headset-gamer-razer-kraken-x-lite-p2_1569864643_g.jpg&w=640&q=100' }}
                />
                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages1.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F373501%2FCadeira-De-Escrit-rio-Presidente-Webshop-Ergon-mica-Rosa_1724186308_g.jpg&w=640&q=100' }}
                />

            </View>

            <View style={styles.texts}>

                <Text style={styles.welcomeText}>Avalie Aqui!</Text>
                <Text style={styles.text}>Escolha o produto que deseja avaliar e compartilhe sua experiência com outros cosumidores.</Text>

            </View>
            
            {!showLogin && (
                <>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {
                            setShowLogin(true)
                        }}>
                            <Text style={styles.loginButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                </>
            )}




            {
                showLogin && (

                    <View style={styles.loginSection}>

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#1074d2" // Azul claro para o placeholder
                            style={globalStyles.input}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#1074d2" // Azul claro para o placeholder
                            style={globalStyles.input}
                            secureTextEntry={showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text>Exibir senha</Text>
                        </TouchableOpacity>


                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                                <Text style={styles.loginButtonText}>Logar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.loginButton} onPress={() => {
                                setShowLogin(false)
                            }}>
                                <Text style={styles.loginButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )
            }




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // branco
    },
    imgSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100
    },
    texts: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#09447b', // Texto azul escurão
        marginBottom: 40
    },
    text: {
        fontSize: 18,
        color: '#1074d2', // Texto azul
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        marginTop: 20
    },
    loginButton: {
        backgroundColor: '#99ccf7', // Botão azul clarinho
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: 100
    },
    loginButtonText: {
        color: '#0a4e8e', // Texto azul escuro  no botão
        fontWeight: 'bold',
        fontSize: 16,

    },
    loginSection: {
        flex: 2,
        backgroundColor: '#babac4', // Fundo cinza claro
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    passwordRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    forgotPassword: {
        color: '#0a4e8e',
        textDecorationLine: 'underline',
    },
    orText: {
        textAlign: 'center',
        color: '#0a4e8e',
        marginBottom: 20,
    },
    signUpButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0a4e8e',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    signUpButtonText: {
        color: '#0a4e8e',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
