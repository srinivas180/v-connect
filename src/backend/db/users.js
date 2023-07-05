import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    {
        _id: "1",
        firstName: "Satya",
        lastName: "Chandra",
        username: "satyachandra",
        password: "satyachandra",
        bio: "Aspiring Frontend Developer",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/23_ghzzzi.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: "2",
        firstName: "Stephen",
        lastName: "Hawking",
        username: "stephenhawking",
        password: "stephenhawking",
        bio: "physicist & cosmologist,",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239299/v-connect/profile-images/stephen-hawking_cumhzw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: "3",
        firstName: "Tom",
        lastName: "Cruise",
        username: "tomcruise",
        password: "tomcruise",
        bio: "Actor. Producer. Running in movies since 1981.",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239299/v-connect/profile-images/tomcruise_r8drdm.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: "4",
        firstName: "Batman",
        lastName: "",
        username: "batman",
        password: "batman",
        bio: "CEO of Wayne Enterprises",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239299/v-connect/profile-images/batman_ztw6hs.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: "5",
        firstName: "Mahesh",
        lastName: "Babu",
        username: "maheshbabu",
        password: "maheshbabu",
        bio: "Actor in Indian Telugu Cinema",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239299/v-connect/profile-images/mahesh-babu_ymw0uz.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
];
