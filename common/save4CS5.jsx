﻿//2014.02.20 IKOYAMA//illustrator用。CS6以上で保存されたファイルをCS4に変更して上書き保存するalert("aiファイルの入った【フォルダ】を選択して下さい");var folderObj = Folder.selectDialog("フォルダ選択");var fileList = new Array;fileList = folderObj.getFiles("*.ai");for(i = 0 ; i < fileList.length ;i++){　var fileObj = new File(fileList[i]);　open(fileObj);    var doc = activeDocument;    var newFile = new File(folderObj+"/"+doc.name);    var saveOptions = new IllustratorSaveOptions();    saveOptions.compatibility = Compatibility.ILLUSTRATOR15;    doc.saveAs(newFile,saveOptions);    doc.close();}alert("処理が完了しました");