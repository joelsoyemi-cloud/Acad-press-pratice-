from selenium import webdriver
from selenium.webdriver.common.by import BY
from selenium.webdriver.common.keys import keys
import time

#open chrome

driver = webdriver.Chrome()
driver.get('https//web.whatappp.com')

print('scan QR code to login')
#time to scan QR code
time.sleep(20)

#find search box
search_box = driver.find_element(by.XPATH,"//drive[@contrnteditable='true']")
search_box.click()
#CHANGE THIS
search_box.send_keys('Friend Name')
search_box.send_keys(keys.ENTER)
time.sleep(2)
#message box

message_box=  driver.find_element(by.XPATH,"//drive[@contrnteditable='true']")[1]
message_box.click()
message_box.send_keys('Hello from python automation')
message_box.send_keys(keys.ENTER)
print('Message sent')
