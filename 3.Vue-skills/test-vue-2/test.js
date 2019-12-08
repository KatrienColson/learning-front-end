//oefening 1

new Vue({
	el: "#app1",
    data: {
    title:"hello World"
    },
    methods:{  
        changeTitle: function(){
        this.title = event.target.value;
        }
    }
});

//oefening 2
new Vue({
	el: "#app2",
    data: {
    title: "hello world"
    },
    methods:{  
        sayHello2: function(){
        return 'Hello!';
        }
    }
});

//oefening 3
new Vue({
	el: "#app3",
    data: {
    title: "Hello World"
    },
    methods:{  
        sayHello3: function(){
        return this.title;
        }
    }
});

//oefening 4: v-bind
new Vue({
	el: '#app4',
    data: {
    title: 'Hello World',
    link: 'http://google.com'
    },
    methods:{  
        sayHello4: function(){
        return this.title;
        }
    }
});

//oefening 5: Geef comando 1X
new Vue({
	el: '#app5',
    data: {
    title: 'Hello World',
    link: 'http://google.com'
    },
    methods:{  
        sayHello5: function(){
            this.title = 'Hello!';
        return this.title;
        }
    }
});

//oefening 6:hier geeft het tekst ipv de link
new Vue({
	el: '#app6',
    data: {
    title: 'Hello World',
    // link: 'http://google.com',
    finishedLink: '<a href="http://google.com"></a>'
    },
    methods:{  
        sayHello6: function(){
            this.title = 'Hello!';
        return this.title;
        }
    }
});

//oefening 6A:hier geeft het de link
new Vue({
	el: '#app6A',
    data: {
    title: 'Hello World',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com"></a>'
    },
    methods:{  
        sayHello6A: function(){
            this.title = 'Hello!';
        return this.title;
        }
    }
});

//oefening 7: optellen met een knop
new Vue({
	el: '#app7',
    data: {
    counter: 0
    },
    methods:{  
        increase: function(){
            this.counter++;
        }
    }
});

//oefening 8
new Vue({
	el: '#app8',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(){
            this.counter++;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

//oefening 9: optellen met 2
new Vue({
	el: '#app9',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
//oefening 10
new Vue({
	el: '#app10',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function(event){
            event.stopPropegation();
        }
    }
});
//oefening 10A
new Vue({
	el: '#app10A',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
//oefening 11: key modifire
new Vue({
	el: '#app11',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe:function(){
            alert('ALERT!');
        }
    }
});
//oefening 12
new Vue({
	el: '#app12',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe:function(){
            alert('ALERT!');
        }
    }
});
//oefening 13
new Vue({
	el: '#app13',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe:function(){
            alert('ALERT!');
        }
    }
});
//oefening 14
new Vue({
	el: '#app14',
    data: {
    counter: 0,
    x: 0,
    y: 0
    },
    methods:{  
        increase: function(step){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe:function(){
            alert('ALERT!');
        }
    }
});
//oefening 15: Using Two-Way-Binding
new Vue({
	el: '#app15',
    data: {
    name :'Katrien'
    }
});
//oefening 16: Reacting to Changes withComputed Properties
new Vue({
	el: '#app16',
    data: {
    counter: 0,
    result:''
    },
    methods:{
        increase: function(){
            this.counter++;
            this.result = this.counter > 5?'Greater 5': 'Smaller 5'
        },
        decrease: function(){
            this.counter--;
            this.result = this.counter > 5?'Greater 5': 'Smaller 5'
        }
    } 
});
//oefening 16A: Reacting to Changes withComputed Properties
//kortere versie dan 16
new Vue({
	el: '#app16A',
    data: {
    counter: 0,
    secondCounter: 0
    },
    computed:{
        output: function(){
            console.log('computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';  
        }
    },
    methods:{
        result: function(){
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});
//kortere versie dan 17:An Alternative to Computed
//Properties: Watching for Changes
new Vue({
	el: '#app17',
    data: {
    counter: 0,
    secondCounter: 0
    },
    computed:{
        output: function(){
            console.log('computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';  
        }
    },
    watch:{
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000);
        }
    },
    methods:{
        result: function(){
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});












