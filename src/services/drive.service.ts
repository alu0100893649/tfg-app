import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DriveService {
    private readonly API_URL: string = "https://www.googleapis.com/drive/v3";
    /*Con esto se pueden especificar las búsquedas. name+contains+NOMBRE DE LO QUE BUSQUE*/
    private readonly QNOTRASHEDROOT: string = "?q=trashed%3Dfalse"
    private readonly QFOLDERITEMS: string = "+and+mimeType+contains+\'folder\'"
    private readonly QINPARENTS: string = "+in+parents"
    private readonly QLISTFIELDS: string = "&fields=files(id%2Ckind%2CmimeType%2Cname%2Cparents%2CwebContentLink%2CwebViewLink)"
    private readonly QGETFIELDS: string = "?fields=id%2Ckind%2CmimeType%2Cname%2Cparents%2CwebContentLink%2CwebViewLink"

    private readonly QIMAGEITEMS: string = "+and+(mimeType+%3D+\'image%2Fjpeg\'+or+mimeType+%3D+\'image%2Fpng\')"
    private readonly QPARSEITEMS: string = "+and+(mimeType+%3D+\'text%2Fplain\'+or+mimeType+%3D+\'application%2Fvnd.google-apps.document\')"
    private readonly QAUDIOITEMS: string = "+and+(mimeType+%3D+\'audio%2Fmpeg\'+or+mimeType+%3D+\'audio%2Fwav\')"
    private readonly QMODULITEMS: string = "+and+(mimeType+%3D+\'application%2Fpdf\')"

    private readonly QALLSEARCH:string = "+and+(mimeType+%3D+\'image%2Fjpeg\'+or+mimeType+%3D+\'image%2Fpng\'" +
                                            "+or+mimeType+%3D+\'text%2Fplain\'+or+mimeType+%3D+\'application%2Fvnd.google-apps.document\'" +  
                                            "+or+mimeType+%3D+\'audio%2Fmpeg\'+or+mimeType+%3D+\'audio%2Fwav\'" +
                                            "+or+mimeType+%3D+\'application%2Fpdf\')"
                                            
    constructor(private httpClient: HttpClient) {
    
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

    public getFolderFilesByType(folder_id:string, type:string, authtoken:string){
        var FILETYPE:string = this.getTypeByName(type)
        return this.httpClient.get(this.API_URL + "/files" + this.QNOTRASHEDROOT + FILETYPE + "+and+\'" + folder_id + "\'" + this.QINPARENTS + "+" + this.QLISTFIELDS, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });   
    }

    public getTypeByName(type:string){
        if(type === 'legends' || type === 'characters' || type === 'generators'){
            return this.QPARSEITEMS
        } else if(type === 'modules'){
            return this.QMODULITEMS
        } else if(type === 'ambience'){
            return this.QAUDIOITEMS
        } else if(type === 'gallery'){
            return this.QIMAGEITEMS
        } else if(type === 'search'){
            return this.QALLSEARCH
        }
        return ''
    }

}