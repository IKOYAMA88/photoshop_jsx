﻿/********************************************************概要*********************************************************武器を書き出すjsxです。*********************************************************使い方*********************************************************【1】武器データは"アバターID.ai"にリネームし、1フォルダにまとめる。【2】illustratorを起動し、ファイル > スクリプト > その他のスクリプト から、このjsxを選択。【3】武器データの入っているディレクトリを選択すると、一斉に書き出される。【4】photoshopでリサイズし、gitにプッシュする。【注意】・アートボードのリネーム、削除、追加などを行うとうまく動きません。**********************************************************2013.12.23 IKOYAMA**********************************************************/var doc;var artBoards;var rootFolder ;var options = new ExportOptionsPNG24();    options.antiAliasing = true;    options.transparency = true;    options.artBoardClipping = true;    options.verticalScale = 100;    options.horizontalScale = 100;/********************************************************メイン処理********************************************************/main();function main(){    alert("武器のaiデータが入っているフォルダを選択してください");    rootFolder = Folder.selectDialog("フォルダ選択");    var fileList = new Array;    fileList = rootFolder.getFiles("*.ai");    for(var i=0; i<fileList.length; i++){        open(fileList[i]);        settingVar();                    for(var j=0; j<artBoards.length; j++){            artBoards.setActiveArtboardIndex(j);            saveFile();                    }        doc.close(SaveOptions.DONOTSAVECHANGES);        resetVar();    }}/********************************************************関数リスト********************************************************///いろんな変数に値を突っ込むfunction settingVar(){    doc = activeDocument;    artBoards = doc.artboards;}//いろんな変数の値をリセットfunction resetVar(){    doc = null;    artBoards = null;}//保存するfunction saveFile(){    var fileName;        var bool = true;    if(artBoards.length==1){        fileName = doc.name.split(".")[0];    }else if(artBoards.length==2){        fileName = doc.name.split(".")[0] + "_" + String(artBoards.getActiveArtboardIndex() + 1);    }else{         ("不明なアートボードがありました。書き出しをスキップします。");         bool = false;    }        if(bool){        var savePath = String(rootFolder + "/weapon/");        var saveFile = new File(savePath + fileName +".png");         var saveFolder = new Folder(savePath);        saveFolder.create();        doc.exportFile(saveFile,ExportType.PNG24,options);                     }}