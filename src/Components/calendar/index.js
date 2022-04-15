/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import { styles } from './styles';
import Drop_down from '../../Icons/drop_down'
import Goback from '../../Icons/prev'
import Goto from '../../Icons/next'
import { Colors } from '../../Utils/Color';
import { createStore } from 'redux';
export default function App({ name, type }) {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
    return (
        <View style={styles.Frame}>
            <View style={styles.header}>
                <Text style={styles.month_year}>{MONTHS[month]} - {year}</Text>
                <View style={styles.Drop_down_icon}>
                    <Drop_down />
                </View>
                <View style={styles.prev_next}>
                    <TouchableOpacity style={styles.icon} onPress={() => setDate(new Date(year, month - 1, day))}>
                        <Goback />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => setDate(new Date(year, month + 1, day))}>
                        <Goto />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.Day}>
                    {DAYS_OF_THE_WEEK.map(d => (
                        DAYS_OF_THE_WEEK.indexOf(d) === 0 || DAYS_OF_THE_WEEK.indexOf(d) === DAYS_OF_THE_WEEK.length - 1 ?
                            <Text style={styles.text_weekend}>{d}</Text> : <Text style={styles.text_day}>{d}</Text>
                    ))}
                </View>
                <View style={styles.view_day}>
                    {Array(days[month] + (startDay - 1))
                        .fill(null)
                        .map((_, index) => {
                            var month_befor = days[month - 1]
                            var d = index - (startDay - 1);
                            var bd = d + month_befor
                            var ad = 1
                            return (
                                <>
                                    {d <= 0 ? <Text style={styles.item_bday}>{bd}</Text> : <Text style={styles.item_day}>{d}</Text>}
                                    
                                </>
                            );
                        })}
                </View>
            </View>
        </View>
    )

}