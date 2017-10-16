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
var AccordionItemDirective = (function (_super) {
    __extends(AccordionItemDirective, _super);
    function AccordionItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccordionItemDirective;
}(ComplexBase));
export { AccordionItemDirective };
AccordionItemDirective.moduleName = 'accordionItem';
var AccordionItemsDirective = (function (_super) {
    __extends(AccordionItemsDirective, _super);
    function AccordionItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccordionItemsDirective;
}(ComplexBase));
export { AccordionItemsDirective };
AccordionItemsDirective.propertyName = 'items';
AccordionItemsDirective.moduleName = 'accordionItems';
