import time
import pygetwindow as gw
import pyautogui

# Задайте начальный URL
current_url = gw.getActiveWindow().title

# Установите таймаут (в секундах) для проверки изменений URL
timeout_seconds = 4

while True:
    # Подождите указанное количество секунд
    time.sleep(2)
    # Получите текущий URL
    new_url = gw.getActiveWindow().title

    # Вывести текущий и новый URL для дебага
    print(f"Текущий URL: {current_url}")
    print(f"Новый URL: {new_url}")

    # Если URL изменился, нажмите клавишу F
    if new_url != current_url:
        time.sleep(timeout_seconds)
        pyautogui.press('F')
        print("Нажата клавиша F")

        # Обновите текущий URL
        current_url = new_url
