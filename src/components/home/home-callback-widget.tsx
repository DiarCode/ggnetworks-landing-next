"use client";

import Script from "next/script";
import { useEffect } from "react";

const CallbackWidget = () => {
  useEffect(() => {
    // Ensure callbackWidget is available globally
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).callbackWidget = {
      language: "RU",
      domain: "pbx.ggnet.kz",
      protocol: "https://",
      token: "2fe2d97d-915d-4e4d-abc8-123f7c267ba2",
      webSocket: {
        protocol: "wss://",
        path: "/ws",
        port: 8089,
      },
      text: {
        method: {
          RU: "Пожалуйста, выберите способ вызова",
          EN: "Please select a call method",
          KZ: "Қоңырау әдісін таңдаңыз",
        },
        webcall: {
          select: {
            RU: "Звонок из браузера",
            EN: "Call from browser",
            KZ: "Браузерден қоңырау шалу",
          },
          confirm: {
            RU: "Начать звонок из браузера",
            EN: "Start a call from browser",
            KZ: "Браузерден қоңырау шалу бастау",
          },
          alert: {
            RU: "Пожалуйста, убедитесь, что у вас подключен микрофон и наушники",
            EN: "Please make sure you have a microphone and headphones connected",
            KZ: "Микрофон мен құлақаспап қосылғанына көз жеткізіңіз",
          },
          dial: {
            RU: "Вызов в процессе",
            EN: "Call in progress",
            KZ: "Қоңырау орындалуда",
          },
          hangup: {
            RU: "Прекратить вызов",
            EN: "Hang up",
            KZ: "Қоңырауды аяқтау",
          },
          error: {
            RU: "Вызов не может быть установлен",
            EN: "The call cannot be established",
            KZ: "Қоңырауды орнату мүмкін емес",
          },
        },
        callback: {
          select: {
            RU: "Запросить звонок на мобильный",
            EN: "Request a mobile phone call",
            KZ: "Ұялы телефон қоңырауын сұраңыз",
          },
          info: {
            RU: "Введите Ваш номер телефона, мы перезвоним вам",
            EN: "Enter your phone number, we will call you back",
            KZ: "Телефон нөміріңізді енгізіңіз, біз сізге хабарласамыз",
          },
          button: {
            RU: "Позвоните мне!",
            EN: "Call me!",
            KZ: "Маған хабарласыңыз!",
          },
          result: {
            RU: "Ожидайте вызов",
            EN: "Waiting for a call",
            KZ: "Қоңырау күтіңіз",
          },
        },
      },
      close: true,
      phoneMask: {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
        placeholderChar: "_",
      },
      style: "RightBlue",
      enable: true,
      init: true,
      onHide: null, // Replace with your callback if needed
      onFormClose: null,
      onFormOpen: null,
    };
  }, []);

  return (
    <Script
      src="https://pbx.ggnet.kz/api/Callback/index.js"
      type="module"
      strategy="lazyOnload"
    />
  );
};

export default CallbackWidget;
