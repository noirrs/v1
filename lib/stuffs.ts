export const CONFIG = {
    Cards: [
        {
            title: "Repositories",
            description: "💫 My Github Repositories",
            link: "about/repos"
        },
        {
            title: "Projects",
            description: "💫 My Projects",
            link: "about/projects"
        },
        {
            title: "Plans",
            description: "💫 My Plans for Feature",
            link: "about/plans"
        },
        {
            title: "Blog",
            description: "💫 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore",
            link: "blogs"
        },
    ] as ICards[]
}

interface ICards {
    title: string
    description: string
    link:string
}