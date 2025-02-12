export interface IUser {
    id: number;
    name: string;
    profile_image?: string;
}

const user_mock: IUser[] = [
    { id: 1, name: "김클라이밍", profile_image: "https://example.com/profile1.jpg" },
    { id: 2, name: "최잼잼민이도 푸는 개꿀 문제 ㅋㅋㄹㅃㅃ", profile_image: "https://example.com/profile2.jpg" },
    { id: 3, name: "박볼더링 개쉬운 것", profile_image: "https://example.com/profile3.jpg" },
    { id: 4, name: "이크럭스 매우 어려워서 못해", profile_image: "https://example.com/profile4.jpg" },
    { id: 5, name: "정하강", profile_image: "https://example.com/profile5.jpg" },
];

export const getUser = (userId: number) => {
    return user_mock.find(u => u.id === userId) || { name: "Unknown", profile_image: "" };
}