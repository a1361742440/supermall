import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //查找之前数组里是否有这个商品
            let oldProduct = context.state.cartList.find(function (item) {
                return item.iid === payload.iid
            })
            //判断oldProduct
            if (oldProduct) {
                //oldProduct.count += 1;
                context.commit(ADD_COUNTER, oldProduct)
                resolve('商品的数量加1');
            } else {
                payload.count = 1;
                //state.cartList.push(payload);
                context.commit(ADD_TO_CART, payload)
                resolve('添加了新的商品')
            }
        })
    }
}
