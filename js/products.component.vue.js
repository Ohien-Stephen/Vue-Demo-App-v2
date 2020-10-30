
Vue.component('product',{
    props:['products'],
    template:`
            <ul>
                <li v-for="product in products">
                    Id: {{product.id}} | {{product.name}} | Price: {{product.price}}
                </li>
            </ul>
            `,
    methods: {
        
    },
});