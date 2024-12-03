from django.db import models

from django.db import models
from django.contrib.auth.models import User

class SavingsGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    target = models.DecimalField(max_digits=10, decimal_places=2)
    current = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    projected_completion = models.DateField()
    progress = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s goal: {self.name}"

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ref_id = models.CharField(max_length=50, unique=True)
    date = models.DateField()
    description = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.user.username}'s transaction: {self.description} on {self.date}"

class Budget(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    details = models.TextField()
    spending_limit = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.user.username}'s budget: {self.name}"

class UserFinancials(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    savings = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    income = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    expenses = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"{self.user.username}'s financials"
