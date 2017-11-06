def my_abs(x):
	if x >= 0:
		return x
	else:
		return -x

import math

def quadratic(a, b, c):
	if a == 0 and b == 0:
		return 'x 无解'
	elif a == 0 and b != 0:
		x = -(c/b)
		return x
	else:
		d = (b*b) - (4*a*c)
		if d > 0:
			x = (-b + math.sqrt(d)) / (2*a)
			return x, y
		elif d== 0:
			x= -b/(2*a)
			return x, -x
		else:
			return '方程无实解'


