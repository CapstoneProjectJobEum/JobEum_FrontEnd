import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const JobDetailScreen = ({ route }) => {
    const { job } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>{job.title}</Text>
                <Text style={styles.company}>{job.company}</Text>

                {/* 이미지 */}
                <Image source={{ uri: job.image }} style={styles.image} />

                {/* 조건 요약 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>채용 조건 요약</Text>
                    <Text style={styles.text}>{job.summary}</Text>
                </View>

                {/* 소개글 및 채용 글 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>채용 상세 내용</Text>
                    <Text style={styles.text}>{job.description}</Text>
                </View>
            </ScrollView>

            {/* 하단 고정 버튼 */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>스크랩</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.applyButton]}>
                    <Text style={styles.buttonText}>지원하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default JobDetailScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 100, // 버튼 높이만큼 아래 여백
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    company: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#eee',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: width,
    },
    button: {
        flex: 1,
        backgroundColor: '#999',
        marginHorizontal: 6,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyButton: {
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
