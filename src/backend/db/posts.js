import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: uuid(),
        content: "Look at this beautiful plant! I love!",
        imageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687154650/v-connect/posts-images/lon--george-monstera-deliciosa_p7shzo.webp",

        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "satyachandra",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "I know where I got my plant thing from. Look at this beautiful specimen",
        imageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687154650/v-connect/posts-images/snake-plant_j4m8av.webp",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "satyachandra",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "Here’s the official poster for #MissionImpossible - Dead Reckoning Part One starring @TomCruise. Only in theatres July 2023.",
        imageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687237203/v-connect/posts-images/mi-dead-reckoning-poster_vgfb4w.webp",
        imageAlt: "mission impossible dead reckoning poster",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "tomcruise",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "To all the films in release, to all the studios, and to all the exhibitors: congratulations. To the audience: thank you for venturing out and allowing us to entertain you. See you at the movies.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "tomcruise",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "Stephen Hawking's most famous prediction could mean that everything in the universe is doomed to evaporate.",
        imageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239439/v-connect/posts-images/universe_gktdhy.jpg",
        imageAlt: "Picture of Universe",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "stephenhawking",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "Quotes from 'A Brief History of Time: From the Big Bang to Black Holes' by Stephen Hawking. The universe doesn't allow perfection.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "stephenhawking",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "Life in luxury!",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "maheshbabu",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "Highly inflammable!",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "maheshbabu",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "Nominee The Batman leads this year's film nominees, earning six nominations including Best Superhero Movie.",
        imageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687240369/v-connect/posts-images/wayne-batman_getz69.webp",
        imageAlt: "Wayne",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "batman",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "So we got a lot into methodology and trying to use every tool that we had to shoot as much in camera as possible...",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "batman",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
];
