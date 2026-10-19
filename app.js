/* _blank — ссылки на оплату и Telegram. Меняется только блок CONFIG. */
const CONFIG = {
  // Многоразовая платёжная ссылка CloudPayments (2 990 ₽). Пока её нет, кнопки оплаты ведут в Telegram с текстом tgBookText
  payUrl: 'https://c.cloudpayments.ru/payments/049237990c2048cdb1b5d084e0a9be45',
  // Ник Telegram, куда пишут люди, без @ (личный аккаунт Гриши с Premium)
  tgUser: 'troechkin',
  // Подстановки в чат (см. content/telegram-setup.md)
  tgPaidText: 'Оплатил(а) место в первой волне _blank',
  tgQuestionText: 'Вопрос про _blank: ',
  tgBookText: 'Хочу место в первой волне _blank',
};

function tgLink(text) {
  return 'https://t.me/' + CONFIG.tgUser + '?text=' + encodeURIComponent(text);
}
var payHref = CONFIG.payUrl.indexOf('PLACEHOLDER') > -1 ? tgLink(CONFIG.tgBookText) : CONFIG.payUrl;
document.querySelectorAll('[data-pay]').forEach(function (a) { a.href = payHref; });
document.querySelectorAll('[data-tg-question]').forEach(function (a) { a.href = tgLink(CONFIG.tgQuestionText); });
document.querySelectorAll('[data-tg-paid]').forEach(function (a) { a.href = tgLink(CONFIG.tgPaidText); });
