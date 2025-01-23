import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image style={styles.logo}
           source={require( './assets/play store.png')}
        />
        <View style={styles.headerIcons}>
        <Image style={styles.notificationBadge} source={require('./assets/bell.png')} />
          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>H</Text>
          </View>
        </View>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabs}>
        <Text style={[styles.tabItem, styles.activeTab]}>For you</Text>
        <Text style={styles.tabItem}>Top charts</Text>
        <Text style={styles.tabItem}>Kids</Text>
        <Text style={styles.tabItem}>Categories</Text>
      </View>

      {/* Content Section */}
      <ScrollView>
        {/* Ad Section */}
        <View style={styles.adSection}>
          <Image
              style={styles.adImage}
              source={ require('./assets/alen.png') }
            />
          <View style={styles.adContent}>
            
            <View style={{ flex: 1 }}>
              <Text style={styles.adTitle}>Celebrate Alan Walker's new album on TikTok</Text>
              <View style={styles.apptiktok}>
                <Image style={styles.appIcon} 
                source={require('./assets/tik tok.png')} />
                <View>
                  <Text style={styles.appTitle}>{'Tiktok'}</Text>
                  <Text style={styles.appCategory}>{'Entertainment'}</Text>
                  <Text style={styles.appRating}>⭐ {'4.3'}</Text>
                </View>
                <TouchableOpacity style={styles.adButton}>
                  <Text style={styles.adButtonText}>Install</Text>
                </TouchableOpacity>
              </View>
            </View>  
          </View>
        </View>

        <Text style={styles.sectionTitle}>Sponsored • Suggested for you</Text>
        <View style={styles.suggestedApps}>
          {[
            {
              name: "Crypto.com - Buy BTC",
              category: "Finance",
              rating: 4.6,
              image: require('./assets/crypto.png'),
            },
            {
              name: "Coinbase: Buy Bitcoin",
              category: "Finance",
              rating: 4.5,
              image: require('./assets/coinbase.png'),
            },
            {
              name: "Lyft",
              category: "Travel & Local",
              rating: 4.3,
              image: require('./assets/lyft.png'),
            },
          ].map((app, index) => (
            <View key={index} style={styles.appItem}>
              <Image style={styles.appIcon} source={app.image } />
              <View>
                <Text style={styles.appTitle}>{app.name}</Text>
                <Text style={styles.appCategory}>{app.category}</Text>
                <Text style={styles.appRating}>⭐ {app.rating}</Text>
              </View>
            </View>
          ))}
        </View>
       
      </ScrollView>
      <View>
        <TouchableOpacity onPress={()=>{alert("Alert Button pressed")}}>
          <Text style={styles.buttonstyle}>Alert</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Games</Text>
        <Text style={[styles.navItem, styles.activeNav]}>Apps</Text>
        <Text style={styles.navItem}>Search</Text>
        <Text style={styles.navItem}>Books</Text>
      </View>
      
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop:15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationBadge: {
    height:24,
    width:18,
    borderRadius: 10,
    marginRight: 10,
    textAlign: "center",
  },
  profileCircle: {
    backgroundColor: "orange",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontSize: 12,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  tabItem: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
  },
  activeTab: {
    color: "blue",
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  adSection: {
    padding: 15,
    backgroundColor: "white",
  },
  adContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  adTitle: {
    flex: 1,
    color: "black",
    fontSize: 18,
    marginBottom: 10,
  },
  adImage: {
    width: 330,
    height: 110,
    marginRight: 10,
    borderRadius: 5,
  },
  adButton: {
    backgroundColor: "slategrey",
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginLeft:80,
  },
  adButtonText: {
    color: "white",
    fontSize:15,
  },
  sectionTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  suggestedApps: {
    paddingHorizontal: 15,
  },
  appItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  apptiktok: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  appIcon: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  appTitle: {
    color: "black",
    fontSize: 14,
  },
  appCategory: {
    color: "black",
    fontSize: 12,
  },
  appRating: {
    color: "black",
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  navItem: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
  },
  activeNav: {

    color: "blue",
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  buttonstyle: {
    alignItems:'center',
    marginLeft:135,
    textAlign:'center',
    padding: 10,
    width: 80,
    color: 'white',
    backgroundColor: 'red',
    borderRadius:14,
  },
});
