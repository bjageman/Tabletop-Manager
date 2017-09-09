export function checkOwner(user, campaign){
    if (user != null && campaign != null && campaign.owner != null){


        return user.id === campaign.owner.id
    }
    return false
}

export function getShadow(object, dp)
{
    if (dp <= 0)
    {
        return "none";
    }
    return "0px " + dp + "px " + dp + "px " + "rgba(0, 0, 0, .38)";
}
