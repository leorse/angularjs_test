var app = angular.module('debut', ["ngRoute"])
    .controller('CmtController', CmtController);
app.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});


app.controller("PostController", function($scope) {
    /*
    [
  '{{repeat(5, 7)}}',
  {
    id:"{{index()}}",
    name:"{{company()}}",
    content:"{{lorem(6,'words')}}",
  comments:
    [
    '{{repeat(5, 7)}}',
  {
  username:"{{firstName()}}",
  city:"{{city()}}",
  email:"{{email()}}",
  content:"{{lorem(15,'words')}}"
  }
    ]
  }
]
    */
    $scope.posts = [
        {
          "id": 0,
          "name": "Kongene",
          "content": "ad tempor mollit ipsum non ea",
          "comments": [
            {
              "username": "Joanne",
              "city": "Idamay",
              "email": "joannejackson@kongene.com",
              "content": "enim aliquip consequat dolore non nisi nulla sit ad aliquip aliquip sunt in sit exercitation"
            },
            {
              "username": "Lacey",
              "city": "Kanauga",
              "email": "laceyjackson@kongene.com",
              "content": "deserunt officia in culpa minim aliqua aliquip amet do fugiat exercitation laborum cupidatat et fugiat"
            },
            {
              "username": "Cook",
              "city": "Bowden",
              "email": "cookjackson@kongene.com",
              "content": "ipsum consectetur duis est tempor aliqua aliquip elit Lorem laboris pariatur do laboris excepteur dolor"
            },
            {
              "username": "Parks",
              "city": "Riverton",
              "email": "parksjackson@kongene.com",
              "content": "eiusmod dolore ullamco non Lorem in anim velit nisi eu quis exercitation voluptate irure amet"
            },
            {
              "username": "Bridget",
              "city": "Ernstville",
              "email": "bridgetjackson@kongene.com",
              "content": "laborum duis sint quis minim irure pariatur aliqua tempor laboris qui et labore irure irure"
            },
            {
              "username": "Estella",
              "city": "Veguita",
              "email": "estellajackson@kongene.com",
              "content": "sit aliquip magna cillum occaecat duis mollit officia ipsum aute voluptate dolore commodo consectetur laborum"
            }
          ]
        },
        {
          "id": 1,
          "name": "Kozgene",
          "content": "eu cupidatat mollit ad adipisicing dolore",
          "comments": [
            {
              "username": "Calderon",
              "city": "Yardville",
              "email": "calderonjackson@kozgene.com",
              "content": "reprehenderit consequat cupidatat mollit reprehenderit proident duis sunt cillum eiusmod nulla laborum nulla ut laboris"
            },
            {
              "username": "Cassie",
              "city": "Bath",
              "email": "cassiejackson@kozgene.com",
              "content": "sint fugiat aliquip id ex quis duis elit nostrud excepteur ex id excepteur incididunt officia"
            },
            {
              "username": "Willie",
              "city": "Spelter",
              "email": "williejackson@kozgene.com",
              "content": "tempor irure do amet aliquip do consequat nostrud cupidatat aliqua duis elit ullamco voluptate laboris"
            },
            {
              "username": "Guzman",
              "city": "Osage",
              "email": "guzmanjackson@kozgene.com",
              "content": "pariatur irure voluptate do sint ea aute excepteur cillum sint irure culpa incididunt cupidatat incididunt"
            },
            {
              "username": "Stevens",
              "city": "Knowlton",
              "email": "stevensjackson@kozgene.com",
              "content": "exercitation in amet ea est ea tempor id tempor officia excepteur quis deserunt dolore consequat"
            }
          ]
        },
        {
          "id": 2,
          "name": "Organica",
          "content": "adipisicing sint nostrud Lorem enim id",
          "comments": [
            {
              "username": "Naomi",
              "city": "Cresaptown",
              "email": "naomijackson@organica.com",
              "content": "officia mollit incididunt fugiat aliqua laboris irure proident laborum labore est elit sunt non do"
            },
            {
              "username": "Foley",
              "city": "Biehle",
              "email": "foleyjackson@organica.com",
              "content": "culpa minim eiusmod aliquip adipisicing eiusmod sunt est sint et laboris fugiat deserunt ex sit"
            },
            {
              "username": "Brandy",
              "city": "Abiquiu",
              "email": "brandyjackson@organica.com",
              "content": "ea adipisicing exercitation sint exercitation enim cupidatat excepteur eu mollit adipisicing veniam cillum aliquip labore"
            },
            {
              "username": "Charity",
              "city": "Gwynn",
              "email": "charityjackson@organica.com",
              "content": "esse laborum officia amet mollit et magna velit est do aute aliquip officia cupidatat cupidatat"
            },
            {
              "username": "Jan",
              "city": "Blanford",
              "email": "janjackson@organica.com",
              "content": "ut fugiat velit aliquip laboris Lorem magna aliqua exercitation exercitation fugiat ea consectetur reprehenderit aliqua"
            }
          ]
        },
        {
          "id": 3,
          "name": "Gleamink",
          "content": "voluptate ex sit commodo nulla eiusmod",
          "comments": [
            {
              "username": "Kelley",
              "city": "Orason",
              "email": "kelleyjackson@gleamink.com",
              "content": "cupidatat esse cupidatat id culpa proident magna proident minim proident ipsum et eiusmod adipisicing commodo"
            },
            {
              "username": "Livingston",
              "city": "Lund",
              "email": "livingstonjackson@gleamink.com",
              "content": "enim tempor sunt pariatur nulla minim non nostrud sit tempor voluptate adipisicing laboris deserunt magna"
            },
            {
              "username": "Althea",
              "city": "Dorneyville",
              "email": "altheajackson@gleamink.com",
              "content": "ipsum est elit irure incididunt sit occaecat laborum minim officia occaecat adipisicing cillum laborum eu"
            },
            {
              "username": "Lakeisha",
              "city": "Crumpler",
              "email": "lakeishajackson@gleamink.com",
              "content": "cupidatat amet dolore irure exercitation esse exercitation irure duis minim ipsum sit magna reprehenderit esse"
            },
            {
              "username": "Fannie",
              "city": "Volta",
              "email": "fanniejackson@gleamink.com",
              "content": "commodo duis ut quis velit occaecat consequat elit quis ex enim culpa excepteur ut eiusmod"
            },
            {
              "username": "Calhoun",
              "city": "Balm",
              "email": "calhounjackson@gleamink.com",
              "content": "quis elit sint in est aliquip id proident ipsum nisi aliquip ullamco irure labore magna"
            }
          ]
        },
        {
          "id": 4,
          "name": "Realysis",
          "content": "proident culpa labore laboris deserunt nostrud",
          "comments": [
            {
              "username": "Jackie",
              "city": "Waiohinu",
              "email": "jackiejackson@realysis.com",
              "content": "fugiat deserunt veniam aute sunt anim amet reprehenderit fugiat proident consectetur ullamco tempor non aliquip"
            },
            {
              "username": "Jacklyn",
              "city": "Walton",
              "email": "jacklynjackson@realysis.com",
              "content": "aliquip adipisicing anim esse eiusmod officia reprehenderit elit eu est aliquip aute consequat cupidatat nostrud"
            },
            {
              "username": "Helga",
              "city": "Sylvanite",
              "email": "helgajackson@realysis.com",
              "content": "ullamco quis ex Lorem minim ipsum labore quis fugiat cupidatat officia in esse sunt tempor"
            },
            {
              "username": "Brittney",
              "city": "Lavalette",
              "email": "brittneyjackson@realysis.com",
              "content": "tempor eiusmod aliquip voluptate ut mollit non exercitation consequat consectetur ea elit magna nisi proident"
            },
            {
              "username": "Powers",
              "city": "Hall",
              "email": "powersjackson@realysis.com",
              "content": "voluptate sint minim est ullamco sint quis ut incididunt magna sunt exercitation elit proident nulla"
            },
            {
              "username": "Mamie",
              "city": "Bangor",
              "email": "mamiejackson@realysis.com",
              "content": "deserunt anim do consequat velit proident irure exercitation ullamco exercitation quis occaecat velit officia magna"
            },
            {
              "username": "Margo",
              "city": "Keyport",
              "email": "margojackson@realysis.com",
              "content": "aliquip laborum amet aliquip irure aliqua incididunt culpa laboris qui do fugiat ea do sint"
            }
          ]
        }
      ]
    ;
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl:"partials/home.html",controller:"PostController"})
    .when("/comments/:id",{templateUrl:'partials/comments.html'})
    .otherwise({redirectTo:"/"});
});

function CmtController($scope) {

    $scope.comments = [
        {
            "username": "Emma Stuart",
            "content": "Et fugiat et reprehenderit e"
        },
        {
            "username": "Kerri Raymond",
            "content": "Aliquip Lorem in irure "
        },
        {
            "username": "Patton Cox",
            "content": "Fugiat cupidatat officia eu duis magna enim"
        },
        {
            "username": "Orr Mcclure",
            "content": "Commodo irure velit ipsum in. Lorem officia"
        },
        {
            "username": "Kristine Dejesus",
            "content": "Nisi sit dolore non sunt cillum i"
        }
    ];

}