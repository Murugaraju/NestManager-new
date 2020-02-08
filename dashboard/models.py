from django.db import models

# Dashboard plugable app model design for NestManager.
class Pg(models.Model):
    name=models.CharField(max_length=200)
    location=models.CharField(max_length=2000,null=True,blank=True)
# yet to write attribute for the foreign key to the pg owner
    def __str__(self):
        return self.name



    
class Floor(models.Model):
    name=models.CharField(max_length=100)
    # default related name created by django is floor_set from Pg instance
    pg=models.ForeignKey(Pg,on_delete=models.CASCADE)

    def __str__(self):
        return self.name+' belongs to'+str(self.pg.name)

class Room(models.Model):
    number_or_name=models.CharField(max_length=100)
    share_type=models.IntegerField()
    vacancies=models.IntegerField()
    # default related name created by django is room_set from floor instance
    floor=models.ForeignKey(Floor,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.number_or_name