export const CONFIG = {
    DiscordUserID: "922078187788308510",
    Cards: [
        {
            title: "Repositories",
            description: "💫 My Github Repositories",
            link: "/repos"
        },
        {
            title: "Projects",
            description: "💫 My Projects",
            link: "/projects"
        },
        {
            title: "My Experiences",
            description: "💫 My Experiences and knowledge",
            link: "/experiences"
        },
        {
            title: "Blog",
            description: "💫 Blogs",
            link: "/blogs"
        },
    ] as ICards[]
}

interface ICards {
    title: string
    description: string
    link:string
}