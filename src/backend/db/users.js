import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    {
        _id: uuid(),
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
        _id: uuid(),
        firstName: "Stephen",
        lastName: "Hawking",
        username: "stephenhawking",
        password: "stephenhawking",
        bio: "Sports Reporter, Influencer",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/24_qml3ob.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: uuid(),
        firstName: "Tom",
        lastName: "Cruise",
        username: "tomcruise",
        password: "tomcruise",
        bio: "Software Developer | Tech Explorer",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/18_urrdne.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: uuid(),
        firstName: "Tom",
        lastName: "Holland",
        username: "tomholland",
        password: "tomholland",
        bio: "Cyber-Security Researcher and Developer",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/9_ng1cws.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
    {
        _id: uuid(),
        firstName: "Mahesh",
        lastName: "Babu",
        username: "maheshbabu",
        password: "maheshbabu",
        bio: "Famous Actor",
        profileImageURL:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/1_m0j1ir.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
    },
];
