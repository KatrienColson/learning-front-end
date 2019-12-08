//oefening 1
new Vue({
	el: "#app1",
    data: {
    name:"Katrien",
    age: "28"
    },
    methods:{  
        changeName: function(){
        this.title = event.target.value;
        }
    }
});
//oefening 2
new Vue({
	el: "#app2",
    data: {
    name:"Katrien",
    age: "28"
    },
    methods:{  
        changeName: function(){
        this.title = event.target.value;
        }
    }
});
//oefening 3
new Vue({
	el: "#app3",
    data: {
    name:"Katrien",
    age: "28",
        methods:{  
            random: function() {
                return Math.random();
            }
        }
    }
});

//oefening 4
new Vue({
	el: "#app4",
    data: {
    name:"Katrien",
    age: "28",
    image: 'https://camo.githubusercontent.com/224f79940611c6c12fb649128eca1cae31086d23/68747470733a2f2f7261776769742e636f6d2f7675656a732f617765736f6d652d7675652f6d61737465722f6c6f676f2e706e67'
    },
        methods:{  
            random: function() {
                return Math.random();
                }
        }
});
