export const resolvers = {
    Query: {
        appName: () => "ProductHunt clone", // implements the appName query
        allProducts: () => productsData,
    },
};

const productsData = [
    {
        name: "Educative",
        description: "Interactive Courses for Software Developers",
        url: "https://educative.io/",
        numberOfVotes: 10,
        publishedAt: "2021-04-05",
        author: {
            id: "1",
            userName: "ellen",
            fullName: "Ellen James",
        },
    },
    {
        name: "Apollo",
        description: "The Apollo Data Graph Platform",
        url: "https://www.apollographql.com/",
        numberOfVotes: 5,
        publishedAt: "2021-01-08",
        author: {
            id: "2",
            userName: "peter",
            fullName: "Peter Miles",
        },
    },
    {
        name: "OneGraph",
        description: "Build Integrations 100x Faster",
        url: "https://www.onegraph.com",
        numberOfVotes: 5,
        publishedAt: "2020-08-22",
        author: {
            id: "1",
            userName: "ellen",
            fullName: "Ellen James",
        },
    },
];
