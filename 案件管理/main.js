(function () {
  'use strict';

  kintone.events.on('app.record.create.show', function(event) {
    console.log("案件管理：レコード作成画面");
    return event;
  });

})();
