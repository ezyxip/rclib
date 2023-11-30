export type Credentials = {
    isAuth: boolean,
    user: {
        name: string,
        login: string,
        roles: string[],
        avatar: string
    }
} | null;

export function getCredentials(){
    return({
        isAuth: true,
        user: {
            name: "Иван Иванович",
            login: "ivan",
            roles:["admin, manager, master"],
            avatar: "https://n1s1.hsmedia.ru/f2/e3/9c/f2e39cb1817739d34f20f5da82442807/728x728_1_562f6b23003fe3bee9b459aa8a538126@1080x1080_0xac120003_17745537941663941356.jpeg"
        }
    })
}