import React from 'react';
import { ScrollView, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const cardCommon = {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: wp('4%'),
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
};

const HomeScreen = () => {
    const navigation = useNavigation();

    const jobData = [
        { id: '1', title: '프론트엔드 개발자', company: '잡이음 주식회사', location: '서울 강남구', isAiRecommended: true },
        { id: '2', title: '백엔드 개발자', company: '이음소프트', location: '부산 해운대구', isAiRecommended: true },
        { id: '3', title: 'AI 연구원', company: 'AIHub Inc.', location: '대전 유성구', isAiRecommended: true },
        { id: '12', title: '머신러닝 엔지니어', company: '딥러닝랩', location: '서울 서초구', isAiRecommended: true },
        { id: '13', title: '데이터 사이언티스트', company: '데이터마인드', location: '경기 성남시', isAiRecommended: true },
        { id: '14', title: 'AI 솔루션 개발자', company: '인텔리전스코', location: '서울 송파구', isAiRecommended: true },
        { id: '4', title: 'UX 디자이너', company: '디자인팩토리', location: '서울 마포구', isAiRecommended: false },
        { id: '5', title: 'PM', company: 'PMKorea', location: '서울 종로구', isAiRecommended: false },
        { id: '6', title: '데이터 엔지니어', company: '데이터주식회사', location: '서울 송파구', isAiRecommended: false },
        { id: '7', title: 'QA 엔지니어', company: '테스트코리아', location: '서울 구로구', isAiRecommended: false },
        { id: '8', title: '모바일 앱 개발자', company: '모바일팩토리', location: '서울 성동구', isAiRecommended: false },
        { id: '9', title: '시스템 엔지니어', company: '시스템랩', location: '부산 진구', isAiRecommended: false },
        { id: '10', title: '네트워크 엔지니어', company: '네트워크코리아', location: '서울 용산구', isAiRecommended: false },
        { id: '11', title: '보안 전문가', company: '시큐리티랩', location: '서울 강서구', isAiRecommended: false },
        { id: '15', title: '웹 퍼블리셔', company: '웹솔루션즈', location: '부산 해운대구', isAiRecommended: false },
        { id: '16', title: 'IT 컨설턴트', company: '컨설트코리아', location: '대구 중구', isAiRecommended: false },
        { id: '17', title: '시스템 관리자', company: '시스템넷', location: '광주 북구', isAiRecommended: false },
        { id: '18', title: '클라우드 엔지니어', company: '클라우드랩', location: '서울 강남구', isAiRecommended: false },
    ];

    const aiRecommendedJobs = jobData.filter(job => job.isAiRecommended);
    const generalJobs = jobData.filter(job => !job.isAiRecommended);

    const handlePress = (job) => {
        navigation.navigate('JobDetailScreen', { job });
    };

    const renderAiJobCard = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.aiCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.location}>{item.location}</Text>
        </TouchableOpacity>
    );

    const renderGeneralJobCard = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.generalCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.location}>{item.location}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>AI 추천 채용 공고</Text>
            <FlatList
                data={aiRecommendedJobs}
                renderItem={renderAiJobCard}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: hp('3%') }}
            />

            <Text style={styles.sectionTitle}>맞춤 채용 공고</Text>
            <FlatList
                data={generalJobs}
                renderItem={renderGeneralJobCard}
                keyExtractor={(item) => item.id}
                numColumns={1}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        paddingTop: hp('3%'),
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: wp('5.5%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%'),
    },
    aiCard: {
        minWidth: wp('50%'),
        minHeight: hp('20%'),
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('3%'),
        marginRight: wp('4%'),
        ...cardCommon,
    },
    generalCard: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('4%'),
        marginVertical: hp('0.5%'),
        ...cardCommon,
    },
    title: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
    },
    company: {
        fontSize: wp('4%'),
        color: '#555',
        marginTop: hp('0.5%'),
    },
    location: {
        fontSize: wp('3.5%'),
        color: '#777',
        marginTop: hp('0.2%'),
    },
});
