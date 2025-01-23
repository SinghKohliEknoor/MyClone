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
{/*--- Harkarn ---*/}

});
