(function () {
  'use strict';

  function getStatus(date, time) {
    if (!date || !time) return null;

    const target = new Date(date + 'T' + time + (time.length === 5 ? ':00' : ''));
    const now = new Date();

    const diff = target.getTime() - now.getTime();

    const tenMinutes = 10 * 60 * 1000;
    const thirtyMinutesOver = -30 * 60 * 1000;

    // 30分以上超過（架電漏れ）
    if (diff <= thirtyMinutesOver) {
      return 'over30';
    }

    // 10分前〜超過30分未満
    if (diff <= tenMinutes) {
      return 'alert';
    }

    return null;
  }

  kintone.events.on('app.record.index.show', function (event) {

    const records = event.records;
    const rows = document.querySelectorAll('.recordlist-row-gaia');

    records.forEach(function (record, index) {

      const date = record.日付_3 && record.日付_3.value;
      const time = record.時刻_1 && record.時刻_1.value;

      const status = getStatus(date, time);

      if (rows[index] && status) {

        if (status === 'alert') {
          // 10分前〜通常赤
          rows[index].style.backgroundColor = '#ffcccc';
          rows[index].style.fontWeight = 'bold';
        }

        if (status === 'over30') {
          // 30分超過（架電漏れ）
          rows[index].style.backgroundColor = '#ff6666';
          rows[index].style.color = '#ffffff';
          rows[index].style.fontWeight = 'bold';
        }

      }

    });

    return event;
  });

})();