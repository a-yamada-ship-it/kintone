(function () {
  'use strict';

  kintone.events.on('app.record.detail.show', function(event) {
    console.log("対応用：詳細画面");
    return event;
  });

})();
