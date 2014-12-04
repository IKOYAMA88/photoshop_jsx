app.displayDialogs = DialogModes.NO; 
preferences.rulerUnits = Units.PIXELS;
/**********************************************************
//これはmypageのカードを書き出すjsxです。
//ファイル > スクリプト > 参照 からこのスクリプトを選択すると
//処理を実行します。
//wrote by IKOYAMA
**********************************************************/

/**********************************************************/
//ローカルリポジトリのパスを入力して下さい↓↓↓↓
/**********************************************************/
var root_sp = "/d/works/white/PurpleImage/smart/card/";
var root_fp = "/d/works/white/PurpleImage/feature/card/";

/**********************************************************/
//元ファイルが入っているフォルダのパスを入力して下さい↓↓↓↓
/**********************************************************/
var targetFolder = new Folder("~/Desktop/card/mypage/");

/**********************************************************/

var exportObj = [
//sp用
{path:root_sp +"mypage", width:640, quality:20},
]
var doc;
var fileList = [];
var tempList = targetFolder.getFiles("*.psd");

/**********************************************************/

exportObj.sort(function(a, b) {
	return (b.width - a.width);
});

getFolderObj();

for(var i=0; i<fileList.length; i++){
    open(fileList[i]);
    doc = activeDocument;
    //merge();
    for(var j=0; j <exportObj.length ; j++){
        saveForWeb(exportObj[j]);
    }
    doc.close(SaveOptions.DONOTSAVECHANGES);
}

/**********************************************************/

function getFolderObj(){
    if (targetFolder != null) {
        for (var i = 0; i < tempList.length; i++) {
            var obj = tempList[i];
            //if (/^\d{5}$/.test(obj.name.split(".")[0])) {
            if (1) {
                fileList.push(obj);
            }
        }
    } else {
        alert("psdファイルの入ったフォルダを選択してください。");
    }
}

function getName(_fileObj) {
    var di = (_fileObj.name).lastIndexOf("."); //　fileObj.nameの値で"."の位置を取得
    var name = (_fileObj.name).substr(0, di);
    return name;
}

function merge(){
    // 非表示レイヤーがあれば
    if (doc.layers.length > 1 ) {
        for ( var i = 0; i < doc.layers.length; i++ ) {
            if (doc.layers[i].visible == false ) {
                // 非表示レイヤーを削除
                doc.layers[i].remove();
                i--;
            }
        }
    }

    //レイヤーを結合
    if (doc.layers.length > 1 ) {
        doc.mergeVisibleLayers();
    }
}

function saveForWeb(_obj){
    doc.resizeImage(_obj.width,_obj.height);
    var savePath = _obj.path  + "/" + doc.name.split(".")[0]+ "0.jpg";
    var saveFile = new File(savePath);
     var jpgOpt = new ExportOptionsSaveForWeb();
     jpgOpt.format = SaveDocumentType.JPEG;
     jpgOpt.quality = _obj.quality;
     doc.exportDocument(saveFile,ExportType.SAVEFORWEB, jpgOpt);
}

//alert("mypage書き出し完了");