#!/usr/bin/env python
# vim:fileencoding=utf-8


from fabric.api import *

PROJECT_ROOT = '/home/gremlin/webapps/static/vivax'
PROJECT_SOURCE = 'git@github.com:artpropeller/vivax.git'

#noinspection PyRedeclaration
env.hosts = ['gremlin.webfactional.com']
env.user = 'gremlin'

def fu():
    with cd(PROJECT_ROOT):
        run('git pull')



