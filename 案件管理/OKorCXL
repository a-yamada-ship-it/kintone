(function () {
  'use strict';

  kintone.events.on('app.record.detail.process.proceed', function (event) {

    var record = event.record;
    var nextStatus = event.nextStatus && event.nextStatus.value;

    // 現在日時を取得（UTCではなくブラウザ時間 = JST）
    var now = new Date();
    var formatted = now.toISOString().slice(0,19); // YYYY-MM-DDTHH:MM:SS

    // キャンセルまたはOK後キャンセル
    if (nextStatus === 'キャンセル' || nextStatus === 'OK後キャンセル') {
      if (!record['日時_1'].value) {
        record['日時_1'].value = formatted;
      }
    }

    // OKの場合
    if (nextStatus === 'OK') {
      if (!record['後確OK日時'].value) {
        record['後確OK日時'].value = formatted;
      }
    }

    return event;
  });

})();
