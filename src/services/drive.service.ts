import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DriveService {
    private readonly API_URL: string = "https://www.googleapis.com/drive/v3";
    /*Con esto se pueden especificar las búsquedas. name+contains+NOMBRE DE LO QUE BUSQUE*/
    private readonly QNOTRASHEDROOT: string = "?q=trashed%3Dfalse"
    private readonly QFOLDERITEMS: string = "+and+mimeType+contains+\'folder\'"
    private readonly QIMAGEITEMS: string = "+and+(mimeType+%3D+\'image%2Fjpeg\'+or+mimeType+%3D+\'image%2Fpng\')"
    private readonly QINPARENTS: string = "+in+parents"
    private readonly QLISTFIELDS: string = "&fields=files(id%2Ckind%2CmimeType%2Cname%2Cparents)"
    private readonly QGETFIELDS: string = "?fields=id%2Ckind%2CmimeType%2Cname%2Cparents"

    private readonly QTESTPARAMS: string = "+and+name+contains+'Latis'"
    
    constructor(private httpClient: HttpClient) {
    
    }

    public listOfFiles(authtoken: string): Observable<any> {
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + this.QTESTPARAMS, {
          headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

    public getFolderChildren(parentFolder:string, authtoken: string): Observable<any> {
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + this.QFOLDERITEMS + "+and+\'" + parentFolder + "\'" + this.QINPARENTS + "+" + this.QLISTFIELDS, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

    public getFolderById(folder_id:string, authtoken:string): Observable<any> {
        return this.httpClient.get(this.API_URL + "/files/" + folder_id + this.QGETFIELDS, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

    public getFolderImages(parentFolder:string, authtoken: string): Observable<any>{
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + this.QIMAGEITEMS + "+and+\'" + parentFolder + "\'" + this.QINPARENTS + "+" + this.QLISTFIELDS, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

    public getRootId(authtoken:string){
        return this.httpClient.get(this.API_URL + "/files/root?fields=name%2C+id", {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

}