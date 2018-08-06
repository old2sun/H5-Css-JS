import time, sys, queue
from multiprocessing.managers import BaseManager

class QueueManager(BaseManager):
	pass

QueueManager.register('get_task_queue')
QueueManager.register('get_result_queue')

server_addr = '127.0.0.1'
print('try to connect to server %s...' %server_addr)
m = QueueManager(address = (server_addr, 5000), authkey=b'abc')
m.connect()

task = m.get_task_queue()
result = m.get_result_queue()

for i in range(10):
	try:
		n = task.get(timeout = 1)
		print('we get %s' %n)
		print('now we calculate %s * %s' %(n, n))
		r = n*n
		time.sleep(1)
		result.put(r)
	except Queue.Empty:
		print('task_queue is empty, all work have done')

print('worker quit')