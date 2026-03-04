import os
import sys
#Welcome


print('Welcome to Synapse Builder')
print('***************')

sid = input('id #: ')

scontent = input('content: ')

sauthor = input('author: ')

saiscore = input('ai score: ')

surl = input('url: ')

synapsestr = '{ id: '+sid+', content: '+scontent+', author: '+sauthor+', ai_score: '+saiscore+', url: '+surl+'},'

print(synapsestr)

print('***************')

        
