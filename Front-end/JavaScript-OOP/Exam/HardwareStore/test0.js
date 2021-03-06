function solve() {
    function createCounter() {
        let counterID = 0;
        return function () {
            counterID += 1;
            return counterID;
        }
    }

    //let totalEarnedMoney = 0;

    let counterID = createCounter();

    let validator = {
        productManufacturer: function (x) {
            if (typeof x !== 'string' || x.length < 1 || x.length > 20) {
                throw 'product Manufacturer string with length between 1 and 20 symbols (inclusive)';
            }
        },
        productModel: function (x) {
            if (typeof x !== 'string' || x.length < 1 || x.length > 20) {
                throw 'product Model string with length between 1 and 20 symbols (inclusive)';
            }
        },
        productPrice: function (x) {
            if (typeof x !== 'number' || x <= 0) {
                throw 'product Price positive, non-zero number';
            }
        },
        smartPhoneScreenSize: function (x) {
            if (typeof x !== 'number' || x <= 0) {
                throw 'SmartPhone ScreenSize positive, non-zero number';
            }
        },
        smartPhoneOperatingSystem: function (x) {
            if (typeof x !== 'string' || x.length < 1 || x.length > 10) {
                throw 'smartPhone Operating System string with length between 1 and 10 symbols (inclusive)';
            }
        },
        chargerOutputVoltage: function (x) {
            if (typeof x !== 'number' || x < 5 || x > 20) {
                throw 'Charger  OutputVoltage number between 5 and 20 (inclusive)';
            }
        },
        chargerOutputCurrent: function (x) {
            if (typeof x !== 'number' || x < 100 || x > 3000) {
                throw 'Charger  outputCurrent  number between 100 and 3000 (inclusive)';
            }
        },
        routerWifiRange: function (x) {
            if (typeof x !== 'number' || x <= 0) {
                throw 'Router  WifiRange  positive, non-zero integer number';
            }
        },
        routerLanPorts: function (x) {
            if (typeof x !== 'number' || x % 1 !== 0 || x <= 0) {
                throw 'Router  LanPorts  positive, non-zero integer number';
            }
        },
        headphoneQuality: function (x) {
            if (typeof x !== 'string' || (x !== 'high' && x !== 'mid' && x !== 'low')) {
                throw 'headphone Quality  string, should be either high, mid or low';
            }
        },
        headphoneHasMicrophone: function (x) {
            if (typeof x === undefined) {
                x = false;
            } else {
                x = true
            }
        },
        hardwareStoreName: function (x) {
            if (typeof x !== 'string' || x.length < 1 || x.length > 20) {
                throw 'HardwareStoreName string with length between 1 and 20 symbols (inclusive)';
            }
        }

    };

    // Your classes
    class Product {
        constructor(manufacturer, model, price) {
            this.manufacturer = manufacturer;
            this.model = model;
            this.price = price;
            this._id = counterID();//TODO: CHECK IF DIFF FOR EVERY PRODUCT
        }

        get id() {
            return this._id;
        }

        get manufacturer() {
            return this._manufacturer;
        }

        set manufacturer(x) {
            validator.productManufacturer(x);
            this._manufacturer = x;
        }

        get model() {
            return this._model;
        }

        set model(x) {
            validator.productModel(x);
            this._model = x;
        }

        get price() {
            return this._price;
        }

        set price(x) {
            validator.productPrice(x);
            this._price = x;
        }

        getLabel() {
            //TODO: CHECK if this.getClass().getSimpleName(); works
            //return `${this.constructor.name} - ${this._manufacturer} ${this._model} - **${this._price}**`;
            return this.manufacturer + ' ' + this.model + ' - **' + this.price + '**';
        }
    }
    class SmartPhone extends Product {
        constructor(manufacturer, model, price, screenSize, operatingSystem) {
            super(manufacturer, model, price);
            this.screenSize = screenSize;
            this.operatingSystem = operatingSystem;
        }

        get screenSize() {
            return this._screenSize;
        }

        set screenSize(x) {
            validator.smartPhoneScreenSize(x);
            this._screenSize = x;
        }

        get operatingSystem() {
            return this._operatingSystem;
        }

        set operatingSystem(x) {
            validator.smartPhoneOperatingSystem(x);
            this._operatingSystem = x;
        }
        getLabel() {
            return this.constructor.name + ' - ' + super.getLabel();
        }


    }

    class Charger extends Product {
        constructor(manufacturer, model, price, outputVoltage, outputCurrent) {
            super(manufacturer, model, price);
            this.outputVoltage = outputVoltage;
            this.outputCurrent = outputCurrent;
        }

        get outputVoltage() {
            return this._outputVoltage;
        }

        set outputVoltage(x) {
            validator.chargerOutputVoltage(x);
            this._outputVoltage = x;
        }

        get outputCurrent() {
            return this._outputCurrent;
        }

        set outputCurrent(x) {
            validator.chargerOutputCurrent(x);
            this._outputCurrent = x;
        }

        getLabel() {
            return this.constructor.name + ' - ' + super.getLabel();
        }

    }
    class Router extends Product {
        constructor(manufacturer, model, price, wifiRange, lanPorts) {
            super(manufacturer, model, price);
            this.wifiRange = wifiRange;
            this.lanPorts = lanPorts;
        }

        get wifiRange() {
            return this._wifiRange;
        }

        set wifiRange(x) {
            validator.routerWifiRange(x);
            this._wifiRange = x;
        }

        get lanPorts() {
            return this._lanPorts;
        }

        set lanPorts(x) {
            validator.routerLanPorts(x);
            this._lanPorts = x;
        }
        getLabel() {
            return this.constructor.name + ' - ' + super.getLabel();
        }


    }
    class Headphones extends Product {
        constructor(manufacturer, model, price, quality, hasMicrophone) {
            super(manufacturer, model, price);
            this.quality = quality;
            this.hasMicrophone = hasMicrophone;
        }

        get quality() {
            return this._quality;
        }

        set quality(x) {
            validator.headphoneQuality(x);
            this._quality = x;
        }

        get hasMicrophone() {
            return this._hasMicrophone;
        }

        set hasMicrophone(x) {
            validator.headphoneHasMicrophone(x);
            this._hasMicrophone = x;
        }
        getLabel() {
            return this.constructor.name + ' - ' + super.getLabel();
        }

    }

    class HardwareStore {
        constructor(name) {
            this.name = name;
            this.products = [];
            this._earnedMoney = 0;
            this.soldProducts = [];
        }


        get name() {
            return this._name;
        }

        set name(x) {
            validator.hardwareStoreName(x);
            this._name = x;
        }

        stock(product, quantity) {
            if (!(product instanceof Product  )) {
                throw 'product should be a valid Product instance';
            }
            if (!((quantity > 0) && ((quantity % 1) === 0))) {
                throw 'quantity should be a positive, non-zero integer number';
            }

            for (let i = 0; i < quantity; i += 1) {
                this.products.push(product);
            }
            return this;
        }


        sell(productId, quantity) {
            if (!((quantity > 0) && ((quantity % 1) === 0))) {
                throw 'quantity should be a positive, non-zero integer number';
            }
            let counter = 0;
            this.products.forEach(function (product) {
                if (product.id === productId) {
                    counter += 1;
                }
            });
            if (counter < quantity) {
                throw Error;
            }
            for (let i = 0; i < quantity; i += 1) {
                let index = this.products.findIndex(p => p.id === productId);
                this.soldProducts.push(this.products[index]);
                this.products.splice(index, 1);
            }

            return this;
        }


        getSold() {
            return this.soldProducts.reduce((cost, product) => cost + product.price, 0);
        }

        search(options) {
            if (typeof options === 'string') {
                let pattern = options.toLocaleLowerCase();
                let flags = {};
                let uniques = this.products.filter(function (product) {
                    if (flags[product.id]) {
                        return false;
                    }
                    flags[product.id] = true;
                    return true;
                });
                let counter = 0;

                return uniques
                    .filter(p => p.manufacturer.toLocaleLowerCase().indexOf(pattern) >= 0
                    || p.model.toLocaleLowerCase().indexOf(pattern) >= 0).map(p => {
                        counter = 0;
                        this.products.forEach(function (product) {
                            if (product.id === p.id) {
                                counter += 1;
                            }
                        });
                        return {
                            product: p,
                            quantity: counter
                        };
                    });
            }
            if (typeof options === 'object') {
                let flags = {};
                let uniques = this.products.filter(function (product) {
                    if (flags[product.id]) {
                        return false;
                    }
                    flags[product.id] = true;
                    return true;
                });
                let counter = 0;

                if (options.hasOwnProperty('manufacturerPattern')) {
                    uniques.filter(p => p.manufacturer.indexOf(options.manufacturerPattern) >= 0);
                }

                if (options.hasOwnProperty('modelPattern')) {
                    uniques.filter(p => p.model.indexOf(options.modelPattern) >= 0);
                }

                if (options.hasOwnProperty('type')) {
                    uniques.filter(p => p.constructor.name === options.type);
                }
                if (options.hasOwnProperty('minPrice')) {
                    uniques.filter(p => p.price >= options.minPrice);
                }

                if (options.hasOwnProperty('maxPrice')) {
                    uniques.filter(p => p.price <= options.maxPrice);
                }

                return uniques.map(p => {
                    counter = 0;
                    this.products.forEach(function (product) {
                        if (product.id === p.id) {
                            counter += 1;
                        }
                    });

                    return {
                        product: p,
                        quantity: counter
                    };
                });
            }

            throw Error;
        }
    }
    
    return {
        getSmartPhone(manufacturer, model, price, screenSize, operatingSystem) {
            return new SmartPhone(manufacturer, model, price, screenSize, operatingSystem)
        },
        getCharger(manufacturer, model, price, outputVoltage, outputCurrent) {
            return new Charger(manufacturer, model, price, outputVoltage, outputCurrent)
        },
        getRouter(manufacturer, model, price, wifiRange, lanPorts) {
            return new Router(manufacturer, model, price, wifiRange, lanPorts)
        },
        getHeadphones(manufacturer, model, price, quality, hasMicrophone) {
            return new Headphones(manufacturer, model, price, quality, hasMicrophone)
        },
        getHardwareStore(name) {
            return new HardwareStore(name)
        }
    };
}
module.exports = solve; // DO NOT SUBMIT THIS LINE

const result = solve();

const phone = result.getSmartPhone('HTC', 'One', 903, 5, 'Android');

console.log(phone.getLabel()); // SmartPhone - HTC One - **903**

const headphones = result.getHeadphones('Sennheiser', 'PXC 550 Wireless', 340, 'high', false);
const store = result.getHardwareStore('Magazin');

store.stock(phone, 4)
    .stock(headphones, 15);
console.log(store);
store.sell(headphones.id, 3);
console.log(store.getSold()); // 680
console.log(store.search('senn'));
/*
 [ { product:
 Headphones { ... },
 quantity: 15 } ]
 */

console.log(store.search({type: 'SmartPhone', maxPrice: 1000}));
/*
 [ { product:
 SmartPhone { ... },
 quantity: 1 } ]
 */

console.log(store.search({type: 'SmartPhone', maxPrice: 900}));
/* [] */