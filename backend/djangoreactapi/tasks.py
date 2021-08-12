from __future__ import absolute_import
from celery import Celery

app = Celery('tasks')

@app.task(bind=True)
def debug_task(self):
    return "This is an async task."
#
# result = debug_task.delay()