Vue.component('products',{
    props:['products'],
    template:`
            <ul>
            <li v-bind:key="product.id" v-for="product in products">
                    Id: {{product.id}} | 
                    {{product.name}} | 
                    Price: {{formatPrice(product.price)}}
                    <button v-on:click="$emit('del-product', product.id)">&times;</button>
                </li>
            </ul>
            `,
    methods: {
        formatPrice(price){
                return "₦" + price + ".00";
        }
    },
});

Vue.component('add-product',{
    template:`
            <div>
                <form method="post" @submit.prevent="addProduct">
                    <input type="text" v-model="title" placeholder="Product name.." required>
                    <input type="number" v-model="price" placeholder="Product price.." required>
                    <br><br>
                    <button>Submit Me</button>
                </form>
            </div>
            `,
    data(){
        return{
            title:"",
            price:0,
        }
    },
    methods:{
        addProduct(){
            const newProduct = {
                id : 0006,
                name : this.title,
                price:this.price
            }
            //send product to main vue instance to add it to the product list
            this.$emit('add-product', newProduct);

            //Clear fields
            this.title = '',
            this.price = 0
        }
    },
});

const app = new Vue({
    el:'#app',
    data:{
        Title:'ZOOM',
        productList:
        [
            {id:"0001", name:"Mini Rechargeable Fan", price:3500},
            {id:"0002", name:"Portable Blender", price:5500},
            {id:"0003", name:"Mini Iron", price:5700},
            {id:"0004", name:"8GB Spy pen", price:3500}
        ]
    },
    methods: {
        greet(){
            alert("Hello from the other side");
        },
        deleteProduct(id){
            //this.productList.pop();
            this.productList = this.productList.filter(product => {
                return product.id !== id
            });
        },
        addNewProduct(newProduct){
            //this.productList.push(newProduct);
            this.productList=[...this.productList, newProduct];
        }
    },
});
