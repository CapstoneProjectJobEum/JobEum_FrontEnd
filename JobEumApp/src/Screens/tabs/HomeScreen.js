import React from 'react';
import { ScrollView, View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = () => {
    const navigation = useNavigation();

    const jobData = [
        {
            id: '1',
            title: '프론트엔드 개발자',
            company: '잡이음 주식회사',
            location: '서울 강남구',
            deadline: '2025-06-30',
            career: '신입/경력',
            education: '학력무관',
            isAiRecommended: true,
        },
        {
            id: '2',
            title: '백엔드 개발자',
            company: '이음소프트',
            location: '부산 해운대구',
            deadline: '2025-07-10',
            career: '경력 2년 이상',
            education: '학력무관',
            isAiRecommended: true,
        },
        {
            id: '3',
            title: 'AI 연구원',
            company: 'AIHub Inc.',
            location: '대전 유성구',
            deadline: '2025-06-20',
            career: '박사 우대',
            education: '학력무관',
        },
        {
            id: '4',
            title: 'UX 디자이너',
            company: '디자인팩토리',
            location: '서울 마포구',
            deadline: '2025-07-01',
            career: '신입 가능',
            education: '학력무관',
        },
        {
            id: '5',
            title: '프로덕트 매니저(PM)',
            company: 'PMKorea',
            location: '서울 종로구',
            deadline: '2025-06-25',
            career: '경력 3년 이상',
            education: '학력무관',
        },
        {
            id: '6',
            title: '데이터 엔지니어',
            company: '데이터주식회사',
            location: '서울 송파구',
            deadline: '2025-07-15',
            career: '신입/경력',
            education: '학력무관',
        },
        {
            id: '7',
            title: 'QA 엔지니어',
            company: '테스트코리아',
            location: '서울 구로구',
            deadline: '2025-07-05',
            career: '경력 1년 이상',
            education: '학력무관',
        },
        {
            id: '8',
            title: '모바일 앱 개발자',
            company: '모바일팩토리',
            location: '서울 성동구',
            deadline: '2025-06-28',
            career: '신입 가능',
            education: '학력무관',
        },
        {
            id: '9',
            title: '시스템 엔지니어',
            company: '시스템랩',
            location: '부산 진구',
            deadline: '2025-07-03',
            career: '경력 5년 이상',
            education: '학력무관',
        },
        {
            id: '10',
            title: '정보보안 전문가',
            company: '시큐리티랩',
            location: '서울 강서구',
            deadline: '2025-06-27',
            career: '경력 2년 이상',
            education: '학력무관',
        },
    ];

    const aiRecommendedJobs = jobData.filter(job => job.isAiRecommended);
    const generalJobs = jobData.filter(job => !job.isAiRecommended);

    const handlePress = (job) => {
        navigation.navigate('JobDetailScreen', { job });
    };

    const renderAiJobCard = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.aiCard}>
            <View style={styles.aiCardContent}>
                <Text style={styles.company}>{item.company}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.infoText}>{item.career}</Text>
                <Text style={styles.infoText}>{item.education}</Text>
                <Text style={styles.deadline}>마감: {item.deadline}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderGeneralJobCard = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.generalCard}>
            <View style={styles.cardContent}>
                <View style={styles.header}>
                    <View style={styles.companyLocation}>
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                    </View>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.infoText}>마감: {item.deadline}</Text>
                    <Text style={styles.infoText}>{item.career}</Text>
                    <Text style={styles.infoText}>{item.education}</Text>
                </View>
            </View>
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
        paddingVertical: hp('2%'),
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: wp('5.5%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%'),
    },
    aiCard: {
        width: wp('50%'),
        height: wp('40'), // 정사각형
        backgroundColor: '#fff',
        borderRadius: wp('4%'),
        borderWidth: 1,
        borderColor: '#ddd',
        padding: wp('4%'),
        marginRight: wp('4%'),
        marginVertical: hp('0.8%'),
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    generalCard: {
        backgroundColor: '#fff',
        borderRadius: wp('4%'),
        borderWidth: 1,
        borderColor: '#ddd',
        padding: wp('4%'),
        marginVertical: hp('0.8%'),
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('0.5%'),
    },
    companyLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('2%'),
    },
    company: {
        fontSize: wp('4%'),
        color: '#333',
    },
    location: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    title: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp('2%'),
    },
    infoText: {
        fontSize: wp('3.5%'),
        color: '#666',
        marginRight: wp('3%'),
        marginBottom: hp('0.5%'),
    },
    starButton: {
        padding: wp('1%'),
    },
});
