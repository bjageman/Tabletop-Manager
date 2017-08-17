export function checkOwner(user, campaign){
    if (user != null && campaign != null && campaign.owner != null){
        console.log(user.id)
        console.log(campaign.owner.id)
        return user.id === campaign.owner.id
    }
    return false
}
