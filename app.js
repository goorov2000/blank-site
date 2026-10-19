/* _blank — настройки и демонстрация в герое.
   Меняется только блок CONFIG. */
const CONFIG = {
  // Многоразовая платёжная ссылка CloudPayments (2 990 ₽)
  payUrl: 'https://PLACEHOLDER-cloudpayments-link',
  // Ник Telegram-аккаунта бренда без @
  tgUser: 'feelthe_blank',
  // Подстановки в чат (см. content/telegram-setup.md)
  tgPaidText: 'Оплатил(а) место в первой волне _blank',
  tgQuestionText: 'Вопрос про _blank: ',
};

function tgLink(text) {
  return 'https://t.me/' + CONFIG.tgUser + '?text=' + encodeURIComponent(text);
}
document.querySelectorAll('[data-pay]').forEach(function (a) { a.href = CONFIG.payUrl; });
document.querySelectorAll('[data-tg-question]').forEach(function (a) { a.href = tgLink(CONFIG.tgQuestionText); });
document.querySelectorAll('[data-tg-paid]').forEach(function (a) { a.href = tgLink(CONFIG.tgPaidText); });

/* Демо: печатаем запрос, футболка меняется */
(function () {
  var promptEl = document.getElementById('prompt');
  var tees = document.querySelectorAll('.tee svg');
  if (!promptEl || !tees.length) return;

  var steps = [
    { text: 'oversize, но укороченная', tee: 'b' },
    { text: 'низ изрезан, как будто сам порвал', tee: 'c' },
    { text: 'звёзды на левом плече, вышитые', tee: 'd' },
  ];
  var textEl = promptEl.querySelector('.text');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(id) {
    tees.forEach(function (s) { s.classList.toggle('on', s.dataset.tee === id); });
  }

  if (reduce) {
    textEl.textContent = steps[0].text;
    show(steps[0].tee);
    return;
  }

  var i = 0;
  function run() {
    var s = steps[i];
    var pos = 0;
    textEl.textContent = '';
    show('a');
    var typing = setInterval(function () {
      pos++;
      textEl.textContent = s.text.slice(0, pos);
      if (pos >= Math.ceil(s.text.length * 0.6)) show(s.tee);
      if (pos >= s.text.length) {
        clearInterval(typing);
        setTimeout(function () {
          i = (i + 1) % steps.length;
          run();
        }, 2200);
      }
    }, 48);
  }
  setTimeout(run, 600);
})();
