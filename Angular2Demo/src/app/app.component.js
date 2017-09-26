"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    //pageHeader: string ='Employee details';
    //imagePath: string = '/images/dog1.jpg';
    //firstName: string = 'Peter';
    //lastName: string = 'Pen';
    //isDisabled: boolean = true;
    //badHtml: string = 'Hello <sript>alert("Hacked");</script>';
    //getFullName(): string{
    //    return this.firstName + ' ' + this.lastName;
    //classesToApply: string = 'italicsClass boldClass';
    //applyBoldClass: boolean = true;
    //applyItalicsClass: boolean = true;
    //addClasses()
    //{
    //    let classes={
    //        boldClass: this.applyBoldClass,
    //        italicsClass: this.applyItalicsClass
    //    };
    //    return classes;
    //}
    //isBold: boolean = true;
    //fontSize: number = 30;
    //isItalic: boolean = true;
    //addStyles() {
    //    let styles = {
    //        'font-weight': this.isBold ? 'bold' : 'normal',
    //        'font-style': this.isItalic ? 'italic':'normal'
    //        };
    //    return styles;
    //}
    AppComponent.prototype.onClickMe = function () {
        console.log('Button Clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map