class Ball:
	def __init__(self, vx=0.5,vy = 0.5):
		self.running = False
		self.x = 0
		self.y = 0
		self.vx = vx
		self.vy = vy

	def step(self):
		if self.x == 0:
			self.x += self.vx
		elif self.x == 5.0:
    		self.x -= self.vx
		self.y += self.vy

		print("Stepped to " + str(self.x) + "," + str(self.y))

	def run(self, steps = 50):
		if not self.running:
			self.running = 	True
			for s in range(steps):
    				self.step()
			self.running = False

b = Ball()
b.run()