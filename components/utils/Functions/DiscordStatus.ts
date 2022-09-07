export function DiscordStatus(status: string){
    if(!status) return;
    let formattedStatus = ""
    let color = ""
    switch(status){
        case "online":
            formattedStatus = "Online";
            color = "#43b581";
            break;
        case "idle":
            formattedStatus = "Idle";
            color = "#faa61a";
            break;
        case "dnd":
            formattedStatus = "Do Not Disturb";
            color = "#f04747";
            break;
        case "offline":
            formattedStatus = "Offline";
            color = "#747f8d";
            break;  
}
    return {
        formattedStatus,
        color
    }
    
}