let globalVar = {
    lastUserResponse: [],
    listOfUsersResponse: [],
    indexQuestionInQuizzList: 0,
    quizzes: [
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        },
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        },
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        },
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        },
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        },
        {
            "title": "Quizz Géométrie",
            "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
            "description": "Questions sur les formes et volumes",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 0,
            "id": "5c3f45e155a8180004b47aea"
        },
        {
            "title": "Quizz Web Bases",
            "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
            "description": "Questions de base sur le développement web",
            "created_by": {
                "id": "5c3ef507ae97ab0004daad7c",
                "username": "amr"
            },
            "number_participants": 2,
            "id": "5c4592fb28a39b00045f1945"
        }
    ],

    quizzesQuestions: [
        {
            "id": "5c3f45e155a8180004b47aea",
            "title": "Quizz GÃ©omÃ©trie",
            "description": "Questions sur les formes et volumes",
            "created_by": "amr",
            "questions": [
                {
                    "id": "5c3f0c696f912a0004c01251",
                    "question": "Combien de cÃ´tÃ©s possÃ¨de un cube",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "Quatre",
                            "value": "false"
                        },
                        {
                            "name": "Six",
                            "value": "true"
                        }
                    ]
                },
                {
                    "id": "5c3f0c346f912a0004c01250",
                    "question": "Combien de cÃ´tÃ©s possÃ¨de une pyramide",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "Quatre",
                            "value": "true"
                        },
                        {
                            "name": "Cinq",
                            "value": "false"
                        },
                        {
                            "name": "Six",
                            "value": "false"
                        },
                        {
                            "name": "Sept",
                            "value": "false"
                        }
                    ]
                },
                {
                    "id": "5c3f0bd46f912a0004c0124e",
                    "question": "Combien de sommets possÃ¨de un dodecaÃ¨dre",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "12",
                            "value": "false"
                        },
                        {
                            "name": "18",
                            "value": "false"
                        },
                        {
                            "name": "20",
                            "value": "true"
                        },
                        {
                            "name": "24",
                            "value": "false"
                        }
                    ]
                },
                {
                    "id": "5c3f0be56f912a0004c0124f",
                    "question": "Combien de sommets possÃ¨de un cube",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "4",
                            "value": "false"
                        },
                        {
                            "name": "6",
                            "value": "false"
                        },
                        {
                            "name": "8",
                            "value": "true"
                        },
                        {
                            "name": "12",
                            "value": "false"
                        }
                    ]
                }
            ],
            "number_participants": 0
        },
        {
            "id": "5c4592fb28a39b00045f1945",
            "title": "Quizz Web Bases",
            "description": "Questions de base sur le dÃ©veloppement web",
            "created_by": "amr",
            "questions": [
                {
                    "id": "5c45922628a39b00045f1944",
                    "question": "CSS est l'abrÃ©viation de Computed Style Sheets",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "vrai",
                            "value": "false"
                        },
                        {
                            "name": "faux",
                            "value": "true"
                        }
                    ]
                },
                {
                    "id": "5c45911328a39b00045f1943",
                    "question": "Quelle est l'extension de fichier de type image ?",
                    "image": "test.png",
                    "answers": [
                        {
                            "name": "xls",
                            "value": "false"
                        },
                        {
                            "name": "png",
                            "value": "true"
                        },
                        {
                            "name": "zip",
                            "value": "false"
                        }
                    ]
                }
            ],
            "number_participants": 2
        }
    ]
};


let quizzList = new Vue({
    el: '#quizzListPage',
    data: {
        data: globalVar
    },
    mounted: function(){
      console.log("mounted");
    },
    methods: {
        takeUserResponse: function (id) {
            console.log("id");
            console.log(id);
            this.listOfUsersResponse.push({"id": id, "response": this.lastUserResponse});
            console.log("listOfUserResponse[id,response]: ");
            console.log(this.listOfUsersResponse[this.listOfUsersResponse.length - 1].id + "," + this.listOfUsersResponse[this.listOfUsersResponse.length - 1].response);
            this.indexQuestionInQuizzList += 1;
            console.log(this.indexQuestionInQuizzList);
        }//,
         // loadQuestionAndResponsesFor: function(index){
         //
         // },
         // mounted: function() {
         //     this.loadQuestionAndResponsesFor(this.indexQuestionInQuizzList);
         // },

    }
});

let questionsList = new Vue({
    el: '#questionsListPage',
    data: {
        data: globalVar
    },
    mounted: function(){
        alert('hello');
    }
});

