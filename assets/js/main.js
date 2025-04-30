// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO




// ! ESERCIZI DI DONATO PER FUNZIONI RICORSIVE
// * TODO: RITORNARE UNA LISTA CON TUTTI I TITOLI
const posts = [
    {
        title: "Post 1",
        links: []
    },
    {
        title: "Post 2",
        links: [
            {
                title: "Post 34",
                links: []
            },
            {
                title: "Post 74",
                links: [
                    {
                        title: "Post 1205"
                    }
                ]
            }
        ]
    },
    {
        title: "Post 3"
    },
    {
        title: "Post 4",
        anotherProperty: true,
        links: [
            {
                title: "Post 34",
                links: [
                    {
                        anotherProperty: true
                    },
                    {
                        title: "Post 1206"
                    }
                ]
            }
        ]
    }
]
console.debug("posts", posts);
console.table(posts);




const titles = [];
const searchForTitles = (posts = []) => {
    posts.forEach(post => {
        if (post.title !== undefined) {
            titles.push(post.title);
        };
        if (post.links !== undefined) {
            searchForTitles(post.links);
        }
    });
};


const uniqueTitles = [];
const searchForUniqueTitles = (posts = []) => {
    posts.forEach(post => {
        if (post.title !== undefined && !uniqueTitles.includes(post.title)) {
            uniqueTitles.push(post.title);
        };
        if (post.links !== undefined) {
            searchForUniqueTitles(post.links);
        }
    });
};



searchForTitles(posts);
console.debug("titles", titles);
console.table(titles);



searchForUniqueTitles(posts);
console.debug("uniqueTitles", uniqueTitles);
console.table(uniqueTitles);