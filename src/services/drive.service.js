var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
var DriveService = /** @class */ (function () {
    function DriveService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "https://www.googleapis.com/drive/v3";
        /*Con esto se pueden especificar las búsquedas. name+contains+NOMBRE DE LO QUE BUSQUE*/
        this.QNOTRASHEDROOT = "?q=trashed%3Dfalse";
        this.QFOLDERITEMS = "+and+mimeType+contains+\'folder\'";
        this.QTESTPARAMS = "+and+name+contains+'Latis'";
        this.QINPARENTS = "+in+parents";
        this.QLISTFIELDS = "&fields=files(id%2Ckind%2CmimeType%2Cname%2Cparents)";
        this.QGETFIELDS = "?fields=id%2Ckind%2CmimeType%2Cname%2Cparents";
    }
    DriveService.prototype.listOfFiles = function (authtoken) {
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + this.QTESTPARAMS, {
            headers: new HttpHeaders({
                Authorization: "Bearer " + authtoken
            })
        });
    };
    DriveService.prototype.getFolderChildren = function (parentFolder, authtoken) {
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + this.QFOLDERITEMS + "+and+\'" + parentFolder + "\'" + this.QINPARENTS + "+" + this.QLISTFIELDS, {
            headers: new HttpHeaders({
                Authorization: "Bearer " + authtoken
            })
        });
    };
    DriveService.prototype.getFolderById = function (folder_id, authtoken) {
        return this.httpClient.get(this.API_URL + "/files/" + folder_id + this.QGETFIELDS, {
            headers: new HttpHeaders({
                Authorization: "Bearer " + authtoken
            })
        });
    };
    DriveService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DriveService);
    return DriveService;
}());
export { DriveService };
//# sourceMappingURL=drive.service.js.map