import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import COLORS from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const disabilityTypesList = [
    '시각 장애', '청각 장애', '지체 장애', '뇌병변 장애',
    '정신 장애', '지적 장애', '언어 장애', '자폐성 장애',
    '심장 장애', '신장 장애', '호흡기 장애', '간 장애',
    '안면 장애', '장루/요루 장애', '간질 장애', '기타'
];

const assistiveDevicesList = [
    '휠체어 사용', '보청기 사용', '점자 사용', '지팡이 사용', '보조공학기기 사용'
];

const jobInterestList = [
    '사무보조', '디자인', 'IT/프로그래밍', '제조/생산',
    '상담/고객 응대', '번역/통역', '교육/강의', '마케팅/홍보', '기타'
];

const disabilityGrades = ['심한 장애', '심하지 않은 장애', '정보 없음'];

const workTypesList = [
    '재택근무 가능', '사무실 출근 가능', '파트타임 선호', '풀타임 선호', '시간제 가능'
];

const PersonalInfoForm = () => {
    const [disabilityTypes, setDisabilityTypes] = useState([]);
    const [disabilityGrade, setDisabilityGrade] = useState('');
    const [assistiveDevices, setAssistiveDevices] = useState([]);
    const [preferredWorkType, setPreferredWorkType] = useState([]);
    const [jobInterest, setJobInterest] = useState([]);

    const toggleCheckbox = (item, stateSetter, stateArray) => {
        if (stateArray.includes(item)) {
            stateSetter(stateArray.filter(i => i !== item));
        } else {
            stateSetter([...stateArray, item]);
        }
    };

    const submitForm = async () => {
        const data = {
            disabilityTypes,
            disabilityGrade,
            assistiveDevices,
            preferredWorkType,
            jobInterest
        };


        try {
            const res = await axios.post('https://your-backend-api.com/api/user-profile', data);
            console.log('전송 성공:', res.data);
        } catch (error) {
            console.error('전송 실패:', error);
        }
    };

    const renderCheckboxList = (list, stateArray, setState) => {
        return list.map((item, idx) => {
            const selected = stateArray.includes(item);
            return (
                <TouchableOpacity
                    key={idx}
                    style={[styles.checkboxContainer, selected && styles.checkboxSelected]}
                    onPress={() => toggleCheckbox(item, setState, stateArray)}
                    activeOpacity={0.7}
                >
                    <Checkbox
                        value={selected}
                        onValueChange={() => toggleCheckbox(item, setState, stateArray)}
                        color={selected ? '#4a90e2' : undefined}
                        style={styles.checkbox}
                    />
                    <Text style={[styles.checkboxLabel, selected && styles.checkboxLabelSelected]}>{item}</Text>
                </TouchableOpacity>
            );
        });
    };

    const renderRadioList = (list, selectedItem, setSelectedItem) => {
        return list.map((item, idx) => {
            const selected = selectedItem === item;
            return (
                <TouchableOpacity
                    key={idx}
                    style={[styles.checkboxContainer, selected && styles.checkboxSelected]}
                    onPress={() => setSelectedItem(item)}
                    activeOpacity={0.7}
                >
                    <Checkbox
                        value={selected}
                        onValueChange={() => setSelectedItem(item)}
                        color={selected ? '#4a90e2' : undefined}
                        style={styles.checkbox}
                    />
                    <Text style={[styles.checkboxLabel, selected && styles.checkboxLabelSelected]}>{item}</Text>
                </TouchableOpacity>
            );
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>장애 유형</Text>
            <View style={styles.checkboxGroup}>
                {renderCheckboxList(disabilityTypesList, disabilityTypes, setDisabilityTypes)}
            </View>

            <Text style={styles.sectionTitle}>장애 등급 (하나만 선택)</Text>
            <View style={styles.checkboxGroup}>
                {renderRadioList(disabilityGrades, disabilityGrade, setDisabilityGrade)}
            </View>

            <Text style={styles.sectionTitle}>보조기기 사용 여부</Text>
            <View style={styles.checkboxGroup}>
                {renderCheckboxList(assistiveDevicesList, assistiveDevices, setAssistiveDevices)}
            </View>

            <Text style={styles.sectionTitle}>근무 가능 형태</Text>
            <View style={styles.checkboxGroup}>
                {renderCheckboxList(workTypesList, preferredWorkType, setPreferredWorkType)}
            </View>

            <Text style={styles.sectionTitle}>희망 직무 분야</Text>
            <View style={styles.checkboxGroup}>
                {renderCheckboxList(jobInterestList, jobInterest, setJobInterest)}
            </View>

            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={submitForm}
                >
                    <Text style={styles.btnfont}>
                        수정하기
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
        marginTop: 20,
        color: 'black',
    },
    checkboxGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fafafa',
    },
    checkboxSelected: {
        borderColor: COLORS.THEMECOLOR,
        // backgroundColor: '#e6f0ff',
        // shadowColor: COLORS.THEMECOLOR,
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.6,
        // shadowRadius: 2,
        // elevation: 3,
    },
    checkbox: {
        opacity: 0,
        position: 'absolute',
        width: 0,
        height: 0,
        marginLeft: -15,
    },
    checkboxLabel: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    checkboxLabelSelected: {
        color: COLORS.THEMECOLOR,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: COLORS.THEMECOLOR,
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    btnfont: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default PersonalInfoForm;
