class Coupon {
    constructor({id, code, type, value, minPurchaseAmount = 0, expireDate = null, active = true} = {}) {
        this.id = id;
        this.code = code?.toUpperCase().trim();  
        this.type = type;
        this.value = value;
        this.minPurchaseAmount = minPurchaseAmount;
        this.expireDate = expireDate;
        this.active = active;
    }
}

module.exports = Coupon;