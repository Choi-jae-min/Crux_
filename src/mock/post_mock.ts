export interface IPost {
    id: number;
    title: string;
    body: string;
    user_id: number;  // user_name 대신 참조 ID만 저장
    thumbnail_url: string;
    climbing_center?: string; // 클라이밍 센터 이름
    like_count: number;
    created_at: Date;
}

export interface IComment {
    id: number;
    post_id: number;
    user_id: number;
    body: string;
    created_at: Date;
}

export interface ILike {
    id: number;
    post_id: number;  // 어떤 게시글에 대한 좋아요인지
    user_id: number;  // 누가 좋아요 했는지
    created_at: Date;
}

export interface IPostImage {
    id: number;
    post_id: number;  // 어떤 게시글의 이미지인지
    image_url: string;
}


const post_mock : IPost[]  = [
    {
        id: 1,
        title: "다이나믹 맛집 볼더스",
        body: "15m 높이의 벽을 시간 내에 높이 오르는 종목",
        user_id: 1,
        thumbnail_url: '',
        climbing_center: '서울 볼더스',
        like_count: 10,
        created_at: new Date(),
    },
    {
        id: 2,
        title: "배트행 맛집 크래커",
        body: "클라이밍 배트행 존맛이네ㅋㅋㅋㅋㅋㅋ",
        user_id: 1,
        thumbnail_url: '',
        climbing_center: '크래거 클라이밍',
        like_count: 20,
        created_at: new Date(),
    },
    {
        id: 3,
        title: "더클 이번 검정 난이도 풀이",
        body: "내가 풀었겠냐 ㅋㅎㅋㅎㅋ ㅋㅋㅎㅋㅎㅋㅎㅋㅎㅎㅋㅎ",
        user_id: 1,
        thumbnail_url: '',
        climbing_center: '성수 더클라이밍 센터',
        like_count: 80,
        created_at: new Date(),
    },
    {
        id : 1,
        title : "솔직히 이번 알레 갈색 좀 물갈 아니냐",
        body : "꼬우면 물갈이지 뭐",
        user_id : 1,
        thumbnail_url : '',
        climbing_center : '혜화 알레 클라이밍',
        like_count : 1203,
        created_at: new Date(),
    },
    {
        id : 1,
        title : "다이나믹 맛집 볼더스",
        body : "클라이밍 배트행 존맛이네ㅋㅋㅋㅋㅋㅋ",
        user_id : 1,
        thumbnail_url : '',
        climbing_center : '크래거 클라이밍',
        like_count : 21,
        created_at: new Date(),

    },
    {
        id : 1,
        title : "만약 카운트가 같으면 어쩔건데",
        body : "like_count test",
        user_id : 1,
        thumbnail_url : '',
        climbing_center : '크래거 클라이밍',
        like_count : 21,
        created_at: new Date(),
    },
]

const comments: IComment[] = [
    { id: 1, post_id: 1, user_id: 2, body: "오 여기 가보고 싶다!", created_at: new Date() },
    { id: 2, post_id: 1, user_id: 3, body: "진짜 다이나믹한 코스 많음", created_at: new Date() },
    { id: 3, post_id: 1, user_id: 4, body: "볼더스 최고!", created_at: new Date() },

    { id: 4, post_id: 3, user_id: 5, body: "이 난이도 진짜 빡셈", created_at: new Date() },
    { id: 5, post_id: 3, user_id: 6, body: "같이 공략하실 분~", created_at: new Date() }
];

const likes: ILike[] = [
    { id: 1, post_id: 1, user_id: 2, created_at: new Date() },
    { id: 2, post_id: 1, user_id: 3, created_at: new Date() },
    { id: 3, post_id: 1, user_id: 4, created_at: new Date() },

    { id: 4, post_id: 3, user_id: 5, created_at: new Date() },
    { id: 5, post_id: 3, user_id: 6, created_at: new Date() }
];

const images: IPostImage[] = [
    { id: 1, post_id: 1, image_url: "https://example.com/image1.jpg" },
    { id: 2, post_id: 1, image_url: "https://example.com/image2.jpg" },

    { id: 3, post_id: 3, image_url: "https://example.com/image3.jpg" }
];

export const getPostList = () => {
    return post_mock;
}
export const getPostWithDetails = (postId: number) => {
    const post = post_mock.find(p => p.id === postId);
    if (!post) return null;

    return {
        ...post,
        comments: comments.filter(c => c.post_id === postId),
        likes: likes.filter(l => l.post_id === postId),
        images: images.filter(i => i.post_id === postId).map(i => i.image_url)
    };
};