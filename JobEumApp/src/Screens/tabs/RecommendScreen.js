import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const jobData = [
    { id: '1', title: '프론트엔드 개발자', company: '잡이음 주식회사', location: '서울 강남구' },
    { id: '2', title: '백엔드 개발자', company: '이음소프트', location: '부산 해운대구' },
    { id: '3', title: 'AI 연구원', company: 'AIHub Inc.', location: '대전 유성구' },
    { id: '4', title: 'UX 디자이너', company: '디자인팩토리', location: '서울 마포구' },
    { id: '5', title: 'PM', company: 'PMKorea', location: '서울 종로구' },
    { id: '6', title: '데이터 엔지니어', company: '데이터주식회사', location: '서울 송파구' },
    { id: '7', title: 'QA 엔지니어', company: '테스트코리아', location: '서울 구로구' },
    { id: '8', title: '모바일 앱 개발자', company: '모바일팩토리', location: '서울 성동구' },
    { id: '9', title: '시스템 엔지니어', company: '시스템랩', location: '부산 진구' },
    { id: '10', title: '네트워크 엔지니어', company: '네트워크코리아', location: '서울 용산구' },
    { id: '11', title: '보안 전문가', company: '시큐리티랩', location: '서울 강서구' },
];

const RecommendScreen = () => {
    const navigation = useNavigation();

    const handlePress = (job) => {
        navigation.navigate('JobDetailScreen', { job });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.location}>{item.location}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={jobData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
            />
        </View>
    );
};

export default RecommendScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('2%'),
        backgroundColor: '#fff',
    },
    card: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('4%'),
        borderRadius: wp('4%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#ccc",
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        marginVertical: hp('0.5%'),
    },
    title: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
    },
    company: {
        fontSize: wp('4%'),
        color: '#555',
    },
    location: {
        fontSize: wp('3.5%'),
        color: '#777',
    },
});
