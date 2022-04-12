/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    FlatList,
    ScrollView,
} from 'react-native';

import Hearder from '../../Components/hearder_info'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { List } from 'semantic-ui-react'
export default function App({ navigation }) {
    const value1 = [
        "As of Mar. 21, 2020, Vietnam will temporarily suspend visa exemptions for citizens from Belarus, Russia, and Japan."
        , 'Starting Mar. 8, 2020 Vietnam has temporarily suspended visa exemptions for citizens of the European Union, the United Kingdom, and as well as other countries with more than 500 cases or grow more than 50 cases a day.'
        , 'As of Feb. 29, 2020 visa exemptions for South Koreans will be temporarily suspended until further notice, and as of Mar. 2, 2020 visa exemptions for Italians will also be temporarily suspended.'
        , 'The exemptions listed above for Sweden, Norway, Denmark, Belarus, Finland, Japan, South Korea, and Russia are valid until Dec. 31, 2022.'
        , 'The exemptions listed above for the United Kingdom, France, Germany, Spain, and Italy are valid until June 30, 2021.'
        , 'Spouses or children of Vietnamese citizens are allowed to stay in the country without a visa for six months and must show papers proving their eligibility. For full requirements, please visit  this link.'
    ]
    const value2 = [
        "A 4x6 passport photo with a white background and no glasses"
        , 'A filled-out visa application form'
        , 'A passport or substitute ID valid for six months from the date you plan to enter Vietnam'
        , 'Payment (25 USD to 50 USD) for visa fees, and'
        , 'A Letter of Approval from a Vietnamese embassy or consulate (if you are picking up your visa at the airport)'
    ]
    const value3 = [
        'One 4x6 passport photo in .jpg format with a white background, without glasses'
        , 'One photo in .jpg format of your passport data page'
        , 'Passport valid for at least six months'
        , 'Your temporary address in Vietnam and points of entry and exit'
        , 'Debit or credit card for payment '
    ]

    const Item1 = ({ text }) => (
        <Text style={styles.text}>• {text}</Text>
    );
    const renderItem1 = ({ item }) => (
        <Item1 text={item} />
    );
    const Item2 = ({ text, index }) => (
        <Text style={styles.text}>{index + 1}. {text}</Text>
    );
    const renderItem2 = ({ item }) => (
        <Item2 text={item} index={value2.indexOf(item)} />
    );
    return (
        <ScrollView style={styles.full}>
            <Hearder name={'VISA'} dec={'Vietnam offers visa exemptions to travellers from 24 countries, and e-Visas to travellers from 80 countries. Travellers can also easily apply for a visa on arrival online or in person at a Vietnamese embassy or consulate. Below is all the information you need on visas for Vietnam. '} />
            <View style={styles.view}>
                <Text style={[styles.text, styles.title]}>Vietnam Visa Exemptions</Text>
                <Text style={styles.text}>Vietnam offers visa exemptions ranging from 14 to 90 days to citizens of 24 countries holding valid ordinary passports. The full list of countries with visa exemptions is below. To view visa exemptions for diplomatic and other passports, please visit  <Text style={[styles.text, styles.link]}>this link.</Text> </Text>
                <Text style={[styles.text, styles.title]}>Notes on visa exemptions:</Text>
                <FlatList
                    numColumns={1}
                    data={value1}
                    renderItem={renderItem1}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />

                <View style={styles.line} />
                <Text style={[styles.text, styles.title]}>Vietnam Visa on Arrival</Text>
                <Text style={styles.text}>If you are planning a multiple-entry visit or a stay of more than 30 days, you will want to apply for a visa on arrival. To do this you'll need:</Text>
                <FlatList
                    numColumns={1}
                    data={value2}
                    renderItem={renderItem2}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <Text style={styles.text}>If you are near a Vietnamese embassy or consulate, you can submit your photo, application form, passport, and visa fee in person. This website will guide you through the process. </Text>
                <Text style={styles.text}>If you are unable to reach a Vietnamese embassy, or are short on time, there are trusted services online who can provide you a valid Letter of Approval for a fee. Bring this letter and together with a visa application form and your other documents to the Visa on Arrival counter at the airport when you land. </Text>
                <View style={styles.line} />
                <Text style={[styles.text, styles.title]}>Vietnam Electronic Visa (e-Visa) </Text>
                <Text style={styles._text}>Vietnam's e-Visa is now available to nationals of 80 countries: </Text>
                <Text style={styles.dec}>Andorra, Argentina, Armenia, Australia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei, Bulgaria, Canada, Colombia, Croatia, Cuba, Cyprus, Czech Republic, Chile, China (including Hong Kong and Macau passports), Denmark, Estonia, Fiji, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, India, Ireland, Italy, Japan, Kazakhstan, Latvia, Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta, Marshall Islands, Mexico, Micronesia, Moldova, Monaco, Montenegro, Mongolia, Myanmar, Nauru, Netherlands, New Zealand, Norway, Palau, Panama, Papua New Guinea, Peru, Poland, Portugal, Philippines, Qatar, Romania, Russia, Salomon Islands, San Marino, Serbia, Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland, Timor Leste, United Arab Emirates, United Kingdom, United States of America, Uruguay, Vanuatu, Venezuela, and Western Samoa.</Text>
                <Text style={styles.text}>Click here for a full guide on how to apply for Vietnam's e-Visa.</Text>
                <Text style={styles.text}>The e-Visa takes three working days to process, costs 25 USD, and is a single-entry visa, valid for 30 days. You can enter Vietnam on an e-Visa at any of the country's eight international airports, including Hanoi, Ho Chi Minh City and Danang, as well as 14 land crossings and seven seaports. </Text>
                <View style={styles.line} />
                <Text style={[styles.text, styles.title]}>How to Apply for Vietnam's e-Visa:</Text>
                <Text style={styles.text}>Step 1: Prepare the required materials: </Text>
                <FlatList
                    numColumns={1}
                    data={value3}
                    renderItem={renderItem1}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <Text style={styles.text}>Step 2: Click this link or access www.immigration.gov.vn and go to 'E-visa Issuance' then click on the link for 'Outside Vietnam foreigners'.   </Text>
                <Text style={styles.text}>Step 3: Upload your .jpg images (passport data page and passport photo) and fill out the required fields on the form completely. Submit your form. </Text>
                <Text style={styles.text}>Step 4: Pay the e-Visa fee of 25 USD. Copy down the document code provided. </Text>
                <Text style={styles.text}>Step 5: Within three working days you should receive news of your e-Visa application via email. If not, you can also run a search for your e-Visa at this link. </Text>
                <Text style={styles.text}>Step 6: Use your document code to locate your e-Visa online. Download and print the e-Visa in two copies for extra safety. </Text>

            </View>
        </ScrollView>
    );
}







