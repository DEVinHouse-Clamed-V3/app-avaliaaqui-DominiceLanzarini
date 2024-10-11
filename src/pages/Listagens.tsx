import { useFocusEffect, useNavigation } from "@react-navigation/native"
import Axios from "axios"
import { useCallback, useState } from "react"
import { Alert, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"


interface Product {
    id: number
    name: string
    price: string
    brand: string
    description: string
    image: string
}

export default function Listagem({ navigation }) {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Product[]>([])

    const navigateToForm = (productId) => {
        navigation.navigate('Avaliacao', { productId }); // Navega para a tela de avaliação com o ID como parâmetro
    };

    useFocusEffect(
        useCallback(() => {

            setLoading(true)
            Axios
                .get(process.env.API_IP + '/products')
                .then((response: any) => {

                    setLoading(false)
                    setProducts(response.data)

                })
                .catch(() => {
                    Alert.alert("Não foi possivel obter a lista de itens.")
                })

        }, [])
    )



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                ListEmptyComponent={() => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            loading ? (
                                <>
                                    <Text>Carregando ...</Text>
                                </>

                            ) : <Text>Não existem itens</Text>
                        }
                    </View>
                )}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.item}>

                        <View>
                            <Image source={{ uri: item.image, width: 50, height: 50 }} />
                        </View>

                        <View style={styles.itens}>
                            <Text style={styles.itemText}>Produto {item.id}</Text>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>Marca: {item.brand}</Text>
                            <Text style={styles.itemText}>Descrição: {item.description}</Text>
                            <Text style={styles.itemText}>{item.price}</Text>
                            <Button title='Avaliar' onPress={() => navigateToForm(item.id)} />
                        </View>



                    </View>
                )}
                //keyExtractor={(item) => item.id}
                numColumns={1}
                contentContainerStyle={{
                    padding: 10,
                    paddingBottom: 50,
                    gap: 20,
                }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#0a4e8e',
        borderWidth: 1,
        flexDirection: 'row'
    },
    itens: {
        width: '60%',
        margin: 30
    },
    itemText: {
        fontWeight: 'bold',
        color: '#09447b',
        gap: 3
    }

})