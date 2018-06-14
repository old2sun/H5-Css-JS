class Student(object):
	def __init__(self):
		self.name = 'Michael'

	def __getattr__(self, attr):
		if attr == 'score':
			return 99
		if attr == 'age':
			return lambda: 25
		# raise AttributeError('\'Student\' object has no attribute \'%s\'' %attr)


s = Student()

class Chain(object):
	def __init__(self, path=''):
		self.__path = path

	def __getattr__(self, path):
		return Chain('%s/%s'%(self.__path, path))

	def __str__(self):
		return self.__path 

re = Chain().abc
print(re)