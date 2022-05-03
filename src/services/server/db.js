import faker from "faker";

class DB {
    static timeline = Array(500).fill(0).map((item, index) => {
        return {
            image: faker.image.lorempicsum.image(256, 256) + "?random=" + Math.random(),
        }
    });

    static stories = Array(19).fill(0).map((item, index) => {
        return {
            image: faker.image.lorempicsum.image(512, 512) + "?random=" + Math.random(),
        }
    });

    static tagged = [];

    static user = {
        fullName: "Lorem Ipsum",
        profilePhoto: faker.image.people(256, 256) + "?random=" + Math.random(),
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        postCount: 34,
        followerCount: 1420,
        followingCount: 54,
        website: "https://loremipsum..."
    };
}

export default DB;