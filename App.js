
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './src/assets/IMG_20181025_141552.jpg';
import Card from './src/components/Cards/Index'


const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social) {
      case 'linkedin' :
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/rafael-de-souza-freire-96a94171/')
      break
      case 'github' :
        Alert.alert('Meu github','https://github.com/rsouzaf07')
      break
      case 'twitter' :
        Alert.alert('Meu Twitter','https://twitter.com/R_Souza07')
      break
    }
  }

  return (
    <>
      <ScrollView>

      
        <View style={style.page}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto} />
            <Text style={style.nome}>RAFAEL DE SOUZA FREIRE</Text>
            <Text style={style.funcao}>Desenvolvedor Jr Web e Mobile</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress ={() => handleRedeSocial('github')}>
                <Icon name="github" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress ={() => handleRedeSocial('linkedin')}>
                <Icon name="linkedin" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress ={() => handleRedeSocial('twitter')}>
                <Icon name="twitter" size={30}/>
              </TouchableOpacity>
            </View>
          </View>
          <Card titulo='Experiências Profissionais'>
            <Text style={style.titulo}>Inspevei - Inspeção de veículos automotores LTDA</Text>
            <Text>08/2017 - Atual</Text>
            <Text>Inspeção veículos movidos a GNV, recuperados de sinistro ou blindados. Seguindo todos os normativos do Inmetro e CONAMA.</Text>
            <Text style={style.titulo}>Imetame Metalmecânica LTDA</Text>
            <Text>08/2014 - 02/2015</Text>
            <Text>Auxiliar Caldeireios, encanadores e soldadores em suas respectivas funções.</Text>    
          </Card>
          <Card titulo='Formação Acadêmica'>
            <Text style={style.titulo}>Ensino médio técnico - Sesi/Senai</Text>
            <Text> Conclusão: 2014</Text>
            <Text>Técnico em mecânica industrial</Text>
            <Text style={style.titulo}>Engenharia Mecânica - Estácio</Text>
            <Text>Conclusão: 2023</Text>
            <Text style={style.titulo}>Bootcamp Eduzz Fullstack Developer #3 </Text>
            <Text style={style.titulo}>Bootcamp Take Blip Web Developer  </Text>
            <Text style={style.titulo}>Bootcamp Impulso Fullstack Web Developer </Text>
            <Text>Conclusão: 2022</Text>
          </Card>
          <Card titulo='Principais Habilidades'>
            <Text style={style.titulo}>- Leitura de instrumentos de medição</Text>
            <Text style={style.titulo}>- SolidWotks</Text>
            <Text style={style.titulo}>- Manutenção de Motores</Text>
            <Text style={style.titulo}>- AutoCad</Text>
            <Text style={style.titulo}>- JavaScript</Text>
            <Text style={style.titulo}>- CSS</Text>
            <Text style={style.titulo}>- React, React Native</Text>
            <Text style={style.titulo}>- MySQl e MongoDB</Text>
          </Card>
        </View>
      </ScrollView>
    </>
 
 
  );
};

  const style = StyleSheet.create({
    page: {
      backgroundColor: '#E7E7E7',
      flex:1,
      marginBottom: 20,
    },
    foto: {
      width: 200,
      height: 200,
      borderRadius: 125
    },
    container_cabecalho: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    },
    nome: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    funcao: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#939393',
    },
    redes_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '40%',
      marginTop: 10,
    }, titulo: {
      fontWeight: 'bold', 
      marginLeft: -10,
    }
  });

export default App;