var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
var ItemDirective = (function (_super) {
    __extends(ItemDirective, _super);
    function ItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ItemDirective;
}(ComplexBase));
export { ItemDirective };
ItemDirective.moduleName = 'item';
var ItemsDirective = (function (_super) {
    __extends(ItemsDirective, _super);
    function ItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ItemsDirective;
}(ComplexBase));
export { ItemsDirective };
ItemsDirective.propertyName = 'items';
ItemsDirective.moduleName = 'items';