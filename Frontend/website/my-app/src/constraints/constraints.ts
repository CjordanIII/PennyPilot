import {mapConstraintTypes,MoneyStatus} from "@/lib/interfaces"


export const socialMedia:mapConstraintTypes[]= [{
    name:"twitter",
    src:"/assets/jpegs/xSocialIcon.jpg",
    alt:"twitter logo",
    href:"#"
},
{
    name:"linkedin",
    src:"/assets/jpegs/Linkein.jpg",
    alt:"linkedin logo",
    href:"#"
},
{
    name:"facebook",
    src:"/assets/jpegs/facebook.jpg",
    alt:"facebook logo",
    href:"#"
},
{
    name:"instagram",
    src:"/assets/jpegs/instagram.jpg",
    alt:"instagram",
    href:"#"
}
]

export const navBarMetaData:mapConstraintTypes[] = [
    {
        name:"Overview",
        src:"/assets/svgs/squarelines.svg",
        alt:"square with lines",
        href:"#"
    },
    {
        name:"Chat",
        src:"/assets/svgs/comment.svg",
        alt:"chat",
        href:"#"
    },{
        name:"Savings Goals",
        src:"/assets/svgs/target.svg",
        alt:"target",
        href:"#"
    },{
        name:"Budget & Insights",
        src:"/assets/svgs/line.svg",
        alt:"graph",
        href:"#"
    },
    {
        name:"Expenses",
        src:"/assets/svgs/cash.svg",
        alt:"cash",
        href:"#"
    },
    {
        name:"Settings",
        src:"/assets/svgs/gear.svg",
        alt:"gear",
        href:"#"
    }
]

export const moneyStatus:MoneyStatus[] = [
    {
        name:"Balance",
        icon:"/assets/icons/money.svg",
        alt:"money sign",
        ballance:"N/A" 
    },    {
        name:"Savings",
        icon:"/assets/icons/Wallet.svg",
        alt:"money sign",
        ballance:"N/A"
    }  ,  {
        name:"Estimated Income",
        icon:"/assets/icons/download.svg",
        alt:"money sign",
        ballance:"N/A"
    }   , {
        name:"Expenses",
        icon:"/assets/icons/upload.svg",
        alt:"money sign",
        ballance:"N/A"
    }
]